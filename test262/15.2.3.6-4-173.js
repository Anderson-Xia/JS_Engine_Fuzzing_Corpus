// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-173
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Configurable]] attribute of
    own data property with large index named in 'O' that overrides an
    inherited accessor property can stop deleting index named
    properties (15.4.5.1 step 3.l.ii)
---*/

var arrObj = [0, 1];

assert.throws(TypeError, function() {
  Object.defineProperty(arrObj, "1", {
    configurable: false
  });

  Object.defineProperty(Array.prototype, "1", {
    get: function() {
      return 2;
    },
    configurable: true
  });

  Object.defineProperty(arrObj, "length", {
    value: 1
  });
});
assert.sameValue(arrObj.length, 2, 'arrObj.length');
assert(arrObj.hasOwnProperty("1"), 'arrObj.hasOwnProperty("1") !== true');
