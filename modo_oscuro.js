const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Al cargar la página, verifica si la preferencia del modo oscuro ya está guardada en localStorage
if (localStorage.getItem('modoOscuro') === 'activado') {
    body.classList.add('modo-oscuro');
    
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    // Guarda la preferencia del modo oscuro en localStorage
    if (body.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', 'activado');
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
    }
});
