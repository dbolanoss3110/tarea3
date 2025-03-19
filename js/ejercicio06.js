
function cambiarColor() {
    var color = document.querySelector('input[name="color"]:checked').value;
    var carImage = document.getElementById('carImage');
    
    
    // Cambiar la imagen del carro según el color seleccionado
    if (color === 'amarillo') {
      carImage.src = '../img/amarillo.webp'; // Imagen verde
    } else if (color === 'rojo') {
      carImage.src = '../img/rojo.webp'; // Imagen roja
    } else if (color === 'azul') {
      carImage.src = '../img/azul.webp'; // Imagen azul
    } else if (color === 'negro') {
      carImage.src = '../img/negro.webp'; // Imagen negra
    } else if (color === 'blanco') {
      carImage.src = '../img/blanco.webp'; // Imagen blanca
    }
  }

  function mostrarAlerta() {
    var color = document.querySelector('input[name="color"]:checked').value;
    Swal.fire({
      title: '¡Color Seleccionado!',
      text: 'Has seleccionado el color: ' + color,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }