function directlyToAnotherPage() {
  setTimeout(()=> {
    window.location.href = 'password.html';
  }, 1000)
  }
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usuarioInput = document.getElementById('Usuario');
    const passwordInput = document.getElementById('password1');

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const usuario = usuarioInput.value;
        const password = passwordInput.value;

        // Obtener las credenciales almacenadas
        const storedUserData = localStorage.getItem('userData');
        let storedUserCredentials = {};
        if (storedUserData) {
            storedUserCredentials = JSON.parse(storedUserData);
        }

        // Verificar si las credenciales coinciden con las almacenadas
        if (
            usuario === storedUserCredentials.usuario &&
            password === storedUserCredentials.password
        ) {
            // Redirigir al To-Do List después de iniciar sesión
            window.location.href = 'edit.html';
        } else {
            alert('Las credenciales no son válidas o el usuario no está registrado.');
        }
    });
});