/*tipos de datos en java scrip
Number  --> almacena valores numericos
Ej. 10, -40 , 3.9 , -15.66 , etc.

String --> Almacena cadenas de caracteres
Ej. "Hola" , 'Adios' , `saludos`

Boolean --> Almacena un valor logico
Ej. True o False

Null --> Ausencia de la referencia 
un objeto  Ejm.null

Undefine --> Ausencia de valor
undefine
*/

//literal de tipo numerico
let miEntero = 10;

console.log(miEntero);

//simepre tener en cuenta los elemntos correctos ala hora de escribir un programar
//para ello , podemos tener encuenta que la sintaxis conrrecta , la gerraquia de operaciones
//todos estos elemento que si no se tiene el sentido, de lo que se escribe podemos tener un algoritmo que no se funcional

let numero; // se crea el espacio en memoria para almacenar el valor de que llevara pormedio de parametros la funcion

//se crea funcion con la pabra reservada funtion
// para ello le mandamos un parametro , es decir el numero al cual le reservamos un espacio en memoria
function factorial(numero) {
  //y entendemos que lo esta escrito ahora en el if es

  /* si numero es igual a cero en automatico retorna 1 es decir ya no pasa 
    
    al siguiente bloque de intrucion , ya que la operacion se detiene en el return
    
    en caso contrario de el numero que ingrese nosea uno , podemos decir que pasa a la siguiente linea de codigo

    , lo que es encaso contrario a lo que pasaria en la primera linea done esta el if
    */
  if (numero == 0) {
    return 1;
  } else {
    //retorna la operacion que esta entre parentesis
    /*  retorna por salida , se escribe el nombre de la funcion  pasado la varible que se creo , es decir el indentificador de memoria donde se encuentra almacenado el numer
        
        y a ese numero se le resta uno , en es decir:
        Ejemplo:
        10 -  1 =  9

        recordemos como esta la gerarquia de operaciones , para poder realizar el calculo de una expresión , debemos de tomar en cuenta la gerarquia de operaciones. es decir  cual es la que se debe de hacer primero 

        para ello utlizamos los parentesis

        lo siguiente seria multiplicar el numero por si mismo , recordemos que se resto un valor 1 , a el numero que pasamos por medio de parametros
 
            9 * 9 =  81
        
        */

    return factorial(numero - 1) * numero;
  }
}

let isnmero = 3;
function isnumero(isnmero) {
  if (isnmero == 3) {
    return 4;
  } else {
    return "no es un numero valido";
  }
}

let racional =0;
function sumais(racional) {
  if (racional == 0) {
    return "el resultado de la suma es;", 0;
  } else {
    return sumais(racional-1) +racional;
  }
}   


let factorila  = 0;









console.log(factorial(10));
console.log(isnumero(3));
console.log(sumais(8));
