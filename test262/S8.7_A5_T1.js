// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Delete unary operator can't delete object to be referenced
es5id: 8.7_A5_T1
description: Delete referenced object, var __ref = obj
flags: [noStrict]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof(__ref) !== "undefined"){
    throw new Test262Error('#1: typeof(__ref) === "undefined". Actual: ' + (typeof(__ref)));
};
//
//////////////////////////////////////////////////////////////////////////////

var obj = new Object();
var __ref = obj;

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof(__ref) === "undefined"){
    throw new Test262Error('#2: obj = new Object(); var __ref = obj; typeof(__ref) !== "undefined"');
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (delete __ref !== false){
    throw new Test262Error('#3: obj = new Object(); var __ref = obj; delete __ref === false. Actual: ' + (delete __ref));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (typeof(__ref) !== "object"){
    throw new Test262Error('#4: obj = new Object(); var __ref = obj; delete __ref; typeof(__ref) === "object". Actual: ' + (typeof(__ref)));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (typeof(obj) !== "object"){
    throw new Test262Error('#5: obj = new Object(); var __ref = obj; delete __ref; typeof(obj) === "object". Actual: ' + (typeof(obj)));
};
//
//////////////////////////////////////////////////////////////////////////////
