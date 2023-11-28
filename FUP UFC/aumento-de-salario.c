/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
/**
01- mostra um simples menu com o codigo e seu aumento
01- receber o salario da pessoa e receber o seu codigo 
02- definir o codigo dos cargos e seus respectivos porcentagem 
03- porcentagem em divisao (ex 40% de 1000)
04- calcular o novo salario (porcentagem + receber salario)
05- escrever na tela o novo salario

**/


#include <stdio.h>

int main()
{
   int salario ;
   printf("-Bem vindo-\n");
   printf("-Digite o Salario do funcionario-\n");
   scanf("%d", &salario);
   
   
   int op ;
   printf("-Código do cargo-\n");
   printf("1----40%\n");
   printf("2-----25%\n");
   printf("3-----10%\n");
   printf("4-----0,5%\n");
   printf("Digite sua escolha : ");
   scanf("%d", &op);
   
   int v1 = ((40 * salario) / 100) + salario;
   int v2 = ((25 * salario) / 100) + salario;
   int v3 = ((10 * salario) / 100) + salario;
   int v4 = (((0,5 * salario) / 100) / 10) + salario;
   
   if (op == 1){
       printf ("O seu salario aumentou para %d", v1);
   }
   if (op == 2){
       printf ("O seu salario aumentou para %d", v2);
   }
   if(op == 3){
       printf ("O seu salario aumentou para %d", v3);
   }
   if(op == 4){
       printf ("O seu salario aumentou para %d", v4);
   }
}