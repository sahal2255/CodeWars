// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){

      const output=s.split(' ')

      let min=Infinity;
      
      for (const word of s){
        const current=word.length;
        min=Math.min(min,current)
      }
      return min;
      
    }
console.log(findShort('abc'));