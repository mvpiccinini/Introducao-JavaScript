
// primeiros números

const primeiroNumero = 10;
const segundoNumero = 7;

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const divisao = primeiroNumero / segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;



// console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(divisao.toFixed(2));
// console.log(Math.ceil(divisao));
// console.log(Math.floor(divisao));
// console.log(Math.trunc(divisao));
// console.log(Math.round(divisao));

const listaDeNumeros = [2, 9, 7, 6, 8, 3, 4, 1, 5, 0];


listaDeNumeros.sort((a, b) => a - b);
console.log("Ordena numeros");
console.log(listaDeNumeros);

listaDeNumeros.reverse();
console.log("Inverte a ordem");

console.log(listaDeNumeros);

console.log(primeiroNumero === 10)
console.log(primeiroNumero === segundoNumero)