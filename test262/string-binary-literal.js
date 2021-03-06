// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Mathematical value of valid binary integer literals
info: |
    20.1.1.1 Number ( [ value ] )

    When Number is called with argument number, the following steps are taken:

    1. If no arguments were passed to this function invocation, let n be +0.
    2. Else, let n be ToNumber(value).

    [...]

    7.1.3.1 ToNumber Applied to the String Type

    All grammar symbols not explicitly defined above have the definitions used
    in the Lexical Grammar for numeric literals (11.8.3)

    [...]

    The MV of BinaryIntegerLiteral :: 0b BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryIntegerLiteral :: 0B BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryDigits :: BinaryDigit is the MV of BinaryDigit.
    The MV of BinaryDigits :: BinaryDigits BinaryDigit is (the MV of
    BinaryDigits × 2) plus the MV of BinaryDigit.
---*/

assert.sameValue(Number('0b0'), 0, 'lower-case head');
assert.sameValue(Number('0B0'), 0, 'upper-case head');
assert.sameValue(Number('0b00'), 0, 'lower-case head with leading zeros');
assert.sameValue(Number('0B00'), 0, 'upper-case head with leading zeros');

assert.sameValue(Number('0b1'), 1, 'lower-case head');
assert.sameValue(Number('0B1'), 1, 'upper-case head');
assert.sameValue(Number('0b01'), 1, 'lower-case head with leading zeros');
assert.sameValue(Number('0B01'), 1, 'upper-case head with leading zeros');

assert.sameValue(Number('0b10'), 2, 'lower-case head');
assert.sameValue(Number('0B10'), 2, 'upper-case head');
assert.sameValue(Number('0b010'), 2, 'lower-case head with leading zeros');
assert.sameValue(Number('0B010'), 2, 'upper-case head with leading zeros');

assert.sameValue(Number('0b11'), 3, 'lower-case head');
assert.sameValue(Number('0B11'), 3, 'upper-case head');
assert.sameValue(Number('0b011'), 3, 'lower-case head with leading zeros');
assert.sameValue(Number('0B011'), 3, 'upper-case head with leading zeros');
