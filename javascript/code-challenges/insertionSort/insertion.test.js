'use strict';
const insertionSort= require('./insertion.js')
describe('insertion function',()=>{

 it('it should sort reversed array ',()=>{
     let arr=[20,18,12,8,5,-2]

     expect(insertionSort(arr)).toEqual([ -2, 5, 8, 12, 18, 20 ])

 })
 it('it should sort random array ',()=>{
    let arr=[5,12,7,5,5,7]

    expect(insertionSort(arr)).toEqual([ 5, 5, 5, 7, 7, 12 ])

})
it('it should sort reversed array ',()=>{
    let arr=[2,3,5,7,13,11]

    expect(insertionSort(arr)).toEqual([ 2, 3, 5, 7, 11, 13 ])

})
it('it should return same array if it is sorted ',()=>{
    let arr=[ 2, 3, 5, 7, 11, 13 ]

    expect(insertionSort(arr)).toEqual(arr)

})
it('it should rise an exception ',()=>{
   
    expect(insertionSort()).toBe('you should insert numerical array')

})
it('it should rise an exception ',()=>{
   let arr = ['a','b']
    expect(insertionSort()).toBe('you should insert numerical array')

})
it('it should rise an exception ',()=>{
    let arr = []
     expect(insertionSort()).toBe('you should insert numerical array')
 
 })
 it('it should rise an exception ',()=>{
    let arr = 1
     expect(insertionSort()).toBe('you should insert numerical array')
 
 })

})