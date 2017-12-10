// # heap sort
// # want to sort the array.
//
//
// # input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]
// # output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]
//
//
// # Converting unsorted array into max heap
// # Removing peek of max heap and adding to array
// # return sorted array
//
//
//
// #  1
// # 3
//
// # array = [1, 3, 5]
// #         heap arr
// # heap length = 2
//Time: O(N*log(N))
//Space: O(1)
function heap_sort(arr) {

  heap_length = 1;

  function getParent(child) {
    if (child === 0) {
      return null;
    }
    return Math.floor(child/2) + 1;
  }

  function getChild(parent) {
    if (parent <= heap_length - 1 && parent >= 0) {
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;
      if (left >= heap_length - 1 || arr[left] > arr[right]) {
        return left;
      } else {
        return right;
      }
    }
  }

  function swap(a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function bubbleUp(child) {
    if (child === 0) {
      return;
    }
    let parent = getParent(child);
    if (arr[parent] < arr[child]) {
      swap(child, parent);
      bubbleUp(parent);
    }
  }

  function bubbleDown(parent) {
    if (parent === heap_length - 1) {
      console.log('bubbledown complete');
      return;
    }
    let child = getChild(parent);
    if (arr[child] > arr[parent]) {
      swap(child, parent);
      bubbleDown(child);
    }
  }

  function insert(value) {
    arr.push(value);
    heap_length+=1;
    bubbleUp(heap_length - 1);
  }

  function remove(index) {
    swap(index, heap_length - 1);
    heap_length-=1;
    bubbleDown(index);
  }

  while (heap_length < arr.length) {
    insert(arr[heap_length]);
  }

  while (heap_length > 1) {
    remove(arr[0]);
  }

  return arr;
}

console.log(heap_sort([1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]));




// # heap sort
// # want to sort the array.
//
//
// # input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]
//
// # output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]
//
//
// # Converting unsorted array into max heap
// # Removing peek of max heap and adding to array
// # return sorted array
//
//
//
// #  1
// # 3
//
// # array = [1, 3, 5]
// #         heap arr
// # heap length = 2
//
//
//
// # input = [5, 3, 1]
// #                h  a
//
// #   5
// #  3 1
//
//
//
//
// def heap_sort(arr):
//
//
//     heap_length = 1
//
//
//     def get_parent(child):
//         if child % 2 != 0:
//             return (child - 1) // 2
//         else:
//             return (child - 2) // 2
//
//
//     def get_child(parent):
//         left = 2 * parent + 1
//         right = 2 * parent + 2
//         if left >= heap_length - 1 or arr[left] > arr[right]:
//             return left
//         else:
//             return right
//
//     def swap(a, b):
//         arr[a], arr[b] = arr[b], arr[a]
//
//
//     def bubble_up():
//         child = heap_length - 1
//         parent = get_parent(child)
//         while child > 0 and arr[parent] < arr[child]:
//             swap(parent, child)
//             child = parent
//             parent = get_parent(child)
//
//
//
//     def bubble_down():
//         parent = 0
//         child = get_child(parent)
//         while child < heap_length and arr[parent] < arr[child]:
//             swap(parent, child)
//             parent = child
//             child = get_child(parent)
//
//
//
//     def insert():
//         # increment the heap length
//         nonlocal heap_length
//         heap_length += 1
//         bubble_up()
//
//
//     def remove():
//         nonlocal heap_length
//         arr[0], arr[heap_length - 1] = arr[heap_length - 1], arr[0]
//         heap_length -= 1
//         bubble_down()
//         pass
//
//     while heap_length < len(arr):
//         insert()
//
//     while heap_length > 1:
//         remove()
//
//     return arr
//
//
// # Test on function at the bottom.
//
// print(heap_sort([1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]))
