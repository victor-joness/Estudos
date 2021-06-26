//Definindo a variavel do numero inicial e ajustando para number
var inicio = document.getElementById("txti")
//Definindo a variavel do numero final e ajustando para number
var fim = document.getElementById("txtf")
//Definindo a variavel dos passos e ajustando para number
var passo = document.getElementById("txtp")
//resultado variavel
var res = document.getElementById("res")

//lançando a funcao onclick e definindo que o inicio nao pode ser 0

function clickar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERROR] Confira seus dados e tente novamente")
    } else {
        res.innerHTML = "Contando..."
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){
            for (let c = i; c <= f ; c +=p){
                res.innerHTML += `${c} \u{1F449} `
        }}
        else {
            for (let c = i; c >= f ; c -=p){
                res.innerHTML += `${c} \u{1F449} `
        }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}
