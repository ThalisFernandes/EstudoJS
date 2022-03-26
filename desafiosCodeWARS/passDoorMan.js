/*
//1 primeiro sera dado uma palavra com uma letra repitida;
//2 devemos pegar o numero dessa palavra no alfabeto;
// devemos multiplicar o numero dessa palavra por 3 e teremos o resultado;
*/

let word =  "apple";

function passDoorMan(word){
    let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    for(let i = 0; i < word.length -1; i++){
        for(let y = i + 1; y < word.length; i ++){
            if(word[i] === word[y]){
                
            }
        }
    }
}

passDoorMan("letter");
passDoorMan("additional");
