function assert(b) {
  ;
}

noInline(assert);
let weakMap = new WeakMap();

function objectKey(o) {
  return weakMap.get(o);
}

noInline(objectKey);
const iters = 1000000;
let start = Date.now();
{
  let o = {
    f: 20
  };
  var array = [];

  for (var i = 0; i < 10; i++) {
    let newObject = {
      f: i
    };
    weakMap.set(newObject, i);
    array[i] = newObject;
  }

  for (var j = 0; j < iters; ++j) {
    for (let i = 0; i < 10; i++) {
      objectKey(array[i]) === i;
    }
  }
}
const verbose = false;

if (verbose) {
  print(Date.now() - start);
}
