import Collections = require('typescript-collections');

class opinioes{
    nota: number;
    comentarios: string;

    constructor(nota:number, comentarios: string){
        this.nota = nota;
        this.comentarios = comentarios;

        try{if(nota > 2 || nota < -2) {
            throw new RangeError();
          }else {
              this.nota = nota;
            console.log("a nota alocadaa foi :"+ nota);
          }}
        catch(e){
            if (e instanceof RangeError){
                console.log("Escolha uma nota entre -2 e 2 ");
            } else { 
                throw RangeError(); 
            }
        }


        try{if(this.comentarios.length > 140 || this.comentarios.length < 0) {
            throw new RangeError();
          }else {
                this.comentarios = comentarios;
                console.log("o comentario alocado foi : "+ this.comentarios);
          }}
        catch(e){
            if (e instanceof RangeError){
                console.log("escrevar um comentario com no maximo 140 caracteres e nao nulo");
            } else { 
                throw RangeError(); 
            }
        }
    }

    toString() {
		return "Opinioes [nota=" + this.nota + ", comentario=" + this.comentarios + "]";
	}
}

let victor = new opinioes(6,"muitowfdffsyghdfiofgsdfgsfsfsdfsfdsfdsfuyghdfioghfduighfdiuygghrghndlfkuhgbefghgfhfghdghoifdeuyghfriuyghiufodhgfdjgfhdlgufdhgdfgdjgfbndlkfhgbdghjkbfdghdj");

console.log("==================");

let joao = new opinioes(2,"muito bommm");
console.log(joao.toString());