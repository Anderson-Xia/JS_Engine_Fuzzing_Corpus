// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.11
description: Behavior when error thrown while executing match for empty string
info: |
    [...]
    22. If size = 0, then
        a. Let z be RegExpExec(splitter, S).
        b. ReturnIfAbrupt(z).
features: [Symbol.split, Symbol.species]
---*/

var obj = {
  constructor: function() {}
};
obj.constructor[Symbol.species] = function() {
  return {
    exec: function() {
      throw new Test262Error();
    }
  };
};

assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.split].call(obj, '');
});
