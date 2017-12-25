// Animacao da bola
function animBola() {
    // TODO
}

// Animacao do guarda-redes
function animRedes() {
    // TODO
}

// Animacao da publicidade
function animPublicidade() {
    var imagem = new Image() // Criar variavel imagem
    imagem.src = '../assets/common/img/placares.png'; // Atribuir imagem a variavel

    // Canto superior esquerdo - onde vamos desenhar a imagem
    var x = 0;
    var y = 0;

    // Animação da publicidade
    function publicidade() {
        ctx.clearRect(0, 0, canvas.width, canvas.height) // Apaga o canvas

        ctx.drawImage(imagem, x, y) //desenha a imagem
        if (x > 0) {                                                    // Se o x for maior que 0
            ctx.drawImage(imagem, 1280 - x, 0, x, 720, 0, 0, x, 720)    // Desenhar o bocado da imagem (1290 - x, 0) Que esta fora do canvas No ponto (0,0)
        }
        x++;
        //console.log(x)
        if (x == 1280) {  //Quando o X chega ao fim da imagem
            x = 0       //volta a ser 0
        }
    }

    // Chamar a função da publicidade
    var timer = window.setInterval(publicidade, 1000 / 60)
}

// Animacao da plateia
function animPlateia() {
    // TO DO
}

//animBola();
//animRedes();
animPublicidade();
//animPlateia();