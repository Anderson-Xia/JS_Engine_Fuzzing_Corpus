// Annex B.3.3.1 disallows Annex B lexical function behavior when redeclaring a
// parameter.
(function (f) {
  if (true) {
    function f() {
      ;
    }
  }

  f();
  123;
})(123);

(function (f) {
  {
    function f() {
      ;
    }
  }
  f();
  123;
})(123);

(function (f = 123) {
  f();
  123;
  {
    function f() {
      ;
    }
  }
  f();
  123;
})();

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
