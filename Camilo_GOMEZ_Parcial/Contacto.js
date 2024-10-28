function procesarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentario").value;

    if (nombre && email && comentario) {
        alert("Gracias, " + nombre + "! Tu comentario ha sido enviado.");
        document.getElementById("form-contacto").reset(); // Resetea el formulario
        return false; // Evita que la página se recargue
    }

    return true;
}
