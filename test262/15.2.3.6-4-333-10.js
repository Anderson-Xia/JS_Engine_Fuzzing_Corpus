// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-333-10
description: >
    ES5 Attributes - indexed data property 'P' with attributes
    [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: false
    is writable using simple assignment, 'O' is an Arguments object
---*/

var obj = (function() {
  return arguments;
}());

Object.defineProperty(obj, "0", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: false
});
var verifyValue = (obj[0] === 2010);
obj[0] = 1001;

assert(verifyValue, 'verifyValue !== true');
assert.sameValue(obj[0], 1001, 'obj[0]');
