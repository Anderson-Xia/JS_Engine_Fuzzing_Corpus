
foo.prototype = new Array(1
                         ,2
                         ,3);
function foo() {
}
var f = new foo();
f.length /= null;
var callCnt = 0;
function cb() {
   callCnt++;
}
var i = f.forEach(cb);
assert.sameValue(callCnt
                ,0
                ,"callCnt");

