#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<string.h>

#define MAX 23

typedef struct{
	int chave;
	int valor;
} Telemento;
        
typedef struct{
        Telemento elemento[MAX];
        int n;
        } Tlista;

int hashing(int chave);
void criar(Tlista *);
int tamanho(Tlista);
int elemento(Tlista, int, Telemento *);
void exibir(Tlista );
int inserir(Tlista *, Telemento);
//--------------TRATAMENTO DE COLISÕES----------------//
float taxaOcupacao(Tlista);
