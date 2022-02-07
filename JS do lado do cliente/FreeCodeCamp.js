
//Regular expressions usando .test();
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);
console.log(result1);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2);

//Combine uma string literal com diferentes possibilidades usando somente um | our
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
console.log(result3);

//Ignorar maiúsculas e minúsculas durante a correspondência, podemos usar sinalizadores, temos aqui o i, que faz ignorar letras maiscula e minusculas
let myString2 = "freeCodeCamp";
let fccRegex = /freecodeCamp/i; 
let result4 = fccRegex.test(myString2);
console.log(result4);

//Extrair correspondências, podemos retornar a string caso a gente ache ele, e usamos a funcao .match(/regex/)
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5= extractStr.match(codingRegex); 
console.log(result5);

//Encontre mais do que a primeira partida, Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez. , para isso use o g sinalizador, podemos usar 2 sinalizadores juntos

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex);
console.log(result6)

//Combine qualquer coisa com um sinalizador curinga, Pensar em todas as palavras que correspondem, digamos, a um erro de ortografia levaria muito tempo.
//por isso temos o sinalizador . onde, esse ponto pode ser qualquer coisa, contanto que ele siga a ordem seguinte/anterior
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // run, sun, fun, pun, nune bun
let result7 = unRegex.test(exampleStr);
console.log(result7);

//Corresponder a um único caractere com várias possibilidades
/*
Por exemplo, você deseja corresponder a bag, bige bugmas não a bog. Você pode criar o regex /b[aiu]g/para fazer isso. The [aiu]é a classe de 
caracteres que corresponderá apenas aos caracteres a, iou u.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex);
console.log(result8);


