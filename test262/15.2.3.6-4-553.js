// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-553
description: >
    ES5 Attributes - success to update [[Set]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
---*/

var obj = {};

var getFunc = function() {
  return 1001;
};

var verifySetFunc = "data";
var setFunc = function(value) {
  verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: setFunc,
  enumerable: false,
  configurable: true
});

var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

Object.defineProperty(obj, "prop", {
  set: undefined
});

var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

assert.sameValue(desc1.set, setFunc, 'desc1.set');
assert.sameValue(typeof desc2.set, "undefined", 'typeof desc2.set');
