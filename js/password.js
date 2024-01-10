document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usuario = document.getElementById('NewUsuario').value;
        const password = document.getElementById('Password2').value;
        const email = document.getElementById('E-Mail').value;

        const userData = {
            usuario: usuario,
            password: password,
            email: email
        };

        // Guardar información del usuario en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(userData));

        // Enviar correo electrónico al usuario con sus credenciales
        enviarCorreo(email, usuario, password);

        window.location.href = 'check-in.html';
    });
});

function enviarCorreo(destinatario, usuario, password) {
    // Aquí puedes usar una librería o un servicio para enviar correos electrónicos
    // Supongamos un servicio ficticio de correo electrónico
    // Simplemente imprime la información del correo en la consola
    console.log(`Correo enviado a: ${destinatario}`);
    console.log('Credenciales:');
    console.log(`Usuario: ${usuario}`);
    console.log(`Contraseña: ${password}`);
}