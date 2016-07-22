'use strict'


//memoization : caching results in a lookup table
//run this in node and compare the duration when caching is used vs not used.
//typical results :
//
//	no caching, 1000 calls to foo, range of 1-10 
//	7.300s
//
//  caching, 1000 calls to foo, range of 1-10
//  0.081s

var results = [];
var caching = true; //toggle this to compare caching vs non caching duration
var starttime = 0;
var duration = 0;


//foo saves the results of a calculation in results[] if caching is true
//before calculating a value, is checks if it already has the answer
function foo(p) {
	
	if(caching) {

		var a = results.filter( (e) => { 
			// console.log('vvv');
			// console.log( 'e[input] = %s', e['input'] );
			// console.log( e );
			// console.log( 'p = %s', p);
			// console.log('^^^');
			return e['input'] === p; //if this is true, then the input p matches a cached result in results[]
		} );

		// console.log('a = ');
		// console.log(a);
		
		if(a.length) {
			//console.log('prev result found. returning { input : %s, output : %s }', a[0]['input'], a[0]['output']);
			return a[0]['input'];
		}

		var result = p * 2;
		//simulate a long computation time
		computationally_intense();
		
		//console.log('no prior result found. pushing { input : %s, output : %s }', p, result);
		results.push({'input' : p, 'output' : result});
		
		return result;

	} else {

		computationally_intense();
		return p * 2;
		
	}


}

//takes about 1s on my machine. Needed a blocking but time consuming function. Feel free to use your own.
let computationally_intense = function() {
	for(let x = 0; x < 100000; x++) {
		~~(Math.random() * Math.sin(43.1343) / Math.atan(324.234235));
	}
}


//testing

let calls = 1000; //how many calls to foo
let lower = 0; //lower bound on value passed to foo
let upper = 10; //upper bound on value passed to foo

starttime = new Date().getTime();

for(let count = 0; count < calls; count++) {
	foo( ~~(Math.random() * upper + lower) );
}

duration = new Date().getTime() - starttime;

console.log('duration : %s', duration);
