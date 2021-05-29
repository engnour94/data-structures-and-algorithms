'use strict';
const { Node } = require('../stacks-and-queues.js');
const { Stack } = require('../stacks-and-queues.js');
const { Queue } = require('../stacks-and-queues.js');
const { expect } = require('@jest/globals');

// <-------------✔️ Node Testing ✔️------------>
describe('node class', () => {
    it('should create new object', () => {
        // arrange
        let value = 5;
        // act
        let node = new Node(value);
        // assert
        expect(node.value).toEqual(5);
        expect(node.next).toEqual(null);
    });
});

//            <-------------✔️ Stack data structure method's testing ✔️------------>


// <-------------✔️ Push method Testing ✔️------------>

describe('Push method Testing', () => {
    it('it should add a new node  to the top of the stack', () => {
        let stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        // console.log(stack.top.value)
        expect(stack.top.value).toBe(4)
        expect(stack.top.next.value).toBe(3)
        expect(stack.top.next.next.value).toBe(2)
        expect(stack.top.next.next.next.value).toBe(1)
        expect(stack.top.next.next.next.next).toBe(null)
    })
})

// <-------------✔️ Pop method Testing ✔️------------>
describe('Pop method Testing', () => {
    it('it should remove the node from the top of the stack, and returns the node’s value', () => {
        let stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        // console.log(stack.top.value)
        expect(stack.pop()).toBe(4);
    })
})

describe('Pop method Testing', () => {
    it('it should empty a stack after multiple pops', () => {
        let stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        //act
        stack.pop()
        stack.pop()
        stack.pop()
        stack.pop()
        expect(stack.top).toBe(null);
    })
})

describe('Pop method Testing', () => {
    it('it should raise  exception when Calling  pop on empty stack', () => {
        let stack = new Stack()

        //act
        const errorFunction = () => {
            let output = stack.pop();
        }
        //assert
        expect(errorFunction).toThrow('❌You can not call pop on empty stack!!!!❌');

    })
})

// <-------------✔️ Peek method the stack Testing ✔️------------>
describe('Peek method Testing', () => {
    it('it should successfully peek the next item on the stack', () => {
        let stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        //act
        expect(stack.peek()).toBe(4);
    })
})

describe('Peek method Testing', () => {
    it('it should raise  exception when Calling  peek on empty stack ', () => {
        let stack = new Stack()

        //act
        const errorFunction = () => {
            let output = stack.peek();
        }
        //assert
        expect(errorFunction).toThrow('❌You can not call peek on empty stack!!!!❌');

    })
})

// <-------------✔️  isEmpty() method on the stack Testing ✔️------------>

describe('isEmpty() method Testing', () => {
    it('it should return True when the stack is  empty', () => {
        let stack = new Stack()

        //assert
        expect(stack.isEmpty()).toBeTruthy;

    })
})

describe('isEmpty() method Testing', () => {
    it('it should return false when the stack is  empty', () => {
        let stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        //assert
        expect(stack.isEmpty()).toBeFalsy;

    })
})

//            <-------------✔️ Queue data structure method's testing ✔️------------>

// <-------------✔️ enqueue method Testing ✔️------------>

describe('enqueue method Testing', () => {
    it('it should add a new node  to the top of the stack', () => {
        let queue = new Queue();
        queue.enqueue(5)
        queue.enqueue(4)
        queue.enqueue(10)
        // console.log(queue.rear)
        // console.log(queue.front.value)
        expect(queue.rear.value).toBe(10)
        expect(queue.rear.next).toBe(null)
        expect(queue.front.next.value).toBe(4)
        expect(queue.front.value).toBe(5)
    })
})

// <-------------✔️ dequeue method Testing ✔️------------>

describe('dequeue method Testing', () => {
    it('it successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(5)
        queue.enqueue(4)
        queue.enqueue(10)
        expect(queue.dequeue()).toBe(5)
        expect(queue.front.value).toBe(4)
        expect(queue.front.next.value).toBe(10)
    })
})

describe('dequeue method Testing', () => {
    it('it should empty a stack after multiple dequeue', () => {
        let queue = new Queue();
        queue.enqueue(5)
        queue.enqueue(4)
        queue.enqueue(10)
        queue.dequeue()
        queue.dequeue()
        queue.dequeue()
        expect(queue.front).toBe(null);
        expect(queue.rear.next).toBe(null);
    })
})

describe('dequeue method Testing', () => {
    it('it should raise  exception when Calling  dequeue  on empty stack', () => {
        let queue = new Queue();
        
      //act
      const errorFunction = () => {
        let output = queue.dequeue();
    }
    //assert
    expect(errorFunction).toThrow('❌You can not call dequeue on empty queue!!!!❌');
    })
})

// <-------------✔️ Peek method on the queue Testing ✔️------------>
describe('Peek method Testing', () => {
    it('it should successfully peek the next item on the queue', () => {
        let queue = new Queue();
        queue.enqueue(5)
        queue.enqueue(4)
        queue.enqueue(10)
        //act
        expect( queue.peek()).toBe(5);
    })
})

describe('Peek method Testing', () => {
    it('it should raise  exception when Calling  peek on empty queue', () => {
        let queue = new Queue();

        //act
        const errorFunction = () => {
            let output = queue.peek();
        }
        //assert
        expect(errorFunction).toThrow('❌You can not call peek on empty queue!!!!❌');

    })
})

// <-------------✔️  isEmpty() method the queue Testing ✔️------------>

describe('isEmpty() method Testing', () => {
    it('it should return True when the queue is  empty', () => {
        let queue = new Queue();

        //assert
        expect(queue.isEmpty()).toBeTruthy;

    })
})

describe('isEmpty() method Testing', () => {
    it('it should return false when the queue is  empty', () => {
        let queue = new Queue();
        queue.enqueue(5)
        queue.enqueue(4)
        queue.enqueue(10)
        //assert
        expect(queue.isEmpty()).toBeFalsy;

    })
})