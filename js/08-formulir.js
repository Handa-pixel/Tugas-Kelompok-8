/* js/08-formulir.js - Formulir kontak yang dikirim ke WhatsApp */

$('#form').onsubmit = e => {
  e.preventDefault(); const f = new FormData(e.target);
  window.open(`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(`Halo, saya ${f.get('nama')}.\nTopik: ${f.get('topik')}\n${f.get('pesan')}`)}`, '_blank');
};

/* Topik yang dipilih mengubah petunjuk di bawah pil dan contoh isi di kolom Pesan */
const TOPIC_TEXT = {
  'Pemesanan': {
    id: { hint: 'Sebutkan nama produk dan jumlah yang ingin dipesan.',
          ph:   'Contoh: Pempek Kapal Selam 2 paket, Kemplang Panggang 3 bungkus' },
    en: { hint: 'Tell us which products and how many you would like.',
          ph:   'Example: 2 packs of Pempek Kapal Selam, 3 bags of Kemplang Panggang' }
  },
  'Pengiriman': {
    id: { hint: 'Sebutkan kota tujuan dan produk yang akan dikirim.',
          ph:   'Contoh: Kirim 3 paket pempek ke Jakarta, berapa ongkirnya?' },
    en: { hint: 'Tell us the destination city and what you want shipped.',
          ph:   'Example: Ship 3 packs of pempek to Jakarta, how much is the shipping?' }
  },
  'Menghubungi admin': {
    id: { hint: 'Tulis pertanyaan Anda, admin membalas lewat WhatsApp.',
          ph:   'Tulis pertanyaan atau keperluan Anda di sini' },
    en: { hint: 'Write your question and our admin will reply on WhatsApp.',
          ph:   'Write your question or request here' }
  }
};
function updateTopic(){
  const r = document.querySelector('#form input[name="topik"]:checked');
  const t = TOPIC_TEXT[r ? r.value : 'Pemesanan'][lang];
  const hint = $('#topicHint');
  if (hint.textContent !== t.hint) {
    hint.textContent = t.hint;
    hint.classList.remove('swap'); void hint.offsetWidth; hint.classList.add('swap');   // animasi singkat saat berganti
  }
  $('#form textarea').placeholder = t.ph;
}
document.querySelectorAll('#form input[name="topik"]').forEach(r => r.addEventListener('change', updateTopic));
updateTopic();
