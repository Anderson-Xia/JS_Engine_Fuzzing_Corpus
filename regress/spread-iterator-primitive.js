var BUGNUMBER = 1021835;
var summary = "Returning non-object from @@iterator should throw";
print(BUGNUMBER + ": " + summary);
let primitives = [1, true, undefined, null, "foo", Symbol.iterator];

function f() {
  ;
}

for (let primitive of primitives) {
  let arg = {
    [Symbol.iterator]() {
      return primitive;
    }

  };

  (() => f(...arg))();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
