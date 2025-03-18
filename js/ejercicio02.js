function convertirADolares() {
    let montoDolares = parseFloat(document.getElementById('montoDolares').value);
    let tipoCambio1 = parseFloat(document.getElementById('tipoCambio1').value);

    if (isNaN(montoDolares) || isNaN(tipoCambio1) || montoDolares <= 0 || tipoCambio1 <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores válidos para ambos campos.'
        });
        return;
    }

    let resultado = montoDolares * tipoCambio1;
    Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: `El monto en colones es: ₡${resultado.toFixed(2)}`
    });
}

function convertirAColones() {
    let montoColones = parseFloat(document.getElementById('montoColones').value);
    let tipoCambio2 = parseFloat(document.getElementById('tipoCambio2').value);

    if (isNaN(montoColones) || isNaN(tipoCambio2) || montoColones <= 0 || tipoCambio2 <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores válidos para ambos campos.'
        });
        return;
    }

    let resultado = montoColones / tipoCambio2;
    Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: `El monto en dólares es: $${resultado.toFixed(2)}`
    });
}

 function limpiarCampos1() {
    document.getElementById('montoDolares').value = '';
    document.getElementById('tipoCambio1').value = '';
}

function limpiarCampos2() {
    document.getElementById('montoColones').value = '';
    document.getElementById('tipoCambio2').value = '';
}