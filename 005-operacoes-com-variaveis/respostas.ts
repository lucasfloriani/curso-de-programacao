/**
 * 1. Declare uma variável com seu primeiro nome e outra com o sobrenome e
 *    faça a concatenação delas em uma terceira variável chamada nomeCompleto
 */
var primeiroNome = "Lucas";
var sobrenome = "Floriani";
var nomeCompleto = primeiroNome + " " + sobrenome;
console.log("Exercício 1 - Nome completo", nomeCompleto);

/**
 * 2. Usando os valores 4 e 3 como lados de um triangulo, calcule o ultimo lado
 *    do triangulo usando o calculo da hipotenusa
 *
 * Formula da hipotenusa:
 * Math.sqrt(num1 * num1 + num2 * num2)
 */
var exercicio2 = Math.sqrt(4 * 4 + 3 * 3);
console.log("Exercício 2 - Resultado final deve ser 5:", exercicio2 === 5);

/**
 * 3. Dado as variáveis declaradas de um produto, faça a seguinte validação
 *    para verificar se o produto deve ou não aparecer na página principal
 *    do nosso e-commerce:
 *
 * - O nome do produto precisa estar preenchido
 * - O preço do produto precisa ser maior que 0
 * - O estoque do produto precisa estar maior que 5
 * - A quantidade de vendas deste produto deve ser maior ou igual a 100
 */
var nomeDoProduto = "Caneca de programador Javascript";
var precoDoProduto = 12.45;
var estoqueDoProduto = 37;
var quantidadeVendidaDoProduto = 241;
var produtoEValido =
  nomeDoProduto !== "" &&
  precoDoProduto > 0 &&
  estoqueDoProduto > 5 &&
  quantidadeVendidaDoProduto >= 100;
console.log(
  "Exercício 3 - Validação do produto precisa ser true:",
  produtoEValido === true
);

/**
 * 4. Dado um sistema de estoque de produtos de uma farmacia, você precisa validar se
 *    um remédio tem todos os requisitos da receita que o médico passou para o cliente,
 *    sendo os critérios deste remédio:
 *
 * - Este produto precisa conter polipropileno
 * - Precisa ter OU mel OU caramelo na sua composição
 * - Precisa ser um remédio genêrico
 * - E o valor não pode ultrapassar 50
 */
var temPolipropileno = true;
var temMel = false;
var temCaramelo = true;
var eGenerico = true;
var preco = 49.99;
var remedioEValido =
  temPolipropileno === true &&
  (temMel === true || temCaramelo === true) &&
  eGenerico === true &&
  preco <= 50;
console.log(
  "Exercício 4 - Validação do remédio precisa ser true:",
  remedioEValido === true
);
