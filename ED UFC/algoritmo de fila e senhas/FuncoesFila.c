#include <stdio.h>
#include <stdlib.h>
#include "Fila.h"

struct lista{
    float info;
    struct lista *prox;
};
typedef struct lista Lista;

struct fila{
    Lista *inicio;
    Lista *fim;
    int qditem;
};

Fila* criaFila(){
    Fila *f = (Fila*) malloc (sizeof(Fila));
    f->inicio = NULL;
    f->fim = NULL;
    f->qditem = 0;
    return f;
}

void insere(Fila *f, float valor){
    Lista *novo = (Lista*) malloc(sizeof(Lista));
    novo->info = valor;
    novo->prox = NULL;
    //se a fila não tiver vazia
    if(f->fim != NULL){
        f->fim->prox = novo;
    }else{
        f->inicio = novo;
    }

    f->fim = novo;
    f->qditem++;
}

float remova(Fila *f){
    Lista *t;
    float valor;

    if(filaVazia(f)){
        printf("nao e possivel remover");
        exit(1);
    }

    t = f->inicio;
    valor = t->info;
    f->inicio = t->prox;

    if(f->inicio == NULL){
        f->fim = NULL;
    }

    free(t);
    f->qditem--;
    return valor;
}

int filaVazia(Fila *f){
    return (f->inicio == NULL);
}

void filaLibera(Fila *f){
    Lista *q = f->inicio;
    while(q != NULL){
        Lista *t = q->prox;
        free(q);
        q = t;
    }

    free(f);
}

void filaImprime(Fila *f){
    Lista *q;
    for(q = f->inicio; q != NULL; q = q->prox){
        printf("%.2f <- ", q->info);
    }
}

int estaCheia(Fila *f) { // retorna verdadeiro se a fila esta cheia, valor modificavel
	return (f->qditem == 10);
}







