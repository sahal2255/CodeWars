function solve(s){
let uppercase=0
let lowercase=0

for(let char of s){
    if (char===char.toUpperCase()){
        uppercase++
    }else{
        lowercase++
    }
}
   if(lowercase===uppercase|| lowercase>uppercase){
    return s.toLowerCase()
   }else{
    return s.toUpperCase()
   }
}
console.log(solve("coDe"));
console.log(solve("CODe"));
console.log(solve("coDE"));