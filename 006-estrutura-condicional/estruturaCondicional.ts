// ==== Tipos de Dados Primitivo ====
var nome = "Lucas Floriani"; // String  => Texto
var idade = 26; // Integer => Número Inteiro
var maiorDeIdade = true; // Boolean => Sim ou Não (true ou false)

// ==== Como tomar decisões a partir das informações nas variáveis ====
// == if e else ==
// Sumário:
// if = se
// else = então não

// Exemplo 1:
if (maiorDeIdade) {
  console.log("É maior de idade");
} else {
  console.log("Não é maior de idade");
}
// Exemplo 2:
if (idade == 25) {
  console.log("É maior ou igual a 25 anos");
} else {
  console.log("Idade inválida");
}
// Exemplo 3:
if (nome.length > 3) {
  console.log("Nome válido");
}
