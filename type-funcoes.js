// Decalração de Função

function minhaFuncao() {
    return 'Olá pessoal!'
}

function cumprimenta(nome) {
    return `${minhaFuncao()} Meu nome é ${nome}.`
}


console.log(cumprimenta('Marcos'))


// Função Anônima

const soma = function (num1, num2) { return num1 + num2 }

console.log(soma(1, 2))


// Arrow Function


// const somaNumerosPequenos = (num1, num2) => {
//     if (num1 >= 10 || num2 >= 10) {
//         console.error(new Error("Os números precisam estar entre 0 e 9."))
//     } else {
//         return num1 + num2
//     }
// }

const somaNumerosPequenos = (num1, num2) => { return (num1 >= 10 || num2 >= 10) ? console.error(new Error("Os números precisam estar entre 0 e 9.")) : num1 + num2 }

console.log(somaNumerosPequenos(9, 10))