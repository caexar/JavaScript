var articulos = [
    { nombre: "bici", costo: 3000},
    { nombre: "tv", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "audifonos", costo: 1700},
];

//metodos para recorrer el arrays
//metodo filter: lo que hace es agregar los elemento a un nuevo array que cumpla la condicion de este pa leugo mostrarlo
//muestra las referencia numerica indicada en este caso costo <= 500
var articulosFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
//metodo map: lo que hace es agregar a un nuevo array en el cual solo agrega los nombres String
//muestra los String de la variable nombre
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});
//metodo find: sirve para validar si existe o no un elemento en el cual luego de buscarlo lo agregara a un array para mostrarlo
//mostrara el elemento a buscar si esta, en cuyo caso no exista no mostrara nada
var encuentraArtculo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});
//metodo forEach:
//este mostrara todos los elmentos indicado en el console.log
articulos.forEach(function(articulo){
    //mostrara todos los nombres
    console.log(articulo.nombre);
    //mostrara todos los costos
    console.log(articulo.costo);
});
//metodo some: este nos confirmaran si se cumple la condicion ene ste caso si hay elementos con un coste igual o menor a 700
//nos retornara un booleano si hay articulo con la condicion true/false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});