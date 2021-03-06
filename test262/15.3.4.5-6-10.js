// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-10
description: >
    Function.prototype.bind - F can get own accessor property without
    a get function that overrides an inherited accessor property
---*/

var foo = function() {};

var obj = foo.bind({});

Object.defineProperty(Function.prototype, "property", {
  get: function() {
    return 3;
  },
  configurable: true
});

Object.defineProperty(obj, "property", {
  set: function() {}
});

assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
