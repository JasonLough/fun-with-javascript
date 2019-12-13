/*
	Youll need these : 
		<script src="https://d3js.org/d3.v4.min.js"></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'></script>
	This is just expeimenting with ES6, underscore, and d3.js
	It makes a bar graph of random numbers, sorts them, charts them, assigns color based on above or below average.
*/

'use strict';

let data = (() => {
	let d = [];
	_.each( _.range(10), () => d.push( ~~( Math.random() * 100 ) ) );
	return d;
})();

data.sort( (a, b) => a > b);

let avg = data.reduce( (initial, current) => initial + current ) / data.length;
console.log(avg); 

let color = ['red', 'green'];

let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")   //nitiate the data join by defining the selection to which we will join data
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .style('background-color', function(d) { return d > avg ? color[0] : color[1]})
    .text(function(d) { return d; });
