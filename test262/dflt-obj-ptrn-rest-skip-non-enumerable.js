// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/gen-func-expr-dflt.template
/*---
description: Rest object doesn't contain non-enumerable properties (generator function expression (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [object-rest, generators, destructuring-binding, default-parameters]
flags: [generated]
includes: [propertyHelper.js]
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

        [...]
        3. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]
---*/
var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });

var callCount = 0;
var f;
f = function*({...rest} = o) {
  assert.sameValue(rest.x, undefined);

  verifyProperty(rest, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
  });

  verifyProperty(rest, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 4
  });
  callCount = callCount + 1;
};

f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
