// This file was procedurally generated from the following sources:
// - src/spread/sngl-err-itr-get-get.case
// - src/spread/error/super-call.template
/*---
description: Spread operator applied to the only argument when GetIterator fails (@@iterator property access) (SuperCall)
esid: sec-super-keyword-runtime-semantics-evaluation
features: [Symbol.iterator]
flags: [generated]
info: |
    SuperCall : super Arguments

    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]

    12.3.6.1 Runtime Semantics: ArgumentListEvaluation

    ArgumentList : ... AssignmentExpression

    1. Let list be an empty List.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let spreadObj be GetValue(spreadRef).
    4. Let iterator be GetIterator(spreadObj).
    5. ReturnIfAbrupt(iterator).

    7.4.1 GetIterator ( obj, method )

    1. If method was not passed, then
       a. Let method be ? GetMethod(obj, @@iterator).
---*/
var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

class Test262ParentClass {
  constructor() {}
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}

assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
