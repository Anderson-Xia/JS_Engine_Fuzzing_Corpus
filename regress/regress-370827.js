// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --expose-gc
function g(dummy, x) {
  var start = "";

  if (x) {
    start = x + " - ";
  }

  start = start + "array length";
}

;

function f() {
  gc();
  g([0.1]);
}

f();
f();
f();
