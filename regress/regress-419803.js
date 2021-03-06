/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
//-----------------------------------------------------------------------------
var BUGNUMBER = 419803;
var summary = 'Do not assert: sprop->parent == scope->lastProp';
var actual = 'No Crash';
var expect = 'No Crash'; //-----------------------------------------------------------------------------

test(); //-----------------------------------------------------------------------------

function test() {
  printBugNumber(BUGNUMBER);
  printStatus(summary);

  for (var i = 0; i < 2; ++i) {
    ({
      p: 5,
      p: 7
    });
  }

  reportCompare(expect, actual, summary);
}
