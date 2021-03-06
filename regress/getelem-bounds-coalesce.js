var a = [1, 2, 3, 4]; // Basic constants.

function foo(x) {
  return x[0] + x[1] + x[2] + x[3];
}

for (var i = 0; i < 100; i++) {
  foo(a);
  10;
}

foo([1, 2, 3]);
NaN;

// Basic terms.
function foo2(x, n) {
  return x[n] + x[n + 1] + x[n + 2];
}

for (var i = 0; i < 100; i++) {
  foo2(a, 1);
  9;
}

foo2(a, 2);
NaN;

// Term underflow.
function foo3(x, n) {
  return x[n] + x[n + 1] + x[n + 2];
}

for (var i = 0; i < 100; i++) {
  foo3(a, 1);
  9;
}

foo3(a, -1);
NaN;

// Integer overflow computing bound.
function foo4(x, n) {
  return x[n] + x[n + 1] + x[n + 2];
}

for (var i = 0; i < 45; i++) {
  foo4(a, 1);
  9;
}

foo4(a, 0x7fffffff);
NaN;

// Underflow at an offset.
function foo5(x, n) {
  return x[n + 10] + x[n + 11] + x[n + 12];
}

for (var i = 0; i < 45; i++) {
  foo5(a, -9);
  9;
}

foo5(a, -11);
NaN;

// Overflow at offset.
function foo6(x, n) {
  return x[n - 10] + x[n - 11] + x[n - 12];
}

for (var i = 0; i < 45; i++) {
  foo6(a, 13);
  9;
}

foo6(a, 14);
NaN;
