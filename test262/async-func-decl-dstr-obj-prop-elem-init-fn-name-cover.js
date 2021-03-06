// This file was procedurally generated from the following sources:
// - src/dstr-assignment-for-await/obj-prop-elem-init-fn-name-cover.case
// - src/dstr-assignment-for-await/default/async-func-decl.template
/*---
description: Assignment of function `name` attribute (CoverParenthesizedExpression) (for-await-of statement in an async function declaration)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
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

    AssignmentElement[Yield] : DestructuringAssignmentTarget Initializeropt
    [...] 6. If Initializer is present and v is undefined and
       IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of
       DestructuringAssignmentTarget are both true, then
       a. Let hasNameProperty be ? HasOwnProperty(rhsValue, "name").
       b. If hasNameProperty is false, perform SetFunctionName(rhsValue, GetReferencedName(lref)).

---*/
let xCover, cover;

let iterCount = 0;
async function fn() {
  for await ({ x: xCover = (0, function() {}), x: cover = (function() {}) } of [{}]) {
    assert.notSameValue(xCover.name, 'xCover');

    verifyProperty(cover, 'name', {
      enumerable: false,
      writable: false,
      configurable: true,
      value: 'cover'
    });
    iterCount += 1;
  }
}

let promise = fn();

promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);
