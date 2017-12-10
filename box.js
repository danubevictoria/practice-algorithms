// Copyright 2016-2017 Karat, Inc.  Please do not distribute or republish.

var _ = require('underscore');

// Write a function that takes two user’s browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

// Sample output:

// (user0, user2):
//    /four.html
//    /six.html
//    /seven.html

// (user1, user2):
//    /two.html
//    /three.html
//    /four.html
//    /six.html

// (user0, user3):
//    None

// (user1, user3):
//    /three.html


var user0 = [ "/nine.html", "/four.html", "/six.html", "/seven.html", "/one.html" ];
var user1 = [ "/one.html", "/two.html", "/three.html", "/four.html", "/six.html" ];
var user2 = [ "/nine.html", "/two.html", "/three.html", "/four.html", "/six.html", "/seven.html"];
var user3 = [ "/three.html", "/eight.html" ];

//Input: arrays of strings - browsing history
//Output: array of strings - URLs both visited, consecutive
//user0 = [ "/nine.html", "/four.html", "/six.html", "/seven.html", "/one.html" ];
//user2 = [ "/nine.html", "/two.html", "/three.html", "/four.html", "/six.html", "/seven.html"];
//Output = [ ]
//pointer to second array that starts at the index where it exists
//Iterate through first array
//Check if second array has current value
//Put it in possible output

function contiguousSequences(firstUser, secondUser) {
  let output = []; //["four.html" ]
  let secondUserUrl = 0;

  for (let i = 0; i < firstUser.length; i++) {
    let firstUserValue = firstUser[i];
    let secondUserValue = secondUser[secondUserUrl];
    console.log(firstUserValue);
    console.log(secondUserValue);

    if (output.length > 0 && firstUserValue === secondUserValue) {
      output.push(firstUserValue);
      secondUserUrl++;
    } else {
      output.shift(1); // check this
      if (secondUser.indexOf(firstUserValue) !== -1) {
        output.push(firstUserValue);
        secondUserUrl = secondUser.indexOf(firstUserValue); //0
      }
    }
  }

  return output;
}

console.log(contiguousSequences(user0, user2));







// "count, hostname"
var counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org" ];



// Your function here
// Input: array of strings comma-delimited count, host
// Host - delimited by .
// Output: array of counts and domains
// 900 google.com
// 960 com
// 60 mail.yahoo.com
// 60 yahoo.com
// Parse out the counts - split by comma
// Parse out the hosts - results array - substring indexOf
// Possible hosts

function domainCounts(counts) {
  let output = {}; //{ google.com: 900, com: 900}

  for (let i = 0; i < counts.length; i++) {
    let splitCounts = counts[i].split(','); // [ "60", "mail.yahoo.com"]
    let count = splitCounts[0];
    let host = splitCounts[1];

    if (output[host]) {
      output[host] += parseInt(count);
    } else {
      output[host] = parseInt(count);
    }

    let periodIndex = host.indexOf('.'); //4
    let nextHost = host;

    while (periodIndex !== -1) {
      //com
      nextHost = nextHost.substring(periodIndex + 1, nextHost.length); //5,
      // console.log(nextHost);
      if (output[nextHost]) {
        output[nextHost] += parseInt(count);
        // console.log(output);
      } else {
        output[nextHost] = parseInt(count); //
      }
      periodIndex = nextHost.indexOf('.');
      // console.log(periodIndex);
    }
  }

  return output;
}

// console.log(domainCounts(counts));
