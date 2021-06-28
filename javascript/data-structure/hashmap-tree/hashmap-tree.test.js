'use strict';

const Node = require('../tree/tree.js').Node;
const BT  = require('../tree/tree').BinaryTree;
const treeIntersection = require('../hashmap-tree/hashmap-tree.js');


describe('hash map treeIntersection Test', () => {
  let tree1,tree2, tree3,tree4, tree5;
  beforeAll(()=>{
    tree1 = new BT();
    tree2 = new BT();
    tree3 = new BT();
    
    tree4 = new BT();
    tree5 = new BT();
    //tree1
    const one1 = new Node(150);
    tree1.root=one1;
    let m=new Node(80);
    one1.right=m;
    let g=new Node(60);
    m.left=g;
    let h=new Node(90);
    g.left=h;

    //tree2
    const one2 = new Node(150);
    tree2.root=one2;
    let t2=new Node(30);
    one2.left=t2;
    let th2=new Node(60);
    let f2=new Node(80);
    one2.right=th2;
    th2.left=f2;
    let l=new Node(10);
    f2.left=l;


    //tree3
    let one3=new Node(10);
    tree3.root=one3;
    let t=new Node(2);
    let th=new Node(3);
    one3.right=t;
    one3.left=th;
    let f=new Node(7);
    th.right=f;

  });
  it('can return a set of values found in both trees', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([150,60,80]);
  });
  it('can return a set of values found in both trees', () => {
    expect(treeIntersection(tree2, tree3)).toEqual([10]);
  });
  it('return an exception if the trees values are unique', () => {
    expect(treeIntersection(tree1, tree3)).toEqual('No matches');

  });

  it('return an exception if the trees values are empty!', () => {
    expect(treeIntersection(tree4, tree5)).toEqual('Empty Tree!');

  });

});


describe('testing tree intersection function', () => {

  const treeOne = new BT();
  treeOne.root = new Node(150);
  treeOne.root.left = new Node(100);
  treeOne.root.right = new Node(250);
  treeOne.root.left.left = new Node(75);
  treeOne.root.left.right = new Node(160);
  treeOne.root.left.right.left = new Node(125);
  treeOne.root.left.right.right = new Node(175);
  treeOne.root.right.left = new Node(200);
  treeOne.root.right.right = new Node(350);
  treeOne.root.right.right.left = new Node(300);
  treeOne.root.right.right.right = new Node(500);

  const treeTwo = new BT();
  treeTwo.root = new Node(42);
  treeTwo.root.left = new Node(100);
  treeTwo.root.right = new Node(600);
  treeTwo.root.left.left = new Node(15);
  treeTwo.root.left.right = new Node(160);
  treeTwo.root.left.right.left = new Node(125);
  treeTwo.root.left.right.right = new Node(175);
  treeTwo.root.right.left = new Node(200);
  treeTwo.root.right.right = new Node(350);
  treeTwo.root.right.right.left = new Node(4);
  treeTwo.root.right.right.right = new Node(500);

  it('should output array of common nodes', () => {
    let test = treeIntersection(treeOne, treeTwo);

    expect(test).toEqual([100, 160, 125, 175,200, 350, 500]);
  });

});