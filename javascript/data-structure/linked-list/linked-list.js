
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
    insert(value) {
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

    //append method for adding a new node with the given value to the end of the list
    append(value) {
        try {
            let node = new Node(value);
            if (!this.head) {// empty linked list
                this.head = node;
            } else {
                let temp = this.head;
                while (temp.next) {
                    temp = temp.next;
                }
                temp.next = node;
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
            } else {
                let temp = this.head;
                while (temp) {
                    if (temp.value === value) {
                        return true
                    } else {
                        temp = temp.next;
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
    toString() {
        try {
            let temp = this.head;
            let string = "";
            while (temp) {
                string += `{ ${temp.value} } -> `
                temp = temp.next
            }
            return `${string}NULL`
        }
        catch (error) {
            console.log(`Something went error`, error);
        }
    }


    // insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
    insertBefore(value, newVal) {
        try {
            let node = new Node(newVal);
            let temp = this.head;
            if (temp.value === value) {
                node.next = this.head
                this.head = node
                return
            }
            while (temp) {
                if (temp.next.value === value) {//the value of the next node 
                    node.next = temp.next;
                    temp.next = node;
                    return
                } else {
                    temp = temp.next;
                }
            }
            throw new Error("Exception: The value doesn't exists ")
        }
        catch (error) {
            console.error( `Exception: The value doesn't exist `, error);
        }
    }

    // insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
    insertAfter(value, newVal){
        try {
            let node = new Node(newVal);
            let temp = this.head;
           
            while (temp) {
                if (temp.value === value) {//the value of the next node 
                    node.next = temp.next;
                    temp.next = node;
                    return
                } else {
                    temp = temp.next;
                }
            }
            throw new Error("Exception: The value doesn't exists ")
        }
        catch (error) {
            console.error(`Something went error`, error);
        }

    }

}


module.exports = {
    Node: Node,
    LinkedList: LinkedList
}

//*****----to console log the result----*****//
// const ll = new LinkedList();
// ll.insert(1);
//ll.insert(2);
// console.log(ll.include(2))
// console.log(ll.toString())
//-----console.log for append ----//
//ll.append(2)
//ll.append(3)
//console.log(ll.head.next) --> Node { value: 3, next: null }
//console.log(ll.head.next.value) --> 3
//console.log(ll.add(2)) ---> undefine in append and add we should to console the values
//--------console.log for insertBefore()----//
// ll.insert(1);
// ll.insert(2);
// ll.insert(3)
// ll.insertBefore(3, 4)
// console.log(ll.head.value)



