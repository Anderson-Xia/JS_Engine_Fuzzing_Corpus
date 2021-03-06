// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MODULE
// Flags: --harmony-namespace-exports

import {a, b} from "./modules-skip-9.js";
assertSame(a, b);
assertEquals(42, a.default);
assertEquals(1, a.a);
