'use strict';
const { Node } = require('./tree.js')
const { BinaryTree } = require('./tree.js')
const { BinarySearchTree } = require('./tree.js')
const { expect } = require('@jest/globals');

//<---------------Node testing ------------>
describe('node class', () => {
    it('should create new object', () => {
        // arrange
        let value = 5;
        // act
        let node = new Node(value);
        // assert
        expect(node.value).toEqual(5);
        expect(node.left).toEqual(null);
        expect(node.right).toEqual(null);
    });
});


//<------------------------------------->
it('Can successfully instantiate an empty Binary tree 🌳',()=>{
    let BT = new BinaryTree()
    expect(BT instanceof BinaryTree).toBeTruthy();
    expect(BT.root).toBeNull();
 })
 it('Can successfully instantiate a binary tree with a single root node',()=>{
     let BT = new BinaryTree()
     BT.root =new Node(1)
     expect(BT.root.value).toBe(1)
     expect(BT.root.left).toBeNull();
     expect(BT.root.right).toBeNull();
 })

let tree = null;
describe('Binary Tree', () => {
    beforeAll(() => {
        let one = new Node(1);// tree root
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;//
        one.right = three;//
        two.left = six;//
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        //             1
        //     2               3
        // 6        -      4       5
        //     7
        // 8       9
        tree = new BinaryTree(one);
    })
    it('preOrder testing: it should follow "root-left-right" approach to  traverse nodes ', () => {

        expect(tree.preOrder()).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5])
    })

    it('inOrder testing: it should follow "left-root-right" approach to  traverse nodes ', () => {

        expect(tree.inOrder()).toEqual([6,8,7,9,2,1,4,3,5])
    })
    it('postOrder testing: it should follow "left-right-root" approach to  traverse nodes ', () => {

        expect(tree.postOrder()).toEqual([8,9,7,6,2,4,5,3,1])
    })
    //---------------testing findMaximumValue()-----------------//
    it('it should find the maximum number in a tree',()=>{
    expect(tree.findMaximumValue()).toBe(9)
    })

    it( "it  should raise an exception if the tree is empty",()=>{
        let BT = new BinaryTree()
        const errorFunction = () => {
            let output =  BT.findMaximumValue();
        }
        //assert
        expect(errorFunction).toThrow('empty tree');
     })
     it('it  should raise an exception when using this method with another class',()=>{
        let BST = new BinarySearchTree()
        BST.add(20);
        BST.add(0);
        BST.add(30);
        BST.add(40);
        BST.add(15);
        expect(BST.findMaximumValue).toThrowError
     })



})

//<----------------Testing Binary search tree --------------->
it('Can successfully instantiate an empty Binary search tree 🌳',()=>{
    let BST = new BinarySearchTree()
    expect(BST instanceof BinarySearchTree).toBeTruthy();
    expect(BST.root).toBeNull();
 })
 it('Can successfully instantiate a binary search  tree with a single root node',()=>{
     let BST = new BinarySearchTree()
     BST.root =new Node(1)
     expect(BST.root.value).toBe(1)
     expect(BST.root.left).toBeNull();
     expect(BST.root.right).toBeNull();
 })

 it('add testing: Can successfully add a left child and right child to a single root node',()=>{
    let BST = new BinarySearchTree()
    BST.add(20);
    BST.add(0);
    BST.add(30);
    expect(BST.root.value).toBe(20);
    expect(BST.root.left.value).toBe(0);
    expect(BST.root.left.left).toBe(null);
    expect(BST.root.right.value).toBe(30)
    expect(BST.root.right.right).toBe(null);

 })
 it('add testing: Can successfully add a left child and right child to a multiple root node',()=>{
    let BST = new BinarySearchTree()
    BST.add(20);
    BST.add(0);
    BST.add(30);
    BST.add(40);
    BST.add(15);
    BST.add(25);
    BST.add(-1);
    expect(BST.root.value).toBe(20);
    expect(BST.root.left.value).toBe(0);
    expect(BST.root.left.left.value).toBe(-1);
    expect(BST.root.left.right.value).toBe(15);
    expect(BST.root.right.value).toBe(30)
    expect(BST.root.right.right.value).toBe(40);
    expect(BST.root.right.left.value).toBe(25);
 })

 it('contains testing: Can successfully return  true if the value is in the tree and false if it is not ',()=>{
    let BST = new BinarySearchTree()
    BST.add(20);
    BST.add(0);
    BST.add(30);
    BST.add(40);
    BST.add(15);
    expect(BST.contains(0)).toBeTruthy;
    expect(BST.contains(20)).toBeTruthy;
    expect(BST.contains(30)).toBeTruthy;
    expect(BST.contains(100)).toBeFalsy;
 

 })

 it( "it  should raise an exception if the input is not a number",()=>{
    let BST = new BinarySearchTree()
    BST.add(20);
 ;
    const errorFunction = () => {
        let output =  BST.contains('20');
    }
    //assert
    expect(errorFunction).toThrow('The target should be number!!');

 })

 it( "it  should raise an exception if the tree is empty",()=>{
    let BST = new BinarySearchTree()
    const errorFunction = () => {
        let output =  BST.contains(20);
    }
    //assert
    expect(errorFunction).toThrow('Empty Tree!');

 })
 
 it( "it  should raise an exception if the input is not a number",()=>{
    let BST = new BinarySearchTree()
   

    const errorFunction = () => {
        let output =  BST.add('20');
    }
    //assert
    expect(errorFunction).toThrow('The value should be number!!');

 })






