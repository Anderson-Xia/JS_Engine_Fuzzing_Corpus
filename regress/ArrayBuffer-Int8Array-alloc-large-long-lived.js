//@ skip
var array = new Array(10000);

for (var i = 0; i < 100000; ++i) {
  array[i % array.length] = new Int8Array(new ArrayBuffer(1000));
}

for (var i = 0; i < array.length; ++i) {
  if (array[i].length != 1000) {
    throw "Error: bad length: " + array[i].length;
  }

  if (array[i].buffer.byteLength != 1000) {
    throw "Error: bad buffer.byteLength: " + array[i].buffer.byteLength;
  }
}
