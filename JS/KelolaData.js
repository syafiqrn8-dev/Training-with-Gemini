// 1. Kita buat fungsi khusus yang memiliki sihir "async" (Asynchronous)
async function ambilDataInternet() {
  console.log("1. Memulai panggilan ke pelayan restoran...");

  // 2. Kita suruh JavaScript mengambil (fetch) data dari server internet.
  // Kata "await" artinya: "Tunggu sampai pelayan selesai mengambil data, tapi jangan bikin browser macet!"
  const respon = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // 3. Mengubah data mentah dari server menjadi format yang dimengerti JavaScript (JSON/Object)
  const dataKeren = await respon.json();

  console.log("3. Data akhirnya datang! Ini isinya:", dataKeren);
}

// 4. Jalankan fungsinya
ambilDataInternet();

console.log(
  "2. Sambil nunggu data di baris atas datang, saya nge-log baris ini duluan! 🚀",
);
