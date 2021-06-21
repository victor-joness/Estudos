function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("Manha")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora < 12) {
        img.src = "Manha.png"
        document.body.style.background = "#F3AE77"
        //Bom dia
    } else { if (hora >= 12 && hora < 18) {
        img.src = "Tarde.png"
        document.body.style.background = "#B47F6C"
        //boa tarde
    } else { 
        img.src = "Noite.png"
        document.body.style.background = "#397EB5"
        //boa noite
    }
        
    }
}