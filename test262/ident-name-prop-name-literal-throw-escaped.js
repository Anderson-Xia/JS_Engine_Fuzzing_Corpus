// This file was procedurally generated from the following sources:
// - src/identifier-names/throw-escaped.case
// - src/identifier-names/default/obj-assignment-prop-name.template
/*---
description: throw is a valid identifier name, using escape (PropertyName of an ObjectAssignmentPattern)
esid: prod-AssignmentPattern
features: [destructuring-assignment]
flags: [generated, noStrict]
info: |
    AssignmentPattern:
      ObjectAssignmentPattern

    ObjectAssignmentPattern:
      { AssignmentPropertyList }

    AssignmentPropertyList:
      AssignmentProperty
      AssignmentPropertyList , AssignmentProperty

    AssignmentProperty:
      IdentifierReference Initializer_opt
      PropertyName : AssignmentElement

    PropertyName:
      LiteralPropertyName
      ...

    LiteralPropertyName:
      IdentifierName
      ...

    Reserved Words

    A reserved word is an IdentifierName that cannot be used as an Identifier.

---*/


var y = { t\u0068row: x } = { throw: 42 };

assert.sameValue(x, 42, 'property exists');
assert.sameValue(y['throw'], 42, 'assignment successful');
