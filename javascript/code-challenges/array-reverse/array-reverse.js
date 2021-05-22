'use strict';

// let array=[1,2,3,4]
module.exports=function reverseArr(arr){
  let newArr=[];
  let order = arr.length-1;
 for(let i=0 ; i<arr.length; i++){
 newArr.push(arr[order]);
  order = order-1;
 }
  return(newArr);
}
// module.exports={reverseArr:reverseArr}
// console.log(reverseArr(array))
// module.exports = {reverseArr}