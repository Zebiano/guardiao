// Variaveis globais
var dificuldade;

function setDificuldade(e) {
    window.dificuldade = e;
    console.log("SG: " + dificuldade);
}

function getDificuldade() {
    console.log("hm " + dificuldade);
    return dificuldade;
}

console.log(dificuldade);