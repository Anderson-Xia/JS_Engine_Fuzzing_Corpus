// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function Foo() {
  ;
}

Foo.prototype.x = 0;

function foo(f) {
  f.x = 1;
}

foo(new Foo());
foo(new Foo());
foo(new Foo());
Foo.prototype.x;
0;
