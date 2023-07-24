window.onload = function() {
    const checkbox = document.getElementById('check');
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('lock-scroll');
      } else {
        document.body.classList.remove('lock-scroll');
      }
    });
  }
  