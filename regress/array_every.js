//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function returnTrue(x, y, z) {
  print("value:" + x + " index:" + y + " Object:" + z);
  return true;
}

function returnFalse(x, y, z) {
  print("value:" + x + " index:" + y + " Object:" + z);
  return false;
}

function returnRandom(x, y, z) {
  print("value:" + x + " index:" + y + " Object:" + z);
  return y != 1;
}

Array.prototype[6] = 20;
var x = [1, 2, 3, 4, 5];
var y = x.every(returnTrue, this);
print(y);
x = [10, 20, 30, 40, 50];
y = x.every(returnFalse, this);
print(y);
x = [10, 20, 30, 40, 50];
y = x.every(returnRandom, this);
print(y);
x = {
  0: "abc",
  1: "def",
  2: "xyz"
};
x.length = 3;
y = Array.prototype.every.call(x, returnTrue, this);
print(y);
y = Array.prototype.every.call(x, returnFalse, this);
print(y);
y = Array.prototype.every.call(x, returnRandom, this);
print(y);
x = [10, 20, 30, 40, 50];
x[8] = 10;
y = x.every(returnTrue, this);
print(y);
