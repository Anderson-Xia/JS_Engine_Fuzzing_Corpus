// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-329
description: >
    ES5 Attributes - success to update [[Writable]] attribute of data
    property ([[Writable]] is true, [[Enumerable]] is true,
    [[Configurable]] is true) to different value
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: true
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

Object.defineProperty(obj, "prop", {
  writable: false
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc1.writable, true, 'desc1.writable');
assert.sameValue(obj.prop, 2010, 'obj.prop');
assert.sameValue(desc2.writable, false, 'desc2.writable');
