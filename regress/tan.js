//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// interesting floating point limits
checkNaN(NaN);
check(+0, +0);
check(-0.0, -0.0);
checkNaN(+Infinity);
checkNaN(-Infinity);
check(1, Math.PI / 4);

if (!isNaN(Math.tan())) {
  print("error: Math.tan() is not NaN");
}

print("done");

function check(result, n) {
  var rs = Math.tan(n);

  if (Math.abs(rs - result) > 0.00000000001) {
    print("tan(" + n + ") != " + result);
    print(" wrong result is tan(" + n + ") = " + rs);
  }
}

function checkNaN(x) {
  var rs = Math.tan(x);

  if (!isNaN(rs)) {
    print("tan(" + x + ") !=  NaN");
    print(" wrong result is tan(" + x + ") = " + rs);
  }
}
