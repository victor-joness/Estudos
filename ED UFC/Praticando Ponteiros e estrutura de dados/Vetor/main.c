#include <stdio.h>
#include <stdlib.h>
#include "vetor.h"

int main()
{

    //escolhendo o tamanho do vetor 1
    int tamanho;
    printf("Escolha o tamanho do seu vetor 1\n");
    scanf("%d", &tamanho);

    if ( tamanho > 0 ){
        printf("\n");
    }
    else{
        printf("[Error]-Valor positivo");
    }
    printf("\n");
    //escolhendo o tamanho do vetor 2
    int tamanho2;
    printf("Escolha o tamanho do seu vetor 2\n");
    scanf("%d", &tamanho2);

    if ( tamanho2 > 0 ){
        printf("\n");
    }
    else{
        printf("[Error]-Valor positivo");
    }


    //declarando meu vetor, com meu novo tipo
    Vetor *meuVetor1;
    //criando meu vetor atraves da funcao cria(cujo recebe 1 parametro e coloca ele como tamanho do vetor)
    meuVetor1 = criaVetor(tamanho);
    //
    //atribundo os valores de acordo com o tamanho do vetor.
    for(int j=0; j<tamanho; j++){
        float k = 0;
        printf("coloque o valor da posicao %d :", j);
        scanf("%f", &k);
        atribui(meuVetor1,j,k);
    }
    //criando e atribundo valores manualmente para o segundo vetor
    Vetor *meuVetor2;
    meuVetor2 = criaVetor(tamanho2);
    for(int h=0; h<tamanho2; h++){
        float k = 0;
        printf("coloque o valor da posicao %d :", h);
        scanf("%f", &k);
        atribui(meuVetor2,h,k);
    }
    //testando as funções
    acessa(meuVetor1,1);
    printf("\n");
    tamanhoVetor(meuVetor1);
    printf("\n");
    listarVetor(meuVetor2);
    printf("\n");
    ordena(meuVetor1);
    printf("\n");
    listarVetor(meuVetor1);
    printf("\n");
    somaElementosVetor(meuVetor1);
    printf("\n");
    somaVetores(meuVetor1,meuVetor2);
    printf("\n");
}
