#include <stdio.h>
#include <stdlib.h>
int main () {
   int s;
   printf("coloque quantos supermercados tem na sua regiao ate 99: ");
   scanf("%d", &s);
   float preco[ s ];
   int i;
   float gramas[ s ];
   float multi[ s ];
   float divisao [ s ];
   int menor;

   if(s >= 100){
        printf("ERROR REVEJA SEUS DADOS");
        return 0;
   }

   for ( i = 0; i < s; i++ ) {
      printf("Entre com o valor por grama do %d mercado :\n", i+1);
      scanf("%f", &preco[i]);
        if(preco[i] > 1000){
            printf("ERROR, PRECO MAIOR QUE B$1000");
            return 0;
        }
   }

   for ( i = 0; i < s; i++ ) {
      printf("Entre com as grama do %d mercado :\n", i+1);
      scanf("%f", &gramas[i]);
        if(gramas[i] > 1000){
            printf("ERROR, GRAMAS MAIOR QUE 1KG");
            return 0;
        }
   }

   for (i = 0; i < s; i++ ) {
      printf("Nota %d = %4.2f por %5.2f gramas \n", i+1, preco[i],gramas[i] );
   }

   for (i = 0; i < s; i++ ) {
       divisao[i] = 1000 / gramas[i];
       multi[i] = divisao[i] * preco[i];
   }

   for (i = 0; i < s; i++){
        if (multi[i] < multi[1]){
            menor = multi[i];
        }
    }

    printf("voce vai gastar %d no %d mercado!!!\n", menor, i);


   return 0;
}
