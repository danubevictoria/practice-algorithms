// Write a function that takes as input two maps.
// Print the first difference between these two maps.
// The structure of a map can either be <String, String> or <String, Map>.

// A: {"a": {"b": "e"}}
// B: {"a": {"b": "d"}}
// "ed"

function firstDifference(firstMap, secondMap) {
  let result = "";
  let firstMapKeys = Object.keys(firstMap);
  let secondMapKeys = Object.keys(secondMap);
  let firstMapNumKeys = firstMapKeys.length;
  let secondMapNumKeys = secondMapKeys.length;
  let current = 0;

  if (firstMapNumKeys === secondMapNumKeys && firstMapNumKeys > 0) {

      while(firstMapKeys.length > 0) {

        let key = firstMapKeys[current];
        
        //checking the keys
        if (secondMapKeys.indexOf(key) === -1) {
          result += key + ' does not exist in secondMap';
          console.log(result);
          return;
        }

        //check the value
        //both has the same key
        let firstMapValue = firstMap[key];
        let secondMapValue = secondMap[key];
        // console.log("val: " + firstMapValue);

        if (typeof(firstMapValue) === 'string' && typeof(secondMapValue) === 'string') {

          if (firstMapValue !== secondMapValue) {
            result += firstMapValue + secondMapValue;
            console.log(result);
            return;
          }
        }

        //next level
        firstMapKeys = Object.keys(firstMapValue);
        secondMapKeys = Object.keys(secondMapValue);
        console.log(firstMapKeys);
        console.log(secondMapKeys);
      }
  }
}

let A = {"a": {"b": "d"}};
let B = {"a": {"b": "e"}};
firstDifference(A, B);
