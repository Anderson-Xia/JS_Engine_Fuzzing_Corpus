// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    No matter how control leaves the embedded 'Statement',
    the scope chain is always restored to its former state
es5id: 12.10_A3.2_T2
description: >
    Declaring "with" statement within a function body, leading to
    normal completion by "return"
flags: [noStrict]
---*/

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

var f = function(){
    with(myObj){
        p1 = 'x1';
        return value;
    }
};

f();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
    throw new Test262Error('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 !== "x1"){
    throw new Test262Error('#1: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////
