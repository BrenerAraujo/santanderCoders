// Funções

// Definições da função
function saudacao() {
    console.log('Olá, seja bem-vindo!');
}

saudacao();

// Como enviar parâmetros para as funções
function saudacao(nome) {
    console.log(`Olá, ${nome}. Seja bem vindo!`);
}
saudacao('Brener'); // Caso o parâmetro não seja passado, o mesmo retorna undefined

function saudacao(nome, curso) { // Passando dois parâmetros
    console.log(`Olá, ${nome}. Seja bem vindo ao curso de ${curso}`);
}
saudacao('Brener', 'PHP');

function saudacao(nome, curso='JavaScript') { // Passando valor default
    console.log(`Olá, ${nome}. Seja bem vindo ao curso de ${curso}`);
}
saudacao('Brener', 'PHP');
saudacao('Brener');

// Retorna função
function soma(numero1, numero2) {
    let soma = numero1 + numero2;
    return soma;
    console.log('Não imprime nada porque já aconteceu o retorno');
}
console.log(soma(10, 20));

function maiorDoQue50(numero) {
    if(numero > 50) {
        return true;
    }
    return false;
} // Nesse caso foi permitido outro return porque 1 só acontece se satisfazer a condição. Se não, faz o outro