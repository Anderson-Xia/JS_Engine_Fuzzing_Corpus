// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-skip-non-enumerable.case
// - src/dstr-assignment/default/for-of.template
/*---
description: Rest object doesn't contain non-enumerable properties (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var rest;
var obj = {a: 3, b: 4};
Object.defineProperty(obj, "x", { value: 4, enumerable: false });

var counter = 0;

for ({...rest} of [obj]) {
  assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);

  verifyProperty(rest, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
  });

  verifyProperty(rest, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 4
  });
  counter += 1;
}

assert.sameValue(counter, 1);
