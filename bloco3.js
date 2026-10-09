// ==========================================
// 1. Função classificarNota(nota) com if/else
// ==========================================

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// Testes:
console.log("Nota 7.5:", classificarNota(7.5)); // Aprovado
console.log("Nota 4.0:", classificarNota(4.0)); // Reprovado


// ==========================================
// 2. Semáforo com a estrutura switch
// ==========================================

const corSemaforo = "Amarelo";

switch (corSemaforo.toLowerCase()) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida no semáforo");
}


// ==========================================
// 3. Tabuada do 5 utilizando laço for
// ==========================================

console.log("--- Tabuada do 5 ---");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


// ==========================================
// 4. Contagem regressiva com laço while
// ==========================================

console.log("--- Contagem Regressiva ---");
let contador = 5;

while (contador >= 1) {
  console.log(contador);
  contador--;
}


// ==========================================
// 5. Par ou Ímpar (1 a 20) com for e while
// ==========================================

console.log("--- Par ou Ímpar (com for) ---");
for (let i = 1; i <= 20; i++) {
  const tipo = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i} é ${tipo}`);
}

console.log("--- Par ou Ímpar (com while) ---");
let num = 1;
while (num <= 20) {
  const tipo = num % 2 === 0 ? "par" : "ímpar";
  console.log(`${num} é ${tipo}`);
  num++;
}


// ==========================================
// 6. Função diaDaSemana(numero) com switch
// ==========================================

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido! Informe um valor de 1 a 7.";
  }
}

// Testes:
console.log("Dia 1:", diaDaSemana(1)); // Domingo
console.log("Dia 5:", diaDaSemana(5)); // Quinta-feira
console.log("Dia 9:", diaDaSemana(9)); // Número inválido...