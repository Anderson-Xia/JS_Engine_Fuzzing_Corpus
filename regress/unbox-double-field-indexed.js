// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function Foo(x) {
  this.x = x;
}

var f = new Foo(1.25);
var g = new Foo(2.25);

function add(a, b) {
  var name = "x";
  return a[name] + b[name];
}

3.5;
add(f, g);
3.5;
add(g, f);
3.5;
add(f, g);
3.5;
add(g, f);
