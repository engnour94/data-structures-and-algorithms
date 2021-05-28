'use strict';
//<----------------: the new solution  complexity of space Big O(1) ----------->
const {LinkedList} = require('../linked-list/linked-list');

function zipList ( list1, list2 ) {

    if ( !list1.head && !list2.head ) {
      return null;
    } else if ( !list1.head ) {
      return list2;
    } else if ( !list2.head ) {
      return list1;
    }
  
    let currentNode = null;
    let currentPointer = list1.head;
    let addPointer = list2.head;
  
    while( currentPointer && addPointer ){
  
      currentNode = currentPointer;
      currentPointer = currentPointer.next;
      currentNode.next = addPointer;
  
      let exchange = currentPointer;
      currentPointer = addPointer;
      addPointer = exchange;
  
    }
  
    return list1;
  
  }

module.exports = zipList


//<----------------: the old solution  complexity of space Big O(n) ----------->
// function zipList(listOne, listTwo) {

//     let zippedList = new LinkedList;

//     let tempFirstList = listOne.head;
//     let tempSecondList = listTwo.head;

//     while (tempFirstList || tempSecondList) {
//         if (tempFirstList) {
//             zippedList.append(tempFirstList.value);
//             tempFirstList = tempFirstList.next;
//         }
//         if (tempSecondList) {
//             zippedList.append(tempSecondList.value);
//             tempSecondList = tempSecondList.next;
//         }

//     }

//     return zippedList
// }

