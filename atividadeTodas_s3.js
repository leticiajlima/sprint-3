var nomesArmazenados = [];
var contadorDeNomes = 0;
function cadastroDeUsuario() {

var nome = document.getElementById("nome").value;


if (nome.trim()==="") {
alert("Ensira um nome");
} else {
    if (nomesArmazenados.some(cliente => cliente.nome === nome)){
        alert("Nome já cadastrado, por favor ensira outro nome diferente");

    } else  {
    contadorDeNomes ++;
    nomesArmazenados.push({ codigo: contadorDeNomes, nome: nome});
    alert ("Cadastro de " + nome +  "relizado com sucesso "); 

}
}
}
function exibirLista(){
    var nomesListados = document.getElementById("listaDeCategorias");
    nomesListados.innerHTML = "";
 for (var i = 0; i < nomesArmazenados.length;i++){
    var li = document.createElement("li");
    var cliente = nomesArmazenados[i];
    li.appendChild(document.createTextNode(`Código ${cliente.codigo}`));
    li.appendChild(document.createElement("br")); 
    li.appendChild(document.createTextNode(`Nome: ${cliente.nome}`));


    nomesListados.appendChild(li);
 }
}

var botaoCriar = document.getElementById("criarButton");
botaoCriar.onclick = cadastroDeUsuario;

var botaoExibirLista = document.getElementById("exibirLista");
botaoExibirLista.onclick = exibirLista;