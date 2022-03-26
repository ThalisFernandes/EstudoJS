let teste = "hello world!";
let teste1 = " carlos roubou pão na casa de joão"
function reverseWord(array){
   let result = array.split(" ").reverse().join(" ");
   return result
}
reverseWord(teste);
reverseWord(teste1);