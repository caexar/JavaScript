var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//creamos una funcion/metodo para saludar a los estudiantes
function saludarEstudiantes(estudiante){
    //se usan las comillas `` para que aparte de mostrar el mensaje tambien muestre la variable
    console.log(`hola, ${estudiante}`);
}
//en el while estamos enumerando la cantidad de elemento del array estudaintes con la funcion .length
while(estudiantes.length > 0){
    //mostraremos la longirud de la variable estudiantes
    console.log(estudiantes);
    //cada que se cumpla una repeticion el metodo shift eliminara esta para que continue el ciclo
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}