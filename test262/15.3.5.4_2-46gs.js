// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-46gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (FunctionExpression with a strict directive
    prologue defined within an Anonymous FunctionExpression)
flags: [noStrict]
---*/

assert.throws(TypeError, function() {
  (function() {
    var f = function() {
      "use strict";
      gNonStrict();
    }
    return f();
  })();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
