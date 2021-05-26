

// const Node = require('../linked-list');
const { LinkedList } = require('../linked-list.js');
// const zipLists =require('../llzip.js')
const { expect } = require('@jest/globals');

describe('liked list class', () => {

    // testing for insert method
    it('it should take any value as an argument and adds a new node with that value to the head',
        () => {
            //arrange
            let ll = new LinkedList();
            ll.insert(5);
            let newValue = 10;
            //act
            ll.insert(newValue);//this is what i want to test
            //assert
            expect(ll.head.value).toEqual(newValue);
            expect(ll.head.next.value).toEqual(5);
            expect(ll.head.next.next).toBeNull();
        });

    it('', () => {
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(6);
        ll.insert(7);
        ll.insert(8);
        expect(ll.head.value).toEqual(8);
        expect(ll.head.next.value).toEqual(7);
        expect(ll.head.next.next.value).toEqual(6);
        expect(ll.head.next.next.next.value).toEqual(5);
        expect(ll.head.next.next.next.next).toEqual(null);
    })
    it('should throw error', () => {
        //arrange
        let ll = new LinkedList();
        //act
        ll.insert();
        //assert
        expect(ll.head.value).toThrowError;

    });
    it('it should throw error', () => {

        let ll = new LinkedList();
        expect(ll.insert).toThrowError;

    });




    // testing for append method
    it('should append  a node to the end of the linked list', () => {
        //arrange
        let ll = new LinkedList();
        let value = 5;
        //act
        ll.append(value);
        //assert
        // expect(ll.head).not().toBeNull();
        expect(ll.head.value).toEqual(value);
        expect(ll.head.next).toBeNull();
    });

    it('should append append multiple nodes to the end of a linked list', () => {
        //arrange
        let ll = new LinkedList();
        ll.append(5);
        let newValue = 10;
        //act
        ll.append(newValue);
        //assert
        expect(ll.head.next.value).toEqual(newValue);
        expect(ll.head.next.next).toBeNull();
    });
    it('it should throw error', () => {

        let ll = new LinkedList();
        expect(ll.append).toThrowError;

    });



    // testing for include method
    it('should  takes any value as an argument and returns a boolean result depending on whether that value exists',
        () => {
            //arrange
            let ll = new LinkedList();
            ll.insert(5);
            ll.insert(4);
            //assert
            expect(ll.include(5)).toBeTruthy()
            expect(ll.include(4)).toBeTruthy()
            expect(ll.include(20)).toBeFalsy();
        });
    it('it should apply include method into empty ll', () => {
        let ll = new LinkedList();
        expect(ll.include(20)).toBeFalsy();
    })

    it('it should throw error', () => {

        let ll = new LinkedList();
        expect(ll.include).toThrowError;

    });



    //testing for to string method
    it('should return a string representing all the values in the Linked List', () => {
        //arrange
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(6);
        ll.insert(10);
        //act

        //assert
        expect(ll.toString()).toEqual('{ 10 } -> { 6 } -> { 5 } -> NULL');

    });
    it('should return NULL', () => {
        //arrange
        let ll = new LinkedList();
        //act
        //assert
        expect(ll.toString()).toEqual('NULL');

    });

    it('it should throw error', () => {

        let ll = new LinkedList();
        expect(ll.toString).toThrowError;

    });



    //testing insertBefore method

    it('it should insert a node before the first node of a linked list', () => {
        //arrange
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3)
        //act
        ll.insertBefore(3, 4)
        //assert
        expect(ll.head.value).toBe(4)
        expect(ll.head.next.value).toBe(3)

    })

    it('it should  insert a node before a node located in the middle of a linked list', () => {
        //act
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        //arrange
        ll.insertBefore(3, 5)

        //assert
        expect(ll.head.value).toBe(4)
        expect(ll.head.next.value).toBe(5)
        expect(ll.head.next.next.value).toBe(3)

        //  I --> 4 3 2 
        //  O --> 4 5 3 2 

    })

    it("it should throw error when the value doesn't  exist ", () => {
        //act
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        //assert
        expect(ll.insertBefore(10, 5)).toThrowError;

    })

    // testing for insertAfter()

    it('it should  insert a node after the first node of the linked list', () => {
        //act
        let ll = new LinkedList();
        ll.insert(2)
        ll.insert(3);
        ll.insert(4);

        //arrange
        ll.insertAfter(4, 5)

        //assert
        expect(ll.head.value).toBe(4)
        expect(ll.head.next.value).toBe(5)
        expect(ll.head.next.next.value).toBe(3)

        //  I --> 4 3 2
        //  O --> 4 5 3 2

    })

    it('it should insert after a node in the middle of the linked list', () => {
        //act
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);

        //arrange
        ll.insertAfter(3, 5)
        //assert
        expect(ll.head.value).toBe(4)
        expect(ll.head.next.value).toBe(3)
        expect(ll.head.next.next.value).toBe(5)

        //  I --> 4 3 2 
        //  O --> 4 3 5 2

    })

    it('it should insert after a node in the last node of the linked list', () => {
        //act
        let ll = new LinkedList();
        ll.insert(3);
        ll.insert(4);

        //arrange
        ll.insertAfter(3, 5)
        //assert
        expect(ll.head.value).toBe(4)
        expect(ll.head.next.value).toBe(3)
        expect(ll.head.next.next.value).toBe(5)

        //  I --> 4 3 
        //  O --> 4 3 5 

    })

    it("it should throw error when the value doesn't  exist ", () => {
        //act
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        //assert
        expect(ll.insertAfter(10, 5)).toThrowError;

    })

    /// testing  kthFromEnd(k) method

    it("it should take a number, k, as a parameter. Return the node’s value that is k from the end of the linked list", () => {
        //act
        let ll = new LinkedList();
        ll.insert(1);//0
        ll.insert(2);//1
        ll.insert(3);//2
        ll.insert(4);//3

        //assert
        /* “Happy Path” */
        expect(ll.kthFromEnd(0)).toBe(1);
        expect(ll.kthFromEnd(1)).toBe(2);
        expect(ll.kthFromEnd(2)).toBe(3);
        expect(ll.kthFromEnd(3)).toBe(4);

        /* Where k and the length of the list are the same */
        expect(ll.kthFromEnd(4)).toThrowError;
        /*Where k is not a positive integer */
        expect(ll.kthFromEnd(-1)).toThrowError;
        /* Where k is greater than the length of the linked list */
        expect(ll.kthFromEnd(10)).toThrowError;
    })

    it("testing for the linked list is of a size 1 ", () => {
        //act
        let ll = new LinkedList();
        ll.insert(1);//0
        //assert
        /* “Happy Path” */
        expect(ll.kthFromEnd(0)).toBe(1);
        /*Where k is not a positive integer */
        expect(ll.kthFromEnd(-1)).toThrowError;
        /*Where k is greater than the length of the linked list*/
        expect(ll.kthFromEnd(10)).toThrowError;
    })

 


});

