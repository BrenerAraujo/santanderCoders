// Laço numérico: FOR

const input = require('readline-sync');

// O problema
// let nota1 = Number(input.question('Informe a nota 1: '));
// let nota2 = Number(input.question('Informe a nota 2: '));
// let nota3 = Number(input.question('Informe a nota 3: '));

// let media = (nota1 + nota2 + nota3) / 3;

// Acumulador
// let acumulador = 0;

// acumulador = acumulador + 10; // Soma 10 no valor da variável
// acumulador += 2; // Soma 2 no valor da variável
// acumulador++; // Soma 1 no valor da variável

// console.log(acumulador);

// Estrutura for
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 10; i > 0; i--) {
//     console.log(i);
// }

// Resolvendo o problema inicial
let nota;
for(let i = 0; i < 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));

    let soma = soma + nota;
}

console.log(`A média do aluno é ${soma / 3}.`);