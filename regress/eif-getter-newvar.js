this.__defineGetter__("someProperty", function () {
  evalInFrame(1, "var x = 'success'");
});

function caller(obj) {
  var x = 'ignominy';
  obj.someProperty;
  return x;
}

caller(this);
"success";
