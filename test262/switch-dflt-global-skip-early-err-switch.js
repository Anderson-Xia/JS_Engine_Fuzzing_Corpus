// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-skip-early-err-switch.case
// - src/annex-b-fns/global/switch-dflt.template
/*---
description: Extension not observed when creation of variable binding would produce an early error (switch statement) (Funtion declaration in the `default` clause of a `switch` statement in the global scope)
esid: sec-web-compat-globaldeclarationinstantiation
flags: [generated, noStrict]
info: |
    B.3.3.2 Changes to GlobalDeclarationInstantiation

    [...]
    b. If replacing the FunctionDeclaration f with a VariableStatement that has
       F as a BindingIdentifier would not produce any Early Errors for script,
       then
    [...]
---*/
assert.throws(ReferenceError, function() {
  f;
}, 'An initialized binding is not created prior to evaluation');
assert.sameValue(
  typeof f,
  'undefined',
  'An uninitialized binding is not created prior to evaluation'
);

switch (0) {
  default:
    let f;

switch (1) {
  default:
    function f() {  }
}

}

assert.throws(ReferenceError, function() {
  f;
}, 'An initialized binding is not created following evaluation');
assert.sameValue(
  typeof f,
  'undefined',
  'An uninitialized binding is not created following evaluation'
);
