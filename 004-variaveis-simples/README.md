# Variáveis simples

E finalmente chegamos a primeira aula com código!
Nesta aula iremos conversar sobre como trabalhamos com informações em linguagens de programação.

## O que é uma variável e como criamos uma

Podemos pensar em uma variável como uma caixa que criamos para guardar algo, que em nosso caso será uma informação, dentro dela nós podemos guardar uma só coisa, porem podemos trocar está coisa por outra caso precisemos, sendo assim o porque de ser chamado variável (algo que podemos mudar de valor).

Para criarmos uma variável usando uma linguagem de programação, que no nosso caso é o Javascript com Typescript, nos fazemos da seguinte forma:

```typescript
var nome: string = "Lucas"
```

Seguindo essa sintaxe especifica nos temos agora uma caixa com uma etiqueta dizendo que é uma caixa para um **nome** e que o valor que temos dentro é "Lucas".

┌──────Nome──────┐
│                │
│                │
│    "Lucas"     │
│                │
│                │
└────────────────┘

Vamos conversar agora sobre os tipos de variáveis que podemos ter.
Spoiler: Este tipo de variável que criamos foi uma **String**

## Tipos de variável

Em nossas vidas nós trabalhamos com informações de vários lugares e de várias formas como textos no twitter, quantos anos temos, preço de produtos no mercado, se algum amigo(a) aceita ou não sair para passear algum dia, e outros tipos de informações
Dentro da programação nós categorizamos elas em tipos distintos, os quais são:

- **Strings**
- **Integers**
- **Floats**
- **Booleans**

### Strings

**Strings** são resumidamente os tipos de informações que são presentes como texto, como por exemplo o seu nome, o endereço onde você mora, uma mensagem que vc manda para alguem e assim por diante:

```typescript
var mensagem: string = "Olá! Eu sou uma variável do tipo String (Texto)"
```

### Integers

**Integers** são os números inteiros como idade, quantas teclas tem um teclado, e quantos boletos temos que pagar ainda... mas melhor não lembrarmos disso agora kkkk.

```typescript
var quantosAnosEuTenho: number = 26
```

**Integers** podem conter tanto números positivos como negativos

```typescript
var temperaturaEmGraus: number = -4
```

### Floats

Já que vimos sobre números inteiros, nós tambem temos números decimais que são os **Floats**

```typescript
var precoDaPacoca: number = 8.99
```

Números decimais precisam usar **ponto** ao inves de **virgula** para separar as casas decimais, sendo este o padrão americano.

Podemos criar alem de **Floats** negativos, números com várias casas decimais:

```typescript
var numeroDoPi: number = 3.14159265
```

OBS: Para o **Typescript** não temos diferença entre integers e floats em questão do tipo, porem vai ser importante conhecermos essa diferença para as próximas aulas.

### Boolean

E finalmente o nosso ultimo tipo de variável que abordaremos que é o **Boolean**!
**Booleans** são um tipo de variável que só podem ter 2 tipos de valor, sendo eles **true** e **false**, o quais simbolizam sim e não respectivamente

```typescript
var souMaiorDeIdade: boolean = true
var tenhoCarteiraDeMotorista: boolean = false
```

## Regras ao declarar variáveis

1. Iniciar sempre com letras, jamais com números ou caracteres especiais (exceto o subtraço "_")
2. Não duplicar nomes de variáveis, mesmo que para tipos diferentes
3. Não utilizar espaços em caso de nomes compostos
4. Não utilizar palavras reservadas da linguagem para dar nome as variáveis (if, else, for, function) (aprenderemos eles nas próximas aulas)

```typescript
var 1nome = "Lucas" // Vai ocasionar um erro pois a linguagem de programação não consegue identificar essa sintaxe
var primeiroNome = "Lucas"
var nome De Marca De Carro = "Lótus" // Outro caso que ocasiona erro por colocar espaços no nome da variável
var nomeDeMarcaDeCarro = "Lótus"
var s^nhaDaMinhaConta = "123teste" // Vai ocasionar erro tambem
var senhaDaMinhaConta = "123teste"
```

### Padrões de nomes mais usados

Após vários anos de programação certas padrões para facilitar a declaração das variáveis foram criados, sendo eles:

```typescript
var camelCase = "Começa com letra minuscula e a cada nova palavra nós colocamos sua primeira letra como maiuscula"
var PascalCase = "Muito parecido com camelCase, porem toda palavra começa com maiuscula"
var snake_case = "Separamos cada palavra por underline e todas as letras são minusculas"
```

Neste curso nós focaremos na utilização do **camelCase**
