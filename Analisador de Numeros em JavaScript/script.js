let num = document.getElementById ("txtn")
let lista = window.document.getElementById ("lista")
let res = document.getElementById ("res")
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista( n , l ) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { 
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value))

        let item = document.createElement("option")
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""

    } else {
        window.alert ("[Error] Digite um numero novamente")
    }
    num.value = ""
    num.focus ()
}

function finalizar() {
    if (valores.length == 0 ) {
        window.alert ("Adicione um valor para comerçamos")
    } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0 

    for(let pos in valores){
        soma += valores[pos]
        media = soma / valores.length
        if (valores[pos] > maior) {
            maior = valores[pos]
        } if (valores[pos] < menor) {
            menor = valores[pos]
        } 
            
        }
    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados</p>`
    res.innerHTML += `<p>O menor numero é ${menor} e o maior é ${maior}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }

}
