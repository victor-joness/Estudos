
//As funções que vão servir para o desenvolvimento do TAD Vetor.

/*Victor Jones Mesquita de Sousa - 511418
  Victor Manoel Pinheiro Coutinho - 497315
  Antonio Mauricio Rodrigues Araujo Junior - 500749
  LAILSON SERAFIM DE SOUZA - 494870
*/

/*Tipo estruturado que representa um Vetor*/
typedef struct vetor Vetor;

//Funções exportadas

//cria Função que cria um vetor de tamanho n.
Vetor* criaVetor(int n);

//libera Função que libera a memória alocada para um vetor.
void liberaVetor(Vetor* v);

//tamanho Função que retorna o tamanho de um vetor.
int tamanhoVetor(Vetor* v);

//acessa Função que acessa o conteúdo de uma determinada posição i do vetor.
float acessa(Vetor* v, int i);

//atribui Função que atribui um conteúdo c a uma determinada posição i do vetor.
void atribui(Vetor* v, int i, float c);

//ordena Função que ordena um vetor em ordem crescente.
void ordena(Vetor* v);

//listar Função que lista todos os elementos do vetor.
void listarVetor(Vetor* v);

//somar elementos Função que retorna a soma de todos os elementos de um vetor.
float somaElementosVetor(Vetor* v);

/*somar vetores Função que retorna um vetor resultante da soma dos elementos
correspondentes de dois vetores. A função deverá verificar se os vetores tem
o mesmo tamanho.*/
Vetor* somaVetores(Vetor* v1, Vetor* v2);
