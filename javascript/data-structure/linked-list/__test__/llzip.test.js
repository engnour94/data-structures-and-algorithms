   
'use strict';

const {LinkedList} = require('../linked-list.js');
const { expect } = require('@jest/globals');
const zipLists = require('../llzip.js')
   describe('',()=>{

       
    it('Happy path when two linked lists equal in length', () => {
        //arrange ----------------->
        let l1 = new LinkedList;
        l1.insert(1);
        l1.insert(2);
        l1.insert(3);
        l1.insert(4);
        l1.insert(5);
        let l2 = new LinkedList;
        l2.insert("A");
        l2.insert("B");
        l2.insert("C");
        l2.insert("D");
        l2.insert("E");
        //act ---------------->
        let result = zipLists(l1, l2);

        //assert ------------------>
        expect(result.head.value).toEqual(5);
        expect(result.head.next.value).toEqual("E");
        expect(result.include("E")).toBeTruthy();
        expect(result.include("C")).toBeTruthy();
        expect(result.include(3)).toBeTruthy();
        expect(result.include(5)).toBeTruthy();
        expect(result.toString()).toEqual(`{ 5 } -> { E } -> { 4 } -> { D } -> { 3 } -> { C } -> { 2 } -> { B } -> { 1 } -> { A } -> NULL`);
    });

    it(" when the first LL is less than the second", () => {
        // arrange ----------->
        let l1 = new LinkedList;
        l1.insert(1);
        l1.insert(2);
        let l2 = new LinkedList;
        l2.insert("A");
        l2.insert("B");
        l2.insert("C");
        // act ----------------->
        let result = zipLists(l1, l2);
        // assert -------------->
        expect(result.head.value).toEqual(2);
        expect(result.head.next.value).toEqual("C");
        expect(result.include("E")).toBeFalsy();
        expect(result.include("C")).toBeTruthy();
        expect(result.include(2)).toBeTruthy();
        expect(result.include(5)).toBeFalsy();
        expect(result.toString()).toEqual(`{ 2 } -> { C } -> { 1 } -> { B } -> { A } -> NULL`);

    });

    it(" when the second LL is less than the first one", () => {
        // arrange ----------->
        let l1 = new LinkedList;
        l1.insert(1);
        l1.insert(2);
        l1.insert(3);
        l1.insert(4);
        let l2 = new LinkedList;
        l2.insert("A");
        l2.insert("B");
        // act ----------------->
        let result = zipLists(l1, l2);
        // assert -------------->
        expect(result.head.value).toEqual(4);
        expect(result.head.next.value).toEqual("B");
        expect(result.include("E")).toBeFalsy();
        expect(result.include("C")).toBeFalsy();
        expect(result.include(2)).toBeTruthy();
        expect(result.include(5)).toBeFalsy();
        expect(result.toString()).toEqual(`{ 4 } -> { B } -> { 3 } -> { A } -> { 2 } -> { 1 } -> NULL`);
    });//"{ 4 } -> { B } -> { 3 } -> { 2 } -> { 1 } -> { A } -> NULL"


   })
