// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to the Arguments object
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = ('[object Arguments]' === Object.prototype.toString.call(obj));
}

var obj = (function() {
  return arguments;
}("a", "b"));

Array.prototype.forEach.call(obj, callbackfn);

assert(result, 'result !== true');
