// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-75
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    own data property (8.10.5 step 4.a)
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  configurable: true
});

var beforeDeleted = obj.hasOwnProperty("property");

delete obj.property;

var afterDeleted = obj.hasOwnProperty("property");

assert.sameValue(beforeDeleted, true, 'beforeDeleted');
assert.sameValue(afterDeleted, false, 'afterDeleted');
