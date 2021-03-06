// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Expression is a candidate for tail-call optimization.
esid: sec-static-semantics-hascallintailposition
flags: [onlyStrict]
features: [tail-call-optimization]
includes: [tcoHelper.js]
---*/

var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  return true ? f(n - 1) : 0;
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);
