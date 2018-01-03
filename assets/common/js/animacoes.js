// Variaveis Globais
var dificuldade = getDificuldade(); // Obtem a dificuldade
redes = getGuardaRedes(); // Define a variavel do redes
var timer; // Timer das animacoes

// Image()
var imgBaliza = new Image()
var imgBola = new Image()
var imgPlateia = new Image()
var imgPublicidade = new Image()
var imgGuardaRedes = new Image();

// Image() sources
imgBaliza.src = '../assets/common/img/baliza.png';
imgBola.src = '../assets/common/img/bola.png';
imgPlateia.src = '../assets/common/img/pessoas_completo.png';
imgPublicidade.src = '../assets/common/img/placares.png';

// Variaveis do canvas
var canvasX = 0;
var canvasY = 0;

// Variaveis para a bola
var bolaV = 0; // Variaçao da velocidade da bola
var bolaPosX = 610; // Posiçao da bola em X
var bolaPosY = 583; // Posicao da bola em Y

// Variaveis para a plateia
var plateiaY = 0
var plateiaV = 0.8

// Variaveis para o guarda-redes
var GRskipFrames = 0; // Frames que passamos a frente para a animacao do guarda-redes
var GRframeIndex = -1; // Index para desenhar a imagem correta das sprites
var GRx = 500; // Posicao do guarda-redes em X
var GRy = 100; // Posicao do guarda-redes em Y

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

    bolaV += 0.02
    //console.log("V: " + bolaV);

    bolaPosX = ((1 - bolaV) * ((1 - bolaV) * ((1 - bolaV) * x0 + bolaV * x1) + bolaV * ((1 - bolaV) * x1 + bolaV * x2)) + bolaV * ((1 - bolaV) * ((1 - bolaV) * x1 + bolaV * x2) + bolaV * ((1 - bolaV) * x2 + bolaV * x3)));
    bolaPosY = (1 - bolaV) * ((1 - bolaV) * ((1 - bolaV) * y0 + bolaV * y1) + bolaV * ((1 - bolaV) * y1 + bolaV * y2)) + bolaV * ((1 - bolaV) * ((1 - bolaV) * y1 + bolaV * y2) + bolaV * ((1 - bolaV) * y2 + bolaV * y3));

    if (bolaV >= 1) {
        window.clearInterval(timerBola);
        ctx.closePath();
    }
}

// Animacao do guarda-redes
function animGuardaRedes(e) {
    // Source
    imgGuardaRedes.src = '../assets/common/sprites/keeper/Sprite' + e + '.png';

    // Caso queiramos que o redes va sempre ao mesmo quadrado, define-se o quadrado aqui (Na consola fica errado o "Redes: ")
    //redes = 4;

    // Dependendo da escolha do redes, ou sao uma ou duas ou tres frames/imagens
    if (e == 1 || e == 3 || e == 7 || e == 9) { // 3 frames/imagens
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 20) {
            GRframeIndex++;
            if (e == 1 || e == 7) {
                GRx = GRx - 50;
            } else {
                GRx = GRx + 50;
            }
        } else if (GRskipFrames == 40) {
            GRframeIndex++;
            if (e == 1 || e == 7) {
                GRx = GRx - 50;
            } else {
                GRx = GRx + 50;
            }
        } else if (GRskipFrames == 52) {
            resultado(); // Alert box a abrir os resultados
            resetVariaveis(); // Reset as variaveis
        }
        GRskipFrames++;
    } else if (e == 2 || e == 4 || e == 6 || e == 8) { // 2 frames/imagens
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 30) {
            GRframeIndex++;
            if (e == 4) {
                GRx = GRx - 100;
            } else if (e == 6) {
                GRx = GRx + 80;
            } else if (e == 8) {
                GRx = GRx - 30;
                GRy = GRy - 20;
            }
        } else if (GRskipFrames == 52) {
            resultado(); // Alert box a abrir os resultados
            resetVariaveis(); // Reset as variaveis
        }
        GRskipFrames++;
    } else { // 1 frame/imagem
        ctx.drawImage(imgGuardaRedes, GRframeIndex * 288, 0, 288, 288, GRx, GRy, 288, 288);
        if (GRskipFrames == 0) {
            GRframeIndex++;
        } else if (GRskipFrames == 52) {
            resultado(); // Alert box a abrir os resultados
            resetVariaveis(); // Reset as variaveis
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
function marcadorGolos(golos) {
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

    ctx.closePath();
}

// Mostra as tentativas restantes
function marcadorTentativas(tentativas) {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(224, 44, 44)';
    ctx.rect(20, 500, 100, 60);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(20, 560, 100, 110);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.rect(20, 500, 100, 170);
    ctx.stroke();

    ctx.font = 'bold 40px Verdana';
    ctx.fillText("Tentativas", 27, 545, 86);

    ctx.font = 'bold 100px Verdana';
    ctx.fillStyle = 'black';
    ctx.fillText(tentativas, 33, 650, 86);

    ctx.closePath();
}


// Começar as animaçoes
function comecarAnimacoes(e) {
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

        if (redes == undefined) {
            imgGuardaRedes.src = '../assets/common/sprites/keeper/Sprite1.png';
            ctx.drawImage(imgGuardaRedes, 0, 0, 288, 288, 500, 100, 288, 288);
        } else {
            animGuardaRedes(redes);
        }

        marcadorGolos(golos); // Acrescenta a quantidade de golos
        marcadorTentativas(tentativas); // Mostra as tentativas restantes
    }

    // Chamar a função para as animacoes (comentar a linha abaixo para parar as animacoes)
    timer = window.setInterval(animacoes, 1000 / 60);
}

// Chamar a função para comecar as animacoes
comecarAnimacoes();