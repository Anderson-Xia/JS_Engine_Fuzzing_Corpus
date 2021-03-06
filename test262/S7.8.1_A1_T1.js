// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Literal :: NullLiteral"
es5id: 7.8.1_A1_T1
description: Check null === null
---*/

//CHECK#1
if (null !== null) {
  throw new Test262Error('#1: null === null');
}
