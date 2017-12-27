// Animacao da bola
var v = 0;
var posX = 610; // variaçao da bola em X
var posY = 583; // variaçao da bola em Y

var yPes = 0
var yPes2 = 0
var vPes = 0.8
var vPes2 = 0.5

var imagem = new Image() // Criar variavel imagem
imagem.src = '../assets/common/img/placares.png'; // Atribuir imagem a variavel
var baliza = new Image() // Criar variavel imagem
baliza.src = '../assets/common/img/baliza.png'; // Atribuir imagem a variavel
// Bola
var bolita = new Image()
bolita.src = '../assets/common/img/bola.png';
var pessoas = new Image()
pessoas.src = '../assets/common/img/pessoas_completo.png';

// Desenho da Bola
function desenhar(ponto1, ponto2, ponto3, ponto4, ponto5, ponto6, ponto7, ponto8) {

    var x0 = ponto1;   // pontos da curva
    var y0 = ponto2;
    var x1 = ponto3;
    var y1 = ponto4;
    var x2 = ponto5;
    var y2 = ponto6;
    var x3 = ponto7;
    var y3 = ponto8;


    ctx.beginPath();
    ctx.drawImage(bolita, posX, posY)

    v += 0.01
    posX = ((1 - v) * ((1 - v) * ((1 - v) * x0 + v * x1) + v * ((1 - v) * x1 + v * x2)) + v * ((1 - v) * ((1 - v) * x1 + v * x2) + v * ((1 - v) * x2 + v * x3)));
    posY = (1 - v) * ((1 - v) * ((1 - v) * y0 + v * y1) + v * ((1 - v) * y1 + v * y2)) + v * ((1 - v) * ((1 - v) * y1 + v * y2) + v * ((1 - v) * y2 + v * y3));


    if (v >= 1)
        window.clearInterval(timerBola)


}



// Animacao do guarda-redes
function animRedes() {
    // TODO
}

// Animacao da publicidade
function animPublicidade() {


    // Canto superior esquerdo - onde vamos desenhar a imagem
    var x = 0;
    var y = 0;

    // Animação da publicidade
    function publicidade() {
        ctx.clearRect(0, 0, canvas.width, canvas.height) // Apaga o canvas

        ctx.drawImage(pessoas, 0, yPes)
        ctx.drawImage(imagem, x, y) //desenha a imagem

        if (x > 0) {                                                    // Se o x for maior que 0
            ctx.drawImage(imagem, 1280 - x, 0, x, 720, 0, 0, x, 720)    // Desenhar o bocado da imagem (1290 - x, 0) Que esta fora do canvas No ponto (0,0)
        }
        x++;
        //console.log(x)
        if (x == 1280) {  //Quando o X chega ao fim da imagem
            x = 0       //volta a ser 0
        }
        
        ctx.drawImage(baliza, 0, 0) //desenha a imagem
        ctx.drawImage(bolita, posX, posY)

        yPes -= vPes
        if (yPes <= -10)
            vPes = -vPes
        else if (yPes >= 0)
            vPes = -vPes



    }
    // Chamar a função da publicidade
    var timer = window.setInterval(publicidade, 1000 / 60)
}




//animBola();
//animRedes();
animPublicidade();
