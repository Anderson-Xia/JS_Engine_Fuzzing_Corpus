//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//
// Test changing [writable] attribute should trigger Type transition.
//
function assert(value, msg) {
  if (!value) {
    throw new Error("Failed: " + msg);
  }
}

function endTest() {
  print("pass");
} //
// Win8: 713428
//
//  When CLEAR writable on a SHARED SimpleTypeHandler, we fail to ChangeType, thus fail to invalidate cache.
//  This test exploits the bug with PropertyString cache.
//
// Get a property string to manipulate with it


function getPropertyString(x, name) {
  var names = Object.getOwnPropertyNames(f);
  var i = names.indexOf(name);
  return names[i];
}

function changePrototype(f, expectedSucceed, msg) {
  var tmp = new Object(); // This exploits the PropertyString fast path in OP_SetElementI

  var proto = getPropertyString(f, "prototype");
  f[proto] = tmp;
  var succeeded = f.prototype === tmp;
  succeeded === expectedSucceed;
  msg;
} // Initially we use a shared SimpleTypeHandler with "prototype" property for a function.


function f() {
  ;
}

changePrototype(f, true, "Should be able to change f.prototype initially");
Object.defineProperty(f, "prototype", {
  writable: false
});
changePrototype(f, false, "f.prototype is now not writable, shouldn't be changed");
endTest();
