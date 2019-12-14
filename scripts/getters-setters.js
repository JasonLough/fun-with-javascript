'use strict'

//util
Array.prototype.generate = function(count=5) {
    return new Array(count).fill().map( () => ~~(Math.random() * 10 + 1))
}

const s = console.log

/* ------------ end util stuff ------------ */

function Person(fname = 'not set', lname = 'not set') {
    [this.fname, this.lname] = [fname, lname];

    //get function foo() { s('test')  } //wont work
    
}

let p = new Person('Bob')

//s(p.fname, p.lname)

let Obj = {
    fname: '',
    lname: '',
    get fullName() { return `${Obj.fname} ${Obj.lname}`}, //now you can access it like a property instead of as a function
    set fullName(val) {
        [this.fname, this.lname] = val.split(' ');
    }
}

//[Obj.fname, Obj.lname] = ['Mike','Abc']; //Obj not defined
Obj.fullName = 'Jim Xyz'

// s(Obj.fullName)
// s(Obj.lname)

//so, whats the point? You can do type checking, validation, or 'do other stuff' when a property is set or retrieved

//when we set age, we want 1) to make sure active is true 2) to make sure an int was passed in
//we also want setting active to true to make sure age and hp arent 0

let Obj2 = {
    _age: 0, // _ indicating its some sort of internal (sorta private) variable
    _active: false,
    set setAge(n) {
        if(
            (n > 0) &&
            (typeof n === 'number')
        ) {
            this._active = true
            this._age = n
        } else {
            s(`Error in Obj2.setAge(n=${n}), not setting age`)
        }
    },
    set setActive(b) {
        let err = '';
        if(typeof b !== 'boolean') err = err + '\tb is not a boolean\n';
        if(this._age <= 0) err = err + '\tthis._age is <= 0';
        if(typeof this._age !== 'number') err = err + '\ttypeof this._age !== number';

        if(err.length){
            console.log(`Error(s) calling Obj2.setActive(b=${b}):\n ${err}`)
        } else {
            this._active = b
            console.log(`Obj2._active set to ${b}`)
        }
    },
    get getAge() {
        return this._age
    },
    get getActive() {
        return this._active
    }

}


s('1) getActive: ' + Obj2.getActive) //false, as it is still the default false value
Obj2.setActive = 1 //errors reported
s('2) getActive: ' + Obj2.getActive) //false still
Obj2.setAge = 'apple' //Error, as its not a number. active still false
Obj2.setActive = true //still false, because it checked typeof _age, which is 'string'
s('3) getActive: ' + Obj2.getActive) //false because age is stiill the default 0
Obj2.setAge = 55
s('getActive: ' + Obj2.getActive) //finally, true, because all the criteria are met so setAge set active to true



