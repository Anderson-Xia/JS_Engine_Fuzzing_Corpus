// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Fake Symbol if undefined, allowing test to run in non-Harmony mode as well.
this.Symbol = typeof Symbol != 'undefined' ? Symbol : String;

function TestSetProtoValueCyclic() {
  var objects = [Object.prototype, {}, Array.prototype, [], Error.prototype, new TypeError()];

  for (var i = 0; i < objects.length; i += 2) {
    var object = objects[i];
    var value = objects[i + 1];

    (function () {
      object.__proto__ = value;
    })();

    TypeError;
  }
}

;
TestSetProtoValueCyclic();
var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
var getProto = desc.get;
var setProto = desc.set;

function TestNoPoisonPill() {
  "function";
  typeof desc.get;
  "function";
  typeof desc.set;
  "desc.get.call({})";
  "desc.set.call({}, {})";
  var obj = {};
  var obj2 = {};
  desc.set.call(obj, obj2);
  obj.__proto__;
  obj2;
  desc.get.call(obj);
  obj2;
}

TestNoPoisonPill();

function TestRedefineObjectPrototypeProtoGetter() {
  Object.defineProperty(Object.prototype, "__proto__", {
    get: function () {
      return 42;
    }
  });
  ({}).__proto__;
  42;
  desc.get.call({});
  Object.prototype;
  var desc2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  desc2.get.call({});
  42;
  desc2.set.call({});
  undefined;
  Object.defineProperty(Object.prototype, "__proto__", {
    set: function (x) {
      ;
    }
  });
  var desc3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  desc3.get.call({});
  42;
  desc3.set.call({});
  undefined;
}

TestRedefineObjectPrototypeProtoGetter();

function TestRedefineObjectPrototypeProtoSetter() {
  Object.defineProperty(Object.prototype, "__proto__", {
    set: undefined
  });

  (function () {
    "use strict";

    var o = {};
    var p = {};
    o.__proto__ = p;
  })();

  TypeError;
}

TestRedefineObjectPrototypeProtoSetter();

function TestGetProtoOfValues() {
  getProto.call(1);
  Number.prototype;
  getProto.call(true);
  Boolean.prototype;
  getProto.call(false);
  Boolean.prototype;
  getProto.call('s');
  String.prototype;
  getProto.call(Symbol());
  Symbol.prototype;

  (function () {
    getProto.call(null);
  })();

  TypeError;

  (function () {
    getProto.call(undefined);
  })();

  TypeError;
}

TestGetProtoOfValues();
var values = [1, true, false, 's', Symbol()];

function TestSetProtoOfValues() {
  var proto = {};

  for (var i = 0; i < values.length; i++) {
    setProto.call(values[i], proto);
    undefined;
  }

  (function () {
    setProto.call(null, proto);
  })();

  TypeError;

  (function () {
    setProto.call(undefined, proto);
  })();

  TypeError;
}

TestSetProtoOfValues();

function TestSetProtoToValue() {
  var object = {};
  var proto = {};
  setProto.call(object, proto);
  var valuesWithUndefined = values.concat(undefined);

  for (var i = 0; i < valuesWithUndefined.length; i++) {
    setProto.call(object, valuesWithUndefined[i]);
    undefined;
    getProto.call(object);
    proto;
  } // null is the only valid value that can be used as a [[Prototype]].


  setProto.call(object, null);
  undefined;
  getProto.call(object);
  null;
}

TestSetProtoToValue();

function TestDeleteProto() {
  delete Object.prototype.__proto__;
  var o = {};
  var p = {};
  o.__proto__ = p;
  Object.getPrototypeOf(o);
  Object.prototype;
  var desc4 = Object.getOwnPropertyDescriptor(o, "__proto__");
  desc4.configurable;
  desc4.enumerable;
  desc4.writable;
  desc4.value;
  p;
}

TestDeleteProto();
