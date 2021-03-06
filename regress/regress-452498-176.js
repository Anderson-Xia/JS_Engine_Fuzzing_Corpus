/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
//-----------------------------------------------------------------------------
var BUGNUMBER = 452498;
var summary = 'TM: upvar2 regression tests';
var actual = '';
var expect = ''; //-------  Comment #176  From  Gary Kwong
//-----------------------------------------------------------------------------

test(); //-----------------------------------------------------------------------------

function test() {
  printBugNumber(BUGNUMBER);
  printStatus(summary); // Assertion failure: pn_arity == PN_FUNC || pn_arity == PN_NAME, at ../jsparse.h:449

  if (delete (5 ? [] : function () {
    ;
  }())) {
    [];
  }

  reportCompare(expect, actual, summary);
}
