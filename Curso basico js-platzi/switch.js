var numero = prompt("que vas a sacar, elige un numero \n 1. piedra \n 2. papel \n 3. tijera");

//segun la variable que se lde en el argumento esta entrara a un "case" o otro, y en cuyo caso no entre a ninguno saltara el defailt
// IMPORTANTE!! siempre usar el break porque sino se ejecutaran todo y la validacion sera erronesa
switch (numero){
    case 1:
        console.log("soy uno!");
        break;
    case 2:
        console.log("soy un dos!");
        break;
    case 3:
        console.log("soy un tres!");
        break;
    //si ninguan se cumple entrara en el default
    default:
        console.log("no soy nadie aunq puedo ser: "+numero);
}