window.onload = function () { //iniciamos la página
    slide1 = document.getElementById("slide"); //referencia al visor
    title = document.getElementById("title"); //referencia al pie de foto
}
function changePhoto(num) { //cambiar la imagen
    f = "images/foto" + num + ".jpg"; //ruta de la nueva imagen
    document.images["photoVisor"].src = f; //cambiar imagen
    t = document.images["photo" + num].alt; //texto de pie de foto
    title.innerHTML = t; //cambiar pie de foto
}