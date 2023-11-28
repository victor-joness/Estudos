const cifrar = (textop, chave) => {
  let array = [];

  let texto = [...textop];

  console.log(texto.filter((item) => (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) || item.charCodeAt() == 32 || (item.charCodeAt() >= 65 && item.charCodeAt() <= 90)));
  texto = texto.filter((item) => (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) || item.charCodeAt() == 32 || (item.charCodeAt() >= 65 && item.charCodeAt() <= 90));

  for (let i = 1; i < 26; i++) {
    array = [];
    for (let j = 0; j < texto.length; j++) {
      if (texto[j].charCodeAt() == 32) {
        let palavra = texto[j].charCodeAt();
        array.push(String.fromCharCode(palavra));
      } else {
        let palavrateste = texto[j].charCodeAt();
        let palavra = texto[j].charCodeAt() + i;
        if (palavra > 122) {
          palavra = palavra - 26;
        }

        if(palavrateste >= 65 && palavrateste <= 90){
          if(palavra > 90){
            palavra = palavra - 26;
          }
        }

        array.push(String.fromCharCode(palavra));
      }
    }
    console.log(array.join(""));

    if (i == chave) {
      return array.join("");
    }
  }
};

console.log(cifrar("teste. de $cifra, de cesar com, uma chave qualquer,", 5));


const decifrar = (texto) => {
  let array = [];

  let resultado_Final = [];

  for (let i = 1; i < 26; i++) {
    array = [];
    for (let j = 0; j < texto.length; j++) {
      if (texto[j].charCodeAt() == 32) {
        let palavra = texto[j].charCodeAt();
        array.push(String.fromCharCode(palavra));
      } else {
        let palavra = texto[j].charCodeAt() - i;

        if (palavra < 97) {
          palavra = palavra + 26;
        }

        array.push(String.fromCharCode(palavra));
      }
    }
    let resultado = array.join("");
    console.log(resultado);
    resultado_Final.push([resultado, i]);
  }

  console.log(resultado_Final)

  /* for(let i = 0; i < resultado_Final.length;i++){
    console.log(resultado_Final);
  } */
};

console.log(decifrar("yjxyj ij hnkwf ij hjxfw htr zrf hmfaj vzfqvzjw"));
