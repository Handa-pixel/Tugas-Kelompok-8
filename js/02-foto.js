/* js/02-foto.js - Menampilkan semua foto lewat "slot" */

function slotHTML(src, label){
  return `${src ? `<img src="${esc(src)}" alt="${esc(label)}" loading="lazy" onerror="this.parentNode.classList.add('empty')">` : ''}<span class="ph">${esc(label)}</span>`;
}
const slotSrc = k => CONFIG.images[k] || '';
function renderSlots(){
  document.querySelectorAll('.slot[data-slot]').forEach(el => {
    const src = slotSrc(el.dataset.slot);
    el.classList.toggle('empty', !src);
    el.innerHTML = slotHTML(src, el.dataset.label);
  });
}
/* Logo: navbar, footer, dan ikon tab. Semua diatur lewat CONFIG.logo di config.js */
function renderLogo(){
  const L = CONFIG.logo || {}, src = L.img || '';
  const nav = $('#logoNavImg'), foot = $('#logoFoot'), fimg = $('#logoFootImg');
  const root = document.documentElement.style;
  root.setProperty('--logo-nav-h', (L.navbarHeight || 40) + 'px');
  root.setProperty('--logo-foot-h', (L.footerHeight || 72) + 'px');

  nav.onerror = () => { nav.hidden = true; };          // file tidak ditemukan: sembunyikan, teks tetap ada
  fimg.onerror = () => { foot.hidden = true; };
  nav.hidden = !(src && L.navbar);
  foot.hidden = !(src && L.footer);
  if (src && L.navbar) nav.src = src;
  if (src && L.footer) fimg.src = src;

  $('.logo').classList.toggle('flip', L.navbarPos === 'kanan');
  $('.logo-text').hidden = L.navbarText === false;
  foot.style.textAlign = {kiri:'left', kanan:'right'}[L.footerPos] || 'center';
  if (src && L.favicon) $('#favicon').href = src;
}

/* Latar foto bagian Cara Pesan (diatur lewat CONFIG.images.steps dan CONFIG.stepsBg) */
function renderStepsBg(){
  const sec = $('.steps'); if (!sec) return;
  let bg = sec.querySelector('.steps-bg');
  const src = slotSrc('steps'), o = CONFIG.stepsBg || {};
  if (!src) { if (bg) bg.remove(); return; }
  if (!bg) {
    bg = document.createElement('div');
    bg.className = 'steps-bg';
    bg.setAttribute('aria-hidden', 'true');
    sec.prepend(bg);
  }
  bg.innerHTML = `<img src="${esc(src)}" alt="" loading="lazy" onerror="this.parentNode.remove()">`;
  bg.firstChild.style.opacity = o.opacity ?? 0.18;
  bg.firstChild.style.objectPosition = o.position || 'center';
}
