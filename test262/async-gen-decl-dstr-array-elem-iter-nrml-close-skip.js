// This file was procedurally generated from the following sources:
// - src/dstr-assignment-for-await/array-elem-iter-nrml-close-skip.case
// - src/dstr-assignment-for-await/async-generator/async-gen-decl.template
/*---
description: IteratorClose is not called when assignment evaluation has exhausted the iterator (for-await-of statement in an async generator declaration)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [Symbol.iterator, destructuring-binding, async-iteration]
flags: [generated, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]

    ArrayAssignmentPattern : [ AssignmentElementList ]

    [...]
    4. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iterator, result).
    5. Return result.

---*/
let nextCount = 0;
let returnCount = 0;
let _;
let iterator = {
  next() {
    nextCount += 1;
    return { done: true };
  },
  return() {
    returnCount += 1;
    return {};
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};

let iterCount = 0;
async function * fn() {
  for await ([ _ ] of [iterable]) {
    assert.sameValue(nextCount, 1);
    assert.sameValue(returnCount, 0);

    iterCount += 1;
  }
}

let iter = fn();

iter.next().then(() => {
  assert.sameValue(iterCount, 1);
}).then($DONE, $DONE);
