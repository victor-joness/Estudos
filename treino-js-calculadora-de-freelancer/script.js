/* 
function calcular
*/
function calcular() {
    var res = document.getElementById('resposta');
    var nome = document.getElementById('nome');
    nome = nome.value;

    /* pegando o valor do campo em string e realocando em int */
    var valor = document.getElementById('ganhos-por-hora');
    valor = Number(valor.value);
    var hora = document.getElementById('horas-por-dia');
    hora = Number(hora.value);
    var dias = document.getElementById('dias-projeto');
    dias = Number(dias.value);

    /* conta */
    var a = (dias * hora) * valor;
    
    /* impressao */
    res.textContent = `${nome}: O total do projeto é $${a} Reais`;
}
