// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
    returns an Array object containing the results of the match, or null if the string did not match
es5id: 15.10.6.2_A1_T2
description: String is new String("123") and RegExp is /((1)|(12))((3)|(23))/
---*/

var __re = /((1)|(12))((3)|(23))/;
var __executed = __re.exec(new String("123"));

var __expected = ["123", "1", "1", undefined, "23", undefined, "23"];
__expected.index=0;
__expected.input="123";

assert.sameValue(
  __executed instanceof Array,
  true,
  'The result of evaluating (__executed instanceof Array) is expected to be true'
);

assert.sameValue(
  __executed.length,
  __expected.length,
  'The value of __executed.length is expected to equal the value of __expected.length'
);

assert.sameValue(
  __executed.index,
  __expected.index,
  'The value of __executed.index is expected to equal the value of __expected.index'
);

assert.sameValue(
  __executed.input,
  __expected.input,
  'The value of __executed.input is expected to equal the value of __expected.input'
);

for(var index=0; index<__expected.length; index++) {
  assert.sameValue(
    __executed[index],
    __expected[index],
    'The value of __executed[index] is expected to equal the value of __expected[index]'
  );
}
