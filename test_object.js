arrSrc = ['apples', 'oranges', 'pears', 'plums', 'strawberries', 'bananas', 'grapes'] //elements used to populate arr
arr = []
obj = {}

say = function(text){console.log(text)}

populateArr = () => { // makes an array with a random number of fruit elements in it: ["plums", "plums", "plums", "grapes"]
    arr = [] //empty it    
    for(let numElements = 0; numElements < ~~(Math.random()*6+1); numElements++) { // For a random number of elements...
        for(let dupes = 0; dupes < ~~(Math.random()*5); dupes++) { // ...make 1 to 5 copies...
            arr.push(arrSrc[~~(Math.random() * arrSrc.length)]) // ...of a random fruit from arrSrc onto arr.
        }
    }
    console.log(arr)
}

populateArr()

for(fruit of arr){ 
    obj[fruit] = fruit in obj === false ? 1 : obj[fruit]+=1 //if this fruit is not in obj, create key and set val to 1
}

say(obj) // {strawberries: 1, oranges: 2, bananas: 4, pears: 1, apples: 1, ...}
