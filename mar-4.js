// function roundToNext5(n){
//     if(n>=0||n<=0){
//       return Math.ceil(n/5)*5
//     }
//     else{
//         return Math.floor(n/5)*5
//     }
//   }
//   console.log(roundToNext5(-1));





// function sumArray(array){
//     if(!array || !Array.isArray(array) || array.length <= 1){
//         return 0
//         }
//     array.sort(function(a,b){
//         return a-b
//     })
//     array.shift()
//     array.pop()

//     return array.reduce(function(acc,val){
//         return acc+val;
//     },0)
// }
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([null]))


function rec(name){
    if(name===''){
        return ''
    }
    else{
        return rec(name.substr(1))+name.charAt(0) 
    }
}
console.log(rec('sahal'));