// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.prototype.propertyIsEnumerable with symbol and @@toPrimitive conversion
info: |
  19.1.3.4 Object.prototype.propertyIsEnumerable ( V )

  1. Let P be ToPropertyKey(V).
  2. ReturnIfAbrupt(P).
  ...
es6id: 19.1.3.4
features: [Symbol.toPrimitive]
---*/

var obj = {};
var sym = Symbol();

var callCount = 0;
var wrapper = {};
wrapper[Symbol.toPrimitive] = function() {
  callCount += 1;
  return sym;
};

obj[sym] = 0;

assert.sameValue(
  obj.propertyIsEnumerable(wrapper),
  true,
  "Returns true if symbol own enumerable property found"
);

assert.sameValue(callCount, 1, "toPrimitive method called exactly once");
