// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es5id: 10.4.2-1-5
description: >
    Indirect call to eval has context set to global context (inside
    another eval)
---*/

var __10_4_2_1_5 = "str";
function testcase() {
            var __10_4_2_1_5 = "str1";
            var r = eval("\
                          var _eval = eval; \
                          var __10_4_2_1_5 = \'str2\'; \
                          _eval(\"\'str\' === __10_4_2_1_5 \") \
                        ");
            assert(r);
    }
testcase();
