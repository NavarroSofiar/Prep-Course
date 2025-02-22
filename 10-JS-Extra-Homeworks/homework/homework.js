// No cambies los nombres de las funciones.


function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    // var Matriz = [];
    // Matriz= Object.entries(objeto)
    // return Matriz
    var array = []
    for (var clave in objeto) {
        array.push([clave, objeto[clave]])
    }
    return array
}




function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    // var contador = {};
    // for (var i of string){
    //   if(contador[i]){
    //     contador[i]++
    //   } else {
    //     contador [i] = 1
    //   }
    // }
    // return contador
    var objeto = {};
    for (var i = 0; i < string.length; i++) {
        if (objeto.hasOwnProperty(string[i])) {
            objeto[string[i]] = objeto[string[i]] + 1;
        } else {
            objeto[string[i]] = 1
        }
    }
    return objeto
}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    // //Escribe tu código aquí
    // var string = []
    // var start = 0
    // for (i=0;i<s.length;i++){
    //   if(s[i]=== s[i].toUpperCase()){
    //     string.splice(start,0,s[i]);
    //     start++
    //   } else {
    //     string.push(s[i])
    //   }
    // }
    // return string.join("")
    var may = "";
    var min = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            min += s[i]
        } else {
            may += s[i]
        }
    }
    return may + min
}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    //  var string = []
    //   for (i=0; i < str.length; i++){
    //     string.unshift(str[i])
    //   }
    // return string.join('').split(' ').reverse().join(' ')
    var inverso = str.split(" ").map(function(elemento) {
        return elemento.split("").reverse().join("");

    })
    return inverso.join(" ")
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquíal-rev
    var alReves = numero.toString().split('').reverse().join('')
        // if (numero.toString() === alReves){
        //  return "Es capicua"
        // } else {
        //   return"No es capicua"
        // }
    alReves = parseInt(alReves)
    if (numero === alReves) {
        return "Es capicua"
    } else {
        return "No es capicua"

    }
}


function deleteAbc(cadena) {

    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    return cadena.replace(/a/g, "").replace(/b/g, "").replace(/c/g, "")
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    var resultado = arr.sort((p1, p2) => p1.length - p2.length)

    return resultado
}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    var resultado = []

    arreglo1.forEach(num1 => {
        arreglo2.forEach(num2 => {
            if (num1 === num2) resultado.push(num1)
        })
    })
    return resultado
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};