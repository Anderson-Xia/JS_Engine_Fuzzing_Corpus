// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is greater than 0 but less than 1, Math.floor(x) is +0
es5id: 15.8.2.9_A6
description: >
    Checking if Math.floor(x) is +0, where x is greater than 0 but
    less than 1
---*/

assert.sameValue(Math.floor(0.000000000000001), 0, "0.000000000000001");
assert.sameValue(Math.floor(0.999999999999999), 0, "0.999999999999999");
assert.sameValue(Math.floor(0.5), 0, "0.5");
