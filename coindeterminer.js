function CoinDeterminer(num) { 
    var coins = [11, 9, 7, 5, 1];
    var changeLeft = num;
    var counter = 0;
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
       var coinTotal = Math.floor(changeLeft / coin); // 22 = (250 / 11)
       if ((changeLeft / coinTotal) > 0) { // if (250 / 22) > 0 (i.e, if coin is not smaller than changeLeft)
        counter += coinTotal;
        changeLeft -= (coin * coinTotal); // changeLeft = 11 * 22;
        if (changeLeft === 0) {
          break;
        }
       } else {
         continue;
       }
    }
    return counter;
}
   
CoinDeterminer(10)