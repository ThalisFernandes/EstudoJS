function removeChars(s){
    let string = s;
    let newstr = string.replace(/0-9/,"").replace(/@/,"").replace(/$/,"");

    console.log(newstr);
    return newstr;
}

let str1 = "text #muito $$ alô, %%";
let str2 = "remove @#### alo123 ###mestreaaaaa"

removeChars(str1);
removeChars(str2);