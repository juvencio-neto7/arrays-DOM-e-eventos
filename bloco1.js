let pontos = 50; // Declara a variável com valor inicial
pontos += 10;    // Soma 10 ao valor atual (equivalente a: pontos = pontos + 10)

console.log("Pontuação atual:", pontos); // Exibe: 60

const MAX_PONTOS = 100;

// Tentativa de reatribuição:
MAX_PONTOS = 150; // Gera: Uncaught TypeError: Assignment to constant variable.

// Declaração dos tipos primitivos
let texto = "Olá, mundo!";
let numero = 42;
let ativo = true;
let indefenido;
let nulo = null;

// Exibição e verificação dos tipos
console.log(typeof texto);      // "string"
console.log(typeof numero);     // "number"
console.log(typeof ativo);      // "boolean"
console.log(typeof indefenido); // "undefined"
console.log(typeof nulo);       // "object" (Comportamento histórico/bug legada do JS)

let nomeUsuario = "Ana";
let nivel = 5;

// Forma 1: Template Literals (Crase `` e interpolação ${})
let fraseTemplate = `A jogadora ${nomeUsuario} alcançou o nível ${nivel}!`;

// Forma 2: Concatenação tradicional com o operador +
let fraseConcatenada = "A jogadora " + nomeUsuario + " alcançou o nível " + nivel + "!";

console.log(fraseTemplate);   // "A jogadora Ana alcançou o nível 5!"
console.log(fraseConcatenada); // "A jogadora Ana alcançou o nível 5!"