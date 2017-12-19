// Variaveis Globais
var escolha = 0; // Indica o quadrado selecionado pelo utilizador
var redes = 0; // Indica o quadrado selecionado pelo guarda-redes
var defesa; // Define se o guarda redes conseguiu defender ou nao

// Coordenadas do rato
var mouseX;
var mouseY;

// Array para os quadrados
var arrayQuadrados = [];

// Construtor dos quadrados
function Quadrado(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
}

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

// O Guarda-redes escolhe qual quadrado defender
function guardaRedes() {
    redes = Math.floor(Math.random() * 9 + 1);
    console.log("Redes: " + redes);
}

// Funcao que ativa no clique do rato
function click(e) {
    // Receber coordenadas do rato
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    //console.log('x: ' + mouseX + ' y: ' + mouseY);

    // Ciclo for para percorrer o array dos quadrados
    for (var i = 0; i < arrayQuadrados.length; i++) {
        // If para checkar se o clique foi dentro de um dos retangulos
        if (((arrayQuadrados[i].x < mouseX) && ((arrayQuadrados[i].w + arrayQuadrados[i].x) > mouseX)) && ((arrayQuadrados[i].y < mouseY) && ((arrayQuadrados[i].h + arrayQuadrados[i].y) > mouseY))) {
            arrayQuadrados[i].selected = true;
            // Guarda o quadrado escolhido pelo utilizador
            escolha = i + 1;
            console.log("Escolha: " + escolha);

            if (escolha == redes) {
                defesa = true;
                resultado();
            } else {
                defesa = false;
                resultado();
            }
        }
    }
}

// Define se o utilizador marcou ou nao
function resultado() {
    if (defesa == true) {
        alert("You lost...");
    } else if (defesa == false) {
        alert("You won!");
    }
    resetVariaveis();
}

// Da reset as variaveis
function resetVariaveis() {
    var escolha = 0; // Indica o quadrado selecionado pelo utilizador
    var redes = 0; // Indica o quadrado selecionado pelo guarda-redes
    var defesa; // Define se o guarda redes conseguiu defender ou nao
    guardaRedes();
}

criarQuadrado(); // Cria as areas de clique
guardaRedes(); // Define o quadrado que o guarda-redes ira defender

canvas.addEventListener('click', click); //evento clique do rato