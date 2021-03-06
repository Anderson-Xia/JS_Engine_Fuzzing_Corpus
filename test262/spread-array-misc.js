// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-gc --allow-natives-syntax

"use strict";
{


// We use g(a, b, c) instead of [a, b, c] when we care about Sminess being
// preserved.
function* g(...args) { for (const x of args) yield x; }
// G is like g but triggers GC to avoid allocation-site updates.
function* G(...args) { gc(); for (const x of args) { gc(); yield x; }; gc(); }


assertEquals([], [...[]]);
assertEquals([], [...[], ]);
assertEquals([1], [1, ...[]]);
assertEquals([1, 2], [1, ...[], 2]);
assertEquals([, ], [, ...[]]);
assertEquals([, ], [, ...[], ]);
assertEquals([, ], [, ...[],...[]]);
assertEquals([, ], [, ...[],...[], ]);
assertEquals([1, 2, 3], [...[1, 2, 3]]);
assertEquals([1, 1.5], [...g(1, 1.5)]);
assertEquals([, 1, 1.5], [, ...g(1, 1.5)]);
assertEquals([1, 2, 2.5, 3.5], [...g(1, 2, 2.5, 3.5)]);
assertEquals([2.5, 1, 3.5, 4], [...g(2.5, 1, 3.5, 4)]);
assertEquals([2.5, 3.5, 1, 4], [...g(2.5, 3.5, 1, 4)]);
assertEquals([{a: 1}, {b: 2}], [...[{a: 1}, {b: 2}]]);
assertEquals([0, {a: 1}, {b: 2}], [...g(0, {a: 1}, {b: 2})]);
assertEquals([1, 1.5, "2"], [...g(1, 1.5, "2")]);


function f1(x) {
  return [...[x, x, x]];
}
assertEquals([1, 1, 1], f1(1));
assertEquals([0.1, 0.1, 0.1], f1(0.1));
assertEquals([{}, {}, {}], f1({}));
assertEquals([1, 1, 1], f1(1));

function f1_(x) {
  return [...[x, x, x]];
}
assertEquals([1, 1, 1], f1_(1));
%OptimizeFunctionOnNextCall(f1_);
assertEquals([1, 1, 1], f1_(1));
assertEquals([0.1, 0.1, 0.1], f1_(0.1));
assertEquals([{}, {}, {}], f1_({}));
assertEquals([1, 1, 1], f1_(1));


function f2(x) {
  return [...[x, x, x], ,];
}
assertEquals([1, 1, 1, ,], f2(1));
assertEquals([0.1, 0.1, 0.1, ,], f2(0.1));
assertEquals([{}, {}, {}, ,], f2({}));
assertEquals([1, 1, 1, ,], f2(1));

function f2_(x) {
  return [...[x, x, x], ,];
}
assertEquals([1, 1, 1, ,], f2_(1));
%OptimizeFunctionOnNextCall(f2_);
assertEquals([1, 1, 1, ,], f2_(1));
assertEquals([0.1, 0.1, 0.1, ,], f2_(0.1));
assertEquals([{}, {}, {}, ,], f2_({}));
assertEquals([1, 1, 1, ,], f2_(1));


function f3(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f3(g(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f3(g({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f3(g(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f3(g(1, 0.1, "1")));

function f3_(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f3_(g(1, 0.1, "1")));
%OptimizeFunctionOnNextCall(f3_);
assertEquals([1, 0.1, "1", , ], f3_(g(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f3_(g({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f3_(g(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f3_(g(1, 0.1, "1")));


function f4(x) {
  return [...[x, x, x]];
}
assertEquals([1, 1, 1], f4(1));
assertEquals([0.1, 0.1, 0.1], f4(0.1));
assertEquals([{}, {}, {}], f4({}));
assertEquals([1, 1, 1], f4(1));

function f4_(x) {
  return [...[x, x, x]];
}
assertEquals([1, 1, 1], f4_(1));
%OptimizeFunctionOnNextCall(f4_);
assertEquals([1, 1, 1], f4_(1));
assertEquals([0.1, 0.1, 0.1], f4_(0.1));
assertEquals([{}, {}, {}], f4_({}));
assertEquals([1, 1, 1], f4_(1));


function f5(x) {
  return [...[x, x, x], ,];
}
assertEquals([1, 1, 1, ,], f5(1));
assertEquals([0.1, 0.1, 0.1, ,], f5(0.1));
assertEquals([{}, {}, {}, ,], f5({}));
assertEquals([1, 1, 1, ,], f5(1));

function f5_(x) {
  return [...[x, x, x], ,];
}
assertEquals([1, 1, 1, ,], f5_(1));
%OptimizeFunctionOnNextCall(f5_);
assertEquals([1, 1, 1, ,], f5_(1));
assertEquals([0.1, 0.1, 0.1, ,], f5_(0.1));
assertEquals([{}, {}, {}, ,], f5_({}));
assertEquals([1, 1, 1, ,], f5_(1));


function f6(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f6(g(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f6(g({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f6(g(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f6(g(1, 0.1, "1")));

function f6_(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f6_(g(1, 0.1, "1")));
%OptimizeFunctionOnNextCall(f6_);
assertEquals([1, 0.1, "1", , ], f6_(g(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f6_(g({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f6_(g(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f6_(g(1, 0.1, "1")));


function f7(it) {
  return [...it];
}
assertEquals([1, 0.1, "1"], f7(G(1, 0.1, "1")));
assertEquals([{}, 0.1, "1"], f7(G({}, 0.1, "1")));
assertEquals([0, 0, 0], f7(G(0, 0, 0)));
assertEquals([1, 0.1, "1"], f7(G(1, 0.1, "1")));

function f7_(it) {
  return [...it];
}
assertEquals([1, 0.1, "1"], f7_(G(1, 0.1, "1")));
%OptimizeFunctionOnNextCall(f7_);
assertEquals([1, 0.1, "1"], f7_(G(1, 0.1, "1")));
assertEquals([{}, 0.1, "1"], f7_(G({}, 0.1, "1")));
assertEquals([0, 0, 0], f7_(G(0, 0, 0)));
assertEquals([1, 0.1, "1"], f7_(G(1, 0.1, "1")));


function f8(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f8(G(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f8(G({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f8(G(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f8(G(1, 0.1, "1")));

function f8_(it) {
  return [...it, ,];
}
assertEquals([1, 0.1, "1", , ], f8_(G(1, 0.1, "1")));
%OptimizeFunctionOnNextCall(f8_);
assertEquals([1, 0.1, "1", , ], f8_(G(1, 0.1, "1")));
assertEquals([{}, 0.1, "1", , ], f8_(G({}, 0.1, "1")));
assertEquals([0, 0, 0, , ], f8_(G(0, 0, 0)));
assertEquals([1, 0.1, "1", , ], f8_(G(1, 0.1, "1")));


// Megamorphic
function* f9() {
  for (let i = 0; i < 160000; ++i) yield i;
}
let a = [...f9()];
assertEquals(160000, a.length);
assertEquals(0, a[0]);
assertEquals(159999, a[159999]);
%OptimizeFunctionOnNextCall(f9);
a = [...f9()];
assertEquals(160000, a.length);
assertEquals(0, a[0]);
assertEquals(159999, a[159999]);

// Slow stub
function f10(b) {
  let x = [
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ...b];
  return x.length;
}
assertEquals(4335, f10([3.3, 3.3, 3.3]));
assertEquals(4335, f10([{}, "", 3.3]));
%OptimizeFunctionOnNextCall(f10);
assertEquals(4335, f10([{}, "", 3.3]));
assertEquals(4332, f10([]));


}  // top-level scope
