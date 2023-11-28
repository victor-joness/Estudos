/*
MATRÍCULA 500749 - ANTONIO MAURICIO RODRIGUES ARAUJO JUNIOR
MATRÍCULA 494870 - LAILSON SERAFIM DE SOUZA
MATRÍCULA 511418 - VICTOR JONES MESQUITA DE SOUSA
MATRÍCULA 497315 - VICTOR MANOEL PINHEIRO COUTINHO
*/

/*Arquivo de protótipos de fila.c*/

/*Tipo exportado*/
typedef struct fila Fila;

/*Cria uma fila vazia*/
Fila* criaFila();

/*Insere um novo elemento no início da fila*/
void insere(Fila *f, float valor);

/*Imprime todos os elementos da fila*/
void filaImprime(Fila *f);

/*Verifica se a fila está vazia, */
int filaVazia(Fila *f);

/*Remove o elemento da fila*/
float remova(Fila *f);

/*Libera toda a fila*/
void filaLibera(Fila *f);
