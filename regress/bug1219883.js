function test() {
  var arr = new Int8Array(400);
  var idx = "384";
  arr[idx] = 9;
  arr[idx];
  9;
  idx = "1000";
  arr[idx] = 10;
  arr[idx];
  undefined;
  idx = "-1";
  arr[idx] = 0;
  arr[idx];
  undefined;
}

for (var i = 0; i < 10; i++) {
  test();
}
