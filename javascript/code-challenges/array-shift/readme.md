# Insert Shift Array
How to insert a value at the middle of an array without utilizing array's method

## Challenge Description
I have to write a function that will insert a value at the middle of an array without using `array.unshift()` method

## Approach & Efficiency
I created function called `insertShiftArray` that takes in an array and value, then I defined new array inside it, loop over the inserted array and pushed to the new array the inserted array's elements and I used this algorithm to check the middle index of the inserted array `((arr.length / 2) - 1) == i)` in an if statement that will push to the new array the inserted value at the middle when it reached to that index, then continue pushing the rest of the elements. and return the new array.


## Solution
![Challenge02](../../../assets/array-shift.png)
