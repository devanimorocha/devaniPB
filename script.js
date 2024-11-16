// Definir las credenciales de usuario y contraseña
const validUsername = "devany"; // Nombre de usuario correcto
const validPassword = "321"; // Contraseña correcta

// Obtener el formulario y los elementos del DOM
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

// Evento para manejar la validación del login
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recarga)

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validar las credenciales
  if (username === validUsername && password === validPassword) {
    // Si las credenciales son correctas, redirigir a una página de bienvenida
    window.location.href = "bienvenido.html"; // Cambia esto por la URL de tu página de bienvenida
  } else {
    // Si las credenciales son incorrectas, mostrar un mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    errorMessage.style.display = "block";
  }
});

