document.addEventListener("DOMContentLoaded", function(){
    const mostrarPerfil = JSON.parse(localStorage.getItem('usuario'));
    
    if (mostrarPerfil) {
        document.getElementById('nombre').innerText = mostrarPerfil.nombre
        document.getElementById('fechaNacimiento').innerText = mostrarPerfil.fechaNacimiento
        document.getElementById('genero').innerText = mostrarPerfil.genero
        document.getElementById('departamento').innerText = mostrarPerfil.departamento
        document.getElementById('ciudad').innerText = mostrarPerfil.ciudad
        document.getElementById('telefono').innerText = mostrarPerfil.telefono
        document.getElementById('descripcion').innerText = mostrarPerfil.descripcion
    }
});

