function test() {
  var constructors = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];
  var constructor = Object.getPrototypeOf(Int8Array);
  var prototype = Object.getPrototypeOf(Int8Array.prototype);

  for (var i = 0; i < constructors.length; i += 1) {
    if (!(constructors[i] in this && Object.getPrototypeOf(this[constructors[i]]) === constructor && Object.getPrototypeOf(this[constructors[i]].prototype) === prototype && Object.getOwnPropertyNames(this[constructors[i]].prototype).sort() + '' === "BYTES_PER_ELEMENT,constructor")) {
      return false;
    }
  }

  return true;
}

if (!test()) {
  throw new Error("Test failed");
}
