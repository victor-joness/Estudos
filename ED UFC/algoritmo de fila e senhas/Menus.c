#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include "Fila.h"

int menudecontrole(){
    int opcao;
    printf("\n=================");
    printf("\nMENU DE CONTROLE");
    printf("\n1 - Menu caixa");
    printf("\n2 - Menu cliente");
    printf("\n3 - Encerrar\n");
    scanf("%d", &opcao);

    if((opcao == 1) || (opcao == 2) || (opcao == 3)){
        return opcao;
    }else{
        printf("\n=================");
        printf("\nvalor invalido");
        menudecontrole();
    }
}

int menucaixa(){
    int opcao2;
    printf("=================");
    printf("\nCAIXA");
    printf("\n1 - Chamar o proximo");
    printf("\n2 - Visualizar as filas");
    printf("\n3 - Listar quantidade de atendimentos");
    printf("\n4 - Voltar ao menu anterior\n");

    scanf("%d", &opcao2);

    if((opcao2 == 1) || (opcao2 == 2) || (opcao2 == 3) || (opcao2 == 4)){
        return opcao2;
    }else{
        printf("\n=================");
        printf("\nvalor invalido");
        menucaixa();
    }
}

int menusenha(){
    int opcao2;
    printf("=================");
    printf("\nRETIRAR SENHA");
    printf("\n1 - Normal");
    printf("\n2 - Prioritaria");
    printf("\n3 - Voltar ao menu anterior\n");

    scanf("%d", &opcao2);

    if((opcao2 == 1) || (opcao2 == 2) || (opcao2 == 3)){
        return opcao2;
    }else{
        printf("\n=================");
        printf("\nvalor invalido");
        menusenha();
    }
}
