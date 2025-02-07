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

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const form = this;
    const statusMsg = document.getElementById("status");

    fetch("https://formspree.io/f/mdkadzpk", {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            statusMsg.style.display = "block"; // Muestra mensaje de éxito
            form.reset(); // Limpia el formulario
            setTimeout(() => { statusMsg.style.display = "none"; }, 3000); // Oculta el mensaje después de 3s
        } else {
            alert("Error al enviar el mensaje. Intenta de nuevo.");
        }
    }).catch(error => {
        alert("Ocurrió un error. Inténtalo más tarde.");
    });
});