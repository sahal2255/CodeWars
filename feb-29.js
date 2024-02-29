// ` "saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer 
// will buy, different numbers have different prices (refer to the following table), return how much money will 
// the customer spend to buy that number of hotdogs."`





function saleHotdogs(n){
    if(n<5){
        return n*100
      }
      if( n >=5 && n<10){
        return n*95
      }
      else if(n>=10){
        return n*90
      }
    }
    console.log(saleHotdogs(2))




// `"Finish the solution so that it sorts the passed in array of numbers.
//  If the function passes in an empty array or null/nil value then it should return an empty array."`



 function solution(nums){
    if(!nums || nums.length===0){
        return []
    }else{
        return nums.sort((a,b)=>a-b)
    }
 }
//  console.log(solution([1, 2, 10, 50, 5]));

const input=[1, 2, 10, 50, 5]
const result=solution(input);
console.log(result);