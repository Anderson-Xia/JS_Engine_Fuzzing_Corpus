//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var i = 0;

function f() {
  print("condition, i = " + i);
  return i < 10;
}

print("--- test 1 ---");

do {
  ++i;

  if (i > 5) {
    continue;
  }

  print("after continue: " + i++);
} while (f());

i = 0;
print("--- test 2 ---");

do {
  switch (i++) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      continue;

    default:
      print("default");

    case 9:
      break;
  }
} while (f());

print("done");
