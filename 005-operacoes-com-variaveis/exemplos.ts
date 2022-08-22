var soma = 4 + 3;
var diminuicao = 4 - 3;
var multiplicacao = 4 * 3;
var divisao = 12 / 3;
console.log("soma:", soma);
console.log("diminuicao:", diminuicao);
console.log("multiplicacao:", multiplicacao);
console.log("divisao:", divisao);

var total = 2 * (1 + (2 * 3) / 2) + 12;
console.log("total:", total);

var nome = "Lucas";
var sobrenome = "Floriani";
var nomeCompleto = nome + " " + sobrenome;
console.log("nome:", nome);
console.log("sobrenome:", sobrenome);
console.log("nomeCompleto:", nomeCompleto);

var maiorQue = 3 > 2;
var maiorOuIgualA = 3 >= 2;
var menorQue = 2 < 3;
var menorOuIgualA = 3 <= 2;
var igualAoValor = 2 == "2";
var igualAoValorETipo = 2 === 2;
var diferenteDoValor = 2 != "2";
var diferenteDoValorETipo = 2 !== "2";
console.log("maiorQue:", maiorQue);
console.log("maiorOuIgualA:", maiorOuIgualA);
console.log("menorQue:", menorQue);
console.log("menorOuIgualA:", menorOuIgualA);
console.log("igualAoValor:", igualAoValor);
console.log("igualAoValorETipo:", igualAoValorETipo);
console.log("diferenteDoValor:", diferenteDoValor);
console.log("diferenteDoValorETipo:", diferenteDoValorETipo);

var negadoParaTerFalse = !true;
var negadoParaTerTrue = !false;
var expressaoNegadaParaTerFalse = !(2 == "2");
var expressaoNegadaParaTerTrue = !(2 === "2");
console.log("negadoParaTerFalse:", negadoParaTerFalse);
console.log("negadoParaTerTrue:", negadoParaTerTrue);
console.log("expressaoNegadaParaTerFalse:", expressaoNegadaParaTerFalse);
console.log("expressaoNegadaParaTerTrue:", expressaoNegadaParaTerTrue);

var email = "teste@gmail.com";
var senha = "123456";
var token = ",-432*MZ";
var idade = 19;
var usuarioValido = email !== "" && senha !== "";
var senhaValida = senha !== "" || token !== "";
var cadastroValido =
  email !== "" && idade >= 18 && (senha !== "" || token !== "");
var temEmail = email !== "";
var maiorDeIdade = idade >= 18;
var digitouSegredo = senha !== "" || token !== "";
var cadastroValidadoEmEtapas = temEmail && maiorDeIdade && digitouSegredo;
console.log("usuarioValido:", usuarioValido);
console.log("senhaValida:", senhaValida);
console.log("cadastroValido:", cadastroValido);
console.log("temEmail:", temEmail);
console.log("maiorDeIdade:", maiorDeIdade);
console.log("digitouSegredo:", digitouSegredo);
console.log("cadastroValidadoEmEtapas:", cadastroValidadoEmEtapas);

var resultado1 = true && true;
var resultado2 = false && true;
var resultado3 = true && false;
var resultado4 = false && false;
console.log("resultado1:", resultado1);
console.log("resultado2:", resultado2);
console.log("resultado3:", resultado3);
console.log("resultado4:", resultado4);

var resultado5 = true || true;
var resultado6 = false || true;
var resultado7 = true || false;
var resultado8 = false || false;
console.log("resultado5:", resultado5);
console.log("resultado6:", resultado6);
console.log("resultado7:", resultado7);
console.log("resultado8:", resultado8);

var resultado9 = true && (true || false);
var resultado10 = true || (false && true);
var resultado11 = (true && true && false) || (true && false);
console.log("resultado9:", resultado9);
console.log("resultado10:", resultado10);
console.log("resultado11:", resultado11);

var resultado12 = !true;
var resultado13 = !false;
console.log("resultado12:", resultado12);
console.log("resultado13:", resultado13);

var resultado14 = !true && !true;
var resultado15 = !false && !true;
var resultado16 = !true && !false;
var resultado17 = !false && !false;
console.log("resultado14:", resultado14);
console.log("resultado15:", resultado15);
console.log("resultado16:", resultado16);
console.log("resultado17:", resultado17);

var resultado18 = !true || !true;
var resultado19 = !false || !true;
var resultado20 = !true || !false;
var resultado21 = !false || !false;
console.log("resultado18:", resultado18);
console.log("resultado19:", resultado19);
console.log("resultado20:", resultado20);
console.log("resultado21:", resultado21);
