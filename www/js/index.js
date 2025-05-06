document.addEventListener('deviceready', () => {
  const audio = document.getElementById('bg');
  document.body.addEventListener('click', () => audio.play());
  // Aquí irá el código de tu juego
});
