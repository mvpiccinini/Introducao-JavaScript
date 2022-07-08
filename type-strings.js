// utilizando strings

const citacao = "meu nome é ";
const nome = "MArcos";
const citacao2 = ", este é um 'teste' de aspas. "
const citacao3 = 'Mais um "teste" de aspas   ';

console.log(citacao + nome + citacao2)
console.log(citacao3)


console.log(citacao3.toUpperCase())
console.log(citacao3.toLowerCase())
console.log(citacao3.startsWith("Mais um"))
console.log(citacao3.length)
console.log(citacao3.replace('\"',""));
console.log(citacao3.replaceAll('\"',""));
console.log(citacao3.replaceAll(' ',"").replaceAll('\"',""));
console.log(citacao3.trim())

const texto1 = "ALuRa"
const texto2 = "aLuRa"

console.log(texto1 === texto2)
console.log(texto1.toLowerCase === texto2.toLowerCase)








