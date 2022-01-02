import Collections = require('typescript-collections');

let autores = new Collections.LinkedList<string>();


class Catalogo{

    id: number;
    titulo: string;
    data: string;
    autorLivros: string;
    
    constructor(id: number,titulo: string,data: string, autor: string){
        this.id = id;
        this.titulo = titulo;
        this.data = data;
        autores.add(autor);
    }

    getId(){
        return this.id;
    }

    getTitulo(){
        return this.titulo;
    }

    getData(){
        return this.data;
    }

    getAutor(){
        return autores.toString();
    }

    getAutorLivros(){
        return this.autorLivros;
    }

    setAutorLivros(AutorLivro: string){
        this.autorLivros = AutorLivro;
    }


    setId(id: number){
        this.id = id;
    }

    setTitulo(titulo: string){
        this.titulo = titulo;
    }

    setData(data: any){
        this.data = data;
    }

    getTipo(x: Catalogo, y: string){
        return null;
    }


    /* this.id e x sempre vao ser 1, tenho que fazert alguma forma do i cair 0 e 4 e imprimir apenas quando cair nesse numero, pelo for */
    toAutores(){
        return autores.toString();
    }
    
    toString() {
		return `type = Catálogo : id=${this.getId()} , titulo=${this.getTitulo()} , data=${this.getData()}`
	}
}

class Livros extends Catalogo{
    editora: string;
    publicacao: number;
    

    constructor(id: number,titulo: string,data: string,autor: string, editora: string, publicacao:number){
        super(id,titulo,data, autor);
        this.autorLivros = autor;
        this.editora = editora;
        this.publicacao = publicacao;
    }

    getEditora(){
        return this.editora;
    }

    setEditora(editora: string){
        this.editora = editora;
    }

    getAutorLivros(){
        return this.autorLivros;
    }

    setAutorLivros(AutorLivro: string){
        this.autorLivros = AutorLivro;
    }

    getPublicacao(){
        return this.publicacao;
    }

    setPublicacao(publicacao: number){
        this.publicacao = publicacao;
    }

    toString() {
		return `type = livro: id=${this.getId()} , titulo=${this.getTitulo()} , data=${this.getData()}, autores=${this.getAutorLivros()}, editora =${this.getEditora()}, publicacao=${this.getPublicacao()}`
	}
}

class Cd extends Catalogo{
    musica: string;
    genero: string;
    autorLivros: string;
    constructor(id: number,titulo: string,data: string,autor: string,  genero: string, musica: string){
        super(id, titulo, data, autor);
        this.autorLivros = autor;
        this.musica = musica;
        this.genero = genero;
    }

    getGenero(){
        return this.genero;
    }

    setGenero(genero: string){
        this.genero = genero;
    }

    getMusica(){
        return this.musica;
    }

    setMusica(musica: string){
        this.musica = musica;
    }

    toString(){
        return `type = Cd: id=${this.getId()} , titulo=${this.getTitulo()} , data=${this.getData()}, autor=${this.getAutorLivros()}, genero = ${this.getGenero()}, musica = ${this.getMusica()}`
    }
}

class Dvd extends Catalogo{
    tipo: string;
    descricao: string;
    autorLivros: string;
    constructor(id: number,titulo: string,data: string, autor: string ,tipo: string, descricao: string){
        super(id, titulo, data,autor);
        this.autorLivros = autor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    getTipo(){
        return this.tipo;
    }

    getAutorLivros(){
        return this.autorLivros;
    }

    setAutorLivros(AutorLivro: string){
        this.autorLivros = AutorLivro;
    }

    getDescricao(){
        return this.descricao;
    }

    setDescricao(descricao: string){
        this.descricao = descricao;
    }

    setTipo(tipo: string){
        this.tipo = tipo;
    }

    toString(){
        return `type = Dvd: id=${this.getId()} , titulo=${this.getTitulo()} , data=${this.getData()}, autor=${this.getAutorLivros()}, tipo = ${this.getTipo()}, descrcao = ${this.getDescricao()}`
    }
}

class Revista extends Livros{
    volume: number;
    assunto: string;
    constructor(id: number,titulo: string,data: string,autor: string, editora: string, publicacao:number, volume: number, assunto: string){
        super(id, titulo, data,autor, editora, publicacao);
        this.volume = volume;
        this.assunto = assunto;
    }

    getVolume(){
        return this.volume;
    }

    getAssunto(){
        return this.assunto;
    }

    setVolume(volume: number){
        this.volume = volume;
    }

    setAssunto(assunto: string){
        this.assunto = assunto;
    }

    toString(){
        return `type = Revista: id=${this.getId()} , titulo=${this.getTitulo()} , data=${this.getData()}, autor=${this.getAutorLivros()}, editora =${this.getEditora()}, publicação=${this.getPublicacao()},volume=${this.getVolume()}, assunto=${this.getAssunto()}`
    }

    
}

/* resolver depois isso, uma lista que contem o tipo lista */


let listaLivros = new Collections.LinkedList<Livros>();
let listaCd = new Collections.LinkedList<Cd>();
let listaDvd = new Collections.LinkedList<Dvd>();
let listaRevista = new Collections.LinkedList<Revista>();

/* para testar vou criar 1 objeto de cada classe e depois ir analisando */
let pedefeijao = new Livros(1, "pedefeilão" , "20/10/2000", "joao", "panini", 2000);
let acdc = new Cd(2, "acdc", "15/06/2002", "gustavo", "rock", "faixa 3");
let teto = new Dvd(3, "teto", "16/07/2020", "tetin", "pop", "pop and trap");
let magazine = new Revista(4, "magazine", "25/12/2021", "magazineluiza" , "panini" , 2021, 3,"economia");

/* mais de 1 */
let sol = new Livros(1, "sol" , "20/10/2000", "alexandre", "panini", 2010);
let post = new Cd(2, "post", "15/06/2002", "jaimes", "pop", "faixa 2");

/* add as suas respectivas listas. */

listaLivros.add(pedefeijao);
listaCd.add(acdc);
listaDvd.add(teto);
listaRevista.add(magazine);

/* vai ser usado para pesquisar por titulo  */
listaLivros.add(sol);
listaCd.add(post);

/* agora vamos tentar pesquisar por tipo, imprimindo somente livros*/
for(let i = 0; i < listaLivros.size();i++) {
    console.log(listaLivros.elementAtIndex(i).toString());
}

//imprimindo somente cd
for(let i = 0; i < listaCd.size();i++) {
    console.log(listaCd.elementAtIndex(i).toString());
}
//imprimindo somente dvd
for(let i = 0; i < listaDvd.size();i++) {
    console.log(listaDvd.elementAtIndex(i).toString());
}
//imprimindo somento revista
for(let i = 0; i < listaRevista.size();i++) {
    console.log(listaRevista.elementAtIndex(i).toString());
}

console.log("------------");


//pronto, conseguimos pesquisar oque quisermos pelo tipo.
//agora Vamos imprimir todos com somente um comando

let todos = new Collections.LinkedList<unknown>()

todos.add(listaRevista);
todos.add(listaCd);
todos.add(listaLivros);
todos.add(listaDvd);
				
for(let i = 0; i < todos.size();i++) {
	console.log(todos.elementAtIndex(i).toString());
}

//tudo certo, conseguir imprimir tudo
console.log("------------");

//agora vamos pesquisar itens por titulo

let pesquisa: string = "sol";
let contador: number = 0;

for(let i = 0; i < listaLivros.size();i++) {
    if(listaLivros.elementAtIndex(i).getTitulo() == pesquisa) {
        console.log("temos esse titulo");
        break;
    }
    else {
        contador++;
    }
    if(contador == listaLivros.size()) {
        console.log("Nao temos esse titulo");
    }
}

console.log("------------");
//conseguimos, basta eu troca a String pesquisa quando eu quiser procura, a string pesquisa tbm poderia ser um valor passado pelo usuario
//algumas coisas nao conseguir encapsular, porem todos as funcionalidades estao funcionando.

