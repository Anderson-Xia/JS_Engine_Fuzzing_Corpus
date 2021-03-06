// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-5
description: >
    Object.defineProperties - argument 'Properties' is any interesting
    number
---*/

var obj = {
  "123": 100
};
var obj1 = Object.defineProperties(obj, -12);

assert.sameValue(obj, obj1, 'obj');
