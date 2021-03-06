// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.setmilliseconds
description: >
  Behavior when "this" value is an Object without a [[DateValue]] internal slot
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).

  The abstract operation thisTimeValue(value) performs the following steps:

  1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
     a. Return value.[[DateValue]].
  2. Throw a TypeError exception.
---*/

var setMilliseconds = Date.prototype.setMilliseconds;
var callCount = 0;
var arg = {
  valueOf: function() {
    callCount += 1;
    return 1;
  }
};
var args = (function() {
  return arguments;
}());

assert.sameValue(typeof setMilliseconds, 'function');

assert.throws(TypeError, function() {
  setMilliseconds.call({}, arg);
}, 'ordinary object');

assert.throws(TypeError, function() {
  setMilliseconds.call([], arg);
}, 'array exotic object');

assert.throws(TypeError, function() {
  setMilliseconds.call(args, arg);
}, 'arguments exotic object');

assert.sameValue(callCount, 0, 'validation precedes input coercion');
