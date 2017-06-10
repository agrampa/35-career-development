'use strict';

const DLL = require('./lib/dll.js');
let dll = new DLL();
dll.append(5);
console.log('dll', dll);
dll.append(6);
console.log('dll', dll);