var importObject = {
    env: {
        print_number: function (number) {
            print('[+] importObject callback.');
            print(number);
        }
    }
};
var wasmCode = new Uint8Array([0x0,0x61,0x73,0x6d,0x1,0x0,0x0,0x0,0x1,0x7,0x1,0x60,0x2,0x7e,0x7f,0x1,0x7f,0x3,0x2,0x1,0x0,0x4,0x4,0x1,0x70,0x0,0x4,0x6,0x2e,0x5,0x7f,0x0,0x41,0x2a,0xb,0x7d,0x0,0x43,0x74,0x0,0x0,0x4d,0xb,0x7c,0x0    ,0x44,0x83,0x88,0x88,0x00,0x0,0x0,0xff,0xff,0xb,0x7d,0x0,0x43,0x0,0x0,0x9,0x7f,0xb,0x7c,0x0,0x44,0x0,0x3c,0x0,0x0,0x0,0x0,0xf8,0x7f,0xb,0x7,0x40,0x7,0x5,0x74,0x61,0x62,0x3f,0x45,0x1,0x0,0x3,0x7d,0x75,0x6d,0x0,0x0,0x6,0x61,0x3d,    0x22,0x0,0xd,0x72,0x3,0x0,0x7,0x4f,0x7c,0x68,0x77,0x65,0x20,0x31,0x3,0x1,0x7,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x3,0x2,0x7,0x61,0x6e,0x73,0x77,0x65,0x72,0x3c,0x3,0x3,0x7,0x61,0x6e,0x73,0x77,0x65,0x72,0x34,0x3,0x4,0x9,0x7,0x1,0x0,0x41,0x0,0xb,0x1,0x0,0xa,0x9,0x1,0x7,0x0,0x20,0x1,0x0,0x1,0x0,0xb,]);
var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, importObject);

var res = wasmInstance.exports.AAAAAAA;
res = res + 'string';

