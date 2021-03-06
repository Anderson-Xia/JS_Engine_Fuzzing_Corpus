// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxycreate
description: >
  A Proxy is created with its [[ProxyHandler]] as revoked Proxy.
info: |
  ProxyCreate ( target, handler )

  [...]
  3. Let P be ! MakeBasicObject(« [[ProxyHandler]], [[ProxyTarget]] »).
  [...]
  7. Set P.[[ProxyHandler]] to handler.
  8. Return P.
features: [Proxy]
---*/

var revocable = Proxy.revocable({}, {});
revocable.revoke();

var proxy = new Proxy({}, revocable.proxy);
assert.sameValue(typeof proxy, "object");
