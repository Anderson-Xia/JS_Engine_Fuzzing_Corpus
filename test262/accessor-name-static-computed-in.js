// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-classdefinitionevaluation
es6id: 14.5.14
description: >
  AssignmentExpression may contain `in` keyword regardless of outer context
info: |
  [...]
  21. For each ClassElement m in order from methods
      a. If IsStatic of m is false, then
         [...]
      b. Else,
         a. Let status be the result of performing PropertyDefinitionEvaluation
            for m with arguments F and false.

  ComputedPropertyName : [ AssignmentExpression ]

  1. Let exprValue be the result of evaluating AssignmentExpression.
  2. Let propName be ? GetValue(exprValue).
  3. Return ? ToPropertyKey(propName).
---*/

var empty = Object.create(null);
var C, value;

for (C = class { static get ['x' in empty]() { return 'via get'; } }; ; ) {
  value = C.false;
  break;
}

assert.sameValue(value, 'via get');

for (C = class { static set ['x' in empty](param) { value = param; } }; ; ) {
  C.false = 'via set';
  break;
}

assert.sameValue(value, 'via set');
