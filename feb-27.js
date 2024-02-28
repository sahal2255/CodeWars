function chromosomeCheck(sperm) {
    if(sperm==='X'){
        return 'Congratulations! You\'re going to have a daughter'
    }else if(sperm==='Y'){
        return 'Cogratulation! You\'re going to have a son'
    }
    else{
        return  'Congratulations! You\'re going to have a son.';

    }
  }
  console.log(chromosomeCheck('X'));
  console.log(chromosomeCheck('Y'))
  console.log(chromosomeCheck('Z'))