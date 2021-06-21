function verificar() {
    var fano = window.document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number(fano.value)
    var res =  document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ("[Error] insira os dados novamente ")
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var genero = " "  
        var img = document.createElement('img')
        img.setAttribute("id" , "foto")
            if (fsex[0].checked) {
                genero = "homem"

                if (idade > 0 && idade <= 12){
                    //CRIANÇA
                    img.setAttribute ("src" , "foto-bebe-m.png")
                }
                else if (idade > 12 && idade <= 21){
                    //JOVEM
                    img.setAttribute ("src" , "foto-jovem-m.png")
                }
                else if (idade > 21 && idade <= 45 ){
                    //adulto
                    img.setAttribute ("src" , "foto-adulto-m.png")
                }
                else {
                    //idoso
                    img.setAttribute ("src" , "foto-idoso-m.png")
                }

            } else if (fsex[1].checked) {
                genero = "mulher"

                if (idade > 0 && idade <= 12){
                    //CRIANÇA
                    img.setAttribute ("src" , "foto-bebe-f.png")
                }
                else if (idade > 12 && idade <= 21){
                    //JOVEM
                    img.setAttribute ("src" , "foto-jovem-f.png")
                }
                else if (idade > 21 && idade <= 45 ){
                    //adulto
                    img.setAttribute ("src" , "foto-adulto-f.png")
                }
                else {
                    //idoso
                    img.setAttribute ("src" , "foto-idoso-f.png")
                }
            }
        }
        res.style.textAlign
        res.innerHTML = (`Detectamos um ${genero} com ${idade} anos`)
        res.appendChild(img)
}
