const {HashTable}=require('./hashTables.js')

describe('HashTable Testing',()=>{
 it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let myhash = new HashTable(1021);
    myhash.add('John', 'Boss');
    myhash.add('Cathy', 'The Real Boss');
    expect(myhash.table[myhash.hash('Cathy')]).toBeDefined()
 })

 it('Retrieving based on a key returns the value stored',()=>{
    let myhash = new HashTable(1021);
    myhash.add('John', 'Boss');
    myhash.add('Cathy', 'The Real Boss');
    expect(myhash.get('John')).toEqual([ 'Boss' ])

 })
 it('Successfully returns false for a key that does not exist in the hashtable',()=>{
    let myhash = new HashTable(1021);
    myhash.add('John', 'Boss');
    myhash.add('Cathy', 'The Real Boss');
    expect(myhash.contains('Jo')).toBeFalsy
 })
 it('Successfully returns true for a key that does not exist in the hashtable',()=>{
    let myhash = new HashTable(1021);
    myhash.add('John', 'Boss');
    myhash.add('Cathy', 'The Real Boss');
    expect(myhash.contains('John')).toBeFalsy
 })
 it('Successfully handle a collision within the hashtable',()=>{
    let myhash = new HashTable(1021);
     myhash.add('atC', 'Boss');
     myhash.add('Cat', 'TA');
     expect(myhash.get('Cat')).toEqual([ 'Boss','TA' ])
     expect(myhash.table[myhash.hash('Cat')].length).toEqual(2)
     expect(myhash.table[myhash.hash('Cat')].head.value).toEqual({'atC': 'Boss'})
     expect(myhash.table[myhash.hash('Cat')].head.next.value).toEqual({'Cat':'TA'})

 }) 

 it('Successfully return null if the key is not in the table',()=>{
    let myhash = new HashTable(1021);
    myhash.add('John', 'Boss');
    myhash.add('Cat', 'TA');
    expect(myhash.get('at')).toBe(null)
    

 })
 it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let myhash = new HashTable(1021);
    myhash.add('atC', 'Boss');
    myhash.add('Cat', 'TA');
    expect(myhash.get('Cat')).toEqual([ 'Boss','TA' ])
    expect(myhash.table[myhash.hash('Cat')].length).toEqual(2)

 })

 it ('should hash a key to an in-range value' , ()=>{
    let myHash = new HashTable (1021);
    let hashed = myHash.hash ('key');
    expect (hashed).toBeLessThanOrEqual (599 % myHash.size);
    expect(hashed >= 0).toEqual(true);
    expect(hashed < 1021).toEqual(true);
  });

})
