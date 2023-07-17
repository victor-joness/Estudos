#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

typedef struct no{
	int grau;
	int chave;
	
	struct no* irmao;
	struct no* pai;
	struct no* filho;
}heap;

void menu(void);
heap* cria_heap(int valor);
heap* uniao(heap* h1, heap* h2);
heap* combina_heap(heap* h1, heap* h2);
void imprime(heap *h);
