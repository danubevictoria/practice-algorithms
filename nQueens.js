

// Javascript

/* A utility function to check if a queen can
   be placed on board[row][col]. Note that this
   function is called when "col" queens are already
   placeed in columns from 0 to col -1. So we need
   to check only left side for attacking queens */
function isSafe(board, row, col){
}

function solveNQUtil(board, col) {
}


/* This function solves the N Queen problem using
       Backtracking.  It mainly uses  solveNQUtil() to
       solve the problem. It returns false if queens
       cannot be placed, otherwise return true and
       prints placement of queens in the form of 1s.
       Please note that there may be more than one
       solutions, this function prints one of the
       feasible solutions.*/
function solveNQ(){

  let board = [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]]
  if (solveNQUtil(board, 0) == false) {
    return false;
  }
  for (let row = 0; row < 4; row ++) {
    console.log(board[row]);
  }
  return true;
}

 // driver program to test above function
solveNQ()
