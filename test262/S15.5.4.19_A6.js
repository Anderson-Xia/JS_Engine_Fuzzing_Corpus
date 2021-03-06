// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase has not prototype property
es5id: 15.5.4.19_A6
description: Checking String.prototype.toLocaleUpperCase.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toLocaleUpperCase.prototype !== undefined) {
  throw new Test262Error('#1: String.prototype.toLocaleUpperCase.prototype === undefined. Actual: ' + String.prototype.toLocaleUpperCase.prototype);
}
//
//////////////////////////////////////////////////////////////////////////////
