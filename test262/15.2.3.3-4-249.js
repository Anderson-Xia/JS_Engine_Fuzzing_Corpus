// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-249
description: >
    Object.getOwnPropertyDescriptor - returned object contains the
    property 'set' if the value of property 'set' is not explicitly
    specified when defined by Object.defineProperty.
---*/

var obj = {};
Object.defineProperty(obj, "property", {
  get: function() {},
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, "property");

assert("set" in desc, '"set" in desc !== true');
