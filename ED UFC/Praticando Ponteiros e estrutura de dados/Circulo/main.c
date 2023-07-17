#include <stdio.h>
#include "circulo.h"
#include "ponto.h"

int main() {

    //parte de ponnto

    //declarando meu ponto, com meu novo tipo
    Ponto *meuPonto1 = cria(2.0, 4.5);
    //criando meu 2 ponto
    Ponto *meuPonto2 = cria(0.0,0.0);

    float dist = distancia(meuPonto1,meuPonto2);
    printf("A distancia entre os dois pontos e %.1f \n",dist);
    //acessando minhas codernadas, passo o x e y por referenncia usando o &, e minha função coloca os valores nas variaveis x e y, depois eu so mostro eles
    float x, y;
    acessa(meuPonto1, &x, &y);
    printf("Ponto 1: (%.1f , %.1f) \n",x, y);

    //parte de circulo

    int resultado;
    float area;
    Circulo *circulo = circ_cria(2.0,2.0,4.0);
    printf("A area do circulo eh %f\n", circ_area(circulo));

    Ponto *ponto = cria(5.0, 2.0);
    resultado = circ_interior(circulo,ponto);
    if (resultado)
        printf("O ponto esta dentro\n");
    else
        printf("O ponto esta fora\n");

    return 0;
}
