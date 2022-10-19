var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas)
    //console.log(frutas.length) para saber la cantidad de elemento en el arrays
    //console.log(frutas[2]) Cereza. para elejir la ubicacion 0,1,2,3

var agregarUltimaFrutas = frutas.push("Uvas"); // el metodo push agrega un valor al arrays en la ultima posicion
// ["Manzana", "Platano", "Cereza", "Fresa", "Uvas"];
var agregarPrimeraFruta = frutas.unshift("Pera") // el metodo unshift agrega un valor al arrays en la primera posicion
    // ["pera", "Manzana", "Platano", "Cereza", "Fresa", "Uvas"];
var borrarUltimaFruta = frutas.pop() // el metodo pop elimina el ultimo valor agregado a un arrays
    // ["pera", "Manzana", "Platano", "Cereza", "Fresa"];
var borrarUltimaFruta = frutas.shift(); // el metodo shift elimina el primer valor del arrays
// ["Manzana", "Platano", "Cereza", "Fresa"]
var posicionFrutas = frutas.indexOf("Cereza") // el metodo indexOf sirve para ayar la ubicacion del valor en el arrays
    // Cereza [2]
