// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var f1 = function () {
  while (1) {
    ;
  }
};

function g1() {
  var s = "hey";

  f1 = function () {
    return true;
  };

  if (f1()) {
    return s;
  }
}

"hey";
g1();

var f2 = function () {
  do {
    ;
  } while (1);
};

function g2() {
  var s = "hey";

  f2 = function () {
    return true;
  };

  if (f2()) {
    return s;
  }
}

"hey";
g2();

var f3 = function () {
  for (;;) {
    ;
  }
};

function g3() {
  var s = "hey";

  f3 = function () {
    return true;
  };

  if (f3()) {
    return s;
  }
}

"hey";
g3();

var f4 = function () {
  for (;;) {
    ;
  }
};

function g4() {
  var s = "hey";

  f4 = function () {
    return true;
  };

  while (f4()) {
    return s;
  }
}

"hey";
g4();
