/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function f() {
  var arr = new Int32Array(10);

  x = function () {
    return arr.length;
  };

  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }

  arr[5];
  5;
}

f();
