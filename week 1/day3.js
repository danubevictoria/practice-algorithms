// Array has to be sorted
// Target is what you're looking for
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;
  let counter = 1;

  while (start <= end) {
    console.log('entered loop ' + counter + ' times');
    counter++;

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

//consider using recursion when you don't have accesses to indices to iterate through
