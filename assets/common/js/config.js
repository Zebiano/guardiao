var dificuldade;

function setDificuldade(e) {
    if (typeof (Storage) !== "undefined") {
        dificuldade = e;

        if (dificuldade == 1) {
            localStorage.setItem("lastname", "f");
        } else if (dificuldade == 2) {
            localStorage.setItem("lastname", "m");
        } else if (dificuldade == 3) {
            localStorage.setItem("lastname", "d");
        } else {
            console.log("fuck you")
        }
    } else {
        alert("Sorry, your browser does not support Web Storage... If you want to play this game you'll need a browser that supports it.");
    }
}

function getDificuldade() {
    return localStorage.getItem("lastname");
}