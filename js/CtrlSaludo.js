"use strict"; 
var forma = document.getElementById("forma");
var nombre = forma["nombre"];
forma.addEventListener(submit, saluda, false);
function saluda() {
        /* Se evalúa la expresión "nombre.value" que está dentro del delimitador
         * ${ }, para posteriormente sustituirlo dentro de la cadena.
         * El resultado se deja en la variable "respuesta".
         * EL TEXTO DE LA CADENA EMPIEZA Y TERMINA CON EL ACENTO INVERTIDO. */
        // @ts-ignore ignora los errores de esta línea (no encuentra a nombre)
        const respuesta = `Saludos a ${nombre.value}.`;
        // Muestra la respuesta en un cuadro de diálogo de alerta.
        alert(respuesta);
}

