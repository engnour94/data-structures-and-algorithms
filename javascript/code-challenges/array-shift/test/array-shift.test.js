'use strict';

let insertShiftArray=require('../array-shift.js');

describe('TESTING Challenge 02', () => {
    it('it should return the new value at the middle of an array', () => {
        expect(insertShiftArray([1, 2, 3, 4, 5, 6, 7, 8], 10)).toEqual([1, 2, 3, 4, 10, 5, 6, 7, 8])
        expect(insertShiftArray([1, 2, 3, 4, 5, 6, 7 ], 10)).toEqual([1, 2, 3, 4, 10, 5, 6, 7])
        expect(insertShiftArray([ ], 10)).toEqual([])
    });

});