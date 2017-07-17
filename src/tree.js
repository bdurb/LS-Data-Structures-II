class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.storage = [value];
  }
  addChild(value) {
    this.storage.push(value);
    const node = new Tree(value);
    this.children.push(node);
  }
  contains(newValue) {
    if (this.value === newValue) {
      return true;
    } else if (this.children.length > 0) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(newValue)) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = Tree;
