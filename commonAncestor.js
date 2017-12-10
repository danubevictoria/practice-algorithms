/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   9

    Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample output (pseudocode):
[
  [1, 2, 4], // Individuals with zero parents
  [5, 7, 8, 9] // Individuals with exactly one parent
]


Write a function that, for two given individuals in our dataset, returns true if and only if they share at least one ancestor.

Sample input and output:
parentChildPairs, 3, 8 => false
parentChildPairs, 5, 8 => true
parentChildPairs, 6, 8 => true

Input: arr, firstTarget, secondTarget
Output: boolean if at least one ancestor

3: [1, 3], [2, 3]
8: [4, 8]

5: [4, 5]
8: [4, 8]

6: [3, 6], [5, 6]
3: [1, 3], [2, 3]
5: [4, 5]

1: null
2: null
then return false

8: [4, 8]

look at arrays where targets are second value

*/
function oneCommonAncestor(parentChildPairs, firstTarget, secondTarget) {
  let firstAncestors = parseParents(getAncestors(parentChildPairs, firstTarget)); // [1, 3], [2, 3]
  let secondAncestors = parseParents(getAncestors(parentChildPairs, secondTarget)); //  [4, 8]

  for (let i = 0; i < firstAncestors.length; i++) {
    let ancestor = firstAncestors[i];
    if (secondAncestors.indexOf(ancestor) !== -1) {
      return true;
    }
  }

  for (let j = firstAncestors.length; j < secondAncestors.length; j++) {
    let value = secondAncestors[j];
    if (firstAncestors.indexOf(value) !== -1) {
      return true;
    }
  }

  return false;
};

function getAncestors(parentChildPairs, target) {
  let ancestors = [];

  for (let i = 0; i < parentChildPairs.length; i++) {
    let pair = parentChildPairs[i];
    let firstValue = pair[0];
    let secondValue = pair[1];

    if (secondValue === target) {
      ancestors.push(pair);
    }
  }

  for (let j = 0; j < ancestors.length; j++) {
    let pair = ancestors[j];
    let firstValue = pair[0]; //3
    // console.log(firstValue);
    ancestors = ancestors.concat(getAncestors(parentChildPairs, firstValue));
  }

  return ancestors;
};

function parseParents(parentChildPairs) {
  let parents = [];

  for (let i = 0; i < parentChildPairs.length; i++) {
    let pair = parentChildPairs[i];
    let parent = pair[0];
    parents.push(parent);
  }

  return parents;
};

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
];

// console.log(getAncestors(parentChildPairs, 3));
// console.log(getAncestors(parentChildPairs, 8));
console.log(getAncestors(parentChildPairs, 6));
console.log(parseParents(getAncestors(parentChildPairs, 6)));
// console.log(getAncestors(parentChildPairs, 3));
// console.log(getAncestors(parentChildPairs, 5));
console.log(oneCommonAncestor(parentChildPairs, 3, 8));
console.log(oneCommonAncestor(parentChildPairs, 5, 8));
console.log(oneCommonAncestor(parentChildPairs, 6, 8));

//Input: array of 2 integer arrays
//Output: array of 2 arrays:
//1) no parents
//2) exactly one parent

//no parent: doesn't appear as the second value in any array
//exactly one parent: appears once as the second value in any array
//seenAsFirst: 1: 1, 2: 1, 3: 1, 5: 2, 4: 2, 8: 1
//seenAsSecond: 3: 2, 6: 2, 7: 1, 5: 1, 8: 1, 9: 1

//no parent: for each key, does it appear in seenAsSecond
//if not, add key to result

//exactly one parent: for each key, is value 1, if so put into result

//T: O(N)
//S: O(N)
function zeroParentsAndOneParent(parentChildPairs) {
  let noParents = [];
  let oneParents = [];
  let result = [];

  let seenAsFirst = {}; //1:
  let seenAsSecond = {};

  for (let i = 0; i < parentChildPairs.length; i++) {
    let pair = parentChildPairs[i]; //[1, 3]
    let firstValue = pair[0]; //1
    let secondValue = pair[1]; //3

    if (seenAsFirst[firstValue]) {
      seenAsFirst[firstValue] += 1;
    } else {
      seenAsFirst[firstValue] = 1;
    }

    if (seenAsSecond[secondValue]) {
      seenAsSecond[secondValue] += 1;
    } else {
      seenAsSecond[secondValue] = 1;
    }
  }

  let seenAsSecondKeys = Object.keys(seenAsSecond);
  // console.log(seenAsSecondKeys);

  for (let key in seenAsFirst) {
    // console.log(key);
    if (seenAsSecondKeys.indexOf(key) === -1) {
      noParents.push(key);
    }
  }

  for (let key in seenAsSecond) {
    let value = seenAsSecond[key];

    if (value === 1) {
      oneParents.push(key);
    }
  }

  result.push(noParents);
  result.push(oneParents);

  return result;
}

var parentChildPairs2 = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
];

// console.log(zeroParentsAndOneParent(parentChildPairs2));
