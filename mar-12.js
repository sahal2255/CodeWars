function sumStr(a,b){
    if(a==='')a='0';
    if(b==='')b='0';

    const num1=BigInt(a);
    const num2=BigInt(b);

    const sum=(num1+num2).toString()

    return sum
}
console.log(sumStr('4','5'));