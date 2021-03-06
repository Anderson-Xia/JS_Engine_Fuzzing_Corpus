// This file was procedurally generated from the following sources:
// - src/class-elements/eval-err-contains-supercall-2.case
// - src/class-elements/initializer-eval-super-call/cls-expr-fields-indirect-eval-arrow-body.template
/*---
description: error if `super().x` in StatementList of eval (indirect eval)
esid: sec-performeval-rules-in-initializer
features: [class, class-fields-public]
flags: [generated]
info: |
    Additional Early Error Rules for Eval Outside Constructor Methods
    These static semantics are applied by PerformEval when a direct eval call occurs outside of the constructor method of a ClassDeclaration or ClassExpression.
    ScriptBody : StatementList

      It is a Syntax Error if StatementList Contains SuperCall.

---*/


var A = class {}
var C = class extends A {
  x = (0, eval)('() => super().x;');
}

assert.throws(SyntaxError, function() {
  new C().x();
});

