'use strict';

const expect = require('chai').expect;

const DLL = require('../lib/dll.js');
let dll = new DLL();

describe('Testing DLL methods', function() {
  describe('Instantiating a new DLL', () => {
    
    it('should create a new DLL', done => {      
      expect(dll).to.exist;
      done();
    });
    
    it('should be an object', done => {
      expect(dll).to.be.a('object');
      done();
    });
    
    describe('Testing the append method', () => {
      dll.append(5);
      
      it('should be possible to add append a node', done => {
        expect(dll.head.val).to.equal(5);
        done();
      });
      
      it('should have the same head and tail when only one node exists', done => {
        expect(dll.tail.val).to.equal(5);
        done();
      });
      
      it('should have a "next" value of null when there is only one node', done => {
        expect(dll.head.next).to.be.null;
        done();
      });
      
      it('should have a "prev" value of null when there is only one node', done => {
        expect(dll.head.prev).to.be.null;
        done();
      });
    });
    
    
    describe('Appending additional nodes', () => {
      dll.append(6);
      
      it('should append the new value', done => {
        expect(dll.head.next.val).to.equal(6);
        done();
      });
      
      it('should have a reference to the head', done => {
        
        done();
      });
      
      it('should be able to be referenced by the head', done => {
        
        done();
      });
    });
    
  });
});