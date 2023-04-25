//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//funções
//letras, números e símbolos para gerar a senha
// pegando somente as letras minusculas
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
//pegando somente as letras maiusculas
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
//pegando os numeros
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};
// pegando os simbolos
const getSymbol = () => {
  const symbols = "(){}[]=<>/,!@#$%&+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
// juntando as funções para poder gerar a senha aleatorias
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  // fazendo as senhas letras, numeros e simbolos
  for (i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }
  // imprimindo a senha junta com 10 posições conforme definido
  password = password.slice(0, passwordLength);
  // gerando a senha aleatoria e colocando no bloco "aqui está sua senha"
  generatePasswordElement.style.display = "block"
  generatePasswordElement.querySelector("h4").innerText = password;

};
//evento
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
