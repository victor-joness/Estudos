/**
    Algoritmo:
    questão 02:
        =>Receber do Usuario o valor da temperatura = int x 
        =>pergunta ao usuario qual a transformação ele deseja
           =>irei usar o 'Menu' Para isso
                =>de fahrenheits para celsius = 01
                =>de celsiusu para fahrenheits = 02
                =>Valor maior que 02 exibir uma mensagem de error
        =>declara uma variavel que receba a opção do usuario = int op
        =>Caso escolha a opção x execultar x tarefa , se não execultar outra tarefa.
            =>opção 01 - (x-32) * 5/9;
            =>opção 02 - (x * 9/5) + 32;
            =>opção >02 - [ERROR]
        =>exibir o valor da conversão
**/
#include <stdio.h>

int main()
{
    int x; 
    printf("Informe o valor da temperatura = ");
    scanf("%d", &x);
    
    int op ;
    printf("-Escolha a transformação-\n");
    printf("01--fahrenheits para celsius\n");
    printf("02--Celsius para fahrenheits\n");
    printf("Digite sua escolha : ");
    scanf("%d", &op);
    
    if(op == 01){
        int resultado = (x-32) * 5/9;
        printf("%d", x) ; printf(" fahrenheits para celsius é igual a : %d", resultado); 
    } else if(op == 02) {
        int resultado = (x * 9/5) + 32;
        printf("%d", x) ; printf(" Celsius para fahrenheits é igual a : %d", resultado); 
    }else {
        printf("ERROR");
    }
    
    
   
}

