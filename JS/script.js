document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('active');
});
document.querySelector('.search-btn').addEventListener('click', () => {
  const destino = document.getElementById('destino').value;
  if (destino.trim() === '') {
    alert('Por favor, ingresa un destino para buscar.');
  } else {
    alert(`Buscando viajes a ${destino}...`);
  }
});
