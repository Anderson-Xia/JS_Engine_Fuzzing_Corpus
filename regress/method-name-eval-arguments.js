// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function TestSloppyMode() {
  var o = {
    eval() {
      return 1;
    },

    arguments() {
      return 2;
    }

  };
  1;
  o.eval();
  2;
  o.arguments();
})();

(function TestStrictMode() {
  'use strict';

  var o = {
    eval() {
      return 1;
    },

    arguments() {
      return 2;
    }

  };
  1;
  o.eval();
  2;
  o.arguments();
})();
