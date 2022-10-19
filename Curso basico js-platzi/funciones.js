//Declarativas
/*Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al 
inicio para poder declarar la función:*/
//1
function miFuncion() {
    return 3;
}

miFuncion();

//2
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar('Diego');

////////////////////////////////////////////////

//Expresion
/*Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, 
donde se generará una variable que guardará una función anónima.*/
//1 
var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();

//2
var nombre = function(nombre) {
    console.log(`Hola ${nombre}`)
}

nombre('Diego');


//ejemplo
function sumar(a, b) {
    var resultado = a + b;
}

sumar(1, 2);

function sumar(a, b) {
    return resultado;
}


/*Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, 
y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.*/