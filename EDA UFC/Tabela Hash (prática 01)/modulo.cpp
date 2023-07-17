#include "lib.h"

void criar(Tlista *L){	
	memset(L->elemento,0,(sizeof(L->elemento)));
	L->n=0;
}
    
int tamanho(Tlista L){
	return L.n;
}

int elemento(Tlista L, int pos, Telemento *valor){
	if(pos<0 || pos> MAX) return 0;
	*valor = L.elemento[pos];
	return 1;
}

void exibir(Tlista L){
	Telemento elem;
     int i;
     if (tamanho(L)!=0)
         for (i=0; i<MAX; i++){
             elemento(L, i, &elem);
             if(elem.valor != 0){
				printf("indice: %d\n", i);
	            printf("chave: %d \n", elem.chave);
	            printf("valor: %d \n\n", elem.valor);
         		}
             }
     else
         puts("Nao ha elementos na lista");
}  

int hashing(int chave){
	return (chave% MAX);
}
int inserir(Tlista *L, Telemento dado){
	int hash = hashing(dado.chave);
	L->elemento[hash] = dado;
	L->n+=1;
	return hash;
}
//-----------TRATAMENTO PARA COLISÕES --------------//
float taxaOcupacao(Tlista L){
	return (float) 	(L.n/MAX);
}









