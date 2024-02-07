function peopleDrink(age){
    if(age<14){
        return 'drink toddy'
    }
    if(age<=17){
        return 'drink coke'
    }
    if(age<=20){
        return 'drink beer'
    }
    if(age=>20){
        return 'drink whisky'
    }
    else{
        return 'drink whisky'
    }
}
console.log(peopleDrink(13))