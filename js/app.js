const alertBar = document.getElementById('alertBar');
alertBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    alertBar.style.opacity = '0';
  }
});

/* alert bar close jQuery
$('#close').click( () => {
  $('#alertBar').fadeOut('1000');
});
*/
