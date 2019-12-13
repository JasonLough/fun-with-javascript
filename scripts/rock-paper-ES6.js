tokens = {
    r : 'p',  //rock beats paper...
    p : 's',
    s : 'r'
}

//dont do this...
var rps = (p1,p2) => p2 === tokens[p1] ? 'p2' : p1 === p2 ? 'tie' : 'p1'


//test all the things!!!
var test = plays => {

    plays.forEach( e => {
        console.log(`e.p1: ${e.p1} 
                     e.p2: ${e.p2} 
                     winner: ${rps(e.p1,e.p2)} 
                     expected: ${e.expected}
                     pass: ${e.expected === rps(e.p1,e.p2)}`
                     .replace(/\n/g,'')
                   )                     
    })

}

test([
    {p1: 'r', p2: 'p', expected: 'p2'},
    {p1: 'p', p2: 'r', expected: 'p1'},
    {p1: 's', p2: 'p', expected: 'p1'},
    {p1: 'r', p2: 's', expected: 'p1'},
    {p1: 's', p2: 'r', expected: 'p2'},
    {p1: 's', p2: 's', expected: 'tie'}
])




