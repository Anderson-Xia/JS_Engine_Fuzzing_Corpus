// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-20
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Babc\u000B)
---*/

assert.sameValue("\u000Babc\u000B".trim(), "abc", '"\u000Babc\u000B".trim()');
