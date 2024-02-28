var s1=["aabbcdeeffghg"]
var s2=["ihhgxyzzz"]
// function longest(s1, s2) {
// // your code
// const main=s1.concat(s2)
// return main 
// // return s1-s2


// }
// console.log(longest());



// const result=s1.concat(s2)
// console.log(result);

// console.log(`${s1}${s2}`);
// const result=`${s1}${s2}`
// console.log(result);combined

function longest(s1,s2){
    const combined= `${s1}${s2}`
    const one=[...new Set(combined)]
    const sorted = one.sort().join('')

   
    return sorted
}
console.log(longest(s1,s2));
