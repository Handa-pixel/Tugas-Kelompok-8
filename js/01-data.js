/* js/01-data.js - Fungsi bantu dan variabel yang dipakai bersama oleh file js lainnya */

const $ = s => document.querySelector(s);                                   // singkatan untuk document.querySelector
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));   // mengamankan teks sebelum masuk HTML
const rp = n => 'Rp ' + Number(n).toLocaleString('id-ID');                  // 35000 -> "Rp 35.000"
let lang = 'id', cat = 'semua';                                             // bahasa dan kategori produk yang sedang dipilih
