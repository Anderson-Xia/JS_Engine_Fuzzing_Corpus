// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: >
  ??= doesn't special-case [[IsHTMLDDA]] object; rval is not evaluated.
info: |
  AssignmentExpression : LeftHandSideExpression ??= AssignmentExpression

  1. Let lref be the result of evaluating LeftHandSideExpression.
  2. Let lval be ? GetValue(lref).
  3. If lval is neither undefined nor null, return lval.
features: [IsHTMLDDA, logical-assignment-operators]
---*/

var IsHTMLDDA = $262.IsHTMLDDA;
var value = IsHTMLDDA;
assert.sameValue(value ??= unresolved, IsHTMLDDA);
assert.sameValue(value, IsHTMLDDA);
