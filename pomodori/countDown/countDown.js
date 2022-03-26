// criar uma função de contagem de segundos até 60; v 
//zerar o valor de segundo e diminuir  o valor de minutos em -1; v 
//alterar o valor de minutos na tela;
//voltar a contar os segundos;
//apos finalizer exibir uma mensagem na tela;
// reproduzir um som junto com a imagem;
// mostar o botão para começar denovo;


let minutes = 20;
let seconds = 60;
let isActive = true;

function MinutesJsCount(){
     if(isActive){
         for(var i = 0; i <=  seconds ; i++ ){            
            if(i === 60){
                seconds = 0;
                isActive = false;
                console.log("valor atual de seconds é " +" "+ seconds + "e o isActive é "+" "+ isActive)
                MinutesCountDown();
            }
         };
      } else {
          console.log("entrou")
          if(minutes === 0){
              console.log("minutes"+minutes);
              minutes = 20;
          }else if(seconds === 0){
              seconds = 60;
              isActive = true
              MinutesJsCount();
              console.log("seconds"+ seconds);
          }
     }
}
MinutesJsCount();

function MinutesCountDown(){
     if(seconds <= 0){

         minutes = minutes - 1;
         console.log("minutes :"+ " " + minutes);
         MinutesJsCount();
     }else if (seconds === 0 && minutes === 0){
         return alert("fim do processo");
     }
}