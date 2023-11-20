// Estruturas condicionais

const idade = 20;

if(idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Se média >= a 7, aprovado
// Se média < 7 e média >= 5, recuperação
// Se média < 5, reprovado

let media = 10;

if(media >= 7) {
    console.log('Aprovado');
} else if(media >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}