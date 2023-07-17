#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "funcoes.h"
#define TAM 50000

int main(){
    int *vetor = gerador(TAM);
    clock_t Ticks[2];
    Ticks[0] = clock();
    //O código a ser medido fica neste ponto.
    selectionSort(vetor, TAM); //função chamada
    Ticks[1] = clock();
    float Tempo = (Ticks[1] - Ticks[0]) * 1000.0 / CLOCKS_PER_SEC;
    printf("\nTempo gasto: %g ms.\n", Tempo);
    return 0;
}
