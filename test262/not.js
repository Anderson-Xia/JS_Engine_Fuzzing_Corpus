// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

var data = [{
  a: 0x9f0305cd75e4n,
  r: -0x9f0305cd75e5n
}, {
  a: -0xe8e9c8312f553c9n,
  r: 0xe8e9c8312f553c8n
}, {
  a: -0x1a29f0783a66534da3c024ad1cc854073f886888fen,
  r: 0x1a29f0783a66534da3c024ad1cc854073f886888fdn
}, {
  a: -0xfc2cc19496c1ced95be832ca5246d41c526b9fa28b88bcd39813aa336n,
  r: 0xfc2cc19496c1ced95be832ca5246d41c526b9fa28b88bcd39813aa335n
}, {
  a: 0x13ebn,
  r: -0x13ecn
}, {
  a: 0x4c12d642b2a132f0c927ec7504b530fb45d5e249163ffdc59feb3de31881n,
  r: -0x4c12d642b2a132f0c927ec7504b530fb45d5e249163ffdc59feb3de31882n
}, {
  a: 0x49637a624cb8782002e3e0874ad76215e188cee948c7ce7b0f66e1d0n,
  r: -0x49637a624cb8782002e3e0874ad76215e188cee948c7ce7b0f66e1d1n
}, {
  a: -0x81cbae84e6753b885ada46c0bf72368c083fed622fn,
  r: 0x81cbae84e6753b885ada46c0bf72368c083fed622en
}, {
  a: -0xcdf793acfdd08b6n,
  r: 0xcdf793acfdd08b5n
}, {
  a: 0x88n,
  r: -0x89n
}, {
  a: -0x1fn,
  r: 0x1en
}, {
  a: 0x5c3278e76266b9e93d63eb4f2aa53716220aa1n,
  r: -0x5c3278e76266b9e93d63eb4f2aa53716220aa2n
}, {
  a: -0x9f4fe05n,
  r: 0x9f4fe04n
}, {
  a: 0xdn,
  r: -0xen
}, {
  a: -0x74a9d63d02bd1393b311211e35c8b2d11e2367ffffb812683365f02d98n,
  r: 0x74a9d63d02bd1393b311211e35c8b2d11e2367ffffb812683365f02d97n
}, {
  a: 0x8a2831ae3e1b6b21a7b3d7ee921a0c0edf29b272d654f647169a5a6141d3aaf41439n,
  r: -0x8a2831ae3e1b6b21a7b3d7ee921a0c0edf29b272d654f647169a5a6141d3aaf4143an
}, {
  a: 0xa2ef28270a7e668e190bc303537f5a8ba3f0d59bcn,
  r: -0xa2ef28270a7e668e190bc303537f5a8ba3f0d59bdn
}, {
  a: -0x4f8bd11ee4ef38682a0c94en,
  r: 0x4f8bd11ee4ef38682a0c94dn
}, {
  a: 0x5436d0721d1282755068add3b5ab5424cb455fad50811a9afff0be5n,
  r: -0x5436d0721d1282755068add3b5ab5424cb455fad50811a9afff0be6n
}, {
  a: 0x5db6907c92529f517d24a6ff7303de42cb9059ae2adc0c22n,
  r: -0x5db6907c92529f517d24a6ff7303de42cb9059ae2adc0c23n
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = ~d.a;
  if (d.r !== r) {
    print("Input:    " + d.a.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
