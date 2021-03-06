// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-init-iter-no-close.case
// - src/dstr-binding/default/async-gen-func-named-expr-dflt.template
/*---
description: Iterator is not closed when exhausted by pattern evaluation (async generator named function expression (default parameter))
esid: sec-asyncgenerator-definitions-evaluation
features: [Symbol.iterator, async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, funcEnv, strict).
        [...]


    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingPattern : ArrayBindingPattern

    [...]
    4. If iteratorRecord.[[done]] is false, return ? IteratorClose(iterator,
       result).
    [...]

---*/
var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { value: null, done: true };
    },
    return: function() {
      doneCallCount += 1;
      return {};
    }
  };
};


var callCount = 0;
var f;
f = async function* h([x] = iter) {
  assert.sameValue(doneCallCount, 0);
  callCount = callCount + 1;
};

f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);
