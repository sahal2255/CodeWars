function roundToNext5(n){
    if(n>=0||n<=0){
      return Math.ceil(n/5)*5
    }
    else{
        return Math.floor(n/5)*5
    }
  }
  console.log(roundToNext5(-1));