let estudiantes = [];

    function agregarEstudiante() {
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const nota1 = parseFloat(document.getElementById("nota1").value);
      const nota2 = parseFloat(document.getElementById("nota2").value);
      const nota3 = parseFloat(document.getElementById("nota3").value);

      if (!nombre || !apellido || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Por favor, ingrese todos los datos correctamente.',
        });
        return;
      }

      const estudiante = {
        nombre: nombre,
        apellido: apellido,
        notas: [nota1, nota2, nota3]
      };

      estudiantes.push(estudiante);
      document.getElementById("nombre").value = '';
      document.getElementById("apellido").value = '';
      document.getElementById("nota1").value = '';
      document.getElementById("nota2").value = '';
      document.getElementById("nota3").value = '';

      const dropdownMenu = document.getElementById("estudianteDropdown");
      const listItem = document.createElement("li");
      const option = document.createElement("a");
      option.classList.add("dropdown-item");
      option.href = "#";
      option.textContent = `${nombre} ${apellido}`;
      option.onclick = function () {
        seleccionarEstudiante(estudiantes.length - 1);
      };
      listItem.appendChild(option);
      dropdownMenu.appendChild(listItem);

      Swal.fire({
        icon: 'success',
        title: '¡Estudiante agregado!',
        text: 'El estudiante ha sido agregado exitosamente.',
      });
    }

    function seleccionarEstudiante(index) {
      const estudiante = estudiantes[index];
      document.getElementById("dropdownMenuButton").textContent = `${estudiante.nombre} ${estudiante.apellido}`;
      document.getElementById("dropdownMenuButton").setAttribute("data-index", index);
    }


    function calcularPromedio() {
      const index = document.getElementById("dropdownMenuButton").getAttribute("data-index");

      if (index === undefined) {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Por favor, seleccione un estudiante.',
        });
        return;
      }

      const estudiante = estudiantes[index];
      const promedio = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;

      Swal.fire({
        icon: 'info',
        title: 'Promedio Calculado',
        text: `El promedio de ${estudiante.nombre} ${estudiante.apellido} es: ${promedio.toFixed(2)}`,
      });
    }