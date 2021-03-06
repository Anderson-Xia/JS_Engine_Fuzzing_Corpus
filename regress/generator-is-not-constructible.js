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

function* gen() {
  ;
}

shouldThrow(() => {
  new gen();
}, `TypeError: function is not a constructor (evaluating 'new gen()')`);

class A {
  static *staticGen() {
    ;
  }

  *gen() {
    ;
  }

}

;
shouldThrow(() => {
  let a = new A();
  new a.gen();
}, `TypeError: function is not a constructor (evaluating 'new a.gen()')`);
shouldThrow(() => {
  new A.staticGen();
}, `TypeError: function is not a constructor (evaluating 'new A.staticGen()')`);
