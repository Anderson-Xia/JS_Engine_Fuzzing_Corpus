// This file was procedurally generated from the following sources:
// - src/arguments/args-trailing-comma-spread-operator.case
// - src/arguments/default/cls-expr-gen-meth-static.template
/*---
description: A trailing comma should not increase the arguments.length, using spread args (static class expression generator method)
esid: sec-arguments-exotic-objects
features: [generators]
flags: [generated]
info: |
    9.4.4 Arguments Exotic Objects

    Most ECMAScript functions make an arguments object available to their code. Depending upon the
    characteristics of the function definition, its arguments object is either an ordinary object
    or an arguments exotic object.


    Trailing comma in the arguments list

    Left-Hand-Side Expressions

    Arguments :
        ( )
        ( ArgumentList )
        ( ArgumentList , )

    ArgumentList :
        AssignmentExpression
        ... AssignmentExpression
        ArgumentList , AssignmentExpression
        ArgumentList , ... AssignmentExpression
---*/
var arr = [2, 3];



var callCount = 0;
var C = class {
  static *method() {
    assert.sameValue(arguments.length, 4);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], 1);
    assert.sameValue(arguments[2], 2);
    assert.sameValue(arguments[3], 3);
    callCount = callCount + 1;
  }
};

C.method(42, ...[1], ...arr,).next();

// Stores a reference `ref` for case evaluation
var ref = C.method;

assert.sameValue(callCount, 1, 'method invoked exactly once');
