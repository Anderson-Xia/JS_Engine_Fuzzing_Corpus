// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - Number object can be used as thisArg
---*/

var objNumber = new Number();

function callbackfn(val, idx, obj) {
  return this === objNumber;
}

var testResult = [11].map(callbackfn, objNumber);

assert.sameValue(testResult[0], true, 'testResult[0]');
