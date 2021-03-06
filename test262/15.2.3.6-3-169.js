// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-169
description: >
    Object.defineProperty - 'Attributes' is a Number object that uses
    Object's [[Get]] method to access the 'writable' property  (8.10.5
    step 6.a)
---*/

var obj = {};

var numObj = new Number(-2);

numObj.writable = true;

Object.defineProperty(obj, "property", numObj);

var beforeWrite = obj.hasOwnProperty("property");

obj.property = "isWritable";

var afterWrite = (obj.property === "isWritable");

assert.sameValue(beforeWrite, true, 'beforeWrite');
assert.sameValue(afterWrite, true, 'afterWrite');
