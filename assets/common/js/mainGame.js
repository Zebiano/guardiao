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

// PUBLICIDADE
var imagem = new Image() // Criar variavel imagem
imagem.src = '../assets/common/img/placares.png'; // Atribuir imagem a variavel

// Canto superior esquerdo - onde vamos desenhar a imagem
var x = 0;
var y = 0;

// Animação da publicidade
function publicidade() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // Apaga o canvas


    ctx.drawImage(imagem, x, y) //desenha a imagem
    if (x > 0)                                                      // Se o x for maior que 0
        ctx.drawImage(imagem, 1280 - x, 0, x, 720, 0, 0, x, 720)    // Desenhar o bocado da imagem (1290 - x, 0)
                                                                    // Que esta fora do canvas
    x++;                                                            // No ponto (0,0)
    //console.log(x)
    if (x == 1280)  //Quando o X chega ao fim da imagem
        x = 0       //volta a ser 0

}
// Chamar a função da publicidade
var timer = window.setInterval(publicidade, 1000 / 60)

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