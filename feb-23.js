// function booleanToString(b){
//     //your code here
//     return b ? 'true':'false'
//   }
//   console.log(booleanToString(true))



// function move(position,roll){
//     return position+roll*2
// }
// console.log(move(3,6));




function smallEnough(a, limit){
    // 
    for (let i=0;i<=a.length;i++){
        if(a[i]>limit){
            return false
        }
    }return true
  }
  console.log(smallEnough([10, 15, 18, 20], 20));