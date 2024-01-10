
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usuarioInput = document.getElementById('Usuario');
    const passwordInput = document.getElementById('password1');

  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const usuario = usuarioInput.value;
        const password = passwordInput.value;

       
        const storedUserData = localStorage.getItem('userData');
        let storedUserCredentials = {};
        if (storedUserData) {
            storedUserCredentials = JSON.parse(storedUserData);
        }

        
        if (
            usuario === storedUserCredentials.usuario &&
            password === storedUserCredentials.password
        ) {
           
            window.location.href = 'edit.html';
        } else {
            alert('Las credenciales no son válidas o el usuario no está registrado.');
        }
    });
});