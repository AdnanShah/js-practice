class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
  }
}

Queue.prototype.push = function (data) {
  const node = new Node(data)

  if (!this.first) {
    this.first = node;
  } else {
    let temp = this.first
    while (temp.next) {
      temp = temp.next
    }
    temp.next = node
  }

}

const queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)

console.log("🚀 ~ queue:", queue)

