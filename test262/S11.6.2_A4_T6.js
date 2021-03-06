// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x - y produces the same result as x + (-y)
es5id: 11.6.2_A4_T6
description: >
    Using the rule of sum of a zero and a nonzero finite value and the
    fact that a - b = a + (-b)
---*/

//CHECK#1
if (1 - -0 !== 1 ) {  
  throw new Test262Error('#1: 1 - -0 === 1. Actual: ' + (1 - -0));
}

//CHECK#2
if (1 - 0 !== 1 ) {  
  throw new Test262Error('#2: 1 - 0 === 1. Actual: ' + (1 - 0));
} 

//CHECK#3
if (-0 - 1 !== -1 ) {  
  throw new Test262Error('#3: -0 - 1 === -1. Actual: ' + (-0 - 1));
}

//CHECK#4
if (0 - 1 !== -1 ) {  
  throw new Test262Error('#4: 0 - 1 === -1. Actual: ' + (0 - 1));
} 

//CHECK#5
if (Number.MAX_VALUE - -0 !== Number.MAX_VALUE ) {  
  throw new Test262Error('#5: Number.MAX_VALUE - -0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE - -0));
}

//CHECK#6
if (Number.MAX_VALUE - 0 !== Number.MAX_VALUE ) {  
  throw new Test262Error('#6: Number.MAX_VALUE - 0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE - 0));
} 

//CHECK#7
if (-0 - Number.MIN_VALUE !== -Number.MIN_VALUE ) {  
  throw new Test262Error('#7: -0 - Number.MIN_VALUE === -Number.MIN_VALUE. Actual: ' + (-0 - Number.MIN_VALUE));
}

//CHECK#8
if (0 - Number.MIN_VALUE !== -Number.MIN_VALUE ) {  
  throw new Test262Error('#8: 0 - Number.MIN_VALUE === -Number.MIN_VALUE. Actual: ' + (0 - Number.MIN_VALUE));
}
