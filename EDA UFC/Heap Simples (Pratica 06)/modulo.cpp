#include "lib.h"

heap* criar(int nmax){
	heap *h = (heap *) malloc(sizeof(heap));
	h->n = 0;
	h->nmax = nmax;
	h->v = (int *) malloc(h->nmax * sizeof(int));
	return h;
}

void heap_libera(heap *h){
	free(h->v);
	free(h);
}

void heap_insere (heap *h, int valor){
	h->v[h->n++] = valor;
	sobe(h,h->n-1);
}

void sobe (heap *h, int i){
	int pai;
	while(i>0){
		pai = pai(i);//posição do pai de i
		if(h->v[pai] > h->v[i])
			break;
		else{
			troca(h, pai, i);
			i = pai;	
		}
	}
}

void troca (heap *h, int i, int j){
	int aux = h->v[i];
	h->v[i] = h->v[j];
	h->v[j] = aux;
}

void mostrar(heap *h){
	int i;
	puts("-------------Heap------------");
	for(i=0; i<h->n;i++)
		printf("%d - ", h->v[i]);
}

int heap_retira (heap *h){
	int topo = h->v[0];
	h->v[0] = h->v[h->n-1];
	h->n--;
	desce(h, 0);
	return topo;
}
void desce (heap *h, int i){
	int aux = esq(0);//posição do filho da esquerda
	int filho_dir;
	while(aux < h->n){
		filho_dir = dir(i);//posição do filho da direita
		if((filho_dir < h->n) && (h->v[filho_dir] > h->v[aux]))
			 aux = filho_dir;//indice do elemento da troca
		if(h->v[aux] < h->v[i])
			break;
		else{
			troca (h, i, aux);
			i = aux;
			aux = esq(i);	
		}
	}
}
int heap_vazia (heap *h){
	if(h->n != 0) return 1;
	else return 0;
}






