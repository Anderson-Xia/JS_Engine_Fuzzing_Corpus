// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-performeval
es5id: 10.4.2.1-4-s
description: >
    Non-stict mode direct eval code cannot instantiate functions in the
    variable environment of the caller
flags: [noStrict]
---*/

var typeofInside;

(function() {
  eval('function fun() {}');
  typeofInside = typeof fun;
}());

assert.sameValue(typeofInside, 'function');
assert.sameValue(typeof fun, 'undefined');
