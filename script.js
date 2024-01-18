src="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/dist/boxicons.js">
document.addEventListener('DOMContentLoaded', function () {
    // Menangani klik pada setiap tautan di navigasi
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Simpan status navigasi di penyimpanan sesi
            sessionStorage.setItem('activeSection', this.getAttribute('data-section'));

            // Arahkan ke halaman yang ditentukan
            window.location.href = this.href;
        });
    });

    // Periksa jika ada status navigasi yang tersimpan
    const activeSection = sessionStorage.getItem('activeSection');
    if (activeSection) {
        // Hapus kelas "active" dari semua tautan
        document.querySelectorAll('.navbar a').forEach(anchor => {
            anchor.classList.remove('active');
        });

        // Tambahkan kelas "active" ke tautan yang sesuai dengan status navigasi
        document.querySelector(`.navbar a[data-section="${activeSection}"]`).classList.add('active');

        // Hapus status navigasi yang tersimpan
        sessionStorage.removeItem('activeSection');
    }
});

var typed = new Typed(".multiple-text", {
    strings: ["Mempelajari", "Menghafal", "Mengkaji", "Mandiri"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hapus class 'active' dari semua tombol navigasi
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Tambah class 'active' pada tombol navigasi yang diklik
            this.classList.add('active');

            // Ambil href dari tombol navigasi yang diklik
            const targetId = this.getAttribute('href').substring(1);

            // Gulir ke elemen dengan id yang sesuai
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Tambahkan kode lainnya sesuai kebutuhan

    // Contoh: Tutup navigasi saat menu di klik
    navbar.addEventListener('click', function () {
        navbar.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  
    // Tambahkan event listener untuk menutup menu ketika salah satu item di klik
    const menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        navbar.classList.remove('show');
      });
    });
  
    // Tambahkan event listener untuk menutup menu ketika di luar menu di klik
    window.addEventListener('click', function (event) {
      if (!event.target.matches('.menu-icon') && !event.target.closest('.navbar')) {
        navbar.classList.remove('show');
      }
    });
  });
  