#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "vetor.h"

struct vetor {
    int tamanho;
    float *elementos;
};

Vetor* criaVetor(int n){
    Vetor *v = (Vetor*) malloc(sizeof(Vetor));
    if (v == NULL){
		printf("Memoria insuficiente!\n");
		exit(1);
	}
    v->tamanho = n;
    v->elementos = (float*) malloc(sizeof(float));
    return v;
}

void liberaVetor(Vetor* v){
    free(v->elementos);
    free(v);
}

int tamanhoVetor(Vetor* v){
    printf("\nTamanho do vetor : %d", v->tamanho);

    //funciona com vetor normal, temos que descobrir como fazer com um vetor ponteiro
    /*int inteiros[55];
    int tam = sizeof(inteiros)/sizeof(inteiros[0]);
    printf("%d", tam);*/
}

float acessa(Vetor* v, int i){
    int k; /* índice do elemento no vetor */
    //verifica se a posição passada for maior que o tamanho do vetor
    if (i > v->tamanho) {
        printf("Atribuicao inválida!\n");
        exit(1);
    }

    k = i;
    printf("\nElemento da posicao %d : %0.2f", i , v->elementos[k]);
}

void atribui(Vetor* v, int i, float c){
    int k; /* índice do elemento no vetor */
    //verifica se a posição passada for maior que o tamanho do vetor
    if (i > v->tamanho) {
        printf("Atribuição inválida!\n");
        exit(1);
    }

    k = i;
    v->elementos[k] = c;
}


void ordena(Vetor* v){
     int i, j, aux;
     for( i=0; i< v->tamanho; i++ ){
                  for( j=i+1; j < v->tamanho; j++ ){
                       if( v->elementos[i] > v->elementos[j] ){
                           aux = v->elementos[i];
                           v->elementos[i] = v->elementos[j];
                           v->elementos[j] = aux;
                       }
                  }
           }
           for(i=0; i <= (v->tamanho - 1) ;i++)
           {
                printf("\nA ordem crescente dos elementos do vetor escolhido e :%0.2f", v->elementos[i]);
           }


}

void listarVetor(Vetor* v){
  for (int i = 0; i < v->tamanho; i++){
    printf("\nA listagem do vetor escolhido :%0.2f", v->elementos[i]);
  }
}

float somaElementosVetor(Vetor* v){
    float aux;
    for (int i = 0; i < v->tamanho; i++){
        aux = aux + v->elementos[i];
    }
    printf("\nA soma dos elementos do vetor escolhido :%0.2f", aux);
}

float somaElementosVetorAUX(Vetor* v){
    float aux;
    for (int i = 0; i < v->tamanho; i++){
        aux = aux + v->elementos[i];
    }
}

Vetor* somaVetores(Vetor* v1, Vetor* v2){
    if (v1->tamanho == v2->tamanho){
        float Res1 = somaElementosVetorAUX(v1);
        float Res2 = somaElementosVetorAUX(v2);
        float resultado = Res1 + Res2 - Res1;
        printf("\nA soma dos elementos de dois vetores e :%0.2f", resultado);
    }
    else {
        printf("[ERROR]-A soma nao foi possivel pelo tamanho ser diferente");
    }
}
