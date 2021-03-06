//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Test of regex captures with some examples motivated by WAC.
print(/(ab)|(ac)/.exec("aabc"));
print(/(ab)|(ac)+/.exec("qacbacacd"));
print(/(ab)+|(ac)+/.exec("qababacacd"));
print(/(?:ab)+|(ac)+/.exec("qababacacd"));
print(/(?:ab)+|(?:ac)+/.exec("qababacacd"));
var a = new RegExp('^([^?]+)');
var a1 = a.exec("file://d:\\foo.txt");
print(a1);
var b = new RegExp('^([a-z+.-]+://(?:[^/]*/)*)[^/]*$');
var b1 = b.exec("file://d:\\foo.txt");
print(b1);
var c = b.exec(a.exec("file://d:\\foo.txt")[1])[1];
print(c);
var http = "http://ezedev/WAC/onenoteframe.aspx?Fi=c%3A%5CViewingData%5Cbasefile%5CTest&H=ol&C=0__ezedev&ui=en-US";
print(a.exec(http));
print(b.exec(a.exec(http)[1]));
var d = b.exec(a.exec(http)[1])[1];
print(d);
var d = 'foo bar'.replace(/(foo)|(bar)/g, '[$1$2]');
print(d + "");
var e = "ab".replace(/(.)(.){0}/, '$1$2');
print(e + "");
var groups = {};

function Assert(actual, expected, category, notStrict) {
  if (!groups[category]) {
    groups[category] = 1;
  } else {
    groups[category]++;
  }

  var condition = actual === expected;

  if (!!notStrict) {
    condition = actual == expected;
  }

  if (!condition) {
    print(category + " test " + groups[category] + " failed. Expected: " + expected + ", Actual: " + actual);
  } else {
    print(category + " test " + groups[category] + " passed");
  }
}

var needle = /(bc)/;
var haystack = "abcdef";
haystack.match(needle);
Assert(RegExp.$1, "bc", "numberedRegex", true);
Assert(RegExp.$2, "", "numberedRegex");
needle = /xy/;
haystack.match(needle);
Assert(RegExp.$1, "bc", "numberedRegex");
Assert(RegExp.$2, "", "numberedRegex");
