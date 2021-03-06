//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Boolean values generated with ! outside of a conditional.
var q = new Object();
var tests = [-0.5, -1, 1, 2, 3, new Object(), q, [4, 5, 6], "blah", 'c', true];

for (var x in tests) {
  var tmp = !tests[x];

  if (tmp) {
    print("failed on !" + tests[x]);
  } else {
    print("ok: " + tests[x]);
  }
}

var tmp = !0 && !false;

if (tmp) {
  print("done");
}

print("Testing value producing compares");

function foo(a, b) {
  print("\na = " + a + "  b = " + b + "\n");
  print(" a < b = ", a < b);
  print(" a <= b = ", a <= b);
  print(" a > b = ", a > b);
  print(" a >= b = ", a >= b);
  print(" a == b = ", a == b);
  print(" a != b = ", a != b);
  print(" a === b = ", a === b);
  print(" a !== b = ", a !== b);
}

foo(1, 2);
foo(2, 1);
foo(2, 2);
foo(-1, 2);
foo(1, -2);
foo(0, 0);
foo(0, 0.1);
foo(0x70000000, 0);
foo(0, 0x70000000);
