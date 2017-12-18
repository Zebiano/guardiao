// Variaveis Globais
var quadrado = 0; // indica o quadrado selecionado pelo utilizador
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
    arrayQuadrados.push(new Quadrado(357, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(357, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 271, 189, 97));
}

function click(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    console.log('x: ' + mouseX + ' y: ' + mouseY);

    for (var i = 0; i < arrayQuadrados.length; i++) {
        if ((arrayQuadrados[i].x < mouseX) && ((arrayQuadrados[i].w + arrayQuadrados[i].x) > mouseX)) {
            if ((arrayQuadrados[i].y < mouseY) && ((arrayQuadrados[i].h + arrayQuadrados[i].y) > mouseY)) {
                arrayQuadrados[i].selected = true;
            }
        } else {
            arrayQuadrados[i].selected = false;
        }
        console.log("i: " + arrayQuadrados[i].selected);
    }
}

// ((arrayQuadrados[i].x < pointerX && arrayQuadrados[i].w + arrayQuadrados[i].x > pointerX) && ((arrayQuadrados[i].y < pointerY && arrayQuadrados[i].y + arrayQuadrados[i].y > pointerY)))

criarQuadrado();
canvas.addEventListener('click', click); //evento clique do rato