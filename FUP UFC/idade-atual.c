#include <stdio.h>
#include <time.h>
/** Analise
x = 25/06/2000
hj = 24/05/2021  
a = 20
m = 11 meses
d = 19 dias

Algoritimo :
receber an , mn , dn;
receber aa , ma , da;

a = aa - an 

se (ma > mn) nao mexo no a 

se (ma == mn ) nao mexo no a 

se (ma < mn) diminuo 1 no a 

d = da - dn 

se (da > dn) nao mexo no d 

se (da = dn) não mexo no d

se (da < dn) d passa a ser d = dn - da 

lembrando que posso adicionar +12 no mes e +30 no dias para adcionar aos numeros negativos
escrever no final o dia , mes e ano que a pessoa tem 
**/

int main()
{
    int an , mn , dn ; 
    printf("Escreva o dia que voce nasceu = ");
    scanf("%d", &dn);
    printf("Escreva o mes que voce nasceu = ");
    scanf("%d",  &mn);
    printf("Escreva o ano que voce nasceu = ");
    scanf("%d",  &an);
    
    int aa = 2021 , ma = 05 , da = 26;
    
    int a = aa - an ; //ano global
    int d = da - dn ; //dia global
        
        if (ma < mn){  //situação caso o mes atual seja maior que o mes de nascimento
            a = a - 1 ;
            int m = ma - mn + 12;
            if (da > dn){
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da == dn){
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da < dn){
                d = da - dn + 30 ;
                int M = m - 1 ;
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", M); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ;
            }
        } //quando o mes atual é menor que o mes de nascimento
            
        if (ma > mn) {
            int m = ma - mn ;
            if (da > dn){
                
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da == dn){
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da < dn){
                d = da - dn + 30 ;
                int M = m - 1 ;
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", M); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ;
            }
            
        } //quando o mes atual é maior que o mes de nascimento
        
        if (ma == mn) {
            int m = ma - mn ;
            if (da > dn){
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da == dn){
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", m); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ; 
                
            }
            if (da < dn){
                d = da - dn + 30 ;
                int M = m - 1 ;
                printf ("Voce tem %d", a); printf (" anos e "); printf ("%d", M); printf (" meses e "); printf ("%d" , d); printf (" dias");
                return 0 ;
            }
} //quando o mes atual é o mesmo do mes de nascimento

}


