const calcular = document.querySelector('#calcular');
calcular.addEventListener('click',imc);
calcular.addEventListener('touch',imc);

function imc(){
const nome = document.querySelector('#nome').value
console.log(nome);
const altura = document.querySelector('#altura').value
console.log(altura);
const peso = document.querySelector('#peso').value
console.log(peso);
const resultado = document.querySelector('.result')

if(nome != "" && altura != "" && peso != ""){
    
const valorIMC = (peso/(altura*altura)).toFixed(1)

let classificação = ""
if(valorIMC<18.5){
    classificação =  'abaixo do peso<b>come né!<b>'

}else if(valorIMC<25){
    classificação =  'peso ideal foca no shape!'

}else if(valorIMC<30){
    classificação = 'levemente acima do peso'

}else if(valorIMC<35){
    classificação = 'Obesidade grau I,ir a academia!'

}else if(valorIMC<40){
    classificação = 'Obesidade grau II(severa),proucurar um medico!'

}else{
    classificação = 'Obesidade grau III(Morbita),descança em paz!'
}





resultado.innerHTML = `nome:${nome}||Seu IMC: ${valorIMC}||Você esta: ${classificação}`

}else{resultado.innerHTML = "por favor,Preencha todos os campos"}
}



function Voltar(){
    window.location = "../index.html"
}