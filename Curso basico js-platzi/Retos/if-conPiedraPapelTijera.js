var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
            console.log("el usuario GANO con " + op1)
        } else if (user === op2 && cpu === op1) {
            console.log("el usuario GANO con " + op2)
        } else if (user === op3 && cpu === op2) {
            console.log("el usuario GANO con " + op3)
        } else {
            console.log("La CPU Gano!!")
        }
    } else if (user === cpu) {
        console.log("Empate")
    }
};

resultado(op1, op3) //el usuario GANO con Piedra```

////////////////////////////////////////////

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var lagarto = "lagarto";
var spock = "spock";


var game = function(user, pc) {
    if (
        (user === tijera && pc === papel) ||
        (user === papel && pc === piedra) ||
        (user === piedra && pc === lagarto) ||
        (user === lagarto && pc === spock) ||
        (user === spock && pc === tijera) ||
        (user === tijera && pc === lagarto) ||
        (user === lagarto && pc === papel) ||
        (user === papel && pc === spock) ||
        (user === spock && pc === piedra) ||
        (user === piedra && pc === tijera)
    ) {
        console.log("Ganaste con " + user + " y Pc perdio con " + pc);
    } else if (user === pc) {
        console.log("Empate con " + user + " y Pc perdio con " + pc);
    } else {
        console.log("Pediste con " + user + " y Pc perdio con " + pc);
    }

}


var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";
var lagarto = "lagarto";
var spock = "spock";

/*var jugar = function(jugaodr, ia) {
    if (jugaodr === papel && ia === tijera)
}*/