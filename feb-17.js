// function findNeedle(haystack) {
//     // your code here
//     const result  = haystack.indexOf('needle')
//     const result1 = haystack[6]
//   //   return [result,result1]
//     return `found the needle at position ${result}`
  
//   }
//   const main = findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
//   console.log(main)



function highAndLow(numbers){
    const numArr = numbers.split(' ').map(Number)
    const min  = Math.min(...numArr)
    const max = Math.max(...numArr)

    return `${max} ${min}`
}
const result = highAndLow('1 2 3 4 5')
console.log(result);