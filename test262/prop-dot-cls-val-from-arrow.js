// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Value of reference returned by SuperProperty (from arrow function)
info: |
  1. Let propertyKey be StringValue of IdentifierName.
  2. If the code matched by the syntactic production that is being evaluated is
     strict mode code, let strict be true, else let strict be false.
  3. Return ? MakeSuperPropertyReference(propertyKey, strict).

  12.3.5.3 Runtime Semantics: MakeSuperPropertyReference

  1. Let env be GetThisEnvironment( ).
  2. If env.HasSuperBinding() is false, throw a ReferenceError exception.
  3. Let actualThis be ? env.GetThisBinding().
  4. Let baseValue be ? env.GetSuperBase().
  5. Let bv be ? RequireObjectCoercible(baseValue).
  6. Return a value of type Reference that is a Super Reference whose base
     value component is bv, whose referenced name component is propertyKey,
     whose thisValue component is actualThis, and whose strict reference flag
     is strict.
features: [class, arrow-function]
---*/

var fromA, fromB;
class A {}
class B extends A {}
class C extends B {
  method() {
    fromA = (() => { return super.fromA; })();
    fromB = (() => { return super.fromB; })();
  }
}

A.prototype.fromA = 'a';
A.prototype.fromB = 'a';
B.prototype.fromB = 'b';
C.prototype.fromA = 'c';
C.prototype.fromB = 'c';

C.prototype.method();

assert.sameValue(fromA, 'a');
assert.sameValue(fromB, 'b');
