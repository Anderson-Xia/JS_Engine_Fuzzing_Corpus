// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-intl-numberformat-prototype-object
description: >
    Tests that Intl.NumberFormat.prototype is not an object that has been
    initialized as an Intl.NumberFormat.
author: Roozbeh Pournader
---*/

// test by calling a function that should fail as "this" is not an object
// initialized as an Intl.NumberFormat
assert.throws(TypeError, () => Intl.NumberFormat.prototype.format(0),
              "Intl.NumberFormat's prototype is not an object that has been initialized as an Intl.NumberFormat");
