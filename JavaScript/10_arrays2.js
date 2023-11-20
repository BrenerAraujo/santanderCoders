// Arrays Parte 2 - Métodos de arrays
let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice
console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));

// Adicionando elementos: push | unshifit
console.log('Antes de adicionar:', arr2);
arr2.push(10, 20, 30);
console.log('Depois de adicionar:', arr2)
arr2.push(40); // push adiciona no final

console.log('Antes de adicionar com unshift', arr2)
arr2.unshift(0); //unshift adiciona no início
console.log('Depois de adicionar com unshift:', arr2);

// Removendo elementos: pop | shift
console.log('Antes de remover com o pop',arr2);
const elementoRemoivdo = arr2.pop();
console.log('Depois de remover com o pop:', arr2);
console.log('O elemento que foi removido foi:', elementoRemoivdo);

console.log('Antes de remover com o shift:', arr2);
arr2.shift();
console.log('Depois de remover com o shift', arr2);

// Concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2);
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

//Buscando elementos: indexOf | lastIndexOf
console.log(arr1);
console.log(arr1.indexOf(34)); // Retorna o primeiro índice do elemento informado
console.log(arr1.indexOf(43)); // Retorna -1 quando não existe o valor

console.log(arr1.lastIndexOf(34)); // Retorna o último índice do elemento informado

// Descobrindo a existência de um elemento: includes
console.log(arr1.includes(10));
console.log(arr1.includes(34));

// Invertendo arrays: reverse
console.log('arr1 normal:', arr1);
console.log('arr1 invertido:', arr1.reverse());