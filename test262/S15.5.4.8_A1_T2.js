// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.lastIndexOf(searchString, position)
es5id: 15.5.4.8_A1_T2
description: >
    Arguments are boolean equation, function and null, and instance is
    Boolean object
---*/

var __instance = new Boolean;

__instance.lastIndexOf = String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.lastIndexOf("A" !== "\u0041", function() {
    return 0;
  }(), null) !== 0) {
  throw new Test262Error('#1: __instance = new Boolean; __instance.lastIndexOf = String.prototype.lastIndexOf;  __instance.lastIndexOf("A"!=="\\u0041", function(){return 0;}(),null) === 0. Actual: ' + __instance.lastIndexOf("A" !== "\u0041", function() {
    return 0;
  }(), null));
}
//
//////////////////////////////////////////////////////////////////////////////
