/**
    Questão 05:
    algoritmo:
        =>RECEBER 02 NUMEROS INTEIROS 
        	=> int x , int y 
        =>verificao para saber se é numero primo
            =>Verificamos da seguinte maneira, é numero primo quando o valor digitado e o resto da sua divisão por 2,3,4,5... for diferente
            de 0 e se ele for maior que o numero que o estar dividindo,quando eles chegam ao mesmo numero divisor e dividendo chegamos ao numero primo.
        =>para imprimir o numero primo entre eles, fazemos a verificação dos numeros primos e imprimimos na tela de acordo com o numero de entrada.
            =>se o x for 1 e y for 10 imprima 0s seguintes numero (2,3,5,7)
            
        =>podemos verificar tambem cada numero entre o de entrada e o de saida e fazer a checagem se é numero primo, se for numero primo eu imprimo na tela,
        se nao eu descarto o valor. (x > 1 && y < 10) isso gera os numeros 2,3,4,5,6,7,8,9 ai a gente faz a verificação do numero primo e imprimia na tela.
**/
#include <stdio.h>

int main()
{           //em codigo como se descobre se o numero e primo
   int n;
   int i=2;
   printf("Digite um número :" );
   scanf("%d", &n);
   while ((n%i !=0) && (i < n)){
       i++;
   }
   if(i==n){
       printf("numero primo");
       }else {
           printf("não é numero primo");
       }
   }
    
    
    