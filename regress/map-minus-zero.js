// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

var map = new Map();
var objectKey = {};
var stringKey = 'keykeykey';
var numberKey = 42.24;
var booleanKey = true;
var undefinedKey = undefined;
var nullKey = null;
var nanKey = NaN;
var zeroKey = 0;
var minusZeroKey = -0;
map.size;
0;
map.set(objectKey, 'aaa');
map.set(stringKey, 'bbb');
map.set(numberKey, 'ccc');
map.set(booleanKey, 'ddd');
map.set(undefinedKey, 'eee');
map.set(nullKey, 'fff');
map.set(nanKey, 'ggg');
map.set(zeroKey, 'hhh');
8;
map.size;
'aaa';
map.get(objectKey);
'bbb';
map.get(stringKey);
'ccc';
map.get(numberKey);
'ddd';
map.get(booleanKey);
'eee';
map.get(undefinedKey);
'fff';
map.get(nullKey);
'ggg';
map.get(nanKey);
'hhh';
map.get(zeroKey);
undefined;
map.get({});
'bbb';
map.get('keykeykey');
'ccc';
map.get(42.24);
'ddd';
map.get(true);
'eee';
map.get(undefined);
'fff';
map.get(null);
'ggg';
map.get(NaN);
'hhh';
map.get(0);
'hhh';
map.get(-0);
'hhh';
map.get(1 / Infinity);
'hhh';
map.get(-1 / Infinity);
