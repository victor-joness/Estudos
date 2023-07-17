#include <stdio.h>
#include <stdlib.h>
#include "circulo.h"
#include "ponto.h"
#include <math.h>
#define PI 3.14159

struct circulo {
    Ponto *ponto;
    float raio;
};

Circulo* circ_cria(float x, float y, float r){
    Circulo *c = (Circulo*) malloc(sizeof(Circulo));
    if (c == NULL){
		printf("Memoria insuficiente!\n");
		exit(1);
	}
    c->ponto = cria(x,y);
    c->raio = r;
    return c;
}

void circ_libera(Circulo *c){
    libera(c->ponto);
    free(c);
}

float circ_area(Circulo *c){
    float area;
    area = PI * (c->raio * c->raio);
    return area;
}

int circ_interior(Circulo *c, Ponto *p){
    float dist = distancia(c->ponto, p);
    if (dist < c->raio) {
        return 1;
    }else {
        return 0;
    }
}
