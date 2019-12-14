'use strict'

const s = console.log

/*
create one function on the Array prototype that:
    1) filters elements in the array by a passed in function, classifying each element as a match or miss,
    2) sorts the matches and misses so theyre in order
    3) returns an object of matches and misses containing only unique values
*/

Array.prototype.filterNsortNuniq = function(fn) { //fn is the filter function you pass in
    let matches = []
    let misses = []
       
    for(let x = 0; x < this.length; x++) {
        if(fn(this[x])) {
            matches.push(this[x])
        } else {
            misses.push(this[x])
        }

    }

    matches = Array.from(new Set(matches.sort( (a,b) => a - b )))
    misses = Array.from(new Set(misses.sort( (a,b) => a - b )))
    
    return {matches, misses}
}


let arr = Array(10).fill(1).map( () => ~~(Math.random() * 10 + 1) ) //just create a random array of 10 ints

s(arr) //show the random array

s(arr.filterNsortNuniq( e => e < 5)) //we want all the elements that are < 5 in matches, and all others in misses

s('matches: ' + arr.filterNsortNuniq( e => e < 5).matches) //just show the matches

/*
example output:

[ 1, 3, 10, 5, 8, 8, 10, 9, 4, 10 ]
{ matches: [ 1, 3, 4 ], misses: [ 5, 8, 9, 10 ] }

*/