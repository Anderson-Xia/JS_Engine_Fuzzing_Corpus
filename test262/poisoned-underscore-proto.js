// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-ClassExpression
description: >
  ClassExpression should directly set [[Prototype]] internal slot.
info: |
  ClassDefinitionEvaluation

  [...]
  7. Let proto be ObjectCreate(protoParent).

  ObjectCreate ( proto [ , internalSlotsList ] )

  [...]
  4. Set obj.[[Prototype]] to proto.
features: [class, __proto__]
---*/

Object.defineProperty(Object.prototype, '__proto__', {
  set: function() {
    throw new Test262Error('should not be called');
  },
});

var A = class extends Array {};

assert.sameValue(new A(1).length, 1);
