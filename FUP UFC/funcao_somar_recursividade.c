#include <stdio.h>

int somaR(int n){
    if(n == 0){
        return 0;
    }
    else{
        return n + somaR(n-1);
    }
}

int main()
{
    printf("resultado %d", somaR(5));
    return 0;
}
