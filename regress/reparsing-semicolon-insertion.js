console.log("This test checks that automatic semicolon insertion for parsing and reparsing agree. In a debug build, this test will fail with an assertion failure if they do not."); // According to the ECMA spec, these should all be syntax errors. However, the
// pre-existing behaviour of JavaScriptCore has always been to accept them. If
// JavaScriptCore is changed so that these are syntax errors in the future, then
// this test can simply be changed to reflect that.
// It is important that the closing braces be on the same line as the commas, so
// that a newline doesn't act as a terminator when lexing inbetween.

function commaTest() {
  a = 1;
}

try {
  commaTest();
} catch (e) {
  ;
}

function varCommaTest() {
  var a = 1;
}

try {
  varCommaTest();
} catch (e) {
  ;
}

function constCommaTest() {
  const a = 1;
}

try {
  constCommaTest();
} catch (e) {
  ;
}

function commaParenTest() {
  1;
}

try {
  commaParenTest();
} catch (e) {
  ;
}

function commaParenThrowTest() {
  x;
}

try {
  commaParenThrowTest();
} catch (e) {
  ;
}
