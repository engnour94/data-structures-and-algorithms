
'use strict';


class Node {
    constructor(value) {
        //every element knows about the next element so when we create a new node we have to know 
        //the value and the next is null because it will be appended at the end of the list
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //first element of the list
        //this.tail=null;// last element of the list 
        // the node just know about the next node but it doesn't know about the entire list
        //the list just have to know about the 1st and last node  
    }
    /**
     * insert value at the head
     * @param  {number }  value
     * @param  {number} ;if(!this.head
     * @param  {number} {this.head=newNode;}else{newNode.next=this.head;this.head=newNode;}}
     */
    insert(value)  {
       
            let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
      
    }
    /**
     * check if the number is in the linked list
     * @param  {number} value
     * @return  {boolean} {return false if this.head is empty}
     * @param  {number} {if(temp.value===value
     * @return {boolean} {return true if the value is in the linked list }
     */
    include(value) {
        if (!this.head) {// empty linked list
            return false
        } else 
        {
            let temp = this.head;
            while (temp) {
                if(temp.value===value){
                    return true
                }else{ 
                   temp=temp.next;
                }
               
            }
            return false
        } 
    }
    /**
     * @param  {string} empty string
     * @param  {number} 
     * @param  {string} {string+=`{${temp.value}}->`temp=temp.next}
     * @return {string} `${string}NULL`
     */
    toString(){
        let temp = this.head;
        let string="";
        while (temp) {
            string +=`{ ${temp.value} } -> `
            temp= temp.next
        }
           return `${string}NULL`
       
    }
}

//*****----to console log the result----*****//

// const ll = new LinkedList();
// ll.insert(1);
//ll.insert(2);
// console.log(ll.include(2))
// console.log(ll.toString())

module.exports={
    Node:Node,
    LinkedList:LinkedList
}

