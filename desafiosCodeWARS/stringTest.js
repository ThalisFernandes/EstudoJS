function testString(string, finalvalue){
    if(string.length > 0){
        if(finalvalue.length > 0){
            if(string.length === 5){
                let y = 1;

                for(var i = 0; i < finalvalue.length; i++){    
                    console.log(i);
                    if(string[-i] === finalvalue[i]){
                        
                    }
                    
                }
            }
        }
    }
}

testString("teste","te");

//=====================================================================
/*
 #@definir se a palavra termina com as mesmas letras de finalvalue ;

 #@ primeiro saber a quantidade de indices no finalvalue;
 #@ comparar eles com os valores do final do array de string;
 #@ se o array de string terminar com as letras de finalvalue return true;
 
*/