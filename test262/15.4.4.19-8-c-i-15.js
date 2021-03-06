// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - element to be retrieved is inherited
    accessor property on an Array-like object
---*/

var kValue = "abc";

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}

var proto = {
  length: 2
};

Object.defineProperty(proto, "0", {
  get: function() {
    return kValue;
  },
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();

var testResult = Array.prototype.map.call(child, callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');
