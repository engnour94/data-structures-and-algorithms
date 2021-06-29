'use strict';

const HashTable= require('../hashTables/hashTable.js');
const leftJoin = require('./leftJoin.js');


describe('testing left join', () => 
{   it ('should not continue without entering two hash maps', ()=>{
   
    expect (leftJoin()).toBe('please enter two hash maps');
  });
  it('accepts two HashTables as arguments', () => {
    let table1 = new HashTable(16);
    let table2 = new HashTable(16);
    table1.add('fond', 'enamour');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');

    let results = leftJoin(table1, table2);
    expect(results).toEqual([
      ['fond', 'enamour', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow']
    ]);
  });

  it('returns null if any  HashTables is empty', () => {
    let table1 = new HashTable(8);
    let table2 = new HashTable(8);
    let table3 = new HashTable(18);

    table3.add('fond', 'enamour');
    table3.add('wrath', 'anger');
    table3.add('diligent', 'employed');
    table3.add('outfit', 'garb');
    table3.add('guide', 'usher');

    let result = leftJoin(table1, table2);
    let result2 = leftJoin(table1, table3);
    expect(result).toBe(null);
    expect(result2).toBe(null);
  });

  

  it('edge cases', () => {
    let table1 = new HashTable(8);
    let table2 = new HashTable(8);
    table1.add('fond', 'spice');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    table2.add('sugar', 'averse');
    table2.add('salt', 'delight');
    table2.add('pepper', 'idle');
    table2.add('florence', 'follow');
    table2.add('waterfall', 'jam');
    let results = leftJoin(table1, table2);
    expect(results).toEqual([
      ['fond', 'spice', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
    ]);
  });

});