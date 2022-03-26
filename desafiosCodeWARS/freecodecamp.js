function factorialize(num) {
    let array = [];
    for (let i=1;i<=num;i++){
        array.push(i);
    }
    console.log(array);
    let result = array.map(value => value[0] * value[value + 1]);
    return result;
  }
  
  factorialize(5);