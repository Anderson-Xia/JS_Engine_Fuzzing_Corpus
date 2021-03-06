// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Behavior when error thrown while setting `lastIndex` after a "sticky" match
    failure
es6id: 21.2.5.6
info: |
    [...]
    5. Let global be ToBoolean(Get(rx, "global")).
    6. ReturnIfAbrupt(global).
    7. If global is false, then
       a. Return RegExpExec(rx, S).

    21.2.5.2.1 Runtime Semantics: RegExpExec ( R, S )

    [...]
    7. Return RegExpBuiltinExec(R, S).

    21.2.5.2.2 Runtime Semantics: RegExpBuiltinExec ( R, S )

    [...]
    8. Let sticky be ToBoolean(Get(R, "sticky")).
    [...]
    14. Let matchSucceeded be false.
    15. Repeat, while matchSucceeded is false
        [...]
        c. If r is failure, then
           i. If sticky is true, then
              1. Let setStatus be Set(R, "lastIndex", 0, true).
              2. ReturnIfAbrupt(setStatus).
features: [Symbol.match]
---*/

var r = /a/y;

Object.defineProperty(r, 'lastIndex', { writable: false });

assert.throws(TypeError, function() {
  r[Symbol.match]('ba');
});
