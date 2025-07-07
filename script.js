document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    Swal.fire({
      title: 'Parabéns!',
      text: 'Login realizado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  });
});