'use strict';

const {Queue}= require('../stacksAndQueues/stacks-and-queues.js')
class Node{
    constructor(value,k){
        this.value=value;
        this.children = new Array(k);;
    }
}

class KAry{
    constructor(root=null, k){
        this.root=root;
        this.k=k
    }

    breadthFirst(){
        let output=[];
        let queue = new Queue()
        if (!this.root) {
            throw new Error('Empty Tree!');
          } 
      queue.enqueue(this.root)
      while(!queue.isEmpty()){
          let front =queue.dequeue()
          output.push(front.value)
        //   for (let child = 0; child < front.children.length; child++)
        for (let child in front.children)
            queue.enqueue(front.children[child]);
      }
      return output

    }

   
}


function  FizzBuzzTree(tree){
if(!tree.root){throw new Error('Empty Tree!')}

let newTree=tree;
let search=(node)=>{
    if (node.value % 5 === 0 && node.value % 3 === 0) {
        node.value = 'FizzBuzz';
        }
    if (node.value % 5 === 0) {
         node.value = 'Buzz';
         }
    else if (node.value % 3 === 0) {
        node.value = 'Fizz';
     }
    else node.value= `${node.value}`;
    for (let i = 0; i < node.children.length; i++) {
    search(node.children[i]);
  }
};
search(newTree.root);
return newTree;
}



module.exports={
    Node,
    KAry,
    FizzBuzzTree
}