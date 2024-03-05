function rec(num){
    if(num===1){
        return 1
    }
    else{
        return num*rec(num-1)
    }
}
console.log(rec(5));