"use strict";
var forma = document.getElementById("forma"),
    salida = document.getElementById("salida");
forma.addEventListener("input", saluda, false);
function saluda(){
  var nombre1 = forma["nombre1"].value.trim(),
      nombre2 = forma["nombre2"].value.trim();
  salida.textContent = "Saludos a "+nombre1 + " y "+ nombre2;    
}
