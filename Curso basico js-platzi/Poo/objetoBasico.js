var miAuto = {
    marca: "Ford",
    modelo: "Gt",
    annio: 2005,
    //creamos una funcion dentro de la variable
    detalleDelAuto: function(){
        //usamos el this para señalar como referencia a siertos valores del objeto 
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//para mostrar en consola los propiedades del objeto lo aremos solo escribiendo. miAuto y ya
miAuto
//tambien podemos llamar una propiedad en especifico con solo un "."
miAuto.marca
//para llamar la funcion seria igual ya que esta junto con las demas propiedades dde esta
miAuto.detalleDelAuto();