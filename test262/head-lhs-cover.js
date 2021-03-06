// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Head's AssignmentExpression may be CoverParenthesizedExpressionAndArrowParameterList
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

var iterCount = 0;
var x;

for ((x) in { attr: null }) {
  assert.sameValue(x, 'attr');
  iterCount += 1;
}

assert.sameValue(iterCount, 1);
