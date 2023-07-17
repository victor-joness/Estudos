/*TAD: Circulo*/
#include "ponto.h"

/*Tipo estruturado que representa um círculo*/
typedef struct circulo Circulo;

/*Funções exportadas*/

/*Aloca e retorna um círculo com centro (x,y) e raio r*/
Circulo* circ_cria(float x, float y, float r);

/*Libera a memória de um círculo previamente criado.*/
void circ_libera(Circulo *c);

/*Retorna o valor da área do círculo*/
float circ_area(Circulo *c);

/*Verifica se um dado ponto p está dentro do círculo*/
int circ_interior(Circulo *c, Ponto *p);
