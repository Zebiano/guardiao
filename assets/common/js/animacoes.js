// Variaveis Globais
var dificuldade = getDificuldade();

// Image()
var imgPublicidade = new Image()
var imgBaliza = new Image()
var imgGuardaRedes = new Image();
var imgBola = new Image()
var imgPlateia = new Image()

// Image() sources
imgBaliza.src = '../assets/common/img/baliza.png';
imgPublicidade.src = '../assets/common/img/placares.png';
imgBola.src = '../assets/common/img/bola.png';
imgPlateia.src = '../assets/common/img/pessoas_completo.png';

// Variaveis do canvas
var canvasX = 0;
var canvasY = 0;

// Variaveis para a bola
var bolaV = 0;
var bolaPosX = 610; // variaçao da bola em X
var bolaPosY = 583; // variaçao da bola em Y

// Variaveis para a plateia
var plateiaY = 0
var plateiaV = 0.8

// Variaveis para o guarda-redes
var GRskipFrames = 0;
var GRframeIndex = -1;
var GRx = 500;
var GRy = 100;

// Aniamcao da Bola
function animBola(curvaPonto1, curvaPonto2, curvaPonto3, curvaPonto4, curvaPonto5, curvaPonto6, curvaPonto7, curvaPonto8) {
    // Pontos da curva
    var x0 = curvaPonto1;
    var y0 = curvaPonto2;
    var x1 = curvaPonto3;
    var y1 = curvaPonto4;
    var x2 = curvaPonto5;
    var y2 = curvaPonto6;
    var x3 = curvaPonto7;
    var y3 = curvaPonto8;

    ctx.beginPath();
    ctx.drawImage(imgBola, bolaPosX, bolaPosY)

    bolaV += 0.01
    //console.log("V: " + bolaV);

    bolaPosX = ((1 - bolaV) * ((1 - bolaV) * ((1 - bolaV) * x0 + bolaV * x1) + bolaV * ((1 - bolaV) * x1 + bolaV * x2)) + bolaV * ((1 - bolaV) * ((1 - bolaV) * x1 + bolaV * x2) + bolaV * ((1 - bolaV) * x2 + bolaV * x3)));
    bolaPosY = (1 - bolaV) * ((1 - bolaV) * ((1 - bolaV) * y0 + bolaV * y1) + bolaV * ((1 - bolaV) * y1 + bolaV * y2)) + bolaV * ((1 - bolaV) * ((1 - bolaV) * y1 + bolaV * y2) + bolaV * ((1 - bolaV) * y2 + bolaV * y3));

    if (bolaV >= 1) {
        window.clearInterval(timerBola);
        //Da reset a bola mas e instantaneo
        bolaPosX = 610; // variaçao da bola em X
        bolaPosY = 583; // variaçao da bola em Y
        bolaV = 0;
        ctx.closePath();
    }
}

// Animacao do guarda-redes
function animGuardaRedes(e) {
    // Source
    imgGuardaRedes.src = '../assets/common/sprites/keeper/Sprite' + e + '.png';

    // Dependendo da escolha do redes, ou sao uma ou duas ou tres frames
    if (e == 1 || e == 3 || e == 7 || e == 9) { // 3 frames
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 25) {
            GRframeIndex++;
        } else if (GRskipFrames == 50) {
            GRframeIndex++;
        } else if (GRskipFrames == 70) {
            resetVariaveis();
        }
        GRskipFrames++;
    } else if (e == 2 || e == 4 || e == 6 || e == 8) { // 2 frames
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 25) {
            GRframeIndex++;
        } else if (GRskipFrames == 70) {
            resetVariaveis();
        }
        GRskipFrames++;
    } else { // 1 frame
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 70) {
            resetVariaveis();
        }
        GRskipFrames++;
    }
}

// Animacao da publicidade
function animPublicidade() {
    ctx.drawImage(imgPublicidade, canvasX, canvasY);
    // Desenhar o bocado da imagem (1290 - x, 0) que esta fora do canvas no ponto (0,0)
    if (canvasX > 0) {
        ctx.drawImage(imgPublicidade, 1280 - canvasX, 0, canvasX, 720, 0, 0, canvasX, 720);
    }
    canvasX++;
    //console.log(x)

    //Quando o X chega ao fim da imagem volta a ser 0
    if (canvasX == 1280) {
        canvasX = 0;
    }
}

// Animacao da Plateia
function animPlateia() {
    ctx.drawImage(imgPlateia, 0, plateiaY);
    plateiaY -= plateiaV;
    if (plateiaY <= -10) {
        plateiaV = -plateiaV
    } else if (plateiaY >= 0) {
        plateiaV = -plateiaV
    }
}

// Acrescenta a quantidade de golos
function marcador(golos) {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(30, 40, 188)';
    ctx.rect(1160, 500, 100, 60);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(1160, 560, 100, 110);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.rect(1160, 500, 100, 170);
    ctx.stroke();

    ctx.font = 'bold 40px Verdana';
    ctx.fillText("GOLOS", 1167, 545, 86);

    ctx.font = 'bold 100px Verdana';
    ctx.fillStyle = 'black';
    ctx.fillText(golos, 1175, 650, 86);

    //console.log("ola");
}

// Começar as animaçoes
function comecarAnimacoes() {
    /*
    Sim, esta uma funcao dentro de uma funcao. Mas isso é porque o timer (no fim da funcao comecarAnimacoes()) age de forma diferente se tiver dentro da funcao
    ou fora da funcao. Se estiver dentro fica mais lento, mas mesmo assim a 60fps, se estiver fora fica a 60 fps mas mais rapido...
    */

    function animacoes() {
        // Apaga o canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        animPlateia(); // Animacao da Plateia
        animPublicidade(); // Animacao da Publicidade

        ctx.drawImage(imgBaliza, 0, 0); // Desenhar a baliza
        ctx.drawImage(imgBola, bolaPosX, bolaPosY); // Desenhar a bola

        // Define a variavel do redes
        redes = getGuardaRedes();

        if (redes == undefined) {
            imgGuardaRedes.src = '../assets/common/sprites/keeper/Sprite1.png';
            ctx.drawImage(imgGuardaRedes, 0, 0, 288, 288, 500, 100, 288, 288);
        } else {
            animGuardaRedes(redes);
        }

        marcador(golos); // Acrescenta a quantidade de golos
    }

    // Chamar a função para as animacoes
    var timer = window.setInterval(animacoes, 1000 / 60);
}

comecarAnimacoes();
