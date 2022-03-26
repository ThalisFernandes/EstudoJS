let teste
let count = 0;
const result = function () {
    var url = 'https://randomuser.me/api';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script espera até a requisição retornar do servidor
    console.log(xhttp.responseText);
    return teste = JSON.parse(xhttp.responseText);
}

/*

!=  |  !== - diferente
== igual 
=== estritamente igual 
> maior 
= atribuição
< menor 
>= maior ou igual
<= menor ou igual

*/

function Adicionar (){
    let table = document.querySelector("table")
    let produto = document.querySelector("#inputProduto").value;

    if(count !== 0){
        table.innerHTML += ` <tr>
            
        <td>${produto}</td>
        <td>${result[count].name}</td>
        <td>${people[i].email}</td>
        <td>
          <button onclick="editar('${produtos[i]}')" id="icbutton"  class="btn btn-dark">Editar</button>
          <button  onclick="Limpar('${produtos[i]}')" id="deletebutton" class="btn btn-dark">Excluir</button>
        </td>
      </tr>`;
    } else {
        table.innerHTML = `<thead id="headTable"> 
        <tr>
          <th scope="col">Nome do Produto</th>
          <th scope="col">Resp. Compra</th>
          <th scope="col">Email</th>
        </tr>
      </thead>`;

    }
}






window.addEventListener("load",()=>{
  result()
})