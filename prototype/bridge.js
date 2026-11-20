/* Инвестиции · партнёрам — мост прототипа с экранами FR DS (ds/index.html).
   Вывод, D-счёт, анкета и документы, пополнение «На брокерский счёт», долгосрочные (калькулятор),
   поиск, идеи, новости, стакан, аналитика по бумаге. Состояние счёта — в прототипе (window.__INV). */
(function(){
  const dev = document.getElementById('device'); if (!dev) return;
  const fr = document.createElement('iframe');
  fr.id = 'dsFrame'; fr.title = 'FR DS'; fr.src = 'ds/index.html'; fr.setAttribute('allowtransparency', 'true');
  dev.appendChild(fr);
  let ready = false, queued = null;
  const st = () => { try { return window.__INV ? __INV.state() : null; } catch (_){ return null; } };
  const send = m => fr.contentWindow.postMessage(Object.assign({src: 'inv', state: st()}, m), '*');
  const TABS = {srch: 2, ideas: 3};
  let tabPh = null;
  function tabLift(on){ const t = document.querySelector('#scrHome .hm-tab') || (tabPh && tabPh.tab); if (!t) return;
    if (on && !tabPh){ tabPh = document.createComment('tab'); tabPh.tab = t; t.before(tabPh); dev.appendChild(t); t.classList.add('ds-lift'); }
    if (!on && tabPh){ tabPh.replaceWith(t); t.classList.remove('ds-lift'); tabPh = null; } }
  function tabOn(i){ document.querySelectorAll('#tabs>button').forEach((b, j) => b.classList.toggle('on', j === i)); const t = document.getElementById('tabs'); if (t) t.style.setProperty('--ti', i); }
  function open(flow, extra){
    dev.classList.add('ds-on'); fr.classList.add('on');
    const tab = flow in TABS; dev.classList.toggle('ds-tab', tab); tabLift(tab); if (tab) tabOn(TABS[flow]);
    const m = {type: 'open', flow, extra}; if (ready) send(m); else queued = m; }
  function close(){ fr.classList.remove('on'); dev.classList.remove('ds-on'); if (dev.classList.contains('ds-tab')){ dev.classList.remove('ds-tab'); tabLift(false); tabOn(0); } }
  addEventListener('message', e => {
    const d = e.data || {}; if (d.src !== 'frds') return;
    if (d.type === 'ready'){ ready = true; if (queued){ send(queued); queued = null; } }
    if (d.type === 'close') close();
    if (d.type === 'tabvis') dev.classList.toggle('ds-notab', !d.on);
    if (d.type === 'state' && window.__INV){ if (d.credit) __INV.credit(d.credit); if (d.lt) __INV.lt(d.lt); if (d.ltCard && __INV.ltCard) __INV.ltCard(d.ltCard, !!d.pend); if (d.buy && window.__R10) __R10.buy(d.buy); }
    if (d.type === 'limit' && window.__INV) __INV.limit(d.px);
    if (d.type === 'tab'){ close(); send({type: 'reset'}); }
    if (d.type === 'go'){ close();
      if (d.to === 'opening' && window.__INV) setTimeout(() => __INV.opening(), 200);
      if (d.to === 'stock' && window.__INV) setTimeout(() => __INV.stock(!!d.ss), 120);
      if (d.to === 'lt') setTimeout(() => open('lt'), 120);
      if (d.to === 'dep') setTimeout(() => open('dep'), 120);
      if (d.to === 'order' && window.__R10) setTimeout(() => __R10.order(d.side, !!d.ss, d.k), 120);
      if (d.to === 'pf' && window.__R10) setTimeout(() => __R10.pf(), 60);
      if (d.to === 'home' && window.__P){ __P.goBack(); __P.goHome(); } }
  });
  document.addEventListener('click', e => {
    const t = e.target;
    const hit = (sel, flow, extra) => { const el = t.closest(sel); if (!el) return false; e.stopImmediatePropagation(); e.preventDefault(); open(flow, extra); return true; };
    const act = (window.__NOACC && __NOACC()) ? null : t.closest('#scrHome .hm-act');
    if (act && /Вывести/.test(act.textContent)){ e.stopImmediatePropagation(); e.preventDefault(); open('wd'); return; }
    if (act && /Пополнить/.test(act.textContent)){ e.stopImmediatePropagation(); e.preventDefault(); open('dep'); return; }
    if (hit('.pf-row.dacc', 'dacc')) return;
    if (dev.classList.contains('fresh') && (dev.classList.contains('pf-empty') || dev.classList.contains('pf-noshr')) && t.closest('#pfBlk .pf-an')){ e.stopImmediatePropagation(); e.preventDefault(); if (window.__P) __P.toast('Аналитика появится, когда в портфеле будет больше бумаг'); return; }
    const tb = t.closest('#tabs>button');
    if (tb){ const i = [...tb.parentNode.querySelectorAll(':scope>button')].indexOf(tb);
      if (i === 2 || i === 3){ e.stopImmediatePropagation(); e.preventDefault(); open(i === 2 ? 'srch' : 'ideas'); return; }
      if (i === 0 && dev.classList.contains('ds-tab')){ e.stopImmediatePropagation(); e.preventDefault(); close(); send({type: 'reset'}); return; } }
    if (hit('#allNews', 'news')) return;
    if (hit('#anRec', 'an-ins')) return;
  }, true);
  window.__DS = {open, close, send: m => { if (ready) send(m); }};
})();
