function CLL(){
    const copos = document.querySelector("#CP").value
    const resultado = document.querySelector(".RESPOSTA")
    var soma = copos*0.25

    resultado.innerHTML = soma

}


function voltar(){
    window.location = "../index.html"
}