function directlyToAnotherPage() {
    setTimeout(()=> {
      window.location.href = 'password.html';
    }, 1000)
    }


  
document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.querySelector('form');
  const usuarioInput = document.getElementById('Usuario');
  const passwordInput = document.getElementById('password1');

  
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
      usuarioInput.value = usuarioGuardado;
  }

  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const usuario = usuarioInput.value;
      const password = passwordInput.value;

      
      if (usuario.trim() !== '' && password.trim() !== '') {
         
          localStorage.setItem('usuario', usuario);
         
          window.location.href = 'edit.html';
      } else {
          alert('Por favor, introduce un usuario y contraseña válidos.');
      }
  });
});


const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'tucorreo@gmail.com', 
    pass: 'tupassword'
  }
});


const enviarCorreo = (correoDestino, mensaje) => {
  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: correoDestino,
    subject: 'Restablecer contraseña',
    text: mensaje
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
};


enviarCorreo('correoDestino@example.com', 'Haz clic en el enlace para restablecer tu contraseña.');