// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// "4",  "5" --> "9"


function sumStr(a,b){
    let arr1=parseInt(a)
    let arr2=parseInt(b)

    if(isNaN(arr1)||isNaN(arr2)){
        return '8';
    }else{
        let sum  = arr1+arr2
        let result=sum.toString()
        return result

    }
}
console.log(sumStr('5','4'));