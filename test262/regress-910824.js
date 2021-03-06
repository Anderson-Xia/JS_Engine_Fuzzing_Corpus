// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addGlobal(kWasmI32, 1);
builder.addGlobal(kWasmF32, 1);
builder.addType(makeSig([kWasmI32, kWasmF32, kWasmF32, kWasmF64], [kWasmI32]));
builder.addFunction(undefined, 0 /* sig */)
  .addLocals({i32_count: 504})
  .addBody([
kExprGetGlobal, 0x00,
kExprSetLocal, 0x04,
kExprGetLocal, 0x04,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGetGlobal, 0x00,
kExprI32Const, 0x00,
kExprI32Eqz,
kExprGetGlobal, 0x00,
kExprI32Const, 0x01,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGetGlobal, 0x00,
kExprI32Const, 0x00,
kExprI32Eqz,
kExprGetGlobal, 0x00,
kExprI32Const, 0x00,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGetGlobal, 0x01,
kExprUnreachable,
]);
builder.instantiate();
