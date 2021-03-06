// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-22
description: Array.prototype.every - boolean primitive can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === false;
}

assert([11].every(callbackfn, false), '[11].every(callbackfn, false) !== true');
assert(accessed, 'accessed !== true');
