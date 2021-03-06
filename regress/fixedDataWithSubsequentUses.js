//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var A = 1;
var B = 2;
var C = 3;

function test() {
  var d = 0;
  d += A;
  d += B;
  d += C;
  return d;
}

print(test());
print(test());
C = 1;
print(test());

function test1(o) {
  var d = 0;
  d += o.P;
  d += o.Q;
  d += o.R;
  return d;
}

var obj = {
  P: 5,
  Q: 6,
  R: 7
};
print(test1(obj));
print(test1(obj));
obj.Q = 10;
print(test1(obj));
