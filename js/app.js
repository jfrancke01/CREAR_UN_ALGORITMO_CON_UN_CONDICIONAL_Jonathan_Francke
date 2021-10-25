//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.


 const number = prompt("Ingrese un Numero:");
 parseInt(number);
 if(number !== ""){
    if(number > 1000){
        alert("El numero "+number+" es mayor a mil");
    }
    else{
        alert("El numero "+number+" es menor a mil");
    }
    if(number >= 10 && number <= 50){
        alert("El numero ingresado esta entre el 10 y el 50");
    }
    else{
        alert("El numero Ingresado es menor a 10 o mayor a 50");
    }
 }else{
     alert("Por Favor Ingrese un Numero, el campo esta vacio");
 }
 let texto = prompt("Ingrese un texto:");
 
 console.log(texto.toLowerCase());
 /*if(texto == "Hola"){
    alert("Hola, espero tenga un Buen Día");
 }
 else{
     alert("El Ejercicio a Terminado");
 }*/


 
 