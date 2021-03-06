//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const x = "const x";
this.x = 20;
delete this.x;
Object.preventExtensions(this);
Object.getOwnPropertyNames(this).forEach(function (p) {
  Object.defineProperty(this, p, {
    configurable: false
  });
});

if (Object.isSealed(this)) {
  print("PASS");
}
