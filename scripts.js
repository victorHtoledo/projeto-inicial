const botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
 
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradoruo = document.getElementById("logradouro");
var número = document.getElementById("número");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
function alertar(){


    // alert("O nome inserido foi" + nome.value);
   
    const url =  `https://viacep.com.br/ws/${cep.value}/json/`;

 
    fetch(url)
    .then(function(resposta){
      return resposta.json();

    })

    .then(function(dados){
    logradoruo.value = dados.logradoruo;
    
    })

    .catch(function(e){
        alert(e.message());
        
    })
 
 
     saida.innerText = "Nome:" + nome.value +
        "\n E-mail: " + email.value +
        "\n Telefone: " + telefone.value +
        "\n CEP: " + cep.value +
        "\n Logradouro: " + logradouro.value +
        "\n Número: " + número.value +
        "\n Complemento: " + complemento.value +
        "\n Bairro: " + bairro.value +
        "\n Cidade: " + cidade.value +
        "\n Estado: " + estado.value;
 
}