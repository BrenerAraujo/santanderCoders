// Operações Aritméticas

let numero1 = 20;
let numeroDois = 2;

/*
Adição:            +
Subtração:         -
Multiplicação:     *
Divisão:           /
Exponenciação:     **
Resto da divisão:  %
*/

const soma = numero1 + numeroDois;
console.log('Soma = ', soma);
console.log('Subtração = ', numero1 - numeroDois);
console.log('Multiplicação = ', numero1 * numeroDois);
console.log('Divisão = ', numero1 / numeroDois);
console.log('Exponenciação = ', numero1 ** numeroDois);
console.log('Resto da divisão = ', numero1 % numeroDois);

// Precedência de operadores

console.log(3 + 7 * 3);        // Segue a ordem da matemática
console.log((3 + 7) * 3);      // Parênteses para ter precedência
console.log((10 + 7 + 8) / 3); // Média

// Biblioteca Math

console.log(Math.PI);
console.log(Math.sqrt(16));