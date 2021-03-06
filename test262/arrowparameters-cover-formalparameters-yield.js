// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    Parameter named "yield", non-strict

flags: [noStrict]
---*/
var af = (yield) => 1;

assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
