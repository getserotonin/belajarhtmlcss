// ==============================================================
// 1. TAHAP PERSIAPAN: Menangkap elemen HTML
// Tujuan: Mengambil elemen dari index.html agar bisa kita perintah
// ==============================================================
const hamburger = document.getElementById('hamburger'); // Menangkap tombol burger
const navLinks = document.getElementById('nav-links');  // Menangkap wadah daftar menu
const icon = hamburger.querySelector('i');              // Menangkap gambar ikon garis di dalam burger

// ==============================================================
// 2. TAHAP AKSI: Memberi perintah saat tombol diklik
// Tujuan: Membuka atau menutup menu saat user menekan ikon burger di HP
// ==============================================================
hamburger.addEventListener('click', () => {
    
    // Toggle: Jika class 'active' belum ada, tambahkan (menu muncul). 
    // Jika sudah ada, hapus (menu tersembunyi).
    navLinks.classList.toggle('active');
    
    // Mengecek apakah menu sedang muncul atau tidak
    if (navLinks.classList.contains('active')) {
        // Jika menu muncul, ubah gambar ikon dari garis tiga (bars) menjadi silang (times)
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        // Jika menu tertutup, ubah kembali gambar ikon menjadi garis tiga
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// ==============================================================
// 3. TAHAP PEMBERSIHAN: Tutup menu otomatis
// Tujuan: Saat di HP, jika salah satu menu diklik, layar harus kembali bersih (menu tertutup)
// ==============================================================

// Menangkap SEMUA link (tag a) yang ada di dalam menu
const links = document.querySelectorAll('.nav-links a'); 

// Melakukan perulangan (forEach) untuk memberi perintah pada setiap link satu per satu
links.forEach(link => {
    
    // Jika salah satu link ditekan oleh pengguna...
    link.addEventListener('click', () => {
        // ...maka paksa hapus class 'active' agar menu kembali tersembunyi
        navLinks.classList.remove('active');
        
        // ...dan kembalikan ikon silang menjadi ikon garis tiga lagi
        icon.classList.replace('fa-times', 'fa-bars');
    });
});