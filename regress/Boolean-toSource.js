/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('Boolean.prototype.toSource.call(42)');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call("")');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call({})');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call(null)');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call([])');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call(undefined)');
true;
raisesException(TypeError)('Boolean.prototype.toSource.call(new String())');
true;
completesNormally('Boolean.prototype.toSource.call(true)');
true;
completesNormally('Boolean.prototype.toSource.call(new Boolean(true))');
true;
reportCompare(true, true);
