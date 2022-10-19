function celular(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//crearemos un vector para almacenar todos los objetos y luegos mostrarlo
var celulares = [];
for (i = 0; i < 5; i++) {
    var marca = prompt("indique la marca de su celular");
    var modelo = prompt("indique el modelo de su celular");
    var annio = prompt("indique el año del celular");
    //usaremos la funcion .push para agregar al final del vector el nuevo objeto
    //en el new celular guardaremos las datos que nos da el usuario en las variable anteriormente
    celulares.push(new celular(marca, modelo, annio));
}

//usaremos este for para mostrar todos los elemento del array celulares
for (i = 0; i < celulares.length; i++) {
    console.log(celulares[i]);
}
//para que nos meustre un modelo en especifico podemos hacer uso de este console,log
//console.log(celulares[2]);