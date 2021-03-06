// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// MODULE

import {b, c} from "modules-skip-2.js";
import {a, set_a} from "modules-skip-1.js";
import x from "modules-skip-2.js";

assertEquals(42, x);

assertEquals(1, a);
assertEquals(1, b);
assertEquals(1, c);

set_a(2);
assertEquals(2, a);
assertEquals(2, b);
assertEquals(2, c);

assertThrows(() => a = 3, TypeError);
assertThrows(() => b = 3, TypeError);
assertThrows(() => c = 3, TypeError);

assertEquals(2, a);
assertEquals(2, b);
assertEquals(2, c);

assertThrows(() => x = 43, TypeError);
assertEquals(42, x);
