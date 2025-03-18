function generarFactura() {
    // Obtener los datos del formulario
    let cliente = document.getElementById('cliente').value;
    let articulo = document.getElementById('articulo').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let precio = parseFloat(document.getElementById('precio').value);

    if (!cliente || !articulo || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos correctamente.'
        });
        return;
    }

    let subtotal = cantidad * precio;
    let iva = subtotal * 0.13;
    let servicio = subtotal * 0.05;
    let totalPagar = subtotal + iva + servicio;

    document.getElementById('nombreCliente').innerText = cliente;
    document.getElementById('articuloComprado').innerText = articulo;
    document.getElementById('cantidadComprada').innerText = cantidad;
    document.getElementById('precioUnitario').innerText = precio.toFixed(2);
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('iva').innerText = iva.toFixed(2);
    document.getElementById('servicio').innerText = servicio.toFixed(2);
    document.getElementById('totalPagar').innerText = totalPagar.toFixed(2);

    document.getElementById('facturaResultados').classList.remove('d-none');

    let fecha = new Date();
    document.getElementById('fecha').innerText = fecha.toLocaleString();
}

function imprimirFactura() {
    window.print();
}

function enviarCorreo() {
    Swal.fire({
        icon: 'success',
        title: 'Correo Enviado',
        text: 'La factura ha sido enviada exitosamente por correo.'
    });
}