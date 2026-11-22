/* js/06-tim.js - Kartu anggota tim (data tim dari config.js) */

function renderTeam(){
  $('#team').innerHTML = CONFIG.team.map(m => `
    <div class="member rv">
      <div class="slot ${m.img ? '' : 'empty'}">${slotHTML(m.img, 'Foto ' + m.name)}</div>
      <h3>${esc(m.name)}</h3><p>${esc(m.role)}</p>
    </div>`).join('');
  observe();
}
