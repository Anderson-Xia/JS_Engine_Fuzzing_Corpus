// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-2
description: Object.defineProperties - 'descObj' is null (8.10.5 step 1)
---*/

var obj = {};
assert.throws(TypeError, function() {
  Object.defineProperties(obj, {
    prop: null
  });
});
assert.sameValue(obj.hasOwnProperty("prop"), false, 'obj.hasOwnProperty("prop")');
