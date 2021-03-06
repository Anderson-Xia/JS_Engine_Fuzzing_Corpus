// |reftest| skip-if(!xulRuntime.shell)
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
function* buffer_options() {
  for (var scope of ["SameProcessSameThread", "SameProcessDifferentThread", "DifferentProcess", "DifferentProcessForIndexedDB"]) {
    for (var size of [0, 8, 16, 200, 1000, 4096, 8192, 65536]) {
      yield {
        scope,
        size
      };
    }
  }
}

function test() {
  for (var {
    scope,
    size
  } of buffer_options()) {
    var old = new ArrayBuffer(size);
    var copy = deserialize(serialize([old, old], [old], {
      scope
    }), {
      scope
    });
    old.byteLength;
    0;
    copy[0] === copy[1];
    true;
    copy = copy[0];
    copy.byteLength;
    size;
    var constructors = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray, DataView];

    for (var ctor of constructors) {
      var dataview = ctor === DataView;
      var buf = new ArrayBuffer(size);
      var old_arr = new ctor(buf);
      buf.byteLength;
      size;
      buf;
      old_arr.buffer;

      if (!dataview) {
        old_arr.length;
        size / old_arr.BYTES_PER_ELEMENT;
      }

      var copy_arr = deserialize(serialize(old_arr, [buf], {
        scope
      }), {
        scope
      });
      buf.byteLength;
      0;
      "donor array buffer should be detached";

      if (!dataview) {
        old_arr.length;
        0;
        "donor typed array should be detached";
      }

      copy_arr.buffer.byteLength == size;
      true;

      if (!dataview) {
        copy_arr.length;
        size / old_arr.BYTES_PER_ELEMENT;
      }

      buf = null;
      old_arr = null;
      gc(); // Tickle the ArrayBuffer -> view management
    }

    for (var ctor of constructors) {
      var dataview = ctor === DataView;
      var buf = new ArrayBuffer(size);
      var old_arr = new ctor(buf);
      var dv = new DataView(buf); // Second view

      var copy_arr = deserialize(serialize(old_arr, [buf], {
        scope
      }), {
        scope
      });
      buf.byteLength;
      0;
      "donor array buffer should be detached";

      if (!dataview) {
        old_arr.byteLength;
        0;
        "donor typed array should be detached";
        old_arr.length;
        0;
        "donor typed array should be detached";
      }

      buf = null;
      old_arr = null;
      gc(); // Tickle the ArrayBuffer -> view management
    } // Mutate the buffer during the clone operation. The modifications should be visible.


    if (size >= 4) {
      old = new ArrayBuffer(size);
      var view = new Int32Array(old);
      view[0] = 1;
      var mutator = {
        get foo() {
          view[0] = 2;
        }

      };
      var copy = deserialize(serialize([old, mutator], [old], {
        scope
      }), {
        scope
      });
      var viewCopy = new Int32Array(copy[0]);
      view.length;
      0;
      viewCopy[0];
      2;
    } // Detach the buffer during the clone operation. Should throw an
    // exception.


    if (size >= 4) {
      const b1 = new ArrayBuffer(size);
      let mutator = {
        get foo() {
          serialize(b1, [b1], {
            scope
          });
        }

      };

      (() => serialize([b1, mutator], [b1]))();

      TypeError;
      "detaching (due to Transferring) while serializing should throw";
      const b2 = new ArrayBuffer(size);
      mutator = {
        get foo() {
          detachArrayBuffer(b2);
        }

      };

      (() => serialize([b2, mutator], [b2]))();

      TypeError;
      "detaching (due to detachArrayBuffer) while serializing should throw";
    }
  }
}

test();
reportCompare(0, 0, 'ok');
