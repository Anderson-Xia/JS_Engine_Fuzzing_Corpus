// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-241
description: >
    Object.defineProperties - 'descObj' is a String object which
    implements its own [[Get]] method to get 'set' property (8.10.5
    step 8.a)
---*/

var data = "data";
var descStr = new String();
var setFun = function(value) {
  data = value;
};

descStr.prop = {
  set: setFun
};

var obj = {};
Object.defineProperties(obj, descStr);
obj.prop = "strData";

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(data, "strData", 'data');
