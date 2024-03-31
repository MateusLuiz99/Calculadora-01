// Referência aos elementos do HTML
var resultado = document.getElementById("resultado");
var igual = document.querySelector(".igual");

// Inserir um número selecionado
function inserir(num){
    resultado.innerHTML += num;
}

// Limpar o display da calculadora
function limpar(){
    resultado.innerHTML = "";
}

// Limpar um número do display da calculadora
function voltar(){
    var result = document.getElementById("resultado").innerHTML;
    resultado.innerHTML = result.substring(0, result.length -1);
}

// Calcular as contas da calculadora com a função 'eval' para 
// fazer calculos matemáticos
function calcular(){
    var result = document.getElementById("resultado").innerHTML;
    if(result){
        resultado.innerHTML = eval(result);
    } else {
        resultado.innerHTML = "Nada..."
    }
}