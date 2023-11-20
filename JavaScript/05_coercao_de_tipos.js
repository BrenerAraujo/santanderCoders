// Coerção (Conversão) de tipos

// 1- Coerção explícita (manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('2121112'));
console.log(parseFloat('23224.234'));
console.log(parseInt('31212.211'));
console.log(Number('32131.312'));
console.log(Boolean(12132));
console.log(Boolean(0));

// 2- Coerção implícita (automática)
console.log(10 + 1);
console.log(10 + '1');
console.log('10' + 1);
console.log(10 - '1');
console.log(10 * '3');
console.log(10 - 'asasa');

// Outros exemplos

// Qual será a saída desse código?
let n = 1 + "1";
n = n - 1;
console.log(n); //10

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); //95

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); //5234

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); //15