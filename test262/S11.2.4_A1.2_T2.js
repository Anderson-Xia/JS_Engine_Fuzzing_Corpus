// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Arguments : (ArgumentList)"
es5id: 11.2.4_A1.2_T2
description: Function is declared with FormalParameterList
---*/

var f_arg = function(x,y) {
  return arguments;
}

//CHECK#1
if (f_arg(1,2,3).length !== 3) {
  throw new Test262Error('#1: f_arg = function(x,y) {return arguments;} f_arg(1,2,3).length === 3. Actual: ' + (f_arg(1,2,3).length));
}

//CHECK#2
if (f_arg(1)[0] !== 1) {
  throw new Test262Error('#1: f_arg = function(x,y) {return arguments;} f_arg(1)[0] === 1. Actual: ' + (f_arg(1)[0]));
}

//CHECK#3
if (f_arg(1,2)[1] !== 2) {
  throw new Test262Error('#3: f_arg = function(x,y) {return arguments;} f_arg(1,2)[1] === 2. Actual: ' + (f_arg(1,2)[1]));
}

//CHECK#4
if (f_arg(1,2,3)[2] !== 3) {
  throw new Test262Error('#4: f_arg = function(x,y) {return arguments;} f_arg(1,2,3)[2] === 3. Actual: ' + (f_arg(1,2,3)[2]));
}

//CHECK#5
if (f_arg(1,2,3)[3] !== undefined) {
  throw new Test262Error('#5: f_arg = function(x,y) {return arguments;} f_arg(1,2,3)[3] === undefined. Actual: ' + (f_arg(1,2,3)[3]));
}

//CHECK#6
if (f_arg.length !== 2) {
  throw new Test262Error('#6: f_arg = function(x,y) {return arguments;} f_arg.length === 2. Actual: ' + (f_arg.length));
}
