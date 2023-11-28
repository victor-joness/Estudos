#include <stdio.h>
#include <stdlib.h>

int i,m,n;

int preencher(int tamanho, int numero, int vetor[tamanho]){
    for(i = 0; i < tamanho; i ++){
        if(vetor[i] == numero){
            m++;
        }
    }
    
    if(m > 0){
        printf("voce ganhou");
    }
    else{
        printf("voce perdeu");
    }
}

int main()
{
    int i;
    int tamanho;
    printf("Escolha o tamanho do vetor: ");
    scanf("%d", &tamanho);
    
    int numero;
    printf("Escolha o seu numero da sorte : ");
    scanf("%d", &numero);
    
    int vetor[tamanho];
    for(i=0; i < tamanho; i++){
        printf("Escolha os valores do seu vetor : ");
        scanf("%d", &vetor[i]);
    }
    
    preencher(tamanho, numero, vetor);
    

}
