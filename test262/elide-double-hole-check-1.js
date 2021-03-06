// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Flags: --allow-natives-syntax

function f1(a, i) {
  return a[i]
}

var a1 = [,,,,,,,,,,,,,,,,,,0.5];
assertEquals(undefined, f1(a1, 1));
assertEquals(undefined, f1(a1, 1));
%OptimizeFunctionOnNextCall(f1);
assertEquals(undefined, f1(a1, 1));
assertEquals(undefined, f1(a1, 1));

function f2(a, i) {
  return a[i] + 0.5;
}
var a2_b = [0.0,,];
assertEquals(0.5, f2(a2_b, 0));
assertEquals(0.5, f2(a2_b, 0));
%OptimizeFunctionOnNextCall(f2);
assertEquals(0.5, f2(a2_b, 0));
assertEquals(NaN, f2(a2_b, 1));
a2_b.__proto__ = [1.5,1.5,1.5];
assertEquals(2, f2(a2_b, 1));
assertEquals(0.5, f2(a2_b, 0));
