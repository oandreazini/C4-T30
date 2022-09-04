
function point1(text) {

    // Primero creamos la expresión regular como patrón constante
    const regex = /[a-zA-Z0-9 ]* [0-9]{2}\/[0-9]{2}\/[12][0-9]{3}/;

    // Lo comprobamos con el patrón
    if (regex.test(text)) {
        alert("Fecha correcta.");
    } else {
        alert("Fecha incorrecta.");
    }
}

function point2(mail) {

    // Primero creamos la expresión regular como patrón constante
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // Lo comprobamos con el patrón
    if (regex.test(mail)) {
        alert("Email correcto.");
    } else {
        alert("Email incorrecto.");
    }
}

function point3(text) {
    const regex = (/[&"<>/]/g);
    const decode = {
        "&": '&amp;',
        "\"": '&quot;',
        "<": '&lt;',
        ">": '&gt;',
    }
    let newText = text.replace(regex, char => decode[char]);
    alert(newText);
}

function point4(text) {
    const regex = (/^[A-z\s]+[A-z]+$/g);
   
    if (regex.test(text)) {
        let reversText = text.split(" ").reverse( );
        alert(reversText);
    } else {
        alert("Entrada incorrecta.");
    }
}

function point5(text) {
    const regex = (/(<([^>]+)>)/ig);
   
    if (regex.test(text)) {
        let reversText = text.replace(regex, "");
        alert(reversText);
    } else {
        alert("Entrada incorrecta.");
    }

}
