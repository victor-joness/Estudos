


function moveon() {
    // Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
    var answer = confirm("Ready to move on?");
    // Se ele clicou no botão "OK", faz o navegador carregar uma nova página
    if (answer) window.location = "http://google.com";
}
// Executa a função definida acima por 1 minuto (60.000 milissegundos) a partir de agora.
setTimeout(moveon, 60000);

