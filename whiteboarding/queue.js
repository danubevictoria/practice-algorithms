class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(val) {
    var s1 = this.s1;
    s1.push(val);
  }

  dequeue() {
    if(this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }
}

var q1 = new Queue();
q1.enqueue(2);
q1.enqueue(4);
console.log(q1.dequeue());
q1.enqueue(3);
console.log(q1.dequeue());
