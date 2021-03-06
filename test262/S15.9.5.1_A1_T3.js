// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "constructor" has { DontEnum } attributes
esid: sec-date.prototype.constructor
description: Checking DontEnum attribute
---*/
assert(
  !Date.prototype.propertyIsEnumerable('constructor'),
  'The value of !Date.prototype.propertyIsEnumerable(\'constructor\') is expected to be true'
);

for (var x in Date.prototype) {
  assert.notSameValue(x, "constructor", 'The value of x is not "constructor"');
}

// TODO: Convert to verifyProperty() format.
