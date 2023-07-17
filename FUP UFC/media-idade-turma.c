/**
    Questão 03:
    algoritmo:
        =>Receber quantos alunos tem na turma de calouro = quantidade
            =>somar a idade de todos os alunos da turma = idade total
            =>calcular a media de idade dessa turma de calouro = idade total / quantidade
            =>exibir na tela a media de idade da turma 
            
        =>Filtrar quantos da turma são maiores ou iguais a 16 anos = quantidade
            =>receber a altura desse grupo 
            =>somar a altura de todos os alunos do grupo = altura-total
            =>calcular a media de altura desse grupo = altura-total/quantidade 
            =>exibir a altura media desse grupo 
        
**/



#include <stdio.h>

int
main ()
{
  int alunos;
  int x;
  int ida[alunos];
  int i, soma = 0;
  float media;
  int alunosm;
  float alt[alunos];

  printf ("Informe quantos alunos tem na turma : ");
  scanf ("%d", &alunos);
  x = alunos - 1;

  for (i = 0; i <= x; i++)
    {
      printf ("entre com a idade do %d aluno : ", i + 1);
      scanf ("%d", &ida[i]);
      soma += ida[i];
    }
  media = soma / alunos;	//media da idade 
  printf ("A media da idade da turma C) :: %2.1f", media);


  printf ("\nquantos alunos da turma SC#o maiores de 15 anos ? ");
  scanf ("%d", &alunos);
  x = alunos - 1;

  for (i = 0; i <= x; i++)
    {
      printf ("entre com a altura do %d aluno acima de 15 anos : ", i + 1);
      scanf ("%f", &alt[i]);
      soma += alt[i] - 10;
    }
  media = soma / alunos;	//media de altura 
  printf ("A media da altura da turma C) :: %3.1f", media);
}

