/**
 * 1. Imprima no terminal com o console.log o maior valor dentre as duas variaveis declaradas abaixo
 */
var primeiroValor = 5;
var segundoValor = 4;
console.log("Exercício 1:");

if (primeiroValor > segundoValor) {
  console.log(primeiroValor);
} else {
  console.log(segundoValor);
}

/**
 * 2. Com base nas notas do aluno determinadas abaixo, realize a média das notas, valide se ele passará
 *    na matéria e imprima o resultado no terminal
 *
 * OBS: A média de corte é igual ou maior a 7
 */
var primeiraNota = 5.5;
var segundaNota = 8.6;
var terceiraNota = 4.9;
var quartaNota = 9.8;
var quintaNota = 9.3;
console.log("Exercício 2:");

var media =
  (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota) / 5;
if (media >= 7) {
  console.log("Passou na matéria");
} else {
  console.log("Não passou na matéria");
}

/**
 * 3. Imprima se a letra minuscula colocada dentro da variável é uma vogal ou consoante
 */
var letraDigitada = "b";
console.log("Exercício 3:");

if (
  letraDigitada === "a" ||
  letraDigitada === "e" ||
  letraDigitada === "i" ||
  letraDigitada === "o" ||
  letraDigitada === "u"
) {
  console.log("É vogal");
} else {
  console.log("É consoante");
}

/**
 * 4. Imprima no terminal com base nas variáveis declaradas abaixo dos lados de um triângulo se ele é
 *    Equilátero, Isósceles ou Escaleno.
 *
 * OBS 1:
 *  - Triângulo Equilátero: possui os 3 lados de mesmo tamanho
 *  - Triângulo Isóscele: possui os 2 lados de mesmo tamanho
 *  - Triângulo Escaleno: possui os 3 lados de tamanho diferente
 *
 * OBS 2: Se não bater com nenhuma regra, imprima "Triângulo não identificado"
 */
var primeiroLado = 3;
var segundoLado = 3;
var terceiroLado = 4;
console.log("Exercício 4:");

if (primeiroLado === segundoLado && primeiroLado === terceiroLado) {
  console.log("Triângulo Equilátero");
} else if (
  primeiroLado === segundoLado ||
  primeiroLado === terceiroLado ||
  segundoLado === terceiroLado
) {
  console.log("Triângulo Isóscele");
} else if (
  primeiroLado !== segundoLado &&
  primeiroLado !== terceiroLado &&
  segundoLado !== terceiroLado
) {
  console.log("Triângulo Escaleno");
} else {
  console.log("Triângulo não identificado");
}

/**
 * 5. Todo inicio de ano na farmácia Preço Bom é realizado o ajuste dos salários dos funcionários
 *    com base no valor do salário do ano anterior, com base nesta informação e na tabela de porcentagem abaixo,
 *    imprima qual o novo salário de Roberto:
 *
 * - Salário de igual ou até 900: +10% de aumento
 * - Salário acima de 900 e até 1350: +9% de aumento
 * - Salário igual ou acima de 1350 e até 1800: +8% de aumento
 * - Salário acima de 1800: +6% de aumento
 */
var salarioRoberto = 950;
var novoSalario;
console.log("Exercício 5:");

if (salarioRoberto <= 900) {
  novoSalario = salarioRoberto * 1.1;
} else if (salarioRoberto > 900 && salarioRoberto < 1350) {
  novoSalario = salarioRoberto * 1.09;
} else if (salarioRoberto >= 1350 && salarioRoberto < 1800) {
  novoSalario = salarioRoberto * 1.08;
} else {
  novoSalario = salarioRoberto * 1.06;
}

console.log("Novo salário:", novoSalario);

/**
 * 6. Na mesma farmácia do exercicio anterior, tambem é realizado o ajuste dos valores dos medicamentos
 *    com base em seus valores anteriores e suas categorias, seguindo a tabela abaixo, imprima no terminal
 *    o novo valor do produto declarado nas variáveis abaixo:
 *
 * - Pele e Mucosa
 *   - Até 3.50: +1%
 *   - Igual a 3.50 ou até 7.00: +1.5%
 *   - Igual ou acima de 7.00: +0.5%
 *
 * - Gripes e Resfriados
 *   - Até 3.50: +0.5%
 *   - Igual a 3.50 ou até 7.00: +1%
 *   - Igual ou acima de 7.00: +2%
 *
 * - Dor, Febre e Contusão
 *   - Até 3.50: +0.2%
 *   - Igual a 3.50 ou até 7.00: +0.5%
 *   - Igual ou acima de 7.00: +0.3%
 *
 * OBS: Realize todos os ifs e elses possíveis dos aumentos de preço acima,
 *      pois projetos reais não deve somente verificar um tipo de produto (Doril)
 */
var nomeDoProduto = "Doril";
var categoriaDoProduto = "Dor, Febre e Contusão";
var precoDoProduto = 3.75;
var novoPreco;
console.log("Exercício 6:");

if (categoriaDoProduto === "Pele e Mucosa") {
  if (precoDoProduto < 3.5) {
    novoPreco = precoDoProduto * 1.01;
  } else if (precoDoProduto >= 3.5 && precoDoProduto < 7.0) {
    novoPreco = precoDoProduto * 1.015;
  } else {
    novoPreco = precoDoProduto * 1.005;
  }
} else if (categoriaDoProduto === "Gripes e Resfriados") {
  if (precoDoProduto < 3.5) {
    novoPreco = precoDoProduto * 1.005;
  } else if (precoDoProduto >= 3.5 && precoDoProduto < 7.0) {
    novoPreco = precoDoProduto * 1.01;
  } else {
    novoPreco = precoDoProduto * 1.02;
  }
} else {
  if (precoDoProduto < 3.5) {
    novoPreco = precoDoProduto * 1.002;
  } else if (precoDoProduto >= 3.5 && precoDoProduto < 7.0) {
    novoPreco = precoDoProduto * 1.005;
  } else {
    novoPreco = precoDoProduto * 1.003;
  }
}

console.log("Novo preco:", novoPreco);
