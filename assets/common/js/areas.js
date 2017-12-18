// Variaveis globais
var developer = true;

if (developer == true) {
    // Areas de clique
    ctx.beginPath();

    // Resto do Campo
    ctx.fillStyle = "green";
    ctx.fillRect(0, 267, 1280, 453);

    // Plateia
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 193);

    // Publicidade
    //ctx.fillStyle = "lightblue";
    //ctx.fillRect(0, 193, 1280, 74);

    // Bola: X:637 Y:609
    ctx.fillStyle = "black";
    ctx.arc(637, 609, 33, 0, Math.PI * 2);
    ctx.fill();

    // Baliza
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
}