// Variaveis Globais
var escolha; // Indica o quadrado selecionado pelo utilizador
var redes; // Indica o quadrado selecionado pelo guarda-redes
var defesa; // Define se o guarda-redes conseguiu defender ou nao
var golos = 0; // Define a quantidade de golos que o jogador marca
var tentativas = 5; // Define a quantidade de tentativas restantes
var input; // Define se o jogador quer jogar novamente
var result; // Define se o jogador ganhou ou nao

var dificuldade = getDificuldade(); // Obtem a dificuldade do jogo
console.log("Dificuldade: " + dificuldade);

// Coordenadas do rato
var mouseX;
var mouseY;

// O Guarda-redes escolhe qual quadrado defender
function guardaRedes(e) {
    if (dificuldade == "easy") {
        redes = randomQuadrado(9, e);
    } else if (dificuldade == "medium") {
        redes = randomQuadrado(6, e);
    } else if (dificuldade == "hard") {
        redes = randomQuadrado(3, e);
    } else {
        console.log("Erro na dificuldade. Ou então o browser do utilizador nao suporta localStorage.")
    }
    console.log("Redes: " + redes);
    //console.log("GetRedes: " + getGuardaRedes());
}

// Devolve um numero aleatorio consoante a dificuldade
function randomQuadrado(numQ, num) {
    if (numQ == 9) {
        switch (num) {
            case 1:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 2:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 3:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 4:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 5:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 6:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 7:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 8:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 9:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case undefined:
                console.log("O redes esta a espera da escolha do jogador");
                break;
            default:
                console.log("Erro na funcao randomQuadrado. Numero: " + num);
        }
    } else if (numQ == 6) {
        switch (num) {
            case 1:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 2:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 3:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 4:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 5:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 6:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 7:
                return Math.floor(Math.random() * numQ + 2);
                break;
            case 8:
                return Math.floor(Math.random() * numQ + 3);
                break;
            case 9:
                return Math.floor(Math.random() * numQ + 4);
                break;
            case undefined:
                console.log("O redes esta a espera da escolha do jogador");
                break;
            default:
                console.log("Erro na funcao randomQuadrado. Numero: " + num);
        }
    } else if (numQ == 3) {
        switch (num) {
            case 1:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 2:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 3:
                return Math.floor(Math.random() * numQ + 1);
                break;
            case 4:
                return Math.floor(Math.random() * numQ + 2);
                break;
            case 5:
                return Math.floor(Math.random() * numQ + 3);
                break;
            case 6:
                return Math.floor(Math.random() * numQ + 4);
                break;
            case 7:
                return Math.floor(Math.random() * numQ + 5);
                break;
            case 8:
                return Math.floor(Math.random() * numQ + 6);
                break;
            case 9:
                return Math.floor(Math.random() * numQ + 7);
                break;
            case undefined:
                console.log("O redes esta a espera da escolha do jogador");
                break;
            default:
                console.log("Erro na funcao randomQuadrado Numero: " + num);
        }
    }
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
            // Guarda o quadrado escolhido pelo utilizador
            arrayQuadrados[i].selected = true;
            escolha = i + 1;
            console.log("Escolha: " + escolha);

            // O guarda redes escolhe um quadrado consoante a escolha do jogador
            guardaRedes(escolha);
            //console.log(redes);
            setGuardaRedes(redes);

            if (escolha == redes) {
                defesa = true;
                tentativas--;
                arraySons[2].play(); // Som - Sad
            } else {
                defesa = false;
                golos++;
                tentativas--;
                arraySons[1].play(); // Som - Golo
            }
        }
    }

    // Atribuir movimento da bola a cada escolha
    switch (escolha) {
        case 1:
            timerBola = window.setInterval(function () { animBola(610, 583, 368, 450, 280, 186, 429, 110) }, 1000 / 60);
            break;
        case 2:
            timerBola = window.setInterval(function () { animBola(610, 583, 485, 444, 390, 216, 625, 110) }, 1000 / 60);
            break;
        case 3:
            timerBola = window.setInterval(function () { animBola(610, 583, 843, 520, 975, 113, 800, 110) }, 1000 / 60);
            break;
        case 4:
            timerBola = window.setInterval(function () { animBola(610, 583, 474, 520, 355, 340, 429, 195) }, 1000 / 60);
            break;
        case 5:
            timerBola = window.setInterval(function () { animBola(610, 583, 841, 410, 466, 331, 625, 195) }, 1000 / 60);
            break;
        case 6:
            timerBola = window.setInterval(function () { animBola(610, 583, 830, 547, 954, 306, 800, 195) }, 1000 / 60);
            break;
        case 7:
            timerBola = window.setInterval(function () { animBola(610, 583, 479, 564, 456, 259, 429, 290) }, 1000 / 60);
            break;
        case 8:
            timerBola = window.setInterval(function () { animBola(610, 583, 700, 476, 690, 352, 625, 290) }, 1000 / 60);
            break;
        case 9:
            timerBola = window.setInterval(function () { animBola(610, 583, 893, 470, 969, 340, 800, 290) }, 1000 / 60);
            break;
        default:
            console.log("Erro (secalhar propositado) na animacao da bola.")
    }
}

// Define se o utilizador marcou ou nao e se o jogo acabou
function resultado() {
    if (defesa == true) {
        alert("Falhaste...!");
    } else if (defesa == false) {
        alert("GOLOO!");
    }

    // Sons
    arraySons[1].load(); // Golo
    arraySons[2].load(); // Sad

    // Quando acabarem as tentativas perguntar se o jogador quer jogar novamente
    if (tentativas == 0) {
        if (golos >= 3) {
            result = "Ganhaste!";
        } else {
            result = "Perdeste...";
        }

        // Pergunta ao jogador se quer jogar novamente ou nao e indica se ganhou ou nao
        input = confirm(result + " Acabou o jogo. Queres jogar novamente?");
        if (input == true) {
            location.reload();
        } else {
            window.open("../home.html", "_self");
        }
    }
}

// Da reset as variaveis
function resetVariaveis() {
    escolha = undefined; // Indica o quadrado selecionado pelo utilizador
    defesa = undefined; // Define se o guarda redes conseguiu defender ou nao
    redes = undefined; // O guarda redes escolhe um novo quadrado

    // Guarda-redes
    GRskipFrames = 0; // As frames que o guarda-redes "salta" (nao usa)
    GRframeIndex = 0; // Index para defenir qual imagem da sprite usar
    GRx = 500; // Posicao do meio do gaurda-redes
    GRy = 100; // Posicao do meio do gaurda-redes

    // Bola
    bolaPosX = 610; // Variaçao da bola em X
    bolaPosY = 583; // Variaçao da bola em Y
    bolaV = 0; // Variaçao da velocidade da bola

    // Sons
    arraySons[3].play(); // Apito
}

criarQuadrado(); // Cria as areas de clique
criarSom(); // Cria os diversos sons
guardaRedes(); // Define o quadrado que o guarda-redes ira defender

// Sons
arraySons[3].play(); // Apito
arraySons[0].play(); // Crowd

canvas.addEventListener('click', click); // Evento clique do rato
