// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.7
description: >
    `.. in Object.create(proxy)` triggers trap.call(handler, target, P);
info: |
    [[HasProperty]] (P)

    ...
    2. Let handler be the value of the [[ProxyHandler]] internal slot of O.
    ...
    5. Let target be the value of the [[ProxyTarget]] internal slot of O.
    6. Let trap be GetMethod(handler, "has").
    ...
    9. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target, P»)).
    ...
features: [Proxy]
---*/

var _handler, _target, _prop;
var target = {};
var handler = {
  has: function(t, prop) {
    _handler = this;
    _target = t;
    _prop = prop;

    return false;
  }
};
var p = new Proxy(target, handler);

"attr" in Object.create(p);

assert.sameValue(_handler, handler, "handler is context");
assert.sameValue(_target, target, "target is the first parameter");
assert.sameValue(_prop, "attr", "given prop is the second paramter");
