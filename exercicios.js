// ###########   QUESTÃO 01

// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(SOMA);
// RESPOSTA : TEREMOS O VALOR DE SOMA = 91

// ###########   QUESTÃO 02

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(numero) {
  let a = 0;
  let b = 1;
  let temp;
  if (numero === 0 || numero === 1) {
    return `O número ${numero} pertence à sequência`;
  }
  while (b < numero) {
    temp = a + b;
    a = b;
    b = temp;
  }
  if (b === numero) {
    return `O número ${numero} pertence à sequência `;
  } else {
    return `O número ${numero} NÃO pertence à sequência `;
  }
}
// Exemplo
let numero = 21;
console.log(fibonacci(numero));
// O número 21 pertence à sequência

// ###########   QUESTÃO 03

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoDiario = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];

const faturamentoValido = faturamentoDiario.filter((dia) => dia.valor > 0);

const menorValor = Math.min(...faturamentoValido.map((dia) => dia.valor));
const maiorValor = Math.max(...faturamentoValido.map((dia) => dia.valor));

const somaFaturamento = faturamentoValido.reduce(
  (acc, dia) => acc + dia.valor,
  0
);
const mediaMensal = somaFaturamento / faturamentoValido.length;

const diasAcimaDaMedia = faturamentoValido.filter(
  (dia) => dia.valor > mediaMensal
).length;

console.log(`Menor faturamento: ${menorValor.toFixed(2)}`);
console.log(`Maior faturamento: ${maiorValor.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);
// Menor valor de faturamento: 373.78
// Maior valor de faturamento: 48924.24
// Número de dias com faturamento acima da média: 10

// ###########   QUESTÃO 04

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
  (acc, valor) => acc + valor,
  0
);
for (const estado in faturamentoPorEstado) {
  const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
  console.log(
    `${estado} teve uma representação de ${percentual.toFixed(
      2
    )}% no faturamento total.`
  );
}

// ###########   QUESTÃO 05

// 5) Escreva um programa que inverta os caracteres de um string.
function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

const stringOriginal = "targetsistemas";
const resultado = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);
// String original: targetsistemas
// String invertida: sametsistegrat
