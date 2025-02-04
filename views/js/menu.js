document.querySelectorAll('a.nav-link, a.dropdown-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Obtener el objetivo de la URL (id de la sección)
        const targetId = this.getAttribute('href').substring(1); // Quitar el '#' del href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calcular el offset que quieres
            const offset = 90; // Ajusta esta cifra si necesitas más o menos espacio arriba

            // Realizar el desplazamiento
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});
