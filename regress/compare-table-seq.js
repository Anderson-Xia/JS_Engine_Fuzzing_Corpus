// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var values = [true, false, null, void 0, 0, 0.0, -0, "", -1, -1.25, 1, 1.25, -2147483648, 2147483648, Infinity, -Infinity, NaN];
var expected = [[true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];

var func = function seq(a, b) {
  return a === b;
};

var left_funcs = [function seq_L0(b) {
  return true === b;
}, function seq_L1(b) {
  return false === b;
}, function seq_L2(b) {
  return null === b;
}, function seq_L3(b) {
  return void 0 === b;
}, function seq_L4(b) {
  return 0 === b;
}, function seq_L5(b) {
  return 0.0 === b;
}, function seq_L6(b) {
  return -0 === b;
}, function seq_L7(b) {
  return "" === b;
}, function seq_L8(b) {
  return -1 === b;
}, function seq_L9(b) {
  return -1.25 === b;
}, function seq_L10(b) {
  return 1 === b;
}, function seq_L11(b) {
  return 1.25 === b;
}, function seq_L12(b) {
  return -2147483648 === b;
}, function seq_L13(b) {
  return 2147483648 === b;
}, function seq_L14(b) {
  return Infinity === b;
}, function seq_L15(b) {
  return -Infinity === b;
}, function seq_L16(b) {
  return NaN === b;
}];
var right_funcs = [function seq_R0(a) {
  return a === true;
}, function seq_R1(a) {
  return a === false;
}, function seq_R2(a) {
  return a === null;
}, function seq_R3(a) {
  return a === void 0;
}, function seq_R4(a) {
  return a === 0;
}, function seq_R5(a) {
  return a === 0.0;
}, function seq_R6(a) {
  return a === -0;
}, function seq_R7(a) {
  return a === "";
}, function seq_R8(a) {
  return a === -1;
}, function seq_R9(a) {
  return a === -1.25;
}, function seq_R10(a) {
  return a === 1;
}, function seq_R11(a) {
  return a === 1.25;
}, function seq_R12(a) {
  return a === -2147483648;
}, function seq_R13(a) {
  return a === 2147483648;
}, function seq_R14(a) {
  return a === Infinity;
}, function seq_R15(a) {
  return a === -Infinity;
}, function seq_R16(a) {
  return a === NaN;
}];

function matrix() {
  return [[true === true, true === false, true === null, true === void 0, true === 0, true === 0.0, true === -0, true === "", true === -1, true === -1.25, true === 1, true === 1.25, true === -2147483648, true === 2147483648, true === Infinity, true === -Infinity, true === NaN], [false === true, false === false, false === null, false === void 0, false === 0, false === 0.0, false === -0, false === "", false === -1, false === -1.25, false === 1, false === 1.25, false === -2147483648, false === 2147483648, false === Infinity, false === -Infinity, false === NaN], [null === true, null === false, null === null, null === void 0, null === 0, null === 0.0, null === -0, null === "", null === -1, null === -1.25, null === 1, null === 1.25, null === -2147483648, null === 2147483648, null === Infinity, null === -Infinity, null === NaN], [void 0 === true, void 0 === false, void 0 === null, void 0 === void 0, void 0 === 0, void 0 === 0.0, void 0 === -0, void 0 === "", void 0 === -1, void 0 === -1.25, void 0 === 1, void 0 === 1.25, void 0 === -2147483648, void 0 === 2147483648, void 0 === Infinity, void 0 === -Infinity, void 0 === NaN], [0 === true, 0 === false, 0 === null, 0 === void 0, 0 === 0, 0 === 0.0, 0 === -0, 0 === "", 0 === -1, 0 === -1.25, 0 === 1, 0 === 1.25, 0 === -2147483648, 0 === 2147483648, 0 === Infinity, 0 === -Infinity, 0 === NaN], [0.0 === true, 0.0 === false, 0.0 === null, 0.0 === void 0, 0.0 === 0, 0.0 === 0.0, 0.0 === -0, 0.0 === "", 0.0 === -1, 0.0 === -1.25, 0.0 === 1, 0.0 === 1.25, 0.0 === -2147483648, 0.0 === 2147483648, 0.0 === Infinity, 0.0 === -Infinity, 0.0 === NaN], [-0 === true, -0 === false, -0 === null, -0 === void 0, -0 === 0, -0 === 0.0, -0 === -0, -0 === "", -0 === -1, -0 === -1.25, -0 === 1, -0 === 1.25, -0 === -2147483648, -0 === 2147483648, -0 === Infinity, -0 === -Infinity, -0 === NaN], ["" === true, "" === false, "" === null, "" === void 0, "" === 0, "" === 0.0, "" === -0, "" === "", "" === -1, "" === -1.25, "" === 1, "" === 1.25, "" === -2147483648, "" === 2147483648, "" === Infinity, "" === -Infinity, "" === NaN], [-1 === true, -1 === false, -1 === null, -1 === void 0, -1 === 0, -1 === 0.0, -1 === -0, -1 === "", -1 === -1, -1 === -1.25, -1 === 1, -1 === 1.25, -1 === -2147483648, -1 === 2147483648, -1 === Infinity, -1 === -Infinity, -1 === NaN], [-1.25 === true, -1.25 === false, -1.25 === null, -1.25 === void 0, -1.25 === 0, -1.25 === 0.0, -1.25 === -0, -1.25 === "", -1.25 === -1, -1.25 === -1.25, -1.25 === 1, -1.25 === 1.25, -1.25 === -2147483648, -1.25 === 2147483648, -1.25 === Infinity, -1.25 === -Infinity, -1.25 === NaN], [1 === true, 1 === false, 1 === null, 1 === void 0, 1 === 0, 1 === 0.0, 1 === -0, 1 === "", 1 === -1, 1 === -1.25, 1 === 1, 1 === 1.25, 1 === -2147483648, 1 === 2147483648, 1 === Infinity, 1 === -Infinity, 1 === NaN], [1.25 === true, 1.25 === false, 1.25 === null, 1.25 === void 0, 1.25 === 0, 1.25 === 0.0, 1.25 === -0, 1.25 === "", 1.25 === -1, 1.25 === -1.25, 1.25 === 1, 1.25 === 1.25, 1.25 === -2147483648, 1.25 === 2147483648, 1.25 === Infinity, 1.25 === -Infinity, 1.25 === NaN], [-2147483648 === true, -2147483648 === false, -2147483648 === null, -2147483648 === void 0, -2147483648 === 0, -2147483648 === 0.0, -2147483648 === -0, -2147483648 === "", -2147483648 === -1, -2147483648 === -1.25, -2147483648 === 1, -2147483648 === 1.25, -2147483648 === -2147483648, -2147483648 === 2147483648, -2147483648 === Infinity, -2147483648 === -Infinity, -2147483648 === NaN], [2147483648 === true, 2147483648 === false, 2147483648 === null, 2147483648 === void 0, 2147483648 === 0, 2147483648 === 0.0, 2147483648 === -0, 2147483648 === "", 2147483648 === -1, 2147483648 === -1.25, 2147483648 === 1, 2147483648 === 1.25, 2147483648 === -2147483648, 2147483648 === 2147483648, 2147483648 === Infinity, 2147483648 === -Infinity, 2147483648 === NaN], [Infinity === true, Infinity === false, Infinity === null, Infinity === void 0, Infinity === 0, Infinity === 0.0, Infinity === -0, Infinity === "", Infinity === -1, Infinity === -1.25, Infinity === 1, Infinity === 1.25, Infinity === -2147483648, Infinity === 2147483648, Infinity === Infinity, Infinity === -Infinity, Infinity === NaN], [-Infinity === true, -Infinity === false, -Infinity === null, -Infinity === void 0, -Infinity === 0, -Infinity === 0.0, -Infinity === -0, -Infinity === "", -Infinity === -1, -Infinity === -1.25, -Infinity === 1, -Infinity === 1.25, -Infinity === -2147483648, -Infinity === 2147483648, -Infinity === Infinity, -Infinity === -Infinity, -Infinity === NaN], [NaN === true, NaN === false, NaN === null, NaN === void 0, NaN === 0, NaN === 0.0, NaN === -0, NaN === "", NaN === -1, NaN === -1.25, NaN === 1, NaN === 1.25, NaN === -2147483648, NaN === 2147483648, NaN === Infinity, NaN === -Infinity, NaN === NaN]];
}

function test() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var a = values[i];
      var b = values[j];
      var x = expected[i][j];
      x;
      func(a, b);
      x;
      left_funcs[i](b);
      x;
      right_funcs[j](a);
    }
  }

  var result = matrix();

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      expected[i][j];
      result[i][j];
    }
  }
}

test();
test();
