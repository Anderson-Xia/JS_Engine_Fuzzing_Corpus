function shouldBe(actual, expected) {
  if (actual !== expected) {
    throw new Error('bad value: ' + actual);
  }
}

function testH(string) {
  return string.match(/H/);
}

noInline(testH);

function testHe(string) {
  return string.match(/He/);
}

noInline(testHe);

function testHel(string) {
  return string.match(/Hel/);
}

noInline(testHel);

function testHell(string) {
  return string.match(/Hell/);
}

noInline(testHell);

function testHello(string) {
  return string.match(/Hello/);
}

noInline(testHello);

function testHelloW(string) {
  return string.match(/HelloW/);
}

noInline(testHelloW);

function testHelloWo(string) {
  return string.match(/HelloWo/);
}

noInline(testHelloWo);

function testHelloWor(string) {
  return string.match(/HelloWor/);
}

noInline(testHelloWor);

function testHelloWorl(string) {
  return string.match(/HelloWorl/);
}

noInline(testHelloWorl);

function testHelloWorld(string) {
  return string.match(/HelloWorld/);
}

noInline(testHelloWorld);

for (var i = 0; i < 1e4; ++i) {
  shouldBe(testH("HelloWorld")[0], `H`);
  shouldBe(testHe("HelloWorld")[0], `He`);
  shouldBe(testHel("HelloWorld")[0], `Hel`);
  shouldBe(testHell("HelloWorld")[0], `Hell`);
  shouldBe(testHello("HelloWorld")[0], `Hello`);
  shouldBe(testHelloW("HelloWorld")[0], `HelloW`);
  shouldBe(testHelloWo("HelloWorld")[0], `HelloWo`);
  shouldBe(testHelloWor("HelloWorld")[0], `HelloWor`);
  shouldBe(testHelloWorl("HelloWorld")[0], `HelloWorl`);
  shouldBe(testHelloWorld("HelloWorld")[0], `HelloWorld`);
  shouldBe(testH("HelloWorldこんにちは")[0], `H`);
  shouldBe(testHe("HelloWorldこんにちは")[0], `He`);
  shouldBe(testHel("HelloWorldこんにちは")[0], `Hel`);
  shouldBe(testHell("HelloWorldこんにちは")[0], `Hell`);
  shouldBe(testHello("HelloWorldこんにちは")[0], `Hello`);
  shouldBe(testHelloW("HelloWorldこんにちは")[0], `HelloW`);
  shouldBe(testHelloWo("HelloWorldこんにちは")[0], `HelloWo`);
  shouldBe(testHelloWor("HelloWorldこんにちは")[0], `HelloWor`);
  shouldBe(testHelloWorl("HelloWorldこんにちは")[0], `HelloWorl`);
  shouldBe(testHelloWorld("HelloWorldこんにちは")[0], `HelloWorld`);
}
