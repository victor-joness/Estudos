#include "lib.h"


//Programa principal
int main()
{   
    int op, hash, i, pos;
    Tlista L;
	Telemento dado, aux;
	
    criar(&L);
    
    do{    
    //Exibir menu
        system("cls");
        puts("\n\t\t\t\tEDITOR DE LISTAS\n");
        puts("\t1  - EXIBIR LISTA\n\t2  - INSERIR\n\t3  - ENCONTRAR UM ELEMENTO\n\t4  - TAXA DE OCUPACAO\n\t0  - SAIR");
        printf("\nINFORME SUA OPCAO:\n");
        scanf("%d", &op);//Escolha da Opção
        
        switch(op)
        {
        //Opção de exibir lista
    		case 1:
            {
    			 exibir(L);
    		}break;
    	//inserir
    		case 2:
            {
                printf("Informe uma chave: ");
                scanf("%d", &dado.chave);
                
                printf("Informe um valor: ");
                scanf("%d", &dado.valor);
                
                hash = inserir(&L, dado);
                
                printf("Inserido, indice = %d", hash);
                
            }break; 
            

           
            //Buscar um elemento 
            case 3:
            {
                 
				 printf("Informe a chave para o elemento:");
				 scanf("%d", &dado.chave);
				 hash = hashing(dado.chave);
				 printf("Hash = %d\n", hash);
				 if(elemento(L, hash, &dado)==1){
				 	printf("Chave: %d\nValor = %d", dado.chave, dado.valor);
				 	
				 }
            }break;
            
            
            //taxa de ocupação
            case 4:
            {
    		     printf("Taxa de ocupacao = %f", (float)taxaOcupacao(L));
    		}break;
    		

            //Opção de sair    
    		case 0:
            {
    		     printf("ENCERRANDO PROGRAMA");
    		     return 0;
    		}break;
    		
    		// Outra opção nao oferecida
    		default:
    			puts("OPCAO INCORRETA,TENTAR NOVAMENTE.");break;
      
        }
	getch();
    }while(op!=0);
  
  system("PAUSE");	
  return 0;
}
