// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

var data = [{
  a: 0x77a87n,
  b: 0xde08e7433fb9584911b8cb4bc7eed802299b4489fc635974d063847da4e8b461df5dn,
  r: 0xde08e7433fb9584911b8cb4bc7eed802299b4489fc635974d063847da4e8b467ffdfn
}, {
  a: -0x1d3ff6f353f2d035ed7b4b8e5e4ae1c8d162n,
  b: -0xcf829b11c2f996f388b22cd03aeb75ec434f3be8fde6466n,
  r: -0x192f308302c00024a55a4004520a81c84062n
}, {
  a: 0x6dbbc93af9a9c222187dn,
  b: -0xfaa906348dc49859c34bc7c6n,
  r: -0xfaa9020404c400500149c781n
}, {
  a: 0xf8n,
  b: 0x4388532n,
  r: 0x43885fan
}, {
  a: -0x3ee35e1823b91414618f05995e11594920539921e9440n,
  b: -0x58c5811ee19db01b7d9824c49682af55956119cfbc9868287ef138da08ee3n,
  r: -0x3c80040002800414010101891c1048082051180008423n
}, {
  a: -0xa2a70c5da9a7e98f242e82d518n,
  b: 0n,
  r: -0xa2a70c5da9a7e98f242e82d518n
}, {
  a: 0x7868475f450ff2b15a03eccb4d26ce8711383f615cn,
  b: 0x1c62774e1db239cb461c4190b54de4d872f9484cf82ed1258cc14580cf29f608n,
  r: 0x1c62774e1db239cb461c41f8fd4fffdd7ffbf95efbeedb6daecfc791ff3ff75cn
}, {
  a: 0x865d033028551a71f6f9f8d7b36cf9819n,
  b: -0x68e30391d9831a4ea3e65b2e433f55ba398n,
  r: -0x68610290c9830a4482000206000c1102387n
}, {
  a: -0x817a0dacbafbaf40ef819fc62a8efc4b4960n,
  b: -0x5af313e32a5386e29cb5d2b34d54f04da389f33d52444f177671e41n,
  r: -0x12a04840a008a008f019504008074430841n
}, {
  a: -0xef8c9475210c0a31aa12c34db6e7737609c75b78a54cn,
  b: -0xba91b4ec3a5390db84febaeaddb8209155413e2e02fb0n,
  r: -0xa9080441210808300a02820d9282011400034260250cn
}, {
  a: -0xf4e707078d14001959f4n,
  b: 0n,
  r: -0xf4e707078d14001959f4n
}, {
  a: 0x601f0n,
  b: 0x246fbfn,
  r: 0x266fffn
}, {
  a: -0x9ccd3d1b6d4bcde8643ad641d395980bn,
  b: -0x379e57728185fd098383a23c7f56dn,
  r: -0x13901650808484018100003859009n
}, {
  a: 0xcc4b3ba719bd1b37f254f36a72ee375ad22abn,
  b: -0xb0c220750f2dad9de91ffb8a7bbf8ffefen,
  r: -0x4000640e0c8098a0095880188a02dc55n
}, {
  a: 0xa230c33b718cd563f9c1577f4f8da160851902341ba1a6e6bdcbec413d98a18n,
  b: 0xc2f4e2db2df59ccc34690479ebe64df967n,
  r: 0xa230c33b718cd563f9c1577f4f8dad6fcf3db2ff5bede7e6bdcffeff7ddfb7fn
}, {
  a: -0x5fbac9a8f47n,
  b: 0xf1bfe6f97e8f516685372b06ea89659c3df4ab3f6779e5c0b41e1b570fn,
  r: -0x54ba0808841n
}, {
  a: -0x7fd2d4a4c60ba795e2fcn,
  b: 0x33dcea557cc5156dacb9ad7b252598172f92d8cf7d38e69f0a0n,
  r: -0xd02d02000082194025cn
}, {
  a: -0x3833089d7cf4e0181247572037a90cc2506342a2191137345e3a0e10n,
  b: 0xededf5c7e54cd86afc6d838205c8a78cac7a0e410792a21cf3e4e38dd8ca2dd80n,
  r: -0x283208103824c01802450720300908c2004142200111072052180210n
}, {
  a: -0x188818a47abbfe64357ccd1a33fb5cb875f86n,
  b: -0x14faf1811ee737d048c025f7a1fe156f7e90d23a699d040609e631836500df2e30cdn,
  r: -0x108808202299d040201c411832500cb061085n
}, {
  a: 0xf60c0260022920bdbd1c837778657936956c15b4cb1n,
  b: 0xa10df3b397c24n,
  r: 0xf60c0260022920bdbd1c8377786579b79dffb7b7cb5n
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = d.a | d.b;
  if (d.r !== r) {
    print("Input A:  " + d.a.toString(16));
    print("Input B:  " + d.b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: |");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
