'use strict';

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.length=0
    }

    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head=newNode
            this.length++
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
        this.length++
    }

    getData(){
        
        let output=[]
        let current = this.head
        while(current){
        output.push(current.value)
        current=current.next
        }
        return output

    }

}


class HashTable{
    constructor(size){
        this.size=size
        this.table= new Array(size)
    }
//     hash
// Arguments: key
// Returns: Index in the collection for that key
  hash(key){
      let  ascii= key.split('').reduce((acc,n)=>{
          return acc+n.charCodeAt(0);
      },0)*  599   % this.size
      return ascii
  }
// Arguments: key, value
// Returns: nothing
// This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  add(key,value){
    let hashed = this.hash(key)
    if(!this.table[hashed]){
     this.table[hashed]= new LinkedList()
    }
    this.table[hashed].append({[key]:value})

  }

contains(key){
    let hashed = this.hash(key)
   if(this.table[hashed]){
     return true //
   }else{
     return false
   }

  }
//   Arguments: key
// Returns: Value associated with that key in the table
  get(key){
    let hashed = this.hash(key)
    let output=[]
   
    if(this.table[hashed]){
     let current= this.table[hashed].head
     while(current){
    
      output.push(Object.values(current.value))
      current=current.next
     }
    return output.toString().split(',')
    }
      else return null //
  }
  


}



module.exports = {
  Node,
  LinkedList,
  HashTable,
};