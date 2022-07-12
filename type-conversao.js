//conversoes de strings e números

let telefone = '1234566789';
let cpf = 123456789;

//js converte implicitamente o cpf em uma string
console.log(`O meu telefone é ${telefone + cpf}`)

//CONVERSAO STRING PARA NUMERO
console.log(`O meu telefone é ${Number(telefone) + cpf}`)

console.log(typeof cpf)
console.log(typeof telefone)


//CONVERSAO BOOLEANO PARA NUMERO
let usuarioConectado = true;
let contaPaga = false;

console.log(Number(usuarioConectado) + " " + usuarioConectado)
console.log(Number(contaPaga) + " " + contaPaga)


let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log(+ meuNome); // a conversão também retornará NaN



let comprimento = 5;
let altura = 7;
let forma = 'retangulo';

if (forma == 'retangulo') {
   area = comprimento * altura;
   /** se declarar uma variável como LET dentro de um conjunto de chaves{}
    *  ela não será visível fora deste conjunto de código
    *  se não for declarado o tipo da variável, o JS entende que é uma VAR
    *  
    *  let area = comprimento * altura;
    */

} else {
    area = (comprimento * altura) / 2;
}

console.log(area)


var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    /**
     *  variávels LET e CONST existem apenas entre o conjunto de chave{}
     * as variáveis do tipo VAR continuam existindo fora das chaves{}
     * 
     * VAR tem um escopo global, então funciona em qualquer parte do código,
     * o que pode gerar possíveis problemas em relação à lógica da aplicação.
     * 
     * LET e CONST têm escopo local, sendo assim, não podem ser acessadas em outros escopos,
     * e CONST não pode ter seu valor alterado depois de definido.
     *  
     */

    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}

console.log(respostaDeTudo, idade, pi)



//é possível alterar o tipo da variável durente a execução
let minhaLet;
console.log(minhaLet); //undefined
console.log(typeof minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"
console.log(typeof minhaLet);

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100
console.log(typeof minhaLet);


console.log("deu erro");
console.error(new Error("deu erro"));