// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 14.1-8-s
description: "'use strict' directive - may follow other directives"
flags: [noStrict]
---*/

  function foo()
  {
     "bogus directive";
     "use strict";
     return (this === undefined);
  }

assert(foo.call(undefined));
