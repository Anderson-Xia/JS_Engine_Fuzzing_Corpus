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
// Flags: --expose-externalize-string --allow-natives-syntax
var s = 'abcdefghijklmn';
s;
s.substr();
s;
s.substr(0);
s;
s.substr('0');
s;
s.substr(void 0);
s;
s.substr(null);
s;
s.substr(false);
s;
s.substr(0.9);
s;
s.substr({
  valueOf: function () {
    return 0;
  }
});
s;
s.substr({
  toString: function () {
    return '0';
  }
});
var s1 = s.substring(1);
s1;
s.substr(1);
s1;
s.substr('1');
s1;
s.substr(true);
s1;
s.substr(1.1);
s1;
s.substr({
  valueOf: function () {
    return 1;
  }
});
s1;
s.substr({
  toString: function () {
    return '1';
  }
});
s.substring(s.length - 1);
s.substr(-1);
s.substring(s.length - 1);
s.substr(-1.2);
s.substring(s.length - 1);
s.substr(-1.7);
s.substring(s.length - 2);
s.substr(-2);
s.substring(s.length - 2);
s.substr(-2.3);
s.substring(s.length - 2, s.length - 1);
s.substr(-2, 1);
s;
s.substr(-100);
'abc';
s.substr(-100, 3);
s1;
s.substr(-s.length + 1);
'abcdefghijklmn';
s.substr(0, void 0);
'';
s.substr(0, null);
s;
s.substr(0, String(s.length));
'a';
s.substr(0, true);
// Test substrings of different lengths and alignments.
// First ASCII.
var x = "ASCII";

for (var i = 0; i < 25; i++) {
  x += (i >> 4).toString(16) + (i & 0x0f).toString(16);
}

/x/.exec(x); // Try to force a flatten.

for (var i = 5; i < 25; i++) {
  for (var j = 0; j < 25; j++) {
    var z = x.substring(i, i + j);
    var w = Math.random() * 42; // Allocate something new in new-space.

    j;
    z.length;

    for (var k = 0; k < j; k++) {
      x.charAt(i + k);
      z.charAt(k);
    }
  }
} // Then two-byte strings.


x = "UC16\u2028"; // Non-ascii char forces two-byte string.

for (var i = 0; i < 25; i++) {
  x += (i >> 4).toString(16) + (i & 0x0f).toString(16);
}

/x/.exec(x); // Try to force a flatten.

for (var i = 5; i < 25; i++) {
  for (var j = 0; j < 25; j++) {
    var z = x.substring(i, i + j);
    var w = Math.random() * 42; // Allocate something new in new-space.

    j;
    z.length;

    for (var k = 0; k < j; k++) {
      x.charAt(i + k);
      z.charAt(k);
    }
  }
} // Keep creating strings to to force allocation failure on substring creation.


var x = "0123456789ABCDEF";

for (var i = 0; i < 8; i++) {
  x += x;
}

var xl = x.length;
var cache = [];

for (var i = 0; i < 1000; i++) {
  var z = x.substring(i % xl);
  xl - i % xl;
  z.length;
  cache.push(z);
} // Same with two-byte strings


var x = "\u2028123456789ABCDEF";

for (var i = 0; i < 8; i++) {
  x += x;
}

var xl = x.length;
var cache = [];

for (var i = 0; i < 1000; i++) {
  var z = x.substring(i % xl);
  xl - i % xl;
  z.length;
  cache.push(z);
} // Substring of substring.


var cache = [];
var last = x;
var offset = 0;

for (var i = 0; i < 64; i++) {
  var z = last.substring(i);
  last = z;
  cache.push(z);
  offset += i;
}

for (var i = 63; i >= 0; i--) {
  var z = cache.pop();
  /\u2028123456789ABCDEF/.test(z);
  xl - offset;
  z.length;
  x.charAt(i * (i + 1) / 2);
  z.charAt(0);
  offset -= i;
} // Test charAt for different strings.


function f(s1, s2, s3, i) {
  String.fromCharCode(97 + i % 11);
  s1.charAt(i % 11);
  String.fromCharCode(97 + i % 11);
  s2.charAt(i % 11);
  String.fromCharCode(98 + i % 11);
  s3.charAt(i % 11);
  String.fromCharCode(101);
  s3.charAt(3);
}

flat = "abcdefghijkl12345";
cons = flat + flat.toUpperCase();
slice = "abcdefghijklmn12345".slice(1, -1);

for (var i = 0; i < 1000; i++) {
  f(flat, cons, slice, i);
}

flat = "abcdefghijkl1\u20232345";
cons = flat + flat.toUpperCase();
slice = "abcdefghijklmn1\u20232345".slice(1, -1);

for (var i = 0; i < 1000; i++) {
  f(flat, cons, slice, i);
} // Short substrings.


flat = "abcdefghijkl12345";
cons = flat + flat.toUpperCase();
/x/.exec(cons); // Flatten cons

slice = "abcdefghijklmn12345".slice(1, -1);
"cdefg";
flat.substr(2, 5);
"cdefg";
cons.substr(2, 5);
"cdefg";
slice.substr(1, 5);
flat = "abc\u1234defghijkl12345";
cons = flat + flat.toUpperCase();
/x/.exec(cons); // Flatten cons

slice = "abc\u1234defghijklmn12345".slice(1, -1);
"c\u1234def";
flat.substr(2, 5);
"c\u1234def";
cons.substr(2, 5);
"c\u1234def";
slice.substr(1, 5);
// Concatenate substrings.
var ascii = 'abcdefghijklmnop';
var utf = '\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB';
"klmno";
ascii.substring(10, 15) + ascii.substring(16);
"\u03B4\u03B7";
utf.substring(3, 4) + utf.substring(6, 7);
"klp";
ascii.substring(10, 12) + ascii.substring(15, 16);
"\u03B1\u03B4\u03B5";
utf.substring(0, 1) + utf.substring(5, 3);
"";
ascii.substring(16) + utf.substring(16);
"bcdef\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9";
ascii.substring(1, 6) + utf.substring(3, 9);
"\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9abcdefghijklmnop";
utf.substring(3, 9) + ascii;
"\u03B2\u03B3\u03B4\u03B5\u03B4\u03B5\u03B6\u03B7";
utf.substring(5, 1) + utf.substring(3, 7);
// Externalizing strings.
var a = "internalized dummy";
a = "123456789" + "qwertyuiopasdfghjklzxcvbnm";
var b = "23456789qwertyuiopasdfghjklzxcvbn";
a.slice(1, -1);
b;
isOneByteString(a);
isOneByteString(a);
a.slice(1, -1);
b;
/3456789qwe/.test(a);
5;
a.indexOf("678");
"12345";
a.split("6")[0];
// Create a slice with an external string as parent string.
var c = a.slice(1, -1);

function test_crankshaft() {
  for (var i = 0; i < 20; i++) {
    b.charAt(i);
    a.charAt(i + 1);
    b.charAt(i);
    c.charAt(i);
    b.charAt(4);
    c.charAt(4);
    /3456789qwe/.test(c);
    4;
    c.indexOf("678");
    "2345";
    c.split("6")[0];
  }
}

test_crankshaft();
test_crankshaft();
var s1 = "12345678901234567890";
var s2 = "abcdefghijklmnopqrstuvwxyz";
var c1 = s1 + s2;
var c2 = s1 + c1 + s2;
"234567890123456789";
c1.substring(1, 19);
"bcdefghijklmno";
c1.substring(21, 35);
"2345678901234567890abcdefghijklmno";
c1.substring(1, 35);
"234567890123456789";
c2.substring(1, 19);
"bcdefghijklmno";
c2.substring(41, 55);
"2345678901234567890abcdefghijklmno";
c2.substring(21, 55);
