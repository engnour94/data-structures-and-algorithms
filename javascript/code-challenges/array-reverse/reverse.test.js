'use strict';

let reverseArr=require('./array-reverse.js');

describe('TESTING Challenge reverse array', () => {
    it('it should return reversed array', () => {

        expect(reverseArr([1, 2, 3, 4])).toEqual([4,3,2,1])
        expect(reverseArr([])).toEqual([])
      
    });

});