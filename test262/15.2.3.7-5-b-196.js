// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-196
description: >
    Object.defineProperties - 'get' property of 'descObj' is own data
    property that overrides an inherited accessor property (8.10.5
    step 7.a)
---*/

var obj = {};

var proto = {};

Object.defineProperty(proto, "get", {
  get: function() {
    return function() {
      return "inheritedAccessorProperty";
    };
  }
});

var Con = function() {};
Con.prototype = proto;

var descObj = new Con();

Object.defineProperty(descObj, "get", {
  value: function() {
    return "ownDataProperty";
  }
});

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "ownDataProperty", 'obj.property');
