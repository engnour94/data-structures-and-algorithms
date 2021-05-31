'use strict';
const { AnimalShelter } = require('../fifoAnimalShelter/fifo-animal-shelter');
const { expect } = require('@jest/globals');

//   <-------------✔️ AnimalShelter method's testing ✔️------------>😇
let cat_001 ={
    type:'cat',
    name:'luci'
}
let cat_002 ={
    type:'cat',
    name:'Suzy'
}
let cat_003 ={
    type:'cat',
    name:'Sira'
}

let dog_001 ={
    type:'dog',
    name:'Haxi'
}
let dog_002 ={
    type:'dog',
    name:'Winky'
}
let fox_001 ={
    type:'fox',
    name:'Roxy'
}
//  <-------------✔️  testing enqueue(animal) method ✔️------------>
it('  ✓ it should instantiate empty queues for dogs and cats', () => {
    const q = new AnimalShelter();
    expect(q.dog.front).toEqual(null);
    expect(q.cat.front).toEqual(null);
  });


it('✓ enqueue(animal): it should add cats into a queue ', () => {
    let shelter = new AnimalShelter()
    shelter.enqueue(cat_001);
    shelter.enqueue(cat_002);
    expect(shelter.dog.front).toBe(null)
    expect(shelter.cat.front.value.type).toBe('cat')
    expect(shelter.cat.front.next.value.type).toBe('cat')
    expect(shelter.cat.front.next.value.name).toBe('Suzy')

  });
 
  it(' ✓ enqueue(animal): it should add dogs and cats in each queue ', () => {
    let shelter = new AnimalShelter()
    shelter.enqueue(dog_001);
    shelter.enqueue(dog_002);
    expect(shelter.cat.front).toBe(null)
    expect(shelter.dog.front.value.type).toBe('dog')
    expect(shelter.dog.front.value.name).toBe('Haxi')

  });


  it("✓ Failure: it should make raise an exception if the animal type doesn't cat or dog" , () => {
    let shelter = new AnimalShelter()
    const errorFunction = () => {
        let output = shelter.enqueue(fox_001);
    }
    //assert
    expect(errorFunction).toThrow('This shelter is just for cats 🐱 and dogs 🐶');
 });

 it("  ✓ Edge cases: it should raise an exception if you enqueue without inserting animal", () => {
    let shelter = new AnimalShelter();
    const errorFunction = () => {
        let output = shelter.enqueue();
    }
    //assert
    expect(errorFunction).toThrow('You have to add cats 🐱 or dogs 🐶');
});
 
//  <-------------✔️  testing dequeue(animal) method ✔️------------>
it(' ✓ dequeue(pref): it should remove  the pref cat from a queue', () => {
    let shelter = new AnimalShelter()
    shelter.enqueue(cat_002);//suzy
    shelter.enqueue(cat_001);//luci
    shelter.enqueue(cat_003);//sira
    expect(shelter.dequeue('cat').name).toBe('Suzy')
    expect(shelter.cat.front.value.name).toBe('luci')
    expect(shelter.cat.front.next.value.name).toBe('Sira')

  });

  it(' ✓ dequeue(pref): it should remove the pref dog from a queue', () => {
    let shelter = new AnimalShelter()
    shelter.enqueue(dog_002);
    expect(shelter.dequeue('dog').name).toBe('Winky')
    expect(shelter.cat.front).toBe(null)

  });

  it(' ✓ dequeue(pref): it should return null if the type does not exist ', () => {
    let shelter = new AnimalShelter()
    shelter.enqueue(dog_002); 

    expect(shelter.dequeue('fox')).toBe(null)


  });


  
 
  

 