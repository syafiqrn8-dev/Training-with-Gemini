const tombol = document.getElementById("tombolAmbil");
const elemenJudul = document.getElementById("judulTugas");
const elemenStatus = document.getElementById("statusTugas");

async function ambilTugasDariInternet() {
  try {
    // ==========================================
    // LAUNCHING LOADING (Kunci Tombol!)
    // ==========================================
    tombol.disabled = true; // Matikan tombol agar tidak bisa diklik lagi
    tombol.textContent = "Memuat Data..."; // Ubah teks tombol untuk memberi tahu user
    tombol.style.opacity = "0.6"; // Buat tombol agak pudar secara visual

    elemenJudul.textContent = "Sedang mengambil data...";
    elemenStatus.textContent = "-";

    const idAcak = Math.floor(Math.random() * 100) + 1;
    const respon = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${idAcak}`,
    );
    const tugas = await respon.json();

    elemenJudul.textContent = tugas.title.toUpperCase();

    // Menggunakan gaya penulisan pro/singkat yang kamu pelajari kemarin!
    if (tugas.completed) {
      elemenStatus.textContent = "✅ Selesai";
      elemenStatus.style.color = "green";
    } else {
      elemenStatus.textContent = "❌ Belum Selesai";
      elemenStatus.style.color = "red";
    }
  } catch (error) {
    elemenJudul.textContent = "Gagal mengambil data 😢";
  } finally {
    // ==========================================
    // SHUTDOWN LOADING (Buka Kunci Tombol!)
    // ==========================================
    // Blok 'finally' adalah kode yang PASTI JALAN di akhir,
    // mau prosesnya berhasil ataupun error/gagal.

    tombol.disabled = false; // Aktifkan lagi tombolnya
    tombol.textContent = "Ambil Tugas Baru"; // Kembalikan teks asli
    tombol.style.opacity = "1"; // Kembalikan kecerahan tombol
  }
}

tombol.addEventListener("click", ambilTugasDariInternet);
