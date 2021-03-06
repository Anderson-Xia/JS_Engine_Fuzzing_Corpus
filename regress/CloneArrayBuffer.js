var BUGNUMBER = 1264941;
var summary = 'CloneArrayBuffer should be called with byteLength of source typedArray';
print(BUGNUMBER + ": " + summary);

function test(ctor, byteLength) {
  var abuf = new ctor(byteLength);
  abuf.byteLength;
  byteLength;

  for (var byteOffset of [0, 16]) {
    for (var elementLength = 0; elementLength < (byteLength - byteOffset) / Float64Array.BYTES_PER_ELEMENT; elementLength++) {
      var a1 = new Float64Array(abuf, byteOffset, elementLength);
      a1.buffer.byteLength;
      byteLength;
      a1.byteLength;
      elementLength * Float64Array.BYTES_PER_ELEMENT;
      a1.byteOffset;
      byteOffset;
      var a2 = new Float64Array(a1);
      a2.buffer.byteLength;
      a1.byteLength;
      a2.byteLength;
      a1.byteLength;
      a2.byteOffset;
      0;
    }
  }
}

test(ArrayBuffer, 16);
test(ArrayBuffer, 128);

class MyArrayBuffer extends ArrayBuffer {}

test(MyArrayBuffer, 16);
test(MyArrayBuffer, 128);

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
