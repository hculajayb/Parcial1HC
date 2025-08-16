$(document).ready(function() {
    // Alerta de bienvenida
    $('#welcomeBtn').click(function() {
        alert('¡Bienvenido a mi perfil!');
    });
    // Cambiar color de fondo
    $('#changeBgBtn').click(function() {
        const colors = ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', randomColor);
        
        // Guardarlo en localStorage
        localStorage.setItem('bgColor', randomColor);
    });
});