/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
/**
    01-receber o preco atual do produto
    02-receber a quantidade de vendas mensal do produto
    03-menor que 500 = -10%
    03-de 500 a 1200 = +5%
    03-acima de 1200 = +20%
    03-informa o novo preço do produto
**/

#include <stdio.h>

int main()
{
    
    float preco , quant ; 
    printf ("Coloque o preço do produto = ");
    scanf ("%f" , &preco);
    printf ("quantidade de vendas mensais = "); 
    scanf ("%f" , &quant);
    
    float p1 = (preco - ((10 * preco) / 100));
    float p2 = (((5 * preco) / 100) + preco);
    float p3 = (((20 * preco) / 100) + preco);
    
    if (quant < 500) {
        printf ("O novo valor do produto é %f", p1);
    }
    if (quant >= 500 && quant < 1200){
        printf ("O novo valor do produto é %f", p2);
    }
    if (quant >= 1200){
        printf ("O novo valor do produto é %f", p3);
    }
}
