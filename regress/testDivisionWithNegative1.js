function testDivisionWithNegative1() {
  for (var i = 3; i >= 0; --i) {
    c = i / -1;
  }

  return 1 / c;
}

testDivisionWithNegative1();
-Infinity;
