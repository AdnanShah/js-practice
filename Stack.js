class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    node.previous = this.top
    this.top = node
    this.size += 1;
    return node;
  }

  pop() {
    const tempNode = this.top
    this.top = this.top.previous
    this.size -= 1;
    return tempNode
  }

}


const stck = new Stack();

stck.push('1')
stck.push('2')
stck.push('3')

// stck.pop()
// stck.pop()
stck.pop()

console.log("🚀 ~ stck:", stck)

