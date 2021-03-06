// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-298
description: >
    Object.create - 'set' property of one property in 'Properties' is
    a function (8.10.5 step 8.b)
---*/

var data = "data";

var newObj = Object.create({}, {
  prop: {
    set: function(value) {
      data = value;
    }
  }
});

newObj.prop = "overrideData";

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
assert.sameValue(data, "overrideData", 'data');
