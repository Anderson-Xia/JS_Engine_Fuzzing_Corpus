// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Strict equality comparison of BigInt values
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.
  2. If Type(x) is Number or BigInt, then
    a. Return ! Type(x)::equal(x, y).

  sec-numeric-types-bigint-equal
  BigInt::equal (x, y)

    The abstract operation BigInt::equal with two arguments x and y of BigInt type returns true if x and y have the same mathematical integer value and false otherwise.

features: [BigInt]
---*/
assert.sameValue(0n === 0n, true, 'The result of (0n === 0n) is true');
assert.sameValue(1n === 1n, true, 'The result of (1n === 1n) is true');
assert.sameValue(-1n === -1n, true, 'The result of (-1n === -1n) is true');
assert.sameValue(0n === -0n, true, 'The result of (0n === -0n) is true');
assert.sameValue(-0n === 0n, true, 'The result of (-0n === 0n) is true');
assert.sameValue(0n === 1n, false, 'The result of (0n === 1n) is false');
assert.sameValue(1n === 0n, false, 'The result of (1n === 0n) is false');
assert.sameValue(0n === -1n, false, 'The result of (0n === -1n) is false');
assert.sameValue(-1n === 0n, false, 'The result of (-1n === 0n) is false');
assert.sameValue(1n === -1n, false, 'The result of (1n === -1n) is false');
assert.sameValue(-1n === 1n, false, 'The result of (-1n === 1n) is false');

assert.sameValue(
  0x1fffffffffffff01n === 0x1fffffffffffff01n,
  true,
  'The result of (0x1fffffffffffff01n === 0x1fffffffffffff01n) is true'
);

assert.sameValue(
  0x1fffffffffffff01n === 0x1fffffffffffff02n,
  false,
  'The result of (0x1fffffffffffff01n === 0x1fffffffffffff02n) is false'
);

assert.sameValue(
  0x1fffffffffffff02n === 0x1fffffffffffff01n,
  false,
  'The result of (0x1fffffffffffff02n === 0x1fffffffffffff01n) is false'
);

assert.sameValue(
  -0x1fffffffffffff01n === -0x1fffffffffffff01n,
  true,
  'The result of (-0x1fffffffffffff01n === -0x1fffffffffffff01n) is true'
);

assert.sameValue(
  -0x1fffffffffffff01n === -0x1fffffffffffff02n,
  false,
  'The result of (-0x1fffffffffffff01n === -0x1fffffffffffff02n) is false'
);

assert.sameValue(
  -0x1fffffffffffff02n === -0x1fffffffffffff01n,
  false,
  'The result of (-0x1fffffffffffff02n === -0x1fffffffffffff01n) is false'
);

assert.sameValue(
  0x10000000000000000n === 0n,
  false,
  'The result of (0x10000000000000000n === 0n) is false'
);

assert.sameValue(
  0n === 0x10000000000000000n,
  false,
  'The result of (0n === 0x10000000000000000n) is false'
);

assert.sameValue(
  0x10000000000000000n === 1n,
  false,
  'The result of (0x10000000000000000n === 1n) is false'
);

assert.sameValue(
  1n === 0x10000000000000000n,
  false,
  'The result of (1n === 0x10000000000000000n) is false'
);

assert.sameValue(
  0x10000000000000000n === -1n,
  false,
  'The result of (0x10000000000000000n === -1n) is false'
);

assert.sameValue(
  -1n === 0x10000000000000000n,
  false,
  'The result of (-1n === 0x10000000000000000n) is false'
);

assert.sameValue(
  0x10000000000000001n === 0n,
  false,
  'The result of (0x10000000000000001n === 0n) is false'
);

assert.sameValue(
  0n === 0x10000000000000001n,
  false,
  'The result of (0n === 0x10000000000000001n) is false'
);

assert.sameValue(
  -0x10000000000000000n === 0n,
  false,
  'The result of (-0x10000000000000000n === 0n) is false'
);

assert.sameValue(
  0n === -0x10000000000000000n,
  false,
  'The result of (0n === -0x10000000000000000n) is false'
);

assert.sameValue(
  -0x10000000000000000n === 1n,
  false,
  'The result of (-0x10000000000000000n === 1n) is false'
);

assert.sameValue(
  1n === -0x10000000000000000n,
  false,
  'The result of (1n === -0x10000000000000000n) is false'
);

assert.sameValue(
  -0x10000000000000000n === -1n,
  false,
  'The result of (-0x10000000000000000n === -1n) is false'
);

assert.sameValue(
  -1n === -0x10000000000000000n,
  false,
  'The result of (-1n === -0x10000000000000000n) is false'
);

assert.sameValue(
  -0x10000000000000001n === 0n,
  false,
  'The result of (-0x10000000000000001n === 0n) is false'
);

assert.sameValue(
  0n === -0x10000000000000001n,
  false,
  'The result of (0n === -0x10000000000000001n) is false'
);

assert.sameValue(
  0x10000000000000000n === 0x100000000n,
  false,
  'The result of (0x10000000000000000n === 0x100000000n) is false'
);

assert.sameValue(
  0x100000000n === 0x10000000000000000n,
  false,
  'The result of (0x100000000n === 0x10000000000000000n) is false'
);
