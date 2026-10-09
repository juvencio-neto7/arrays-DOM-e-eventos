// ==========================================
// 1. Funções Declaradas e Hoisting
// ==========================================

// Chamando a função ANTES de sua declaração no código:
// Funciona perfeitamente graças ao hoisting (içamento) de funções declaradas.
console.log("Chamando ehMaiorDeIdade antes da declaração:", ehMaiorDeIdade(20)); // true
console.log("Chamando ehMaiorDeIdade antes da declaração:", ehMaiorDeIdade(15)); // false

// Declaração da função ehMaiorDeIdade
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}


// ==========================================
// 2. Funções de Expressão e ReferenceError
// ==========================================

// Tentar chamar a função de expressão ANTES de sua atribuição gera um erro.
// Descomente a linha abaixo para observar o erro:
// console.log(ehMaiorDeIdadeExpressao(20)); 
// Uncaught ReferenceError: Cannot access 'ehMaiorDeIdadeExpressao' before initialization

// Criação da mesma lógica como função de expressão
const ehMaiorDeIdadeExpressao = function(idade) {
  return idade >= 18;
};

// Chamada correta (após a declaração):
console.log("Chamando ehMaiorDeIdadeExpressao após a declaração:", ehMaiorDeIdadeExpressao(20)); // true


// ==========================================
// 3. Três Formas da Função Dobro
// ==========================================

// A) Função Declarada
function dobroDeclarada(n) {
  return n * 2;
}

// B) Função de Expressão
const dobroExpressao = function(n) {
  return n * 2;
};

// C) Arrow Function (Forma Curta / Retorno Implícito)
const dobroArrow = n => n * 2;

// Testando as três formas:
console.log("Dobro (Declarada):", dobroDeclarada(5)); // 10
console.log("Dobro (Expressão):", dobroExpressao(5));  // 10
console.log("Dobro (Arrow):", dobroArrow(5));          // 10


// ==========================================
// 4. Parâmetro com Valor Padrão (Default Parameter)
// ==========================================

// Função com valor padrão n = 1
const dobroComPadrao = (n = 1) => n * 2;

// Teste passando argumento
console.log("Dobro com argumento (7):", dobroComPadrao(7)); // 14

// Teste sem passar argumentos (assume n = 1)
console.log("Dobro sem argumento (padrão n=1):", dobroComPadrao()); // 2