/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = "for-loop-declaration-contains-computed-name.js";
var BUGNUMBER = 1233767;
var summary = "Support initializer defaults in destructuring declarations in for-in/of " + "loop heads";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var count;
var expr;
expr = [{
  z: 42,
  42: "hi"
}, {
  7: 'fnord'
}];
count = 0;

for (var {
  z: x = 7,
  [x]: y = 3
} of expr) {
  if (count === 0) {
    x;
    42;
    y;
    "hi";
  } else {
    x;
    7;
    y;
    "fnord";
  }

  count++;
}

count = 0;

for (var {
  length: x,
  [x - 1 + count]: y = "psych"
} in "foo") {
  x;
  1;
  y;
  count === 0 ? "0" : "psych";
  count++;
}
/******************************************************************************/


if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
