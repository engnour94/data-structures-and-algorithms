
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

class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    const asciiSum = key.split('').reduce((acc, val) => {
      return acc * val.charCodeAt(0);
    }, 1);
    return (asciiSum * 71) % this.table.length;
  }

  add(key, value) {
    const bucket = this.hash(key);
    if (!this.table[bucket]) {
      this.table[bucket] = new LinkedList();
    }
    this.table[bucket].append({ [key]: value });
  }

  contains(key) {
    const bucket = this.hash(key);
    return this.table[bucket] ? true : false;
  }

  get(key) {
    const bucket = this.hash(key);
    if (this.contains(key)) {
      if (this.table[bucket].head) {
        let current = this.table[bucket].head;
        if (Object.keys(current.value)[0] === key) return current.value[key];
        while (current.next) {
          current = current.next;
          if (Object.keys(current.value)[0] === key) return current.value[key];
        }
      }
    }
    return null;
  }
}

module.exports = HashTable;