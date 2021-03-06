// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - deleting property of prototype causes
    prototype index property not to be visited on an Array
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return idx === 1;
}
var arr = [0, , 2];

Object.defineProperty(arr, "0", {
  get: function() {
    delete Array.prototype[1];
    return 0;
  },
  configurable: true
});

Array.prototype[1] = 1;

assert.sameValue(arr.some(callbackfn), false, 'arr.some(callbackfn)');
assert(accessed, 'accessed !== true');
