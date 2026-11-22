/* js/04-bahasa-menu.js - Tombol ID/EN dan menu burger */

$('#lang').onclick = () => {
  lang = lang === 'id' ? 'en' : 'id';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-id]').forEach(e => e.innerHTML = e.dataset[lang]);
  renderInfo(); renderChips(); renderProducts(); renderReviews(); updateTopic();
};
$('#burger').onclick = () => $('#menu').classList.toggle('open');
document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => {
  if (a.dataset.cat) { cat = a.dataset.cat; renderChips(); renderProducts(); }
  $('#menu').classList.remove('open');
}));
