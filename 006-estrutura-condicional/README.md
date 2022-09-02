# Estrutura condicional

Na maior parte do tempo que programamos, nós estaremos realizando decisões com base nos dados apresentados para nós, um bom exemplo disso seria um cadastro de um produto no qual sem querer o usuário cadastrou com o preço zero, no qual deveriamos de ter uma validação para previnir este tipo de ação (salvar o produto) caso tenho valor igual ou abaixo de zero.
Neste caso que comentamos agora, nós poderiamos realizar a mesma validação com `booleans` que conversamos e executamos exercicios sobre na aula anterior, porem ainda precisariamos uma peça final para nosso quebra cabeças, como poderiamos executar um código caso o valor esteja correto num cenário e executar outro totalmente diferente caso esteja incorreto? Para esses casos nós utilizamos o `if` e `else`

## if e else

Estas duas palavras em inglês servem para que nós executemos lógicas diferentes com base em alguma validação que queremos analisar:

```javascript
var preco = 0;

if (preco > 0) {
    console.log("Preço do produto é valido")
} else {
    console.log("Preço do produto é inválido!")
}

// Preço do produto é inválido!
```

Analisando o código acima, podemos ver que o `if` e `else` foi utilizado para executar códigos diferentes com base em uma validação no preço, o qual se assemelha diretamente com os exercícios anteriores relacionados as operações com **booleans**.

Para facilitarmos a compreenção ainda mais, podemos traduzir ambas as palavras para:

- **if**: se
- **else**: se não

Assim podemos até descrever o código que realizamos anteriormente em uma frase distinta:
_"**Se** o preço do produto for maior que zero, imprima o texto 'Preço do produto é válido', **se não** for maior que zero, imprima o texto 'Preço do produto é inválido!'"_

Outro detalhe interessante do `if else` é que podemos realizar mais do que somente duas diferenciações de código:

```javascript
var preco = 22.90

// if => se
// else if => senão se
// else => senão

if (preco < 5) {
    // Se tiver preco menor que 5
    console.log("Muito barato")
} else if (preco > 5 && preco <= 10) {
    // Se tiver preco maior que 5 ou menor ou igual a 10
    console.log("Barato")
} else if (preco > 10 && preco <= 15) {
    // Se tiver preco maior que 10 ou menor ou igual a 15
    console.log("Normal")
} else if (preco > 15 && preco <= 20) {
    // Se tiver preco maior que 15 ou menor ou igual a 20
    console.log("Caro")
} else if (preco > 20 && preco <= 25) {
    // Se tiver preco maior que 20 ou menor ou igual a 25
    console.log("Muito caro")
} else {
    // Outro valor que não entra em nenhum dos ifs acima
    console.log("Categoria de preço desconhecida")
}
```

Outro detalhe importante é que dentro dos parenteses que colocamos a operação boolean para ver se executamos o código dentro do if ou não, nós tambem podemos colocar várias validações que utilizam **&&** e **||**:

```javascript
var nomeDoProduto = "Panela"
var precoDoProduto = 22.47

if (nomeDoProduto === "Panela" && precoDoProduto > 20) {
    console.log("Produto tem todos os critérios da busca");
} else {
    console.log("Produto invalido na busca");
}
```

### Usando if else um dentro do outro

Em certos momentos durante o desenvolvimento de alguma aplicação nós enfrentaremos problemas que precisam de validações mais complexas e que dependem de um conjunto de regras que devemos implementar como neste exemplo:

```typescript
// "cartao-de-credito", "cartao-de-debito", "dinheiro" ou "pix"
var tipoDePagamento = "pix"
var pagamentoParcelado = true

var modoDePagamentoEscolhido

if (tipoDePagamento === "cartao-de-credito") {
    if (pagamentoParcelado === true) {
        modoDePagamentoEscolhido = "Cartão de crédito parcelado"
    } else {
        modoDePagamentoEscolhido = "Cartão de crédito à vista"
    }
} else if (tipoDePagamento === "cartao-de-debito") {
    if (pagamentoParcelado === true) {
        modoDePagamentoEscolhido = "Cartão de débito parcelado"
    } else {
        modoDePagamentoEscolhido = "Cartão de débito à vista"
    }
} else if (tipoDePagamento === "dinheiro") {
    if (pagamentoParcelado === true) {
        modoDePagamentoEscolhido = "Dinheiro com parcelamento por carne"
    } else {
        modoDePagamentoEscolhido = "Dinheiro à vista"
    }
} else {
    if (pagamentoParcelado === true) {
        modoDePagamentoEscolhido = "Pix com parcelamento por aplicativo"
    } else {
        modoDePagamentoEscolhido = "Pix à vista"
    }
}

console.log("Modo de pagamento escolhido:", modoDePagamentoEscolhido)
// Pix com parcelamento por aplicativo
```
