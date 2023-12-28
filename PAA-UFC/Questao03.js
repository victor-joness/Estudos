function somaMaximaSubsequencia(arr) {
    if (arr.length == 0) {
        return 0;
    }

    let somaAteAqui = arr[0];
    let somaGlobalMaxima = arr[0];
    let inicio = 0;
    let fim = 0;
    let inicioTemporario = 0;

    for (let i = 1; i < arr.length; i++) {
        //começa uma nova subsequencia ou não
        if (arr[i] > somaAteAqui + arr[i]) {
            somaAteAqui = arr[i];
            inicioTemporario = i;
        } else {
            somaAteAqui = somaAteAqui + arr[i];
        }

        //vai atualizar os indices se eu comecei antes uma nova subsequencia
        if (somaAteAqui > somaGlobalMaxima) {
            somaGlobalMaxima = somaAteAqui;
            inicio = inicioTemporario;
            fim = i;
        }
    }

    return {
        somaMaxima: somaGlobalMaxima,
        subsequencia: arr.slice(inicio, fim + 1)
    };
}

const sequencia = [5, 15, -30, -10, -5, 40, 10];
const resultado = somaMaximaSubsequencia(sequencia);
console.log(`a soma maxima é: ${resultado.somaMaxima}`);
console.log(`a subsequencia é: [${resultado.subsequencia.join(', ')}]`);