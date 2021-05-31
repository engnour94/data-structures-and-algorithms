'use strict';
const { Queue } = require('../stacksAndQueues/stacks-and-queues.js')

class AnimalShelter {
    constructor() {
        this.dog = new Queue();
        this.cat = new Queue();
    }

    enqueue(animal) {

        if(!animal){
            throw new Error('You have to add cats 🐱 or dogs 🐶'); 
        }
        if (animal.type === 'cat') {
            this.cat.enqueue(animal)
        }
        else if (animal.type === 'dog') {
            this.dog.enqueue(animal)
        }
        else  {//if (!animal.type || (animal.type !== 'dog' && animal.type !== 'cat'))
            throw new Error('This shelter is just for cats 🐱 and dogs 🐶');
        }
    }

    dequeue(pref) {//when someone prefer animal and take it from shelter so it is dequeued from shelter
        if (pref === 'cat') {
            return this.cat.dequeue()
        }
        else if (pref === 'dog') {
            return this.dog.dequeue()
        }
        else  {
            return null;
        }
        
    }
}


module.exports = { AnimalShelter }
    // let shelter = new AnimalShelter()

    // let susu ={
    //     type:'cat',
    //     name:'luci'
    // }
    // shelter.enqueue(susu)
    // // cat.enqueue(dog)
    // console.log(shelter.cat.front)
