let canvas = document.querySelector("canvas");
let context = canvas.getContext('2d');
context.fillStyle = "#000";



const t = [
    [0,0,0],
    [1,1,1],
    [0,1,0]
];

const square = [
    [0,0,0],
    [1,1,0],
    [1,1,0]
];

const zpiece = [
    [0,0,0],
    [1,1,0],
    [0,1,1]
];

const  lpiece = [
    [1,0,0],
    [1,0,0],
    [1,1,0]
];

const longPiece = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,1,1,1,1]
];
const playerPosition = {
    player:"",
    pos: {
        x: 5,
        y: 5
    }
}

let pieceNumber = 0;

function DrawPieces (piece,PieceNumber) {
    piece.forEach((x,value)=>{
        x.forEach((y,index)=>{
            if(y !== 0){
                if(pieceNumber === 1){

                    context.fillStyle = "#FF4500";

                } else if (pieceNumber === 2) {

                    context.fillStyle = "#A9A9A9";

                } else if (pieceNumber === 3) {

                    context.fillStyle = "#00BFFF";

                } else if (pieceNumber === 4) {

                    context.fillStyle = "#7CFC00";

                } else if (pieceNumber === 5) {
                    
                    context.fillStyle = "#D2691E";
                }
                
                context.fillRect(value,index,1,1);
            }
        })
    })
};

function loadScreen () {
    context.scale(20,20);
    context.fillRect(0,0,canvas.width,canvas.height);
    setInterval(30000,SelectARandomPiece());

};

function moveFuckingPiece (offset,piece) {
       
};

function DropFuckingPieces () {

};

function SelectARandomPiece () {
    let number = parseInt(Math.random()*6);

    if (number === 1) {

        pieceNumber = 1;
        DrawPieces(t, pieceNumber);

    } else if (number === 2) {
        
        pieceNumber = 2;
        DrawPieces(square, pieceNumber);

    } else if (number === 3) {

        pieceNumber = 3;
        DrawPieces(zpiece, pieceNumber);

    } else if (number === 4) {

        pieceNumber = 4;
        DrawPieces(lpiece, pieceNumber);

    } else if (number === 5) {
        
        pieceNumber = 5;
        DrawPieces(longPiece, pieceNumber);

    } else {

        SelectARandomPiece();
    };
};

window.addEventListener("keydown",(e)=>{

    if (e.keyCode === 37) {

        console.log("left");
        
    } else if (e.keyCode === 38) {
        
        console.log("up");
        
    } else if (e.keyCode === 39) {

        console.log("right");
        
    } else if (e.keyCode === 40) {

        console.log("down");

    };
})

window.addEventListener("load",()=>{
    loadScreen();
});