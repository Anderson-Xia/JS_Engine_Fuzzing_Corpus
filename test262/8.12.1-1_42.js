// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_42
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    inherited setter property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  }
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
