// This file was procedurally generated from the following sources:
// - src/function-forms/rest-param-strict-body.case
// - src/function-forms/syntax/async-gen-named-func-expr.template
/*---
description: RestParameter and Use Strict Directive are not allowed to coexist for the same function. (async generator named function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [rest-parameters, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, funcEnv, strict).
        [...]


    14.1.13 Static Semantics: IsSimpleParameterList

    FormalParameters : FormalParameterList , FunctionRestParameter

    1. Return false.

    14.1.2 Static Semantics: Early Errors

    FunctionDeclaration : function BindingIdentifier ( FormalParameters ) { FunctionBody }
    FunctionDeclaration : function ( FormalParameters ) { FunctionBody }
    FunctionExpression : function BindingIdentifier ( FormalParameters ) { FunctionBody }

    - It is a Syntax Error if ContainsUseStrict of FunctionBody is true and
      IsSimpleParameterList of FormalParameters is false.

    14.2.1 Static Semantics: Early Errors

    ArrowFunction : ArrowParameters => ConciseBody

    - It is a Syntax Error if ContainsUseStrict of ConciseBody is true and
      IsSimpleParameterList of ArrowParameters is false.

    14.3.1 Static Semantics: Early Errors

    MethodDefinition : PropertyName ( UniqueFormalParameters ) { FunctionBody }

    - It is a Syntax Error if ContainsUseStrict of FunctionBody is true and
      IsSimpleParameterList of UniqueFormalParameters is false.

    MethodDefinition : set PropertyName ( PropertySetParameterList ) { FunctionBody }

    - It is a Syntax Error if ContainsUseStrict of FunctionBody is true and
      IsSimpleParameterList of PropertySetParameterList is false.

    14.4.1 Static Semantics: Early Errors

    GeneratorMethod : * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

    - It is a Syntax Error if ContainsUseStrict of GeneratorBody is true and
      IsSimpleParameterList of UniqueFormalParameters is false.

    GeneratorDeclaration : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }
    GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }
    GeneratorExpression : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

    - It is a Syntax Error if ContainsUseStrict of GeneratorBody is true and
      IsSimpleParameterList of UniqueFormalParameters is false.

    14.5.1 Static Semantics: Early Errors

    AsyncGeneratorMethod : async * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

    - It is a Syntax Error if ContainsUseStrict of AsyncGeneratorBody is true and
      IsSimpleParameterList of UniqueFormalParameters is false.

    AsyncGeneratorDeclaration : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }
    AsyncGeneratorDeclaration : async function * ( FormalParameters ) { AsyncGeneratorBody }
    AsyncGeneratorExpression : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

    - It is a Syntax Error if ContainsUseStrict of AsyncGeneratorBody is true and
      IsSimpleParameterList of FormalParameters is false.

    14.7.1 Static Semantics: Early Errors

    AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

    - It is a Syntax Error if ContainsUseStrict of AsyncFunctionBody is true and
      IsSimpleParameterList of UniqueFormalParameters is false.

    AsyncFunctionDeclaration : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }
    AsyncFunctionDeclaration : async function ( FormalParameters ) { AsyncFunctionBody }
    AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody }
    AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

    - It is a Syntax Error if ContainsUseStrict of AsyncFunctionBody is true and
      IsSimpleParameterList of FormalParameters is false.

    14.8.1 Static Semantics: Early Errors

    AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

    - It is a Syntax Error if ContainsUseStrict of AsyncConciseBody is true and
      IsSimpleParameterList of CoverCallExpressionAndAsyncArrowHead is false.

---*/
$DONOTEVALUATE();


0, async function* g(a,...rest) {
  "use strict";
};
