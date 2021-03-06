// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-1-4
description: Object.create throws TypeError if 'O' is a number primitive
---*/


assert.throws(TypeError, function() {
  Object.create(2);
});
