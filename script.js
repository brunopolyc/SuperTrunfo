var carta1 = {
  nome: "Naruto - SUPER TRUNFO",
  imagem: "https://pt.apkshki.com/storage/7983/icon_6034aac879006_7983.png",
  atributos: {
    Ataque: 10,
    Defesa: 10,
    Jutsu: 10
  }
};
var carta2 = {
  nome: "Sasuke",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/0/02/Sasukereup.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Jutsu: 10
  }
};
var carta3 = {
  nome: "Sakura",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2021/03/Sakura.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 7,
    Jutsu: 6
  }
};
var carta4 = {
  nome: "kakashi",
  imagem:
    "https://i2.wp.com/www.sirinerd.com.br/wp-content/uploads/2018/09/Kakashi_Hatake.png",
  atributos: {
    Ataque: 7,
    Defesa: 5,
    Jutsu: 8
  }
};
var carta5 = {
  nome: "jiraya",
  imagem:
    "https://uploads.spiritfanfiction.com/fanfics/historias/202012/imagine-hot-jiraya-x-leitora-21175707-051220201627.jpg",
  atributos: {
    Ataque: 2,
    Defesa: 6,
    Jutsu: 5
  }
};
var carta6 = {
  nome: "orochimaru",
  imagem:
    "https://sites.google.com/site/temdetudoaquipravc/_/rsrc/1258599280982/animes-1/naruto-classico/lendarios-sannins/orochimaru/Orochimaru.jpg",
  atributos: {
    Ataque: 4,
    Defesa: 3,
    Jutsu: 7
  }
};
var carta7 = {
  nome: "tsunade",
  imagem:
    "https://i0.wp.com/narutokonoha.com/wp-content/uploads/2019/11/Qual-%C3%A9-o-cl%C3%A3-de-Tsunade.png",
  atributos: {
    Ataque: 7,
    Defesa: 5,
    Jutsu: 2
  }
};
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Você perdeu, a carta da máquina é maior</p>";
  } else {
    htmlResultado =
      "<p class='resultado-final'>Acabou o chakra aconteceu um <strong>Empate<strong></p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")" <- Forma antiga
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}