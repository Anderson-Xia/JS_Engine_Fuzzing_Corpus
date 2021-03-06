console.log("Tests what happens when the first attempt to cache an access goes down the unset route and then subsequently it tries to cache using a proto (less warmup).");

function foo(p, o) {
  if (p) {
    return o.f;
  }

  return 42;
}

noInline(foo); // Get foo into the LLInt

for (var i = 0; i < 10; ++i) {
  foo(false, {});
} // Warm up foo()'s p=true path and make it as polymorphic as possible.


for (var i = 0; i < 3; ++i) {
  foo(true, {
    f: 42
  });
  foo(true, {
    g: 1,
    f: 23
  });
} // Force compilation by going down p=false.
// while (!dfgCompiled({f:foo}))


for (var i = 0; i < 200; i++) {
  foo(false, {});
} // Hit the unset case.


for (var j = 0; j < 1; ++j) {
  var o = {};

  for (var i = 0; i < 1000; ++i) {
    o["i" + i] = i;
  }

  o.f = 42;
  foo(true, o);
}

function Blah() {
  ;
}

Blah.prototype.f = 23; // Hit the prototype case.

foo(true, new Blah());
