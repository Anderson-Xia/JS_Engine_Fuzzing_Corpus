// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    LineTerminator between arrow and ConciseBody[?In]
    ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList[?Yield]
    ConciseBody[In] : { FunctionBody }

    Includes ...rest
---*/
var af = (x, ...y) => { return [x, y.length]; };

assert.sameValue(typeof af, "function");
assert.sameValue(af(1, 1, 1)[0], 1);
assert.sameValue(af(1, 1, 1)[1], 2);
