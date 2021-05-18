'use strict';

const search = require('../array-binary-search.js');

const array=[1,2,3,4,5];
describe('binary search ', () => {
  it('It should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.', () => {
    expect(search(array,2)).toStrictEqual(1);
    expect(search(array,9)).toStrictEqual(-1);
  });
});