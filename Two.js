function peopleDrink(age){
    if(age<14){
        return 'drink toddy'
    }
    if(age<17){
        return 'drink coke'
    }
    if(age<18){
        return 'drink beer'
    }
    else{
        return 'drink whisky'
    }
}
console.log(peopleDrink(13))