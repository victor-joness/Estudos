#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#include <time.h>
main()

{
int numero,resto,soma=0; //variaveis 

printf("Escolha um numero inteiro : \n"); //Escolha do numero
scanf("%d",&numero);

while (numero>0) //enquanto nuemro for maior que 0
{
resto=numero%10;  //resto da divisao por 10
numero=numero/10; //numero de entrada dividida por 10 
soma=soma+resto; // soma = 0 + resto 
}

printf("O somatório é %d\n",soma);
}