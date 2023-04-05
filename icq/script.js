var CT = document.querySelector("#cintura").value
var QD = document.querySelector("#quadril").value
var resultado = document.querySelector("#resultado") 

function calcularHM(){
    var soma = CT/QD
    if(soma<0.95){
        resultado.innerHTML = "O risco de ser afetado(a) pela doensa é baixo,"
    }else{
        resultado.innerHTML = "O risco de ser afetado(a) pela doensa é moderado,.."
    

}
}


function calcularML(){
    var soma = CT/QD

    if(soma<0.80){
        resultado.innerHTML = "O risco de ser afetado(a) pela doensa é baixo,"
        }else{
         resultado.innerHTML = "O risco de ser afetado(a) pela doensa é moderado,.."
        }

}

function sair(){
    window.location = "../index.html"
}