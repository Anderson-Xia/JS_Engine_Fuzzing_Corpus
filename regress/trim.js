//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("\uFEFFabc".trim());
print("abc\u0009".trim());
print("abc\u000B".trim());
print("abc\u000C".trim());
print("abc\u0020".trim());
print("abc\u00A0".trim());
print("abc\uFFFF".trim() == "abc\uFFFF");
print("\u0009abc\u0009".trim());
print(" \u0009abc \u0009".trim());
print("\u000Babc\u000B".trim());
print("\u000Cabc\u000C".trim());
print("\u0020abc\u0020".trim());
print("\u00A0abc\u00A0".trim());
print("\uFEFFabc\uFEFF".trim());
print("\u0009\u0009".trim() == "");
print("\u000B\u000B".trim() == "");
print("\u000C\u000C".trim() == "");
print("\u0009abc".trim());
print("\u0020\u0020".trim() == "");
print("\u00A0\u00A0".trim() == "");
print("\uFEFF\uFEFF".trim() == "");
print("ab\u0009c".trim());
print("ab\u000Bc".trim());
print("ab\u000Cc".trim());
print("ab\u0020c".trim());
print("ab\u0085c".trim() == "ab\u0085c");
print("\u000Babc".trim());
print("ab\u00A0c".trim() == "ab\u00A0c");
print("ab\u200Bc".trim() == "ab\u200Bc");
print("ab\uFEFFc".trim() == "ab\uFEFFc");
print("\u000Aabc".trim());
print("\u000Dabc".trim());
print("\u2028abc".trim());
print("\u2029abc".trim());
print("abc\u000A".trim());
print("abc\u000D".trim());
print("abc\u2028".trim());
print("\u000Cabc".trim());
print("abc\u2029".trim());
print("\u000Aabc\u000A".trim());
print("\u000Dabc\u000D".trim());
print("\u2028abc\u2028".trim());
print("\u2029abc\u2029".trim());
print("\u000A\u000A".trim() == "");
print("\u2028\u2028".trim() == "");
print("\u000D\u000D".trim() == "");
print("\u2029abc as a multiline string".trim());
print("\u0020abc".trim());
print("             ".trim() == "");
print("\u00A0abc".trim());
print("\uFEFFabc".trimLeft());
print("abc\u0009".trimRight());
print("abc\u000B".trimRight());
print("abc\u000C".trimRight());
print("abc\u0020".trimRight());
print("abc\u00A0".trimRight());
print("abc\uFFFF".trimRight() == "abc\uFFFF");
print("\u0009\u0009".trimLeft() == "");
print("\u0009\u0009".trimRight() == "");
print("\u000B\u000B".trimLeft() == "");
print("\u000C\u000C".trimLeft() == "");
print("\u000B\u000B".trimRight() == "");
print("\u000C\u000C".trimRight() == "");
print("\u0009abc".trimLeft());
print("\u0020\u0020".trimRight() == "");
print("\u00A0\u00A0".trimRight() == "");
print("\uFEFF\uFEFF".trimRight() == "");
print("ab\u0009c".trimRight());
print("ab\u000Bc".trimRight());
print("ab\u000Cc".trimRight());
print("ab\u0020c".trimRight());
print("ab\u0085c".trimRight() == "ab\u0085c");
print("\u000Babc".trimLeft());
print("ab\u00A0c".trimRight() == "ab\u00A0c");
print("ab\u200Bc".trimRight() == "ab\u200Bc");
print("ab\uFEFFc".trimLeft() == "ab\uFEFFc");
print("\u000Aabc".trimLeft());
print("\u000Dabc".trimLeft());
print("\u2028abc".trimLeft());
print("\u2029abc".trimLeft());
print("abc\u000A".trimRight());
print("abc\u000D".trimRight());
print("a\u2028".trimRight());
print("\u000Cabc".trimLeft());
print("abc\u2029".trimRight());
print("\u000A\u000A".trimRight() == "");
print("\u2028\u2028".trimLeft() == "");
print("\u000D\u000D".trimRight() == "");
print("\u2029abc as a multiline string".trimLeft());
print("\u0020abc".trimLeft());
print("             ".trimRight() == "");
print("\u00A0abc".trimLeft()); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.split = String.prototype.split;
var f = obj.split();
print(a);