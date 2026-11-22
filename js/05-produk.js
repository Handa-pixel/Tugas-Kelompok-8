/* js/05-produk.js - Chip kategori dan kartu produk (data produk dari config.js) */

const CATS = {
  id:{semua:'Semua', makanan:'Makanan', cemilan:'Cemilan', aksesoris:'Aksesoris', pakaian:'Pakaian', kain:'Kain'},
  en:{semua:'All', makanan:'Food', cemilan:'Snacks', aksesoris:'Accessories', pakaian:'Clothing', kain:'Fabric'}
};
function renderChips(){
  $('#chips').innerHTML = Object.keys(CATS.id).map(k => `<button class="chip ${k===cat?'on':''}" data-k="${k}">${CATS[lang][k]}</button>`).join('');
  document.querySelectorAll('#chips .chip').forEach(b => b.onclick = () => { cat = b.dataset.k; renderChips(); renderProducts(); });
}
function renderProducts(){
  const orderText = lang === 'id' ? 'Halo, saya mau pesan ' : 'Hi, I would like to order ';
  const overview = cat === 'semua';      // Beranda: satu perwakilan per kategori
  let html = '';
  if (overview) {
    html = Object.keys(CATS.id).filter(k => k !== 'semua').map(k => {
      const items = CONFIG.products.filter(p => p.cat === k); if (!items.length) return '';
      const p = items[0];
      return `
    <div class="card rv cat-card" data-open="${k}" tabindex="0" role="button">
      <div class="slot ${p.img ? '' : 'empty'}">${slotHTML(p.img, 'Foto ' + p.name)}</div>
      <div class="body"><h3>${CATS[lang][k]}</h3><small>${items.length} ${lang==='id'?'produk':'products'}</small></div>
      <div class="act"><button class="buy" type="button">${lang==='id'?'Lihat semua':'View all'}</button></div>
    </div>`;
    }).join('');
  } else {
    html = CONFIG.products.filter(p => cat === 'semua' || p.cat === cat).map(p => `
    <div class="card rv">
      <div class="slot ${p.img ? '' : 'empty'}">${slotHTML(p.img, 'Foto ' + p.name)}</div>
      <div class="body"><h3>${esc(p.name)}</h3><small>${esc(p.note)}</small><div class="price">${rp(p.price)}</div></div>
      <div class="act">
        <a class="buy" target="_blank" href="https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(orderText + p.name)}">${lang==='id'?'Pesan':'Order'}</a>
      </div>
    </div>`).join('');
  }
  $('#grid').classList.toggle('overview', overview);
  $('#grid').innerHTML = html || '<p class="center" style="grid-column:1/-1">Belum ada produk.</p>';
  document.querySelectorAll('[data-open]').forEach(c => {
    const open = () => { cat = c.dataset.open; renderChips(); renderProducts(); $('#produk').scrollIntoView({behavior:'smooth'}); };
    c.onclick = open; c.onkeydown = e => { if (e.key === 'Enter') open(); };
  });
  observe();
}
