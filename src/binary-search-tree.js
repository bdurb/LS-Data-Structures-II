// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(newValue) {
    const node = new BinarySearchTree(newValue);
    if (newValue <= this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(newValue);
      }
    } else if (newValue > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(newValue);
      }
    }
  }
  contains(newValue) {
    let hasIt = false;
    if (newValue === this.value) {
      hasIt = true;
    } else if (this.right !== null) {
      if (this.right.contains(newValue)) {
        hasIt = true;
      }
    } else if (this.left !== null) {
      if (this.left.contains(newValue)) {
        hasIt = true;
      }
    }
    return hasIt;
  }

  depthFirstForEach() {

  }
}

module.exports = BinarySearchTree;
