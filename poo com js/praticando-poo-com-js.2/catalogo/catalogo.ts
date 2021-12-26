import List from "./List.js"

class Catalogo{

    name: string;
    age: number;
    id: number;
    titulo: string;
    data: number;
    
    constructor(name: string, age: number,id: number,titulo: string,data: number){
        this.name = name;
        this.age = age;
        this.id = id;
        this.titulo = titulo;
        this.data = data;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getId(){
        return  this.id;
    }

    getTitulo(){
        return this.titulo;
    }

    getData(){
        return this.data;
    }

    setName(name: string){
        this.name = name;
    }

    setAge(age: number){
        this.age = age;
    }

    setId(id: number){
        this.id = id;
    }

    setTitulo(titulo: string){
        this.titulo = titulo;
    }

    setData(data: number){
        this.data = data;
    }
    
    toString() {
		return `Catálogo: name=${this.getName} , age=${this.getAge} , id=${this.getId} , titulo=${this.getTitulo} , data=${this.getData}`
	}
}

class livros extends Catalogo{
    editora: string;
    publicacao: number;

    constructor(name: string, age: number,id: number,titulo: string,data: number, editora: string, publicacao:number){
        super(name,age,id,titulo,data);
        this.editora = editora;
        this.publicacao = publicacao;
    }
}

let ano1 = new Catalogo("victor", 20 , 5 , "teste2" , 26/12/2021);

console.log(ano1.getName());
