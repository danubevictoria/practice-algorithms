// Heaps can have repeated numbers
class MinHeap {
  constructor() {
    this.storage = [];
  }

  peak() {
    return this.storage[0];
  }

  size() {
    return this.storage.length;
  }

  swap(index1, index2) {
    var arr = this.storage;
    var val1 = arr[index1];
    var val2 = arr[index2];
    arr[index2] = val1;
    arr[index1] = val2;
  }

  //Time:O(log n)
  insert(val) {
    this.storage.push(val);
    this.bubbleUp(this.size() - 1);
  }

  getParentIndex(childIndex) {
    if (childIndex % 2 == 0) {
      return (childIndex - 2) / 2;
    } else {
      return (childIndex - 1) / 2;
    }
  }

  bubbleUp(childIndex) {
    let parentIndex = this.getParentIndex(childIndex);

    while (childIndex > 0 && this.storage[childIndex] < this.storage[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex =  this.getParentIndex(childIndex);
    }
  }

  //Time: O(log n)
  removePeak() {
    // don't want to shift or pop from the first element of the array because it would take linear time to reassign indices to each element
    this.swap(0, this.size() - 1);
    let result = this.storage.pop();
    this.bubbleDown(0);
    return result;
  }

  getSmallestChild(parentIndex) {
    let child1 = 2 * parentIndex + 1;
    let child2 = 2 * parentIndex + 2;

    if (child1 >= this.size()) {
      return child1;
    } else if (child2 >= this.size()){
      return child1;
    } else if (this.storage[child1] < this.storage[child2]) {
      return child1;
    } else {
      return child2;
    }
  }

  bubbleDown(parentIndex) {
    let child = this.getSmallestChild(parentIndex);

    while (child < this.size() && this.storage[parentIndex] > this.storage[child]) {
      this.swap(child, parentIndex);
      parentIndex = child;
      child = this.getSmallestChild(parentIndex);
    }
  }

  remove(index) {

  }
}

//Given randomly sorted array, what is the runtime to create a min heap or a max heap
//O(n) not O(n log n)
//Why?

let test = new MinHeap();
// test.storage = [5, 6, 7, 8];
test.insert(5);
test.insert(8);
test.insert(1);
test.insert(10);
test.insert(7);
test.insert(12);
test.insert(9);
test.insert(2);
console.log(test);
// test.swap(0, 3);
console.log(test.removePeak());
console.log(test);
