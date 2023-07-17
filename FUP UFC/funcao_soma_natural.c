#include <stdio.h>


int inteiro;
int resultado;

int soma(int inteiro){
    int i;
    for(i=0; inteiro != 0; i++){
        resultado = resultado + inteiro;
        inteiro = inteiro - 1;
    }
    printf("O resultado é %d", resultado);
}

int main()
{
    printf("Escolha um numero inteiro");
    scanf("%d", &inteiro);
    soma(inteiro);
}

