'use strict';
const {mergeSort}=require('./merge.js')

describe('insertion function',()=>{

    it('it should sort reversed array ',()=>{
        let arr=[20,18,12,8,5,-2]
   
        expect(mergeSort(arr)).toEqual([ -2, 5, 8, 12, 18, 20 ])
   
    })
    it('it should sort random array ',()=>{
       let arr=[5,12,7,5,5,7]
   
       expect(mergeSort(arr)).toEqual([ 5, 5, 5, 7, 7, 12 ])
   
   })
   it('it should sort reversed array ',()=>{
       let arr=[2,3,5,7,13,11]
   
       expect(mergeSort(arr)).toEqual([ 2, 3, 5, 7, 11, 13 ])
   
   })
   it('it should return same array if it is sorted ',()=>{
       let arr=[ 2, 3, 5, 7, 11, 13 ]
   
       expect(mergeSort(arr)).toEqual(arr)
   
   })
   it('it should rise an exception ',()=>{
      
       expect(mergeSort()).toBe('you should insert numerical array')
   
   })

   it('it should rise an exception ',()=>{
       let arr = []
        expect(mergeSort()).toBe('you should insert numerical array')
    
    })
    it('it should rise an exception ',()=>{
       let arr = 1
        expect(mergeSort()).toBe('you should insert numerical array')
    
    })
   
   })