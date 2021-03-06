// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --use-osr

function id(f) { return f; }

function foo(a) {
  var r = /\0/;
  for (var i = 0; i < 10; i++) {
    if (a) %OptimizeOsr();
  }
  return r;
}

function bar(a) {
  for (var i = 0; i < 10; i++) {
    if (a) %OptimizeOsr();
    var r = /\0/;
  }
  return r;
}

function baz(a) {
  for (var i = 0; i < 10; i++) {
    if (a) %OptimizeOsr();
  }
  return /\0/;
}

function qux(a) {
  for (var i = 0; i < 10; i++) {
    if (i > 5 && a) {
      %OptimizeOsr();
    } else {
      var r = /\0/;
    }
  }
  return r;
}

function test(f) {
  // Test the reference equality of regex's created in OSR'd function.
  var x = f(false);
  assertEquals(x, f(true));
  assertEquals(x, f(true));
  assertEquals(x, f(true));
}

test(foo);
test(bar);
test(baz);
test(qux);
