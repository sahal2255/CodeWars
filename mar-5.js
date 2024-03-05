// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.




// function testEven(n){
//     if(n%2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(testEven(5));







// Write a program that finds the summation of every 
// number from 1 to num. The number will always be a 
// positive integer greater than 0. Your function only 
// needs to return the result, what is shown between 
// parentheses in the example below is how you reach that 
// result and it's not part of it, see the sample tests.





// function sum(n){
//     let count=0
//     for (i=1;i<=n;i++){
//         count+=i
//     }
//     return count
// }
// console.log(sum(2));


function summation(n){
    return (n*(n+1))/2
}
console.log(summation(2));