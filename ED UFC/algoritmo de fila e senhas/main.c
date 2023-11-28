#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include "Fila.h"
int main()
{
    //usado para gerar valores aleatorio
    srand(time(NULL));

    //criando minhas filas antes, isso � necessario para fazer a primeira valida��o
    Fila *filaNormal = criaFila();
    Fila *filaPrioritaria = criaFila();
    float p = 0;

    //Menu de controle // primeira verifica��o // limite de 1000 vezes que aparece o menu de controle, tamanho ajustavel, n�o deixei infinito, pois iria travar

    for(int i = 0; i < 1000; i++){
    //variavel onde guardo a primeira opcao do usuario e fa�o a primeira valida��o
    int opcao = menudecontrole();


    if(opcao == 1){
        //menu caixa / segunda verifica��o
        int opcao2 = menucaixa();
        float clientesnormal;
        float clientesprioritarios;

            if(opcao2 == 1){
                if (filaVazia(filaPrioritaria)){
                    printf("\nFila prioritaria vazia\n");
                }
                if( ((filaVazia(filaPrioritaria)) || (p != 0)) && (!filaVazia(filaNormal))  ){
                    printf("chamando cliente da Fila normal\n");

                    if(filaVazia(filaNormal)){
                        printf("Fila normal vazia, espere um cliente");
                    }else{
                        printf("primeiro cliente da Fila normal - senha : %.2f", remova(filaNormal));
                        clientesnormal++;
                        p--;
                    }
                }else{
                    if(filaVazia(filaPrioritaria)){
                        printf("Fila prioritaria vazia, espere um cliente");
                    }else{
                        printf("primeiro cliente da Fila prioritario- senha : %.2f", remova(filaPrioritaria));
                            clientesprioritarios++;
                        p = p + 2;
                    }
                }
            }else if(opcao2 == 2){
                printf("Fila normal: ");
                filaImprime(filaNormal);
                printf("\n==========\n");
                printf("Fila prioritaria: ");
                filaImprime(filaPrioritaria);
            }else if(opcao2 == 3){
                printf("\na quantidade de atendimentos prioritario foi :%.2f\n", clientesprioritarios);
                printf("\na quantidade de atendimentos normais foi :%.2f\n", clientesnormal);
                printf("\na quantidade de atendimentos geral foi :%.2f\n", clientesprioritarios + clientesnormal);
            }
    }else if(opcao == 2){
        //menu senha / segunda verifica��o
        int opcao2 = menusenha();
            if(opcao2 == 1){
                //verificar se a lista normal ta cheia
                if(estaCheia(filaNormal)){
                    printf("a Fila normal esta cheia, temos 10 senhas geradas");
                }else{
                    //senha vai de 0 a 100
                    int senha = rand() % 100;
                    printf("Sua senha e: %d", senha);
                    insere(filaNormal, senha);
                }


            }else if(opcao2 == 2){
                //verificar se a lista normal ta cheia
                if(estaCheia(filaPrioritaria)){
                    printf("a Fila prioritaria esta cheia, temos 10 senhas geradas");
                }else{
                    //senha vai de 100 a 200
                    int senha = rand() % 100 + (+100);
                    printf("Sua senha e: %d\n", senha);
                    insere(filaPrioritaria, senha);
                }

            }
    }else if(opcao == 3){
        printf("Programa encerrado");
        exit(1);
    }
    }
}
