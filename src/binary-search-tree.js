const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data) {
     this.data = data;
     this.left = null;
     this.right = null;
  };
};
class BinarySearchTree{
  constructor(){
     this.root = null;
  }
  add(data){
     var newNode = new Node(data);
     if(this.root === null){
        this.root = newNode;
     }else{
        this.insertNode(this.root, newNode);
     };
  }
  insertNode(node, newNode){
     if(newNode.data < node.data){
        if(node.left === null){
           node.left = newNode;
        }else{
           this.insertNode(node.left, newNode);
        };
     } else {
        if(node.right === null){
           node.right = newNode;
        }else{
           this.insertNode(node.right,newNode);
        }
     }
  }

  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const BST = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};