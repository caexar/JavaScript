//Scope global
var nombre = "Cesar";

//Scope local
function nombre() {
    var miApellido = "Ceveriche";
    console.log(miNombre + " " + miApellido); //comando para usar en la consola de navegacion de gugul
}
nombre();
// Cesar Ceveriche
miNombre
//"Cesar"
miApellido
//error la variable no existe o no a sido declarada
//esta variable esta declarada en un Scope local y no en el global