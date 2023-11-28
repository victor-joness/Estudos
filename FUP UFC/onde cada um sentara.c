/**
    ALGORITMO:
        =>sortear um numero aleatorio para ana
        =>sortear um numero aleatorio para beatriz
        => sentara na cadeira 0, se o numero sorteado for multiplo de 3
        => sentara na cadeira 1, se o resto da divisao do numero sorteado por 3 for 1. (num%3==1)
        => sentara na cadeira 3, se o resto da divisao do numero sorteado por 3 for 2. (num%3==2)
        => se a cadeira de ana for igual a de beatriz, porem diferente de 2, eu faco a soma +1 na cadeira, pois assim ira ser 0+1 ou 1+1
        => se a cadeira de ana for igual a de beatriz, porem igual a 2, eu diminuo -2, pois assim voltara a cadeira 0
        => verificar as vagas vazias para que carolina possa sentar.
        => exibir tudo na tela ( numero sorteado, posicao de ana, beatriz, e carolina)

**/
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int nuana;
    int nubeatriz;
    int posicaoA;
    int posicaoB;
    srand(time(NULL));


    nuana = rand() %1000;  //numero aleatorio para ana
    nubeatriz = rand() %1000;  //numero aleatorio para beatriz
    printf("O numero sorteado por ana e : %d\n", nuana);
    printf("O numero sorteado por beatriz e : %d\n", nubeatriz);

    if(nuana%3 == 2){
        posicaoA = 2;
    }
    else if(nuana%3==1){
        posicaoA = 1;
    }
    else if(nuana%3==0){
        posicaoA = 0;
    }
    printf("Posicao que ana sentara %d\n", posicaoA);

    if(nubeatriz%3 == 2){
        posicaoB = 2;
    }
    else if(nubeatriz%3==1){
        posicaoB = 1;
    }
    else if(nubeatriz%3==0){
        posicaoB = 0;
    }

    if( (posicaoA == posicaoB) && (posicaoB != 2) ){
        posicaoB = posicaoB + 1;
    }
    if( (posicaoA == posicaoB) && (posicaoB == 2) ){
        posicaoB = posicaoB - 2;
    }
    printf("Posicao que beatriz sentara %d\n", posicaoB);

    if( (posicaoA == 1 && posicaoB == 2)||(posicaoA == 2 && posicaoB == 1) ){
        printf("Carolina sentara na cadeira 0");
    }
    else if ( (posicaoA == 0 && posicaoB == 1)||(posicaoA == 1 && posicaoB == 0) ){
        printf("Carolina sentara na cadeira 2");
    }
    else if( (posicaoA == 0 && posicaoB == 2)||(posicaoA == 2 && posicaoB == 0) ) {
        printf("Carolina sentara na cadeira 1");
    }

}

