// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.6
description: >
  Returns abrupt from IsRegExp(searchString).
info: |
  21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )

  ...
  4. Let isRegExp be IsRegExp(searchString).
  5. ReturnIfAbrupt(isRegExp).
  ...

  7.2.8 IsRegExp ( argument )

  2. Let isRegExp be Get(argument, @@match).
  3. ReturnIfAbrupt(isRegExp).
features: [Symbol.match, String.prototype.endsWith]
---*/

var obj = {};
Object.defineProperty(obj, Symbol.match, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  ''.endsWith(obj);
});

var regexp = /./;
Object.defineProperty(regexp, Symbol.match, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  ''.endsWith(regexp);
});
