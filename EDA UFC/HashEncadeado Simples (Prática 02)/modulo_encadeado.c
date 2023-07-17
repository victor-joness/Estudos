#include"libHashEnc.h"

int criar(TLista *L){
	int i=0;
	for(i=0;i<MAX;i++)
		L->elemento[i]= NULL;
	L->n = 0;
	return 1;	
}

int inserir(TLista *L, int hash, Telemento dado){
	Tno novo;
	novo = (Tno*) malloc(sizeof(Tno));
	novo->dado = dado;
	if(L->elemento[hash]==NULL){
		L->elemento[hash] = novo;
		novo->proximo = NULL;
	}
	else{
		novo->proximo = L->elemento[hash];
		L->elemento[hash] = novo;
	}
	L->n+=1;
	return 1;
}

void exibir(TLista L){
	int i;
	Tno aux;
	if(L.n!=0){
		for(i=0;i<MAX;i++){
			if(L.elemento[i] != NULL){
				printf("---------indice %d---------\n", i);
				 aux = 	L.elemento[i];
				 while(aux !=NULL){
				 	printf("Chave = %d\n", aux->dado.chave);
				 	printf("Valor = %d\n\n", aux->dado.valor);
				 	aux = aux->proximo;
				 }
			}
		}
	}
	else
		printf("Tabela Vazia");
}

int hashing(int chave){
	return (chave % MAX);
}
