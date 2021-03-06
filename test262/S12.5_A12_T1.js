// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Embedded "if/else" constructions are allowed
es5id: 12.5_A12_T1
description: Using embedded "if/else" into "if/else" constructions
---*/

//CHECK# 1
if(true)
  if (false)
    throw new Test262Error('#1.1: At embedded "if/else" constructions engine must select right branches');
  else
    ;
else 
  if (true)
    throw new Test262Error('#1.2: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#1.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 2
if(true)
  if (true)
    ;
  else
    throw new Test262Error('#2.1: At embedded "if/else" constructions engine must select right branches');
else 
  if (true)
    throw new Test262Error('#2.2: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#2.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 3
if(false)
  if (true)
    throw new Test262Error('#3.1: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#3.2: At embedded "if/else" constructions engine must select right branches');
else 
  if (true)
    ;
  else
    throw new Test262Error('#3.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 4
if(false)
  if (true)
    throw new Test262Error('#4.1: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#4.2: At embedded "if/else" constructions engine must select right branches');
else 
  if (false)
    throw new Test262Error('#4.3: At embedded "if/else" constructions engine must select right branches');
  else
    ;
