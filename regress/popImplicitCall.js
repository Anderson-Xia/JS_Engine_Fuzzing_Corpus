//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo() {
  var obj = {};
  Object.prototype.push = Array.prototype.push;
  Object.prototype.pop = Array.prototype.pop;
  var x;
  Object.defineProperty(obj, "length", {
    get: function () {
      x = true;
      return 5;
    }
  });
  x = false;

  try {
    var len = obj.pop();
  } catch (e) {
    print('caught exception calling pop');
  }

  print(x);
  print(len);
}

foo();
foo();
