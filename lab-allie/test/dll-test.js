'use strict';

const expect = require('chai').expect;

const DLL = require('../lib/dll.js');
let dll = new DLL();

describe('Testing dllAppend methods', function() {
  describe('Instantiating a new dllAppend', () => {
    
    it('should create a new dllAppend', done => {      
      expect(dll).to.exist;
      done();
    });
    
    it('should be an object', done => {
      expect(dll).to.be.a('object');
      done();
    });
  });
  
  describe('Testing the append method', function() {
    let dllAppend = new DLL();
    dllAppend.append(5);
    
    it('should be possible to add append a node', done => {
      expect(dllAppend.head.val).to.equal(5);
      expect(dllAppend.tail.val).to.equal(5);
      done();
    });
    
    it('should have a "next" value of null when there is only one node', done => {
      expect(dllAppend.head.next).to.be.null;
      expect(dllAppend.tail.next).to.be.null;
      done();
    });
    
    it('should have a "prev" value of null when there is only one node', done => {
      expect(dllAppend.head.prev).to.be.null;
      expect(dllAppend.tail.prev).to.be.null;
      done();
    });
    
    describe('Appending additional nodes', function() {
      
      it('should append the new value', done => {
        dllAppend.append(6);
        expect(dllAppend.head.val).to.equal(6);
        done();
      });
      
      it('should have a reference to the old head', done => {
        expect(dllAppend.tail.val).to.equal(5);
        done();
      });
      
      it('should be able to be referenced by the tail', done => {
        expect(dllAppend.tail.next.val).to.equal(6);
        done();
      });
    });
  });
  
  describe('Testing the prepend method', function() {
    let dllPrepend = new DLL();
    
    it('should be possible to add prepend a node', done => {
      dllPrepend.prepend(1);
      expect(dllPrepend.head.val).to.equal(1);
      expect(dllPrepend.tail.val).to.equal(1);
      done();
    });
    
    it('should have a "next" value of null when there is only one node', done => {
      expect(dllPrepend.head.next).to.be.null;
      expect(dllPrepend.tail.next).to.be.null;
      done();
    });
    
    it('should have a "prev" value of null when there is only one node', done => {
      expect(dllPrepend.head.prev).to.be.null;
      expect(dllPrepend.tail.prev).to.be.null;
      done();
    });
    
    describe('Prepending additional nodes', function() {
      it('should prepend the new value', done => {
        dllPrepend.prepend(2);
        expect(dllPrepend.tail.val).to.equal(2);
        done();
      });
      
      it('should have a reference to the old tail', done => {
        expect(dllPrepend.head.val).to.equal(1);
        done();
      });
      
      it('should be able to be referenced by the head', done => {
        expect(dllPrepend.head.prev.val).to.equal(2);
        done();
      });
    });
  });

  describe('Testing the remove method', function() {

    let dllRemove = new DLL();
    dllRemove.append(6);
    dllRemove.append(5);
    dllRemove.append(4);
    dllRemove.append(3);
    dllRemove.append(2);
    dllRemove.append(1);
    console.log(dllRemove);
    
    it('should remove a specific node if it is the head', done => {
      dllRemove.remove(1);
      done();
    });
    
    it('should remove a specific node if it is the tail', done => {
      
      done();
    });
    
    it('should remove a specific node within the dll', done => {
      
      done();
    });
    
  });

});