// Variaveis Globais
var escolha = 0; // Indica o quadrado selecionado pelo utilizador
var redes = 0; // Indica o quadrado selecionado pelo guarda-redes
var defesa; // Define se o guarda redes conseguiu defender ou nao
var dificuldade = getDificuldade();
console.log("Dificuldade: " + dificuldade);

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
function guardaRedes(e) {
    if (dificuldade == "f") {
        redes = randomQuadrado(9, 1);
    } else if (dificuldade == "m") {
        redes = randomQuadrado(6, e);
    } else if (dificuldade == "d") {
        redes = randomQuadrado(3, e);
    } else {
        console.log("Erro na dificuldade.")
    }
    console.log("Redes: " + redes);
}

// Devolve um numero aleatorio
function randomQuadrado(numQ, num) {
    if (numQ == 9) {
        return Math.floor(Math.random() * numQ + num);
    } else if (numQ == 6) {
        //console.log(num);
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
                console.log("O redes ta a espera da escolha do jogador");
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
                console.log("O redes ta a espera da escolha do jogador");
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

            guardaRedes(escolha);
            //console.log(redes);

            if (escolha == redes) {
                defesa = true;
                resultado();
            } else {
                defesa = false;
                resultado();
            }
        }
    }

    /*// Atribuir movimento da bola a cada escolha
    if (escolha == 1) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 368, 450, 280, 186, 429, 110) }, 10)
    }
    else if (escolha == 2) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 485, 444, 390, 216, 625, 110) }, 10)
    }
    else if (escolha == 3) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 843, 520, 975, 113, 800, 110) }, 10)
    }
    else if (escolha == 4) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 474, 520, 355, 340, 429, 195) }, 10)
    }
    else if (escolha == 5) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 841, 410, 466, 331, 625, 195) }, 10)
    }
    else if (escolha == 6) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 830, 547, 954, 306, 800, 195) }, 10)
    }
    else if (escolha == 7) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 479, 564, 456, 259, 429, 290) }, 10)
    }
    else if (escolha == 8) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 700, 476, 690, 352, 625, 290) }, 10)
    }
    else if (escolha == 9) {
        timerBola = window.setInterval(function () { desenharBola(610, 583, 893, 470, 969, 340, 800, 290) }, 10)
    }*/

    /*// Movimento do guarda redes
    var guardaRedes = new Image();

    var x = 500;;
    var y = 100
    var frameIndex = 0;

    if (redes == 1) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite1.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += -70;
        }
    }
    else if (redes == 2) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite2.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            y += -20;
        }
    }
    else if (redes == 3) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite3.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += 60;
        }
    }
    else if (redes == 4) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite4.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += -140;
        }
    }
    else if (redes == 5) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite5.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += 0;
        }
    }
    else if (redes == 6) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite6.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += 100;
        }
    }
    else if (redes == 7) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite7.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += -70;
        }
    }
    else if (redes == 8) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite8.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += -15;
        }
    }
    else if (redes == 9) {
        guardaRedes.src = '../assets/common/sprites/keeper/Sprite9.png';
        guardaRedes.addEventListener('load', function () { window.setInterval(animateguardaRedes, 1000); });

        function animateguardaRedes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(guardaRedes, frameIndex * 288, 0, 288, 288, x, y, 288, 288);
            frameIndex++;
            x += 60;
        }
    }*/
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
    var defesa; // Define se o guarda redes conseguiu defender ou nao
    guardaRedes(undefined); // O guarda redes escolhe um novo quadrado
}

criarQuadrado(); // Cria as areas de clique
guardaRedes(); // Define o quadrado que o guarda-redes ira defender

canvas.addEventListener('click', click); //evento clique do rato