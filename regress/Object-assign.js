console.log("Test to ensure correct behavior of Object.assign");
Object.assign.length;
Object.assign.name;
console.log("check TypeError on null/undefined");

try {
  Object.assign();
} catch (e) {
  ;
}

try {
  Object.assign(undefined);
} catch (e) {
  ;
}

try {
  Object.assign(null);
} catch (e) {
  ;
}

var target = {},
    ret = Object.assign(target);
target === ret;
console.log("multiple sources are copied");
var target = {},
    ret = Object.assign(target, {
  a: 1
});
target === ret;
var target = {};
Object.assign(target, {
  a: 1
});
target.a === 1;
var target = {};
Object.assign(target, {
  a: 1
}, {
  b: 2
});
target.b === 2;
var target = {};
Object.assign(target, {
  a: 1
}, {
  a: 2
});
target.a === 2;
console.log("only enumerable properties are copied");
var target = {},
    source = {};
Object.defineProperty(source, 'a', {
  value: 1,
  enumerable: false
});
Object.assign(target, {
  a: 2
}, source);
target.a === 2;
var target = {},
    source = {};
Object.defineProperty(source, 'a', {
  value: 1,
  enumerable: false
});
Object.assign(target, source);
'a' in target && target.a === 1;
var target = {},
    source = {};
Object.defineProperty(source, 'a', {
  value: 1,
  enumerable: false
});
Object.assign(target, source, {
  a: 2
});
target.a === 2;
var target = {},
    source = {};
Object.defineProperty(source, 'a', {
  value: 1,
  enumerable: true
});
Object.assign(target, source, {
  a: 2
});
target.a === 2;
var target = {},
    source = {};
Object.defineProperty(source, 'a', {
  value: 1,
  enumerable: true
});
Object.assign(target, {
  a: 2
}, source);
target.a === 1;
console.log("only own properties are copied");

var target = {},
    C = function C() {
  ;
};

C.prototype.a = 1;
Object.assign(target, {
  a: 2
}, new C());
target.a === 2;
console.log("Symbols are copied");
var target = {},
    source = {},
    sym = Symbol('sym');
source[sym] = sym;
Object.assign(target, source);
target[sym] === sym;
var target = {},
    source1 = {},
    source2 = {},
    sym = Symbol('sym');
source1[sym] = 1;
source2[sym] = 2;
Object.assign(target, source1, source2);
target[sym] === 2;
console.log("non-enumerable Symbols are not copied");

try {
  var target = {},
      source = {},
      sym = Symbol('sym');
  Object.defineProperty(source, sym, {
    value: 1,
    enumerable: false
  });
  Object.assign(target, source);
  target[sym];
} catch (e) {
  ;
}

console.log("only own Symbols are copied");

var target = {},
    source1 = {},
    sym = Symbol('sym'),
    C = function C() {
  ;
};

C.prototype[sym] = 1;
source1[sym] = 2;
Object.assign(target, source1, new C());
target[sym] === 2;
console.log("primitives as sources");
var target = {};
Object.assign(target, true);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, false);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, NaN);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, Infinity);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, -Infinity);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, 0);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, -0);
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, Symbol('sym'));
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, '');
Object.getOwnPropertyNames(target).length === 0;
var target = {};
Object.assign(target, 'abc');
Object.getOwnPropertyNames(target).length === 'abc'.length;
console.log("primitives as target");

var is = function (a, b) {
  if (a !== a && b !== b) {
    return true;
  } else {
    if (a === 0) {
      return a / 1 === b / 1;
    } else {
      return a === b;
    }
  }
};

var isBoxedPrimitive = function isBoxedPrimitive(object, Wrapper, primitive) {
  return object instanceof Wrapper && is(Wrapper.prototype.valueOf.call(object), primitive);
};

var target = Object.assign(true, {
  a: 1
});
isBoxedPrimitive(target, Boolean, true) && target.a === 1;
var target = Object.assign(false, {
  a: 1
});
isBoxedPrimitive(target, Boolean, false) && target.a === 1;
var target = Object.assign(NaN, {
  a: 1
});
isBoxedPrimitive(target, Number, NaN) && target.a === 1;
var target = Object.assign(Infinity, {
  a: 1
});
isBoxedPrimitive(target, Number, Infinity) && target.a === 1;
var target = Object.assign(-Infinity, {
  a: 1
});
isBoxedPrimitive(target, Number, -Infinity) && target.a === 1;
var target = Object.assign(0, {
  a: 1
});
isBoxedPrimitive(target, Number, 0) && target.a === 1;
var target = Object.assign(-0, {
  a: 1
});
isBoxedPrimitive(target, Number, -0) && target.a === 1;
var sym = Symbol('sym');
var target = Object.assign(sym, {
  a: 1
});
isBoxedPrimitive(target, Symbol, sym) && target.a === 1;
var target = Object.assign('', {
  a: 1
});
isBoxedPrimitive(target, String, '') && target.a === 1;
var target = Object.assign('abc', {
  a: 1
});
isBoxedPrimitive(target, String, 'abc') && target.a === 1;
