function assert(b) {
  ;
}

noInline(assert);

function test1() {
  let map = new Map();
  map.set(20, 30);
  let iter = map[Symbol.iterator]();
  let {
    value,
    done
  } = iter.next();
  value[0] === 20;
  value[1] === 30;
  !done;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test1();
}

function test2() {
  let map = new Map();
  map.set(20, 30);
  let iter = map[Symbol.iterator]();
  let {
    value,
    done
  } = iter.next();
  value[0] === 20;
  value[1] === 30;
  !done;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
  map.set(40, 50);
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test2();
}

function test3() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map[Symbol.iterator]();
  let {
    value,
    done
  } = iter.next();
  value[0] === 20;
  value[1] === 30;
  !done;
  ({
    value,
    done
  } = iter.next());
  !done;
  value[0] === 50;
  value[1] === 60;
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value[0] === "foo";
  value[1] === "bar";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test3();
}

function test4() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map[Symbol.iterator]();
  let {
    value,
    done
  } = iter.next();
  value[0] === 20;
  value[1] === 30;
  !done;
  map.clear();
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test4();
}

function test5() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map[Symbol.iterator]();
  let {
    value,
    done
  } = iter.next();
  value[0] === 20;
  value[1] === 30;
  !done;
  map.clear();
  map.set(50, 60);
  ({
    value,
    done
  } = iter.next());
  !done;
  value[0] === 50;
  value[1] === 60;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test5();
}

function test6() {
  let map = new Map();
  map.set(20, 30);
  let i = 0;

  for (let [key, value] of map) {
    map.delete(key);
    map.set(key, value);
    i++;

    if (i === 1000) {
      break;
    }
  }

  i === 1000;
}

test6();

function test7() {
  let map = new Map();
  map.set(20, 30);
  let i = 0;

  for (let [key, value] of map) {
    map.clear();
    map.set(key, value);
    i++;

    if (i === 1000) {
      break;
    }
  }

  i === 1000;
}

test7();

function test8() {
  let map = new Map();
  map.set(20, 30);

  for (let i = 0; i < 500; i++) {
    map.set(i, i);
  }

  let i = 0;

  for (let [key, value] of map) {
    key === value;
    i++;

    if (key === 250) {
      break;
    }
  }

  i === 251;
}

test8();

function test9() {
  1 / -0 === -Infinity;
  let map = new Map();
  map.set(-0, 50); // We should normalize -0 to +0 in the key.

  for (let [key, value] of map) {
    1 / key === Infinity;
  }

  map.get(0.0) === 50;
  map.get(0) === 50;
  map.get(-0) === 50;
  map.get(+0) === 50;
}

for (let i = 0; i < 100; i++) {
  test9();
}

function test10() {
  let map = new Map();
  map.set("negZero", -0); // We should *not* normalize -0 to +0 in the value.

  for (let [key, value] of map) {
    1 / value === -Infinity;
  }
}

for (let i = 0; i < 100; i++) {
  test10();
}

function test11() {
  let map = new Map();
  map.set(20, 30);
  let iter = map.keys();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 20;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test11();
}

function test12() {
  let map = new Map();
  map.set(20, 30);
  let iter = map.values();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 30;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test12();
}

function test13() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.keys();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 20;
  map.clear();
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "foo";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test13();
}

function test14() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.values();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 30;
  map.clear();
  map.set("foo", "bar");
  ;
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "bar";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test14();
}

function test15() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.keys();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 20;
  ;
  ({
    value,
    done
  } = iter.next());
  !done;
  value === 50;
  map.clear();
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "foo";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test15();
}

function test16() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.values();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 30;
  ;
  ({
    value,
    done
  } = iter.next());
  !done;
  value === 60;
  map.clear();
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "bar";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test16();
}

function test17() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.keys();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 20;
  ;
  ({
    value,
    done
  } = iter.next());
  !done;
  value === 50;
  map.clear();
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "foo";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
  map.set("hello", "world");
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test17();
}

function test18() {
  let map = new Map();
  map.set(20, 30);
  map.set(50, 60);
  let iter = map.values();
  let {
    value,
    done
  } = iter.next();
  !done;
  value === 30;
  ;
  ({
    value,
    done
  } = iter.next());
  !done;
  value === 60;
  map.clear();
  map.set("foo", "bar");
  ({
    value,
    done
  } = iter.next());
  !done;
  value === "bar";
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
  map.set("hello", "world");
  ({
    value,
    done
  } = iter.next());
  done;
  value === undefined;
}

for (let i = 0; i < 100; i++) {
  test18();
}
