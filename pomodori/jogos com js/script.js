let area = document.querySelector("area");

//let Element = createElement("div")
//Element.setAttribute("id","jogador")

let jogador = new Object;
let posX = 0;
let posY = 0;

jogador.positionx = 0;
jogador.positiony =0;
jogador.vel = 0;
jogador.aceleration = 0;

let RelVel  = 10;

window.addEventListener("keydown",e =>{
  if(e.keyCode === 37){
     posX += -1;
    console.log(posX);
  }else if(e.keyCode === 38){
     posY += 1;
    console.log(posY);
  }else if(e.keyCode === 39){
     posX += 1;
  }else if(e.keyCode === 40){
     posY += -1; 
  }
});

window.addEventListener("keyup",e=>{
    if(e.keyCode === 37){
        posX = 0 ;
       console.log(posX);
     }else if(e.keyCode === 38){
        posY = 0;
       console.log(posY);
     }else if(e.keyCode === 39){
        posX = 0;
     }else if(e.keyCode === 40){
        posY = 0; 
     }
})

function Moviment(){
    
}