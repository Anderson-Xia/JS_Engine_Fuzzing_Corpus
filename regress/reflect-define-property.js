// Copyright 2012-2015 the V8 project authors. All rights reserved.
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
// Tests the Reflect.defineProperty method - ES6 26.1.3
// This is adapted from mjsunit/object-define-property.js.
// Flags: --allow-natives-syntax
// Check that an exception is thrown when null is passed as object.
var exception = false;

try {
  Reflect.defineProperty(null, null, null);
} catch (e) {
  exception = true;
  /called on non-object/.test(e);
}

exception;
// Check that an exception is thrown when undefined is passed as object.
exception = false;

try {
  Reflect.defineProperty(undefined, undefined, undefined);
} catch (e) {
  exception = true;
  /called on non-object/.test(e);
}

exception;
// Check that an exception is thrown when non-object is passed as object.
exception = false;

try {
  Reflect.defineProperty(0, "foo", undefined);
} catch (e) {
  exception = true;
  /called on non-object/.test(e);
}

exception;
// Object.
var obj1 = {}; // Values.

var val1 = 0;
var val2 = 0;
var val3 = 0;

function setter1() {
  val1++;
}

function getter1() {
  return val1;
}

function setter2() {
  val2++;
}

function getter2() {
  return val2;
}

function setter3() {
  val3++;
}

function getter3() {
  return val3;
} // Descriptors.


var emptyDesc = {};
var accessorConfigurable = {
  set: setter1,
  get: getter1,
  configurable: true
};
var accessorNoConfigurable = {
  set: setter2,
  get: getter2,
  configurable: false
};
var accessorOnlySet = {
  set: setter3,
  configurable: true
};
var accessorOnlyGet = {
  get: getter3,
  configurable: true
};
var accessorDefault = {
  set: function () {
    ;
  }
};
var dataConfigurable = {
  value: 1000,
  configurable: true
};
var dataNoConfigurable = {
  value: 2000,
  configurable: false
};
var dataWritable = {
  value: 3000,
  writable: true
}; // Check that we can't add property with undefined attributes.

(function () {
  Reflect.defineProperty(obj1, "foo", undefined);
})();

TypeError;
Reflect.defineProperty(obj1, "foo", emptyDesc);
undefined;
obj1.foo;
// We should, however, be able to retrieve the propertydescriptor which should
// have all default values (according to 8.6.1).
var desc = Object.getOwnPropertyDescriptor(obj1, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
undefined;
desc.set;
undefined;
desc.value;
undefined;
// Make sure that getOwnPropertyDescriptor does not return a descriptor
// with default values if called with non existing property (otherwise
// the test above is invalid).
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc;
undefined;
Reflect.defineProperty(obj1, "foo", accessorConfigurable);
Reflect.defineProperty(obj1, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
undefined;
1;
obj1.bar = 1;
1;
val1;
1;
obj1.bar = 1;
2;
val1;
2;
obj1.bar;
Reflect.defineProperty(obj1, "bar", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
undefined;
1;
obj1.bar = 1;
2;
val1;
1;
val2;
1;
obj1.bar = 1;
2;
val1;
2;
val2;
2;
obj1.bar;
Reflect.defineProperty(obj1, "bar", accessorConfigurable);
Reflect.defineProperty(obj1, "bar", dataConfigurable);
Reflect.defineProperty(obj1, "bar", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
undefined;
1;
obj1.bar = 1;
2;
val1;
3;
val2;
1;
obj1.bar = 1;
2;
val1;
4;
val2;
4;
obj1.bar;
Reflect.defineProperty(obj1, "setOnly", accessorOnlySet);
desc = Object.getOwnPropertyDescriptor(obj1, "setOnly");
desc.configurable;
desc.enumerable;
desc.set;
accessorOnlySet.set;
desc.writable;
undefined;
desc.value;
undefined;
desc.get;
undefined;
1;
obj1.setOnly = 1;
1;
val3;
Reflect.defineProperty(obj1, "setOnly", accessorOnlyGet);
desc = Object.getOwnPropertyDescriptor(obj1, "setOnly");
desc.configurable;
desc.enumerable;
desc.get;
accessorOnlyGet.get;
desc.set;
accessorOnlySet.set;
desc.writable;
undefined;
desc.value;
undefined;
1;
obj1.setOnly = 1;
2;
val3;
Reflect.defineProperty(obj1, "both", accessorConfigurable);
Reflect.defineProperty(obj1, "both", accessorOnlySet);
desc = Object.getOwnPropertyDescriptor(obj1, "both");
desc.configurable;
desc.enumerable;
desc.set;
accessorOnlySet.set;
desc.get;
accessorConfigurable.get;
desc.writable;
undefined;
desc.value;
undefined;
1;
obj1.both = 1;
3;
val3;
Reflect.defineProperty(obj1, "foobar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
1000;
desc.value;
1000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
//Try writing to non writable attribute - should remain 1000
obj1.foobar = 1001;
obj1.foobar;
1000;
Reflect.defineProperty(obj1, "foobar", dataWritable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
3000;
desc.value;
3000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
// Writing to the property should now be allowed
obj1.foobar = 1001;
obj1.foobar;
1001;
Reflect.defineProperty(obj1, "foobar", dataNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
2000;
desc.value;
2000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
Reflect.defineProperty(obj1, "foobar", dataConfigurable);
Reflect.defineProperty(obj1, "foobar", dataConfigurable);
Reflect.defineProperty(obj1, "foobar", dataNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
2000;
desc.value;
2000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
// New object
var obj2 = {}; // Make accessor - redefine to data

Reflect.defineProperty(obj2, "foo", accessorConfigurable);
Reflect.defineProperty(obj2, "foo", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "foo");
obj2.foo;
1000;
desc.value;
1000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
Reflect.defineProperty(obj2, "foo", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
undefined;
1;
obj2.foo = 1;
3;
val1;
4;
val2;
3;
obj2.foo;
Reflect.defineProperty(obj2, "bar", dataConfigurable);
Reflect.defineProperty(obj2, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
undefined;
1;
obj2.bar = 1;
4;
val1;
4;
val2;
4;
obj2.foo;
Reflect.defineProperty(obj2, "bar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "bar");
obj2.bar;
1000;
desc.value;
1000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;

// Redefinition of an accessor defined using __defineGetter__ and
// __defineSetter__.
function get() {
  return this.x;
}

function set(x) {
  this.x = x;
}

;
var obj3 = {
  x: 1000
};

obj3.__defineGetter__("foo", get);

obj3.__defineSetter__("foo", set);

desc = Object.getOwnPropertyDescriptor(obj3, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
get();
desc.set;
set();
desc.value;
undefined;
1;
obj3.foo = 1;
1;
obj3.x;
1;
obj3.foo;
Reflect.defineProperty(obj3, "foo", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj3, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
undefined;
1;
obj3.foo = 1;
5;
val2;
5;
obj3.foo;

obj3.__defineGetter__("bar", get);

obj3.__defineSetter__("bar", set); // Redefine back to data property


Reflect.defineProperty(obj3, "bar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj3, "bar");
obj3.bar;
1000;
desc.value;
1000;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
undefined;
desc.set;
undefined;
var obj4 = {};

var func = function () {
  return 42;
};

obj4.bar = func;
42;
obj4.bar();
Reflect.defineProperty(obj4, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj4, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
undefined;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
undefined;
1;
obj4.bar = 1;
5;
val1;
5;
obj4.bar;

// Make sure an error is thrown when trying to access to redefined function.
try {
  obj4.bar();
  false;
} catch (e) {
  /is not a function/.test(e);
} // Test that all possible differences in step 6 in DefineOwnProperty are
// exercised, i.e., any difference in the given property descriptor and the
// existing properties should not return true, but throw an error if the
// existing configurable property is false.


var obj5 = {}; // Enumerable will default to false.

Reflect.defineProperty(obj5, 'foo', accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj5, 'foo'); // First, test that we are actually allowed to set the accessor if all
// values are of the descriptor are the same as the existing one.

Reflect.defineProperty(obj5, 'foo', accessorNoConfigurable);
// Different setter.
var descDifferent = {
  configurable: false,
  enumerable: false,
  set: setter1,
  get: getter2
};
Reflect.defineProperty(obj5, 'foo', descDifferent);
// Different getter.
descDifferent = {
  configurable: false,
  enumerable: false,
  set: setter2,
  get: getter1
};
Reflect.defineProperty(obj5, 'foo', descDifferent);
// Different enumerable.
descDifferent = {
  configurable: false,
  enumerable: true,
  set: setter2,
  get: getter2
};
Reflect.defineProperty(obj5, 'foo', descDifferent);
// Different configurable.
descDifferent = {
  configurable: false,
  enumerable: true,
  set: setter2,
  get: getter2
};
Reflect.defineProperty(obj5, 'foo', descDifferent);
// No difference.
descDifferent = {
  configurable: false,
  enumerable: false,
  set: setter2,
  get: getter2
}; // Make sure we can still redefine if all properties are the same.

Reflect.defineProperty(obj5, 'foo', descDifferent);
// Make sure that obj5 still holds the original values.
desc = Object.getOwnPropertyDescriptor(obj5, 'foo');
desc.get;
getter2();
desc.set;
setter2();
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj5, 'bar', dataNoConfigurable);
Reflect.defineProperty(obj5, 'bar', dataNoConfigurable);
// Different value.
descDifferent = {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 1999
};
Reflect.defineProperty(obj5, 'bar', descDifferent);
// Different writable.
descDifferent = {
  configurable: false,
  enumerable: false,
  writable: true,
  value: 2000
};
Reflect.defineProperty(obj5, 'bar', descDifferent);
// Different enumerable.
descDifferent = {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2000
};
Reflect.defineProperty(obj5, 'bar', descDifferent);
// Different configurable.
descDifferent = {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 2000
};
Reflect.defineProperty(obj5, 'bar', descDifferent);
// No difference.
descDifferent = {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 2000
}; // Make sure we can still redefine if all properties are the same.

Reflect.defineProperty(obj5, 'bar', descDifferent);
// Make sure that obj5 still holds the original values.
desc = Object.getOwnPropertyDescriptor(obj5, 'bar');
desc.value;
2000;
desc.writable;
desc.enumerable;
desc.configurable;
// Make sure that we can't overwrite +0 with -0 and vice versa.
var descMinusZero = {
  value: -0,
  configurable: false
};
var descPlusZero = {
  value: +0,
  configurable: false
};
Reflect.defineProperty(obj5, 'minuszero', descMinusZero);
Reflect.defineProperty(obj5, 'minuszero', descMinusZero);
Reflect.defineProperty(obj5, 'minuszero', descPlusZero);
Reflect.defineProperty(obj5, 'pluszero', descPlusZero);
Reflect.defineProperty(obj5, 'pluszero', descPlusZero);
Reflect.defineProperty(obj5, 'pluszero', descMinusZero);
var obj6 = {};
obj6[1] = 'foo';
obj6[2] = 'bar';
obj6[3] = '42';
obj6[4] = '43';
obj6[5] = '44';
var descElement = {
  value: 'foobar'
};
var descElementNonConfigurable = {
  value: 'barfoo',
  configurable: false
};
var descElementNonWritable = {
  value: 'foofoo',
  writable: false
};
var descElementNonEnumerable = {
  value: 'barbar',
  enumerable: false
};
var descElementAllFalse = {
  value: 'foofalse',
  configurable: false,
  writable: false,
  enumerable: false
}; // Redefine existing property.

Reflect.defineProperty(obj6, '1', descElement);
desc = Object.getOwnPropertyDescriptor(obj6, '1');
desc.value;
'foobar';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj6, '2', descElementNonConfigurable);
desc = Object.getOwnPropertyDescriptor(obj6, '2');
desc.value;
'barfoo';
desc.writable;
desc.enumerable;
desc.configurable;

// Can use defineProperty to change the value of a non
// configurable property.
try {
  Reflect.defineProperty(obj6, '2', descElement);
  desc = Object.getOwnPropertyDescriptor(obj6, '2');
  desc.value;
  'foobar';
} catch (e) {} // Ensure that we can't change the descriptor of a
// non configurable property.


var descAccessor = {
  get: function () {
    return 0;
  }
};
Reflect.defineProperty(obj6, '2', descAccessor);
Reflect.defineProperty(obj6, '2', descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(obj6, '2');
desc.value;
'foofoo';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj6, '3', descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(obj6, '3');
desc.value;
'foofoo';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj6, '4', descElementNonEnumerable);
desc = Object.getOwnPropertyDescriptor(obj6, '4');
desc.value;
'barbar';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj6, '5', descElementAllFalse);
desc = Object.getOwnPropertyDescriptor(obj6, '5');
desc.value;
'foofalse';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(obj6, '15', descElement);
desc = Object.getOwnPropertyDescriptor(obj6, '15');
desc.value;
'foobar';
desc.writable;
desc.enumerable;
desc.configurable;
// Make sure that we can't redefine using direct access.
obj6[15] = 'overwrite';
obj6[15];
'foobar';
// Repeat the above tests on an array.
var arr = new Array();
arr[1] = 'foo';
arr[2] = 'bar';
arr[3] = '42';
arr[4] = '43';
arr[5] = '44';
var descElement = {
  value: 'foobar'
};
var descElementNonConfigurable = {
  value: 'barfoo',
  configurable: false
};
var descElementNonWritable = {
  value: 'foofoo',
  writable: false
};
var descElementNonEnumerable = {
  value: 'barbar',
  enumerable: false
};
var descElementAllFalse = {
  value: 'foofalse',
  configurable: false,
  writable: false,
  enumerable: false
}; // Redefine existing property.

Reflect.defineProperty(arr, '1', descElement);
desc = Object.getOwnPropertyDescriptor(arr, '1');
desc.value;
'foobar';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(arr, '2', descElementNonConfigurable);
desc = Object.getOwnPropertyDescriptor(arr, '2');
desc.value;
'barfoo';
desc.writable;
desc.enumerable;
desc.configurable;

// Can use defineProperty to change the value of a non
// configurable property of an array.
try {
  Reflect.defineProperty(arr, '2', descElement);
  desc = Object.getOwnPropertyDescriptor(arr, '2');
  desc.value;
  'foobar';
} catch (e) {} // Ensure that we can't change the descriptor of a
// non configurable property.


var descAccessor = {
  get: function () {
    return 0;
  }
};
Reflect.defineProperty(arr, '2', descAccessor);
Reflect.defineProperty(arr, '2', descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(arr, '2');
desc.value;
'foofoo';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(arr, '3', descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(arr, '3');
desc.value;
'foofoo';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(arr, '4', descElementNonEnumerable);
desc = Object.getOwnPropertyDescriptor(arr, '4');
desc.value;
'barbar';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(arr, '5', descElementAllFalse);
desc = Object.getOwnPropertyDescriptor(arr, '5');
desc.value;
'foofalse';
desc.writable;
desc.enumerable;
desc.configurable;
Reflect.defineProperty(arr, '15', descElement);
desc = Object.getOwnPropertyDescriptor(arr, '15');
desc.value;
'foobar';
desc.writable;
desc.enumerable;
desc.configurable;
16;
arr.length;
Reflect.defineProperty(arr, '0x20', descElement);
16;
arr.length;
// See issue 968: http://code.google.com/p/v8/issues/detail?id=968
var o = {
  x: 42
};
Reflect.defineProperty(o, "x", {
  writable: false
});
42;
o.x;
o.x = 37;
42;
o.x;
o = {
  x: 42
};
Reflect.defineProperty(o, "x", {});
42;
o.x;
o.x = 37; // Writability is preserved.

37;
o.x;
var o = {};
Reflect.defineProperty(o, "x", {
  writable: false
});
undefined;
o.x;
o.x = 37;
undefined;
o.x;
o = {
  get x() {
    return 87;
  }

};
Reflect.defineProperty(o, "x", {
  writable: false
});
undefined;
o.x;
o.x = 37;
undefined;
o.x;
// Ignore inherited properties.
o = {
  __proto__: {
    x: 87
  }
};
Reflect.defineProperty(o, "x", {
  writable: false
});
undefined;
o.x;
o.x = 37;
undefined;
o.x;

function testDefineProperty(obj, propertyName, desc, resultDesc) {
  Reflect.defineProperty(obj, propertyName, desc);
  var actualDesc = Object.getOwnPropertyDescriptor(obj, propertyName);
  resultDesc.enumerable;
  actualDesc.enumerable;
  resultDesc.configurable;
  actualDesc.configurable;

  if (resultDesc.hasOwnProperty('value')) {
    resultDesc.value;
    actualDesc.value;
    resultDesc.writable;
    actualDesc.writable;
    resultDesc.hasOwnProperty('get');
    resultDesc.hasOwnProperty('set');
  } else {
    resultDesc.get;
    actualDesc.get;
    resultDesc.set;
    actualDesc.set;
    resultDesc.hasOwnProperty('value');
    resultDesc.hasOwnProperty('writable');
  }
} // tests redefining existing property with a generic descriptor


o = {
  p: 42
};
testDefineProperty(o, 'p', {}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: true
}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  configurable: true
}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: false
}, {
  value: 42,
  writable: true,
  enumerable: false,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  configurable: false
}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: false
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: true,
  configurable: true
}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: false,
  configurable: true
}, {
  value: 42,
  writable: true,
  enumerable: false,
  configurable: true
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: true,
  configurable: false
}, {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: false
});
o = {
  p: 42
};
testDefineProperty(o, 'p', {
  enumerable: false,
  configurable: false
}, {
  value: 42,
  writable: true,
  enumerable: false,
  configurable: false
}); // can make a writable, non-configurable field non-writable

o = {
  p: 42
};
Reflect.defineProperty(o, 'p', {
  configurable: false
});
testDefineProperty(o, 'p', {
  writable: false
}, {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
}); // redefine of get only property with generic descriptor

o = {};
Reflect.defineProperty(o, 'p', {
  get: getter1,
  enumerable: true,
  configurable: true
});
testDefineProperty(o, 'p', {
  enumerable: false,
  configurable: false
}, {
  get: getter1,
  set: undefined,
  enumerable: false,
  configurable: false
}); // redefine of get/set only property with generic descriptor

o = {};
Reflect.defineProperty(o, 'p', {
  get: getter1,
  set: setter1,
  enumerable: true,
  configurable: true
});
testDefineProperty(o, 'p', {
  enumerable: false,
  configurable: false
}, {
  get: getter1,
  set: setter1,
  enumerable: false,
  configurable: false
}); // redefine of set only property with generic descriptor

o = {};
Reflect.defineProperty(o, 'p', {
  set: setter1,
  enumerable: true,
  configurable: true
});
testDefineProperty(o, 'p', {
  enumerable: false,
  configurable: false
}, {
  get: undefined,
  set: setter1,
  enumerable: false,
  configurable: false
}); // Regression test: Ensure that growing dictionaries are not ignored.

o = {};

for (var i = 0; i < 1000; i++) {
  // Non-enumerable property forces dictionary mode.
  Reflect.defineProperty(o, i, {
    value: i,
    enumerable: false
  });
}

999;
o[999];
// Regression test: Bizarre behavior on non-strict arguments object.
// TODO(yangguo): Tests disabled, needs investigation!

/*
(function test(arg0) {
  // Here arguments[0] is a fast alias on arg0.
  Reflect.defineProperty(arguments, "0", {
    value:1,
    enumerable:false
  });
  // Here arguments[0] is a slow alias on arg0.
  Reflect.defineProperty(arguments, "0", {
    value:2,
    writable:false
  });
  // Here arguments[0] is no alias at all.
  Reflect.defineProperty(arguments, "0", {
    value:3
  });
  assertEquals(2, arg0);
  assertEquals(3, arguments[0]);
})(0);
*/
// Regression test: We should never observe the hole value.
var objectWithGetter = {};

objectWithGetter.__defineGetter__('foo', function () {
  ;
});

undefined;

objectWithGetter.__lookupSetter__('foo');

var objectWithSetter = {};

objectWithSetter.__defineSetter__('foo', function (x) {
  ;
});

undefined;

objectWithSetter.__lookupGetter__('foo');

// An object with a getter on the prototype chain.
function getter() {
  return 111;
}

function anotherGetter() {
  return 222;
}

function testGetterOnProto(expected, o) {
  expected;
  o.quebec;
}

obj1 = {};
Reflect.defineProperty(obj1, "quebec", {
  get: getter,
  configurable: true
});
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
Reflect.defineProperty(obj1, "quebec", {
  get: anotherGetter
});
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3); // An object with a setter on the prototype chain.

var modifyMe;

function setter(x) {
  modifyMe = x + 1;
}

function anotherSetter(x) {
  modifyMe = x + 2;
}

function testSetterOnProto(expected, o) {
  modifyMe = 333;
  o.romeo = 444;
  expected;
  modifyMe;
}

obj1 = {};
Reflect.defineProperty(obj1, "romeo", {
  set: setter,
  configurable: true
});
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
Reflect.defineProperty(obj1, "romeo", {
  set: anotherSetter
});
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3); // Removing a setter on the prototype chain.

function testSetterOnProtoStrict(o) {
  "use strict";

  o.sierra = 12345;
}

obj1 = {};
Reflect.defineProperty(obj1, "sierra", {
  get: getter,
  set: setter,
  configurable: true
});
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
Reflect.defineProperty(obj1, "sierra", {
  get: getter,
  set: undefined,
  configurable: true
});
exception = false;

try {
  testSetterOnProtoStrict(obj3);
} catch (e) {
  exception = true;
  /which has only a getter/.test(e);
}

exception;

// Test assignment to a getter-only property on the prototype chain. This makes
// sure that crankshaft re-checks its assumptions and doesn't rely only on type
// feedback (which would be monomorphic here).
function Assign(o) {
  o.blubb = 123;
}

function C() {
  ;
}

Assign(new C());
Assign(new C());
Reflect.defineProperty(C.prototype, "blubb", {
  get: function () {
    return -42;
  }
});
Assign(new C()); // Test that changes to the prototype of a simple constructor are not ignored,
// even after creating initial instances.

function C() {
  this.x = 23;
}

23;
new C().x;

C.prototype.__defineSetter__('x', function (value) {
  this.y = 23;
});

void 0;
new C().x;
