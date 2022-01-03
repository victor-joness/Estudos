import Collections = require('typescript-collections');

class Conta{
    numero: number;
    saldo: number;

    constructor(numero:number, saldo: number){
        this.numero = numero;
        this.saldo = saldo;
    }

    getNumero(){
        return this.numero;
    }

    getSaldo(){
        return this.saldo;
    }

    setNumero(numero: number){
        this.numero = numero;
    }

    setSaldo(saldo: number){
        this.saldo = saldo;
    }

    creditar(valor: number){
        this.saldo = this.saldo + valor;
    }

    debitar(valor: number){
        if(valor > this.getSaldo()){
            console.log("valor de saque maior que o saldo")
        }else{
            this.saldo = this.saldo - valor;
        }
    }

    creditarlista(lista: Collections.LinkedList<Conta> ,valor: number){
        for(let i = 0; i < lista.size(); i++) {
			(lista.elementAtIndex(i).creditar(valor));
		}
    }

    debitarlista(lista: Collections.LinkedList<Conta>,valor: number){
        for(let i = 0; i < lista.size(); i++) {
			(lista.elementAtIndex(i).debitar(valor));
		}
    }
}

class ContaPoupança extends Conta{
    constructor(numero: number, saldo: number){
        super(numero, saldo)
    }

    renderJuros(taxa: number){
        let saldo = this.getSaldo();
        this.setSaldo(saldo + (saldo * taxa / 100));
    }
}

class ContaInvestimento extends Conta{
    constructor(numero: number, saldo: number){
        super(numero, saldo);
    }

    debitarInvestimento(valor: number){
        this.setSaldo(this.getSaldo() - ((valor * 0.038) + valor))
    }
}

//criando minha lista vazia do tipo Conta
let lista = new Collections.LinkedList<Conta>();

//criando uma conta geral como indice
let Contas = new Conta(0, 0);

//criando as contas
let Conta1 = new Conta(1, 1000);
let Conta2 = new ContaPoupança(2, 1000);
let Conta3 = new ContaInvestimento(3, 1000);
let Conta4 = new ContaPoupança(4,1000);
let Conta5 = new Conta(5, 1000);

//adicionando as contas na lista
lista.add(Conta1);
lista.add(Conta2);
lista.add(Conta3);
lista.add(Conta4);
lista.add(Conta5);

//testando e imprimindo antes das mudanças

for(let i = 0; i < lista.size();i++) {
    console.log(lista.elementAtIndex(i).getSaldo());
}

//creditando e debitando

Contas.creditarlista(lista, 100);
Contas.debitarlista(lista, 50);

console.log("----------");
Conta3.debitarInvestimento(50);

//imprimindo e testando se debitou da conta, A conta 3 é de investimento por isso foi debitado 50 + (50 * 0.038) = 51.9
for(let i = 0; i < lista.size();i++) {
    console.log(lista.elementAtIndex(i).getSaldo());
}



//chamando render juros nas contas que forem poupança
Conta2.renderJuros(1);
Conta4.renderJuros(1);

console.log("----------");

//testando se o render juros funcionou
for(let i = 0; i < lista.size();i++) {
    console.log(lista.elementAtIndex(i).getSaldo());
}


