'use strict'

//util
Array.prototype.generate = function(count) {
    return new Array(count).fill().map( () => ~~(Math.random() * 10 + 1))
}

const s = console.log

/*
    currying is a weird feature where you can do stuff like this:
    a(2)('apples')()(44)
    
    Each function returns a function, which is then called. The above would be like:
        a(2)       // which gives back a function that we call with...
        ('apples') // which gives back a function that we call with...
        ()         // which gives back a function that we call with...
        (44)       // which gives some result
    
    Why do this, and whats so weird about it?

    Say we want to store one of the results and use it with different args:
        let p = a(2)('apples')
    //then use it later...
        let x = p()(31)
        let y = p()(94)
    //were reusing the a(2)('apples') part of the curry, and then passing different args to it
    //we could also do:
        let k = a(8)('bananas')()
        k(11)
        k(31)
    //if you realize that k(11) and k(31) are both using the 'saved' function from let k = a(8)('bananas')(), then you get it
*/

/*
    read as: getVolume returns function length() which returns function width() which returns function height() which multiplies all the variables together 
*/
let getVolume = 
    length =>
    width =>
    height => length * width * height

let a = getVolume(10)
//a is now a function where length was saved (via closure) as 10
//now you can get a volume by only specifying width and height

s('a:')

s(a(5)(5)) 
s(a(3)(2))

s('b:')

let b = (a(2)) //now b is a fn that only needs height
s(b(8))
s(b(1))


