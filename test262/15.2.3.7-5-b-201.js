// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-201
description: >
    Object.defineProperties - 'get' property of 'descObj' is own
    accessor property without a get function (8.10.5 step 7.a)
---*/

var obj = {};

var descObj = {};

Object.defineProperty(descObj, "get", {
  set: function() {}
});

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
