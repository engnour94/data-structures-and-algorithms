
'use strict';


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    /**
     * insert value at the head
     * @param  {number }  value
     * @param  {number} ;if(!this.head
     * @param  {number} {this.head=newNode;}else{newNode.next=this.head;this.head=newNode;}}
     */
    insert(value)  {
        try {
            let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        } catch (error) {
            
        console.log(`Something went error`, error);
            
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
     try {
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
     } catch (error) {
        console.log(`Something went error`, error);
     }
    }
    /**
     * @param  {string} empty string
     * @param  {number} 
     * @param  {string} {string+=`{${temp.value}}->`temp=temp.next}
     * @return {string} `${string}NULL`
     */
    toString(){
    try {
        let temp = this.head;
        let string="";
        while (temp) {
            string +=`{ ${temp.value} } -> `
            temp= temp.next
        }
           return `${string}NULL`
        }
        catch (error) {
            console.log(`Something went error`, error);
        }
    }
}

module.exports={
    Node:Node,
    LinkedList:LinkedList
}

