// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function test(f) {
  assertTrue(f(0));
  assertTrue(f(Number.MIN_VALUE));
  assertTrue(f(Number.MAX_VALUE));
  assertTrue(f(Number.MIN_SAFE_INTEGER));
  assertTrue(f(Number.MIN_SAFE_INTEGER - 13));
  assertTrue(f(Number.MAX_SAFE_INTEGER));
  assertTrue(f(Number.MAX_SAFE_INTEGER + 23));
  assertTrue(f(0));
  assertTrue(f(-1));
  assertTrue(f(123456));
  assertFalse(f(Number.NaN));
  assertFalse(f(Number.POSITIVE_INFINITY));
  assertFalse(f(Number.NEGATIVE_INFINITY));
  assertFalse(f(1 / 0));
  assertFalse(f(-1 / 0));
}

function f(x) {
  return Number.isFinite(+x);
}

test(f);
test(f);
%OptimizeFunctionOnNextCall(f);
test(f);


function test2(f) {
  assertFalse(f({}));
  assertFalse(f("abc"));
  assertTrue(f(0));
  assertTrue(f(Number.MIN_VALUE));
  assertTrue(f(Number.MAX_VALUE));
  assertTrue(f(Number.MIN_SAFE_INTEGER));
  assertTrue(f(Number.MIN_SAFE_INTEGER - 13));
  assertTrue(f(Number.MAX_SAFE_INTEGER));
  assertTrue(f(Number.MAX_SAFE_INTEGER + 23));
  assertTrue(f(0));
  assertTrue(f(-1));
  assertTrue(f(123456));
  assertFalse(f(Number.NaN));
  assertFalse(f(Number.POSITIVE_INFINITY));
  assertFalse(f(Number.NEGATIVE_INFINITY));
  assertFalse(f(1 / 0));
  assertFalse(f(-1 / 0));
}

function f2(x) {
  return Number.isFinite(x);
}

test2(f2);
test2(f2);
%OptimizeFunctionOnNextCall(f2);
test2(f2);
