// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-multiplicative-expression-div.case
// - src/computed-property-names/evaluation/class-declaration.template
/*---
description: Computed property name from multiplicative expression "divide" (ComputedPropertyName in ClassDeclaration)
esid: prod-ComputedPropertyName
features: [computed-property-names]
flags: [generated]
info: |
    ClassExpression:
      classBindingIdentifier opt ClassTail

    ClassTail:
      ClassHeritage opt { ClassBody opt }

    ClassBody:
      ClassElementList

    ClassElementList:
      ClassElement

    ClassElement:
      MethodDefinition

    MethodDefinition:
      PropertyName ...
      get PropertyName ...
      set PropertyName ...

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/


class C {
  [1 / 1]() {
    return 1;
  }
  static [1 / 1]() {
    return 1;
  }
};

let c = new C();

assert.sameValue(
  c[1 / 1](),
  1
);
assert.sameValue(
  C[1 / 1](),
  1
);
assert.sameValue(
  c[String(1 / 1)](),
  1
);
assert.sameValue(
  C[String(1 / 1)](),
  1
);
