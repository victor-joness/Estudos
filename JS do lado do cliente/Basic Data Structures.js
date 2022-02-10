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

//Remover itens usando splice(), splice()nos permite fazer exatamente isso: remover qualquer número de elementos consecutivos de qualquer lugar em um array.
//splice()pode ter até 3 parâmetros, mais vamos usar 2, por enquanto , o indice do inicio e quantos depois do indice de inicio vamos retirar
//assim como os outros, splice tambem retorna aquilo que removeu
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
console.log(newArray);
//aqui temos outro exemplo
const arr = [2, 4, 5, 1, 7, 5, 2, 1]; //vamos remover da posição 1 e contar 4 elementos a partir dele e contando com ele.
arr.splice(1,4)
console.log(arr);

//Adicionar itens usando splice(),Lembra no último desafio que mencionamos que splice()pode levar até três parâmetros? Bem, você pode usar o terceiro parâmetro, 
//composto por um ou mais elementos, para adicionar ao array. 
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //removemos o 12 e adicionamos o 13 e 14

//temos outro exemplo
function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//Copiar itens da matriz usando slice(),Em vez de modificar um array, slice()copia ou extrai um determinado número de elementos para um novo array, deixando o array chamado intocado.
//slice()leva apenas 2 parâmetros — o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual interromper a extração 
//(a extração ocorrerá até, mas não incluindo o elemento neste índice).
//basicamento um indice de inicio e o de fim, contando apenas o de inicio
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions);
console.log(todaysWeather);
//temos outro exemplo
function forecast(arr) {
    arr = arr.slice(2,4)
    return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Copiar um Array com o Operador Spread, A sintaxe de propagação simplesmente se parece com isso:...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);
//temos outro exemplo aqui

function copyMachine(arr, num) {
    let newArr = [];
    let contador = 0;
    while (num >= 1) {
      newArr[contador] = [...arr];
      num--;
      contador++;
    }
    return newArr;
}
  
console.log(copyMachine([true, false, true], 2));

//Combine Arrays com o Operador Spread, Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou inserir todos os elementos de um array em outro, em qualquer índice.
let thisArray2 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray2 = ['basil', 'cilantro', ...thisArray2, 'coriander'];
console.log(thatArray2)
//temos outro exemplo
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment,  'is', 'fun']; // Change this line
    return sentence;
}
console.log(spreadOut());

//Verifique a presença de um elemento com indexOf(), indexOf()recebe um elemento como parâmetro e, quando chamado, retorna a posição, ou índice, desse elemento, ou -1se o elemento não existe no array.
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
console.log(fruits.indexOf('dates'));
console.log(fruits.indexOf('oranges'));
//outro exemplo
function quickCheck(arr, elem) {
    if( arr.indexOf(elem) == -1){
      return false;
    }
    else{
      return true;
    }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//Iterar através de todos os itens de uma matriz usando loops For


function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) == -1){
          newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));
//temos outro exemplo
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
//Crie arrays multidimensionais complexos
let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    [['deep'],['concat', false, true, 'spread', 'array']],
    [[['deeper'],['mutate', 1327.98, 'splice', 'slice', 'push']]],
    [[[['deepest'],['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]]
]
//esse array tem 5 niveis de complexidade, poi são 5 array aninhados um dentro do outro;

//Adicionar pares de valores-chave a objetos JavaScript
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};
//podemos adicionar novas propriedades a partir do objeto ja criado
tekkenCharacter.origin = "south coreia";
console.log(tekkenCharacter);
tekkenCharacter["cidade natal"] = "rio de janiero "; //é usada quando se tem espaço ou quando se quer usar uma variavel
console.log(tekkenCharacter);
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
/*
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};*/
//temos outro exemplo
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
//é comum usar [] quando aquela propiedade do objeto não existe e usar . quando ja existe
foods.apples = 20;
console.log(foods)

//Modificar um objeto aninhado dentro de um objeto
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  //podemos usar a mesma coisa de . e [] para acessar e modificar
  nestedObject.data.onlineStatus.busy = 10;
  console.log(nestedObject);

//temos outro exemplo
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data["ofline"] = 20;
console.log(userActivity);

//Nomes de propriedade de acesso com notação entre colchetes
