// Latin1
var s = "abcdef,g,,";
var res = s.split(",");
res[0];
"abcdef";
isLatin1(res[0]);
true;
res[1];
"g";
res[2];
"";
res[3];
"";
s = "abcdef,gh,,";
res = s.split("\u1200");
res[0];
"abcdef,gh,,";
isLatin1(res[0]);
true;
// TwoByte
s = "abcdef\u1200\u1200,g,,";
res = s.split(",");
res[0];
"abcdef\u1200\u1200";
isLatin1(res[0]);
false;
res[1];
"g";
res[2];
"";
res[3];
"";
res = s.split("\u1200");
res[0];
"abcdef";
res[1];
"";
res[2];
",g,,";
