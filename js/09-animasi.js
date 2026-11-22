/* js/09-animasi.js - Animasi fade saat scroll */

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1});
function observe(){ document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el)); }
document.querySelectorAll('.sec h2, .zig-item, .st>div, details, .faq-cta, .contact-grid, .loc').forEach(el => el.classList.add('rv'));
