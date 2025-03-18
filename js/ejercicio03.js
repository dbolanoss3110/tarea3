function redirigirCine() {
    let cineURL = document.getElementById('cineSelect').value;

    if (cineURL) {
        // Muestra un mensaje de confirmación usando SweetAlert
        Swal.fire({
            title: 'Redirigiendo...',
            text: 'Estás siendo redirigido al cine seleccionado.',
            icon: 'info',
            showConfirmButton: false,
            timer: 2000 // La alerta desaparece después de 2 segundos
        });

        // Redirige a la URL seleccionada después de la confirmación
        setTimeout(function() {
            window.location.href = cineURL;
        }, 2000);
    }
}