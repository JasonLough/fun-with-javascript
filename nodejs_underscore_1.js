/*
  Creates an array[10], 
  populates it with random integers between 1000 and 5000,
  foe each of those numbers a function is called and pased that number,
  that function calls setTimeout(),
  which calls console.log() in that number of ms
*/

var _ = require('underscore');

var q = _.map(_.range(10), () => _.random(1000,5000) );
//console.log(q);

var timed = e => {
	setTimeout( () => console.log(e), e);
}

_.each(q, timed);






