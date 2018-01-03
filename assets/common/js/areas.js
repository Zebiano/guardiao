// Variaveis globais
var cmp = false;
var plt = false;
var pub = false;
var bolas = false;
var bal = false;

function areas(cmp, plt, pub, bola, bal) {
    /*
        Para poder usar esta funcao pela consola tem que se desativar primeiro as animacoes.
        Em "animacoes.js" ha uma variavel "timer" dentro da funcao "comecarAnimacoes()". Comenta-se essa linha e ja se pode ter acesso a funcao neste ficheiro.
    */

    // Areas de clique
    ctx.beginPath();

    // Resto do Campo
    if (cmp == true) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 267, 1280, 453);
    } else if (cmp == false) {
        ctx.clearRect(0, 267, 1280, 453);
    }

    // Plateia
    if (plt == true) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1280, 193);
    } else if (plt == false) {
        ctx.clearRect(0, 0, 1280, 193);
    }

    // Publicidade
    if (pub == true) {
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 193, 1280, 74);
    } else if (pub == false) {
        ctx.clearRect(0, 193, 1280, 74);
    }

    // Bola: X:637 Y:609
    if (bola == true) {
        ctx.fillStyle = "black";
        ctx.arc(637, 609, 33, 0, Math.PI * 2);
        ctx.fill();
    }

    // Baliza
    if (bal == true) {
        // Toda
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(357, 81, 562, 287);

        // Quadradoes individuais
        ctx.fillStyle = "red";
        ctx.fillRect(357, 81, 189, 97); // Quadrado 1
        ctx.fillStyle = "blue";
        ctx.fillRect(357, 176, 189, 97); // Quadrado 4
        ctx.fillStyle = "yellow";
        ctx.fillRect(357, 271, 189, 97); // Quadrado 7
        ctx.fillStyle = "yellow";
        ctx.fillRect(544, 81, 189, 97); // Quadrado 2
        ctx.fillStyle = "red";
        ctx.fillRect(544, 176, 189, 97); // Quadrado 5
        ctx.fillStyle = "blue";
        ctx.fillRect(544, 271, 189, 97); // Quadrado 8
        ctx.fillStyle = "red";
        ctx.fillRect(731, 81, 189, 97); // Quadrado 3
        ctx.fillStyle = "blue";
        ctx.fillRect(731, 176, 189, 97); // Quadrado 6
        ctx.fillStyle = "yellow";
        ctx.fillRect(731, 271, 189, 97); // Quadrado 9
    } else if (bal == false) {
        ctx.clearRect(357, 81, 562, 287);
        if (cmp == false && bola == false) {
            ctx.clearRect(0, 267, 1280, 453);
        }
    }
}