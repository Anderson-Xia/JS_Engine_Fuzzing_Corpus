// Copyright (C) 2019 Jason Orendorff. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: ASI test in field declarations -- error when method on same line
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var C = class {
  field /* no ASI here */ method(){}
}
