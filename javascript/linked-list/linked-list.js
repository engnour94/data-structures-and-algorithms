
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
    insert(value)  {
        try {
            let temp = new Node(value);
        if (!this.head) {
            this.head = temp;
        } else {
            temp.next = this.head;
            this.head = temp;
        }
        } catch (error) {
            
        console.log(`Something went error`, error);
            
        }
    }

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

module.exports = Node;
module.exports = LinkedList;
