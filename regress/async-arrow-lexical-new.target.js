// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function assertEqualsAsync(expected, run, msg) {
  var actual;
  var hadValue = false;
  var hadError = false;
  var promise = run();

  if (typeof promise !== "object" || typeof promise.then !== "function") {
    throw new MjsUnitAssertionError("Expected " + run.toString() + " to return a Promise, but it returned " + PrettyPrint(promise));
  }

  promise.then(function (value) {
    hadValue = true;
    actual = value;
  }, function (error) {
    hadError = true;
    actual = error;
  });
  hadValue || hadError;

  if (hadError) {
    throw actual;
  }

  hadValue;
  "Expected '" + run.toString() + "' to produce a value";
  expected;
  actual;
  msg;
}

;

class BaseClass {
  constructor() {
    return async () => new.target;
  }

}

class ChildClass extends BaseClass {}

BaseClass;

(() => new BaseClass()())();

ChildClass;

(() => new ChildClass()())();
