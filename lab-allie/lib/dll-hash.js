'use strict';

const DLL = require('./dll.js');

const DLLHashTable = module.exports = function(size=8) {
  this.size = size;
  this.buckets = [...Array(this.size)];
  // this.buckets.forEach(index => this.buckets[index] = new DLL());
  for(let i = 0; i < this.size; i++) {
    this.buckets[i] = new DLL();
  }
};

DLLHashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('Key required');
  
  let hash = key.split('').reduce((acc, current) => acc + current.charCodeAt(0),0) % this.size;
  return hash;
};

DLLHashTable.prototype.set = function(key, value) {
  this.buckets[this.hashKey(key)].append(value);
};

DLLHashTable.prototype.get = function(key) {
  if(this.buckets[this.hashKey(key)].head === null) return null;
  return this.buckets[this.hashKey(key)];
};

DLLHashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);
  this.buckets[address] ? this.buckets[address] = new DLL() : new Error('Invalid key');
};