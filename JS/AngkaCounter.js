// ==========================================================================
// 1. MEMBUAT VARIABEL UNTUK MENYIMPAN DATA (MEMORI)
// ==========================================================================

// Kita membuat memori internal untuk menyimpan nilai hitungan kita saat ini.
// Kita menggunakan "let" karena nilai ini akan terus berubah-ubah (dinamis).
let jumlahKlik = 0;

// Kita menyuruh JavaScript mencari tombol di file HTML yang memiliki ID "tombolAksi"
const tombolPlus = document.getElementById("tombolAksi");
const tombolMinus = document.getElementById("tombolAksiMinus");
// Kita menyuruh JavaScript mencari tempat angka di HTML yang memiliki ID "angkaCounter"
const tampilanAngka = document.getElementById("angkaCounter");

// Kita memasang "sensor pendengar" pada tombol.
// Instruksinya: "Hei tombol, jika kamu mendengarkan aksi 'click', jalankan fungsi di dalam ini!"
tombolPlus.addEventListener("click", function () {
  // LOGIKA TOMBOL MINUS
  // Step A: Setiap kali diklik, tambahkan nilai di memori internal kita dengan 1
  jumlahKlik = jumlahKlik + 1; // Tambah memori utama
  tampilanAngka.textContent = jumlahKlik; // Update tampilan layar
});
// LOGIKA TOMBOL MINUS
tombolMinus.addEventListener("click", function () {
  if (jumlahKlik > 0) {
    jumlahKlik = jumlahKlik - 1; // Kurangi memori utama
    tampilanAngka.textContent = jumlahKlik; // Update tampilan layar
  }
});
