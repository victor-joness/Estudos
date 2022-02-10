//basic data structures
//Use uma matriz para armazenar uma coleção de dados, exemplo array unidimensional, que tem apenas um array, não temos nada aninhado
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
//aceita, numbers, string, boleans, outros arrays, objetos
let yourArray = [true, 10, "victor", 5, null];
//Acesse o conteúdo de um array usando notação de colchetes, atraves de seu index
let ourArray = ["a", "b", "c"]; //podemos acessar os indices 0,1,2 e tambes modificalos posteriormente
console.log(ourArray[1]);
ourArray[1] = "victor";
console.log(ourArray[1])
//Adicionar itens a um array com push() e unshift(), os arrays são mutáveis, ou seja nao tem tamanho fixo.
//e com isso, usamos o .push e o .unshift pra adicionar itens,o push()método adiciona elementos ao final de uma matriz e unshift() 
//adiciona elementos ao início. Considere o seguinte:
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals);
//temos outro exemplo, usando os dois, então novamento, unshift no inicio e push no final
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9)
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

//Remover itens de um array com pop() e shift()
//Ambos push()e unshift()têm métodos correspondentes que são opostos quase funcionais: pop()e shift(). a unica diferença é que ambos não aceita paramentros
//ou seja, eles só removem 1 elemento por vez.
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
console.log(greetings);
//Também podemos retornar o valor do elemento removido com qualquer método como este:
let retorno = greetings.pop();
console.log(retorno);
//resumindo, shift remove no inicio e pop no final
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}  
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//




