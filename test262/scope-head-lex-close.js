// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
description: >
    Removal of lexical environment to serve as a temporal dead zone for the
    statement's AssignmentExpresson
info: |
    IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ?
       ForIn/OfHeadEvaluation(BoundNames of ForDeclaration,
       AssignmentExpression, iterate).
    [...]

    13.7.5.12 Runtime Semantics: ForIn/OfHeadEvaluation

    [...]
    2. If TDZnames is not an empty List, then
       a. Assert: TDZnames has no duplicate entries.
       b. Let TDZ be NewDeclarativeEnvironment(oldEnv).
       c. Let TDZEnvRec be TDZ's EnvironmentRecord.
       d. For each string name in TDZnames, do
          i. Perform ! TDZEnvRec.CreateMutableBinding(name, false).
       e. Set the running execution context's LexicalEnvironment to TDZ.
    3. Let exprRef be the result of evaluating expr.
    4. Set the running execution context's LexicalEnvironment to oldEnv.
    [...]
features: [let]
---*/

let x = 'outside';
var probeDecl, probeExpr, probeBody;

for (
    let [x, _ = probeDecl = function() { return x; }]
    of
    (probeExpr = function() { typeof x; }, [['inside']])
  )
  probeBody = function() { return x; };

assert.throws(ReferenceError, probeExpr);
assert.sameValue(probeDecl(), 'inside', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'inside', 'reference from statement body');
