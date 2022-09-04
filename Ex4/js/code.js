//estado inical
window.onload = function () {
    screen = document.getElementById("screenText");
}
x = "0"; //número en pantalla
xi = 1; //número en pantalla: 1=si; 0=no
point = 0; //estado coma: 0=no, 1=si

//si introduce el número pulsado 
function number(yy) { 
    // inicializar un número,
    if (x == "0" || xi == 1) {  
        screen.innerHTML = yy;
        x = yy; //guardar número
        //si se pulsa una coma al inicio, automáticamente antes de la coma sera un 0
        if (yy == ".") { //
            screen.innerHTML = "0.";
            x = yy; //guardar número
            point = 1; //cambiamos el estado de la coma a 1 para que no se pueda añadir ninguna coma más
        }
    }
    else { 
        if (yy == "." && point == 0) { //controlamos que no se pueda añadir ninguna coma más
            screen.innerHTML += yy;
            x += yy;
            point = 1; //cambiamos el estado de la coma  
        }
        //no permite insertar ninguna coma más
        else if (yy == "." && point == 1) { }
        //permite escribir un número 
        else {
            screen.innerHTML += yy;
            x += yy
        }
    }
    xi = 0 //el número está iniciado y podemos ampliarlo.
}

//Recargamos la página para insertar el siguiente número
window.onload = function () { 
    screen = document.getElementById("screenText"); 
    document.onkeydown = keyboard;
}
x = "0"; //número en pantalla
xi = 1; //número en pantalla: 1=si; 0=no;
point = 0; //estado coma 0=no, 1=si;
ni = 0; //número oculto o en espera.
cal = "no"; //operación en curso; "no" =  sin operación.

function calculate(s) {
    ni = x //ponemos el primer número en espera, para poder escribir el segundo.
    cal = s; //guardamos tipo de operación.
    xi = 1; //inicializar pantalla.
}

function equal() {
    if (cal == "no") { //comprobamos que no haya ninguna operación pendiente
        screen.innerHTML = x;	
    }
    else { //resolvemos la operación si ya teníamos una
        sl = ni + cal + x; // se pasa la operación a una cadena
        sol = eval(sl) //evalua la cadena de caracteres pasada, con "eval(cadena)" y hace la operación
        screen.innerHTML = sol //solución
        x = sol; //guardamos la solución
        cal = "no"; //se cambia el estado de la operación, a que ya no hay ninguna pendiente
        xi = 1; //reniciamos la pantalla 
    }
}

//se resuelve la raíz cuadrada con la función sqrt()
function sqrt() {
    x = Math.sqrt(x) 
    screen.innerHTML = x; //resultado por pantalla
    cal = "no"; //se cambia el estado de la operación, a que ya no hay ninguna pendiente
    xi = 1; //reniciamos la pantalla 
}

//cambia de signo un número
function opposite() {
    x = -x; //cambiar de signo
    screen.innerHTML = x;
}

//hacer el inverso del número
function inve() {
    nx = Number(x); //convertimos el string a número
    nx = (1 / nx); //hacemos la operación
    x = String(nx); //volvemos a pasarlo a string
    screen.innerHTML = x;
    xi = 1; //reiniciar pantalla al pulsar otro número.
}

//función para retroceder un número
function back() { 
    num = x.length; //pasamos a la variable num los numeros que tenemos en pantalla
    br = x.substr(num - 1, num) //buscamos el último número
    x = x.substr(0, num - 1) //borra el número encontrado
    if (x == "") { x = "0"; } //si ya no quedan numeros, pondremos el 0
    if (br == ".") { point = 0; } //cambiamos el estado de la coma si se borra, para poder introducirla de nuevo
    screen.innerHTML = x; 	 
}

function deletePart() {
    screen.innerHTML = 0; //reiniciamos la pantalla;
    x = 0; //ponemos en pantalla el 0
    point = 0; //reiniciamos la coma					
}

function deleteAll() {
    screen.innerHTML = 0; //reiniciamos la pantalla;
    x = "0"; //ponemos en pantalla el 0
    point = 0; //reiniciar estado coma 
    ni = 0 //borramos si tenemos un número anterior a la espera de una operación
    cal = "no" //borramos operación
}

//recogemos las entradas por teclado
function keyboard(eventKey) {
    key = eventKey || window.event;
    k = key.keyCode; //número de código de la tecla.

    //teclas númericas del teclado alfamunérico
    if (k > 47 && k < 58) {
        p = k - 48; //buscamos el número a mostrar
        p = String(p) //convertir a string para mostrar en pantalla
        number(p); 
    }

    //Teclas del teclado númerico
    if (k > 95 && k < 106) {
        p = k - 96; //buscamos el número a mostrar
        p = String(p); //convertir a string para mostrar en pantalla
        number(p);
    }
    //buscamos las teclas de la opreaciones, de la coma y del suprimir
    if (k == 110 || k == 190) { number(".") } 
    if (k == 106) { calculate('*') } 
    if (k == 107) { calculate('+') } 
    if (k == 109) { calculate('-') }
    if (k == 111) { calculate('/') } 
    if (k == 32 || k == 13) { equal() }
    if (k == 46) { deleteAll() } 
    if (k == 8) { back() } 
    if (k == 36) { deletePart() }
}

