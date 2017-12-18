// Variaveis Globais
var quadrado = 0; // indica o quadrado selecionado pelo utilizador
var redes = 0; // indica o quadrado selecionado pelo guarda-redes

// Coordenadas do rato
var mouseX;
var mouseY;

// Array para os quadrados
var arrayQuadrados = [];

function criarQuadrado(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;

    this.isInside
}

function mouseDown(e) {
    // obtém as coordenadas do rato dentro do Canvas
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    // verifica se o rato se encontra posicionado em algum rectângulo
    for (var i = 0; i < arrayQuadrados.length; i++) {
        if (arrayQuadrados[i].isInside(mouseX, mouseY)) {
            arrayQuadradosr[i].selected = true;
            //ativa evento MouseMove
            canvas.addEventListener('mousemove', mouseMove);
        }
    }
}

function click(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    ctx.fillText('x: ' + mouseX + ' y: ' + mouseY, 0, 100);
    console.log('x: ' + mouseX + ' y: ' + mouseY);
}

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('click', click); //evento clique do rato