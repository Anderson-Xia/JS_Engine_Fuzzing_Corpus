// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

export let a = {key: 'value'};
import {b} from "modules-circular-valid.js";
assertSame(a, b);
assertEquals('value', a.key);
