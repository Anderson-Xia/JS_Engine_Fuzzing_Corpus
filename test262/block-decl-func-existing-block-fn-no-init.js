// This file was procedurally generated from the following sources:
// - src/annex-b-fns/func-existing-block-fn-no-init.case
// - src/annex-b-fns/func/block.template
/*---
description: Does not re-initialize binding created by similar forms (Block statement in function scope containing a function declaration)
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

  {
    function f() {  }
  }

  
}());

assert.sameValue(init, undefined);
