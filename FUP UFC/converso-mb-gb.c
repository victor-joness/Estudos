/**
    Questão 01:
    algoritmo:
        =>receber x como valor para megabyte = int x
        =>receber y como valor para gygabyte = int ygb
        =>Converte GB para MB para fazermos corretamente a divisão = int ymb = ygb * 1024 
        =>variavel com a quantidade de relatorios = ymb / x 
        =>exibir na tela a quantidade de relatorios
        =>Usado 1gb = 1024mb
**/

#include <stdio.h>

int main()
{
    int x , ygb; 
    printf("Informe quantos Megabyte tem o PDF: ");
    scanf("%d", &x);
    printf("Informe quantos Gigabyte tem o Backup: ");
    scanf("%d",  &ygb);
    
    int ymb = ygb * 1024 ;
    int relatorios = ymb / x; 
    
    printf("A quantidade de relatorios a ser gerado é :%d", relatorios);
}

