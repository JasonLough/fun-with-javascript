'use strict'

/*

https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript

Your goal is to write an Event constructor function, which can be used to make event objects.

An event object should work like this:

it has a .subscribe() method, which takes a function and stores it as its handler
it has an .unsubscribe() method, which takes a function and removes it from its handlers
it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
As this is an elementary example of events, there are some simplifications:

all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
you should not worry about the order of handlers' execution
the handlers will not attempt to modify an event object (e.g. add or remove handlers)
the context of handlers' execution is not important
each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again

*/

//Expected: '[1, \'foo\', true]', instead got: '[[1, \'foo\', true]]'
const s = console.log

function Event() {

    this.handlers = [];

    this.subscribe = function (fn) {
        
        if(! this.handlers.includes(fn))
            this.handlers.push(fn)
    }
    this.unsubscribe = function (fn) {
        
        if( this.handlers.includes(fn)) {
            this.handlers.splice(this.handlers.indexOf(fn),1)
        }
    }
    this.emit = function(...args) {
        
        this.handlers.forEach( e => {
            e.apply(null,args)
        })
    }

}


let func1 = () => { s('called func1()') }
let func2 = a => { s(`called func2(${a})`)}
let func3 = (a,b) => { s(`called func3(${a},${b})`)}
let func4= (a) => { s(`called func4(${a})`)}

let e = new Event()


function test() {
    s('------ START -------')
    
    e.subscribe(func3)
    e.emit([1, 'foo', true])



}
test()
