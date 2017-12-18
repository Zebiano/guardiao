// Variaveis Globais
var escolha = 0; // indica o quadrado selecionado pelo utilizador
var redes = 0; // indica o quadrado selecionado pelo guarda-redes

// Coordenadas do rato
var mouseX;
var mouseY;

// Array para os quadrados
var arrayQuadrados = [];

function Quadrado(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
}

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

function guardaRedes() {
    redes = Math.floor(Math.random() * 9 + 1);
    //console.log("Redes: " + redes);
}

function click(e) {
    // Receber coordenadas do rato
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    //console.log('x: ' + mouseX + ' y: ' + mouseY);

    // Ciclo for para percorrer array dos 9 retangulos
    for (var i = 0; i < arrayQuadrados.length; i++) {
        // Ifs para checkar se o clique foi dentro de um dos retangulos
        if ((arrayQuadrados[i].x < mouseX) && ((arrayQuadrados[i].w + arrayQuadrados[i].x) > mouseX)) {
            if ((arrayQuadrados[i].y < mouseY) && ((arrayQuadrados[i].h + arrayQuadrados[i].y) > mouseY)) {
                // Guarda o quadrado escolhido pelo utilizador
                escolha = i + 1;
                //console.log("Escolha: " + escolha);
            }
        }
    }
}

// ((arrayQuadrados[i].x < pointerX && arrayQuadrados[i].w + arrayQuadrados[i].x > pointerX) && ((arrayQuadrados[i].y < pointerY && arrayQuadrados[i].y + arrayQuadrados[i].y > pointerY)))

criarQuadrado();
guardaRedes();
canvas.addEventListener('click', click); //evento clique do rato