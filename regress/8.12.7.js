/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function setup() {
  var o = {
    all: 1,
    nowrite: 1,
    noconfig: 1,
    noble: 1
  };
  Object.defineProperty(o, 'nowrite', {
    writable: false
  });
  Object.defineProperty(o, 'noconfig', {
    configurable: false
  });
  Object.defineProperty(o, 'noble', {
    writable: false,
    configurable: false
  });
  return o;
}

testLenientAndStrict('var o = setup(); delete o.all', returns(true), returns(true));
true;
testLenientAndStrict('var o = setup(); delete o.nowrite', returns(true), returns(true));
true;
testLenientAndStrict('var o = setup(); delete o.noconfig', returns(false), raisesException(TypeError));
true;
testLenientAndStrict('var o = setup(); delete o.noble', returns(false), raisesException(TypeError));
true;
reportCompare(true, true);
