let y = 42;

function makePolyProtoInstance() {
  function foo() {
    class C {
      constructor() {
        this.x = 20;
      }

    }

    ;
    C.prototype.y = y;
    return new C();
  }

  for (let i = 0; i < 5; ++i) {
    foo();
  }

  return foo();
}

let polyProtoInstance = makePolyProtoInstance();
String.prototype.__proto__ = polyProtoInstance;
Symbol.prototype.__proto__ = polyProtoInstance;
let strings = ["foo", Symbol("foo"), "bar", Symbol("bar")];

function assert(b) {
  ;
}

noInline(assert);

function validate(s) {
  s.x === 20;
  s.y === y;
  s.nonExistentProperty === undefined;
  typeof s.hasOwnProperty === "function";
  s.hasOwnProperty === Object.prototype.hasOwnProperty;
}

noInline(validate);

for (let i = 0; i < 1000; ++i) {
  for (let s of strings) {
    validate(s);
  }
}

y = 27;
polyProtoInstance.__proto__ = {
  z: 400,
  y: y
};

for (let i = 0; i < 1000; ++i) {
  for (let s of strings) {
    validate(s);
  }
}
