'use strict';
const treeify = require('treeify')
//-----------------------------//
class Node{
    constructor(value, right=null, left=null){
        this.value=value;
        this.right=right;
        this.left=left;
    }
      
}
//-------------------------------//

class BinaryTree{
    constructor(root=null){
        this.root=root;
    }
    //root-left-right
    preOrder(){
        let output=[];
        let traverse=(node)=>{
            output.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return output;
    }
    //left-root-right
    inOrder(){
        let output=[];
        let traverse=(node)=>{
            if(node.left)traverse(node.left);
            output.push(node.value);
            if(node.right)traverse(node.right)

        }
        traverse(this.root)
        return output;
    }
     //left-root-right
     postOrder(){
        let output=[];
        let traverse=(node)=>{
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            output.push(node.value);
        }
        traverse(this.root);
        return output;
    }

    findMaximumValue(){
        if (!this.root) throw new Error('empty tree')
        let result = this.root.value;
      
        let traverse=(node)=>{
            if(node.value>result){
                result=node.value
            }
            if(node.right) traverse(node.right);
            if(node.left)traverse(node.left);

        }
        traverse(this.root)
        return(result)

    }


}
// let BT = new BinaryTree()

// console.log(BT)
//--------------------------------//
class BinarySearchTree{
 
  constructor(){
// Initialize a root element to null.
  this.root=null;
  }
 add(value){
    if (typeof value!= 'number') throw new Error('The value should be number!!')
     let newNode = new Node(value)
      // Check if the tree is empty
     if(!this.root){
           // Insert as the first node
         this.root=newNode;
         return
     }
     let current = this.root;
     while(current){
           // Set the value here as we've reached a leaf node
         if (value<=current.value) {
            if(!current.left){
                current.left=newNode;
               return;
            } 
            
            current=current.left
          
         }else{
               // Set the value here as we've reached a leaf node
            if(value>current.value){
                if(!current.right){
                    current.right=newNode
                    return 
                }
                current=current.right
            }

         }
     }
 }
 contains(target){
    if (!this.root) throw new Error( 'Empty Tree!') ;
    if (typeof target != 'number') throw new Error('The target should be number!!')

     let current=this.root;
     while(current){
         // Found the target!
         if(target===current.value){
             return true 
         }
         // Go right as data is greater than parent
         else if(target>current.value){
             current=current.right
         }
         // Go left as data is lower than parent
         else if(target<current.value){
             current=current.left
         }
     }
    return false;
 }

}
module.exports={
    Node:Node,
    BinaryTree:BinaryTree,
    BinarySearchTree:BinarySearchTree
}

// const tree= new BinaryTree()
// tree.root=new Node(20)
// node javascript/data-structure/tree/tree.js
// console.log(tree)
// BinaryTree { root: Node { value: 20, right: null, left: null } }
// console.log(treeify.asTree(tree,true))
// └─ root
//    ├─ value: 20
//    ├─ right
//    └─ left
// const BST= new BinarySearchTree()
// BST.add('210')
// BST.add(300)
// BST.add(30)
// BST.add(500)
// BST.add(30)
// BST.add(100)
// BST.add(15)
// BST.add(2500)
// console.log(BST.contains('21l0'))
// console.log(treeify.asTree(BST,true))

