var str1 = String.fromCharCode(136, 115, 29, 20, 15, 155, 81);
str3 = str1.padEnd(0x7FFFFFFC, '123');
var exception;

try {
  JSON.stringify(str3);
} catch (e) {
  exception = e;
}
