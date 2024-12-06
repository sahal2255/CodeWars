 const reverseSeq = n => {
    const array=[]
    for(let i=n;i>0;i--){
      array.push(i)
    }
    return array
  };

  console.log(reverseSeq(5))

module.exports =reverseSeq
