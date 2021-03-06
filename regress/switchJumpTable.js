//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function AsmModuleSwitch() {
  "use asm";

  function fib(x) {
    x = x | 0;

    switch (x | 0) {
      case 0:
        return 1;

      case 1:
        return 1;

      case 2:
        return 2;

      case 3:
        return 3;

      case 4:
        return 5;

      case 5:
        return 8;

      case 6:
        return 13;

      case 7:
        return 21;

      case 8:
        return 34;

      case 9:
        return 55;
    }

    return -1;
  }

  return {
    fib: fib
  };
}

var asmModuleSwitch = AsmModuleSwitch();
print(asmModuleSwitch.fib(0));
print(asmModuleSwitch.fib(1));
print(asmModuleSwitch.fib(2));
print(asmModuleSwitch.fib(3));
print(asmModuleSwitch.fib(4));
print(asmModuleSwitch.fib(5));
print(asmModuleSwitch.fib(6));
