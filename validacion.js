// Función para registrar y almacenar el ususarioen el localStorage 
function guardarUsuario() {
    //Captura los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var genero = document.getElementById("genero").value;

    // Crea un objeto con los datos del usuario 
    var ususario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo, 
        contraseña: contraseña, 
        genero: genero,
    };

    // Convierte el objeto en una cadena JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('usuario', usuarioJSON);

    // Guarda el nombre del usuario en localStorage para usuario en la barra de navegacion
    localStorage.setItem('usuario', usuarioJSON);

    // Redirige al usuario a la pagina de inicio de sesion
    window.location.href = 'signin.html';
}