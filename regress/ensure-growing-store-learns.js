// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --noverify-heap --noenable-slow-asserts
// Flags: --opt --no-always-opt
// --noverify-heap and --noenable-slow-asserts are set because the test is too
// slow with it on.
// Ensure that keyed stores work, and optimized functions learn if the
// store required change to dictionary mode. Verify that stores that grow
// the array into large object space don't cause a deopt.
(function () {
  var a = [];

  function foo(a, i) {
    a[i] = 5.3;
  }

  foo(a, 1);
  foo(a, 2);
  foo(a, 3);
  a[3] = 0;
  foo(a, 3);
  a[3];
  5.3;
  foo(a, 50000);
  foo();
  var b = [];
  foo(b, 1);
  foo(b, 2); // Put b in dictionary mode.

  b[10000] = 5;
  foo(b, 3);
  foo(b, 50000);
  foo();
})();

(function () {
  var a = new Array(10);

  function foo2(a, i) {
    a[i] = 50;
  } // The KeyedStoreIC will learn GROW_MODE.


  foo2(a, 10);
  foo2(a, 12);
  foo2(a, 31);
  foo2(a, 40);
  foo2();
  // Grow a large array into large object space through the keyed store
  // without deoptimizing. Grow by 9s. If we set elements too sparsely, the
  // array will convert to dictionary mode.
  a = new Array(99999);

  for (var i = 0; i < 263000; i += 9) {
    foo2(a, i);
  } // Verify that we are over 1 page in size, and foo2 remains optimized.
  // This means we've smoothly transitioned to allocating in large object
  // space.


  a.length * 4 > 1024 * 1024;
  foo2();
})();
