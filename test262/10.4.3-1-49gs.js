// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-49gs
description: >
    Strict - checking 'this' from a global scope (FunctionExpression
    with a strict directive prologue defined within a
    FunctionExpression)
flags: [noStrict]
---*/

var global = this;

var f1 = function () {
    var f = function () {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}
