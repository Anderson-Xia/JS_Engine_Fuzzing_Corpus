console.log("This test puts an item in a big index and then tries to change it. It shoudl change successfully.");
var array = [];
array[10001] = 0;
array[10001] = 5;
array[10002] = "a";
array[10002] = "b";
array[10001];
array[10002];
