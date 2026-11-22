/* =====================================================================
   config.js  -  SEMUA ISI YANG SERING DIUBAH ADA DI SINI
   Cukup edit file ini; file lain tidak perlu disentuh.

   STRUKTUR FOLDER FOTO (path ditulis lengkap, pakai garis miring /):
     img/umum/       -> ampera, cerita, keunggulan, umkm, visi, kontak, faq
     img/tim/        -> foto anggota tim
     img/makanan/    -> foto produk makanan
     img/cemilan/    -> foto produk cemilan
     img/aksesoris/  -> foto produk aksesoris
     img/pakaian/    -> foto produk pakaian
     img/kain/       -> foto produk kain
   Nama file sebaiknya huruf kecil dan tanpa spasi.

   Jika perubahan di sini tidak muncul, muat ulang paksa dengan Ctrl + F5.
   ===================================================================== */
const CONFIG = {

  /* ---------- INFO TOKO ---------- */
  wa: '623178595384',                                   // nomor WhatsApp, awali 62 tanpa + atau 0
  address: 'Jl. Contoh No. 1, Palembang, Sumatera Selatan',
  hours: { id: 'Setiap hari 08.00 - 21.00 WIB', en: 'Daily 08:00 - 21:00 WIB' },
  email: 'halo@olehpalembang.id',
  mapQuery: 'Jembatan Ampera Palembang',                // cadangan, dipakai hanya jika locations di bawah kosong

  /* ---------- LOKASI DEKAT BANDARA SUMSEL (bagian "Temukan Kami") ----------
     Tiap baris = satu tombol pilihan di atas peta.
     map     : nama tempat ATAU koordinat "lintang,bujur" (mis. '-3.2861,103.8800')
     address : ganti dengan alamat/patokan titik toko yang sebenarnya
     hours   : (opsional) jam buka khusus lokasi itu; kalau dihapus memakai jam di atas
     mapAll  : kata kunci untuk tombol "Semua bandara" */
  mapAll: 'Bandar Udara Sumatera Selatan',
  locations: [
    { id: 'palembang',    name: 'Palembang',    map: '-2.8983,104.6998',   // koordinat bandara SMB II (cek ulang di Google Maps); koordinat menghilangkan kartu putih Google di peta
     
      address: { id: 'Dekat Bandara Sultan Mahmud Badaruddin II (SMB II), Palembang', en: 'Near Sultan Mahmud Badaruddin II (SMB II) Airport, Palembang' } },
    { id: 'lubuklinggau', name: 'Lubuklinggau', map: 'Bandar Udara Silampari Lubuklinggau',
      address: { id: 'Dekat Bandara Silampari, Lubuklinggau', en: 'Near Silampari Airport, Lubuklinggau' } },
    { id: 'pagaralam',    name: 'Pagar Alam',   map: '-4.0225,103.3792',
      address: { id: 'Dekat Bandara Atung Bungsu, Pagar Alam', en: 'Near Atung Bungsu Airport, Pagar Alam' } },
    { id: 'pendopo',      name: 'Pendopo',      map: '-3.2861,103.8800',
      address: { id: 'Dekat Bandara Pendopo, Kab. PALI', en: 'Near Pendopo Airport, PALI Regency' } }
  ],

  /* ---------- LOGO ----------
     Simpan file logo di folder img/umum/, lalu tulis path-nya di img.
     navbar       : true = tampil di menu atas, false = sembunyikan
     navbarPos    : 'kiri' = logo di kiri tulisan nama toko, 'kanan' = di kanan tulisan
     navbarText   : true = tulisan "Oleh-Oleh Palembang" tetap ada di samping logo,
                    false = hanya logo (pakai ini kalau logomu sudah berisi nama toko)
     navbarHeight : tinggi logo di menu atas, dalam px (disarankan 32 - 48)
     footer       : true = tampil di footer, false = sembunyikan
     footerPos    : 'kiri', 'tengah', atau 'kanan'
     footerHeight : tinggi logo di footer, dalam px (disarankan 56 - 96)
     favicon      : true = dipakai juga sebagai ikon di tab browser */
  logo: {
    img: 'img/umum/logo.svg',
    navbar: true,  navbarPos: 'kiri',   navbarText: true,  navbarHeight: 40,
    footer: true,  footerPos: 'tengah', footerHeight: 72,
    favicon: true
  },

  /* ---------- FOTO UTAMA ---------- */
  images: {
    hero:  'img/umum/ampera.png',       // foto Jembatan Ampera di bagian atas
    story: 'img/umum/cerita.png',       // Tentang Kami: sejarah
    usp:   'img/umum/keunggulan.png',   // Tentang Kami: keunggulan
    umkm:  'img/umum/umkm.png',         // Tentang Kami: UMKM
    visi:  'img/umum/visi.png',         // Tentang Kami: visi misi
    kontak:'img/umum/kontak.png',       // Kontak: sisi kanan formulir (PNG transparan)
    faq:   'img/umum/faq.png',          // FAQ: di bawah tulisan FAQ (PNG transparan)
    steps: 'img/umum/cara-pesan.png'    // latar bagian Cara Pesan (kosongkan '' untuk mematikan)
  },

  /* ---------- LATAR CARA PESAN ----------
     opacity  : 0 sampai 1. Makin kecil makin samar (disarankan 0.12 - 0.25)
     position : bagian foto yang diutamakan: 'center', 'top', 'bottom', 'left', 'right' */
  stepsBg: { opacity: 0.18, position: 'center' },

  /* ---------- TIM (5 orang, satu foto per orang) ---------- */
  team: [
    { name: 'Anggota 1', role: 'Ketua',   img: 'img/tim/Anggota 1.png' },
    { name: 'Anggota 2', role: 'Anggota', img: 'img/tim/Anggota 2.png' },
    { name: 'Anggota 3', role: 'Anggota', img: 'img/tim/Anggota 3.png' },
    { name: 'Anggota 4', role: 'Anggota', img: 'img/tim/Anggota 4.png' },
    { name: 'Anggota 5', role: 'Anggota', img: 'img/tim/Anggota 5.png' }
  ],

  /* ---------- REVIEW PEMBELI (bagian "Kata Pembeli") ----------
     Isi di bawah adalah CONTOH (fiktif) untuk keperluan tugas.
     Semua kartu berukuran sama, 3 per baris di desktop. Supaya barisnya rapi,
     jumlah review sebaiknya kelipatan 3 (3, 6, atau 9).
     stars   : 1 sampai 5
     product : (opsional) produk yang dibeli; hapus barisnya bila tidak perlu
     text    : isi review, satu untuk tiap bahasa
     Mau menyembunyikan seluruh bagian review? Kosongkan menjadi reviews: [] */
  reviews: [
    { name: 'Rina Anggraini', city: 'Jakarta', stars: 5, product: 'Pempek Kapal Selam',
      text: { id: 'Pempeknya masih beku dan utuh saat sampai di Jakarta. Cukonya pas dan tidak bocor. Keluarga di rumah langsung habis dalam sehari.',
              en: 'The pempek arrived in Jakarta still frozen and intact. The cuko was just right and nothing leaked. My family finished it all in one day.' } },
    { name: 'Budi Santoso', city: 'Surabaya', stars: 5, product: 'Kain Songket Lepus Merah',
      text: { id: 'Beli songket untuk hadiah pernikahan adik. Tenunannya halus, benang emasnya rapi, dan dikemas dalam kotak yang cantik.',
              en: 'Bought songket as a wedding gift for my sister. The weave is fine, the gold thread is neat, and it came in a lovely box.' } },
    { name: 'Dewi Lestari', city: 'Bandung', stars: 4, product: 'Kemplang Panggang',
      text: { id: 'Kemplangnya renyah dan aman dibawa naik pesawat. Titip di bandara lalu diambil sebelum terbang, praktis sekali. Pesanan sempat sedikit menunggu karena ramai.',
              en: 'The kemplang is crispy and safe to carry on a plane. I dropped my order at the airport and picked it up before flying, very handy. It took a little while because it was busy.' } },
    { name: 'Ahmad Fauzi', city: 'Medan', stars: 5, product: 'Kue Maksuba',
      text: { id: 'Maksubanya legit dan lembut, lapisannya rapi walau dikirim jauh. Dibeli untuk oleh-oleh kantor dan semuanya minta tambah.',
              en: 'The maksuba is rich and soft, with neat layers even after a long trip. I bought it for my office and everyone wanted more.' } },
    { name: 'Siti Maharani', city: 'Yogyakarta', stars: 5, product: 'Tas Songket Palembang',
      text: { id: 'Motif songketnya persis seperti di foto, jahitannya rapi, dan furingnya halus. Adminnya juga ramah saat ditanya soal ukuran.',
              en: 'The songket pattern matches the photo exactly, the stitching is neat, and the lining is smooth. The admin was also friendly when I asked about size.' } },
    { name: 'Hendra Wijaya', city: 'Pekanbaru', stars: 4, product: 'Kemeja Batik Pria',
      text: { id: 'Kemejanya adem dan jahitannya rapi, ukurannya pas sesuai tabel. Pengirimannya agak lama karena menunggu stok, tapi adminnya selalu memberi kabar.',
              en: 'The shirt is cool to wear and neatly sewn, and the size matched the chart. Shipping took a bit because of stock, but the admin kept me updated.' } }
  ],

  /* ---------- PRODUK ----------
     cat harus salah satu: makanan, cemilan, aksesoris, pakaian, kain
     price dalam rupiah (angka saja, tanpa titik dan tanpa "Rp").
     id harus angka unik, tidak boleh kembar.
     Di Beranda (kategori Semua) hanya produk PERTAMA tiap kategori yang tampil
     sebagai perwakilan; klik kartunya untuk melihat semua produk kategori itu.
     Setiap baris diakhiri koma, KECUALI baris paling terakhir. */
  products: [

    /* --- MAKANAN (8) --- */
   
    { id: 1, name: 'Laksan', cat: 'makanan', price: 35000, note: 'Beku, siap seduh dengan kuah bersantan', img: 'img/makanan/produk-1.png' },
    { id: 2, name: 'Mie celor', cat: 'makanan', price: 30000, note: 'Lengkap dengan mi, taoge, dan kuah kental gurih', img: 'img/makanan/produk-2.png' },
    { id: 3, name: 'Malbi daging', cat: 'makanan', price: 65000, note: 'Olahan daging sapi manis gurih, tahan 3 bulan', img: 'img/makanan/produk-3.png' },
    { id: 4, name: 'Tekwan', cat: 'makanan', price: 30000, note: 'Beku, dilengkapi bumbu kuah udang dan pelengkap', img: 'img/makanan/produk-4.png' },
    { id: 5, name: 'Otak-otak', cat: 'makanan', price: 35000, note: 'Isi 10 pcs, panggangan ikan segar khas Palembang', img: 'img/makanan/produk-5.png' },
    { id: 6, name: 'Pempek Kapal Selam', cat: 'makanan', price: 45000, note: 'Isi 3 pcs pempek telur besar + cuko gula batok', img: 'img/makanan/produk-6.png' },
    { id: 7, name: 'Pempek Lenjer + cuko', cat: 'makanan', price: 45000, note: 'Beku, isi 6 pcs pempek lenjer + cuko', img: 'img/makanan/produk-7.png' },
    { id: 8, name: 'Model Palembang', cat: 'makanan', price: 35000, note: 'Pempek tahu beku, lengkap dengan kuah bening gurih', img: 'img/makanan/produk-8.png' },


    /* --- CEMILAN (8) --- */
    { id: 9,  name: 'Kemplang Goreng', cat: 'cemilan', price: 25000, note: 'Renyah dan gurih, isi 10 pcs', img: 'img/cemilan/produk-9.png' },
    { id: 10, name: 'Kemplang Panggang',   cat: 'cemilan', price: 25000, note: 'Renyah dan gurih, isi 10 pcs', img: 'img/cemilan/produk-10.png' },
    { id: 11, name: 'Kue Kojo',       cat: 'cemilan', price: 100000, note: 'Manis dan legit, khas Palembang', img: 'img/cemilan/produk-11.png' },
    { id: 12, name: 'Dadar Jiwo',        cat: 'cemilan', price: 25000, note: 'Lembut dan gurih, isi 5 pcs', img: 'img/cemilan/produk-12.png' },
    { id: 13, name: 'Kue Engkak Ketan',     cat: 'cemilan', price: 215000, note: 'Tekstur lembut dan manis khas', img: 'img/cemilan/produk-13.png' },
    { id: 14, name: 'Kue Maksuba Kojo',     cat: 'cemilan', price: 220000, note: 'Tekstur lembut dan manis khas', img: 'img/cemilan/produk-14.png' },
    { id: 15, name: 'Kue Lumpang',   cat: 'cemilan', price: 20000, note: 'Manis, kenyal, wangi pandan, dan kelapa parut gurih.', img: 'img/cemilan/produk-15.png' },
    { id: 16, name: 'Kue Maksuba',          cat: 'cemilan', price: 215000, note: 'Tekstur lembut dan manis khas', img: 'img/cemilan/produk-16.png' },

    /* --- AKSESORIS (8) --- */
    { id: 17, name: 'Gelang Sempuru Palembang',cat: 'aksesoris', price: 45000,  note: 'Gelang tradisional khas Palembang dengan sentuhan etnik', img: 'img/aksesoris/produk-17.png' },
    { id: 18, name: 'Tanjak',                  cat: 'aksesoris', price: 75000,  note: 'Penutup kepala adat Palembang dari kain songket premium',   img: 'img/aksesoris/produk-18.png' },
    { id: 19, name: 'Peci Songket Palembang',  cat: 'aksesoris', price: 65000,  note: 'Peci hias motif songket khas, nyaman dan elegan',           img: 'img/aksesoris/produk-19.png' },
    { id: 20, name: 'Kipas Songket Palembang', cat: 'aksesoris', price: 25000,  note: 'Kipas lipat perpaduan kain songket dan rangka kayu',       img: 'img/aksesoris/produk-20.png' },
    { id: 21, name: 'Tas Songket Palembang',   cat: 'aksesoris', price: 125000, note: 'Tas tangan motif songket khas Palembang dengan furing rapi',      img: 'img/aksesoris/produk-21.png' },
    { id: 22, name: 'Gandik',                  cat: 'aksesoris', price: 85000,  note: 'Hiasan dahi pengantin tradisional Palembang warna keemasan',img: 'img/aksesoris/produk-22.png' },
    { id: 23, name: 'Dompet Songket Palembang',cat: 'aksesoris', price: 35000,  note: 'Dompet pesta bermotif songket dengan kompartemen resleting', img: 'img/aksesoris/produk-23.png' },
    { id: 24, name: 'Bros Songket Palembang',  cat: 'aksesoris', price: 20000,  note: 'Bros hiasan dada/jilbab bermotif etnik khas Palembang',    img: 'img/aksesoris/produk-24.png' },


    /* --- PAKAIAN (8) --- */
    { id: 25, name: 'Baju Jumputan Wanita',   cat: 'pakaian', price: 315000, note: 'Baju khas Palembang dengan motif jumputan tradisional dan desain modern.',    img: 'img/pakaian/produk-25.png' },
    { id: 26, name: 'Baju Jumputan Wanita',   cat: 'pakaian', price: 275000, note: 'Baju khas Palembang dengan motif jumputan tradisional dan desain modern.', img: 'img/pakaian/produk-26.png' },
    { id: 27, name: 'Baju Jumputan Wanita',     cat: 'pakaian', price: 315000, note: 'Baju khas Palembang dengan motif jumputan tradisional dan desain modern.',   img: 'img/pakaian/produk-27.png' },
    { id: 28, name: 'Baju Jumputan Wanita',     cat: 'pakaian', price: 225000, note: 'Baju khas Palembang dengan motif jumputan yang elegan dan nyaman dipakai.', img: 'img/pakaian/produk-28.png' },
    { id: 29, name: 'Baju Jumputan Pria',          cat: 'pakaian', price: 225000, note: 'Baju khas Palembang dengan motif jumputan yang elegan dan nyaman dipakai.', img: 'img/pakaian/produk-29.png' },
    { id: 30, name: 'Baju Jumputan Pria',     cat: 'pakaian', price: 225000, note: 'Baju khas Palembang dengan motif jumputan yang elegan dan nyaman dipakai.',        img: 'img/pakaian/produk-30.png' },
    { id: 31, name: 'Baju Jumputan Pria',    cat: 'pakaian', price: 225000, note: 'Baju khas Palembang dengan motif jumputan yang elegan dan nyaman dipakai.', img: 'img/pakaian/produk-31.png' },
    { id: 32, name: 'Baju Jumputan Pria',   cat: 'pakaian', price: 225000, note: 'Baju khas Palembang dengan motif jumputan yang elegan dan nyaman dipakai.',     img: 'img/pakaian/produk-32.png' },
    /* --- KAIN (7) --- */
    { id: 33, name: 'Kain Songket Lepus Bungo',  cat: 'kain', price: 1850000, note: 'Songket elegan dengan motif bunga dan aksen emas yang mewah.', img: 'img/kain/produk-33.png' },
    { id: 34, name: 'Kain Songket Bungo Cino',   cat: 'kain', price: 1850000,  note: 'Songket klasik dengan motif bunga yang anggun dan berkelas.',  img: 'img/kain/produk-34.png' },
    { id: 35, name: 'Kain Songket Cantik Manis',   cat: 'kain', price: 2150000,  note: 'Songket bernuansa cerah dengan motif tradisional yang menawan.',      img: 'img/kain/produk-35.png' },
    { id: 36, name: 'Kain Songket Limar Merah', cat: 'kain', price: 2450000, note: 'Songket ungu dengan motif khas yang elegan dan berkesan mewah.',   img: 'img/kain/produk-36.png' },
    { id: 37, name: 'Kain Songket Limar Biru',  cat: 'kain', price: 2450000,  note: 'Songket biru dengan motif tradisional yang anggun dan eksklusif.',   img: 'img/kain/produk-37.png' },
    { id: 38, name: 'Kain Songket Bungo Intan', cat: 'kain', price: 1850000,  note: 'Songket dengan motif bunga yang cantik dan sentuhan kemilau elegan.',       img: 'img/kain/produk-38.png' },
    { id: 39, name: 'Kain Songket Nampan Perak', cat: 'kain', price: 2150000, note: 'Songket bernuansa merah dengan aksen perak yang mewah dan berkelas.',       img: 'img/kain/produk-39.png' },
  ]
};