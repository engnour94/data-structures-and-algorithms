
const LinkedList = require('../linked-list');
const { expect } = require('@jest/globals');

describe('liked list class', () => {
 

    it('it should take any value as an argument and adds a new node with that value to the head',
     () => {
        //arrange
        let ll = new LinkedList();
        ll.insert(5);
        let newValue = 10;
        //act
        ll.insert(newValue);
        //assert
        expect(ll.head.value).toEqual(newValue);
        expect(ll.head.next.value).toEqual(5);
        expect(ll.head.next.next).toBeNull();
    });

     it('',()=>{
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(6);
        ll.insert(7);
        ll.insert(8);
        expect(ll.head.value).toEqual(8);
        expect(ll.head.next.value).toEqual(7);
        expect(ll.head.next.next.value).toEqual(6);
        expect(ll.head.next.next.next.value).toEqual(5);
        expect(ll.head.next.next.next.next).toEqual(null);
     })

     it('should  takes any value as an argument and returns a boolean result depending on whether that value exists',
      () => {
        //arrange
        let ll = new LinkedList();
      
       
        ll.insert(5);
        ll.insert(4);
        // //assert
        expect(ll.include(5)).toBeTruthy()
        expect(ll.include(4)).toBeTruthy()
        expect(ll.include(20)).toBeFalsy();
    });
    it('it should apply include method into empty ll',()=>{
        let ll = new LinkedList();
        expect(ll.include(20)).toBeFalsy();
    })
    it('should return a string representing all the values in the Linked List', () => {
        //arrange
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(6);
        ll.insert(10);
        //act
       
        //assert
        expect(ll.toString()).toEqual('{ 10 } -> { 6 } -> { 5 } -> NULL');
       
    });
    it('should return NULL', () => {
        //arrange
        let ll = new LinkedList();
        //act
        //assert
        expect(ll.toString()).toEqual('NULL');
       
    });


});