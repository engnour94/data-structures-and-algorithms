'use strict';

const {  Node,KAry,FizzBuzzTree } = require('./fizz-buzz-tree.js');

describe('Testing K-ary Tree',()=>{
    it('FizzBuzzTree function',()=>{
      let kTree = new KAry();

      let root =kTree.root = new Node(2,3);

      let one = root.children[0]=new Node(20,3);
      let sec = root.children[1]= new Node(15,2);
      let three = root.children[2]=new Node(18,1);

      one.children[0]=new Node(25,0);
      one.children[1]=new Node(22,0);
      one.children[2]=new Node(24,0);
      sec.children[0]=new Node(14,0);
      sec.children[1]=new Node(27,0);
      three.children[0]=new Node(5,0);
      //              2
      //   20         15     18
      //25 22  24   14  27    5
      expect(kTree.breadthFirst()).toEqual([2,20,15,18,25,22,24,14,27,5]);
    //   console.log(FizzBuzzTree(kTree).breadthFirst())
    expect(FizzBuzzTree(kTree).breadthFirst()).toEqual(['2', 'Buzz', 'FizzBuzz', 'Fizz', 'Buzz', '22', 'Fizz', '14', 'Fizz','Buzz']);
    });
    it('K-ary it should return error if the tree is empty ',()=>{
        let kTree = new KAry();
        const errorFunction = () => {
            let output =  kTree .breadthFirst();
        }
        //assert
        expect(errorFunction).toThrow('Empty Tree!');
    
    }) 

    it('fizz Buzz it should return error if the tree is empty ',()=>{
        let kTree = new KAry();
        const errorFunction = () => {
            let output = FizzBuzzTree(kTree).breadthFirst();
        }
        //assert
        expect(errorFunction).toThrow('Empty Tree!');
    
    }) 

    
})



