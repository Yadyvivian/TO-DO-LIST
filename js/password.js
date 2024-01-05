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

       
        localStorage.setItem('userData', JSON.stringify(userData));

        
        window.location.href = 'check-in.html';
    });
});
