// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.2_A12
description: >
    The Function.prototype.toString function is not generic; it throws
    a TypeError exception if its this value is not a callable object.
---*/

assert.throws(TypeError, function() {
  Function.prototype.toString.call(undefined);
}, 'Function.prototype.toString.call(undefined) throws a TypeError exception');
