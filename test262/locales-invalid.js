// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.supportedLocalesOf
description: Checks error cases for the locales argument to the supportedLocalesOf function.
info: |
    Intl.RelativeTimeFormat.supportedLocalesOf ( locales [, options ])

    2. Let requestedLocales be CanonicalizeLocaleList(locales).
includes: [testIntl.js]
features: [Intl.RelativeTimeFormat]
---*/

assert.sameValue(typeof Intl.RelativeTimeFormat.supportedLocalesOf, "function",
                 "Should support Intl.RelativeTimeFormat.supportedLocalesOf.");

for (const [locales, expectedError] of getInvalidLocaleArguments()) {
    assert.throws(expectedError, () => Intl.RelativeTimeFormat.supportedLocalesOf(locales));
}
