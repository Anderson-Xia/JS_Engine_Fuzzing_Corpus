// This file was procedurally generated from the following sources:
// - src/annex-b-fns/func-existing-block-fn-no-init.case
// - src/annex-b-fns/func/switch-case.template
/*---
description: Does not re-initialize binding created by similar forms (Function declaration in the `case` clause of a `switch` statement in function scope)
esid: sec-web-compat-functiondeclarationinstantiation
flags: [generated, noStrict]
info: |
    B.3.3.1 Changes to FunctionDeclarationInstantiation

    [...]
    2. If instantiatedVarNames does not contain F, then
    [...]
---*/
var init;

(function() {
  init = f;

  {
    function f() {}
  }

  switch (1) {
    case 1:
      function f() {  }
  }

  
}());

assert.sameValue(init, undefined);
