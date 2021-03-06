function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    ;
  }
}

{
  shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length","name"]`);
  shouldBe(Array.prototype.filter.name, "filter");
  shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(Array.prototype.filter, 'name')), `{"value":"filter","writable":false,"enumerable":false,"configurable":true}`);
  shouldBe(delete Array.prototype.filter.name, true);
  shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length"]`);
}
{
  shouldThrow(function () {
    "use strict";

    Array.prototype.forEach.name = 42;
  }, `TypeError: Attempted to assign to readonly property.`);
}
{
  var resolve = null;
  var reject = null;
  new Promise(function (arg0, arg1) {
    resolve = arg0;
    reject = arg1;
  });
  shouldBe(Object.getOwnPropertyDescriptor(resolve, 'name'), undefined);
  shouldBe(Object.getOwnPropertyDescriptor(reject, 'name'), undefined);
}
