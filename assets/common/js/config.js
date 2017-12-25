// Variaveis Globais
var dificuldade;

// Define a dificuldade
function setDificuldade(e) {
    // Para isto usamos uma forma de guardar data no browser, nem todos sao compativeis po isso fazse este check com o if (parecido cmo a prof faz o check do canvas)
    if (typeof (Storage) !== "undefined") {
        dificuldade = e;

        if (dificuldade == 1) {
            localStorage.setItem("lastname", "f");
        } else if (dificuldade == 2) {
            localStorage.setItem("lastname", "m");
        } else if (dificuldade == 3) {
            localStorage.setItem("lastname", "d");
        } else {
            console.log("A dificuldade nao funcionou...")
        }
    } else {
        alert("Sorry, your browser does not support Web Storage... If you want to play this game you'll need a browser that supports it.");
    }
}

// Obtem a dificuldade
function getDificuldade() {
    return localStorage.getItem("lastname");
}