/*
 @1 iterar na string;
 @2 separar as palavras por espaço;
 @3 retornar elas revertidas EX: "hello world!" -> "world! hello";
*/

// let teste = "hello world!";
// let teste1 = " carlos roubou pão na casa de joão"
// function reverseWord(array){
//     let result = "";
//     let finaltext = [];
//     let textsplited = array.split(" ");
//     let leng = textsplited.length;
    

//      for(let i = 0 ; i <= textsplited.length;i++){
//         if (textsplited[leng - i] !== undefined) {
//             finaltext.push(textsplited[leng - i]);
//         };
//         console.log(textsplited[leng - i])
//      }
//     result = finaltext.join(" ")
//     console.log(result);

// }
// reverseWord(teste);
// reverseWord(teste1);

//===========ReverseWord Refactor ============================//
let teste = "hello world!";
let teste1 = " carlos roubou pão na casa de joão"

function reverseWord(string){
   let str =  string.split(" ").reverse();
    let result = []
        console.log(str);
        return result.toString();
}

reverseWord(teste);
reverseWord(teste1);