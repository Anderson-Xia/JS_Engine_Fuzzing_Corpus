function test() {
  (() => {
    ctypes.int32_t(1, 2, 3);
  })();

  "CType constructor takes at most one argument";

  (() => {
    ctypes.int32_t.array(1, 2);
  })();

  "CType.prototype.array takes at most one argument";
}

if (typeof ctypes === "object") {
  test();
}
