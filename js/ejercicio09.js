let votos = [];
function enviarVoto() {
  const fullName = document.getElementById("fullName").value;
  const studentId = document.getElementById("studentId").value;
  const email = document.getElementById("email").value;
  const birthYear = document.getElementById("birthYear").value;
  const voteHour = document.getElementById("voteHour").value;

  if (!fullName || !studentId || !email || !birthYear || !voteHour) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: 'Por favor, complete todos los campos.',
    });
    return;
  }

  const voto = {
    nombre: fullName,
    cedula: studentId,
    correo: email,
    nacimiento: birthYear,
    horaExamen: voteHour
  };


  votos.push(voto);

  document.getElementById("fullName").value = '';
  document.getElementById("studentId").value = '';
  document.getElementById("email").value = '';
  document.getElementById("birthYear").value = '';
  document.getElementById("voteHour").value = '';

  Swal.fire({
    icon: 'success',
    title: '¡Voto realizado con éxito!',
    text: 'Tu voto ha sido registrado correctamente.',
  });
}

function mostrarReporte() {
  if (votos.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'No hay votos',
      text: 'Aún no se ha registrado ningún voto.',
    });
    return;
  }

  let reporteHtml = `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Correo</th>
          <th>Hora Votada</th>
        </tr>
      </thead>
      <tbody>
  `;

  let horasVotadas = {
    "08:00 AM": 0,
    "10:00 AM": 0,
    "01:00 PM": 0,
    "03:00 PM": 0
  };

  votos.forEach((voto) => {
    reporteHtml += `
      <tr>
        <td>${voto.nombre}</td>
        <td>${voto.cedula}</td>
        <td>${voto.correo}</td>
        <td>${voto.horaExamen}</td>
      </tr>
    `;
    horasVotadas[voto.horaExamen]++;
  });
  reporteHtml += `
    </tbody>
    </table>
    <h4>Porcentaje de votos por hora:</h4>
    <ul>
  `;

  Object.keys(horasVotadas).forEach((hora) => {
    const porcentaje = ((horasVotadas[hora] / votos.length) * 100).toFixed(2);
    reporteHtml += `<li>${hora}: ${horasVotadas[hora]} votos (${porcentaje}%)</li>`;
  });

  reporteHtml += "</ul>";
  document.getElementById("reporte").innerHTML = reporteHtml;
}
