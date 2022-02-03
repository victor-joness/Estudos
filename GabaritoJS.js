
//esse é um simples objeto em javascript e suas propiedades
let book = {
    preco: 10,
    paginas: 200,
    titulo: "joao e o pé de feijao"
};

//possoa acessar assim os valores
console.log(book.preco)
console.log(book["preco"]);

//posso criar novas propiedades sem que esteja declaradas antes
book.autor = "victor";
console.log(book);

//esse é um simples exemplo de array
let primes = [1, 2, 3, 4];

//assim que se acesar os valores de arrays
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]) //ou seja ele pega o 4 e diminiu 1, ou seja ele pega o elemeto do index 3, ou seja o ultimo elemento
//podemos atribuir mesmo depois de declaradas ou muda seu conteudo com o recebe
primes[4] = 9;

// Os arrays e objetos podem conter outros arrays e objetos:
//Um objeto com 2 propriedades e uma dessas prop é um array 
let books = {
    autores: ["victor", "joao"],
    preco: 200
};
console.log(books.autores);

//um array com objeto dentro dele, e tudo isso conseguimos acessar
let points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 }
]
console.log(points[1]);


