// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-48
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u000D)
---*/

assert.sameValue("abc\u000D".trim(), "abc", '"abc\u000D".trim()');
