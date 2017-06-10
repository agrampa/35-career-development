'use strict';

const Node = function(val, next=null, prev=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const DLL = module.exports = function() {
  this.head = null;
  this.tail = null;
  this.length = 1;
};


// prev and next (<->) pointers from each Node
// (TAIL)  <-[]<->[]<->[]-> (HEAD)
// (prepend)                (append)

DLL.prototype.append = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.head) return this.head = this.tail = new Node(val);
  
  let node = new Node(val);

  this.head.next = node;
  node.prev = this.head;
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail) return this.tail = this.head = new Node(val);
  
  
  let node = new Node(val);

  this.tail.prev = node;
  node.next = this.tail;
  this.tail = this.tail.prev;
  this.length++;
  return this.tail;
};

DLL.prototype.remove = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail || !this.head) throw new Error('This list is empty');

  let currentNode = this.tail;
  let prevNode, nextNode;
  // for(let i = 0; i < this.length; i++) {    
  //   if(currentNode.val === val) {
  //     return currentNode;
  //   } else {
  //     currentNode = currentNode.next;
  //   }
  // }
  
  if(currentNode.val === val) {
    prevNode.next = currentNode.next;
    nextNode.prev = currentNode.prev;
    return this;
  } else {
    currentNode = currentNode.next;
  }

  // let prevNode = currentNode.prev;
  // let nextNode = currentNode.next;
  
  // prevNode.next = nextNode;
  // nextNode.prev = prevNode;
  // this.length--;
  
  return this;


  // let nodeBefore = this.head;
  // let targetNode;
  // 
  // for(let i = 0; i < this.length; i++) {
  //   targetNode = nodeBefore.next;
  //   return targetNode;
  // }
  // 
  // let prevNode = targetNode.prev;
  // let nextNode = targetNode.next;
  // targetNode.prev.next = nextNode;
  // targetNode.next.prev = prevNode;
  // 
  // if(this === this.head) {
  //   this.head = this.next;
  //   this.head.prev = null;
  // } else if(this === this.tail) {
  //   this.tail = this.tail.prev;
  //   this.tail.next = null;
  // } else {    
  //   prev.next = next;
  //   next.prev = prev;
  // }
  // return this;
};