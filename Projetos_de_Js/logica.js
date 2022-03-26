var login = "";


function loginFunc (){

     login = document.querySelector("#LoginName").value;
}

function changeBackgroud (){
    
    let color = document.querySelector("#bgColor").value;
    console.log(color);

    document.body.style.backgroundColor = color;
    
}