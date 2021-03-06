// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-52gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Injected getter defined within strict mode)
flags: [onlyStrict]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    gNonStrict();
  }
});

assert.throws(TypeError, function() {
  o.foo;
});

function gNonStrict() {
  return gNonStrict.caller;
}
