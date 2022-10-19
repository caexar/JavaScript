//creamos un vector
//tambien podemos agregar o borrar elementos del vector con los metodos aprendido previamente en arrays
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
//creamos una funcion/metodo para saludar a los estudiantes
function saludarEstudiantes(estudiantes){
//se usan las comillas `` para que aparte de mostrar el mensaje tambien muestre la variable
    console.log(`Hola, ${estudiantes}`);
}
//creamos un for que se repetira la cantidad de valores del array estudiante
//1er tipo de for
for (var i = 0; i < estudiantes.length; i++){
    //mostraremos el vector en la posicion i la cual sera la actual del ciclo for
    //console.log(estudiantes[i]);
    //llamaremos a la funcion/metodo para que nos muestre en la posicion i
    saludarEstudiantes(estudiantes[i]);
}

//2do tipo de for
/*fuuncionamiento del 2do for. Creamos una variable en singular del array completo 
en el cual esta variable que estariamos creando guardara los elemento del array por uno para lueguno o mostrarlo */
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}