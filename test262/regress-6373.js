// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var A = {}

A[Symbol.hasInstance] = function(x) {
  %DeoptimizeFunction(foo);
  return 1;
}

var a = {}

function foo(o) {
  return o instanceof A;
}

foo(a);
foo(a);
assertTrue(foo(a) !== 1);
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(a) !== 1);
