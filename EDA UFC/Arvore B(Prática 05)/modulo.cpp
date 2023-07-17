#include "lib.h"

void menu(){
	int op, i;
	
	//--------- iniciando a estrutura --------------------//
    Tregistro valor;
	Tpagina pagina=0;
    
    do{    
    //--------------- Exibir menu ---------------------//
        system("cls");
        puts("\n\t\t\t\tARVORE B - ORDEM 2\n");
        puts("\t1 - INSERIR ELEMENTO\n \t2  - IMPRIMIR ARVORE\n \t0  - SAIR");
        printf("\nINFORME SUA OPCAO:\n");
        scanf("%d", &op);//Escolha da Opção
        
        switch(op){
        //Opção de exibir lista
    		case 1:{
    			printf("Informe um elemento: ");
    			scanf("%d", &valor);
    			pagina = insere(valor, pagina);
				break;
			}
    			
    		case 2: imprime(pagina,0); break;
    			
	    	default:
	    		puts("OPCAO INCORRETA,TENTAR NOVAMENTE.");break;
	      
	        }
		getch();
	}while(op!=0);
}

Tregistro* pesquisar(int chave, Tpagina a){
	int i =0;
	if(a==NULL) return NULL;
	while(i < a->n && chave> a->registro[i].chave)
		i++;
	if(chave == a->registro[i].chave) 
		return &a->registro[i];
	else 
		return pesquisar(chave, a->folha[i]);
}

void insere_na_pagina(Tpagina pag, Tregistro reg , Tpagina pag_direita){
	int i;
	for(i = pag->n; (i>0 && reg.chave < pag->registro[i-1].chave) ; i--){
		pag->registro[i] = pag->registro[i-1];
		pag->folha[i+1] = pag->folha[i];
	}
	pag->registro[i] = reg;
	pag->folha[i+1] = pag_direita;
	pag->n++;
}	
int insere_na_arvore(Tregistro reg, Tpagina pag, Tregistro* reg_retorno, Tpagina* pag_retorno){
	int cresceu;
	int j,i=0;
	
	if(pag == NULL){ //página não existe
		*reg_retorno = reg;
		*pag_retorno = NULL;
		return TRUE;
	}
	
	while(i<pag->n && reg.chave > pag->registro[i].chave)
		i++;
	
	if(reg.chave == pag->registro[i].chave)
		return FALSE; //dado já existe
		
	cresceu = insere_na_arvore(reg, pag->folha[i], reg_retorno, pag_retorno);
	
	if(!cresceu)
		return FALSE;
		
	if(pag->n < maximo){ //tem espaço
		insere_na_pagina(pag, *reg_retorno, *pag_retorno);
		return FALSE;
	}
	
	// pagina existe, quebrar a pagina
	Tpagina pag_temp;
	pag_temp = (Tpagina) malloc(sizeof(pagina));
	pag_temp->n = 0;
	pag_temp->folha[0]=NULL;
	
	if (i<ordem+1){
		insere_na_pagina(pag_temp, pag->registro[maximo-1], pag->folha[maximo]);
		pag->n--;
		insere_na_pagina(pag, *reg_retorno, *pag_retorno);
	}
	else
		insere_na_pagina(pag_temp, *reg_retorno, *pag_retorno);
	
	for(j = ordem+2; j<=maximo; j++)
		insere_na_pagina(pag_temp, pag->registro[j-1], pag->folha[j]);
	
	pag->n = ordem;
	pag_temp->folha[0] = pag->folha[ordem+1];
	*reg_retorno = pag->registro[ordem];
	*pag_retorno = pag_temp;
	return TRUE;		
}	
Tpagina insere(Tregistro reg, Tpagina pag_raiz){
	int cresceu;
	Tregistro reg_retorno;
	Tpagina pag_retorno, pag_temp;
	
	cresceu = insere_na_arvore(reg, pag_raiz, &reg_retorno, &pag_retorno);
	
	if(cresceu){
		pag_temp = (Tpagina)malloc(sizeof(pagina));
		pag_temp->n = 1;
		pag_temp->registro[0] = reg_retorno;
		pag_temp->folha[0] = pag_raiz;
		pag_temp->folha[1] = pag_retorno;
		return pag_temp;
	}
	return pag_raiz;
}	

void imprime(Tpagina pag, int nivel){
	int i;
	if(pag == NULL) return;
	printf("Nivel %d : ", nivel);
	for(i=0; i<pag->n; i++)	
		printf(" %d ", pag->registro[i].chave);
	printf("\n");
	for(i=0; i<=pag->n; i++)	
		imprime(pag->folha[i], nivel+1);
}
















