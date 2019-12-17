/*
  Something actually a little bit useful!

  Ever need to create an object with various 'stuff' just for testing purposes? And you dont want to make yet *another* test object?
  

*/

console.clear();
let s = console.log;

let mocker = {};

mocker.createString = (size = 10) => {
  let output = "";
  for (let x = 0; x < size; x++) {
    let n = 122 - 65;

    output += String.fromCharCode(~~(Math.random() * n) + 65);
  }
  //s('z'.charCodeAt(0)) //65 to 122, A to z
  return output;
};

mocker.createInt = function(min = 0, max = 100) {
  return ~~(Math.random() * (max - min) + min);
};

mocker.createArray = function(size = 10, type = "int") {
  return Array(size)
    .fill("")
    .map(e => (type === "int" ? this.createInt() : this.createString(5)));
};

mocker.rndm = function(type) {
  if (typeof type === "undefined") {
    let fns = [
      this.createString.bind(this),
      this.createInt.bind(this),
      this.createArray.bind(this)
    ];
    return fns[~~(Math.random() * fns.length)]();
  }

  let output = null;
  switch (type) {
    case "string":
      output = this.createString();
      break;
    case "int":
      output = this.createInt();
      break;
    case "array":
      output = this.createArray();
      break;
  }
  return output;
};

let Obj = {
  a: mocker.rndm(), //cound be an int, arr, or string
  b: mocker.rndm("int"), //an int between 0 and 100
  c: mocker.createInt(5, 9), //an int between 5 and 9
  d: mocker.rndm("string"), //string with default length (10)
  e: mocker.createString(20), //string with length of 20
  f: mocker.createArray(5, "string"), //array of 5 strings
  g: mocker.createArray(11, "int") //array of 11 ints
};

s(Obj);

//destructuring

const { d } = Obj;
s(Obj.d);
s(d);
