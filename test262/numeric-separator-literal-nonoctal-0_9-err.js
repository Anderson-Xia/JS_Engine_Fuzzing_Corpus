// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator must not be in a NonOctalDecimalIntegerLiteral (0_9)
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix
    NumericLiteralBase BigIntLiteralSuffix

  NumericLiteralBase ::
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  BigIntLiteralSuffix :: n

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    0
    NonZeroDigit DecimalDigitsopt
    NonZeroDigit
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits
    NonOctalDecimalIntegerLiteral

  NonOctalDecimalIntegerLiteral ::
    0 NonOctalDigit
    LegacyOctalLikeDecimalIntegerLiteral NonOctalDigit
    NonOctalDecimalIntegerLiteral DecimalDigit

  LegacyOctalLikeDecimalIntegerLiteral ::
    0 OctalDigit
    LegacyOctalLikeDecimalIntegerLiteral OctalDigit

  NonOctalDigit::one of
    8 9
negative:
  phase: parse
  type: SyntaxError
features: [BigInt, numeric-separator-literal]
---*/

$DONOTEVALUATE();

0_9n;
