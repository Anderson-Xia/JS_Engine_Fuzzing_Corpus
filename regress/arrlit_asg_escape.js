//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var arr;

function test(param) {
  var x;
  arr = [1, x = function () {
    return param;
  }, 2];
}

test("test1");
print(arr[1]());
test("test2");
print(arr[1]());
