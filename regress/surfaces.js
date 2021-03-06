/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Check surface features of the Reflect object.
typeof Reflect;
'object';
Object.getPrototypeOf(Reflect);
Object.prototype;
Reflect.toString();
'[object Object]';

(() => new Reflect())();

TypeError;
var desc = Object.getOwnPropertyDescriptor(this, "Reflect");
desc.enumerable;
false;
desc.configurable;
true;
desc.writable;
true;

for (var name in Reflect) {
  throw new Error("Reflect should not have any enumerable properties");
} // The name and length of all the standard Reflect methods.


var methods = {
  apply: 3,
  construct: 2,
  defineProperty: 3,
  deleteProperty: 2,
  get: 2,
  getOwnPropertyDescriptor: 2,
  getPrototypeOf: 1,
  has: 2,
  isExtensible: 1,
  ownKeys: 1,
  preventExtensions: 1,
  set: 3,
  setPrototypeOf: 2
}; // Check that all Reflect properties are listed above.

for (var name of Reflect.ownKeys(Reflect)) {
  // If this assertion fails, congratulations on implementing a new Reflect feature!
  // Add it to the list of methods above.
  if (name !== "parse") {
    name in methods;
    true;
    `unexpected property found: Reflect.${name}`;
  }
} // Check the .length and property attributes of each Reflect method.


for (var name of Object.keys(methods)) {
  var desc = Object.getOwnPropertyDescriptor(Reflect, name);
  desc.enumerable;
  false;
  desc.configurable;
  true;
  desc.writable;
  true;
  var f = desc.value;
  typeof f;
  "function";
  f.length;
  methods[name];
} // Check that the SpiderMonkey "resolve hook" mechanism does not resurrect the
// Reflect property once it is deleted.


delete this.Reflect;
"Reflect" in this;
false;
reportCompare(0, 0);
