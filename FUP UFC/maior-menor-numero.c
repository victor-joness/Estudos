/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>

int main()
{

//Escolher a variavel de 3 numeros
   int n1,n2,n3;
   printf ("Escolha um numero para n1 = ");
   scanf ("%d" , &n1);
   printf ("Escolha um numero para n2 = ");
   scanf ("%d" , &n2);
   printf ("Escolha um numero para n3 = ");
   scanf ("%d" , &n3);

//teste para ver o maior numero
    if (n1 > n2 && n1 >n3){
        printf ("O maior numero escolhido foi:%d", n1 );
    }
    if (n2 > n1 && n2 > n3){
        printf ("\nO maior numero escolhido foi:%d", n2 );
    }
    if (n3> n1 && n3 > n2) {
        printf ("\nO maior numero escolhido foi:%d", n3 );
    }
//teste para ver o menor numero
    if (n1 < n2 && n1 < n3) {
        printf ("\nO Menor numero escolhido foi:%d", n1 );
    }
    if (n2 < n1 && n2 < n3){
        printf ("\nO Menor numero escolhido foi:%d", n2 );
    }
    if (n3 < n1 && n3 < n2) {
        printf ("\nO Menor numero escolhido foi:%d", n3 );
    }
}
