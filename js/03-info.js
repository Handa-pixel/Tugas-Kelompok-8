/* js/03-info.js - Pilihan lokasi dekat bandara, alamat, WhatsApp, jam buka, email, peta (dari config.js) */

let locSel = 'semua';                          // 'semua' atau id salah satu lokasi di CONFIG.locations
function renderInfo(){
  const wa = 'https://wa.me/' + CONFIG.wa, L = CONFIG.locations || [];
  const cur = L.find(l => l.id === locSel);
  const opts = [{id:'semua', label: lang === 'id' ? 'Semua bandara' : 'All airports'}, ...L.map(l => ({id:l.id, label:l.name}))];
  $('#locChips').innerHTML = L.length ? opts.map(o => `<button class="chip ${o.id===locSel?'on':''}" data-k="${esc(o.id)}">${esc(o.label)}</button>`).join('') : '';
  document.querySelectorAll('#locChips .chip').forEach(b => b.onclick = () => { locSel = b.dataset.k; renderInfo(); });

  const q = cur ? cur.map : (L.length ? (CONFIG.mapAll || CONFIG.mapQuery) : CONFIG.mapQuery);
  const near = (lang === 'id' ? 'Titik kami ada di dekat bandara ' : 'Our points are near the airports of ') + L.map(l => l.name).join(', ') + '.';
  $('#siteName').textContent = cur ? cur.name : (lang === 'id' ? 'Semua bandara di Sumsel' : 'All South Sumatra airports');
  $('#siteAddress').textContent = cur ? cur.address[lang] : (L.length ? near : CONFIG.address);
  $('#siteHours').textContent = (cur && cur.hours ? cur.hours : CONFIG.hours)[lang];
  $('#siteEmail').textContent = CONFIG.email;
  $('#siteWa').href = wa; $('#siteWa').textContent = '+' + CONFIG.wa;
  $('#waFloat').href = wa; $('#faqWa').href = wa;
  const src = 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&output=embed';
  if ($('#siteMap').getAttribute('src') !== src) $('#siteMap').src = src;   // hindari muat ulang peta saat ganti bahasa
  $('#siteDir').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}
