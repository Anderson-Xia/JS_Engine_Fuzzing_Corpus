// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.11
description: >
    Behavior when error thrown while coercing `lastIndex` property of splitter
    after a match
info: |
    [...]
    24. Repeat, while q < size
        a. Let setStatus be Set(splitter, "lastIndex", q, true).
        [...]
        c. Let z be RegExpExec(splitter, S).
        [...]
        f. Else z is not null,
           i. Let e be ToLength(Get(splitter, "lastIndex")).
           ii. ReturnIfAbrupt(e).
features: [Symbol.split, Symbol.species]
---*/

var badLastIndex;
var obj = {
  constructor: function() {}
};
var fakeRe = {
  set lastIndex(_) {},
  get lastIndex() {
    return badLastIndex;
  },
  exec: function() {
    return [];
  }
};
obj.constructor[Symbol.species] = function() {
  return fakeRe;
};

badLastIndex = Symbol.split;
assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(obj, 'abcd');
});

badLastIndex = {
  valueOf: function() { throw new Test262Error(); }
};
assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.split].call(obj, 'abcd');
});
