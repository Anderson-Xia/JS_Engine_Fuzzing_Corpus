//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var d = ArrayBuffer.prototype;
print(d);
d.aaa = 20;
var a = Object.getPrototypeOf(new Int8Array(1).buffer);
a.foo = 20;
a.bar = 42;
print(a);
print(a.foo);
var b = Object.getPrototypeOf(new Int16Array(0).buffer);
print(b);

for (var i in b) {
  print(i + ' = ' + b[i]);
}

print(b.foo);
var c = Object.getOwnPropertyNames(b);

for (var i in c) {
  print(c[i]);
}

print(a == b);
var e = new Int32Array(0).buffer.constructor.prototype;
print(e.foo);

for (var i in e) {
  print(i + ' = ' + e[i]);
}

var ee = Object.getOwnPropertyNames(e);

for (var i in ee) {
  print(ee[i]);
}
