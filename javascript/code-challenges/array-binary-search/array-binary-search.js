'use strict';
/**
 * Write a function called BinarySearch which takes in 2 parameters:
 *  a sorted array and the search key. Without utilizing any of 
 * the built-in methods available to your language, return the index of the 
 * array’s element that is equal to the value of the search key, or -1 if
 *  the element is not in the array.
 * @param {Array} arr 
 * @param {number} num 
 * @returns {number} the index of the array’s , or -1
 */
module.exports =function binarySearch (arr,num){
  let low=0;
  let high=arr.length-1;
  while(low<=high){
    const middle= Math.floor((low+high)/2);
    const check = arr[middle];
    if(check===num){
      return middle;
    }
    if(check>num){
      high= middle-1;
    }else{
      low = middle+1;
    }

  }
  return -1;
}

