## Hash Tables

Hash tables are used as a way to store data in an organized way. For example, letters can be converted to ASCII, then hashed to a specific index of the array. If more than one input evaluates to the same key, known as a key collision, the index of the array is represented as a doubly linked list of the keys at that specific index.

#### Doubly Linked Lists
Doubly linked lists are composed of nodes which have reference to the previous node and the next node. If the node is the head, there will be no `next` node. If the node is the tail, there will be no `prev` node. The length is determined to be the number of nodes contained in the doubly linked list.

A new doubly linked list can be instantiated and the head and tail values will be equal to the value passed in when the first node is appended. For example, the following code: 

```
const DLL = require('./lib/dll.js');
let dll = new DLL();
dll.append(1);
```

Will return the following:

```
{ head: Node { val: 1, next: null, prev: null },
  tail: Node { val: 1, next: null, prev: null },
  length: 1 }
```

Likewise, adding `dll.append(2);` will return the following:
```
{ head: 
   Node {
     val: 2,
     next: null,
     prev: Node { val: 1, next: [Circular], prev: null } },
  tail: 
   Node {
     val: 1,
     next: Node { val: 2, next: null, prev: [Circular] },
     prev: null },
  length: 2 }

```