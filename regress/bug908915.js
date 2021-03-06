// |jit-test| error: 42
// Suppress the large quantity of output on stdout (eg from calling
// dumpHeap()).
var blacklist = {
  'quit': true,
  'crash': true,
  'readline': true,
  'terminate': true,
  'nestedShell': true,
  'nukeAllCCWs': true
};

function f(y) {
  ;
}

for (let e of Object.values(newGlobal())) {
  if (e.name in blacklist) {
    continue;
  }

  print(e.name);

  try {
    e();
  } catch (r) {
    ;
  }
}

(function () {
  arguments;

  if (globalPrototypeChainIsMutable()) {
    Object.prototype.__proto__ = newGlobal();
  }

  function f(y) {
    y();
  }

  var arr = [];
  arr.__proto__ = newGlobal();

  for (b of Object.values(arr)) {
    if (b.name in blacklist) {
      continue;
    }

    try {
      f(b);
    } catch (e) {
      ;
    }
  }
})();

throw 42;
