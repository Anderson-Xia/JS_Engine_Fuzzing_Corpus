// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-abrupt.case
// - src/function-forms/error/async-meth.template
/*---
description: Abrupt completion returned by evaluation of initializer (async method)
esid: sec-async-function-definitions
features: [default-parameters, async-functions]
flags: [generated, async]
info: |
    14.6 Async Function Definitions

    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    1. Let status be the result of performing IteratorBindingInitialization for
       FormalsList using iteratorRecord and environment as the arguments.
    2. ReturnIfAbrupt(status).
    3. Return the result of performing IteratorBindingInitialization for
       FormalParameter using iteratorRecord and environment as the arguments.

---*/


var callCount = 0;

var obj = {
  async method(_ = (function() { throw new Test262Error(); }())) {
    
    callCount = callCount + 1;
  }
};

obj.method()
  .then(_ => {
    throw new Test262Error('function should not be resolved');
  }, error => assert.sameValue(error.constructor, Test262Error))
  .then(() => {
    assert.sameValue(callCount, 0, 'function body is not evaluated');
  }, $DONE)
  .then($DONE, $DONE);
