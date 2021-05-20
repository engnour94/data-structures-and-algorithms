'use strict';
const Node = require('../linked-list.js');//linked-list.js

describe('node class', () => {
    it('should create new object', () => {
        // arrange
        let value = 5;
        // act
        let node = new Node(value);
        // assert
        expect(node.value).toEqual(5);
        expect(node.next).toEqual(null);
    });
});