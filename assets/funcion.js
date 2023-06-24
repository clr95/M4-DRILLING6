
  var agregarInput = document.getElementById("agregar");
  var eliminarInput = document.getElementById("eliminar");
  var nameElement = document.getElementById("name");

  var nombres = [];

  function actualizarNombres() {
  
    nameElement.innerHTML = "";

    for (var i = 0; i < nombres.length; i++) {
      nameElement.innerHTML += nombres[i] + ", ";
    }
  }

  agregarInput.addEventListener("click", function() {
    var nombre = agregarInput.previousElementSibling.value.trim();
    if (nombre !== "") {
        nombres.push(nombre);

      actualizarNombres();

      agregarInput.previousElementSibling.value = "";
    } else {alert("debes añadir un nombre")}
  });

  eliminarInput.addEventListener("click", function() {
    var nombreEliminar = eliminarInput.previousElementSibling.value.trim();

       if (nombreEliminar !== "") {
      var indice = nombres.indexOf(nombreEliminar);
      if (indice !== -1) {
        nombres.splice(indice, 1);
        actualizarNombres();
      }
      eliminarInput.previousElementSibling.value = "";
    } else {alert("El nombre escrito no existe")}
  });
