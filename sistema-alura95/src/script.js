let menuProgramas = document.getElementById("menu-programas");
let prgCornversor = document.getElementById("prgConversor");
let menu = document.getElementById("menu")
const conversor = document.getElementById("conversor");
const gavetaProgramas = document.getElementById("programas")
const closeConversor = document.getElementById("closeConversor")
const btnIniciar = document.getElementById("iniciar")
const menuJogos = document.getElementById("menu-jogos")
const gavetaJogos = document.getElementById("jogos")

// MENU INICIAR

function showMenu(){
  menu.classList.toggle("show")
  if(btnIniciar.classList.contains("btnPressed")){
    btnIniciar.classList.remove("btnPressed")
    gavetaProgramas.style.display = "none"
    gavetaJogos.style.display = "none"
  }else{
    btnIniciar.classList.add("btnPressed")
  }
}

menuProgramas.addEventListener("mouseover", function(){

  gavetaProgramas.style.display = "flex"
  gavetaJogos.style.display = "none"

  gavetaProgramas.addEventListener("click", function(){
    menu.classList.remove("show")
    btnIniciar.classList.remove("btnPressed")
  })
})

gavetaProgramas.addEventListener("mouseleave", function(){
  gavetaProgramas.style.display = "none"
})



// CONVERSOR DE MOEDA

prgCornversor.addEventListener("click", function(){
  conversor.style.display = "block"
  if(menu.classList.contains("show")){
    menu.classList.remove("show")
  }

})

closeConversor.addEventListener("click", function(){
  document.getElementById("valorReal").value = ""
  document.getElementById("resultado").innerHTML = ""
  conversor.style.display = "none";
})

const btnConverter = document.getElementById("btnConverter")


btnConverter.addEventListener("click", converter)

function converter(){
  var valorReal = parseFloat(document.getElementById("valorReal").value)
  var valorDolar = 5.65;
  let resultadoDolar = document.getElementById("resultado")
  let result

  result = valorReal * valorDolar;
  resultadoDolar.innerHTML = result.toFixed(2)
}

//RELOGIO

var clock = document.getElementById('relogio');


setInterval(function () {
  horaSemData = ((new Date).toLocaleString().substr(11));  
  clock.innerHTML = horaSemData.substring(5,0)
}, 1000);

// CALCULADORA

const calc = document.getElementById("calc")
const closeCalc = document.getElementById("closeCalc")
const prgCalc = document.getElementById("prgCalc")
let resultCalc = document.getElementById("resultadoCalc")


let soma = document.getElementById("soma")
let sub = document.getElementById("sub")
let mult = document.getElementById("mult")
let divisao = document.getElementById("divisao")

soma.addEventListener("click", function(){
  var val1 = parseFloat(document.getElementById("primeiroValor").value)
  var val2 = parseFloat(document.getElementById("segundoValor").value)
  var resultado = val1 + val2
  resultCalc.innerHTML = val1 + " + " + val2 + " = " + resultado
})

sub.addEventListener("click", function(){
  var val1 = parseFloat(document.getElementById("primeiroValor").value)
  var val2 = parseFloat(document.getElementById("segundoValor").value)
  var resultado = val1 - val2
  resultCalc.innerHTML = val1 + " - " + val2 + " = " + resultado
})

mult.addEventListener("click", function(){
  var val1 = parseFloat(document.getElementById("primeiroValor").value)
  var val2 = parseFloat(document.getElementById("segundoValor").value)
  var resultado = val1 * val2
  resultCalc.innerHTML = val1 + " x " + val2 + " = " + resultado
})

divisao.addEventListener("click", function(){
  var val1 = parseFloat(document.getElementById("primeiroValor").value)
  var val2 = parseFloat(document.getElementById("segundoValor").value)
  var resultado = val1 / val2
  resultCalc.innerHTML = val1 + " / " + val2 + " = " + resultado
})


closeCalc.addEventListener("click", function(){

  document.getElementById("primeiroValor").value = ""
  document.getElementById("segundoValor").value = ""
  resultCalc.textContent = ""
  calc.style.display = "none";
})

prgCalc.addEventListener("click", function(){
  calc.style.display = "block"
  if(menu.classList.contains("show")){
    menu.classList.remove("show")
  }
})

// POKEMON

const closePokemon = document.getElementById("closePokemon")
const gamePokemon = document.getElementById("pokemon")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
const resultadoPokemon = document.getElementById("pokemonCerto")
let imgPokemon = document.getElementById("imgPokemon")
const prgPokemon = document.getElementById("prgPokemon")

prgPokemon.addEventListener("click", function(){
  gamePokemon.style.display = "block"
})

closePokemon.addEventListener("click", function(){
  gamePokemon.style.display = "none";
  resultadoPokemon.innerHTML = ""
  imgPokemon.src = "https://ogiva.com.br/testes/charmander-pb.png"
})



menuJogos.addEventListener("mouseover", function(){
  gavetaJogos.style.display = "flex"
  gavetaProgramas.style.display = "none"

  gavetaJogos.addEventListener("click", function(){
    gavetaJogos.style.display = "none"
    menu.classList.remove("show")
    btnIniciar.classList.remove("btnPressed")
  })
})

gavetaJogos.addEventListener("mouseleave", function(){
  gavetaJogos.style.display = "none"
})

btn1.addEventListener("click", function(){
  resultadoPokemon.innerHTML = "Você errou :("
})

btn2.addEventListener("click", function(){
  imgPokemon.src = 'https://ogiva.com.br/testes/charmander-color.png'
  resultadoPokemon.innerHTML = "Parabéns! Você acertou :)"
})

btn3.addEventListener("click", function(){
  resultadoPokemon.innerHTML = "Você errou :("
})

// MENTALISTA

const gameMentalista = document.getElementById("mentalista")
const closeMentalista = document.getElementById("closeMentalista")
const prgMentalista = document.getElementById("prgMentalista")

prgMentalista.addEventListener("click", function(){
  gameMentalista.style.display = "block"
  // menu.classList.remove("show")
  // btnIniciar.classList.remove("btnPressed")
})


var play = document.getElementById("sim")


sim.addEventListener("click", function(){

  var arrow = document.getElementById("arrow")
  var inicioGame = document.getElementById("inicioGame")
  var akinatorPlay = document.getElementById("akinatorPlay")
  var respostaInicio = document.getElementById("resposta-inicio")
  var fala = document.getElementById("fala")
  var infoTentativas = document.getElementById("tentativas")
  var displayGame = document.getElementById("display-game")
  var reiniciar = document.getElementById("reinicio")
  var userPalpite = document.getElementById("userPalpite")
  var palpites = document.getElementById("palpites")
  var imagemAkinator = document.getElementById("akinatorGame")
  var enviaPalpite = document.getElementById("enviaPalpite")

  arrow.style.left = "60px"
  inicioGame.style.display = "none"
  akinatorPlay.style.display = "flex"
  respostaInicio.style.display = "none"
  fala.innerHTML = "Ok! Estou pensando em um número <br> entre 1 e 10, você tem 3 chances para acertar."

  var numeroSecreto = Math.floor(Math.random() * 10) + 1;

  var tentativas = 3
  infoTentativas.innerHTML = tentativas

  enviaPalpite.addEventListener("click", conferePalpite)


  function conferePalpite(){

    var palpiteUsuario = Number(userPalpite.value)
    if(tentativas === 3){
      palpites.innerHTML = ""

    }

    palpites.innerHTML += palpiteUsuario + ' '

    if(palpiteUsuario === numeroSecreto){
      fala.innerHTML = "Parabéns! <br> Você acertou"
      imagemAkinator.src = "https://ogiva.com.br/testes/02.png"
      fimDeJogo();
    }else if(tentativas === 1){
      fala.innerHTML = "Hahaha! você perdeu! <br> O número era " + numeroSecreto
      imagemAkinator.src = "https://ogiva.com.br/testes/04.png"
      fimDeJogo()
    }else if(palpiteUsuario < numeroSecreto){
      fala.innerHTML = "Seu palpite está baixo"
      imagemAkinator.src = "https://ogiva.com.br/testes/03.png"
    }else if(palpiteUsuario > numeroSecreto){
      fala.innerHTML = "Errou! Seu palpite está alto"
      imagemAkinator.src = "https://ogiva.com.br/testes/05.png"
    }

    tentativas--;
    userPalpite.value = ' '
    userPalpite.focus()
    infoTentativas.innerHTML = tentativas

    console.log(tentativas)

  }

  function fimDeJogo(){
    displayGame.style.display = "none"
    reiniciar.style.display = "block"

    reinicioJogo.addEventListener("click", reiniciarJogo)

  }

  function reiniciarJogo(){

    displayGame.style.display = "block"
    imagemAkinator.src = "https://ogiva.com.br/testes/01.png"
    reiniciar.style.display = "none"
    palpites.innerHTML = ""
    fala.innerHTML = "Ok! Estou pensando em um número <br> entre 1 e 10, você tem 3 chances para acertar."  
    numeroSecreto = Math.floor(Math.random() * 10) + 1
    tentativas = 3
    infoTentativas.innerHTML = tentativas
  }

})

closeMentalista.addEventListener("click", function(){
  gameMentalista.style.display = "none"
})


// APPEL TV

var closeAppelTV = document.getElementById('closeAppelTV')
var prgAppelTV = document.getElementById("appelTV")
var appelTV = document.getElementById("prgAppel")

appelTV.addEventListener("click", function(){
  prgAppelTV.style.display = "block"
})

function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#imagem-filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  }else{
    alert("imagem Inválida")
  }
  campoFilmeFavorito.value = ""

}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#lista-filmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

closeAppelTV.addEventListener("click", function(){
  prgAppelTV.style.display = "none"
})


// TABELA DE PONTOS

var prgTabela = document.getElementById("tabelaPontos")
var openTabelaPontos = document.getElementById("prgTabelaPontos")
var closeTabela = document.getElementById("closeTabelaPontos")

openTabelaPontos.addEventListener("click", function(){
  prgTabela.style.display = "block"
})

closeTabela.addEventListener("click", function(){
  prgTabela.style.display = "none"
})

var btnNewPlayer = document.getElementById("novo-jogador")
btnNewPlayer.addEventListener("click", function(){

  var nome = document.getElementById("nomeJogador").value

  var novoJogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }

  jogadores.push(novoJogador)

  exibirJogadoresNaTela(jogadores)
  document.querySelector('#nomeJogador').value = ""
})

var jogadores = []

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}



exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""

  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function addPlayer(){

}

//SOBRE

var btnSobre = document.getElementById("btnSobre")
var janelaSobre = document.getElementById("sobre")

btnSobre.addEventListener("click", function(){
  janelaSobre.style.display = "block"
  menu.classList.remove("show")
  btnIniciar.classList.remove("btnPressed")
})

var closeSobre = document.getElementById("closeSobre")
closeSobre.addEventListener("click", function(){
  janelaSobre.style.display = "none"
})

// SUPER TRUNFO

var closeSuperTrunfo = document.getElementById("closeSuperTrunfo")
var gameSuperTrunfo = document.getElementById("superTrunfo")
var btnSuperTrunfo = document.getElementById("prgSuperTrunfo")

closeSuperTrunfo.addEventListener("click", function(){
  gameSuperTrunfo.style.display = "none"
})

btnSuperTrunfo.addEventListener("click", function(){
  gameSuperTrunfo.style.display = "block"
})

// CARTAS SUPER TRUNFO

var card01 = {
  nome: "Alfa Romeo 2000 Spider",
  imagem: 'https://www.ogiva.com.br/testes/alfa-romeo-2000-spider.jpg',
  atributos:{
    "Vel. máxima: ": 198 + " Km/h",
    "HP: ": 131,
    "0 à 100 Km/h: ": 11 + " seg.",
    cc: 1992,
    Cilindros: 4,
    kg: 1045
  }
}

var card02 = {
  nome: "Mercedes 450 SL",
  imagem: 'https://www.ogiva.com.br/testes/mercedes-450-sl.jpg',
  atributos:{
    "Vel. máxima: ": 215 + " Km/h",
    "HP: ": 225,
    "0 à 100 Km/h: ": 9 + " seg.",
    cc: 4520,
    Cilindros: 8,
    kg: 1580
  }
}

var card03 = {
  nome: "Panther J 72 V 12",
  imagem: 'https://www.ogiva.com.br/testes/panther-j72-v12.jpg',
  atributos:{
    "Vel. máxima: ": 220 + " Km/h",
    "HP: ": 269,
    "0 à 100 Km/h: ": 6 + " seg.",
    cc: 5343,
    Cilindros: 12,
    kg: 1350
  }
}

var card04 = {
  nome: "Monteverdi Palm Beach",
  imagem: 'https://www.ogiva.com.br/testes/moteverdi-palm-beach.jpg',
  atributos:{
    "Vel. máxima: ": 240 + " Km/h",
    "HP: ": 305,
    "0 à 100 Km/h: ": 6 + " seg.",
    cc: 7207,
    Cilindros: 8,
    kg: 1430
  }
}

var card05 = {
  nome: "Oldsmobile 98 Regency",
  imagem: 'https://www.ogiva.com.br/testes/oldsmobile-98-regency-ST.jpg',
  atributos:{
    "Vel. máxima: ": 195 + " Km/h",
    "HP: ": 190,
    "0 à 100 Km/h: ": 11 + " seg.",
    cc: 7325,
    Cilindros: 8,
    kg: 2330
  }
}

var card06 = {
  nome: "Buick Century",
  imagem: 'https://www.ogiva.com.br/testes/buick-century.jpg',
  atributos:{
    "Vel. máxima: ": 170 + " Km/h",
    "HP: ": 165,
    "0 à 100 Km/h: ": 12 + " seg.",
    cc: 5665,
    Cilindros: 8,
    kg: 1860
  }
}

var card07 = {
  nome: "Chevrolet Camaro LT",
  imagem: 'https://www.ogiva.com.br/testes/chevrolet-camaro-lt.jpg',
  atributos:{
    "Vel. máxima: ": 180 + " Km/h",
    "HP: ": 155,
    "0 à 100 Km/h: ": 12 + " seg.",
    cc: 5657,
    Cilindros: 8,
    kg: 1690
  }
}

var card08 = {
  nome: "Pontiac Firebird Formula",
  imagem: 'https://www.ogiva.com.br/testes/pontiac-firebird-formula.jpg',
  atributos:{
    "Vel. máxima: ": 200 + " Km/h",
    "HP: ": 185,
    "0 à 100 Km/h: ": 10 + " seg.",
    cc: 6473,
    Cilindros: 8,
    kg: 1746
  }
}

var cartaMaquina
var cartaJogador
var cartas = [card01, card02, card03, card04, card05, card06, card07, card08]

var pontosJogador = 0
var pontosMaquina = 0

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("qntCartas")
  divQuantidadeCartas.innerHTML = "Cartas em jogo: " + cartas.length
}

function atualizaPlacar(){
  var pontoJogador = document.getElementById("pontoJ") 
  var pontoMaquina = document.getElementById("pontoM")

  pontoJogador.innerHTML = pontosJogador
  pontoMaquina.innerHTML = pontosMaquina
}

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)

  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)

  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false

  exibeCartaJogador()
  atualizaQuantidadeDeCartas()

}

function exibeCartaJogador(){
  var imgCartaJogador = document.getElementById("imagem-carta-jogador")
  imgCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var nome = document.getElementById("nome-carta-jogador")
  nome.textContent = cartaJogador.nome

  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

  var opcoesAtributos = document.getElementById("opcoes-atributos-jogador")
  opcoesAtributos.innerHTML = opcoesTexto

}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName("atributo")
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }

}

function jogar(){
  var resultado = document.getElementById("resultadoSuperTrunfo")
  var atributoSelecionado = obtemAtributoSelecionado()
  var cores = document.getElementById("painel-resultado")

  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    resultado.innerHTML = "Você venceu"
    cores.style.backgroundColor = "green"
    pontosJogador++

  }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    resultado.innerHTML = "Você perdeu"
    cores.style.backgroundColor = "red"
    pontosMaquina++

  }else{
    resultado.innerHTML = "Empatou"
  }

  if(cartas.length == 0){
    var divCartas = document.getElementById("cartas")
    var mensagem = document.getElementById("resultadoSuperTrunfo")
    var painel = document.getElementById("painel-resultado")
    var placar = document.getElementById("placar")
    var quantidadeCartas = document.getElementById("quantidade-cartas")

    if(pontosJogador > pontosMaquina){
      divCartas.innerHTML = `
            <div class="carta-jogador" id="carta-jogador">
                <p id="nome-carta-jogador" class="nome-carta"></p>
                <div class="imagem-carta" id="imagem-carta-jogador"></div>
                <div class="opcoes-atributos" id="opcoes-atributos-jogador"></div>
            </div>
            <div class="carta-maquina" id="carta-maquina">
                <p id="nome-carta-maquina" class="nome-carta"></p>
                <div class="imagem-carta" id="imagem-carta-maquina"></div>
                <div class="opcoes-atributos" id="opcoes-atributos-maquina"></div>
            </div>
            `
      exibeCartaJogador()
      exibeCartaMaquina()
      mensagem.innerHTML = "Parabéns!!! Você venceu."
    }else if(pontosJogador < pontosMaquina){
      divCartas.innerHTML = `
                <div class="carta-jogador" id="carta-jogador">
                    <p id="nome-carta-jogador" class="nome-carta"></p>
                    <div class="imagem-carta" id="imagem-carta-jogador"></div>
                    <div class="opcoes-atributos" id="opcoes-atributos-jogador"></div>
                </div>
                <div class="carta-maquina" id="carta-maquina">
                    <p id="nome-carta-maquina" class="nome-carta"></p>
                    <div class="imagem-carta" id="imagem-carta-maquina"></div>
                    <div class="opcoes-atributos" id="opcoes-atributos-maquina"></div>
                </div>
            `
      exibeCartaJogador()
      exibeCartaMaquina()
      mensagem.innerHTML = "Que pena!!! Você perdeu :("
    }else{
      divCartas.innerHTML = `
                <div class="carta-jogador" id="carta-jogador">
                    <p id="nome-carta-jogador" class="nome-carta"></p>
                    <div class="imagem-carta" id="imagem-carta-jogador"></div>
                    <div class="opcoes-atributos" id="opcoes-atributos-jogador"></div>
                </div>
                <div class="carta-maquina" id="carta-maquina">
                    <p id="nome-carta-maquina" class="nome-carta"></p>
                    <div class="imagem-carta" id="imagem-carta-maquina"></div>
                    <div class="opcoes-atributos" id="opcoes-atributos-maquina"></div>
                </div>
            `
      exibeCartaJogador()
      exibeCartaMaquina()
      mensagem.innerHTML = "Desta vez empatou!!! Vai tentar mais uma?."
    }

    // painel.style.display = "none"
    placar.style.display = "none"
    quantidadeCartas.style.display = "none"
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true
    document.getElementById("btnSortear").disabled = true
    document.getElementById("reset").style.display = "block"
  }else{
    exibeCartaMaquina()
    atualizaPlacar()

    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = false
  }

}

function exibeCartaMaquina(){
  var imgCartaMaquina = document.getElementById("imagem-carta-maquina")
  imgCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

  var nome = document.getElementById("nome-carta-maquina")
  nome.textContent = cartaMaquina.nome

  var opcoesTexto = ""
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }

  var opcoesAtributos = document.getElementById("opcoes-atributos-maquina")
  opcoesAtributos.innerHTML = opcoesTexto
}

function proximaRodada(){
  console.log("aqui foi")
  var divCartas = document.getElementById("cartas")
  divCartas.innerHTML = `
    <div class="carta-jogador" id="carta-jogador">
        <p id="nome-carta-jogador" class="nome-carta"></p>
        <div class="imagem-carta" id="imagem-carta-jogador"></div>
        <div class="opcoes-atributos" id="opcoes-atributos-jogador"></div>
    </div>
    <div class="carta-maquina" id="carta-maquina">
        <p id="nome-carta-maquina" class="nome-carta"></p>
        <div class="imagem-carta" id="imagem-carta-maquina"></div>
        <div class="opcoes-atributos" id="opcoes-atributos-maquina"></div>
    </div>
    `
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true

  var resultado = document.getElementById("resultadoSuperTrunfo") 
  resultado.innerHTML = ""
  document.getElementById("painel-resultado").style.backgroundColor = "#808080"
}

function novoJogo(){
  cartas = [card01, card02, card03, card04, card05, card06, card07, card08]
  pontosMaquina = 0
  pontosJogador = 0

  var divCartas = document.getElementById("cartas")
  divCartas.innerHTML = `
    <div class="carta-jogador" id="carta-jogador">
        <p id="nome-carta-jogador" class="nome-carta"></p>
        <div class="imagem-carta" id="imagem-carta-jogador"></div>
        <div class="opcoes-atributos" id="opcoes-atributos-jogador"></div>
    </div>
    <div class="carta-maquina" id="carta-maquina">
        <p id="nome-carta-maquina" class="nome-carta"></p>
        <div class="imagem-carta" id="imagem-carta-maquina"></div>
        <div class="opcoes-atributos" id="opcoes-atributos-maquina"></div>
    </div>
    `
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true
  var painelResultado = document.getElementById("painel-resultado")
  painelResultado.style.display = "block"
  painelResultado.style.backgroundColor = "#808080"
  document.getElementById("resultadoSuperTrunfo").innerHTML = ""
  document.getElementById("placar").style.display = "flex"
  document.getElementById("quantidade-cartas").style.display = "block"
  document.getElementById("reset").style.display = "none"
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
}

//CERTIFICADO

var certificado = document.getElementById("certificado")
var closeCertificado = document.getElementById("closeCertificado")
var prgCertificado = document.getElementById("prgCertificado")

closeCertificado.addEventListener("click", function(){
  certificado.style.display = "none"
})

prgCertificado.addEventListener("click", function(){
  certificado.style.display = "block"
  menu.classList.remove("show")
  btnIniciar.classList.remove("btnPressed")
})