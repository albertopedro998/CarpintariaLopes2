
function abrir(img) {
    document.location.href = "formencomenda.html?" + img;
}

function trocarImg() {
    imagem = document.location.href.split("?")[1];
    document.querySelector("img").src = "./img/" + imagem;
}