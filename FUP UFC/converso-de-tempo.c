/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
/**
    01-receber o tempo da receita em horas 
    02-redceber o tempo da receita em minutos 
    03-exibir um menu com 3 opções (1-segundos, 2-minutos , 3-horas) (A04 tem um exemplo de menu)
    04-converter uma variavel global em minutos 
    05- atribuir uma variavel para horas e para segundos (ex: 105 minutos = 1,75 horas)
    06-exibir na tela a opção escolhida dentro das 3 opçoes do menu
**/
int main()
{
   int H , M ;
   printf ("coloque o tempo da sua receita em : \n");
   printf ("Horas : ");
   scanf ("%d" , &H);
   printf ("Minutos : ");
   scanf ("%d" , &M);
   
   int op ;
   printf("------MENU------\n");
   printf("1-Segundos\n");
   printf("2-Minutos\n");
   printf("3-Horas\n");
   printf("Digite sua escolha : ");
   scanf("%d", &op);
   int horasM = H * 60 ; 
   int minutos = horasM + M ; 
   int segundos = minutos * 60 ; 
   float MINUTOS = horasM + M ; 
   float HorasH = MINUTOS / 60 ;
   if (op == 1){
       printf("o valor total da sua receita em segundos é : %d", segundos);
   }
   if (op == 2){
       printf("o valor total da sua receita em Minutos é : %d", minutos);
   }
   if (op == 3){
       printf("o valor total da sua receita em Horas é : %f", HorasH);
   }
}