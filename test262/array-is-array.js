// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

// Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be an Array literal.
(function() {
  function foo() {
    return Array.isArray([]);
  }

  assertTrue(foo());
  assertTrue(foo());
  %OptimizeFunctionOnNextCall(foo);
  assertTrue(foo());
})();

// Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be a Proxy for an Array literal.
(function() {
  function foo() {
    return Array.isArray(new Proxy([], {}));
  }

  assertTrue(foo());
  assertTrue(foo());
  %OptimizeFunctionOnNextCall(foo);
  assertTrue(foo());
})();

// Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be an Object literal.
(function() {
  function foo() {
    return Array.isArray({});
  }

  assertFalse(foo());
  assertFalse(foo());
  %OptimizeFunctionOnNextCall(foo);
  assertFalse(foo());
})();

// Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be a Proxy for an Object literal.
(function() {
  function foo() {
    return Array.isArray(new Proxy({}, {}));
  }

  assertFalse(foo());
  assertFalse(foo());
  %OptimizeFunctionOnNextCall(foo);
  assertFalse(foo());
})();

// Test JSObjectIsArray in JSTypedLowering for the case that
// TurboFan doesn't know anything about the input value.
(function() {
  function foo(x) {
    return Array.isArray(x);
  }

  assertFalse(foo({}));
  assertFalse(foo(new Proxy({}, {})));
  assertTrue(foo([]));
  assertTrue(foo(new Proxy([], {})));
  assertThrows(() => {
    const {proxy, revoke} = Proxy.revocable([], {});
    revoke();
    foo(proxy);
  }, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertFalse(foo({}));
  assertFalse(foo(new Proxy({}, {})));
  assertTrue(foo([]));
  assertTrue(foo(new Proxy([], {})));
  assertThrows(() => {
    const {proxy, revoke} = Proxy.revocable([], {});
    revoke();
    foo(proxy);
  }, TypeError);
})();

// Test JSObjectIsArray in JSTypedLowering for the case that
// we pass a revoked proxy and catch the exception locally.
(function() {
  function foo(x) {
    const {proxy, revoke} = Proxy.revocable(x, {});
    revoke();
    try {
      return Array.isArray(proxy);
    } catch (e) {
      return e;
    }
  }

  assertInstanceof(foo([]), TypeError);
  assertInstanceof(foo({}), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertInstanceof(foo([]), TypeError);
  assertInstanceof(foo({}), TypeError);
})();
