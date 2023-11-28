#include "lib.h"

void menu(){
	int op, valor;
	
	//--------- iniciando a estrutura --------------------//
    heap *h = NULL;
    
    do{    
    //--------------- Exibir menu ---------------------//
        system("cls");
        puts("\n\t\t\t\tHEAP ESQUERDISTA\n");
        puts("\t1  - INSERIR ELEMENTO\n \t2  - RETIRAR ELEMENTO\n \t3  - MOSTRAR TODA ESTRUTURA\n\t0  - SAIR");
        printf("\nINFORME SUA OPCAO:\n");
        scanf("%d", &op);//Escolha da Opção
        
        switch(op)
        {
        //Opção de exibir lista
    		case 1:{
    			printf("Informe um elemento: ");
    			scanf("%d", &valor);
    			heap *novo = cria_heap(valor);
    			h = uniao(h, novo);
    			imprime(h);
				break;
			}
    		
    		case 2:{
    			//TODO
			}
    			
    		case 3: imprime(h); break;
    			
	    	default:
	    			puts("OPCAO INCORRETA,TENTAR NOVAMENTE.");break;
	      
	        }
		getch();
	    }while(op!=0);
}

heap* cria_heap(int valor){
	heap *h = (heap *) malloc (sizeof(heap));
	h->esq = NULL;
	h->dir = NULL;
	h->elemento = valor;
	return h;
}

heap* uniao(heap* h1, heap* h2){
	if(h1==NULL) return h2;
	if(h2==NULL) return h1;
	if(h1->elemento > h2->elemento) 
		return uniao_heaps(h1, h2);
	else 
		return uniao_heaps(h2, h1);
}

heap* uniao_heaps(heap* h1, heap* h2){
	if(h1->esq == NULL)
		h1->esq = h2;
	else{
		h1->dir = uniao(h1->dir, h2);
		if(h1->esq->s < h1->dir->s)
			troca_filhos(h1);
		h1->s = h1->dir->s + 1;
	}
	return h1;
}

void troca_filhos (heap* a){
	heap* temp = a->esq;
	a->esq = a->dir;
	a->dir = temp;
}

void imprime(heap *h){
	if(h!=NULL){
		printf("\n%d", h->elemento);
		if(h->esq!=NULL)
			printf("E(%d)", h->esq->elemento);
		if(h->dir!=NULL)
			printf("D(%d)", h->dir->elemento);
		imprime(h->esq);
		imprime(h->dir);
	}
	
}








