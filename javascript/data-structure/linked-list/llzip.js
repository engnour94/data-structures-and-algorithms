'use strict';

const {LinkedList} = require('../linked-list/linked-list');

function zipLists(listOne, listTwo) {

    let zippedList = new LinkedList;

    let tempFirstList = listOne.head;
    let tempSecondList = listTwo.head;

    while (tempFirstList || tempSecondList) {
        if (tempFirstList) {
            zippedList.append(tempFirstList.value);
            tempFirstList = tempFirstList.next;
        }
        if (tempSecondList) {
            zippedList.append(tempSecondList.value);
            tempSecondList = tempSecondList.next;
        }

    }

    return zippedList
}

module.exports = zipLists