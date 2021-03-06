// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
    The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied
es5id: 15.5.2.1_A1_T12
description: >
    Creating string object with "new String(function object)", after
    changing the function object toString property, which causes
    exception throw
---*/

var __obj = {
  toString: function() {
    throw "intostr"
  }
};

__obj.valueOf = function() {
  return true
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var __str = new String(__obj);
  throw new Test262Error('#1: var __obj = {toString:function(){throw "intostr"}}; __str = new String(__obj) lead throwing exception');
} catch (e) {
  if (e !== "intostr") {
    throw new Test262Error('#1.1: e==="intostr". Actual: e===' + e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
