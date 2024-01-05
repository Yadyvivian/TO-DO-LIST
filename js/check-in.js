function directlyToAnotherPage() {
    setTimeout(()=> {
      window.location.href = 'password.html';
    }, 1000)
    }


    // Esperar a que el contenido HTML se cargue
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el formulario y sus elementos
  const form = document.querySelector('form');
  const usuarioInput = document.getElementById('Usuario');
  const passwordInput = document.getElementById('password1');

  // Verificar si ya hay un usuario almacenado
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
      usuarioInput.value = usuarioGuardado;
  }

  // Manejar el envío del formulario
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      const usuario = usuarioInput.value;
      const password = passwordInput.value;

      // Validar el usuario y la contraseña (puedes implementar tu lógica de validación aquí)
      if (usuario.trim() !== '' && password.trim() !== '') {
          // Guardar el usuario en el almacenamiento local
          localStorage.setItem('usuario', usuario);
          // Redirigir a otra página o realizar otra acción después de iniciar sesión
          window.location.href = 'edit.html';
      } else {
          alert('Por favor, introduce un usuario y contraseña válidos.');
      }
  });
});
