import Collections = require('typescript-collections');

class Animais{
    nome: string;
    peso: number;
    constructor(nome:string, peso:number){
        this.nome = nome;
        this.peso = peso;
    }

    getNome () {
        return this.nome;
    }

    getPeso () {
        return this.peso;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    setPeso(peso:number){
        this.peso = peso;
    }

    toString() {
		return `Animais = nome: ${this.getNome()}, peso = ${this.getPeso()}`;
	}

    emiteSom(){
        console.log("som de "+ this.getNome());
    }
}

class Ave extends Animais{
    constructor(nome: string, peso: number){
        super(nome, peso);
    }

    isVoa(x: boolean){
        if( x == true){
            console.log("A ave voa");
        }
        else{
            console.log("A ave nao voa")
        }
    }
}

class Mamifero extends Animais{
    constructor(nome: string, peso: number){
        super(nome, peso);
    }

    isRumina(x: boolean){
        if(x == true){
            console.log("é um mamifero herbívoro");
        }
        else{
            console.log("Não é um mamifero herbívoro");
        }
    }
}

let Vocabulario = new Collections.LinkedList<string>();
class Papagaio extends Ave{
    constructor(nome: string, peso: number){
        super(nome, peso);
    }

    novaFrase(frase: string){
        Vocabulario.add(frase);
    }

    getList(){
        return Vocabulario.toString();
    }
}

class Avestruz extends Ave{
	constructor(nome :string , peso: number) {
		super(nome, peso);
	}
}

class Cachorro extends Mamifero{
	constructor(nome: string , peso: number) {
		super(nome , peso);
	}
}

class Vaca extends Mamifero{
	constructor(nome:string , peso: number) {
		super(nome, peso);
	}
}

let cobra = new Animais("cobra", 25);

console.log(cobra.getNome());
cobra.emiteSom();

let galinha = new Ave("galinha", 2);
galinha.isVoa(false);

let boi = new Mamifero("boi", 200);
boi.isRumina(true);

let joao = new Papagaio("joao", 1);

joao.novaFrase("acordei");
joao.novaFrase("tudo bem");

console.log(joao.getList());