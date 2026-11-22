/* js/07-review.js - Kartu review pembeli (data dari CONFIG.reviews di config.js) */

function renderReviews(){
  const R = CONFIG.reviews || [];
  $('#review').hidden = !R.length;               // daftar kosong = seluruh bagian disembunyikan
  $('#reviews').innerHTML = R.map(r => {
    const n = Math.max(0, Math.min(5, r.stars));
    return `
    <figure class="review rv">
      <div class="stars" role="img" aria-label="${n} / 5">${'\u2605'.repeat(n)}<span>${'\u2605'.repeat(5 - n)}</span></div>
      <blockquote>${esc(r.text[lang])}</blockquote>
      <figcaption>
        <span class="avatar">${esc(r.name.charAt(0))}</span>
        <span><b>${esc(r.name)}</b><small>${esc(r.city)}${r.product ? ' &middot; ' + esc(r.product) : ''}</small></span>
      </figcaption>
    </figure>`;
  }).join('');
  observe();
}
