// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    An exported default "named" function declaration does not need to be
    terminated with a semicolon or newline
esid: sec-moduleevaluation
flags: [module]
---*/

var count = 0;

export default function f() {} if (true) { count += 1; }

assert.sameValue(count, 1);
