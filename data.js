document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengirim data formulir menggunakan Fetch API atau XMLHttpRequest
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Pesan terkirim!');
        form.reset(); // Reset formulir setelah berhasil
      } else {
        alert('Gagal mengirim pesan!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pesan.');
    });
  });
});
