let strArr = "[5, 2, 3], [2, 2, 3, 10, 6]" ;

function ArrayMatching(strArr) { 
    let arr1 = strArr[0].match(/[0-9]+/gi);
    let arr2 = strArr[1].match(/[0-9]+/gi);
    let result = [];
    let maiorArray
    arr1.length > arr2.length ? maiorArray = arr1.length : maiorArray = arr2.length;
  
    for(let i =0; i < maiorArray; i++){
      if(arr1[i] != undefined && arr2[i] != undefined){
         result[i] = parseInt(arr1[i]) + parseInt(arr2[i]);
      } else if (arr1[i] == undefined || arr2[i] == undefined){
          result[i] = parseInt(arr2[i]) || parseInt(arr1[i]);
      }
    }
    let total = result.join('-')
    // code goes here  
    return total
  
  };

  ArrayMatching(strArr);
