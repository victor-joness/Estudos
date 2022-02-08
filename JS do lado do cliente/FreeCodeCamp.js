//Regular expressions
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

//Combine as letras do alfabeto, temos outro sinalizador - , 'Hifen', onde podemos definir um intervalo [a-e] vai do a,b,c,d,e
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
//Em ordem, as três matchchamadas retornariam os valores ["cat"], ["bat"], e null.
//aqui temos outro exemplo, onde pegamos todos as letras do alfabeto
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;  
let result = quoteSample1.match(alphabetRegex);

//Combine números e letras do alfabeto, O uso do hífen ( -) para corresponder a um intervalo de caracteres não se limita a letras. 
//Também funciona para corresponder a um intervalo de números. -> /[0-5]/, podemos usar letras e numeros juntos
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/ig; // Change this line
let result10 = quoteSample2.match(myRegex1);

//Até agora, você criou um conjunto de caracteres que deseja corresponder, mas também pode criar um conjunto de caracteres que não deseja corresponder.
//usando o sinalizador ^ podemos definir oq não queremos -> /[^aeiou]/gi, corresponde a todos os caracteres que não sao vogais
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi; 
let result9 = quoteSample3.match(myRegex3);
//com isso não pegamos nenhum numero e nenhum vogal
console.log(result9)

//Corresponder a caracteres que ocorrem uma ou mais vezes, podemos usar o sinalizador +, lembre-se tem que ser um apos o outro
let difficultSpelling = "Mississippi";
let myRegex10 = /s+/gi; // Change this line
let result11 = difficultSpelling.match(myRegex10);
console.log(result11)

//Corresponder a caracteres que ocorrem zero ou mais vezes, usando o sinalizador *
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result12 = chewieQuote.match(chewieRegex);
console.log(result12);

//Encontre personagens com correspondência preguiçosa,Você pode aplicar o regex /t[a-z]*i/à string "titanic". Esse regex é basicamente um padrão que 
//começa com t, termina com i, e tem algumas letras no meio.
//As expressões regulares são gulosas por padrão, então a correspondência retornaria ["titani"]. Ele encontra a maior sub-string possível para ajustar o padrão.
//No entanto, você pode usar o ?caractere para alterá-lo para correspondência lenta. "titanic"comparado com a regex ajustada de /t[a-z]*?i/retornos ["ti"].
let text = "<h1>Winter is coming</h1>";
let myRegex8 = /<.*?>/; 
let result13 = text.match(myRegex8);
console.log(result13);

//Corresponder aos Padrões de String Iniciais, usando o sinalizador /^/, lembrando que usando /[^]/ estamos negando , e usando apenas ^ estamos procurando no inicio
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);
console.log(result14);

//Corresponder aos Padrões de String de Finalização, usando o sinalizador $, lembrando de usar sem [] torna isso procurar no inicio ou no fim
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result15 = lastRegex.test(caboose);

//Combinar todas as letras e números, /\w/, corresponde a [A-Za-z0-9_], ou seja todas as letras maiusculas e minusculas e todos os numeros
let quoteSample6 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result16 = quoteSample6.match(alphabetRegexV2).length;
console.log(result16);

//Combine tudo, menos letras e números, Você pode procurar o oposto do \w com \W, esse atalho é o mesmo que [^A-Za-z0-9_]
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let resultt = quoteSample5.match(nonAlphabetRegex).length;

//Corresponder a todos os números, \d, é o mesmo que [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; 
let result = movieName.match(numRegex).length;

//Corresponder a todos os não-números, \D, é o mesmo que [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi;
let result = movieName.match(noNumRegex).length;

//Você pode procurar por espaços em branco usando \s
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/gi;
let result = sample.match(countWhiteSpace);

//Corresponder a caracteres que não sejam espaços em branco, usando o \S
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/gi;
let result = sample.match(countNonWhiteSpace);

//Especifique o número superior e inferior de correspondências, Os especificadores de quantidade são usados ​​com colchetes ({e})
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);
//ou seja o h se repetindo entre 3 e 6 vezes

//Especifique apenas o menor número de correspondências, voce coloca o {numero,}
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

//Especifique o número exato de correspondências, voce coloca o {numero} sem virgula

let haStr = "Hazzzzah";
let haRegex = /Haz{4}ah/;
let result = haRegex.test(haStr);

//Verificar tudo ou nenhum, usamos o sinalizador ?
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
//ambos retorna true
//mais um exemplo
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

//

