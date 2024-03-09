// function powerofTwo(n){
//     const result=[]
//     for(let i=0;i<=n;i++){
//         result.push(Math.pow(2,i))
//     }
//     return result
// }
// console.log(powerofTwo(1));






function arithmetic(a, b, operator){
  switch (operator){
    case 'add':
        return a+b;
    case 'substract':
        return a-b;
    case 'multiply':
        return a*b
    case 'devide':
        return a/b
    default:
        return 'invalid input'
  }
  }
  console.log(arithmetic(5,2,'add'));
  console.log(arithmetic(5,2,'substract'));
  console.log(arithmetic(5,2,'multiply'));
  console.log(arithmetic(5,2,'devide'));