// This file was procedurally generated from the following sources:
// - src/function-forms/forbidden-ext-direct-access-prop-arguments.case
// - src/function-forms/forbidden-extensions/bullet-one/gen-func-expr.template
/*---
description: Forbidden extension, f.arguments (generator function expression)
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [generators]
flags: [generated, noStrict]
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }


    ECMAScript function objects defined using syntactic constructors in strict mode code must
    not be created with own properties named "caller" or "arguments". Such own properties also
    must not be created for function objects defined using an ArrowFunction, MethodDefinition,
    GeneratorDeclaration, GeneratorExpression, AsyncGeneratorDeclaration, AsyncGeneratorExpression,
    ClassDeclaration, ClassExpression, AsyncFunctionDeclaration, AsyncFunctionExpression, or
    AsyncArrowFunction regardless of whether the definition is contained in strict mode code.
    Built-in functions, strict functions created using the Function constructor, generator functions
    created using the Generator constructor, async functions created using the AsyncFunction
    constructor, and functions created using the bind method also must not be created with such own
    properties.

---*/

var callCount = 0;
var f;
f = function*() {
  assert.sameValue(f.hasOwnProperty("arguments"), false);
  callCount++;
};

f().next();
assert.sameValue(callCount, 1, 'generator function body evaluated');

