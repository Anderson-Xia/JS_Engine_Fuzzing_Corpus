// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Do-While Statement for automatic semicolon insertion
es5id: 7.9_A9_T8
description: Execute do {}; \n while(false)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

//CHECK#1
do {};
while (false)
