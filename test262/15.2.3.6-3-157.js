// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-157
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is own
    data property that overrides an inherited accessor property
    (8.10.5 step 6.a)
---*/

var obj = {};

var proto = {};
Object.defineProperty(proto, "writable", {
  get: function() {
    return false;
  }
});

var ConstructFun = function() {};
ConstructFun.prototype = proto;

var child = new ConstructFun();
Object.defineProperty(child, "writable", {
  value: true
});

Object.defineProperty(obj, "property", child);

var beforeWrite = obj.hasOwnProperty("property");

obj.property = "isWritable";

var afterWrite = (obj.property === "isWritable");

assert.sameValue(beforeWrite, true, 'beforeWrite');
assert.sameValue(afterWrite, true, 'afterWrite');
