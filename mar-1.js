// var isSquare = function(n){
//     //   return false; // fix me
//     return Number.isInteger(Math.sqrt(n))

// }
// console.log(isSquare(16));






function addLength(str) {
    //start-here
    const words=str.split(' ')
    const result=[]
    // const two =one[0].length
    // const three=one[1].length
    // const four=
    // console.log(two);
    // console.log(three);
    for (let word of words){
        const length=word.length
        result.push(`${word} ${length}`)
    }
    return result
    
}
console.log(addLength("apple ban"));



function combat(health, damage) {
    // Write your code here
    let result = health - damage 
    if (result<0){
      result=0
    }
    return result
  }
  console.log(combat(100,30))