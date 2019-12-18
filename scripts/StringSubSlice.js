"use strict";
const s = console.log;

/*
  given a string and a chunk size, cut the string into an array of elements, each of chunkSize length
  ex:
    ('abcdefghijkl', 4) => ['abcd,' 'efgh', 'ijkl']
*/

//n is the length of the segment we want the string cut into
//returns an array of strings of length n
String.prototype.subSlice = function(n) {
  let output = [];
  let str = this;

  while (str.length > 0) {
    output.push(str.substring(0, n));
    str = str.slice(n, str.length);
  }

  return output;
};

//we need a function to create strings of random length
let createRandomString = size => {
  return new Array(size)
    .fill(1)
    .map(e => String.fromCharCode(~~(Math.random() * (122 - 97) + 97)))
    .join("");
};

//we need a way to test everything, so create some test strings
const thisManyTests = 5;
let tests = new Array(thisManyTests)
  .fill(1)
  .map(() => createRandomString(~~(Math.random() * 30) + 10));

//finally, test subSlice with our test strings we just made
let test = () => {
  tests.forEach(e => {
    let chunkSize = ~~(Math.random() * 3 + 7); //3 to 10

    s(`---start---`);
    s(`\tchunkSize:${chunkSize}`);
    s(`\tstring: ${e}`);
    s(`\toutput:`);
    s(e.subSlice(chunkSize)); //cut string into random  chunks
  });
};
test();
