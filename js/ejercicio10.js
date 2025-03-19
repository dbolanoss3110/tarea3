const empleados = {
    "109110338": {
      nombre: "Juan",
      apellidos: "Pérez González",
      lugar: "San José, Costa Rica",
      regimen: "Contributivo",
      anoIngreso: "2015",
      departamento: "Finanzas"
    },
    "209110338": {
      nombre: "Ana",
      apellidos: "Gómez Rodríguez",
      lugar: "Alajuela, Costa Rica",
      regimen: "Contributivo",
      anoIngreso: "2018",
      departamento: "Recursos Humanos"
    },
    "309110338": {
      nombre: "Carlos",
      apellidos: "Sánchez Ruiz",
      lugar: "Heredia, Costa Rica",
      regimen: "Exonerado",
      anoIngreso: "2019",
      departamento: "IT"
    },
    "409110338": {
      nombre: "Luis",
      apellidos: "Martínez López",
      lugar: "Cartago, Costa Rica",
      regimen: "Contributivo",
      anoIngreso: "2017",
      departamento: "Ventas"
    },
    "509110338": {
      nombre: "Marta",
      apellidos: "Fernández Pérez",
      lugar: "Guanacaste, Costa Rica",
      regimen: "Contributivo",
      anoIngreso: "2020",
      departamento: "Logística"
    }
  };

  // Función para buscar un empleado
  function buscarEmpleado() {
    const cedula = document.getElementById("cedula").value;

    // Validación de cédula
    if (!cedula) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, ingrese una cédula.',
      });
      return;
    }

    if (!empleados[cedula]) {
      // Si la cédula no existe
      Swal.fire({
        icon: 'error',
        title: '¡Usuario no encontrado!',
        text: 'La cédula ingresada no corresponde a un empleado registrado.',
      });
      document.getElementById("informacionEmpleado").style.display = "none";
      return;
    }

    // Si la cédula existe, mostrar la información
    const empleado = empleados[cedula];
    document.getElementById("nombre").textContent = empleado.nombre;
    document.getElementById("apellidos").textContent = empleado.apellidos;
    document.getElementById("lugar").textContent = empleado.lugar;
    document.getElementById("regimen").textContent = empleado.regimen;
    document.getElementById("anoIngreso").textContent = empleado.anoIngreso;
    document.getElementById("departamento").textContent = empleado.departamento;

    document.getElementById("informacionEmpleado").style.display = "block";
  }