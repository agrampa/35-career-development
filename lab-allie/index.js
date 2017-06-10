'use strict';

const DLL = require('./lib/dll.js');
// let dll = new DLL();
// dll.append(1);
// console.log('dll with one node, val 1: ', dll);
// dll.append(2);
// console.log('dll with a second node appended, val 2: ', dll);
// dll.append(3);
// console.log('dll with a third node appended, val 3: ', dll);
// console.log('head.prev', dll.head);
// console.log('dll with a third node appended, val 3: ', dll);
// dll.prepend(4);
// console.log('dll with a node prepended, val 4: ', dll);
// dll.prepend(5);
// console.log('dll with a second node prepended, val 5: ', dll);
// dll.prepend(6);
// console.log('dll with a third node prepended, val 6: ', dll);
// console.log('tail', dll.tail);


let dllRemove = new DLL();
dllRemove.append(6);
console.log('after append 6', dllRemove);
dllRemove.append(5);
console.log('after append 5', dllRemove);
dllRemove.append(4);
console.log('after append 4', dllRemove);
dllRemove.append(3);
console.log('after append 3', dllRemove);
console.log('after append 3', dllRemove.tail.next.next);
// dllRemove.append(2);
// console.log(dllRemove);
// dllRemove.append(1);
// console.log(dllRemove);
// dllRemove.remove(3);
// console.log('before remove', dllRemove.tail.next.next);
// // console.log(dllRemove);
// console.log('after remove', dllRemove.tail.next.next);