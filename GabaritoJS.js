
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

let a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos
console.log(a);

//como declaramos points antes, temos que ele é o nosso objeto e dentro dele tem uma propiedade chamada dist que é uma função, que calcula distância entre nossos 2 pontos
points.dist = function() { // Define um método para calcular a distância entre
    // pontos
    var p1 = this[0]; // Primeiro elemento do array que chamamos
    var p2 = this[1]; // Segundo elemento do objeto "this"
    var a = p2.x-p1.x; // Diferença em coordenadas X
    var b = p2.y-p1.y; // Diferença em coordenadas Y
    return Math.sqrt(a*a + // O teorema de Pitágoras
    b*b); // Math.sqrt() calcula a raiz quadrada
   };
points.dist()
console.log(points.dist())

//um claro exemplo de como se fazer uma funcao em js, temos aqui uma funcao de fatorial
function factorial(n) { // Uma função para calcular fatoriais
    var product = 1; // Começa com o produto de 1
    while(n > 1) { // Repete as instruções que estão em {}, enquanto a
    product *= n; // Atalho para product = product * n;
    n--; 
    } 
    return product; // Retorna o produto
}
console.log(factorial(4));



