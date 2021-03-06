// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-existing-fn-no-init.case
// - src/annex-b-fns/global/if-decl-else-decl-a.template
/*---
description: Existing variable binding is not modified (IfStatement with a declaration in both statement positions in the global scope)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
flags: [generated, noStrict]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    B.3.3.2 Changes to GlobalDeclarationInstantiation

    [...]
    1. Let fnDefinable be ? envRec.CanDeclareGlobalFunction(F).
    2. If fnDefinable is true, then
---*/
assert.sameValue(f(), 'outer declaration');

if (true) function f() { return 'inner declaration'; } else function _f() {}

function f() {
  return 'outer declaration';
}
