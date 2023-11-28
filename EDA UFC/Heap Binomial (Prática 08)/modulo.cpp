#include "lib.h"

void menu(){
	int op, valor;
	
	//--------- iniciando a estrutura --------------------//
    heap *h1 = NULL;
    heap *h2 = NULL;
    heap *h = NULL;
    do{    
    //--------------- Exibir menu ---------------------//
        system("cls");
        puts("\n\t\t\t\tHEAP BINOMIAL\n");
        puts("\t1  - Construa h1\n \t2  - Construa h2\n \t3  - Uniao h1 e h2\n\t0  - SAIR");
        printf("\nINFORME SUA OPCAO:\n");
        scanf("%d", &op);//Escolha da Opção
        
        switch(op)
        {
        //Opção de exibir lista
    		case 1:{
    			printf("\n -- HEAP 1 -- \n");
    			printf("Informe um chave: ");
    			scanf("%d", &valor);
    			heap *novo = cria_heap(valor);
    			h1 = uniao(h1, novo);
    			printf("\n -- HEAP ATUALIZADO -- \n");
    			imprime(h1);
				break;
			}
    		
    		case 2:{
    			printf("\n -- HEAP 2 -- \n");
    			printf("Informe um chave: ");
    			scanf("%d", &valor);
    			heap *novo = cria_heap(valor);
    			h2 = uniao(h2, novo);
    			printf("\n -- HEAP ATUALIZADO -- \n");
    			imprime(h2);
    			
				break;
			}
    			
    		case 3: {
    			printf("\n -- UNIAO H1 E H2 -- \n");
    			h = uniao(h1, h2);
    			printf("\n -- HEAP ATUALIZADO -- \n");
    			imprime(h);
    			free(h1);
    			free(h2);
    			h1 = NULL;
    			h2= NULL;
				break;
    		}
    			
	    	default:
	    			puts("OPCAO INCORRETA,TENTAR NOVAMENTE.");break;
	      
	        }
		getch();
	    }while(op!=0);
}

heap* cria_heap(int valor){
	heap* h = (heap *) malloc (sizeof(heap));
	h->chave = valor;
	h->grau = 0;
	
	h->pai = NULL;
	h->filho = NULL;
	h->irmao = NULL;
	return h;
}

heap* uniao(heap* h1, heap* h2){
	heap* anterior;
    heap* proximo;
	heap* x;
	heap* H = NULL;
	
	 H = combina_heap(h1, h2);
    anterior = NULL;
    x = H;
    proximo = x->irmao;
    while (proximo != NULL){
    	if((x->grau != proximo->grau)//caso 1
		||
		((proximo->irmao !=NULL) && ((proximo->irmao)->grau == x->grau)))//caso 2
		{
    		anterior = x;
    		x = proximo;
		}
		else{
			if(x->chave < proximo->chave){//CASO 3
				x->irmao = proximo->irmao;
				proximo->irmao = x->filho;
				proximo->pai = x;
				x->filho = proximo;
				x->grau = x->grau +1;
			}
			else{//CASo 4
				if(anterior ==NULL)
				 	H = proximo;
				 else
				 	anterior->irmao = proximo;
				x->irmao = proximo->filho;
				x->pai = proximo;
				proximo->filho = x;
				proximo->grau = proximo->grau+1;
				x = proximo;
			}
		}
		proximo = x->irmao;
	}
	return H;
}
heap* combina_heap(heap* h1, heap* h2){
	heap* h;
    heap* a;
	heap* b;
	heap* y = h1;
	heap* z = h2;
	
	if(y!=NULL){
		if(z!=NULL && y->grau <= z->grau)
			h = y;
		else
			if(z!=NULL && y->grau > z->grau)
			h = z;
	}
	else
		h = z;
	
	while(y!= NULL && z!= NULL){
		if(y->grau < z->grau)
			if(y->irmao == NULL){
				y->irmao = z;
				y = z->irmao;
			}
			else y = y->irmao;
		else{
			if(y->grau == z->grau){
				a = y->irmao;
				y->irmao = z;
				y = a;	
			}
			else{
				b = z->irmao;
				z->irmao = y;
				z = b;
			}
		}
	}
	
	
	return h;
}
void imprime(heap *h){
	if(h==NULL) return;
	printf("\nelemento %d - grau %d", h->chave, h->grau);
	if(h->grau>0) printf("\n filhos:", h->chave);
	heap* p = h->filho;
	if (p!= NULL){
        	while(p != NULL){
				printf("-->");
        		printf("%d ", p->chave);
        		p = p->irmao;
        	}
        }
	imprime(h->irmao);
	imprime(h->filho);
	
}
