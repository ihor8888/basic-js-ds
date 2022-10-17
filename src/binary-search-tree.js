const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
   constructor(val) {
       this.data = val;
       this.right = null;
       this.left = null;
       this.count = 0;
   };
};

class BinarySearchTree {
   constructor() {
       this.rt = null;
   }

   root() {
       return this.rt;
   }

   add(val) {
       const newNode = new Node(val);
       if (!this.rt) {
           this.rt = newNode;
           return this;
       };
       let current = this.rt;

       const addSide = side => {
           if (!current[side]) {
               current[side] = newNode;
               return this;
           };
           current = current[side];
       };

       while (true) {
           if (val === current.data) {
               current.count++;
               return this;
           };
           if (val < current.data) addSide('left');
           else addSide('right');
       };
   };

   find(val) {
       if (!this.rt) return undefined;
       let current = this.rt,
           found = false;

       while (current && !found) {
           if (val < current.data) current = current.left;
           else if (val > current.data) current = current.right;
           else found = true;
       };

       if (!found) return null;
       return current;
   };

   has(val) {
       if (!this.rt) return undefined;
       let current = this.rt,
           found = false;

       while (current && !found) {
           if (val < current.data) current = current.left;
           else if (val > current.data) current = current.right;
           else return true;
       };

       return false;
   };

   min() {
       if (!this.rt) return undefined;
       let current = this.rt;

       while (current.left) {
           current = current.left;
       };

       return current.data;
   };

   max() {
       if (!this.rt) return undefined;
       let current = this.rt;

       while (current.right) {
           current = current.right;
       };

       return current.data;
   };

   bfs(start) {
       let data = [],
           queue = [],
           current = start ? this.find(start) : this.rt;

       queue.push(current);
       while (queue.length) {
           current = queue.shift();
           data.push(current.data);

           if (current.left) queue.push(current.left);
           if (current.right) queue.push(current.right);
       };

       return data;
   }

   remove(val) {
       if (!this.rt) return undefined;
       if (!this.has(val)) return null;

       let current = this.rt,
           parent;

       const pickSide = side => {
           if (!current[side]) return null;

           parent = current;
           current = current[side];
       };

       const deleteNode = side => {
           if (current.data === val && current.count > 1) current.count--;
           else if (current.data === val) {
               const children = this.bfs(current.data);
               parent[side] = null;
               children.splice(0, 1);
               children.forEach(child => this.add(child));
           };
       };

       while (current.data !== val) {
           if (val < current.data) {
               pickSide('left');
               deleteNode('left');
           }
           else {
               pickSide('right');
               deleteNode('right');
           };
       };

       return current;
   }
};

const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};