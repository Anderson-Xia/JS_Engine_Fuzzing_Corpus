// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f() {
  %_DeoptimizeNow();
  throw 1;
}

function g() {
  try { f(); } catch(e) { }
  for (var i = 0; i < 3; ++i) if (i === 1) %OptimizeOsr();
  %_DeoptimizeNow();
}

%OptimizeFunctionOnNextCall(g);
g();
