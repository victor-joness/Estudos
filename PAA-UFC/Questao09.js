function maxCarrosNaBalsa(n, L, tamanhosCarros) {
    const M = [];

    function recursivoMaxCarros(k, A, B) {
        //se k for igual ao n é pq já chegamos no final da balsa
        if (k == n) {
            return 0;
        }

        //armazena o resultado no m, para conseguir guarda no M[k][A][B] preciso inicializar o M[k][A] e o M[K]
        if (!M[k]) {
            M[k] = [];
        }

        if (!M[k][A]) {
            M[k][A] = [];
        }

        //usar a dica de usar um vetor M que vai armazena de tras pra frente, se já ta calculado só retorna
        if (M[k] && M[k][A] && M[k][A][B]) {
            return M[k][A][B];
        }

        let maxCarros = 0;

        //coloca o carro na balsa a, entçao diminuimos o tamanho da balsa a e passamos para o prox carro k+1
        if (A >= tamanhosCarros[k]) {
            maxCarros = Math.max(maxCarros, 1 + recursivoMaxCarros(k + 1, A - tamanhosCarros[k], B));
        }

        //coloca o carro na balsa b, entçao diminuimos o tamanho da balsa b e passamos para o prox carro k+1
        if (B >= tamanhosCarros[k]) {
            maxCarros = Math.max(maxCarros, 1 + recursivoMaxCarros(k + 1, A, B - tamanhosCarros[k]));
        }

        //se não entrou nos ifs de antes é pq o carro não cabe em nenhuma
        maxCarros = Math.max(maxCarros, recursivoMaxCarros(k + 1, A, B));

        M[k][A][B] = maxCarros;

        return maxCarros;
    }

    // Chama a função recursiva com os parâmetros iniciais
    return recursivoMaxCarros(1, L, L);
}


const numCarros = 6;
const tamanhoPistas = 6;
const tamanhosCarros = [2,4,3,1,1,1];

const resultado = maxCarrosNaBalsa(numCarros, tamanhoPistas, tamanhosCarros);
console.log(`numero maximo de carros nas balsas: ${resultado}`);


/*
A) se a gente souber do k ate n nas pista a e b = M[K][A][B], então podemos calcular M[0][L][L] ou  M[1][L][L],
o otimo do problema tem que ser composto do otimo dos subproblemas

B)
    M[k, A, B] = max{
        1 + M[k+1, A - Tk, B] se o carro entra na balsa A
        1 + M[k+1, A, B - Tk] se o carro entra na balsa B
        M[k+1, A, B] se o carro não couber nas balsas
    }

C) é o algoritmo

D) não consegui fazer, só posso dizer que ele tenta entrar primeiro no A caso couber ele, se não ele entra no b
*/