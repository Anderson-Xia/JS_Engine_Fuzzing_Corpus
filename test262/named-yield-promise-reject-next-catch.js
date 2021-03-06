// This file was procedurally generated from the following sources:
// - src/async-generators/yield-promise-reject-next-catch.case
// - src/async-generators/default/async-expression-named.template
/*---
description: yield Promise.reject(value) is treated as throw value (Named async generator expression)
esid: prod-AsyncGeneratorExpression
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorExpression :
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }

---*/
let error = new Error();


var callCount = 0;

var gen = async function *g() {
  callCount += 1;
  yield Promise.reject(error);
  yield "unreachable";
};

var iter = gen();

iter.next().then(() => {
  throw new Test262Error("Promise incorrectly resolved.");
}).catch(rejectValue => {
  // yield Promise.reject(error);
  assert.sameValue(rejectValue, error);

  iter.next().then(({done, value}) => {
    // iter is closed now.
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }).then($DONE, $DONE);
});

assert.sameValue(callCount, 1);
