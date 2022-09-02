// Exemplo 1:
console.log("=== Exemplo 1 ===");
var maiorDeIdade = true;
if (maiorDeIdade) {
  console.log("É maior de idade");
} else {
  console.log("Não é maior de idade");
}
console.log("\n");

// Exemplo 2:
console.log("=== Exemplo 2 ===");
var idade = 26;
if (idade == 25) {
  console.log("É maior ou igual a 25 anos");
} else {
  console.log("Idade inválida");
}
console.log("\n");

// Exemplo 3:
console.log("=== Exemplo 3 ===");
var nome = "Lucas Floriani";
if (nome.length > 3) {
  console.log("Nome válido");
}
console.log("\n");

// Exemplo 4:
console.log("=== Exemplo 4 ===");
var precoDoProduto = 0;
if (precoDoProduto > 0) {
  console.log("Preço do produto é valido");
} else {
  console.log("Preço do produto é inválido!");
}
console.log("\n");

// Exemplo 5:
console.log("=== Exemplo 5 ===");
var preco = 22.9;
if (preco < 5) {
  console.log("Muito barato");
} else if (preco > 5 && preco <= 10) {
  console.log("Barato");
} else if (preco > 10 && preco <= 15) {
  console.log("Normal");
} else if (preco > 15 && preco <= 20) {
  console.log("Caro");
} else if (preco > 20 && preco <= 25) {
  console.log("Muito caro");
} else {
  console.log("Categoria de preço desconhecida");
}
console.log("\n");

// Exemplo 6:
console.log("=== Exemplo 6 ===");
var nomeDoProduto = "Panela";
var precoDaPanela = 22.47;
if (nomeDoProduto === "Panela" && precoDaPanela > 20) {
  console.log("Produto tem todos os critérios da busca");
} else {
  console.log("Produto invalido na busca");
}
console.log("\n");

// Exemplo 7:
console.log("=== Exemplo 7 ===");
var modoDePagamentoEscolhido;
var tipoDePagamento = "pix";
var pagamentoParcelado = true;
if (tipoDePagamento === "cartao-de-credito") {
  if (pagamentoParcelado === true) {
    modoDePagamentoEscolhido = "Cartão de crédito parcelado";
  } else {
    modoDePagamentoEscolhido = "Cartão de crédito à vista";
  }
} else if (tipoDePagamento === "cartao-de-debito") {
  if (pagamentoParcelado === true) {
    modoDePagamentoEscolhido = "Cartão de débito parcelado";
  } else {
    modoDePagamentoEscolhido = "Cartão de débito à vista";
  }
} else if (tipoDePagamento === "dinheiro") {
  if (pagamentoParcelado === true) {
    modoDePagamentoEscolhido = "Dinheiro com parcelamento por carne";
  } else {
    modoDePagamentoEscolhido = "Dinheiro à vista";
  }
} else {
  if (pagamentoParcelado === true) {
    modoDePagamentoEscolhido = "Pix com parcelamento por aplicativo";
  } else {
    modoDePagamentoEscolhido = "Pix à vista";
  }
}
console.log("Modo de pagamento escolhido:", modoDePagamentoEscolhido);
