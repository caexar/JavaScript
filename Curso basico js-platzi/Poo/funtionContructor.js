//metodo constructor
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//siempre que llamemos la funcion solo deberemos agregar los elementos nuevos
var autoNuevo = new auto("Mercede", "beans", 2020);
var autoNuevo2 = new auto("Toyota", "modelo2", 2007);
var autoNuevo3 = new auto("Lamborgini", "uracan", 2018);
