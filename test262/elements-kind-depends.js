// Copyright 2011 the V8 project authors. All rights reserved.
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

function burn() {
  var a = new Array(3);
  a[0] = 10;
  a[1] = 15.5;
  a[2] = 20;
  return a;
}

function check(a) {
  assertEquals(10, a[0]);
  assertEquals(15.5, a[1]);
  assertEquals(20, a[2]);
}

var b;
for (var i = 0; i < 3; ++i) {
  b = burn();
  check(b);  // all OK
}
%OptimizeFunctionOnNextCall(burn);
b = burn();
check(b);  // fails


function loop_test(x) {
  for (i=0;i<3;i++) {
    x[i] = (i+1) * 0.5;
  }
}

function check2(b) {
  assertEquals(0.5, b[0]);
  assertEquals(1.0, b[1]);
  assertEquals(1.5, b[2]);
}

for (var i = 0; i < 3; ++i) {
  b = [0,1,2];
  loop_test(b);
  check2(b);
}
%OptimizeFunctionOnNextCall(loop_test);
b = [0,1,2];
loop_test(b);
check2(b);
