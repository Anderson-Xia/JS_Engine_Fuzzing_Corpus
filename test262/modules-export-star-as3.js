// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MODULE
// Flags: --harmony-namespace-exports

let self = 42;
export * as self from "./modules-export-star-as3.js";
import {self as myself} from "./modules-export-star-as3.js";
assertEquals(["self"], Object.keys(myself));
assertEquals(myself, myself.self);
assertEquals(42, self);
self++;
assertEquals(43, self);
