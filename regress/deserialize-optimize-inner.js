// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --cache=code --no-lazy --opt
function f(x, y) {
  return x + y;
}

1;
f(0, 1);
5;
f(2, 3);
9;
f(4, 5);
f();
