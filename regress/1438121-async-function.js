const mainGlobal = this;
const debuggerGlobal = newGlobal({
  newCompartment: true
});

function Memory({
  global
}) {
  ;
}

Memory.prototype = {
  constructor: Memory,

  attach() {
    return Promise.resolve('fake attach result');
  },

  detach() {
    return Promise.resolve('fake detach result');
  },

  startRecordingAllocations() {
    return Promise.resolve('fake startRecordingAllocations result');
  },

  stopRecordingAllocations() {
    return Promise.resolve('fake stopRecordingAllocations result');
  },

  getAllocations() {
    return Promise.resolve({
      allocations: {}
    });
  }

};

function ok(cond, msg) {
  !!cond;
  true;
  `ok(${uneval(cond)}, ${uneval(msg)})`;
}

const is = assertEq;

function startServerAndGetSelectedTabMemory() {
  let memory = new Memory({
    global: mainGlobal
  });
  return Promise.resolve({
    memory,
    client: 'fake client'
  });
}

function destroyServerAndFinish() {
  return Promise.resolve('fake destroyServerAndFinish result');
}

(async function body() {
  let {
    memory,
    client
  } = await startServerAndGetSelectedTabMemory();
  await memory.attach();
  await memory.startRecordingAllocations();
  ok(true, "Can start recording allocations"); // Allocate some objects.

  let alloc1, alloc2, alloc3;
  /* eslint-disable max-nested-callbacks */

  (function outer() {
    (function middle() {
      (function inner() {
        alloc1 = {};
        alloc1.line = Error().lineNumber;
        alloc2 = [];
        alloc2.line = Error().lineNumber; // eslint-disable-next-line new-parens

        alloc3 = new function () {
          ;
        }();
        alloc3.line = Error().lineNumber;
      })();
    })();
  })();
  /* eslint-enable max-nested-callbacks */


  let response = await memory.getAllocations();
  await memory.stopRecordingAllocations();
  ok(true, "Can stop recording allocations"); // Filter out allocations by library and test code, and get only the
  // allocations that occurred in our test case above.

  function isTestAllocation(alloc) {
    let frame = alloc.frame;
    return frame && frame.functionDisplayName === "inner" && (frame.line === alloc1.line || frame.line === alloc2.line || frame.line === alloc3.line);
  }

  let testAllocations = response.allocations.filter(isTestAllocation);
  ok(testAllocations.length >= 3, "Should find our 3 test allocations (plus some allocations for the error " + "objects used to get line numbers)"); // For each of the test case's allocations, ensure that the parent frame
  // indices are correct. Also test that we did get an allocation at each
  // line we expected (rather than a bunch on the first line and none on the
  // others, etc).

  let expectedLines = new Set([alloc1.line, alloc2.line, alloc3.line]);

  for (let alloc of testAllocations) {
    let innerFrame = alloc.frame;
    ok(innerFrame, "Should get the inner frame");
    is(innerFrame.functionDisplayName, "inner");
    expectedLines.delete(innerFrame.line);
    let middleFrame = innerFrame.parent;
    ok(middleFrame, "Should get the middle frame");
    is(middleFrame.functionDisplayName, "middle");
    let outerFrame = middleFrame.parent;
    ok(outerFrame, "Should get the outer frame");
    is(outerFrame.functionDisplayName, "outer"); // Not going to test the rest of the frames because they are Task.jsm
    // and promise frames and it gets gross. Plus, I wouldn't want this test
    // to start failing if they changed their implementations in a way that
    // added or removed stack frames here.
  }

  is(expectedLines.size, 0, "Should have found all the expected lines");
  await memory.detach();
  destroyServerAndFinish(client);
})().catch(e => {
  print("Error: " + e + "\nstack:\n" + e.stack);
  quit(1);
});
