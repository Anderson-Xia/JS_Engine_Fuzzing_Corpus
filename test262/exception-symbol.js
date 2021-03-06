// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padstart
description: String#padStart should fail if given a Symbol receiver.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  String.prototype.padStart.call(Symbol());
});
