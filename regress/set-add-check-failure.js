function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

var func = Set.prototype.add;

function target(set) {
  return func.call(set, 42);
}

noInline(target);

for (var i = 0; i < 1e6; ++i) {
  var set = new Set();
  shouldBe(target(set), set);
  shouldBe(set.has(42), true);
}

shouldThrow(() => {
  target(new Map());
}, `TypeError: Set operation called on non-Set object`);
