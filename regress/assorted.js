// Reflect.parse Latin1
var ast = Reflect.parse("function f() { return 3; }");
ast.body[0].id.name;
"f";
isLatin1(ast.body[0].id.name);
true;
// Reflect.parse TwoByte
var ast = Reflect.parse("function f\u1200() { return 3; }");
ast.body[0].id.name;
"f\u1200";
// obj.toSource Latin1
var o = {};
Object.defineProperty(o, "prop", {
  get: function () {
    return 1;
  },
  set: function () {
    return 2;
  },
  enumerable: true,
  configurable: true
});
o.toSource();
"({get prop() { return 1; }, set prop() { return 2; }})";
// obj.toSource TwoByte
Object.defineProperty(o, "prop", {
  get: function () {
    return "\u1200";
  },
  set: function () {
    return "\u1200";
  },
  enumerable: true
});
o.toSource();
'({get prop() { return "\\u1200"; }, set prop() { return "\\u1200"; }})';

var ff = function () {
  return 10;
};

ff.toSource = function () {
  return "((11))";
};

Object.defineProperty(o, "prop", {
  get: ff,
  set: ff,
  enumerable: true
});
o.toSource();
"({get prop(11), set prop(11)})";
// XDR
// Latin1 string constant
test = "'string123';";
evalWithCache(test, {
  assertEqBytecode: true,
  assertEqResult: true
}); // TwoByte string constant

test = "'string\u1234';";
evalWithCache(test, {
  assertEqBytecode: true,
  assertEqResult: true
});
