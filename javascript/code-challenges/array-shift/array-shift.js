'use strict';

module.exports = function insertShiftArray(arr,num){
    let newArr=[];
    
    arr.forEach(val=>{
       let middle = Math.round((arr.length/2)) 
     
      if(val===middle){
          newArr.push(val)
        newArr.push(num)
      }else{ newArr.push(val)}
    })
    return(newArr);
   }
