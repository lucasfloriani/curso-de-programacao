# Operações com variáveis

Agora que aprendemos para que variáveis servem e como as declaramos, vamos entender como trabalhar com elas usando operações!

## Operações com integers e floats (numbers)

Podemos realizar as quatro operações basicas da matemática tranquilamente, declarando sempre no mesmo formato de expressões que aprendemos nas aulas de matemática

```typescript
var soma = 4 + 3          // 7
var diminuicao = 4 - 3    // 1
var multiplicacao = 4 * 3 // 12
var divisao = 12 / 3      // 4
```

Tambem podemos realizar calculos mais complexos com expressões igual foi comentado anteriormente:

```typescript
var total = 2 * (1 + (2 * 3) / 2) + 12 // 20
```

## Operações com strings

A operação principal quando trabalhamos com texto é a de juntar 2 ou mais textos em um só (concatenação)

```typescript
var nome = "Lucas"
var sobrenome = "Floriani"
var nomeCompleto = nome + " " + sobrenome // "Lucas Floriani"
```

OBS: Ao longo do curso abordaremos outras operações mais interessantes para texto do que esta.

## Operações com booleans

Este é o ponto principal para a nossa próxima aula!
Para validarmos os dados nós precisamos fazer comparações para confirmarmos se realmente temos o que precisamos para continuar realizando as próximas etapas, para isso nós temos disponíveis os seguintes comparadores presentes na matemática

```javascript
var maiorQue = 3 > 2 // true
var maiorOuIgualA = 3 >= 2 // true

var menorQue = 2 < 3 // true
var menorOuIgualA = 3 <= 2 // false

var igualAoValor = 2 == "2" // true
var igualAoValorETipo = 2 === 2  // true (se fosse 2 === "2" fica false porque o valor é igual porem o tipo é diferente, number com string)

var diferenteDoValor = 2 != "2" // false
var diferenteDoValorETipo = 2 !== "2" // true
```

Alem destas expressões que resultam em um valor **boolean**, nós tambem podemos utilizar a exclamação para negar um valor boolean que recebemos, por exemplo:

```typescript
var negadoParaTerFalse = !true // false
var negadoParaTerTrue = !false // true

var expressaoNegadaParaTerFalse = !(2 == "2") // false (Se fosse somente a expressão sem exclamação o valor seria true)
var expressaoNegadaParaTerTrue = !(2 === "2") // true (Se fosse somente a expressão sem exclamação o valor seria false)
```

### Operadores de comparação

Em muitos casos nós precisamos validar se uma ou mais informações estão da forma que precisamos ou até mesmo se uma ou outra está correta, nesses momentos nós usamos os operadores de comparação (**&&** e **||**) para estes casos:

```javascript
// && == e
// || == ou

var email = "teste@gmail.com"
var senha = "123456"
var token = ",-432*MZ"
var idade = 19

// Valida usuário:
// Digitou o email E a senha (&&)
var usuarioValido = email !== "" && senha !== "" // true

// Valida acesso:
// Digitou a senha OU o token
var senhaValida = senha !== "" || token !== ""

// Valida cadastro do usuário:
// -> Email precisa ser obrigatório (&&)
// -> Idade maior ou igual a 18 (&&)
// -> E deve ter OU senha OU token digitado (||)
var cadastroValido = email !== "" && idade >= 18 && (senha !== "" || token !== "") // true
// Podemos quebrar a validação acima em várias variáveis para ficar mais simples de entender:
var temEmail = email !== "" // true
var maiorDeIdade = idade >= 18 // true
var digitouSegredo = senha !== "" || token !== "" // true
var cadastroValidadoEmEtapas = temEmail && maiorDeIdade && digitouSegredo // true
```

Para entendermos ainda melhor os operadores de comparação, vamos analisar mais este código a seguir:

```javascript
// Exemplos com &&
var resultado1 = true && true // Gera (true) no final
var resultado2 = false && true // Gera (false) pois ambos deveriam de ser true
var resultado3 = true && false // Gera (false) pois ambos deveriam de ser true
var resultado4 = false && false // Gera (false) pois ambos deveriam de ser true

// Exemplos com ||
var resultado5 = true || true // Gera (true) no final pois qualquer um precisa ser true para gerar esse resultado
var resultado6 = false || true // Gera (true) no final pois qualquer um precisa ser true para gerar esse resultado
var resultado7 = true || false // Gera (true) no final pois qualquer um precisa ser true para gerar esse resultado
var resultado8 = false || false // Gera (false) pois pelo menos um deveria de ser true para gerar true no final

// Exemplos com ambos para termos de exemplo
var resultado9 = true && (true || false) // Gera true, seguindo o principio de resolver expressões primeiro pelos parenteses
var resultado10 = true || (false && true) // Gera true por causa do primeiro ||
var resultado11 = (true && (true && false)) || (true && false) // Gera false pois ambos as expressões divididas pelo || dão false
```

E por ultimo mas não menos importante, alguns exemplos com negação usando exclamação (!)

```javascript
var resultado1 = !true // false
var resultado2 = !false // true

var resultado3 = !true && !true // false
var resultado4 = !false && !true // false
var resultado5 = !true && !false // false
var resultado6 = !false && !false // true

var resultado5 = !true || !true // false
var resultado6 = !false || !true // true
var resultado7 = !true || !false // true
var resultado8 = !false || !false // true
```
