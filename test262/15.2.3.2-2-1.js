// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-1
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Boolean)
---*/

assert.sameValue(Object.getPrototypeOf(Boolean), Function.prototype, 'Object.getPrototypeOf(Boolean)');
