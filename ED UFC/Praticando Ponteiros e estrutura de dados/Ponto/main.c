#include <stdio.h>
#include "ponto.h"


int main(){

    //declarando meu ponto, com meu novo tipo
    Ponto *meuPonto1;
    //criando meu ponto atraves da funcao cria(cujo recebe 2 parametros e os coloca nas cordenasdas)
    meuPonto1 = cria(2.0, 4.5);
    //criando meu 2 ponto
    Ponto *meuPonto2;
    //criando meu 2 ponto
    meuPonto2 = cria(0.0,0.0);

    float dist = distancia(meuPonto1,meuPonto2);
    printf("A distancia entre os dois pontos e %.1f \n",dist);

    //acessando minhas codernadas, passo o x e y por referenncia usando o &, e minha função coloca os valores nas variaveis x e y, depois eu so mostro eles
    float x, y;
    acessa(meuPonto1, &x, &y);
    printf("Ponto 1: (%.1f , %.1f)",x, y);

	return 0;

}
