// Tests for IFEQX and GOTOX ops.
function testIfElse() {
  var src = "var a = 0;\n" + "if (x) {\n";

  for (var i = 0; i < 7000; i++) {
    src += "a = 1;";
  }

  src += "} else {\n";

  for (var i = 0; i < 7000; i++) {
    src += "a = 2;";
  }

  src += "}\n";
  src += "return a;";
  var f = new Function("x", src);
  f(true);
  1;
  f(false);
  2;
  f([1, 2, 3]);
  1;
  f();
  2;
}

testIfElse();

function testWhile() {
  var src = "var i = 0, j = 0;\n" + "while (i++ < 50) {\n";

  for (var i = 0; i < 5000; i++) {
    src += "j = i;";
  }

  src += "}\n";
  src += "return j;";
  var f = new Function(src);
  f();
  50;
}

testWhile();
