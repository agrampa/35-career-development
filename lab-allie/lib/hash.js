'use strict';

const DLL = require('./dll.js');

const HashTable = module.exports = function(size=8) {
  this.size = size;
  this.buckets = [...Array(this.size)];
  // this.buckets.forEach(index => this.buckets[index] = new DLL());
  for(let i = 0; i < this.size; i++) {
    this.buckets[i] = new DLL();
  }
};

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('Key required');
  
  let hash = key.split('').reduce((acc, current) => acc + current.charCodeAt(0),0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, value) {
  this.buckets[this.hashKey(key)] = value;
};

HashTable.prototype.get = function(key) {
  return this.buckets[this.hashKey(key)];
};

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);
  this.buckets[address] ? delete this.buckets[address] : new Error('Invalid key');
};