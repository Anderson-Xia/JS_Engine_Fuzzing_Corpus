// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-172
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Configurable]] attribute of
    own accessor property with large index named in 'O' that overrides
    inherited data property can stop deleting index named properties
    (15.4.5.1 step 3.l.ii)
---*/

var arr = [0, 1];

assert.throws(TypeError, function() {
  Object.defineProperty(arr, "1", {
    get: function() {
      return 2;
    },
    configurable: false
  });

  Array.prototype[1] = 3;

  Object.defineProperties(arr, {
    length: {
      value: 1
    }
  });
});
assert.sameValue(arr.length, 2, 'arr.length');
assert(arr.hasOwnProperty("1"), 'arr.hasOwnProperty("1") !== true');
assert.sameValue(arr[0], 0, 'arr[0]');
assert.sameValue(arr[1], 2, 'arr[1]');
