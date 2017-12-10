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
// Pure recursion - no external state
// Side Effects recursion - requires additional requirements
// Helper Method - least clean because adds an external state
// Recursion uses call stack space
// Use recursion for nested items

function printArray(arr) {


    function traverse(index) {
      if(index >= arr.length) {
          return;
      }
        traverse(index + 1);
        console.log(arr[index]);

    }

    traverse(0);

}

// printArray([1, 2, 3])


function squareArray(arr) {

//     1. Define Scope Variables
    let result = []

//     3. Define and Invoke Helper Function
    function traverse(index) {
//         4. Base Case
      if(index >= arr.length) {
          return;
      }
//         5. Recursive Case
      result.push(arr[index] * arr[index]);
      traverse(index + 1);
    }

    traverse(0);

//     2. Return Scope Variables
    return result;
}


printArray(squareArray([1, 2, 3]));
