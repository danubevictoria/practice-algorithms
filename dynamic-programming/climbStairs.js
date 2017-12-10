// Time: O(3^N)
function climbStairs(input) {

  function countWays(n) {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    }

    return countWays(n-1) + countWays(n-2) + countWays(n-3);
  }
  return countWays(input);
}

// Time: O(N)
function climbStairsMemo(input) {
  let cache = {};

  function countWays(n) {
    if (cache[n] !== undefined) {
        return cache[n];
    } else if (n === 0) {
      return 1;
    } else if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    }

    cache[n] = countWays(n-1) + countWays(n-2) + countWays(n-3);
    return cache[n];
  }
  return countWays(input);
}

// Tabulation Time: O(N * M) where N is size of results and M is number of jumps
function climbStairsTab(n, jumps) {
  let result = new Array(n+1);
  result.fill(0);

  result[0] = 1;

  for (let i = 0; i < jumps.length; i++) {
    for (let j = jumps[i]; j < result.length; j++) {
      let sum = 0;
      for (let k = 0; k <= i; k++) {
        sum += result[j - jumps[k]];
      }
      result[j] = sum;
    }
  }

  return result[n];
}
