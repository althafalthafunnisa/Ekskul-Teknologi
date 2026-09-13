const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwolGcbZqn8FH7V0Iwdi21Mu7SHtj_z_1pc3qfEfy__x5FLb3sypRTuxGqAVKSml-lN/exec";

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerText = "Mengirim Data...";

    const formData = {
        Nama_Lengkap: document.getElementById('Nama_Lengkap').value,
        kelas: document.getElementById('kelas').value,
        No_Whatsapp: document.getElementById('No_Whatsapp').value,
        Peminatan: document.getElementById('Peminatan').value,
        Alasan: document.getElementById('Alasan').value
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(() => {
        // Pindah Tampilan ke Halaman Sukses
        document.getElementById('formPage').style.display = 'none';
        document.getElementById('successPage').style.display = 'block';
        document.getElementById('myForm').reset();
    })
    .catch(error => {
        alert('Gagal mengirim data. Silakan coba lagi.');
        console.error(error);
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Kirim Pendaftaran";
    });
});

// Fungsi untuk reset dan kembali mengisi form
function resetForm() {
    document.getElementById('successPage').style.display = 'none';
    document.getElementById('formPage').style.display = 'block';
}