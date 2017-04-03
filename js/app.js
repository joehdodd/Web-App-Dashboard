const aBar = document.getElementById('alertBar');
aBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    alertBar.style.opacity = '0';
  }
});
