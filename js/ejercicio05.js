function calcularCuota() {
  var modelo = document.getElementById("modelo").value;
  var version = document.getElementById("version").value;

  if (modelo === "-- Seleccionar Modelo --" || version === "-- Seleccionar Versión --") {
    Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: "Por favor, seleccione un modelo y una versión.",
    });
    return;
  }

  // Aquí puedes hacer el cálculo del crédito, por ejemplo:
  var cuota = 0;
  if (modelo === "model1" && version === "basic") {
    cuota = 300;
  } else if (modelo === "model1" && version === "premium") {
    cuota = 350;
  } else if (modelo === "model1" && version === "sport") {
    cuota = 400;
  } else if (modelo === "model2" && version === "basic") {
    cuota = 320;
  } else if (modelo === "model2" && version === "premium") {
    cuota = 380;
  } else if (modelo === "model2" && version === "sport") {
    cuota = 450;
  } else if (modelo === "model3" && version === "basic") {
    cuota = 350;
  } else if (modelo === "model3" && version === "premium") {
    cuota = 420;
  } else if (modelo === "model3" && version === "sport") {
    cuota = 500;
  }

  // Mostrar la cuota en un alerta
  Swal.fire({
    icon: "success",
    title: "¡Cálculo exitoso!",
    text: "La cuota aproximada es: $" + cuota,
  });
}

// Función para actualizar la imagen según la selección del modelo
function actualizarImagen() {
  var modelo = document.getElementById("modelo").value;
  var carImage = document.getElementById("carImage");

  if (modelo === "-- Seleccionar Modelo --") {
    carImage.classList.add("d-none");
    return;
  }

 

  if (modelo === "model1") {
    carImage.classList.remove("d-none");
    carImage.src = "../img/mbz-c.jpg"; // Cambiar a la URL real de la imagen
  } else if (modelo === "model2") {
    carImage.classList.remove("d-none");
    carImage.src = "../img/mbz-glc.jpeg"; // Cambiar a la URL real de la imagen
  } else if (modelo === "model3") {
    carImage.classList.remove("d-none");
    carImage.src = "../img/mbz-g63.jpg"; // Cambiar a la URL real de la imagen
  }
}

document.getElementById('modelo').addEventListener('change', actualizarImagen);
