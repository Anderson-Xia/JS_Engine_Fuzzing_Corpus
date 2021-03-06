function myFloor(x) {
  if (x >= 0) {
    return x - Math.abs(x % 1);
  } else {
    return x - Math.abs(1 + x % 1);
  }
}

function floorRangeTest(x) {
  if (10 < x) {
    if (x < 100) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (-100 < x) {
    if (x < -10) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (-(4294967296 - 1) < x) {
    if (x < 10) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (-10 < x) {
    if (x < 4294967296) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (-2147483648 < x) {
    if (x < 10) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (-2147483648 - 1 < x) {
    if (x < 10) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (10 < x) {
    if (x < 2147483648) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (10 < x) {
    if (x < 2147483649) {
      Math.floor(x);
      myFloor(x);
    }
  }

  if (Math.pow(2, 31) < x) {
    if (x < Math.pow(2, 33)) {
      Math.floor(x);
      myFloor(x);
    }
  }
}

var a = [Math.pow(2, 31), Math.pow(2, 33), -4294967296.4, 214748364.2, -50.4, 50.4];

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < a.length; j++) {
    floorRangeTest(a[j]);
  }
}

for (var j = 0; j < 30; j++) {
  (function () {
    Math.floor(1.5);
  })();
}

for (var j = 0; j < 30; j++) {
  (function () {
    Math.floor(-1.5);
  })();
}

for (var j = 0; j < 30; j++) {
  (function () {
    Math.floor(-127.5);
  })();
}
