const turnON = document.querySelector("#turnON");
const turnOFF = document.querySelector("#turnOFF");

const lamp = document.querySelector("#lamp");

function lampON(){
    lamp.src = "./img/ligada.jpg";
}

function lampOFF(){
    lamp.src = "./img/desligada.jpg";
}

function quebraLAMP(){
    lamp.src = "./img/quebrada.jpg";
}

lamp.addEventListener('dblclick', quebraLAMP);

turnON.addEventListener('click', lampON);
turnOFF.addEventListener('click', lampOFF);