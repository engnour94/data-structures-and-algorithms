![slice](https://capsule-render.vercel.app/api?type=slice&color=gradient&auto&height=200&text=hashmap-tree&fontAlign=70&rotate=13&fontAlignY=25&desc=Done%20by%20Nour%20AbuEl-nein.&descAlign=70.&descAlignY=44)

#  hashmap-tree-intersection

## Challenge

How to create a function that finds common values in 2 binary trees.

## Approach & Efficiency

* create a function that takes two trees as an argument.
* create a new table.
* convert the input trees to arrays using preOrder traverse tree method.
* add the first tree values to the table
* iterate over the second tree, check each value, if it is already in the table, push it to the result array
* return the array or an exception
 

- time O(n) 
- space O(n)

## API
Find all values found to be in 2 binary trees

Write a function called tree intersection
- Arguments: two binary trees
- Return: array

## solution 
![img](hash-BT.jpg)
