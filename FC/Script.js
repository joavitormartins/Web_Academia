let contador = 0;
let temporizador = document.getElementById("temporizador");



function calcular(){
  const puls = document.querySelector("#caixa").value
  const resultado = document.querySelector("#RT")


  var soma = puls*4
  resultado.innerHTML = soma
}


function iniciarTemporizador() {

  setInterval(function() {
    contador++;
    if (contador <= 15) {
      temporizador.innerHTML = "Tempo decorrido: " + contador + " segundos";
    }
  }, 1000);
  clearInterval(contador);
}



function voltar(){
    window.location = "../index.html"
}