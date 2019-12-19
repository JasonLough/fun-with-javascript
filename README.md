### If youre into javascript, you just found a treasure room

This is a collection of things I've written because I thought they conveyed something interesting about JavaScript. I wrote each of these to be (hopefully) easy to understand while showing a specific aspect (often a weird one) of JavaScript.

---

### My setup

I use [VSCode](https://code.visualstudio.com/), with a terminal open, using nodemon to automatically run on save.

`npx nodemon myscript.js`

This allows me to quickly write -> evaluate -> repeat.

![Screenshot](https://github.com/JasonLough/fun-with-javascript/blob/master/screenshot.png?raw=true "Screenshot")

---

### My biggest piece of advice

Keep a developer log for yourself. A google sheet works nicely. Make it similar to this:

| Date      |          Topic          |                                                               Notes |
| --------- | :---------------------: | ------------------------------------------------------------------: |
| 11/7/2019 |     curry functions     | weird technique that abuses closures to make customizable functions |
| 11/8/2019 | recursion with currying |                still wrapping my head around how this can be useful |

---

### Index of /scripts

note: (OLD) = stuff I wrote > 3 yrs ago

- array-intersection.js - get the intersection of 2 arrays, then performance test the function with huge arrays

- curry.js - if a()()() scares you, go here

- dynamic-templates-in-pure-javascript.htm - (OLD) using script type="text/template" you can write functions to make your own template. No libraries required.

- ES6-underscore-D3JS - (OLD) makes a bar graph of random numbers, sorts them, charts them, assigns color based on above or below average

- filterNsortNuniq.js - array prototype function that filters, then sorts, then returns matches/misses between 2 arrays

- getters-setters.js - fun with getters and setters

- memoization.js - (OLD) caching function results in a lookup table

- mocker.js - create random objects with random elements for testing / learning purposes.

- noitatoN-hsiloP-esreveR.php - (OLD) Reverse Polish Notation, aka "How a calculator could work". Did this one for an interview test a long time ago, I should remake it in JS.

- react-widget.jsx - Showcasing a lot of react features in one component. Video to follow along with in comments.

- rock-paper-ES6.js - (OLD) stupid simple rock paper scissor simulator with custom test function

- sigmoid.htm - (OLD) visualize a sigmoid function with D3.js

- simple-pub-sub-event-handler.js - collect events in an array, trigger them on event

- StringSubSlice.js - take a string and a chunk size, return an array of chunks of that size from that string. String.prototype.subSlice().

- test-object.js - (OLD) makes an array with a random number of fruit elements in it

---

### My favorite youtube videos on JavaScript

[Learn the Event Loop, watch this one if you watch no others](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=4s)

[Fun Fun Function, amazing lessons](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)

[Wes Bos, more amazing tutorials](https://www.youtube.com/channel/UCoebwHSTvwalADTJhps0emA)
