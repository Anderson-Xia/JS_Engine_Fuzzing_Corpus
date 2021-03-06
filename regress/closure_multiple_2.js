//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Scenario: Multiple closures with multiple variables");

function f() {
  var x = 12;
  var y = "test";
  var z = 1.1;

  var ret1 = function () {
    print("1st function");
    print(x);
    print(y);
    print(z);
  };

  var ret2 = function () {
    print("2nd function");
    print(x);
    print(y);
    print(z);
  };

  return [ret1, ret2];
}

function g(funcs) {
  funcs[1]();
  funcs[0]();
}

var clo = f();
g(clo);
