/**
    algoritmo:
        =>receber entrada da idade de dona monica 
        =>fazer as restriçoes
            =>1 ≤ A < M
            =>1 ≤ B < M
            =>40 ≤ M ≤ 110
            =>A != B
        =>calcular  a idade do filho 3 (c)
        =>colocar o valor do filho mais velho dentro de uma variavel atraves de ifs
        =>imprimir o valor na tela.
**/

#include <stdio.h>

int main()
{
    int m,a,b;
    printf("Idade da dona Monica: ");
    scanf("%d",&m);
    printf("Idade de um dos seus filhos: ");
    scanf("%d",&a);
    printf("Idade de um dos seus filhos: ");
    scanf("%d",&b);
    
    if((b > m) || (a > m)){
        printf("ERROR IDADE INVALIDA");
        return 0;
    }
    else if((b < 1) || (a < 1)){
        printf("ERROR IDADE INVALIDA");
        return 0;
    }
    else if(m < 40 || m > 110){
        printf("ERROR IDADE INVALIDA");
        return 0;
    }
    else if(a == b){
        printf("ERROR IDADE INVALIDA");
        return 0;
    }
    
    int c = ((m - a)-b);
    int idadevelho = 0;
    if((a > b) && (a > c)){
        idadevelho = a;
    }
    else if((b>a)&&(b>c)){
        idadevelho = b;
    }
    else if((c>a)&&(c>b)){
        idadevelho = c;
    }
    printf("idade do filho mais velho é : %d",idadevelho);
    
}
