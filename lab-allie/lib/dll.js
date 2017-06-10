'use strict';

const Node = function(val, next=null, prev=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const DLL = module.exports = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DLL.prototype.append = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.head) return this.tail = this.head = new Node(val);
  
  this.head.next = new Node(val);
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail) return this.tail = this.head = new Node(val);
  
  this.tail.prev = new Node(val);
  this.tail = this.tail.prev;
  return this.tail;
};

DLL.prototype.remove = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail) throw new Error('This list is empty');
  
  if(this === this.head) {
    this.head = this.next;
    this.head.prev = null;
  } else if(this === this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {    
    let prev = this.prev;
    let next = this.next;
    prev.next = next;
    next.prev = prev;
  }
};