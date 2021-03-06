// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-0-2
description: >
    Object.preventExtensions must exist as a function taking 1
    parameter
---*/

assert.sameValue(Object.preventExtensions.length, 1, 'Object.preventExtensions.length');
