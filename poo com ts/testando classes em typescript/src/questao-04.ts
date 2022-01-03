import Collections = require('typescript-collections');


class Funcionarios{
    nome: string;
    matricula:  number;
    Tdeservico: number;
    data: string;
    salario: number;

    constructor(nome: string, matricula: number, Tdeservico: number, data: string, salario: number){
        this.nome = nome;
        this.matricula = matricula;
        this.Tdeservico = Tdeservico;
        this.data = data;
        this.salario = salario;
    }

    getMatricula() {
		return this.matricula;
	}

	getTdeservico() {
		return this.Tdeservico;
	}

	getSalario() {
		return this.salario;
	}

	setNome(nome: string) {
		this.nome = nome;
	}

	setMatricula(matricula: number) {
		this.matricula = matricula;
	}

	setTdeservico(tdeservico: number) {
		this.Tdeservico = tdeservico;
	}

	setSalario(salario: number) {
		this.salario = salario;
	}

	getData() {
		return this.data;
	}

	setData(data: string) {
		this.data = data;
	}
}

class Assalariado extends Funcionarios{
    tempo: number;
    constructor(nome: string, matricula: number, Tdeservico: number, data: string, salario: number, tempo: number){
        super(nome, matricula, Tdeservico, data, salario);
        this.tempo = tempo;
    }

    getSalario() {
        let conta = ((this.tempo * 10) * this.salario) / 100;
        return this.salario + conta; 
	}
}

class Comissionado extends Funcionarios{
    comissoes: number;
    constructor(nome: string, matricula: number, Tdeservico: number, data: string,comissoes: number) {
		super(nome, matricula, Tdeservico, data , 0);
		this.comissoes = comissoes;
	}

    getSalario() {
        return this.salario + (this.comissoes * 100);
	}

}

class Horista extends Funcionarios{
	constructor(nome: string, matricula: number, Tdeservico: number, data: string, salario: number,) {
		super(nome, matricula, Tdeservico, data, salario);
	}

    getSalario() {
        return this.salario * this.getTdeservico(); 
	}
}


let victor = new Assalariado("victor", 10, 1.5, "14/12/2020", 1000, 1);

console.log(victor.getSalario());

let joao = new Comissionado("joao", 15, 150, "10/04/2021", 15);

console.log(joao.getSalario());

let pedro = new Horista("pedro", 20, 150, "10/02/2007", 12);

console.log(pedro.getSalario());