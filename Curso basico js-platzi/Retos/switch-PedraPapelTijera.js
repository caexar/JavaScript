var argumento1 = prompt("Jugador 1, eliga un numero \n 1. piedra \n 2. papel \n 3. tijera");
var argumento2 = prompt("Jugador 2, eliga un numero \n 1. piedra \n 2. papel \n 3. tijera");

switch (argumento1) {
    case "1":
        switch (argumento2) {
            case "1":
                console.log("El resultado a sido un empate!");
                break;
            case "2":
                console.log("Gano el jugador 2!");
                break;
            case "3":
                console.log("Gano el jugador 1!");
                break;
            default:
                console.log("numero no valido, profavor ingrese otro");
        }
        break;
    case "2":
        switch (argumento2) {
            case "1":
                console.log("Gano el jugador 1!");
                break;
            case "2":
                console.log("El resultado a sido un empate!");
                break;
            case "3":
                console.log("Gano el jugador 2!");
                break;
            default:
                console.log("numero no valido, profavor ingrese otro");
        }
        break;
    case "3":
        switch (argumento2) {
            case "1":
                console.log("Gano el jugador 2!");
                break;
            case "2":
                console.log("Gano el jugador 1!");
                break;
            case "3":
                console.log("El resultado a sido un empate!");
                break;
            default:
                console.log("numero no valido, profavor ingrese otro");
        }
        break;
    default:
        console.log("numero no valido, porfavor ingrese otro" + "argumento 1 es: " + argumento1 + " argumento 2 es: " + argumento2);
}