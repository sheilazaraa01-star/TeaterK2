PANDUAN WEBSITE TEATER TARUHAN
===============================

1. CARA MEMBUKA WEBSITE
- Ekstrak ZIP ini.
- Buka folder "taruhan-theater" di Visual Studio Code.
- Jalankan index.html menggunakan Live Server.
- Halaman utama adalah website satu halaman (one-page). Menu navbar menggulir ke bagian terkait.

2. STRUKTUR FOLDER
- index.html             : halaman utama.
- tentang.html           : halaman terpisah tentang teater.
- pentas.html            : halaman terpisah pentas.
- arsip.html             : halaman terpisah arsip.
- dokumentasi.html       : halaman terpisah dokumentasi.
- kontak.html            : halaman terpisah kontak.
- pesan-tiket.html       : halaman terpisah informasi tiket.
- css/style.css          : semua pengaturan tampilan.
- js/main.js             : slider, menu HP, tombol kembali ke atas, tema.
- images/                : tempat logo dan gambar.

3. CARA MENGGANTI LOGO
- Logo navbar dan footer menggunakan images/logo-teater.svg.
- Favicon tab browser menggunakan images/favicon.svg.
- Kamu bisa mengganti file SVG tersebut dengan logo sendiri.
- Jika menggunakan PNG, ubah nama/path pada tag img dan link rel="icon" di semua file HTML yang digunakan.
- Simpan logo dengan latar transparan agar terlihat rapi.

4. CARA MENGGANTI FOTO HERO
- File hero saat ini: images/hero-1.svg, hero-2.svg, hero-3.svg.
- Untuk memakai foto sendiri, taruh foto di folder images.
- Buka index.html dan cari bagian class="hero-slide".
- Ganti nama file di background-image, contoh:
  style="background-image: url('images/foto-panggung-1.jpg')"
- Lakukan untuk ketiga slide.
- Gunakan foto landscape agar cocok untuk hero.

5. CARA MENGGANTI FOTO LAIN
Cari nama file gambar di index.html, lalu ganti path src dengan nama file foto milikmu.
Contoh:
<img src="images/foto-latihan.jpg" alt="Latihan teater">
Simpan foto di folder images. Nama file harus sama persis dengan yang ditulis di HTML.

6. CARA MEMASANG LINK PEMBELIAN TIKET
- Di index.html, cari teks "LINK PEMBELIAN TIKET".
- Temukan tombol dengan class="ticket-button".
- Ganti URL https://example.com pada atribut href dengan URL Web App Google Apps Script yang sudah di-deploy oleh temanmu.
- Contoh format URL Apps Script biasanya diawali https://script.google.com/macros/s/ dan diakhiri /exec.
- Pastikan link sudah diuji dan bisa dibuka oleh calon pembeli sebelum website dipublikasikan.
- Jangan menaruh password, token rahasia, atau data pembeli di HTML.

7. FITUR
- Navbar sticky dengan menu anchor.
- Hero slider 3 foto dengan tombol panah, titik, dan autoplay.
- Tombol kembali ke atas.
- Tombol tema gelap/terang.
- Layout responsif untuk layar kecil.
- Halaman HTML terpisah tetap disediakan.

8. CATATAN
- Placeholder SVG yang ada di folder images hanyalah gambar sementara.
- Ganti placeholder dengan foto asli sebelum website dipublikasikan.
- Sistem pemesanan tiket belum dibangun di website ini. Tombol tiket hanya mengarahkan pengunjung ke URL Apps Script milikmu.
- Pastikan semua teks, tanggal, lokasi, akun media sosial, dan URL sudah diperbarui.
