document.addEventListener('DOMContentLoaded', function() {
  // Efecto de scroll para el header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Menú hamburguesa y cierre para dispositivos móviles
  const menuToggle = document.querySelector('.menu-toggle');
  const closeToggle = document.querySelector('.close-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  closeToggle.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  nav.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Validación del formulario de contacto
  const form = document.getElementById('form-contacto');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
      showError('Por favor, completa todos los campos.');
      return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };

    // Imprimir el objeto en la consola
    console.log('Datos del formulario:', formData);

    // Mostrar mensaje de éxito
    showSuccess('Formulario enviado con éxito.');
    form.reset(); // Opcional: limpiar el formulario después de enviarlo
  });

  function showError(message) {
    alert(message);
  }

  function showSuccess(message) {
    alert(message);
  }
});
