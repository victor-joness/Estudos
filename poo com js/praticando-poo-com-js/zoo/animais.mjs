import List from "./List.js";

let vocabulario = new List();
class Animais{

    constructor(nome, peso){
        this.nome = nome;
        this.peso = peso;
    }

    getname(){
        return this.nome;
    }

    getpeso(){
        return this.peso;
    }

    Setnome(String){
        this.nome = String;
    }

    Setpeso(Peso){
        this.peso = Peso;
    }

    toString() {
		return "Animais [Nome=" + this.nome + ", Peso=" + this.peso + "]";
	}

    emiteSom() {
		console.log("Som de " + this.nome);
	}	
}

let cobra = new Animais("cobra", 25);

cobra.emiteSom();
console.log(cobra.toString());
cobra.Setnome('victor');
cobra.emiteSom();
console.log(cobra.getname());

//testado todas as funcoes;

class Ave extends Animais{

    constructor(nome, peso){
        super(nome, peso);
    }

    isvoa(x){
        if(x == true) {
			console.log("A ave voa");
		}
		else {
			console.log("A ave nao voa");
		}
	}	
}

let galinha = new Ave("galinha", 2);
//testando a herannça
console.log(galinha.getname());
console.log(galinha.getpeso());

galinha.isvoa(true);

//funcionou

class Mamifero extends Animais{
    constructor(nome, peso){
        super(nome, peso);
    }

    isRumina(x) {
		if(x == true) {
			console.log("é um mamifero herbívoro");
		}
		else {
			console.log("Não é um mamifero herbívoro");
		}
	}
}

class Papagaio extends Ave{
    constructor(nome, peso){
        super(nome, peso);
    }

    novafrase(String){
        vocabulario.Add(String);
    }

    getlist(){
        return vocabulario;
    }

    getfrases(numero){
        for(let i=0; i < numero; i++){
            console.log(vocabulario.GetItem(i));
        }
    }
}

class Avestruz extends Mamifero{
    constructor(nome, peso){
        super(nome, peso);
    }
}

class cachorro extends Mamifero{
    constructor(nome, peso){
        super(nome, peso);
    }
}

class vaca extends Mamifero{
    constructor(nome, peso){
        super(nome, peso);
    }
}

let joao = new Papagaio("joao",20);

joao.isvoa(false);

joao.novafrase("tudo bem");
joao.novafrase("acordei");
joao.getlist(joao);

let tamanho = joao.getlist().Count();

joao.getfrases(tamanho);

let joaquina = new vaca("joaquina", 200);

console.log(joaquina.getpeso());