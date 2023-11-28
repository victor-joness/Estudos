#include <stdio.h>

int main()
{
    int n1, n2, i, encontrado = 0, resultado = 0;
    n1 = 2;

    printf("Digite o um valor: ");
    scanf("%d", &n2);

    do{
        for (i = 2; i <= n2 / 2; i++){
            if (n2 % i == 0){
            resultado++;
            break;
            }
        }

        if (resultado == 0){
            printf("%d ", n2);
            break; 
        } else{
            resultado = 0;
        }
        n2--;
    }
    while (n1 <= n2);

    return 0;
}
