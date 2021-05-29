'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    //push method takes any value as an argument and adds a new node with that value to the top of the stack
    // with an O(1) Time performance


    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++

    }
    //pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
    //Should raise exception when called on empty stack
    pop() {
        if (this.length === 0) {  // !this.top <-----> this.length === 0 -----> same condition 
            throw new Error('❌You can not call pop on empty stack!!!!❌')
        } else {
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            this.length--
            return temp.value
            
        }


    }

    //  peek method that does not take an argument and returns the value of the node located on top of the stack,
    //  without removing it from the stack Should raise exception when called on empty stack
    peek() {
        if (this.length === 0) {  // !this.top <-----> this.length === 0 -----> same condition 
            throw new Error('❌You can not call peek on empty stack!!!!❌')
        } else {
            return this.top.value
        }
    }

    //isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
    isEmpty() {
        if (!this.top) { // !this.top <-----> this.length === 0 -----> same condition 
            return true
        } else {
            return false
        }

    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
            this.length++
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length++
        }
    }

    dequeue(){
        if(!this.front){
            throw new Error('❌You can not call dequeue on empty queue!!!!❌')
        }
        let temp = this.front;
        this.front=this.front.next
        temp.next =null;
        this.length--
        return temp.value
    }

    peek() {
        if (!this.front) { 
            throw new Error('❌You can not call peek on empty queue!!!!❌')
        } else {
            return this.front.value
        }
    }

    isEmpty() {
        if (!this.front) { 
            return true
        } else {
            return false
        }

    }

}


module.exports = {
    Node: Node,
    Stack: Stack,
    Queue: Queue,
}