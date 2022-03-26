//função recursiva para criar um array countdown;

// let array = [];
// function countdown(timer){  
   
//    if (timer > 0) {
//        array.push(timer);
//        timer = timer - 1;
//        countdown(timer); 
//    } else if (timer != 0 || timer === -1 || timer < 0) {
//         return array;
//    }
//    return array;
// }

//função recursiva 

const sum = (...numbs) => {
   let total = 0;
    
    for(v in numbs){
        console.log(total);
        total = total + numbs[v];
    }
    return total;
  }
