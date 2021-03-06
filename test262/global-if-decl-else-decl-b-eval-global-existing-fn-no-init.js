// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-existing-fn-no-init.case
// - src/annex-b-fns/eval-global/indirect-if-decl-else-decl-b.template
/*---
description: Existing variable binding is not modified (IfStatement with a declaration in both statement positions in eval code)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
flags: [generated, noStrict]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    a. If declaredFunctionOrVarNames does not contain F, then
    [...]
---*/

(0,eval)(
  'assert.sameValue(f(), "outer declaration");if (false) function _f() {} else function f() { return "inner declaration"; }function f() {\
    return "outer declaration";\
  }'
);
