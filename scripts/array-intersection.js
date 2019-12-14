'use strict'

const s = console.log
/*
    given two arrays, determine how many intersections there are
*/

Array.prototype.make = function(size=10, min=0, max=9) {
    let output = [];
    for(let x = 0; x < size; x++) {
        output.push( ~~(Math.random() * max + min))
    }

    return output;
}

function countIntersections() {
    let arr1 = [].make()
    s(`arr1 = ${arr1}`)

    let arr2 = [].make()
    s(`arr2 = ${arr2}`)

    let arr3 = [...arr1, ...arr2]

    s(`arr3 = ${arr3}`)

    let arr4 = Array.from(new Set(arr3))
    s(arr4)

    s(`arr3.length = ${arr3.length}`)
    s(`arr4.length = ${arr4.length}`)
    let intersections = arr3.length - arr4.length 
    s(`there are ${intersections} intersections between arr1 and arr2`)
}


//get an array of intersections between 2 arrays
function getIntersections(arr1, arr2) {
    let a = Array.from(new Set(arr1))
    let b = new Set(arr2)

    let output = [];

    a.forEach( e => { if(b.has(e)) output.push(e) } )

    return output;
}

//s( `intersections: ${getIntersections(arr1, arr2)} `)
//s( `unique intersections: ${getIntersections(arr1, arr2)} `)

//test performance of getIntersections

let tests = [];
//(let x = 7; x < 8; x++) is as big as my macbook can handle, thats comparing 2 arrays each having 10M ints
for(let x = 1; x < 6; x++){  //caution: put a big enough number in there and it will probably blow up
    let n = Math.pow(10, x);
    tests.push([ [].make(n, 0, n), [].make(n, 0, n) ])
}

//the above is just like this, but programatically...
// let tests = [
//     [ [].make(10, 0, 10), [].make(10, 0, 10) ],
//     [ [].make(100, 0, 100), [].make(100, 0, 100) ],
//     [ [].make(1000, 0, 1000), [].make(10, 0, 1000) ],
//     [ [].make(10000, 0, 10000), [].make(10000, 0, 10000) ]    
// ]

let test = arr => {
    arr.forEach( (e,i) => {

        s(`----- test ${i} start...`)
        let result = null;

        let tstart = new Date().getTime();
        result = getIntersections(e[0], e[1]);
        let tend = new Date().getTime();

        s(`...test ${i} end -----`)

        let duration = tend - tstart;

        s(`duration(ms): ${duration}\ttstart: ${tstart}\ttend: ${tend}`)
        s(`input1 size: ${e[0].length}\tinput2 size: ${e[1].length}`)
        s(`result size (intersections between the two inputs): ${result.length}`)
        
    })
}
test(tests)


/* 
    duration(ms): 4 tstart: 1576354601637   tend: 1576354601641
    input1 size: 10000      input2 size: 10000

    duration(ms): 32        tstart: 1576354558938   tend: 1576354558970
    input1 size: 100000     input2 size: 100000

    duration(ms): 397       tstart: 1576354478134   tend: 1576354478531
    input1 size: 1000000    input2 size: 1000000

    duration(ms): 6135      tstart: 1576354411638   tend: 1576354417773
    input1 size: 10000000   input2 size: 10000000


    conclusion: as inputs increase in size, time goes up exponentially
*/