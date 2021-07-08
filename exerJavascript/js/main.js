function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://dictionary.cambridge.org/pt/translate/");
    //window.location.href = "https://dictionary.cambridge.org/pt/translate/";
}

function trocar(elemento){
    //document.getElementById("mousemover").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));*/

/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;

}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/


/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getHours());*/

/*//estrutura de repetição
var count1;
for(count1=0; count1 < 5; count1++){

};*/


//estrutura de repetição
/*var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
};*/


/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*
//dicionário
var frutas = [{nome: "maça", cor:"vemelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
//alert(frutas[1].nome);

var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //add elementos
//lista.pop();// tirar os elementos add
//console.log(lista);
//console.log(lista.length); //quantidade de elementos
//console.log(lista.reverse()); //imprime ao contrário
//console.log(lista.toString()); //imprime uma string com os elementos
//console.log(lista.toString()[0]); 
//console.log(lista.join(" - ")); //altera a string


//var nome = "Gabrielle";
//var n = 5;
//var n2= 3;
//var frase = "japão é o melhor time do mundo";
//alert("Bem vindo "+nome+ " tem "+idade+" anos!");
//alert(idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLocaleUpperCase());
//alert(frase.replace("Japão", "Brasil"));
//console.log(n*n2);