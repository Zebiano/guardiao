// Variaveis Globais
var dificuldade; // Dificuldade do jogo
var redes; // Escolha do guarda-redes
var GRskipFrames; // Frames que passamos a frente para a animacao do guarda-redes

// -- ARRAYS --

// Array para os quadrados
var arrayQuadrados = [];
//var arraySons = [];

// -- CONSTRUTORES --

// Construtor dos quadrados
function Quadrado(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
}

/*// Construtor dos sons
function Som(src) {
    this.src = src;
    this.play = function () {
        this.play();
    }
    this.stop = function () {
        this.pause();
    }
}*/

// -- GETTERS AND SETTERS --

// Define a dificuldade
function setDificuldade(e) {
    // Para isto usamos uma forma de guardar data no browser, nem todos sao compativeis po isso fazse este check com o if (parecido cmo a prof faz o check do canvas)
    if (typeof (Storage) !== "undefined") {
        dificuldade = e;

        if (dificuldade == 1) {
            localStorage.setItem("lastname", "easy");
        } else if (dificuldade == 2) {
            localStorage.setItem("lastname", "medium");
        } else if (dificuldade == 3) {
            localStorage.setItem("lastname", "hard");
        } else {
            console.log("A dificuldade nao funcionou...")
        }
    } else {
        alert("Sorry, your browser does not support Web Storage... If you want to play this game you'll need a browser that supports it. You can still play it on the 'easy' difficulty though!");
        widnows.open("mainGame.html", "_self");
    }
}

// Obtem a dificuldade
function getDificuldade() {
    return localStorage.getItem("lastname");
}

// Define a escolha do guarda-redes
function setGuardaRedes(e) {
    redes = e;
}

// Obtem a escolha do guarda-redes
function getGuardaRedes() {
    return redes;
}

// -- CODIGO --

// Adiciona os quadrados ao array. Se for para mudar as coordenadas, muda-se aqui
function criarQuadrado() {
    arrayQuadrados.push(new Quadrado(357, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(357, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(357, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 271, 189, 97));
}

/*// Adiciona os sons ao array. Se for para mudar os sons, muda-se aqui
function criarSom() {
    //arraySons.push(new Som("../assets/common/sounds/bg_sound.wav"));
    meusom = new Som("../assets/common/sounds/bg_sound.wav");
    meusom.play();
}*/