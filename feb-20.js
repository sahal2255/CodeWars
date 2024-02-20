// function tof(num){
   
//     return num.toString()
// }
// console.log(tof(123));




function countSmileys(arr){
    const pattern = /^[:;][-~]?[)D]$/
    let count =0
    for (let face of arr){
        if (pattern.test(face)){
            count++;
        }
    }
    return count
}
console.log(countSmileys([':)', ';(', ';}', ':-D'])); 