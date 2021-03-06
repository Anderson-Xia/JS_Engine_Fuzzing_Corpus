// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --stress-inline

"use strict";

function deopt_function(func) {
  %DeoptimizeFunction(func);
}

function f(x) {
  return deopt_function(h);
}

function g(x) {
  return f(x, 1);
}

function h(x) {
  g(x, 1);
}

%NeverOptimizeFunction(deopt_function);

h(1);
h(1);
%OptimizeFunctionOnNextCall(h);
h(1);
