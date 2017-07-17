/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {
      node: [],
      edge: []
    }

  }
  addNode(newNode, toNode) {
    this.graph.node.push(newNode);
  }
  contains(value) {
    if (this.graph.node.includes(value)) {
      return true;
    }
    return false;
  }
  removeNode(value) {
      this.graph.node.splice(value);
  }
  addEdge() {

  }
  getEdge() {

  }
  removeEdge() {

  }
}

module.exports = Graph;
