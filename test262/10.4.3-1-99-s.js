// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-99-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.bind(globalObject)())
flags: [noStrict]
---*/

var global = this;
function f() { return this===global;};
assert((function () {"use strict"; return f.bind(global)();})());
