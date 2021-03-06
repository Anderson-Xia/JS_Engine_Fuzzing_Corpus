// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-target-obj-literal-prop-ref-init.case
// - src/dstr-assignment/default/for-of.template
/*---
description: The DestructuringAssignmentTarget of an AssignmentElement can extend to LHSExpressions if it is neither an ObjectLiteral nor an ArrayLiteral and its AssignmentTargetTyp is simple. Using MemberExpression (ObjLiteral + identifier) with initializer. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
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

    Syntax

    AssignmentPattern : ObjectAssignmentPattern
    ObjectAssignmentPattern : { AssignmentPropertyList }
    AssignmentPropertyList : AssignmentProperty
    AssignmentProperty : PropertyName : AssignmentElement
    AssignmentElement : DestructuringAssignmentTarget Initializer_opt
    DestructuringAssignmentTarget : LeftHandSideExpression

    Static Semantics: Early Errors

    DestructuringAssignmentTarget : LeftHandSideExpression

    - It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if LeftHandSideExpression is not covering an AssignmentPattern.
    - It is a Syntax Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and AssignmentTargetType(LeftHandSideExpression) is not simple.

    Runtime Semantics: DestructuringAssignmentEvaluation
    ObjectAssignmentPattern : { AssignmentPropertyList }

    1. Perform ? RequireObjectCoercible(value).
    2. Perform ? PropertyDestructuringAssignmentEvaluation for AssignmentPropertyList using value as the argument.
    3. Return NormalCompletion(empty).

    Runtime Semantics: PropertyDestructuringAssignmentEvaluation

    AssignmentProperty : PropertyName : AssignmentElement

    1. Let name be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(name).
    3. Perform ? KeyedDestructuringAssignmentEvaluation of AssignmentElement with value and name as the arguments.
    4. Return a new List containing name.

    Runtime Semantics: KeyedDestructuringAssignmentEvaluation

    AssignmentElement : DestructuringAssignmentTarget Initializer

    1. If DestructuringAssignmentTarget is neither an ObjectLiteral nor an ArrayLiteral, then
      a. Let lref be the result of evaluating DestructuringAssignmentTarget.
    ...

---*/
var setValue;

var counter = 0;

for ({ x: {
  get y() {
    throw new Test262Error('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
}.y = 42} of [{x: 23}]) {
  assert.sameValue(setValue, 23);

  counter += 1;
}

assert.sameValue(counter, 1);
