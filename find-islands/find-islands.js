// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

// Example:

// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         // [0,    0,    1,    1,    1],
                         // [1,    0,    0,    1,    0],
                         // [0,    1,    1,    0,    0],
                         // [1,    0,    1,    0,    1] ]

// output: 6 # since this is the number of islands in binaryMatrix.
     //     # See all 6 islands color-coded below.
// alt

// Constraints:

// [time limit] 5000ms

// [input] array.array.int binaryMatrix

// 1 ≤ binaryMatrix.length ≤ 100
// 1 ≤ binaryMatrix[i].length ≤ 100
// [output] integer

// numOfIslands = 1;
// start left most corner of matrix
// check for 1
// if I find a 1, then check adjacent values - right, down

//queue of neighbors -- neighbor locations
//set of locations visited
//if the value is 1 then add only the 1's that are neighbors
//if that location hasn't been visited, then add neighbors to queue
//when the queue is empty, increment of number of islands
//get neighbor's coordinates -- left, right, bottom, top

function getNumberOfIslands(binaryMatrix) {
  // your code goes here
  let numOfIslands = 0;
  let totalCols = binaryMatrix[0].length;
  let totalRows = binaryMatrix.length;


  for (var col = 0; col < totalCols; col++) {
    for (var row = 0; row < totalRows; row++) {
      let queueOfNeighbors = [];
      let current = [row, col];
      let curVal = binaryMatrix[row][col];

        if (curVal === 1) {
          queueOfNeighbors.push(current);

          while (queueOfNeighbors.length > 0) {
            current = queueOfNeighbors.pop();
            let cur_row = current[0];
            let cur_col = current[1];
            let left;
            let bottom;
            let right;
            let top;

            if (cur_col-1 >= 0) {
              left = binaryMatrix[cur_row][cur_col-1];
            }

            if (cur_row + 1 < totalRows) {
              bottom = binaryMatrix[cur_row + 1][cur_col];
            }

            if (cur_col + 1 < totalCols) {
              right = binaryMatrix[cur_row][cur_col + 1];
            }

            if (cur_row - 1 >= 0) {
              top = binaryMatrix[cur_row - 1][cur_col];
            }

            if (left && left === 1) {
              queueOfNeighbors.push([cur_row, cur_col-1]);
              binaryMatrix[cur_row][cur_col-1] = -1;
            }
            if (bottom && bottom === 1) {
              queueOfNeighbors.push([cur_row + 1, cur_col]);
              binaryMatrix[cur_row + 1][cur_col] = -1;
            }
            if (right && right === 1) {
              queueOfNeighbors.push([cur_row, cur_col + 1]);
              binaryMatrix[cur_row][cur_col + 1] = -1;
            }
            if (top && top === 1) {
              queueOfNeighbors.push([cur_row - 1, cur_col]);
              binaryMatrix[cur_row - 1][cur_col] = -1;
            }
        }
        numOfIslands++;
      }
    }
  }
  console.log(binaryMatrix);
  return numOfIslands;
}

// Test Case #1
// Input:

// [[1,0,1,0],
//  [0,1,1,1],
//  [0,0,1,0]]
// Expected:
// 2
// Actual:

// 6

console.log(getNumberOfIslands([[1,0,1,0],[0,1,1,1],[0,0,1,0]]));
