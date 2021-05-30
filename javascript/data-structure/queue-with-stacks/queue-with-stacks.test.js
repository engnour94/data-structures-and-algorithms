'use strict';
const { PseudoQueue } = require('../queue-with-stacks/queue-with-stacks.js');
const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');
const { expect } = require('@jest/globals');

//            <-------------✔️ PseudoQueue method's testing ✔️------------>😇

it('it should instantiate an empty queue with stacks ', () => {
    let emptyStack = new Stack();
    let pq = new PseudoQueue();
    expect(emptyStack instanceof Stack).toBeTruthy();
    expect(pq.primaryStack.top).toEqual(null);
    expect(pq.secondaryStack.top).toEqual(null);
  });

  it('Happy path😇-->> it should enqueue to an existing empty queue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue).toBeDefined();
    expect(newQueue.primaryStack.top.value).toEqual(3);
    expect(newQueue.secondaryStack.top).toEqual(null);
  });

  it('Happy path😇-->> it should dequeue to an existing queue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue).toBeDefined();
    expect(newQueue.primaryStack.top.value).toEqual(3);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
  });

  
  it("Failure cases", () => {
    let newQueue = new PseudoQueue();

    const errorFunction = () => {
        let output = newQueue.dequeue();
    }
    //assert
    expect(errorFunction).toThrow('❌You can not call dequeue on empty queue!!!!❌');
});

      
it("Edge cases", () => {
    let newQueue = new PseudoQueue();
    const errorFunction = () => {
        let output = newQueue.enqueue();
    }
    //assert
    expect(errorFunction).toThrow('you have to insert value');
});
