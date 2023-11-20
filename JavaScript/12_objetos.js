// Objetos

//Como criar um objeto no JavaScript?
let pessoa = {
    nome: 'Brener',
    idade: 26,
    'data-de-nascimento': '08/11/1997',
    casado: false
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['data-de-nascimento']); // Forma alternativa para acessar valor

// Como adicionar ou modificar um par chave-valor?
pessoa.altura = 1.77;
pessoa.nome = 'Brener Araújo';

// Como remover um par de chave-valor?
delete pessoa.altura;
console.log(pessoa);

// Como percorrer?
for(let chave in pessoa) {
    console.log(chave);
}