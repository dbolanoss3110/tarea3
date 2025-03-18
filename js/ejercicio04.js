function mostrarLugar(pais) {
    let paisNombre, descripcion, imagenSrc;

    // Información de los lugares de Sudamérica
    if (pais === 'argentina') {
        paisNombre = 'Argentina';
        descripcion = 'Argentina es un país ubicado en el extremo sur de América del Sur. Es conocido por su cultura, tango y bellos paisajes naturales como las Cataratas del Iguazú y la Patagonia.';
        imagenSrc = '../img/argentina.jpg';
    } else if (pais === 'brazil') {
        paisNombre = 'Brasil';
        descripcion = 'Brasil es el país más grande de Sudamérica. Es famoso por su Carnaval, la Amazonía y las hermosas playas de Copacabana y el Cristo Redentor en Río de Janeiro.';
        imagenSrc = '../img/brasil.jpg';
    } else if (pais === 'chile') {
        paisNombre = 'Chile';
        descripcion = 'Chile es un país largo y estrecho que se extiende a lo largo de la costa del Pacífico. Su capital, Santiago, está rodeada de montañas y es famoso por el desierto de Atacama.';
        imagenSrc = '../img/chile.jpg';
    } else if (pais === 'peru') {
        paisNombre = 'Perú';
        descripcion = 'Perú es conocido por su antigua civilización Inca, la ciudad de Machu Picchu y la biodiversidad amazónica. Su gastronomía también es una de las más destacadas del mundo.';
        imagenSrc = '../img/peru.webp';
    } else if (pais === 'colombia') {
        paisNombre = 'Colombia';
        descripcion = 'Colombia es famosa por su café, sus playas caribeñas y su diversidad de paisajes. Bogotá, la capital, está situada en el altiplano andino.';
        imagenSrc = '../img/colombia.jpg';
    }

    // Mostrar los resultados
    document.getElementById('paisNombre').innerText = paisNombre;
    document.getElementById('descripcionPais').innerText = descripcion;
    document.getElementById('imagenPais').classList.remove('d-none');
    document.getElementById('imagenPais').src = imagenSrc;
   

    // Mostrar la sección de descripción e imagen
    document.getElementById('lugarDescripcion').style.display = 'block';

    // Mostrar un mensaje con SweetAlert
    Swal.fire({
        title: `Has seleccionado ${paisNombre}`,
        text: 'Mira la imagen y la descripción para conocer más sobre este lugar.',
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}