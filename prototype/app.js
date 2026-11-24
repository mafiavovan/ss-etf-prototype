
(function(){
  var PMODE='ss'; let FRESH=false; const LIN={cash:0,lt:0,inv:0,pend:0}; const DUO_USD="<span class=\"frac\"><svg class=\"ic duo\" width=\"24\" height=\"24\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"mask0_5737_648\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"21\" height=\"21\"><path d=\"M12.00 2C9.34 2 6.80 3.05 4.92 4.92C3.05 6.80 2 9.34 2 12.00C2.00 14.45 2.91 16.81 4.55 18.64L8.04 15.16C8.03 15.10 8.03 15.05 8.04 15.00C8.04 14.73 8.14 14.48 8.33 14.29C8.52 14.10 8.77 14.00 9.04 14.00C9.04 14.00 9.13 14.00 9.18 14.00L10.55 12.59L10.01 12.41C9.42 12.20 8.91 11.81 8.55 11.30C8.19 10.79 8.00 10.18 8.01 9.56V9.00C8.01 8.20 8.32 7.44 8.88 6.87C9.45 6.31 10.21 6.00 11.01 6.00V5.00C11.01 4.73 11.11 4.48 11.30 4.29C11.49 4.10 11.74 4.00 12.01 4.00C12.27 4.00 12.52 4.10 12.71 4.29C12.90 4.48 13.01 4.73 13.01 5.00V6.00C13.54 6.00 14.06 6.15 14.52 6.42C14.98 6.69 15.36 7.09 15.62 7.56L18.62 4.56C16.80 2.92 14.44 2.01 12.00 2V2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"></path><path d=\"M14.00 9.00C14.00 8.73 13.89 8.48 13.70 8.29C13.51 8.10 13.26 8.00 13.00 8.00H11.00C10.73 8.00 10.48 8.10 10.29 8.29C10.10 8.48 10.00 8.73 10.00 9.00V9.56C9.99 9.76 10.06 9.97 10.18 10.14C10.30 10.31 10.48 10.44 10.68 10.51L12.17 11.01L14.03 9.14C14.01 9.09 14.00 9.04 14.00 9.00V9.00Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"></path><path d=\"M10.00 15.00C10.00 15.26 10.10 15.51 10.29 15.70C10.48 15.89 10.73 16.00 11.00 16.00H13.00C13.26 16.00 13.51 15.89 13.70 15.70C13.89 15.51 14.00 15.26 14.00 15.00V14.45C14.00 14.24 13.93 14.03 13.81 13.86C13.69 13.69 13.51 13.56 13.32 13.50L10.55 12.59L9.10 14.03C9.34 14.05 9.56 14.16 9.73 14.34C9.89 14.52 9.99 14.75 10.00 15.00Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"url(#paint0_linear_5737_648)\"></path><path d=\"M22.00 12C21.99 10.58 21.69 9.19 21.11 7.91C20.53 6.62 19.69 5.47 18.64 4.53L15.64 7.53C15.88 7.98 16.01 8.47 16.02 8.97C16.02 9.24 15.91 9.49 15.72 9.68C15.53 9.87 15.28 9.98 15.02 9.98C14.77 9.98 14.54 9.89 14.36 9.74C14.17 9.58 14.05 9.36 14.02 9.12L12.16 10.99L13.94 11.58C14.53 11.77 15.05 12.16 15.42 12.67C15.79 13.18 15.99 13.79 15.99 14.43V14.98C15.99 15.77 15.67 16.53 15.11 17.10C14.54 17.66 13.78 17.98 12.99 17.98V18.98C12.99 19.24 12.88 19.49 12.69 19.68C12.50 19.87 12.25 19.98 11.99 19.98C11.72 19.98 11.47 19.87 11.28 19.68C11.09 19.49 10.99 19.24 10.99 18.98V17.98C10.22 17.98 9.48 17.68 8.92 17.15C8.36 16.63 8.03 15.90 7.98 15.14L4.54 18.64C5.48 19.69 6.63 20.53 7.92 21.11C9.20 21.69 10.59 21.99 12.01 22.00C14.66 21.99 17.20 20.94 19.07 19.06C20.94 17.19 22.00 14.65 22.00 12V12Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"url(#paint1_linear_5737_648)\"></path></mask><g mask=\"url(#mask0_5737_648)\"><rect width=\"24\" height=\"24\" fill=\"currentColor\"></rect></g><defs><linearGradient id=\"paint0_linear_5737_648\" x1=\"10.44\" y1=\"15.86\" x2=\"13.13\" y2=\"13.16\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.4\"></stop><stop offset=\"1\" stop-color=\"white\"></stop></linearGradient><linearGradient id=\"paint1_linear_5737_648\" x1=\"8.26\" y1=\"22.40\" x2=\"22.39\" y2=\"8.26\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.4\"></stop><stop offset=\"1\" stop-color=\"white\"></stop></linearGradient></defs></svg></span>", DUO_EUR="<span class=\"frac\"><svg class=\"ic duo\" width=\"24\" height=\"24\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"mask0_5737_664\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"20\" height=\"20\"><path d=\"M11.98 22C13.97 22.00 15.91 21.41 17.56 20.31C19.20 19.21 20.49 17.64 21.24 15.80C22.00 13.97 22.19 11.95 21.79 10.01C21.40 8.07 20.44 6.28 19.03 4.89L16.11 7.87C16.17 8.08 16.20 8.31 16.20 8.54V9.33C16.20 9.46 16.18 9.58 16.13 9.70C16.07 9.90 15.94 10.08 15.77 10.20C15.60 10.33 15.39 10.40 15.18 10.40C14.97 10.40 14.77 10.33 14.59 10.20C14.42 10.08 14.30 9.90 14.24 9.70L10.82 13.14C11.02 13.17 11.20 13.28 11.33 13.44C11.45 13.59 11.51 13.79 11.49 13.99C11.47 14.19 11.38 14.38 11.23 14.51C11.08 14.65 10.89 14.72 10.69 14.72H9.58V15.16C9.55 15.34 9.57 15.51 9.63 15.68C9.69 15.84 9.79 15.99 9.91 16.12C10.05 16.24 10.20 16.33 10.37 16.39C10.54 16.45 10.72 16.47 10.90 16.46H12.80C13.18 16.46 13.50 16.11 13.79 15.88C13.91 15.76 14.01 15.62 14.07 15.47C14.14 15.31 14.16 15.14 14.16 14.97V14.40C14.15 14.35 14.15 14.30 14.16 14.25C14.15 14.20 14.15 14.15 14.16 14.09C14.21 13.87 14.34 13.67 14.52 13.53C14.70 13.40 14.92 13.32 15.15 13.33C15.38 13.32 15.61 13.40 15.79 13.55C15.97 13.69 16.09 13.89 16.14 14.12C16.14 14.12 16.14 14.18 16.14 14.21V14.36V15.27C16.14 15.65 16.05 16.02 15.89 16.36C15.73 16.71 15.50 17.01 15.22 17.26C14.61 17.89 13.78 18.27 12.91 18.33H10.81C9.92 18.27 9.08 17.89 8.45 17.26C8.13 16.98 7.89 16.64 7.72 16.26L4.95 19.09C6.82 20.95 9.35 21.99 11.98 22V22Z\" fill=\"url(#paint0_linear_5737_664)\"></path><path d=\"M14.19 9.63C14.14 9.53 14.12 9.41 14.13 9.30V8.80C14.13 8.63 14.11 8.46 14.04 8.31C13.98 8.15 13.88 8.01 13.76 7.89C13.49 7.66 13.13 7.54 12.77 7.56H10.90C10.72 7.55 10.54 7.57 10.37 7.63C10.20 7.69 10.05 7.78 9.91 7.89C9.79 8.01 9.69 8.15 9.63 8.31C9.57 8.46 9.54 8.63 9.55 8.80V9.61H10.66C10.87 9.61 11.07 9.69 11.22 9.85C11.37 10.00 11.46 10.20 11.46 10.41C11.46 10.86 11.09 11.46 10.66 11.46H9.58V13.14H10.69C10.73 13.14 10.78 13.14 10.82 13.14L14.24 9.69C14.24 9.69 14.20 9.66 14.19 9.63Z\" fill=\"white\"></path><path d=\"M11.98 2.00C10.00 2.00 8.07 2.59 6.42 3.69C4.78 4.79 3.50 6.36 2.75 8.19C1.99 10.02 1.80 12.03 2.19 13.97C2.59 15.92 3.55 17.70 4.95 19.09L7.73 16.29C7.58 15.96 7.51 15.60 7.51 15.24V14.50H6.60C6.39 14.50 6.18 14.41 6.03 14.26C5.88 14.11 5.80 13.91 5.80 13.70C5.80 13.48 5.88 13.28 6.03 13.13C6.18 12.98 6.39 12.89 6.60 12.89H7.51V11.22H6.60C6.39 11.22 6.18 11.13 6.03 10.98C5.88 10.83 5.80 10.63 5.80 10.41C5.80 10.20 5.88 10.00 6.03 9.85C6.18 9.69 6.39 9.61 6.60 9.61H7.51V8.51C7.53 8.13 7.62 7.75 7.79 7.41C7.96 7.07 8.21 6.77 8.50 6.53C9.16 5.97 10.01 5.67 10.87 5.70H13.03C13.88 5.67 14.70 5.97 15.34 6.54C15.75 6.89 16.04 7.36 16.17 7.89L19.08 4.91C18.15 3.98 17.04 3.24 15.83 2.74C14.61 2.24 13.30 1.99 11.98 2.00Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_5737_664)\"><rect width=\"24\" height=\"24\" fill=\"currentColor\"></rect></g><defs><linearGradient id=\"paint0_linear_5737_664\" x1=\"8.44\" y1=\"22.58\" x2=\"22.57\" y2=\"8.44\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.4\"></stop><stop offset=\"1\" stop-color=\"white\"></stop></linearGradient></defs></svg></span>";
  let BID=152.40, ASK=152.64;
  const RATE=505;
  const ACCS=[
    {id:'gl',  n:'Глобальный счёт', s:'789099',     sh:'GL 789099',  cur:'USD', raw:11200.52,   bal:11200.52,       ic:'gl'},
    {id:'sup', n:'Super Card',      s:'KZT **0679', sh:'Super Card', cur:'KZT', raw:2400890.73, bal:2400890.73/RATE, ic:'green'}
  ];
  let SIDE='buy'; const SELL=()=>SIDE==='sell'; const MVF_ON=()=>document.getElementById('device').classList.contains('mvf'); const MKT=()=>SELL()?BID:ASK;
  const accIc=(a,sm)=>a.ic==='gl'?'<span class="aic gl'+(sm?' sm':'')+'">GL</span>':'<span class="aic mc '+a.ic+(sm?' sm':'')+'"><i></i><b></b></span>';
  const accMoney=a=>{ const [i,d]=a.raw.toFixed(2).split('.'); const g=i.replace(/\B(?=(\d{3})+(?!\d))/g,' '); return a.cur==='USD'?'$'+g+','+d:g+','+d+' ₸'; };
  const accShort=a=>{ const [i,d]=a.raw.toFixed(2).split('.'); const g=i.replace(/\B(?=(\d{3})+(?!\d))/g,' '); return a.cur==='USD'?'$'+g+','+d:g+' ₸'; };
  const TIF=[['gtc','До отмены'],['day','До конца дня'],['dayplus','До конца дня +']];
  const ASK_OFF=[1.10,.95,.80,.65,.50,.40,.30,.20,.10,0], BID_OFF=[0,-.10,-.25,-.40,-.50,-.60,-.75,-.90,-1.05,-1.20];
  let ASK_V=[16,17,70,2600,60,129,19,1000,4420,199], BID_V=[7,1997,2,10,500,3066,26,2,2,19];
  const r2=n=>Math.round(n*100)/100;
  const book=()=>({asks:ASK_OFF.map((o,i)=>[r2(ASK+o),ASK_V[i]]), bids:BID_OFF.map((o,i)=>[r2(BID+o),BID_V[i]])});
  const INIT={mode:'sum',sum:'1',qty:'1',price:'',field:'qty',limit:false,acc:'gl',tif:'gtc',sl:'',tp:'',margin:false};
  let S=JSON.parse(JSON.stringify(INIT));

  const $=id=>document.getElementById(id);
  const accOf=()=>ACCS.find(a=>a.id===S.acc);
  const tifOf=()=>TIF.find(t=>t[0]===S.tif)[1];
  const num=s=>parseFloat(String(s||'').replace(',','.'))||0;

  // ── formatting ──
  const group=int=>int.replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const fmtInput=(s,sep)=>{ if(s==='') return '0'; const [i,d]=s.split('.'); return group(i)+(d!==undefined?sep+d:''); };
  const fmtMoney=(n,sep)=>{ const r=Math.round(n*100)/100; const whole=Math.abs(r-Math.round(r))<1e-9; const [i,d]=r.toFixed(2).split('.'); return '$'+group(i)+(whole?'':sep+d); };
  const fmt2=n=>{ const [i,d]=(Math.round(n*100)/100).toFixed(2).split('.'); return '$'+group(i)+','+d; };
  const fmtBal=n=>{ const [i,d]=n.toFixed(2).split('.'); return group(i)+(d==='00'?'':','+d)+'$'; };
  const plural=n=>{ if(!Number.isInteger(n)) return 'акции'; const m10=n%10,m100=n%100;
    if(m10===1&&m100!==11) return 'акция'; if(m10>=2&&m10<=4&&(m100<12||m100>14)) return 'акции'; return 'акций'; };
  const fmtShares=(n,sep)=>{ if(n===0) return '0 акций'; const s=(n>=0.005?n.toFixed(2):n.toFixed(4)).replace(/\.?0+$/,''); return s.replace('.',sep||',')+' '+plural(Number(s)); };

  // ── number with rising digit ──
  function Num(el){
    const wrap=el.parentNode;
    const shown=()=>el.offsetParent!==null && !el.closest('[aria-hidden="true"]');
    return { set(str,o){ o=o||{}; const go=shown(); const first=el.firstChild;
      const before=go&&first?first.getBoundingClientRect().left:null;
      wrap.getAnimations().forEach(a=>a.cancel());
      const prev=el.textContent;
      el.textContent='';
      const chars=[...str];
      let d0=0; while(d0<prev.length&&d0<chars.length&&prev[d0]===chars[d0]) d0++;
      chars.forEach((c,i)=>{ const n=document.createElement('span'); n.className='ch'; n.textContent=c; if(go&&o.rise&&i===chars.length-1) n.classList.add('rise'); el.appendChild(n);
        if(go&&o.roll&&i>=d0&&prev!==str) n.animate([{transform:'translateY('+(o.roll>0?100:-100)+'%)',opacity:0},{transform:'none',opacity:1}],{duration:440,delay:(i-d0)*35,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'}); });
      if(go&&o.roll&&prev!==str){ const c=o.roll>0?'#10C810':'#FF3B47', base=getComputedStyle(el).color; el.animate([{color:c},{color:c,offset:.4},{color:base}],{duration:1500,easing:'ease-out'}); }
      if(before!==null&&o.glide){ const dx=before-el.firstChild.getBoundingClientRect().left;
        if(Math.abs(dx)>.5) wrap.animate([{transform:'translateX('+dx+'px)'},{transform:'translateX(0)'}],{duration:260,easing:'cubic-bezier(.16,1,.3,1)'}); }
    }};
  }
  const A={sum:Num($('sumNum')),qty:Num($('qtyNum')),price:Num($('priceNum')),total:Num($('totalNum'))};

  const meas=document.createElement('span');
  meas.style.cssText='position:absolute;visibility:hidden;white-space:pre;font-weight:700;font-size:48px;font-family:inherit';
  document.body.appendChild(meas);
  function fit(str){ meas.textContent=str; const w=meas.getBoundingClientRect().width+10; const max=Math.min(330,$('device').clientWidth-60);
    $('big').style.fontSize=(w>max?Math.max(28,48*max/w):48)+'px'; }
  function shake(el){ el.animate([{transform:'translateX(0)'},{transform:'translateX(-9px)'},{transform:'translateX(7px)'},{transform:'translateX(-4px)'},{transform:'translateX(2px)'},{transform:'translateX(0)'}],{duration:340,easing:'ease-out'});
    if(navigator.vibrate) try{navigator.vibrate(12)}catch(e){} }

  const effPrice=()=>S.limit?num(S.price):MKT();
  // judged only once the integer part is as long as Bid's, so "3" → "31" → "311" doesn't flash an error mid-typing
  const limitTooLow=()=>{ if(!(S.limit&&S.price!=='')) return false;
    const intLen=S.price.split('.')[0].length, full=S.price.includes('.')||intLen>=String(Math.floor(BID)).length;
    return full&&(SELL()?num(S.price)>ASK+1e-9:num(S.price)<BID-1e-9); };
  const settingsChanged=()=>S.tif!=='gtc'||S.sl!==''||S.tp!==''||S.margin||(S.limit&&S.mode==='sum');

  // ── render main ──
  function render(o){
    o=o||{}; const R=f=>({rise:o.rise===f,glide:!!o.glide});
    const qtyMode=S.mode==='qty';
    $('seg').dataset.mode=S.mode;
    $('tSum').setAttribute('aria-selected',!qtyMode); $('tQty').setAttribute('aria-selected',qtyMode);
    $('pSum').setAttribute('aria-hidden',qtyMode); $('pQty').setAttribute('aria-hidden',!qtyMode);

    const sumStr='$'+fmtInput(S.sum,',');
    const sWas=$('sumNum').classList.contains('empty'), sNow=S.sum==='';
    A.sum.set(sumStr,{rise:o.rise==='sum'||(sNow&&!sWas&&!!o.glide),glide:!!o.glide});
    $('sumNum').classList.toggle('empty',sNow);
    if(o.glide&&sWas!==sNow) $('sumNum').animate([{opacity:.25},{opacity:1}],{duration:260,easing:'cubic-bezier(.2,.8,.3,1)'});
    fit(sumStr);
    $('shares').textContent=fmtShares(num(S.sum)/(S.limit&&num(S.price)>0?num(S.price):MKT()))+(S.limit&&num(S.price)>0?' · лимит '+fmt2(num(S.price)):'');

    A.qty.set(fmtInput(S.qty,','),R('qty'));
    $('priceLab').textContent=S.limit?'Лимитная цена':'Рыночная цена';
    const pWas=$('priceNum').classList.contains('empty'), pNow=S.limit&&S.price==='';
    A.price.set(S.limit?'$'+fmtInput(S.price,','):fmtMoney(MKT(),','),{rise:o.rise==='price'||(pNow&&!pWas&&!!o.glide),glide:!!o.glide,roll:S.limit?0:o.roll});
    $('priceNum').classList.toggle('empty',pNow);
    if(o.glide&&pWas!==pNow) $('priceNum').animate([{opacity:.25},{opacity:1}],{duration:260,easing:'cubic-bezier(.2,.8,.3,1)'});
    $('toMarket').classList.toggle('on',S.limit);
    const total=num(S.qty)*effPrice();
    A.total.set(fmtMoney(total,','),{glide:!!o.glide,roll:S.limit?0:o.roll});
    $('totalV').classList.toggle('muted',total===0);

    document.querySelectorAll('.row .caret').forEach(c=>c.remove());
    const host=S.field==='qty'?$('qtyNum'):$('priceNum');
    const c=document.createElement('i'); c.className='caret sm'; host.after(c);

    const pf=qtyMode&&S.field==='price';
    if(pf && !$('device').classList.contains('price-focus')){ $('device').classList.add('price-focus'); }
    else if(!pf) $('device').classList.remove('price-focus');

    const a=accOf(); $('accName').textContent=a.sh; $('accBal').textContent=accShort(a); $('accIc').innerHTML=accIc(a,true);
    $('kComma').classList.toggle('dim',qtyMode&&S.field==='qty');
    $('setDot').classList.toggle('on',settingsChanged());
    const bad=limitTooLow();
    const was=$('rowPrice').classList.contains('bad');
    $('rowPrice').classList.toggle('bad',bad);
    $('priceErr').innerHTML=(SELL()?'Не выше Ask ':'Не ниже Bid ')+'<b>'+fmt2(SELL()?ASK:BID)+'</b> · поставить';
    const sell=SELL(), want=KIND==='ss'&&S.mode==='sum'?Math.floor(num(S.sum)/r2((S.limit&&num(S.price)>0?num(S.price):MKT())/100)+1e-9)/100:S.mode==='sum'?num(S.sum)/(S.limit&&num(S.price)>0?num(S.price):MKT()):KIND==='ss'?num(S.qty)/100:num(S.qty), over=sell&&!S.margin&&want>HAVE()+1e-9;
    $('device').classList.toggle('selling',sell);
    if(sell){ const shTxt=KIND==='ss'?String(Math.round(SH_S*100)):String(HAVE()).replace('.',','), val=HAVE()*MKT();
      $('haveS').innerHTML=over?'Больше, чем у вас есть · <b>продать всё</b>':'У вас '+shTxt+' '+plural(HAVE())+' · '+usd(val)+' · <b>всё</b>';
      $('haveQ').innerHTML=over?'У вас только '+shTxt+' · <b>всё</b>':'из '+shTxt+' · <b>продать всё</b>';
      if(S.mode==='sum') $('shares').textContent=fmtShares(want,',')+' из '+shTxt; }
    $('haveS').classList.toggle('bad',over); $('haveQ').classList.toggle('bad',over);
    $('rowQty').classList.toggle('sellc',sell); $('rowQty').classList.toggle('over',over);
    $('big').classList.toggle('over',over&&S.mode==='sum');
    $('go').classList.toggle('off',bad||over);
    if(KIND==='ss'&&S.mode==='qty'){ const lot=r2(MKT()*SSF()), q=Math.round(num(S.qty));
      document.querySelector('#rowQty .k').textContent='Количество single stock'; $('priceLab').textContent='Цена за 1 шт.'; $('toMarket').classList.remove('on');
      A.price.set(fmtMoney(lot,','),{glide:!!o.glide}); A.total.set(fmtMoney(r2(q*lot),','),{glide:!!o.glide}); $('totalV').classList.toggle('muted',q===0);
      $('haveQ').innerHTML=over?'У вас только '+shTxtS()+' · <b>всё</b>':'из '+shTxtS()+' · <b>продать всё</b>'; }
    else { const k=document.querySelector('#rowQty .k'); if(k.textContent!=='Количество акций') k.textContent='Количество акций'; }
    if(KIND==='ss'&&sell&&S.mode==='sum'){ const p=S.limit&&num(S.price)>0?num(S.price):MKT(), lot=r2(p*SSF()), lots=Math.floor(num(S.sum)/lot+1e-9), cost=r2(lots*lot);
      $('shares').textContent=lots?lots+'/100 акции по '+fmt2(lot):'0 акций';
      $('ssNote').classList.toggle('bad',num(S.sum)>0&&lots===0);
      $('ssNote').innerHTML=lots===0?'Минимум — 1/100 акции, '+fmt2(lot):'Получите <b>'+fmt2(cost)+'</b>'+(r2(num(S.sum)-cost)>=0.01?' — сумма округлена до 1/100':'');
      $('go').classList.toggle('off',bad||over||lots===0); }
    if(KIND==='ss'&&!sell&&S.mode==='sum'){ const p=S.limit&&num(S.price)>0?num(S.price):MKT(), lot=r2(p*SSF()), want=num(S.sum), lots=Math.floor(want/lot+1e-9), cost=r2(lots*lot), rest=r2(want-cost);
      $('shares').textContent=lots?fmtShares(lots/100,',')+' · '+lots+'/100 по '+fmt2(lot):'0 акций';
      $('ssNote').classList.toggle('bad',want>0&&lots===0);
      $('ssNote').innerHTML=want===0?'Минимум — 1/100 акции, '+fmt2(lot):lots===0?'Минимум — 1/100 акции, '+fmt2(lot):rest>=0.01?'Купим на <b>'+fmt2(cost)+'</b>, '+fmt2(rest)+' останется на счёте':'Купим ровно на <b>'+fmt2(cost)+'</b>';
      $('go').classList.toggle('off',bad||lots===0); }
    /* кнопка заявки: «Купить» / «Продать» (без «Пополнить счёт»); у нового клиента при нехватке денег она по-прежнему ведёт на пополнение */
    $('go').textContent=sell?'Продать':'Купить';
    if(FRESH){ const lack=!sell&&order().total>ACCS[0].bal+1e-9&&S.acc==='gl'; $('go').dataset.dep=lack?'1':''; if(lack) $('go').classList.remove('off'); } else $('go').dataset.dep='';
  }

  // ── input ──
  let typT=0; function typing(){ const d=$('device'); d.classList.add('typing'); clearTimeout(typT); typT=setTimeout(()=>d.classList.remove('typing'),600); }
  function press(k){ typing();
    if($('device').classList.contains('on-confirm')) return;
    if(SSQ()) S.field='qty';
    const key=S.mode==='sum'?'sum':S.field;
    const target=S.mode==='sum'?$('big'):(key==='qty'?$('qtyNum'):$('priceNum')).parentNode;
    // writing straight into the market price turns it into a limit price
    if(key==='price' && !S.limit){
      // ⌫ on the market price starts editing it (becomes a limit), a digit replaces it
      S.limit=true; S.price=k==='del'?MKT().toFixed(2):'';
    }
    let s=S[key];
    if(k==='del'){ if(s===''){shake(target);return;} s=s.slice(0,-1); }
    else if(k===','){ if(key==='qty'||s.includes('.')){shake(target);return;} s=(s===''?'0':s)+'.'; }
    else {
      if(s==='0') s='';
      if(s.includes('.')&&s.split('.')[1].length>=2){shake(target);return;}
      if(s.replace('.','').length>=(key==='qty'?6:8)){shake(target);return;}
      if(s===''&&k==='0'&&key==='qty'){shake(target);return;}
      s+=k;
    }
    S[key]=s; render({rise:k==='del'?null:key,glide:true});
  }
  $('keypad').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(b) press(b.dataset.k); });
  document.addEventListener('keydown',e=>{ if(e.key==='Tab') document.body.classList.add('kbd'); });
  document.addEventListener('pointerdown',()=>document.body.classList.remove('kbd'));
  document.addEventListener('keydown',e=>{
    if(e.target && e.target.tagName==='INPUT') return;
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    if($('sheet').classList.contains('on')){ if(e.key==='Escape') closeSheet(); return; }
    if($('device').classList.contains('on-confirm')){ if(e.key==='Escape'||e.key==='Backspace') goBack(); return; }
    if(!$('device').classList.contains('on-order')) return;
    if(e.key==='Escape'){ goStock(); return; }
    let k=null;
    if(/^[0-9]$/.test(e.key)) k=e.key; else if(e.key===','||e.key==='.') k=','; else if(e.key==='Backspace') k='del';
    else if(e.key==='Enter'){ goConfirm(); return; }
    if(!k) return; e.preventDefault();
    const b=document.querySelector('.key[data-k="'+k+'"]'); if(b){ b.classList.add('pressed'); setTimeout(()=>b.classList.remove('pressed'),110); }
    press(k);
  });

  function setLimit(px){ S.mode='qty'; S.limit=true; S.field='price'; S.price=Number(px).toFixed(2); render({glide:true}); }

  $('tSum').onclick=()=>{ if(S.mode!=='sum'){S.mode='sum'; render();} };
  $('tQty').onclick=()=>{ if(S.mode!=='qty'){S.mode='qty'; S.field='qty'; render();} };
  $('rowQty').onclick=()=>{ S.field='qty'; render(); };
  $('rowPrice').onclick=e=>{ if(e.target.closest('#toMarket')) return; S.field='price'; render(); };
  $('priceErr').onclick=e=>{ e.stopPropagation(); setLimit(SELL()?ASK:BID); };
  $('toMarket').onclick=e=>{ e.stopPropagation(); S.limit=false; S.price=''; render({glide:true}); };
  $('reset').onclick=()=>goStock();
  // Bid / Ask: while the price is focused they are live buttons, otherwise the line opens the book
  $('qMain').addEventListener('click',e=>{
    const px=e.target.closest('.px');
    if(px && $('device').classList.contains('price-focus')) { setLimit(px.dataset.px); return; }
    openBook();
  });

  // ── sheets ──
  const sheet=$('sheet'), scrim=$('scrim');
  const XB='<button class="xbtn" data-close aria-label="Закрыть"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="#0F0F0F" stroke-width="2.2" stroke-linecap="round"/></svg></button>';
  const CHECK='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11.5l4 4L17.5 7" stroke="#4EBC73" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEV='<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5 13 10l-5.5 5.5" stroke="#AEAEB2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const BACKI='<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 5 8 12l7 7" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function openSheet(html,cls){ sheet.className='sheet'+(cls?' '+cls:''); sheet.innerHTML='<div class="grab"></div>'+html; scrim.classList.add('on'); requestAnimationFrame(()=>sheet.classList.add('on')); }
  function swapSheet(html,cls){ sheet.className='sheet on'+(cls?' '+cls:''); sheet.innerHTML='<div class="grab"></div>'+html;
    sheet.animate([{opacity:.4,transform:'translateX(12px)'},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'}); }
  function closeSheet(){ const inp=sheet.querySelector('input'); if(inp) inp.blur(); sheet.classList.remove('on'); scrim.classList.remove('on'); }
  scrim.onclick=closeSheet;
  sheet.addEventListener('click',e=>{ if(e.target.closest('[data-close]')) closeSheet(); });
  const head=t=>'<div class="sh-head center"><span></span><h3>'+(t||'')+'</h3>'+XB+'</div>';

  // order settings — capital.com-style toggle cards: limit · stop-loss · take-profit · margin
  const STEP=0.05, MINUS_I='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11h12" stroke="#8E8E93" stroke-width="1.8" stroke-linecap="round"/></svg>',
    PLUS_I='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11h12M11 5v12" stroke="#8E8E93" stroke-width="1.8" stroke-linecap="round"/></svg>',
    CHEVD='<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="#8E8E93" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    INFO_I='<svg width="18" height="18" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="#0F0F0F"/><path d="M10 9v5" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="10" cy="6" r="1.2" fill="#fff"/></svg>';
  const DRAFT={lim:'',sl:'',tp:''};
  const ent=()=>S.limit&&num(S.price)>0?num(S.price):MKT();
  const posShares=()=>S.mode==='qty'?num(S.qty):num(S.sum)/ent();
  const commaV=v=>String(v).replace('.',',');
  function stepper(id,val){ return '<div class="stp" id="'+id+'W"><span class="cur">$</span><input id="'+id+'" inputmode="decimal" autocomplete="off" value="'+commaV(val)+'">'+
    '<button class="sb" data-d="-1" data-for="'+id+'" aria-label="Меньше">'+MINUS_I+'</button><button class="sb" data-d="1" data-for="'+id+'" aria-label="Больше">'+PLUS_I+'</button></div>'; }
  function ocard(k,title,on,body,sub){ return '<div class="oc'+(on?' on':'')+'" data-k="'+k+'"><button class="oc-h" data-tg="'+k+'" role="switch" aria-checked="'+on+'"><span class="t">'+title+(sub?'<small>'+sub+'</small>':'')+'</span><i class="tg'+(on?' on':'')+'"></i></button>'+
    (body?'<div class="oc-b"><div class="oc-in"><div class="oc-pad">'+body+'</div></div></div>':'')+'</div>'; }
  function settingsHTML(){
    return '<div class="sh-head center"><h3>Настройки приказа</h3>'+XB+'</div><div class="set-body2">'+
      ocard('lim',(SELL()?'Продать':'Купить')+', когда цена составит',S.limit, stepper('limInp',DRAFT.lim)+
        '<div class="oc-err" id="limErr"></div>'+
        '<div class="oc-f"><span class="k">Действителен до</span><button class="lnk2" id="tifRow">'+tifOf()+CHEVD+'</button></div>')+
      ocard('sl','Стоп-лосс',!!S.sl, stepper('slInp',DRAFT.sl)+
        '<div class="oc-f"><span class="k">Убыток: <b class="dn" id="slRes"></b></span><span class="k">Дистанция: <b id="slDist"></b></span></div>')+
      ocard('tp','Тейк-профит',!!S.tp, stepper('tpInp',DRAFT.tp)+
        '<div class="oc-f"><span class="k">Прибыль: <b class="up" id="tpRes"></b></span><span class="k">Дистанция: <b id="tpDist"></b></span></div>')+
      ocard('mg','Использовать маржу',S.margin,'',SELL()?'Продать больше, чем есть (шорт)':'Докупить больше, чем есть на счёте')+
      '</div><div class="set-cta"><button class="oc-info" id="ocInfo">Информация об ордере '+INFO_I+'</button><button class="cta" data-close>Готово</button></div>';
  }
  const KEY={limInp:'lim',slInp:'sl',tpInp:'tp'};
  const ocOn=k=>{ const c=sheet.querySelector('.oc[data-k="'+k+'"]'); return !!c&&c.classList.contains('on'); };
  function applyOpt(k){ const v=DRAFT[k];
    if(k==='lim'){ S.limit=true; S.price=v; if(S.mode==='qty') S.field='price'; }
    if(k==='sl') S.sl=v; if(k==='tp') S.tp=v; render({glide:true}); }
  function toggleOpt(k){ const c=sheet.querySelector('.oc[data-k="'+k+'"]'); const on=!c.classList.contains('on');
    c.classList.toggle('on',on); c.querySelector('.tg').classList.toggle('on',on); c.querySelector('.oc-h').setAttribute('aria-checked',on);
    if(k==='mg'){ S.margin=on; render(); return; }
    if(on) applyOpt(k);
    else { if(k==='lim'){ S.limit=false; S.price=''; } if(k==='sl') S.sl=''; if(k==='tp') S.tp=''; render({glide:true}); }
    updHints(); }
  function onVal(id){ DRAFT[KEY[id]]=$(id).value.replace(',','.'); if(ocOn(KEY[id])) applyOpt(KEY[id]); updHints(); }
  function stepBy(id,d){ const inp=$(id); const base=num(inp.value)||ent(); const v=Math.max(0.01,Math.round((base+d*STEP)*100)/100);
    inp.value=commaV(v.toFixed(2)); onVal(id); inp.parentNode.animate([{transform:'translateY('+(d>0?-2:2)+'px)'},{transform:'none'}],{duration:160}); }
  function hold(b,fn){ let t=0,iv=0; const stop=()=>{ clearTimeout(t); clearInterval(iv); };
    b.addEventListener('pointerdown',e=>{ e.preventDefault(); fn(); t=setTimeout(()=>{ iv=setInterval(fn,70); },380); });
    ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,stop)); }
  function updHints(){
    if(!$('slRes')) return;
    const e=ent(), sh=posShares();
    const lv=num(DRAFT.lim), lbad=ocOn('lim')&&lv>0&&(SELL()?lv>ASK+1e-9:lv<BID-1e-9), sg=SELL()?-1:1;
    $('limErr').innerHTML=(SELL()?'Не выше Ask '+fmt2(ASK):'Не ниже Bid '+fmt2(BID))+' · <b>поставить</b>'; $('limErr').classList.toggle('on',lbad); $('limInpW').classList.toggle('bad',lbad);
    const sv=num(DRAFT.sl), sd=sg*(e-sv), sok=sd>0;
    $('slRes').textContent=sok?MIN+'$'+dec(sh*sd):(SELL()?'ниже':'выше')+' цены входа'; $('slDist').textContent=dec(Math.abs(sd))+' ('+dec(Math.abs(sd)/e*100)+'%)';
    $('slInpW').classList.toggle('bad',ocOn('sl')&&!sok);
    const tv=num(DRAFT.tp), td=sg*(tv-e), tok=td>0;
    $('tpRes').textContent=tok?'+$'+dec(sh*td):(SELL()?'выше':'ниже')+' цены входа'; $('tpRes').className=tok?'up':'dn'; $('tpDist').textContent=dec(Math.abs(td))+' ('+dec(Math.abs(td)/e*100)+'%)';
    $('tpInpW').classList.toggle('bad',ocOn('tp')&&!tok);
  }
  function bindSettings(){
    sheet.querySelectorAll('[data-tg]').forEach(b=>b.onclick=()=>toggleOpt(b.dataset.tg));
    $('tifRow').onclick=openTif;
    ['limInp','slInp','tpInp'].forEach(id=>{ const inp=$(id); inp.addEventListener('input',()=>{ let v=inp.value.replace(/[^\d.,]/g,'').replace('.',','); const p=v.split(','); if(p.length>2) v=p[0]+','+p.slice(1).join(''); if(p[1]&&p[1].length>2) v=p[0]+','+p[1].slice(0,2); inp.value=v; onVal(id); }); });
    sheet.querySelectorAll('.sb').forEach(b=>hold(b,()=>stepBy(b.dataset.for,+b.dataset.d)));
    $('limErr').onclick=()=>{ $('limInp').value=commaV((SELL()?ASK:BID).toFixed(2)); onVal('limInp'); };
    $('ocInfo').onclick=()=>toast('Комиссия 0,5%, мин. $0,02 · стоп и тейк исполняются по рынку');
    updHints();
  }
  function openSettings(){
    const e=ent();
    const sg=SELL()?-1:1;
    DRAFT.lim=S.limit&&S.price!==''?S.price:MKT().toFixed(2);
    DRAFT.sl=S.sl||(Math.round(e*(1-0.01*sg)*100)/100).toFixed(2);
    DRAFT.tp=S.tp||(Math.round(e*(1+0.01*sg)*100)/100).toFixed(2);
    openSheet(settingsHTML(),'settings'); bindSettings(); }
  function backToSettings(){ swapSheet(settingsHTML(),'settings'); bindSettings(); }
  function openTif(){
    swapSheet('<div class="sh-head center"><button class="lead" id="tifBack">'+BACKI+'</button><h3>Срок</h3>'+XB+'</div><div class="sh-body tif-list">'+
      TIF.map(t=>'<button class="opt'+(t[0]===S.tif?' sel':'')+'" data-tif="'+t[0]+'"><span class="t">'+t[1]+'</span>'+(t[0]===S.tif?CHECK:'')+'</button>').join('')+'</div>','settings');
    $('tifBack').onclick=backToSettings;
    sheet.querySelectorAll('[data-tif]').forEach(b=>b.onclick=()=>{ S.tif=b.dataset.tif; render(); setTimeout(backToSettings,140); });
  }
  $('openSettings').onclick=openSettings;

  function openAcc(){
    const o=order(), fee=Math.max(0.02,Math.round(o.total*0.005*100)/100), sum=SELL()?o.total-fee:o.total+fee;
    let pick='gl';
    const note=()=>{ const a=ACCS.find(x=>x.id===pick); return (SELL()?'Сумма к зачислению: ':'Сумма к списанию: ')+'<b>'+fmt2(sum)+'</b>'+(a.cur==='KZT'?' <span>≈ '+group(String(Math.round(sum*RATE)))+' ₸</span>':''); };
    openSheet('<div class="sh-head center"><span></span><h3 class="lg">Выберите счёт</h3><span></span></div><div class="acc-list">'+
      ACCS.filter(a=>a.id==='gl').map(a=>'<button class="accw'+(a.id===pick?' sel':'')+'" data-acc="'+a.id+'"><span class="acc-in">'+accIc(a)+'<span class="acc-tx"><span class="l1"><b>'+a.n+'</b> · '+a.s+'</span><span class="l2">'+accMoney(a)+'</span></span></span>'+
        '<i class="radio"><svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.2 4.6 4.3 7.6 10.8 1.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>').join('')+
      '</div><div class="acc-note" id="accNote">'+note()+'</div><div class="sh-cta"><button class="cta" id="accOk">Выбрать</button></div>','acc');
    sheet.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{ pick=b.dataset.acc; sheet.querySelectorAll('.accw').forEach(x=>x.classList.toggle('sel',x===b)); $('accNote').innerHTML=note(); });
    $('accOk').onclick=()=>{ S.acc=pick; render(); if($('device').classList.contains('on-confirm')) fillConfirm(); closeSheet();
      $('openAcc').animate([{transform:'scale(1.08)'},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'}); };
  }
  $('openAcc').onclick=openAcc;

  // order book (for=limit | stop)
  function bookStats(){ const {asks,bids}=book(); const sb=bids.reduce((a,r)=>a+r[1],0), sa=asks.reduce((a,r)=>a+r[1],0);
    return {asks,bids,buy:Math.round(sb/(sa+sb)*100)}; }
  const pxFmt=n=>{ const [i,d]=n.toFixed(2).split('.'); return group(i)+','+d; };
  const spreadTxt=()=>fmt2(ASK-BID)+' · '+((ASK-BID)/BID*100).toFixed(2).replace('.',',')+'%';
  function bookInner(forWhat,inline){
    const {asks,bids,buy}=bookStats();
    const maxV=Math.max(...asks.map(r=>r[1]),...bids.map(r=>r[1]));
    const w=v=>Math.max(10,Math.round(Math.sqrt(v/maxV)*100));
    const row=(r,cls,best)=>'<button class="bk '+cls+(best?' best':'')+'" data-px="'+r[0]+'"><span class="p">'+pxFmt(r[0])+'</span><span class="trk"><i class="cap '+(cls==='ask'?'r':'g')+'" style="width:'+w(r[1])+'%"></i></span><span class="vol">'+group(String(r[1]))+'</span></button>';
    return '<div class="bk-card bk-sum">'+
          '<div class="cols">'+
            '<button class="side" data-px="'+BID+'"><span class="k">Покупка</span><span class="v jb">'+fmt2(BID)+'</span><span class="x jbx">x '+group(String(bids[0][1]))+'</span></button>'+
            '<button class="side r" data-px="'+ASK+'"><span class="k">Продажа</span><span class="v ja">'+fmt2(ASK)+'</span><span class="x jax">x '+group(String(asks[asks.length-1][1]))+'</span></button>'+
          '</div>'+
          '<div class="press"><i class="cap g jpb" style="flex-grow:'+buy+'">'+buy+'%</i><i class="cap r jps" style="flex-grow:'+(100-buy)+'">'+(100-buy)+'%</i></div>'+
        '</div>'+
        '<div class="bk-card bk-list">'+
          '<div class="bk-cols"><span>Цена, $</span><span></span><span>Объём, шт</span></div>'+
          asks.map((r,i)=>row(r,'ask',i===asks.length-1)).join('')+
          '<div class="sp"><i></i><span class="jsp">Спред '+spreadTxt()+'</span><i></i></div>'+
          bids.map((r,i)=>row(r,'bid',i===0)).join('')+
        '</div>'+
        '<div class="bk-hint">'+(forWhat==='stop'?'Тапни по цене — она станет стоп-ценой':inline?'Тапни по цене — откроется заявка с этой ценой':'Тапни по цене — она станет лимитной. Лимит — не ниже Bid')+'</div>';
  }
  function bindBook(root,forWhat){
    root.querySelectorAll('[data-px]').forEach(b=>b.onclick=()=>{
      if(forWhat==='stop'){ S.sl=Number(b.dataset.px).toFixed(2); DRAFT.sl=S.sl; render(); backToSettings(); return; }
      if(!$('device').classList.contains('on-order')) setSide('buy');
      const px=Number(b.dataset.px);
      if(SELL()?px>ASK+1e-9:px<BID-1e-9){ shake(b); const h=root.querySelector('.bk-hint'); if(h){ h.textContent=SELL()?'Лимит выше Ask '+fmt2(ASK)+' поставить нельзя':'Лимит ниже Bid '+fmt2(BID)+' поставить нельзя'; h.classList.add('warn'); } return; }
      if($('device').classList.contains('on-confirm')) goBack();
      if(!$('device').classList.contains('on-order')) goOrder();
      setLimit(b.dataset.px); if(sheet.classList.contains('on')) setTimeout(closeSheet,120); });
  }
  function openBook(forWhat){
    if(window.__DS&&forWhat!=='stop'){ window.__DS.open('book',{bid:BID,ask:ASK,limit:dev.classList.contains('on-order')}); return; }
    forWhat=forWhat==='stop'?'stop':'limit';
    const html='<div class="bk-top">'+(forWhat==='stop'?'<button class="lead" id="bookBack">'+BACKI+'</button>':'<span></span>')+
        '<div class="c"><h3>Стакан</h3><div class="live"><i></i>AAPL · обновляется онлайн</div></div>'+XB+'</div>'+
      '<div class="bk-scroll" id="bkScroll">'+bookInner(forWhat)+'</div>';
    if(forWhat==='stop') swapSheet(html,'book'); else openSheet(html,'book');
    const sc=$('bkScroll'), mid=sc.querySelector('.sp');
    requestAnimationFrame(()=>{ sc.scrollTop+=mid.getBoundingClientRect().top-sc.getBoundingClientRect().top-(sc.clientHeight-mid.offsetHeight)/2; });
    if($('bookBack')) $('bookBack').onclick=backToSettings;
    bindBook(sheet,forWhat);
  }
  document.querySelectorAll('#scrConfirm [data-book]').forEach(b=>b.onclick=()=>openBook());

  // ── confirm screen ──
  function order(){
    const sumMode=S.mode==='sum';
    if(sumMode){ const total=num(S.sum), lim=S.limit&&num(S.price)>0, price=lim?num(S.price):MKT();
      if(KIND==='ss'){ const lot=r2(price*SSF()), lots=Math.floor(total/lot+1e-9), cost=r2(lots*lot); return {sumMode,ss:true,lots,want:total,type:lim?'Лимитный':'Рыночный',price,shares:lots/100,total:cost,isLimit:lim}; }
      return {sumMode,type:lim?'Лимитный':'Рыночный',price,shares:total/price,total,isLimit:lim}; }
    const price=effPrice(), q=num(S.qty); if(KIND==='ss'){ const lot=r2(price*SSF()); return {sumMode,ss:true,lot,lots:Math.round(q),type:S.limit?'Лимитный':'Рыночный',price,shares:Math.round(q)/100,total:r2(Math.round(q)*lot),isLimit:S.limit}; }
    return {sumMode,type:S.limit?'Лимитный':'Рыночный',price,shares:q,total:q*price,isLimit:S.limit};
  }
  function fillConfirm(live){
    const o=order(), a=accOf(), sell=SELL();
    const fee=Math.max(0.02,Math.round(o.total*0.005*100)/100);
    const all=sell?o.total-fee:o.total+fee;
    const buys=o.ss&&!o.sumMode?o.lots+' шт. AAPL/100':o.ss?fmtShares(o.shares,',')+' ('+o.lots+'/100)':o.sumMode?fmtShares(o.shares,','):(S.qty+' '+plural(num(S.qty)));
    const rows=[['Тикер',o.ss?'AAPL/100':'AAPL'],['Валюта','USD'],['Тип приказа',o.type]];
    if(KIND) rows.push(['Формат',o.ss?'Single Stock ETF · 1/100':'Целые акции']);
    rows.push(o.ss?['Цена за 1 шт.',fmt2(o.lot||r2(o.price*SSF()))]:['Цена акции',fmt2(o.price)]);
    rows.push([sell?'Вы продаёте':'Вы покупаете',buys]);
    if(o.ss) rows.push([sell?'Сумма продажи':'Сумма покупки',fmt2(o.total)]);
    rows.push(
      [sell?'Зачислим на':'Спишется с',sell?accIc(ACCS[0],true)+'Брокерский счёт':accIc(a,true)+a.n]);
    if(S.tif!=='gtc') rows.push(['Срок',tifOf()]);
    if(S.sl) rows.push(['Стоп-лосс',fmt2(num(S.sl))]);
    if(S.tp) rows.push(['Тейк-профит',fmt2(num(S.tp))]);
    if(S.margin) rows.push(['Маржа','Используется']);
    rows.push(['Комиссия',fmt2(fee).slice(1)+'$'],[sell?'Итого к зачислению':'Итого к списанию',fmt2(all)]);
    const prevRc={}; $('receipt').querySelectorAll('.rc').forEach(r=>prevRc[r.children[0].textContent]=r.children[1].textContent);
    $('receipt').innerHTML=rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    if(live) $('receipt').querySelectorAll('.rc').forEach(r=>{ const k=r.children[0].textContent, v=r.children[1];
      if(prevRc[k]!==undefined && prevRc[k]!==v.textContent) v.animate([{color:live>0?'#10C810':'#FF3B47'},{color:live>0?'#10C810':'#FF3B47',offset:.4},{color:'#1E1E1E'}],{duration:1500,easing:'ease-out'}); });
    const noShares=sell&&!S.margin&&o.shares>HAVE()+1e-9;
    const short=!sell&&all>a.bal&&!S.margin;
    $('gz').classList.toggle('blocked',short||noShares);
    $('gzLbl').textContent=noShares?'У вас только '+fmtShares(HAVE(),',')+' AAPL':short?'Не хватает '+fmt2(all-a.bal)+' на '+a.n:'Проведите, чтобы '+(sell?'продать':'купить');
    $('knob').setAttribute('aria-label','Проведите вверх, чтобы '+(sell?'продать':'купить'));
    fillDone(o,a,sell,buys,all);
  }
  let OPNO=0;
  // ── receipt → collapsible card (header: title + qty · sum, rows inside) ──
  (function(){ const el=$('rcpt'); if(!el) return; let busy=false;
    const CHV='<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 9.5l6 6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const wrap=()=>{ if(busy) return; const rows=[...el.querySelectorAll(':scope > .rr')]; if(!rows.length) return; busy=true;
      const kv=rows.map(r=>[r.querySelector('.k').textContent.trim(),r.querySelector('.v').textContent.trim()]);
      const get=k=>{ const f=kv.find(x=>x[0]===k); return f?f[1]:null; };
      let title=get('Название')||kv[0][1], sub;
      const q=get('Количество'), sm=get('Сумма');
      if(get('Название')&&(q||sm)) sub=[q,sm].filter(Boolean).join(' · ');
      else { title=kv[0][1]; sub=kv.slice(1,3).map(x=>x[1]).join(' · '); }
      const lgEl=/AAPL/.test(title)?document.querySelector('.tick img.logo'):null;
      el.classList.remove('open');
      el.innerHTML='<button class="rc-hd" aria-expanded="false">'+(lgEl?'<img class="lg" alt="" src="'+lgEl.src+'">':'')+'<span class="tx"><b></b><small></small></span>'+CHV+'</button><div class="rc-bd"><div></div></div>';
      el.querySelector('.tx b').textContent=title; el.querySelector('.tx small').textContent=sub;
      const bd=el.querySelector('.rc-bd>div'); rows.forEach(r=>{ if(r.querySelector('.k').textContent.trim()!=='Название') bd.appendChild(r); });
      el.querySelector('.rc-hd').onclick=()=>{ const o=el.classList.toggle('open'); el.querySelector('.rc-hd').setAttribute('aria-expanded',o); };
      busy=false; };
    new MutationObserver(wrap).observe(el,{childList:true}); wrap(); })();

  function fillDone(o,a,sell,buys,all){
    const rr=[['Название',o.ss?'AAPL/100 · Apple Inc.':'AAPL · Apple Inc.'],['Сумма',fmt2(sell?all:o.total)],['Количество',(o.sumMode&&!o.ss?'≈ ':'')+buys],
      sell?['Зачислим на',accIc(ACCS[0],true)+'Брокерский счёт']:['Списано с',accIc(a,true)+a.sh]];
    $('rcpt').innerHTML=rr.map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('doneH').textContent='Заявка отправлена';
    $('doneTxt').textContent=o.isLimit?'Исполним, как только цена дойдёт до '+fmt2(o.price)+'. Пришлём уведомление':'Приказ направлен на биржу, после исполнения вам придет уведомление';
    $('sttT').textContent='В работе';
  }
  const sellOver=()=>{ if(!SELL()||S.margin) return false; const want=KIND==='ss'?order().shares:S.mode==='sum'?num(S.sum)/(S.limit&&num(S.price)>0?num(S.price):MKT()):num(S.qty); return want>HAVE()+1e-9; };
  function sellAll(e){ if(e) e.stopPropagation(); if(S.mode==='sum') S.sum=(KIND==='ss'?r2(Math.round(SH_S*100)*r2(MKT()*SSF())):Math.floor(HAVE()*MKT()*100)/100).toFixed(2).replace(/\.00$/,''); else { S.qty=KIND==='ss'?String(Math.round(SH_S*100)):String(Math.max(1,Math.floor(HAVE()))); S.field='qty'; } render({glide:true}); }
  $('haveS').onclick=sellAll; $('haveQ').onclick=sellAll;
  function goConfirm(){
    if(FRESH&&$('go').dataset.dep==='1'&&window.__DS){ window.__DS.open('dep'); return; }
    if(dev.classList.contains('on-order')&&!MVF_ON()&&$('go').classList.contains('off')) return;
    if(sellOver()){ shake(S.mode==='sum'?$('big'):$('rowQty')); shake(S.mode==='sum'?$('haveS'):$('haveQ')); return; }
    const o=order();
    if(limitTooLow()){ if(S.mode==='sum') openSettings(); else shake($('rowPrice')); return; }
    if(o.ss&&o.lots===0){ shake(o.sumMode?$('big'):$('qtyNum').parentNode); return; }
    if(o.total===0){ shake(S.mode==='sum'?$('big'):(o.price===0?$('priceV'):$('qtyNum').parentNode)); return; }
    crRestore(); fillConfirm(); resetKnob(false); ordHead();
    $('scrConfirm').classList.remove('success'); $('scrConfirm').setAttribute('aria-hidden','false');
    $('device').classList.add('on-confirm');
  }
  function goBack(){ $('device').classList.remove('on-confirm','dark-status'); $('scrConfirm').setAttribute('aria-hidden','true'); }
  $('go').onclick=goConfirm; $('cfBack').onclick=goBack;
  let execT=0, DONE=null;
  function resetDone(){ clearTimeout(execT); $('scrConfirm').classList.remove('success'); $('done').classList.remove('exec'); $('cf').className='cf'; $('cf').innerHTML=''; resetKnob(false); }
  $('fin').onclick=()=>{ if(CRF){ crFinish(); return; } const o=order(); goBack(); if(dev.classList.contains('se')) goInv(); goHome(); bought(o); S=JSON.parse(JSON.stringify(INIT)); KIND=null; dev.classList.remove('on-kind','k-whole','k-ss'); render(); if(typeof pfLive==='function') pfLive(0);
    const sc=$('hmScroll'), blk=$('pfBlk'); setTimeout(()=>{ sc.scrollTo({top:Math.max(0,blk.offsetTop-70),behavior:'smooth'});
      const r=document.querySelector('.pf-row[data-aapl]'); if(r){ r.classList.remove('flash'); void r.offsetWidth; r.classList.add('flash'); } },380);
    setTimeout(resetDone,450); };
  function confetti(){ const cf=$('cf'), C=['#fff','#FFE14D','#B8FFC9','#0B6B2A','#7CF29C','#FFFFFF'];
    let h=''; for(let i=0;i<34;i++){ const ang=Math.random()*Math.PI*2, d=90+Math.random()*120;
      h+='<i style="--x:'+(Math.cos(ang)*d).toFixed(0)+'px;--y:'+(Math.sin(ang)*d-30).toFixed(0)+'px;--r:'+(Math.random()*720-360).toFixed(0)+'deg;--s:'+(6+Math.random()*6).toFixed(1)+'px;--c:'+C[i%C.length]+';--d:'+(Math.random()*.15).toFixed(2)+'s"></i>'; }
    cf.innerHTML=h; cf.className='cf'; void cf.offsetWidth; cf.classList.add('go'); }
  function execDone(){ const o=DONE; if(!o||o.isLimit||NBF||MVF||window.__pmcf) return; const sell=SELL();
    $('done').classList.add('exec'); $('sttT').textContent='Исполнена'; $('doneH').textContent=sell?'Акции проданы':'Акции куплены';
    $('doneTxt').textContent=sell?'Деньги уже на брокерском счёте':'Бумаги уже в портфеле. Цена — '+fmt2(o.ss?(o.lot||r2(o.price*SSF())):o.price)+(o.ss?' за 1 шт.':'');
    ['doneH','doneTxt'].forEach(id=>$(id).animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.9,.3,1)'}));
    if(FPF&&FPO){ $('sttT').textContent='Исполнено'; $('doneH').textContent='Портфель повторён'; $('doneTxt').textContent='Бумаги уже в портфеле. Дальше повторим сделки Тимура Турлова'; }
    if(CRF&&CRO){ $('sttT').textContent='Исполнено'; $('doneH').textContent=CRO.c.s+(CRO.buy?' куплен':' продан'); $('doneTxt').textContent=CRO.buy?'Монеты уже в крипто-кошельке':'Деньги поступили на '+ACCS[0].sh; }
    confetti(); if(navigator.vibrate) try{navigator.vibrate([12,40,18])}catch(e){} }
  $('finOp').onclick=()=>{ if(CRF){ crOpSheet(); return; } const o=DONE||order(), sell=SELL(), ex=$('done').classList.contains('exec'), a=accOf();
    const t=new Date(), hm=d=>String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
    const fee=Math.max(0.02,Math.round(o.total*0.005*100)/100);
    const st=[['ok','Заявка создана',hm(t)],['ok','Отправлена на биржу','NASDAQ · '+hm(t)],
      ex?['ok',sell?'Исполнена — продано':'Исполнена — куплено',fmtShares(o.shares,',')+' по '+fmt2(o.price)]:['cur',o.isLimit?'Ждём цену '+fmt2(o.price):'Исполняется','Пришлём уведомление']];
    const rows=[['Инструмент','AAPL · Apple Inc.'],['Тип',(sell?'Продажа':'Покупка')+' · '+o.type.toLowerCase()],['Количество',fmtShares(o.shares,',')],['Цена',fmt2(o.price)],['Сумма',fmt2(o.total)],['Комиссия',fmt2(fee)],
      [sell?'Зачисление':'Счёт',sell?'Брокерский счёт':a.n],['Номер приказа','№ '+OPNO]];
    openSheet(head('Операция')+'<div class="op-body"><div class="op-tl">'+st.map(x=>'<div class="op-st '+x[0]+'"><i></i><span><b>'+x[1]+'</b><span>'+x[2]+'</span></span></div>').join('')+'</div>'+
      '<div class="op-card">'+rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('')+'</div></div>'); };

  // swipe to buy
  const knob=$('knob'); const TRAVEL=106;
  let drag=null, pos=0, busy=false;
  const setPos=p=>{ pos=Math.max(0,Math.min(TRAVEL,p)); knob.style.transform='translateY('+(-pos)+'px)';
    $('track').querySelector('.chev').style.opacity=String(Math.max(0,1-pos/TRAVEL*1.3)); knob.setAttribute('aria-valuenow',Math.round(pos/TRAVEL*100)); };
  function resetKnob(anim){ busy=false; knob.classList.remove('busy'); knob.classList.toggle('spring',!!anim); setPos(0); }
  knob.addEventListener('pointerdown',e=>{ if(busy) return; drag={y:e.clientY,p:pos}; knob.classList.remove('spring'); knob.setPointerCapture(e.pointerId); });
  knob.addEventListener('pointermove',e=>{ if(!drag) return; setPos(drag.p+(drag.y-e.clientY)); });
  const release=()=>{ if(!drag) return; drag=null; if(pos>TRAVEL*0.8) complete(); else { knob.classList.add('spring'); setPos(0); } };
  knob.addEventListener('pointerup',release); knob.addEventListener('pointercancel',release);
  knob.addEventListener('keydown',e=>{ if(e.key==='ArrowUp'||e.key==='Enter'||e.key===' '){ e.preventDefault(); complete(); } });
  function complete(){
    if(busy) return; busy=true;
    knob.classList.add('spring'); setPos(TRAVEL); knob.classList.add('busy');
    if(navigator.vibrate) try{navigator.vibrate(18)}catch(e){}
    DONE=CRF?{isLimit:false,cr:true}:order(); OPNO=48213000+Math.floor(Math.random()*9000);
    if(window.__pmcf&&window.__pmcfCommit) window.__pmcfCommit();
    setTimeout(()=>{ $('done').classList.remove('exec'); $('cf').className='cf'; $('scrConfirm').classList.add('success'); $('device').classList.add('dark-status');
      clearTimeout(execT); execT=setTimeout(execDone,2600); },1100);
  }

  // ── live quotes: new Bid / Ask every 10 s ──
  function rollText(el,str,dir,noFlash){
    const old=el.textContent; if(old===str) return;
    let d0=0; while(d0<old.length&&d0<str.length&&old[d0]===str[d0]) d0++;
    const base=getComputedStyle(el).color; el.textContent='';
    [...str].forEach((c,j)=>{ const n=document.createElement('span'); n.className='ch'; n.textContent=c; el.appendChild(n);
      if(j>=d0) n.animate([{transform:'translateY('+(dir>0?100:-100)+'%)',opacity:0},{transform:'none',opacity:1}],{duration:440,delay:(j-d0)*35,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'}); });
    if(noFlash) return;
    const c=dir>0?'#10C810':'#FF3B47';
    el.animate([{color:c},{color:c,offset:.4},{color:base}],{duration:1500,easing:'ease-out'});
  }
  function refreshBookIn(root,dir){
    const {asks,bids,buy}=bookStats(); const rows=[...asks,...bids];
    const maxV=Math.max(...rows.map(r=>r[1]));
    root.querySelectorAll('.bk').forEach((b,i)=>{ const r=rows[i]; if(!r) return; b.dataset.px=r[0];
      rollText(b.querySelector('.p'),pxFmt(r[0]),dir,true);
      b.querySelector('.vol').textContent=group(String(r[1]));
      b.querySelector('.cap').style.width=Math.max(10,Math.round(Math.sqrt(r[1]/maxV)*100))+'%'; });
    const q=c=>root.querySelector('.'+c);
    if(q('jb')){ rollText(q('jb'),fmt2(BID),dir,true); rollText(q('ja'),fmt2(ASK),dir,true);
      if(q('jb').parentNode.dataset.px!==undefined){ q('jb').parentNode.dataset.px=BID; q('ja').parentNode.dataset.px=ASK; }
      q('jbx').textContent='x '+group(String(bids[0][1])); q('jax').textContent='x '+group(String(asks[asks.length-1][1]));
      q('jpb').style.flexGrow=buy; q('jps').style.flexGrow=100-buy;
      if(q('jpb').textContent) { q('jpb').textContent=buy+'%'; q('jps').textContent=(100-buy)+'%'; }
      if(q('jsp')) q('jsp').textContent='Спред '+spreadTxt(); }
  }
  function refreshBook(dir){
    if(sheet.classList.contains('book')&&sheet.classList.contains('on')) refreshBookIn(sheet,dir);
    if(!$('paneBook').hidden) refreshBookIn($('bkInl'),dir);
    refreshBookIn(document.querySelector('.sts'),dir);
  }
  function tick(){
    const mid=(BID+ASK)/2+(Math.random()-.5)*0.34;
    const spread=Math.max(.12,Math.min(.42,(ASK-BID)+(Math.random()-.5)*.1));
    const nb=r2(mid-spread/2), na=r2(mid+spread/2);
    const db=Math.sign(nb-BID)||1, da=Math.sign(na-ASK)||1;
    BID=nb; ASK=na; SSPR=Math.max(.006,Math.min(.024,SSPR+(Math.random()-.5)*.003));
    ASK_V=ASK_V.map(v=>Math.max(1,Math.round(v*(0.8+Math.random()*0.4)))); BID_V=BID_V.map(v=>Math.max(1,Math.round(v*(0.8+Math.random()*0.4))));
    document.querySelectorAll('b.bid.lv').forEach(e=>rollText(e,fmt2(BID/DVO(e)),db));
    document.querySelectorAll('b.ask.lv').forEach(e=>rollText(e,fmt2(ASK/DVO(e)),da));
    const px=document.querySelectorAll('#qMain .px'); px[0].dataset.px=BID.toFixed(2); px[1].dataset.px=ASK.toFixed(2);
    render({glide:true,roll:da});
    if($('device').classList.contains('on-confirm') && !$('scrConfirm').classList.contains('success') && !busy && !CRF && !FPF && !NBF && !MVF && !window.__pmcf) fillConfirm(da);
    refreshBook(da);
    stockTick(da);
    if(sheet.classList.contains('settings')&&sheet.classList.contains('on')) updHints();
  }
  setInterval(tick,10000);

  // ═════════ STOCK PAGE ═════════
  const dev=$('device');
  const PREV=158.25, TOTAL=110620; let SH_W=4, AVG_W=152.00, SH_S=0.37, AVG_S=149.80, SHARES=4.37, AVG=(4*152+0.37*149.80)/4.37;
  const SSQ=()=>KIND==='ss';
  let STM='stock'; let SSPR=0.016; const SSF=()=>(1+SSPR)/100; const DV=()=>STM==='ss'?1/SSF():1; const DVO=e=>KIND==='ss'&&e&&e.closest&&e.closest('#scrMain,#scrConfirm')?1/SSF():1;
  const SW=x=>0.007*Math.sin(x/23)+0.004*Math.sin(x/7.3+1);
  const shTxtS=()=>String(Math.round(SH_S*100));
  const HAVE=()=>KIND==='whole'?SH_W:KIND==='ss'?SH_S:SHARES;
  const syncHold=()=>{ SH_W=Math.round(SH_W); SH_S=Math.round(SH_S*100)/100; SHARES=Math.round((SH_W+SH_S)*100)/100; AVG=SHARES?(SH_W*AVG_W+SH_S*AVG_S)/SHARES:0; };
  const MIN='−';
  const midPx=()=>r2((BID+ASK)/2);
  const dec=(n,k)=>{ const [i,d]=Math.abs(n).toFixed(k==null?2:k).split('.'); return group(i)+(d?','+d:''); };
  const usd=n=>(n<0?MIN:'')+'$'+dec(n);
  const sUsd=n=>(n<0?MIN:'+')+'$'+dec(n);
  const sPct=n=>(n<0?MIN:'+')+dec(n)+'%';

  function goOrder(){ if(window.__DS&&window.__NOACC&&window.__NOACC()){ closeSheet(); window.__DS.open('noacc'); return; } closeSheet(); dev.classList.add('on-order'); $('scrStock').setAttribute('aria-hidden','true'); render(); }
  function goStock(){ dev.classList.remove('on-order'); dev.classList.add('on-stock'); $('scrStock').setAttribute('aria-hidden','false'); syncStatus(); }
  function setSide(side){ if(side===SIDE) return; SIDE=side; const acc=S.acc; S=JSON.parse(JSON.stringify(INIT)); S.acc=side==='sell'?'gl':acc;
    $('mVerb').textContent=SELL()?'Продать':'Купить'; $('cfTitle').textContent=(SELL()?'Продать':'Купить')+' AAPL'; render(); }
  function openMenu(e){ const btn=e&&e.currentTarget&&e.currentTarget.getBoundingClientRect?e.currentTarget:$('trade'), coin=btn.id==='cnTrade';
    const am=$('amStack'); am.querySelector('[data-a="opt"]').hidden=true; am.querySelector('[data-a="buy"]').textContent='Купить';
    am.querySelector('[data-a="sell"]').textContent=coin&&!HOLD[CN]?'Продать':'Продать';
    const d=dev.getBoundingClientRect(), t=btn.getBoundingClientRect(), st=$('amStack');
    st.style.bottom=(d.bottom-t.bottom)+'px'; st.style.right=(d.right-t.right)+'px';
    dev.classList.add('menu-on'); requestAnimationFrame(()=>$('amenu').classList.add('on')); }
  function closeMenu(){ $('amenu').classList.remove('on'); setTimeout(()=>{ if(!$('amenu').classList.contains('on')) dev.classList.remove('menu-on'); },420); }
  $('trade').onclick=openMenu;
  $('amenu').addEventListener('click',e=>{ const b=e.target.closest('[data-a]'); const a=b?b.dataset.a:'close';
    closeMenu(); if(a==='opt') setTimeout(()=>opEntry(),200);
    if(a==='buy'||a==='sell') setTimeout(()=>{ if(dev.classList.contains('on-coin')&&dev.classList.contains('cr')) crOpen(CN,a); else { setSide(a); goOrder(); } },170); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&$('amenu').classList.contains('on')) closeMenu(); });


  // ── kind: whole share vs single stock (1/100) ──
  let KIND=null; let _kdSide=null;
  const LI=a=>a.map(x=>'<li>'+x+'</li>').join('');
  function kdFill(){ const p=MKT(), lot=r2(p/100), ex=60, lots=Math.floor(ex/lot+1e-9), cost=r2(lots*lot), sell=SELL();
    $('kdV').textContent=sell?'Продать':'Купить'; $('kdH').textContent=sell?'Что продать?':'Как купить?';
    $('kdS').textContent=sell?'Целые акции и single stock продаются отдельно':'Акцию можно купить целиком или по частям — по 1/100';
    document.querySelector('#scrKind [data-kind="whole"]').classList.toggle('dis',sell&&!SH_W); document.querySelector('#scrKind [data-kind="ss"]').classList.toggle('dis',sell&&!SH_S);
    $('kdEx').hidden=sell;
    if(sell){ $('kdWt').textContent='Целые акции'; $('kdWp').innerHTML='У вас '+SH_W+' шт. <span>· '+usd(SH_W*p)+'</span>'; $('kdSp').innerHTML='У вас '+Math.round(SH_S*100)+' шт. <span>· '+usd(SH_S*p)+'</span>';
      $('kdWl').innerHTML=LI(['Продаются по цене Bid — '+fmt2(p)+' за акцию']); $('kdSl').innerHTML=LI(['Продаются по цене Bid — '+fmt2(lot)+' за 1 шт.']); return; }
    $('kdWt').textContent='Целая акция'; $('kdWl').innerHTML=LI([]); $('kdSl').innerHTML=LI(['1 шт. = 1/100 акции, сейчас '+fmt2(lot)+' по цене Ask']);
    $('kdWp').innerHTML=fmt2(p)+' <span>за 1 акцию</span>'; $('kdSp').innerHTML='от '+fmt2(lot)+' <span>за 1/100</span>';
    $('kdEx').innerHTML='Например, вы ввели <b>$60</b>. Сейчас 1/100 AAPL стоит '+fmt2(lot)+' — купим <b>'+lots+'/100</b> акции на <b>'+fmt2(cost)+'</b>, а '+fmt2(r2(ex-cost))+' останутся на счёте.'; }
  setInterval(()=>{ if(dev.classList.contains('on-kind')&&!dev.classList.contains('on-order')) kdFill(); },1000);
  let kdPick=null;
  function kdSel(k){ kdPick=k; document.querySelectorAll('#scrKind [data-kind]').forEach(b=>b.classList.toggle('sel',b.dataset.kind===k)); $('kdGo').classList.toggle('off',!k); }
  function goKind(){ closeSheet(); kdFill(); kdSel(KIND); dev.classList.remove('on-order','k-whole','k-ss'); dev.classList.add('on-stock','on-kind'); $('scrStock').setAttribute('aria-hidden','true'); $('scrKind').setAttribute('aria-hidden','false'); }
  function kdApply(k){ KIND=k; const acc=S.acc; S=JSON.parse(JSON.stringify(INIT)); S.acc=acc;
    if(k==='whole'){ S.mode='qty'; S.field='qty'; S.qty='1'; } else { S.mode='qty'; S.field='qty'; S.qty=SELL()?String(Math.min(Math.round(SH_S*100),10)):'10'; }
    dev.classList.toggle('k-whole',k==='whole'); dev.classList.toggle('k-ss',k==='ss');
    $('kChipT').textContent=k==='whole'?'Целые акции':'Single stock · 1/100'; $('kChipI').src=document.querySelector('#scrKind [data-kind="'+k+'"] .k3d').src; }
  document.querySelectorAll('#scrKind [data-kind]').forEach(b=>b.onclick=()=>kdSel(b.dataset.kind));
  $('kdGo').onclick=()=>{ if(!kdPick){ shake($('kdGo')); return; } if(KIND!==kdPick) kdApply(kdPick); _goOrder(); };
  $('kdBack').onclick=()=>{ dev.classList.remove('on-kind'); $('scrKind').setAttribute('aria-hidden','true'); $('scrStock').setAttribute('aria-hidden','false'); };
  $('kChip').onclick=()=>{ dev.classList.remove('on-order'); };
  const _goOrder=goOrder;
  goOrder=function(){ const k=STM==='ss'&&dev.classList.contains('on-stock')?'ss':'whole'; kdApply(k); const r=_goOrder(); ordHead(); return r; };
  function ordHead(){ const ss=KIND==='ss', t=ss?'AAPL/100':'AAPL';
    document.querySelectorAll('#scrMain .ttl .tick, #scrConfirm .tick').forEach(x=>{ const n=[...x.childNodes].find(c=>c.nodeType===3&&c.textContent.trim()); if(n) n.textContent=t; });
    $('cfTitle').textContent=(SELL()?'Продать ':'Купить ')+t;
    document.querySelectorAll('#scrMain b.bid.lv, #scrConfirm b.bid.lv').forEach(e=>e.textContent=fmt2(BID*(ss?SSF():1))); document.querySelectorAll('#scrMain b.ask.lv, #scrConfirm b.ask.lv').forEach(e=>e.textContent=fmt2(ASK*(ss?SSF():1))); }
  const _goStock=goStock; goStock=function(){ if(dev.classList.contains('on-kind')){ dev.classList.remove('on-order'); return; } return _goStock(); };
  const _goHome=goHome; goHome=function(){ if(STM!=='stock') stMode('stock'); dev.classList.remove('on-kind','k-whole','k-ss'); $('scrKind').setAttribute('aria-hidden','true'); KIND=null; return _goHome.apply(this,arguments); };

  // ── stock page mode: Акция / Single stock (AAPL/100) ──
  function stMode(m,anim){ STM=m; const ss=m==='ss';
    const tb=$('stTabs'); tb.style.setProperty('--i',ss?1:0);
    $('stTkT').textContent=ss?'AAPL/100':PMODE==='tok'?'AAPL · токенизированная акция':'AAPL'; $('navTkT').textContent=ss?'AAPL/100':'AAPL'; $('stNameT').textContent=ss?'Apple Inc. · Single Stock ETF':'Apple Inc.';
    dev.classList.toggle('stm-ss',ss);
    try{ header(); drawChart(false); position(); }catch(_){}
    if(anim){ ['stPx','stTkT','posCard'].forEach(id=>{ const el=$(id); el&&el.animate([{opacity:.2,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:320,easing:'cubic-bezier(.2,.9,.3,1)'}); }); } }
  { const bn=document.createElement('button'); bn.className='ss-bn'; bn.id='ssBn';
    bn.innerHTML='<img class="k3d" src="'+document.querySelector('#scrKind [data-kind="ss"] .k3d').src+'" width="44" height="44" alt=""><span class="m"><b>Что такое Single Stock ETF?</b><span id="ssBnT">1/100 акции Apple</span></span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#AEAEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    $('perSeg').parentNode.after(bn);
    bn.onclick=()=>{ const lot=r2(ASK*SSF());
      openSheet('<div class="sh-head center"><span></span><h3>Single Stock ETF</h3>'+XB+'</div><div class="ssx">'+
        '<img class="k3d" src="'+bn.querySelector('img').src+'" width="88" height="88" alt="">'+
        '<h2>Single Stock ETF на Apple</h2><p class="ssx-p">Биржевой фонд, который повторяет цену акции Apple. Одна его бумага — это 1/100 акции</p>'+
        '<div class="ssx-l"><div><b>1 шт. = 1/100 акции</b><span>AAPL/100 стоит '+fmt2(lot)+' — примерно в 100 раз дешевле целой акции</span></div>'+
        '<div><b>Покупка и продажа поштучно</b><span>Указываете количество: 1, 10, 50 шт. — без дробей и округлений</span></div>'+
        '<div><b>Отдельно от целых акций</b><span>Свой тикер, своя цена и своя позиция в портфеле</span></div></div>'+
        '<div class="ssx-e"><span>Например</span><b>10 шт. AAPL/100 = '+fmt2(lot*10)+'</b><small>это 0,1 акции Apple</small></div></div><div style="height:16px"></div>'); }; }

  let toastT=0;
  function toast(t){ $('toastT').textContent=t; $('toast').classList.add('on'); clearTimeout(toastT); toastT=setTimeout(()=>$('toast').classList.remove('on'),2200); }

  // ── nav: glass fades in on scroll, title turns into ticker + live price ──
  $('stScroll').addEventListener('scroll',()=>{ const y=$('stScroll').scrollTop;
    $('stNav').classList.toggle('scrolled',y>6); $('stNav').classList.toggle('mini',y>150); },{passive:true});

  // ── segmented helper ──
  function seg(el,cb){ const bs=[...el.querySelectorAll('button')]; el.addEventListener('click',e=>{ if(e.target.closest('button')) return; const R=el.getBoundingClientRect(); const i=Math.max(0,Math.min(bs.length-1,Math.floor((e.clientX-R.left)/R.width*bs.length))); bs[i].click(); }); bs.forEach((b,i)=>b.addEventListener('click',()=>{ if(+el.style.getPropertyValue('--i')===i && !cb.always) return; el.style.setProperty('--i',i); cb(i,b); })); }

  // Инфо / Стакан
  seg($('stTabs'),i=>{ stMode(i===1?'ss':'stock',true); });

  // ── chart ──
  const FIG='0 48.5 3 44 5 44 8.5 41 10.5 42 14.5 33 14.5 19 17 11.5 19 28.5 20.5 19 22.5 26 24 26 26 33 28 23.5 29.5 26 32.5 23.5 35 37.5 36.5 33 39.5 37.5 42.5 37.5 44.5 41 48.5 22.5 50.5 28.5 53.5 26 58 50.5 61.5 42 64 48.5 67 41 71 46 73.5 34.5 77 33 81 41 84 33 90 53 94 46 98.5 57.5 101 54 106 68 108.5 70.5 111 65 112.5 54 117 48.5 119 53 122 57.5 126 50.5 130.5 59 134 57.5 137 59 141.5 41 144.5 43.5 148.5 37.5 151 42 152.5 41 156 50.5 159.5 43.5 161.5 35.5 164.5 46 166.5 41 168 53 171 54 173 50.5 175 54 178.5 45 183 41 187.5 48.5 189 54 195.5 50.5 199.5 55.5 204 55.5 204 59 208 63.5 211.5 53 212.5 59 222 55.5 225 41 231 53 234.5 48.5 238 50.5 243 40 246 48.5 247.5 40 250 43.5 250 29.5 253 29.5 253 23.5 256 23.5 257.5 6.5 259 11 261.5 9 265.5 19 267.5 11 276.5 42 283.5 45 286.5 36 289 36 291.5 22 296.5 36 299 29.5 303.5 34 305 28 308.5 35 312 26.5 314.5 28 319.5 6.5 322 12.5 323.5 8 325.5 9.5 326.5 3.5 331 18.5 334.5 4.5 335.5 4 337 0 339 2 340 9 344.5 5.5 347.5 13.5 349 12 355.5 17.5 356 21.5 359 23 361 25.5 362 14 364 20 365.5 15.5 366.5 10 369 11.5 371.5 8.5 372.5 17.5 374 14 377 19 380 14 382 19 383 32 384.5 32 386.5 28.5 390 28.5'.split(' ').map(Number);
  function rng(a){ return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function gen(n,a,b,vol,seed,expo){ const r=rng(seed); const w=[0]; for(let i=1;i<n;i++) w.push(w[i-1]+(r()-.5)*2+(r()-.5)*(r()<.08?6:0));
    const wn=w[n-1]; return Array.from({length:n},(_,i)=>{ const t=i/(n-1); const tr=expo?a*Math.pow(b/a,t):a+(b-a)*t; return {x:t*390,p:Math.max(1,tr+(w[i]-t*wn)*vol*(expo?(tr/b):1))}; }); }
  const M0=midPx();
  const MON=['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  const dfmt=(d,y)=>d.getDate()+' '+MON[d.getMonth()]+(y?' '+d.getFullYear():'');
  const span=(a,b)=>t=>new Date(a.getTime()+(b-a)*t);
  const PER=[
    {w:'за сегодня', lab:['10:00','12:00','14:00','16:00'], pts:gen(79,PREV,M0,.32,7), base:PREV,
      at:t=>{ const m=9*60+30+Math.round(t*390/5)*5; return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'); }},
    {w:'за месяц', lab:['29 авг','5 сен','12 сен','19 сен'], pts:gen(66,149.10,M0,.55,21), at:t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t))},
    {w:'за 3 месяца', lab:['Июл','Авг','Сен','Окт','Ноя','Дек'], pts:[], at:t=>dfmt(span(new Date(2026,5,20),new Date(2026,11,20))(t))},
    {w:'за 6 месяцев', lab:['Апр','Май','Июн','Июл','Авг','Сен'], pts:gen(126,138.40,M0,1.2,33), at:t=>dfmt(span(new Date(2026,2,25),new Date(2026,8,25))(t))},
    {w:'за год', lab:['Ноя','Янв','Мар','Май','Июл','Сен'], pts:gen(126,121.70,M0,1.9,48), at:t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t),true)},
    {w:'за всё время', lab:['2017','2019','2021','2023','2025'], pts:gen(140,28.40,M0,2.4,5,true), at:t=>{ const d=span(new Date(2016,0,1),new Date(2026,8,25))(t); return MON[d.getMonth()]+' '+d.getFullYear(); }}
  ];
  // 3M = the exact line from the Figma file; price scale 0,35 $/px, ends at the live price
  for(let i=0;i<FIG.length;i+=2) PER[2].pts.push({x:FIG[i],p:r2(M0+(28.5-FIG[i+1])*0.35)});
  PER[2].base=r2(M0+(28.5-45)*0.35);
  PER.forEach((s,k)=>{ if(s.base==null) s.base=s.pts[0].p; const r=rng(90+k); s.vol=Array.from({length:120},()=>{ const v=r(); return 4+Math.round(Math.pow(v,2.2)*20); }); });

  let per=2, candles=false, scrubbing=false, z0=0, z1=390;
  const T=21,B=91.5, NS='http://www.w3.org/2000/svg';
  const svg=$('chSvg'), chart=$('chart');
  let geo=null;
  function drawChart(reveal){
    const s=PER[per], W=chart.clientWidth||390, sx=W/390, zk=390/(z1-z0);
    let i0=s.pts.findIndex(q=>q.x>=z0); i0=Math.max(0,i0<0?s.pts.length-1:i0-1);
    let i1=s.pts.findIndex(q=>q.x>z1); i1=i1<0?s.pts.length-1:i1;
    const vis=s.pts.slice(i0,i1+1).map(q=>STM==='ss'?{x:q.x,p:q.p*(1+SW(q.x))}:q);
    const ps=vis.map(q=>q.p); const mx=Math.max(...ps,s.base), mn=Math.min(...ps,s.base);
    const Y=p=>T+(mx-p)/((mx-mn)||1)*(B-T), X=x=>(x-z0)/(z1-z0)*W;
    const by=Y(s.base), off=Math.min(1,Math.max(0,(by-T)/(B-T)));
    const line=vis.map((q,i)=>(i?'L':'M')+X(q.x).toFixed(1)+' '+Y(q.p).toFixed(1)).join(' ');
    const area=line+' L'+X(vis[vis.length-1].x).toFixed(1)+' '+by.toFixed(1)+' L'+X(vis[0].x).toFixed(1)+' '+by.toFixed(1)+'Z';
    let bars=''; const NB=Math.ceil(W/4), bw=Math.min(8,2*Math.sqrt(zk));
    for(let i=0;i<NB;i++){ const bx=X((i*4+2)/sx); if(bx<-8||bx>W+8) continue; const h=s.vol[i%s.vol.length]; bars+='<rect x="'+(bx-bw/2).toFixed(1)+'" y="'+(117-h)+'" width="'+bw.toFixed(1)+'" height="'+h+'" rx="1"/>'; }
    let body='';
    if(candles){ const n=vis.length, g=Math.max(2,Math.round(n/40)), cw=Math.max(3,Math.min(9,W/(n/g)*.55));
      for(let i=0;i<n;i+=g){ const seg=vis.slice(Math.max(0,i-1),i+g); const o=seg[0].p,c=seg[seg.length-1].p,h=Math.max(...seg.map(q=>q.p)),l=Math.min(...seg.map(q=>q.p));
        const cx=X((seg[0].x+seg[seg.length-1].x)/2), col=c>=o?'#10C810':'#E22F2F', y1=Y(Math.max(o,c)), y2=Y(Math.min(o,c));
        body+='<line x1="'+cx.toFixed(1)+'" x2="'+cx.toFixed(1)+'" y1="'+Y(h).toFixed(1)+'" y2="'+Y(l).toFixed(1)+'" stroke="'+col+'" stroke-width="1"/>'+
          '<rect x="'+(cx-cw/2).toFixed(1)+'" y="'+y1.toFixed(1)+'" width="'+cw.toFixed(1)+'" height="'+Math.max(1.5,y2-y1).toFixed(1)+'" rx="1" fill="'+col+'"/>'; } }
    else body='<path d="'+area+'" fill="url(#gUp)" clip-path="url(#cUp)"/><path d="'+area+'" fill="url(#gDn)" clip-path="url(#cDn)"/>'+
      '<path d="'+line+'" fill="none" stroke="url(#gLn)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>';
    svg.innerHTML='<defs>'+
      '<linearGradient id="gLn" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+T+'" y2="'+B+'"><stop offset="'+off+'" stop-color="#10C810"/><stop offset="'+off+'" stop-color="#E22F2F"/></linearGradient>'+
      '<linearGradient id="gUp" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+T+'" y2="'+by+'"><stop offset="0" stop-color="#10C810" stop-opacity=".4"/><stop offset="1" stop-color="#10C810" stop-opacity="0"/></linearGradient>'+
      '<linearGradient id="gDn" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+by+'" y2="'+B+'"><stop offset="0" stop-color="#E22F2F" stop-opacity=".04"/><stop offset="1" stop-color="#E22F2F" stop-opacity=".3"/></linearGradient>'+
      '<clipPath id="cUp"><rect x="0" y="0" width="'+W+'" height="'+by+'"/></clipPath><clipPath id="cDn"><rect x="0" y="'+by+'" width="'+W+'" height="'+(132-by)+'"/></clipPath>'+
      '<clipPath id="cScr"><rect id="scrR" x="0" y="-10" width="'+W+'" height="150"/></clipPath>'+
      '<clipPath id="cVw"><rect x="0" y="-10" width="'+W+'" height="150"/></clipPath>'+
      '<g id="chG"><g clip-path="url(#cVw)"><g fill="rgba(99,99,102,.4)">'+bars+'</g>'+body+'</g></g></defs>'+
      '<line x1="0" x2="'+W+'" y1="'+by+'" y2="'+by+'" stroke="#6D6D6D" stroke-width="1" stroke-dasharray="1 3"/>'+
      '<use href="#chG" class="dim"/><use href="#chG" clip-path="url(#cScr)"/>';
    $('chBase').textContent=dec(s.base/DV(),DV()>1?2:2); $('chBase').style.top=(by-8)+'px';
    const at=y=>mx-(y-T)/(B-T)*(mx-mn);
    $('chHi').textContent=dec(at(30.5)/DV(),DV()>1?2:1); $('chHi').style.top='24px';
    $('chLo').textContent=dec(at(84.5)/DV(),DV()>1?2:1); $('chLo').style.top='78px';
    $('chHi').style.visibility=Math.abs(by-30.5)<14?'hidden':''; $('chLo').style.visibility=Math.abs(by-84.5)<14?'hidden':'';
    const zoomed=zk>1.05;
    $('chX').innerHTML=zoomed?[.12,.37,.63,.88].map(f=>'<span style="left:'+(f*100)+'%">'+s.at((z0+f*(z1-z0))/390)+'</span>').join('')
      :s.lab.map((l,i)=>'<span style="left:'+((i+.5)/s.lab.length*100)+'%">'+l+'</span>').join('');
    $('chZoom').classList.toggle('on',zoomed); $('chZoomT').textContent='×'+dec(zk,1);
    geo={s,W,X,Y,by};
    if(reveal){ const r=$('scrR'), t0=performance.now();
      (function f(t){ const k=Math.min(1,(t-t0)/650), e=1-Math.pow(1-k,3); r.setAttribute('width',(W*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }

  // header: price + change for the chosen period
  function setChange(v,base,label){
    const d=v-base, p=d/base*100;
    $('stCh').classList.toggle('dn',d<0);
    $('stChD').textContent=(d<0?MIN:'+')+dec(d/DV())+' ('+sPct(p)+')';
    $('stChW').textContent=label;
  }
  function header(dir){
    const m=midPx(), s=PER[per], mv=m/DV();
    if(dir) rollText($('stPx'),fmt2(mv),dir); else $('stPx').textContent=fmt2(mv);
    if(dir) rollText($('navPx'),fmt2(mv),dir,true); else $('navPx').textContent=fmt2(mv);
    setChange(m,s.base,s.w);
    if(STM==='ss'&&$('ssBnT')) $('ssBnT').textContent='1/100 акции Apple — можно начать с '+fmt2(r2(m*SSF()));
    if(STM==='ss') $('stSsd').innerHTML='Акция '+fmt2(m)+' ÷ 100 = '+fmt2(r2(m/100))+' · <b>'+(SSPR>=0?'+':MIN)+dec(Math.abs(SSPR*100),1)+'%</b> к цене акции';
  }

  // scrubbing: finger / mouse over the chart
  function scrubAt(e){
    if(!geo) return; const rc=chart.getBoundingClientRect(); const x=Math.max(0,Math.min(geo.W,e.clientX-rc.left));
    const pts=geo.s.pts; let lo=0,hi=pts.length-1; const gx=z0+x/geo.W*(z1-z0);
    while(hi-lo>1){ const m=(lo+hi)>>1; if(pts[m].x<gx) lo=m; else hi=m; }
    const q=Math.abs(pts[lo].x-gx)<Math.abs(pts[hi].x-gx)?pts[lo]:pts[hi];
    const px=geo.X(q.x), py=geo.Y(q.p);
    chart.classList.add('scrub'); scrubbing=true;
    $('scrR').setAttribute('width',px.toFixed(1));
    $('chCur').style.left=px+'px'; const dot=$('chDot'); dot.style.left=px+'px'; dot.style.top=py+'px'; dot.style.background=q.p>=geo.s.base?'#10C810':'#E22F2F';
    const tip=$('chTip'); tip.textContent=geo.s.at(q.x/390); tip.style.left=Math.max(34,Math.min(geo.W-34,px))+'px';
    $('stPx').textContent=fmt2(q.p/DV());
    setChange(q.p,geo.s.base,geo.s.at(q.x/390));
  }
  function endScrub(){ if(!scrubbing) return; scrubbing=false; chart.classList.remove('scrub'); $('scrR').setAttribute('width',geo.W); header(); }
  // zoom: pinch / trackpad pinch / ctrl+wheel, 2-finger or horizontal-wheel pan, double-tap resets
  const ZMIN=390/8;
  function zSet(a,b){ let w=Math.max(ZMIN,Math.min(390,b-a)); const c=(a+b)/2; a=c-w/2; b=c+w/2;
    if(a<0){ b-=a; a=0; } if(b>390){ a-=b-390; b=390; } z0=Math.max(0,a); z1=Math.min(390,b); drawChart(false); }
  const zOn=()=>z1-z0<389;
  function zReset(){ const s0=z0,s1=z1,t0=performance.now();
    (function f(t){ const k=Math.min(1,(t-t0)/320), e=1-Math.pow(1-k,3); z0=s0*(1-e); z1=s1+(390-s1)*e; drawChart(false); if(k<1) requestAnimationFrame(f); })(t0); }
  // long-press to scrub, drag to pan (touch)
  function LP(el,o){ let st=null, t=0, active=false;
    const off=()=>{ clearTimeout(t); if(st&&st.mode==='scrub') o.end(); st=null; active=false; el.classList.remove('lp'); };
    el.addEventListener('touchmove',ev=>{ if(active||(st&&st.mode==='pan')) ev.preventDefault(); },{passive:false});
    return { down(e){ off(); st={x:e.clientX,y:e.clientY,lx:e.clientX,id:e.pointerId,mode:null,ev:e};
        t=setTimeout(()=>{ if(st&&!st.mode){ st.mode='scrub'; active=true; el.classList.add('lp'); try{ navigator.vibrate&&navigator.vibrate(8); }catch(_){} o.scrub(st.ev); } },240); },
      move(e){ if(!st||e.pointerId!==st.id) return; st.ev=e; if(st.mode==='scrub'){ o.scrub(e); return; }
        const dx=e.clientX-st.x, dy=e.clientY-st.y;
        if(!st.mode&&Math.hypot(dx,dy)>7){ clearTimeout(t); st.mode=(o.canPan&&o.canPan()&&Math.abs(dx)>Math.abs(dy))?'pan':'none'; }
        if(st.mode==='pan'&&o.pan) o.pan(e.clientX-st.lx); st.lx=e.clientX; },
      up:off, get on(){ return active; } }; }
  const ZP=new Map(); let zpin=null, zTap=0;
  const stLP=LP(chart,{scrub:e=>scrubAt(e),end:()=>endScrub(),canPan:()=>zOn(),pan:dx=>{ const w=chart.getBoundingClientRect().width, sh=-dx/w*(z1-z0); zSet(z0+sh,z1+sh); }});
  chart.addEventListener('pointerdown',e=>{ if(e.target.closest('.ch-zoom')) return; ZP.set(e.pointerId,{x:e.clientX}); try{ chart.setPointerCapture(e.pointerId); }catch(_){}
    if(ZP.size===2){ stLP.up(); endScrub(); const [p,q]=[...ZP.values()], rc=chart.getBoundingClientRect();
      zpin={d:Math.abs(p.x-q.x)||1,mid:((p.x+q.x)/2-rc.left)/rc.width,a:z0,b:z1}; return; }
    if(e.pointerType!=='mouse'){ const now=performance.now(); if(now-zTap<280&&zOn()){ zReset(); zTap=0; return; } zTap=now; }
    if(!zpin){ if(e.pointerType==='mouse') scrubAt(e); else stLP.down(e); } });
  chart.addEventListener('pointermove',e=>{ if(ZP.has(e.pointerId)) ZP.get(e.pointerId).x=e.clientX;
    if(zpin&&ZP.size>=2){ const [p,q]=[...ZP.values()], rc=chart.getBoundingClientRect(), d=Math.abs(p.x-q.x)||1, mid=((p.x+q.x)/2-rc.left)/rc.width;
      const w=(zpin.b-zpin.a)*zpin.d/d, c=zpin.a+zpin.mid*(zpin.b-zpin.a); zSet(c-mid*w,c+(1-mid)*w); return; }
    if(e.pointerType==='mouse') scrubAt(e); else stLP.move(e); });
  const zUp=e=>{ stLP.up(); ZP.delete(e.pointerId); if(ZP.size<2) zpin=null; if(ZP.size===0) endScrub(); };
  ['pointerup','pointercancel'].forEach(t=>chart.addEventListener(t,zUp));
  chart.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') endScrub(); });
  chart.addEventListener('dblclick',()=>{ if(zOn()) zReset(); });
  chart.addEventListener('wheel',e=>{ const rc=chart.getBoundingClientRect(), fx=Math.max(0,Math.min(1,(e.clientX-rc.left)/rc.width));
    if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&!e.ctrlKey){ if(!zOn()) return; e.preventDefault(); const sh=e.deltaX/rc.width*(z1-z0); zSet(z0+sh,z1+sh); if(scrubbing) scrubAt(e); return; }
    if(!e.ctrlKey&&!zOn()&&e.deltaY>0) return;
    e.preventDefault(); const c=z0+fx*(z1-z0), w=(z1-z0)*Math.exp(e.deltaY*(e.ctrlKey?0.012:0.0025)); zSet(c-fx*w,c+(1-fx)*w); if(scrubbing) scrubAt(e); },{passive:false});
  $('chZoom').onclick=e=>{ e.stopPropagation(); zReset(); };

  seg($('perSeg'),i=>{ per=i; z0=0; z1=390; drawChart(true); header(); });
  $('cndl').onclick=()=>{ candles=!candles; $('cndl').classList.toggle('on',candles); drawChart(true); };
  let rzT=0; window.addEventListener('resize',()=>{ clearTimeout(rzT); rzT=setTimeout(()=>drawChart(false),120); });

  // learning banner
  $('lrnX').onclick=()=>$('lrn').classList.add('gone');
  $('lrn').addEventListener('click',e=>{ if(!e.target.closest('#lrnX')) toast('Урок «Как читать графики» — скоро'); });

  // Информация: tabs + read more
  const INF=[
    ['Apple Inc. (AAPL) — самая популярная акция среди начинающих инвесторов. Стабильные дивиденды, высокая ликвидность и надёжная репутация делают её отличным выбором для первого портфеля',
     '. Большинство аналитиков сохраняют рекомендацию «Покупать».'],
    ['Apple делает iPhone, Mac, iPad, часы и наушники, а ещё зарабатывает на сервисах — App Store, iCloud, Apple Music. Компания основана в 1976 году в Купертино',
     '. Сервисы — самая быстрорастущая часть бизнеса.'],
    ['Компания отчитывается раз в квартал. Следующий отчёт — в конце октября: рынок ждёт роста выручки за счёт сервисов и продаж новых iPhone',
     '. После отчётов акция часто двигается сильнее обычного.']];
  let infI=0;
  const infSet=()=>{ $('infTxt').innerHTML=INF[infI][0]+'<span class="more">'+INF[infI][1]+'</span>'; };
  infSet();
  seg($('infSeg'),i=>{ infI=i; $('infTxt').classList.add('fade'); setTimeout(()=>{ infSet(); $('infTxt').classList.remove('fade'); },160); });
  $('infMore').onclick=()=>{ const o=$('inf').classList.toggle('open'); $('infMore').textContent=o?'Свернуть':'Подробнее'; };

  // position
  function position(dir){
    const ss=STM==='ss', q=ss?SH_S:SH_W, av=ss?AVG_S:AVG_W, m=midPx()*(ss?1+SSPR:1), val=q*m, all=val-q*av, day=q*(m-PREV);
    $('pSh').textContent=ss?String(Math.round(SH_S*100)):String(SH_W); $('pAvg').textContent=usd(ss?av/100:av); $('posCard').classList.toggle('zero',!q);
    const put=(id,t)=>{ const el=$(id); if(dir) rollText(el,t,dir,true); else el.textContent=t; };
    put('pVal',usd(val)); put('pShare',dec(val/(FRESH?Math.max(hTot(),1):TOTAL)*100)+'%'); posSplit();
    put('pAll',sUsd(all)+' ('+sPct(q?all/(q*av)*100:0)+')'); $('pAll').className='v '+(all<0?'dn':'up');
    put('pDay',sUsd(day)+' ('+sPct((m-PREV)/PREV*100)+')'); $('pDay').className='v '+(day<0?'dn':'up');
    $('simPx').textContent=fmt2(m); const dc=(m-PREV)/PREV*100;
    $('simCh').textContent=(dc<0?'▼ ':'▲ ')+dec(dc)+' %'; $('simCh').className='c '+(dc<0?'dn':'up');
  }
  function bought(o){
    if(!o||o.total<=0) return;
    if(!o.isLimit) TRADES.push({q:Math.round((SELL()?-1:1)*o.shares*10000)/10000,p:o.price,d:now()});
    if(!o.isLimit&&SELL()){ if(o.ss) SH_S=Math.max(0,SH_S-o.shares); else SH_W=Math.max(0,SH_W-o.shares); syncHold(); posSplit();
      const sh=$('pSh'); sh.animate([{color:'#E22F2F',transform:'scale(1.15)'},{color:'#0F0F0F',transform:'none'}],{duration:900,easing:'cubic-bezier(.2,.9,.3,1)'});
      position(-1); setTimeout(()=>toast('Продано '+fmtShares(o.shares,',')+' AAPL'),420); return; }
    if(!o.isLimit){ const add=o.shares; if(o.ss||!Number.isInteger(add)){ AVG_S=(SH_S*AVG_S+add*(o.lot?o.lot*100:o.price))/(SH_S+add); SH_S+=add; } else { AVG_W=(SH_W*AVG_W+add*o.price)/(SH_W+add); SH_W+=add; } syncHold(); posSplit();
      const sh=$('pSh'); sh.animate([{color:'#10C810',transform:'scale(1.15)'},{color:'#0F0F0F',transform:'none'}],{duration:900,easing:'cubic-bezier(.2,.9,.3,1)'});
      position(1);
      setTimeout(()=>toast('Куплено '+fmtShares(add,',')+' AAPL'),420);
    } else setTimeout(()=>toast('Лимитная заявка выставлена · '+fmt2(o.price)),420);
  }

  // alerts
  const AL=[-5,-3,-2,-1,-.5,0,.5,1,2,3,5]; const alOn=new Set(); let alSide='Продать';
  $('alRow').innerHTML=AL.map(v=>v===0?'<button class="bellb" id="alBell" aria-label="Свой алерт">'+$('stBell').querySelector('svg').outerHTML+'<span class="cnt" id="alCnt">0</span></button>'
    :'<button class="chipx '+(v<0?'r':'g')+'" data-v="'+v+'">'+(v<0?'–':'+')+String(Math.abs(v)).replace('.',',')+'%</button>').join('');
  requestAnimationFrame(()=>{ const r=$('alRow'), b=$('alBell'); r.scrollLeft=b.offsetLeft-(r.clientWidth-b.offsetWidth)/2; });
  const alCount=()=>{ const n=alOn.size; [$('alCnt'),$('bellCnt')].forEach(c=>{ c.textContent=n; c.classList.toggle('on',n>0); }); };
  $('alRow').addEventListener('click',e=>{ const c=e.target.closest('.chipx'); if(c){ const v=+c.dataset.v;
      if(alOn.has(v)){ alOn.delete(v); c.classList.remove('on'); toast('Алерт снят'); }
      else { alOn.add(v); c.classList.add('on'); const p=midPx()*(1+v/100); toast((alSide==='Купить'?'Купить':'Продать')+', когда цена '+(v<0?'≤ ':'≥ ')+fmt2(p)); }
      alCount(); return; }
    if(e.target.closest('#alBell')){ const b=$('alBell'); b.classList.remove('ring'); void b.offsetWidth; b.classList.add('ring');
      toast(alOn.size?'Активных алертов: '+alOn.size:'Выбери процент — пришлём пуш'); } });
  seg($('alSeg'),(i,b)=>{ alSide=b.textContent.trim(); });

  // nav buttons
  $('stStar').onclick=()=>{ const on=$('stStar').classList.toggle('on'); toast(on?'AAPL в избранном':'Убрано из избранного'); };
  $('stBell').onclick=()=>{ const sc=$('stScroll'), c=$('alCard'); sc.scrollTo({top:c.offsetTop-80,behavior:'smooth'});
    setTimeout(()=>c.animate([{boxShadow:'0 0 0 0 rgba(16,200,16,.5)'},{boxShadow:'0 0 0 8px rgba(16,200,16,0)'}],{duration:900}),450); };

  // statistics → full order book
  $('stsOpen').onclick=()=>openBook();
  document.querySelector('.sts .bs').onclick=()=>openBook();

  // news
  const NEWS=[
    {t:'Утро в Нью-Йорке: торговые угрозы провоцируют коррекцию',img:true,p:['Американские индексы открылись снижением: инвесторы отыгрывают новые заявления о пошлинах. Сильнее рынка дешевеют технологические компании с большой выручкой за рубежом, в том числе Apple.',
      'Аналитики считают просадку краткосрочной: спрос на новые iPhone остаётся высоким, а сервисный бизнес меньше зависит от торговых ограничений.']},
    {t:'Tesla планирует расширить зону роботакси на Калифорнию и Аризону. Почему это важно?',p:['Компания готовит запуск беспилотного такси в новых штатах. Если сервис заработает в масштабе, это может стать новым источником выручки помимо продаж автомобилей.',
      'Для рынка это сигнал: крупные технологические компании соревнуются за ИИ-сервисы, и инвесторы внимательно следят, кто первым начнёт на них зарабатывать.']}];
  document.querySelectorAll('[data-news]').forEach(b=>b.onclick=()=>{ const n=NEWS[+b.dataset.news];
    openSheet('<div class="sh-head center"><span></span><h3>Новости</h3>'+XB+'</div><div class="nw-body">'+(n.img?'<img src="'+document.querySelector('[data-news="0"] img').src+'" alt="">':'')+
      '<h2>'+n.t+'</h2><div class="m"><b>Новости</b> · 2 часа назад</div>'+n.p.map(t=>'<p>'+t+'</p>').join('')+'</div>'); });
  $('allNews').onclick=()=>toast('Лента новостей — в следующей итерации');

  // similar
  document.querySelectorAll('.sim .tl').forEach(b=>b.onclick=()=>{ if(b.dataset.tk==='AAPL') $('stScroll').scrollTo({top:0,behavior:'smooth'}); else toast('В прототипе — только AAPL'); });

  // live
  function stockTick(dir){
    PER.forEach(s=>{ s.pts[s.pts.length-1].p=midPx(); });
    if(!scrubbing){ drawChart(false); header(dir); } position(dir); pfLive(dir);
    if(sheet.classList.contains('pos')&&$('psPx')){ $('psPx').textContent=usd(midPx()); psHints(); }
    const hi=Math.max(158.64,midPx()), lo=Math.min(151.90,midPx()); $('stMax').textContent=dec(hi); $('stMin').textContent=dec(lo);
  }
  drawChart(false); header(); position();
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>drawChart(false));

  // ═════════ HOME ═════════
  let BASE_TOT=11200.52-4.37*152.52, BASE_STK=9283.92, SEC0=11001;
  function syncStatus(){ if(dev.classList.contains('on-mv')&&!dev.classList.contains('mnu-on')&&!dev.classList.contains('sto-on')){ dev.classList.toggle('st-light',dev.classList.contains('on-confirm')&&$('scrConfirm').classList.contains('success')); return; } if(dev.classList.contains('mnu-on')){ dev.classList.add('st-light'); return; } if(dev.classList.contains('sto-on')){ dev.classList.add('st-light'); return; } if(dev.classList.contains('on-nbr')){ dev.classList.add('st-light'); return; } if(dev.classList.contains('on-nbg')){ dev.classList.toggle('st-light',$('ngScroll').scrollTop<$('ngHero').offsetHeight-60); return; } if(dev.classList.contains('on-nbo')){ dev.classList.toggle('st-light',$('scrNbO').classList.contains('s0')); return; } if(dev.classList.contains('on-nbb')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('on-op')&&!dev.classList.contains('sto-on')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('on-tu')){ dev.classList.add('st-light'); return; } if(dev.classList.contains('on-fps')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('on-fpp')){ dev.classList.toggle('st-light',$('fppScroll').scrollTop<$('fppHero').offsetHeight-60); return; } if(dev.classList.contains('on-fp')){ dev.classList.toggle('st-light',$('fpScroll').scrollTop<$('fpHero').offsetHeight-60); return; } if(dev.classList.contains('on-lo')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('on-lt')){ dev.classList.toggle('st-light',$('ltScroll').scrollTop<$('ltHero').offsetHeight-60); return; } if(dev.classList.contains('on-ev')){ dev.classList.toggle('st-light',$('evScroll').scrollTop<$('evHero').offsetHeight-60); return; } if(dev.classList.contains('on-pm')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('on-ct')&&!dev.classList.contains('on-stock')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('se')){ dev.classList.remove('st-light'); return; } if(dev.classList.contains('cr')){ const cy=$('crScroll').scrollTop, crb=dev.classList.contains('on-crb')||dev.classList.contains('on-coin'); dev.classList.toggle('st-light',!crb&&cy<topThr('scrCr')); $('crSb').classList.toggle('on',cy>=440); return; } const an=dev.classList.contains('on-an'), home=!dev.classList.contains('on-stock')&&!an; const y=$('hmScroll').scrollTop, ay=$('anScroll')?$('anScroll').scrollTop:0;
    dev.classList.toggle('st-light',(home&&!dev.classList.contains('hsoft')&&y<topThr('scrHome'))||(an&&ay<440)); $('hmSb').classList.toggle('on',y>=440); if($('anSb')) $('anSb').classList.toggle('on',an&&ay>=440); }
  function goHome(){ closeSheet(); dev.classList.remove('on-stock','on-order'); $('scrStock').setAttribute('aria-hidden','true'); syncStatus(); }
  $('stBack').onclick=goHome;
  $('hmScroll').addEventListener('scroll',syncStatus,{passive:true});
  // any element with data-t just shows a note
  $('scrHome').addEventListener('click',e=>{ const b=e.target.closest('[data-t]'); if(b&&!b.closest('.tile')) toast(b.dataset.t); });

  // header chart — scrub + periods drive every «за период» number on the page
  const HP=[
    {w:'За сегодня',s:'за день',a:'за сегодня',lab:['18:00','19:00','20:00','21:00','22:00','23:00'],n:70,pct:.29,v:.0011,seed:3,m:1,
      at:t=>'25 сен, '+(()=>{ const mm=18*60+Math.round(t*330/5)*5; return String(Math.floor(mm/60)).padStart(2,'0')+':'+String(mm%60).padStart(2,'0'); })()},
    {w:'За неделю',s:'за неделю',a:'за неделю',lab:['Пн','Вт','Ср','Чт','Пт','Сб'],n:70,pct:1.49,v:.0028,seed:8,m:1.9,
      at:t=>{ const d=new Date(2026,8,19+Math.floor(t*6.99)); return ['вс','пн','вт','ср','чт','пт','сб'][d.getDay()]+', '+d.getDate()+' '+MON[d.getMonth()]; }},
    {w:'За месяц',s:'за месяц',a:'за месяц',lab:['26 авг','2 сен','9 сен','16 сен','23 сен'],n:70,pct:-1.86,v:.005,seed:13,m:-.8,at:t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t))},
    {w:'За год',s:'за год',a:'за год',lab:['Ноя','Янв','Мар','Май','Июл','Сен'],n:80,pct:12.1,v:.012,seed:17,m:4.2,at:t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t),true)},
    {w:'За всё время',s:'за всё время',a:'за всё время',lab:['2022','2023','2024','2025','2026'],n:90,pct:8.3,v:.03,seed:23,m:6.5,
      at:t=>{ const d=span(new Date(2022,0,1),new Date(2026,8,25))(t); return MON[d.getMonth()]+' '+d.getFullYear(); }}];
  // finer data so zooming has something to show
  [[331],[337],[301],[366],[401]].forEach(([n],k)=>{ const P=HP[k]; P.v*=Math.sqrt(P.n/n); P.n=n; });
  const hh=t=>{ const mm=18*60+Math.round(t*330); return String(Math.floor(mm/60)).padStart(2,'0')+':'+String(mm%60).padStart(2,'0'); };
  HP[0].at=t=>'25 сен, '+hh(t); HP[0].ax=hh;
  HP[1].at=t=>{ const d=span(new Date(2026,8,19),new Date(2026,8,26))(t); return ['вс','пн','вт','ср','чт','пт','сб'][d.getDay()]+', '+d.getDate()+' '+MON[d.getMonth()]+', '+String(d.getHours()).padStart(2,'0')+':00'; };
  HP[1].ax=t=>{ const d=span(new Date(2026,8,19),new Date(2026,8,26))(t); return ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'][d.getDay()]+' '+String(d.getHours()).padStart(2,'0')+':00'; };
  HP[2].ax=t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t));
  HP[3].ax=t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t));
  HP[4].ax=t=>{ const d=span(new Date(2022,0,1),new Date(2026,8,25))(t); return MON[d.getMonth()]+' '+String(d.getFullYear()).slice(2); };
  const smooth=(arr,k)=>arr.map((_,i)=>{ let s=0,c=0; for(let j=Math.max(0,i-k);j<=Math.min(arr.length-1,i+k);j++){ s+=arr[j]; c++; } return s/c; });
  HP[4].pct=840/(BASE_TOT+4.37*152.52-840)*100;
  HP.forEach(P=>{ const raw=gen(P.n,1000/(1+P.pct/100),1000,P.v*1000,P.seed).map(q=>q.p/1000); const sm=smooth(raw,1);
    const k0=raw[0]-sm[0], k1=raw[raw.length-1]-sm[sm.length-1]; P.rel=sm.map((v,i)=>v+k0+(k1-k0)*i/(sm.length-1)); });
  let hper=0, hscrub=false, hgeo=null, hlast=null, v0=0, v1=HP[0].n-1;
  const valF=()=>SH_W*midPx()+SH_S*midPx()*(1+SSPR); const hTot=()=>FRESH?BASE_TOT+valF():BASE_TOT+SHARES*midPx();
  // новый счёт: график живой, амплитуда — по доле бумаг (не меньше 12 %, если на счёте есть деньги)
  const frK=()=>{ const t=hTot(); return t>0?Math.min(1,Math.max(.12,valF()/t)):0; }, frRel=P=>P.rel.map(r=>1+(r-1)*frK());
  const zoomed=()=>v0>0.5||v1<HP[hper].n-1.5;
  function hmDraw(reveal){
    const P=HP[hper], W=$('hmChart').clientWidth||390, H=130, tot=hTot(), IW=W-20;
    const pts=(FRESH?frRel(P):P.rel).map(r=>r*tot), a=Math.max(0,Math.floor(v0)), b=Math.min(P.n-1,Math.ceil(v1)), vis=pts.slice(a,b+1);
    const mx=Math.max(...vis), mn=Math.min(...vis), Y=p=>mx-mn<1e-9?H-36:28+(mx-p)/((mx-mn)||1)*(H-40), X=i=>(i-v0)/(v1-v0)*IW;
    let line=''; for(let i=a;i<=b;i++) line+=(i===a?'M':'L')+X(i).toFixed(1)+' '+Y(pts[i]).toFixed(1);
    const atEnd=b===P.n-1, lx=X(b), ly=Y(pts[b]);
    const tail=atEnd?' L'+W+' '+ly.toFixed(1)+' L'+W+' '+H:' L'+lx.toFixed(1)+' '+H;
    $('hmSvg').innerHTML='<defs><linearGradient id="hmF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<pattern id="hmD" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".85" fill="#fff" fill-opacity=".55"/></pattern>'+
      '<linearGradient id="hmMG" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="28" y2="'+H+'"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<mask id="hmM" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><rect x="0" y="0" width="'+W+'" height="'+H+'" fill="url(#hmMG)"/></mask>'+
      '<filter id="hmG" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>'+
      '<clipPath id="hmC"><rect id="hmR" x="0" y="-20" width="'+W+'" height="'+(H+40)+'"/></clipPath>'+
      '<clipPath id="hmCL"><rect id="hmRL" x="-10" y="-20" width="'+(W+20)+'" height="'+(H+40)+'"/></clipPath><clipPath id="hmCR"><rect id="hmRR" x="'+(W+10)+'" y="-20" width="0" height="'+(H+40)+'"/></clipPath>'+
      '<g id="hmGG"><path d="'+line+tail+' L'+X(a).toFixed(1)+' '+H+'Z" fill="url(#hmF)"/><path d="'+line+tail+' L'+X(a).toFixed(1)+' '+H+'Z" fill="url(#hmD)" mask="url(#hmM)"/>'+
      '<path d="'+line+'" fill="none" stroke="#9FD4FF" stroke-width="5" filter="url(#hmG)" opacity=".9"/>'+
      '<path d="'+line+'" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'+
      (atEnd?'<path d="M'+(lx+6).toFixed(1)+' '+ly.toFixed(1)+' H'+W+'" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/>':'')+'</g></defs>'+
      '<g clip-path="url(#hmC)"><g clip-path="url(#hmCW)"><use href="#hmGG" clip-path="url(#hmCL)"/><use href="#hmGG" clip-path="url(#hmCR)" opacity=".3"/></g>'+
      (atEnd?'<circle id="hmLive" cx="'+lx+'" cy="'+ly+'" r="4" fill="#fff" data-lp="1"/>':'')+'</g>'+
      '<clipPath id="hmCW"><rect x="0" y="-20" width="'+W+'" height="'+(H+40)+'"/></clipPath>';
    const labs=zoomed()?[0,1,2,3,4].map(k=>P.ax((v0+(k+.5)/5*(v1-v0))/(P.n-1))):P.lab;
    $('hmX2').innerHTML=labs.map((l,i)=>'<span style="left:'+((i+.5)/labs.length*100)+'%">'+l+'</span>').join('');
    hgeo={P,W,IW,pts,X,Y};
    const z=(P.n-1)/(v1-v0); $('hmZoom').classList.toggle('on',zoomed()); $('hmZoomT').textContent='×'+dec(z,1);
    if(reveal){ const r=$('hmR'), t0=performance.now(); (function f(t){ const k=Math.max(0,Math.min(1,(t-t0)/700)), e=1-Math.pow(1-k,3); r.setAttribute('width',(W*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }
  const sgnUsd=n=>(n<0?MIN:'+')+'$'+dec(n);
  const sgnPct=n=>(n<0?MIN:'+')+dec(n)+' %';
  function setChg(el,d,base){ el.textContent=sgnUsd(d)+' ('+sgnPct(d/base*100)+')'; el.style.color=d<0?'#FF6B6B':'#27F727'; el.classList.toggle('dn',d<0); }
  function hmHead(dir){
    const P=HP[hper], tot=hTot(), R0=FRESH?frRel(P)[0]:P.rel[0], d=tot-R0*tot, start=Math.max(R0*tot,1);
    $('hmTotL').textContent='Всего на счёте';
    if(dir) rollText($('hmTot'),'$'+dec(tot),dir,true); else $('hmTot').textContent='$'+dec(tot);
    $('hmDayK').textContent=P.w; setChg($('hmDay'),d,start);
  }
  function hmScrubAt(e){
    if(!hgeo) return; const rc=$('hmChart').getBoundingClientRect(), x=Math.max(0,Math.min(hgeo.IW,e.clientX-rc.left));
    const i=Math.max(0,Math.min(hgeo.P.n-1,Math.round(v0+x/hgeo.IW*(v1-v0)))), v=hgeo.pts[i], px=hgeo.X(i), py=hgeo.Y(v), start=hgeo.pts[0];
    $('hmChart').classList.add('scrub'); hscrub=true;
    $('hmCur').style.left=px+'px'; $('hmDot').style.left=px+'px'; $('hmDot').style.top=py+'px';
    $('hmRL').setAttribute('width',px+10); $('hmRR').setAttribute('x',px); $('hmRR').setAttribute('width',hgeo.W-px+10);
    if(i!==hlast){ const dir=hlast==null?0:(v>=hgeo.pts[hlast]?1:-1); hlast=i;
      $('hmTotL').textContent=hgeo.P.at(i/(hgeo.P.n-1));
      if(dir) rollText($('hmTot'),'$'+dec(v),dir,true); else $('hmTot').textContent='$'+dec(v);
      setChg($('hmDay'),v-start,start);
      if(navigator.vibrate&&e.pointerType==='touch') try{navigator.vibrate(3)}catch(_){} }
  }
  function hmEnd(){ if(!hscrub) return; hscrub=false; const was=hlast!=null?hgeo.pts[hlast]:hTot(); hlast=null; $('hmChart').classList.remove('scrub');
    $('hmRL').setAttribute('width',hgeo.W+20); $('hmRR').setAttribute('x',hgeo.W+10); $('hmRR').setAttribute('width',0); hmHead(hTot()>=was?1:-1); }

  // ── zoom: pinch (2 fingers) / trackpad pinch / wheel, pan with 2 fingers or horizontal wheel, double-tap resets ──
  const MINW=14;
  function setWin(a,b){ const N=HP[hper].n-1; let w=Math.max(MINW,Math.min(N,b-a)); let c=(a+b)/2; a=c-w/2; b=c+w/2;
    if(a<0){ b-=a; a=0; } if(b>N){ a-=b-N; b=N; } v0=Math.max(0,a); v1=Math.min(N,b); hmDraw(false); }
  function zoomAt(fx,factor){ const c=v0+fx*(v1-v0), w=(v1-v0)*factor; setWin(c-fx*w,c+(1-fx)*w); }
  function resetZoom(){ const s0=v0,s1=v1,N=HP[hper].n-1,t0=performance.now();
    (function f(t){ const k=Math.min(1,(t-t0)/320), e=1-Math.pow(1-k,3); v0=s0+(0-s0)*e; v1=s1+(N-s1)*e; hmDraw(false); if(k<1) requestAnimationFrame(f); })(t0); }
  const PT=new Map(); let pinch=null, lastTap=0;
  const ch=$('hmChart');
  const hmLP=LP(ch,{scrub:e=>hmScrubAt(e),end:()=>hmEnd(),canPan:()=>zoomed(),pan:dx=>{ const w=ch.getBoundingClientRect().width-20, sh=-dx/w*(v1-v0); setWin(v0+sh,v1+sh); }});
  ch.addEventListener('pointerdown',e=>{ if(e.target.closest('.hm-zoom')) return; PT.set(e.pointerId,{x:e.clientX}); try{ ch.setPointerCapture(e.pointerId); }catch(_){}
    if(PT.size===2){ hmLP.up(); hmEnd(); const [p,q]=[...PT.values()], rc=ch.getBoundingClientRect(), IW=rc.width-20;
      pinch={d:Math.abs(p.x-q.x)||1,mid:((p.x+q.x)/2-rc.left)/IW,a:v0,b:v1}; return; }
    if(e.pointerType!=='mouse'){ const now=performance.now(); if(now-lastTap<280&&zoomed()){ resetZoom(); lastTap=0; return; } lastTap=now; }
    if(!pinch){ if(e.pointerType==='mouse') hmScrubAt(e); else hmLP.down(e); } });
  ch.addEventListener('pointermove',e=>{ if(PT.has(e.pointerId)) PT.get(e.pointerId).x=e.clientX;
    if(pinch&&PT.size>=2){ const [p,q]=[...PT.values()], rc=ch.getBoundingClientRect(), IW=rc.width-20, d=Math.abs(p.x-q.x)||1, mid=((p.x+q.x)/2-rc.left)/IW;
      const w=(pinch.b-pinch.a)*pinch.d/d, c=pinch.a+pinch.mid*(pinch.b-pinch.a); setWin(c-mid*w,c+(1-mid)*w); return; }
    if(e.pointerType==='mouse') hmScrubAt(e); else hmLP.move(e); });
  const up=e=>{ hmLP.up(); PT.delete(e.pointerId); if(PT.size<2) pinch=null; if(PT.size===0) hmEnd(); };
  ['pointerup','pointercancel'].forEach(t=>ch.addEventListener(t,up));
  ch.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') hmEnd(); });
  ch.addEventListener('dblclick',()=>{ if(zoomed()) resetZoom(); });
  ch.addEventListener('wheel',e=>{ const rc=ch.getBoundingClientRect(), fx=Math.max(0,Math.min(1,(e.clientX-rc.left)/(rc.width-20)));
    if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&!e.ctrlKey){ if(!zoomed()) return; e.preventDefault(); const sh=e.deltaX/(rc.width-20)*(v1-v0); setWin(v0+sh,v1+sh); return; }
    if(!e.ctrlKey&&!zoomed()&&e.deltaY>0) return;
    e.preventDefault(); zoomAt(fx,Math.exp(e.deltaY*(e.ctrlKey?0.012:0.0025))); if(hscrub) hmScrubAt(e); },{passive:false});
  $('hmZoom').onclick=e=>{ e.stopPropagation(); resetZoom(); };
  seg($('hmPer'),i=>{ const was=HP[hper]; hper=i; v0=0; v1=HP[i].n-1; hmDraw(true); hmHead(); pfPeriod(was); });
  $('hmAcc').onclick=()=>toast('Счёт GL 789099 · Глобальный');
  $('hmX').onclick=()=>toast('Закрыть раздел «Инвестиции»');
  $('hmFree').onclick=()=>toast('Свободно для торговли: $199,52 + D-счёт $1 200,00');
  $('hmGear').onclick=()=>toast('Настройки графика — скоро'); $('crGear').onclick=()=>toast('Настройки графика — скоро');

  // portfolio
  const MOON='<svg width="16" height="16" viewBox="0 0 16 16" style="margin-left:2px"><path d="M13.5 10.2A6 6 0 0 1 5.8 2.5a6 6 0 1 0 7.7 7.7Z" fill="#8B6CFF"/></svg>';
  // d = change «за день» from the mockup; other periods are scaled with a per-row wobble
  const STK=[
    {tk:'TSLA',lg:'tsla',q:10,p:'329,60',val:3296.00,d:264.00},
    {tk:'QQQ.US',lg:'qqq',q:6,p:'152,52',val:915.12,d:113.52},
    {tk:'NVDA.US',lg:'nvda',m:1,q:12,p:'178,20',val:2138.40,d:594.00},
    {tk:'KO.US',lg:'ko',m:1,q:20,p:'71,05',val:1421.00,d:8.40},
    {tk:'MSFT.US',lg:'msft',m:1,q:2,p:'412,30',val:824.60,d:104.60},
    {tk:'AMZN.US',lg:'amzn',m:1,q:3,p:'229,60',val:688.80,d:-121.00}];
  const WOB=STK.map((r,i)=>{ const g=rng(40+i); return HP.map((P,k)=>k===0?1:(0.55+g()*0.9)*(g()<.18?-1:1)); });
  const rowChg=(r,i)=>r.d*HP[hper].m*WOB[i][hper];
  const aaplChg=()=>{ const m=midPx(); const base=[PREV,PER[1].pts[Math.round(PER[1].pts.length*.77)].p,PER[1].base,PER[4].base,AVG][hper]; return SHARES*(m-base); };
  const lgHTML=k=>'<span class="lg lg-'+k+'">'+(k==='qqq'?'QQQ':'')+'</span>';
  const pctTxt=(d,v)=>(d<0?MIN:'+')+dec(Math.abs(d)/((v-d)||1)*100,1)+'%';
  const SECS=[
    {k:'Акции',id:'stk',open:true,rows:()=>'<button class="pf-row me" data-aapl>'+lgHTML('aapl')+'<span class="m"><span class="t">AAPL.US</span><span class="s" id="pfAs">4 шт. по 152,00 $</span></span><span class="r"><span class="t" id="pfAv">610,08</span><span class="s" id="pfAd">+$2,08 +0,34%</span></span></button>'+
      '<button class="pf-row me" data-aapl data-ss>'+lgHTML('aapl')+'<span class="m"><span class="t">AAPL/100</span><span class="s" id="pfSs">37 шт. по 1,50 $</span></span><span class="r"><span class="t" id="pfSv">56,43</span><span class="s" id="pfSd"></span></span></button>'+
      STK.map((r,i)=>'<button class="pf-row" data-t="В прототипе открывается только Apple">'+lgHTML(r.lg)+'<span class="m"><span class="t">'+r.tk+'</span><span class="s">'+r.q+' шт. по '+r.p+' $</span></span><span class="r"><span class="t">'+dec(r.val)+'</span><span class="s" id="pfR'+i+'"></span></span></button>').join('')},
    {k:'Облигации',id:'bnd',v:'$400,00',pc:3.6,rows:()=>'<button class="pf-row" data-t="В прототипе открывается только Apple">'+lgHTML('ishr')+'<span class="m"><span class="t">AGG.US</span><span class="s">4 шт. по 96,21 $</span></span><span class="r"><span class="t">384,84</span><span class="s" id="pfRb"></span></span></button>'},
    {k:'Долгосрочные инвестиции',id:'lng',v:'$20 000,00',pc:0,rows:()=>''},
    {k:'Мои прогнозы',id:'prd',v:'$0,00',rows:()=>''},
    {k:'Опционы',id:'opt',v:'$317,08',pc:-36.5,rows:()=>'<button class="pf-row" data-opos="c160e0">'+lgHTML('aapl')+'<span class="m"><span class="t">AAPL 160 Call</span><span class="s">2 контракта · 17 окт</span></span><span class="r"><span class="t">317,08</span><span class="s" id="pfRo"></span></span></button>'}];
  const CHD='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9.5l6 6 6-6" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  $('pfSecs').innerHTML=SECS.map((s,i)=>'<div class="pf-sec'+(s.open?' open':'')+'"><button class="pf-sh" data-sec="'+i+'"><span><span class="k">'+s.k+'</span><span class="v">'+(s.id==='stk'?'<span id="pfStk">$9 283,92</span>':s.v)+'<small id="pfS_'+s.id+'"></small></span></span>'+CHD+'</button><div class="pf-bd"><div>'+s.rows()+'</div></div></div>').join('');
  $('pfSecs').addEventListener('click',e=>{ const h=e.target.closest('[data-sec]'); if(h){ h.parentNode.classList.toggle('open'); return; }
    const pe=e.target.closest('[data-pmev]'); if(pe){ goEv(pe.dataset.pmev); return; }
    { const ar=e.target.closest('[data-aapl]'); if(ar){ stMode(ar.hasAttribute('data-ss')?'ss':'stock'); goStock(); } } });
  const setS=(el,d,v,roll)=>{ const t=sgnUsd(d)+' '+pctTxt(d,v); if(roll&&el.textContent&&el.textContent!==t){ rollText(el,t,d>=0?1:-1,true); } else el.textContent=t; el.className='s'+(d<0?' dn':''); };
  function pfPeriod(was,dir){
    const P=HP[hper], roll=!!was||!!dir, m=midPx(), aval=SHARES*m;
    STK.forEach((r,i)=>setS($('pfR'+i),rowChg(r,i),r.val,roll));
    const ad=aaplChg(); setS($('pfAd'),ad*SH_W/SHARES,SH_W*m,roll); if($('pfSd')) setS($('pfSd'),ad*SH_S/SHARES,SH_S*m,roll);
    const sum=(FRESH?0:STK.reduce((a,r,i)=>a+rowChg(r,i),0))+ad, tot=FRESH?valF():BASE_STK-4.37*152.52+aval;
    const st=$('pfS_stk'); st.textContent=sgnUsd(sum)+' ('+sgnPct(sum/(tot-sum)*100)+') '+P.s; st.className=sum<0?'dn':'';
    [['bnd',400,'pfRb',384.84],['opt',317.08,'pfRo',317.08]].forEach(([id,v,rid,rv])=>{
      const s=SECS.find(x=>x.id===id), pc=s.pc*Math.abs(P.m)*(P.m<0&&id!=='opt'?-1:1)*(hper===0?1:.6), el=$('pfS_'+id);
      el.textContent=id==='lng'&&hper<3?'':(pc<0?MIN:'+')+dec(Math.abs(pc),1)+' % '+P.s; el.className=pc<0?'dn':'';
      setS($(rid),rv*pc/(100+pc),rv,roll); });
    // analytics «за …» column mirrors the header
    const tot2=hTot(), start=P.rel[0]*tot2, d=tot2-start;
    $('anPK').textContent=P.a; $('anPV').textContent=sgnUsd(d)+' ('+dec(Math.abs(d/start*100))+' %)'; $('anPV').className='v '+(d<0?'dn':'up');
    if(was) [...document.querySelectorAll('#pfSecs small, #pfSecs .pf-row .r .s, #anPV')].forEach(el=>el.animate([{opacity:.3,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:380,easing:'cubic-bezier(.2,.9,.3,1)'}));
  }
  function pfLive(dir){
    const m=midPx(), val=SHARES*m;
    const put=(el,t)=>{ if(dir) rollText(el,t,dir,true); else el.textContent=t; };
    $('pfAs').textContent=SH_W+' шт. по '+dec(AVG_W)+' $'; put($('pfAv'),dec(SH_W*m));
    if($('pfSs')){ $('pfSs').textContent=Math.round(SH_S*100)+' шт. по '+dec(AVG_S/100)+' $'; put($('pfSv'),dec(SH_S*m*(1+SSPR))); $('pfSs').closest('.pf-row').hidden=!SH_S; } put($('pfStk'),'$'+dec(FRESH?valF():BASE_STK-4.37*152.52+val)); put($('anVal'),'$'+dec(FRESH?valF():SEC0-4.37*152.52+val));
    if(!hscrub) hmHead(dir);
    pfPeriod(null,dir);
    if($('catAaplS')) put($('catAaplS'),fmt2(r2(m*SSF())));
    [['catAapl','catAaplC'],['ctAapl','ctAaplC']].forEach(([a1,a2])=>{ const ap=$(a1); if(ap){ put(ap,fmt2(m)); const c=(m/PER[4].base-1)*100; const cc=$(a2); cc.textContent=(c<0?MIN:'+')+dec(Math.abs(c))+' % за год'; cc.className='c'+(c<0?' dn':''); } });
  }

  // ── результат по бумагам: накопленный результат, пополнения не двигают линию ──
  const RSD=[[.5],[.14,.57],[.2,.45,.8],[.1,.3,.55,.75,.92],[.06,.2,.34,.5,.66,.78,.9]];
  const rsEnd=k=>k===4?840:hTot()*(1-1/(1+HP[k].pct/100));
  let rsPer=4, rsGeo=null, rsLast=null, rsScrub=false;
  const rsSeries=k=>{ const D=rsEnd(k), n=HP[k].n, r=rng(90+k), w=[0]; for(let i=1;i<n;i++) w.push(w[i-1]+(r()-.5)*2+(r()-.5)*(r()<.08?6:0));
    const wn=w[n-1], vol=Math.max(6,Math.abs(D)*.05); return w.map((x,i)=>{ const t=i/(n-1); return D*t+(x-t*wn)*vol*Math.sin(Math.PI*Math.min(1,t*1.15+.02)); }).map((v,i,a)=>i===a.length-1?D:v); };
  const RSC=[0,1,2,3,4].map(k=>rsSeries(k));
  function rsDraw(reveal){
    const el=$('rsChart'), W=el.clientWidth||326, H=110, P=HP[rsPer], pts=RSC[rsPer].slice(); pts[pts.length-1]=rsEnd(rsPer); const n=pts.length;
    const mx=Math.max(0,...pts), mn=Math.min(0,...pts), Y=p=>10+(mx-p)/((mx-mn)||1)*(H-34), X=i=>i/(n-1)*(W-14);
    const col=pts[n-1]<0?'#E22F2F':'#10C810'; el.style.setProperty('--c',col);
    let line=''; for(let i=0;i<n;i++) line+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(pts[i]).toFixed(1);
    const lx=X(n-1), ly=Y(pts[n-1]), y0=Y(0);
    const dep=RSD[rsPer].map(f=>'<circle cx="'+(f*(W-14)).toFixed(1)+'" cy="'+(H-4)+'" r="3" fill="#C7C7CC"/>').join('');
    $('rsSvg').innerHTML='<defs><linearGradient id="rsF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity=".22"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient>'+
      '<clipPath id="rsCW"><rect id="rsR" x="0" y="-10" width="'+W+'" height="'+(H+20)+'"/></clipPath>'+
      '<clipPath id="rsCL"><rect id="rsRL" x="-10" y="-10" width="'+(W+20)+'" height="'+(H+20)+'"/></clipPath><clipPath id="rsCR"><rect id="rsRR" x="'+(W+10)+'" y="-10" width="0" height="'+(H+20)+'"/></clipPath>'+
      '<g id="rsGG"><path d="'+line+' L'+lx.toFixed(1)+' '+(H-14)+' L0 '+(H-14)+'Z" fill="url(#rsF)"/><path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></g></defs>'+
      '<path d="M0 '+y0.toFixed(1)+' H'+W+'" stroke="#C7C7CC" stroke-width="1" stroke-dasharray="2 4" stroke-linecap="round"/>'+
      '<g clip-path="url(#rsCW)"><use href="#rsGG" clip-path="url(#rsCL)"/><use href="#rsGG" clip-path="url(#rsCR)" opacity=".3"/><circle id="rsLive" cx="'+lx+'" cy="'+ly+'" r="4" fill="'+col+'"/>'+dep+'</g>';
    $('rsX').innerHTML=P.lab.map((l,i)=>'<span style="left:'+((i+.5)/P.lab.length*100)+'%">'+l+'</span>').join('');
    rsGeo={W,pts,X,Y,col};
    if(reveal){ const r=$('rsR'), t0=performance.now(); (function f(t){ const k=Math.max(0,Math.min(1,(t-t0)/700)), e=1-Math.pow(1-k,3); r.setAttribute('width',(W*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }
  function rsHead(dir){ const d=rsEnd(rsPer), v=$('rsV'); const t=sgnUsd(d);
    if(dir) rollText(v,t,dir,true); else v.textContent=t; v.className='v '+(d<0?'dn':'up'); $('rsS').textContent=HP[rsPer].s; }
  function rsAt(e){ if(!rsGeo) return; const rc=$('rsChart').getBoundingClientRect(), x=Math.max(0,Math.min(rsGeo.W-14,e.clientX-rc.left)), n=rsGeo.pts.length;
    const i=Math.max(0,Math.min(n-1,Math.round(x/(rsGeo.W-14)*(n-1)))), v=rsGeo.pts[i], px=rsGeo.X(i), py=rsGeo.Y(v);
    $('rsChart').classList.add('scrub'); rsScrub=true; $('rsCur').style.left=px+'px'; $('rsDot').style.left=px+'px'; $('rsDot').style.top=py+'px';
    $('rsRL').setAttribute('width',px+10); $('rsRR').setAttribute('x',px); $('rsRR').setAttribute('width',rsGeo.W-px+10);
    if(i!==rsLast){ const dir=rsLast==null?0:(v>=rsGeo.pts[rsLast]?1:-1); rsLast=i; const t=sgnUsd(v), el=$('rsV');
      if(dir) rollText(el,t,dir,true); else el.textContent=t; el.className='v '+(v<0?'dn':'up'); $('rsS').textContent=HP[rsPer].at(i/(n-1));
      if(navigator.vibrate&&e.pointerType==='touch') try{navigator.vibrate(3)}catch(_){} } }
  function rsEndScrub(){ if(!rsScrub) return; rsScrub=false; const was=rsLast!=null?rsGeo.pts[rsLast]:rsEnd(rsPer); rsLast=null; $('rsChart').classList.remove('scrub');
    $('rsRL').setAttribute('width',rsGeo.W+20); $('rsRR').setAttribute('x',rsGeo.W+10); $('rsRR').setAttribute('width',0); rsHead(rsEnd(rsPer)>=was?1:-1); }
  const rsLP=LP($('rsChart'),{scrub:e=>rsAt(e),end:()=>rsEndScrub()});
  $('rsChart').addEventListener('pointerdown',e=>{ try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){} if(e.pointerType==='mouse') rsAt(e); else rsLP.down(e); });
  $('rsChart').addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') rsAt(e); else rsLP.move(e); });
  ['pointerup','pointercancel'].forEach(t=>$('rsChart').addEventListener(t,()=>{ rsLP.up(); rsEndScrub(); }));
  $('rsChart').addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') rsEndScrub(); });
  seg($('rsPer'),i=>{ const was=rsEnd(rsPer); rsPer=i; rsDraw(true); rsHead(rsEnd(i)>=was?1:-1); });
  rsHead(); rsDraw(false);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>rsDraw(false));
  if(window.ResizeObserver) new ResizeObserver(()=>{ if(!rsScrub&&$('rsChart').clientWidth) rsDraw(false); }).observe($('rsChart'));

  // catalog
  const CAT=[['aapl','Apple Inc.',null,null,1],['tsla','Tesla Inc.','$375,30','−11,03 % за год',0],['nvda','NVIDIA Corp.','$227,38','+29,36 % за год',1],['amzn','Amazon','$258,45','+11,22 % за год',1],
    ['goog','Alphabet','$350,87','+38,46 % за год',1],['meta','Meta Platforms','$741,25','−5,74 % за год',0],['msft','Microsoft','$501,61','−1,75 % за год',0],'promo',
    ['nflx','Netflix','$73,36','−39,80 % за год',0],['visa','Visa','$369,95','+8,67 % за год',1],['csco','Cisco Systems','$111,46','+61,72 % за год',1],['spx','S&P 500 · SPY','$773,50','+16,78 % за год',1,1]];
  $('catG').innerHTML=CAT.map(c=>{ if(c==='promo') return '<button class="promo tile ct-bn ct-b-fut" data-promo><span class="bt">Долгосрочные инвестиции</span><span class="bs">Доход известен заранее</span><span class="bp">до 6,8 %</span></button>';
    const ap=c[0]==='aapl'&&c[1].startsWith('Apple');
    return '<div class="tile" data-tk="'+c[0]+'" '+(ap?'data-aapl':'data-other')+'>'+lgHTML(c[0])+'<span class="n">'+c[1]+'</span><hr><span class="p"'+(ap?' id="catAapl"':'')+'>'+(c[2]||'$152,52')+'</span><span class="c'+(c[4]===0?' dn':c[4]===2?' nt':'')+'"'+(ap?' id="catAaplC"':'')+'>'+(c[3]||'+25,33 % за год')+'</span>'+
      '<button class="b"'+(ap?' data-buy':'')+'>'+'Купить'+'</button></div>'; }).join('');
  $('catG').addEventListener('click',e=>{
    const t=e.target.closest('.tile'); if(!t) return;
    if(t.hasAttribute('data-promo')){ goLt(); return; }
    if(t.hasAttribute('data-other')){ toast('В прототипе открывается только Apple'); t.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(4px)'},{transform:'none'}],{duration:280}); return; }
    if(e.target.closest('[data-buy]')){ setSide('buy'); dev.classList.add('on-stock'); goOrder(); syncStatus(); return; }
    goStock(); });
  $('chips').addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return; if(b.classList.contains('fl')){ toast('Фильтры — скоро'); return; } b.classList.toggle('on'); });
  $('tabs').addEventListener('click',e=>{ const b=e.target.closest('button'); if(b&&b.dataset.t){ b.animate([{transform:'scale(.9)'},{transform:'none'}],{duration:250}); } });

  // ── position sheet (tap «Ваша позиция») ──
  const TRADES=[{q:2,p:150.00,d:'07 авг. 2026 14:16'},{q:2,p:154.00,d:'12 авг. 2026 11:02'}];
  const PSL={sl:{on:false,mode:'sum',v:''},tp:{on:false,mode:'sum',v:''}}; let PSAVED={sl:null,tp:null};
  const MODES=[['sum','Сумма'],['pct','Процент'],['px','Ценовой уровень']];
  function psLevel(k){ const o=PSL[k], m=midPx(), v=num(o.v), sg=k==='sl'?-1:1; if(!v) return null;
    if(o.mode==='px') return v; if(o.mode==='pct') return m*(1+sg*v/100); return m+sg*v/(SHARES||1); }
  function psCard(k,title){ const o=PSL[k];
    return '<div class="oc'+(o.on?' on':'')+'" data-k="'+k+'"><button class="oc-h" data-ps="'+k+'"><span class="t" style="font-weight:500;font-size:16px">'+title+'</span><i class="tg'+(o.on?' on':'')+'"></i></button>'+
      '<div class="oc-b"><div class="oc-in"><div class="oc-pad">'+
      '<button class="ps-sel" data-sel="'+k+'"><span>'+MODES.find(x=>x[0]===o.mode)[1]+'</span>'+CHEVD+'<span class="ps-menu">'+MODES.map(x=>'<span data-mode="'+x[0]+'"'+(x[0]===o.mode?' class="on"':'')+'>'+x[1]+(x[0]===o.mode?CHECK:'')+'</span>').join('')+'</span></button>'+
      '<div class="stp" id="ps'+k+'W"><span class="cur">'+(o.mode==='pct'?'%':'$')+'</span><input id="ps'+k+'" inputmode="decimal" autocomplete="off" placeholder="'+(o.mode==='sum'?'Сумма':o.mode==='pct'?'Процент':'Цена')+'" value="'+commaV(o.v)+'">'+
      '<button class="sb" data-d="-1" data-for="ps'+k+'">'+MINUS_I+'</button><button class="sb" data-d="1" data-for="ps'+k+'">'+PLUS_I+'</button></div>'+
      '<div class="ps-hint"><span>Дистанция: <b id="ps'+k+'D">—</b></span><span>Ценовой уровень: <b id="ps'+k+'L">—</b></span></div>'+
      '</div></div></div></div>'; }
  let PSK='whole';
  function posSplit(){ const m=midPx(); if(!$('pWq')) return; $('pWq').textContent=SH_W+' шт.'; $('pSq').textContent=Math.round(SH_S*100)+' шт.'; $('pWv').textContent=usd(SH_W*m); $('pSv').textContent=usd(SH_S*m);
    document.querySelector('.psr[data-psk="whole"]').classList.toggle('zero',!SH_W); document.querySelector('.psr[data-psk="ss"]').classList.toggle('zero',!SH_S); }
  function psHTML(){ PSK=STM==='ss'?'ss':'whole';
    const qn=PSK==='ss'?SH_S:SH_W, av=PSK==='ss'?AVG_S/100:AVG_W;
    const m=midPx()*(PSK==='ss'?1+SSPR:1), inv=qn*av, val=qn*m, all=val-inv, day=qn*(m-PREV);
    return '<div class="ps-head"><span class="id"><img src="'+document.querySelector('.st-tk img').src+'" alt=""><span><b>AAPL.US</b><span>Apple Inc.</span></span></span>'+XB+'</div>'+
      '<div class="ps-body"><div class="ps-kt"><button data-psk="whole"'+(PSK==='whole'?' class="on"':'')+'>Целые <small>'+SH_W+' шт.</small></button><button data-psk="ss"'+(PSK==='ss'?' class="on"':'')+'>Single stock <small>'+Math.round(SH_S*100)+' шт.</small></button></div>'+
      '<div class="ps-card"><div class="dt">'+(PSK==='ss'?'14 сен. 2026 10:40':TRADES[0].d)+'</div>'+
        '<div class="ps-r"><span class="k">Куплено <button class="bdg" id="psDeals">'+(PSK==='ss'?Math.round(SH_S*100)+' шт.':String(SH_W))+'<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></span><span class="v">'+usd(av)+'</span></div>'+
        '<div class="ps-r"><span class="k">Текущая цена</span><span class="v" id="psPx">'+usd(PSK==='ss'?r2(midPx()*SSF()):m)+'</span></div>'+
        '<div class="ps-r"><span class="k">Вложено</span><span class="v">'+usd(inv)+'</span></div>'+
        '<div class="ps-r"><span class="k">Стоимость позиции</span><span class="v" id="psVal">'+usd(val)+'</span></div>'+
        '<div class="ps-r"><span class="k">Результат позиции</span><span class="v '+(all<0?'dn':'up')+'" id="psAll">'+sUsd(all)+' ('+sPct(all/inv*100)+')</span></div>'+
        '<div class="ps-r"><span class="k">Результат сегодня</span><span class="v '+(day<0?'dn':'up')+'" id="psDay">'+sUsd(day)+' ('+sPct((m-PREV)/PREV*100)+')</span></div>'+
        '<div class="ps-r"><span class="k">Доля в портфеле</span><span class="v">'+dec(val/TOTAL*100)+'%</span></div></div>'+
        '<div class="ps-note">'+(PSK==='ss'?'Single stock продаются отдельно от целых акций — по сумме, кратной 1/100 акции':'Целые акции продаются поштучно, отдельно от single stock')+'</div>'+
        '<button class="ps-sell" id="psSell"'+(qn?'':' disabled')+'>'+(PSK==='ss'?'Продать single stock':'Продать целые акции')+'</button>'+
        psCard('sl','Стоп-лосс')+psCard('tp','Тейк-профит')+
      '</div><div class="sh-cta"><button class="cta" id="psGo" disabled>Обновить позицию</button></div>';
  }
  function psHints(){
    ['sl','tp'].forEach(k=>{ const L=psLevel(k), m=midPx(), W=$('ps'+k+'W'); if(!W) return;
      const ok=L!=null&&(k==='sl'?L<m:L>m)&&L>0;
      $('ps'+k+'D').textContent=L==null?'—':(L<m?MIN:'+')+'$'+dec(Math.abs(L-m)*SHARES)+' ('+(L<m?MIN:'+')+dec(Math.abs(L-m)/m*100)+'%)';
      $('ps'+k+'D').className=L==null?'':(L<m?'dn':'up');
      $('ps'+k+'L').textContent=L==null?'—':dec(L);
      W.classList.toggle('bad',PSL[k].on&&L!=null&&!ok); });
    const valid=k=>{ const L=psLevel(k), m=midPx(); return L!=null&&L>0&&(k==='sl'?L<m:L>m); };
    const cur={sl:PSL.sl.on&&valid('sl')?r2(psLevel('sl')):null, tp:PSL.tp.on&&valid('tp')?r2(psLevel('tp')):null};
    const bad=(PSL.sl.on&&!valid('sl'))||(PSL.tp.on&&!valid('tp'));
    const changed=cur.sl!==PSAVED.sl||cur.tp!==PSAVED.tp;
    if($('psGo')) $('psGo').disabled=bad||!changed;
    return cur;
  }
  function bindPs(){
    sheet.querySelectorAll('[data-ps]').forEach(b=>b.onclick=()=>{ const k=b.dataset.ps, o=PSL[k]; o.on=!o.on; const c=b.parentNode; c.classList.toggle('on',o.on); b.querySelector('.tg').classList.toggle('on',o.on);
      if(o.on&&!o.v){ o.v=o.mode==='pct'?'1':o.mode==='px'?(midPx()*(k==='sl'?.97:1.03)).toFixed(2):(SHARES*midPx()*.03).toFixed(2); $('ps'+k).value=commaV(o.v); } psHints(); });
    sheet.querySelectorAll('[data-sel]').forEach(b=>b.onclick=e=>{ const k=b.dataset.sel, md=e.target.closest('[data-mode]');
      if(md){ const o=PSL[k]; const L=psLevel(k); o.mode=md.dataset.mode;
        if(L!=null){ const m=midPx(); o.v=(o.mode==='px'?L:o.mode==='pct'?Math.abs(L-m)/m*100:Math.abs(L-m)*SHARES).toFixed(2); }
        const card=b.closest('.oc'); card.outerHTML=psCard(k,k==='sl'?'Стоп-лосс':'Тейк-профит'); bindPs(); return; }
      sheet.querySelectorAll('.ps-sel.open').forEach(x=>{ if(x!==b) x.classList.remove('open'); }); b.classList.toggle('open'); });
    ['sl','tp'].forEach(k=>{ const inp=$('ps'+k); if(!inp||inp.dataset.b) return; inp.dataset.b=1;
      inp.addEventListener('input',()=>{ let v=inp.value.replace(/[^\d.,]/g,'').replace('.',','); const p=v.split(','); if(p.length>2) v=p[0]+','+p.slice(1).join(''); if(p[1]&&p[1].length>2) v=p[0]+','+p[1].slice(0,2); inp.value=v; PSL[k].v=v.replace(',','.'); psHints(); }); });
    sheet.querySelectorAll('.stp .sb').forEach(b=>{ if(b.dataset.b) return; b.dataset.b=1; hold(b,()=>{ const inp=$(b.dataset.for), k=b.dataset.for.slice(2), o=PSL[k];
      const step=o.mode==='pct'?0.1:o.mode==='px'?STEP:1; const v=Math.max(0,Math.round(((num(inp.value)||0)+(+b.dataset.d)*step)*100)/100);
      inp.value=commaV(v.toFixed(2)); o.v=v.toFixed(2); psHints(); }); });
    $('psDeals').onclick=openDeals;
    sheet.querySelectorAll('.ps-kt [data-psk]').forEach(b=>b.onclick=()=>{ if(PSK===b.dataset.psk) return; PSK=b.dataset.psk; backToPos(); });
    $('psSell').onclick=()=>{ const k=PSK; closeSheet(); setSide('sell'); setTimeout(()=>{ goKind(); kdSel(k); kdApply(k); _goOrder(); },120); };
    $('psGo').onclick=()=>{ const cur=psHints(); PSAVED=cur; closeSheet();
      setTimeout(()=>toast('Позиция обновлена'+(cur.sl?' · SL '+dec(cur.sl):'')+(cur.tp?' · TP '+dec(cur.tp):'')),260); };
    psHints();
  }
  function openPos(){ openSheet(psHTML(),'pos'); bindPs(); }
  function backToPos(){ swapSheet(psHTML(),'pos'); bindPs(); }
  function openDeals(){
    const m=midPx();
    swapSheet('<div class="sh-head center"><button class="lead" id="dlBack">'+BACKI+'</button><h3>Сделки</h3>'+XB+'</div><div class="deals">'+
      TRADES.map(t=>{ const pl=t.q*(m-t.p)*(t.q<0?-1:1)*(t.q<0?-1:1); const sell=t.q<0; const r=sell?0:t.q*(m-t.p);
        return '<div class="deal"><span class="bdg pl'+(sell?' mn':'')+'">'+(sell?MIN:'+')+String(Math.abs(t.q)).replace('.',',')+'</span><span class="p">'+usd(t.p)+'<small>'+t.d+'</small></span>'+
          (sell?'<span class="r" style="color:#8E8E93">продажа</span>':'<span class="r '+(r<0?'dn':'up')+'">'+sUsd(r)+'</span>')+'</div>'; }).join('')+'</div><div style="height:12px"></div>','pos');
    $('dlBack').onclick=backToPos; }
  $('posCard').addEventListener('click',e=>{ const r=e.target.closest('.psr'); PSK=r?r.dataset.psk:(SH_W?'whole':'ss'); openPos(); });
  const now=()=>{ const d=new Date(); return d.getDate()+' '+MON[d.getMonth()]+'. '+d.getFullYear()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); };

  hmDraw(false); pfLive(); syncStatus();
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>hmDraw(false));

  // ═════════ ANALYTICS ═════════
  const INV=10161;
  const SEC=()=>SEC0-4.37*152.52+SHARES*midPx();
  // «всё время»: invested steps (deposits / one withdrawal) + value that grows on top of them
  const AN_N=220, DEP=[[0,2500],[30,2000],[62,2500],[96,3000],[128,-1339],[160,1500]];
  const anInv=Array.from({length:AN_N},(_,i)=>DEP.filter(d=>d[0]<=i).reduce((a,d)=>a+d[1],0));
  const anNoise=gen(AN_N,100,100,.55,31).map(q=>q.p-100);
  const AP=[
    {k:'all',l:'за всё время',at:t=>dfmt(span(new Date(2022,0,10),new Date(2026,8,25))(t),true),lab:['2022','2023','2024','2025','2026']},
    {k:'day',hp:0,l:'за день',at:t=>'25 сен, '+hh(t),lab:['18:00','20:00','22:00'],from:'на начало дня'},
    {k:'mon',hp:2,l:'за месяц',at:t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t)),lab:['26 авг','5 сен','15 сен','25 сен'],from:'на начало месяца'},
    {k:'yr',hp:3,l:'за год',at:t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t),true),lab:['Ноя','Янв','Мар','Май','Июл','Сен'],from:'год назад'}];
  let aper=0, fc=false, ageo=null, alast=null, ascrub=false;
  function anSeries(){
    const P=AP[aper], sec=SEC();
    if(P.k==='all'){ const gEnd=sec/INV-1;
      const val=anInv.map((v,i)=>{ const t=i/(AN_N-1); return v*(1+gEnd*Math.pow(t,1.15)+anNoise[i]*.0009*(0.4+t)); });
      val[AN_N-1]=sec; return {val,inv:anInv}; }
    const H=HP[P.hp]; const v=smooth(H.rel,3).map(r=>r*sec); const k=sec-v[v.length-1], k0=H.rel[0]*sec-v[0]; return {val:v.map((x,i)=>x+k0+(k-k0)*i/(v.length-1)),inv:null};
  }
  function anDraw(reveal){
    const P=AP[aper], {val,inv}=anSeries(), n=val.length, W=$('anChart').clientWidth||390, H=190, T=30, B=176, IW=W-20;
    const fN=fc&&P.k==='all'?Math.round(n/4.7):0, N=n-1+fN, last=val[n-1];
    const up=[],mid=[],lo=[]; for(let j=0;j<=fN;j++){ const t=j/(fN||1); mid.push(last*(1+.08*t)); up.push(last*(1+.08*t+.08*Math.sqrt(t))); lo.push(last*(1+.08*t-.11*Math.sqrt(t))); }
    const all=[...val,...(inv||[]),...up,...lo];
    const mx=Math.max(...all), mn=Math.min(...all), Y=p=>T+(mx-p)/((mx-mn)||1)*(B-T), X=i=>i/N*IW;
    const L=arr=>arr.map((p,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(p).toFixed(1)).join('');
    const vline=L(val), lx=X(n-1), ly=Y(last);
    let invPath=''; if(inv){ invPath='M0 '+Y(inv[0]).toFixed(1); for(let i=1;i<n;i++){ if(inv[i]!==inv[i-1]) invPath+='H'+X(i).toFixed(1)+'V'+Y(inv[i]).toFixed(1); } invPath+='H'+lx.toFixed(1); }
    const F=j=>X(n-1+j);
    let fcs=''; if(fN){ const U=up.map((p,j)=>(j?'L':'M')+F(j).toFixed(1)+' '+Y(p).toFixed(1)).join(''), Lo=lo.map((p,j)=>'L'+F(fN-j).toFixed(1)+' '+Y(lo[fN-j]).toFixed(1)).join('');
      fcs='<g id="anFcG"><path d="'+U+Lo+'Z" fill="rgba(255,255,255,.14)"/><path d="'+mid.map((p,j)=>(j?'L':'M')+F(j).toFixed(1)+' '+Y(p).toFixed(1)).join('')+'" stroke="#fff" stroke-width="2" stroke-dasharray="4 5" stroke-linecap="round" fill="none"/>'+
        '<path d="M'+lx.toFixed(1)+' '+Y(INV).toFixed(1)+'H'+F(fN).toFixed(1)+'" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-dasharray="3 4" fill="none"/>'+
        '<circle cx="'+F(fN)+'" cy="'+Y(mid[fN])+'" r="4" fill="#fff"/><text x="'+(F(fN)-6)+'" y="'+(Y(up[fN])-8)+'" text-anchor="end" fill="#fff" font-size="11" font-weight="600">через год</text></g>'; }
    $('anSvg').innerHTML='<defs><linearGradient id="anF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<filter id="anGl" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>'+
      '<clipPath id="anC"><rect id="anR" x="-5" y="-20" width="'+(W+10)+'" height="'+(H+40)+'"/></clipPath>'+
      '<clipPath id="anCL"><rect id="anRL" x="-10" y="-20" width="'+(W+20)+'" height="'+(H+40)+'"/></clipPath><clipPath id="anCR"><rect id="anRR" x="'+(W+10)+'" y="-20" width="0" height="'+(H+40)+'"/></clipPath>'+
      '<g id="anGG"><path d="'+vline+'L'+lx.toFixed(1)+' '+H+'L0 '+H+'Z" fill="url(#anF)"/>'+
      (inv?'<path d="'+invPath+'" stroke="rgba(255,255,255,.7)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>':'')+
      '<path d="'+vline+'" fill="none" stroke="#B9FFC9" stroke-width="5" filter="url(#anGl)" opacity=".85"/>'+
      '<path d="'+vline+'" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></g></defs>'+
      '<g clip-path="url(#anC)"><use href="#anGG" clip-path="url(#anCL)"/><use href="#anGG" clip-path="url(#anCR)" opacity=".3"/>'+fcs+
      (fN?'':'<path d="M'+(lx+6).toFixed(1)+' '+ly.toFixed(1)+'H'+W+'" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/>')+
      '<circle class="live" cx="'+lx+'" cy="'+ly+'" r="4" fill="#fff" data-lp="1"/></g>'+
      P.lab.map((l,i)=>'<text x="'+((i+.5)/P.lab.length*IW)+'" y="'+(H+2)+'" text-anchor="middle" fill="rgba(255,255,255,.75)" font-size="11" font-weight="500">'+l+'</text>').join('');
    ageo={P,val,inv,n,W,IW,X,Y};
    $('anLgInv').style.opacity=inv?1:.35; $('anFc').hidden=P.k!=='all';
    if(reveal){ const r=$('anR'), t0=performance.now(); (function f(t){ const k=Math.min(1,(t-t0)/800), e=1-Math.pow(1-k,3); r.setAttribute('width',((W+10)*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }
  function anHead(dir){
    const P=AP[aper], {val}=anSeries(), sec=SEC(), roll=(t)=>{ if(dir) rollText($('anResV'),t,dir,true); else $('anResV').textContent=t; };
    if(fc&&P.k==='all'){ const res=sec*1.08-INV; $('anResL').textContent='Прогноз результата через год'; roll(sgnUsd(res));
      $('anResP').textContent='≈ $'+dec(sec*1.08,0); $('anResP').className='pill'; $('anResS').textContent='при 8 % годовых · от $'+dec(sec*.97,0)+' до $'+dec(sec*1.16,0); return; }
    const base=P.k==='all'?INV:val[0], d=sec-base;
    $('anResL').textContent='Результат '+P.l; roll(sgnUsd(d));
    $('anResP').textContent=(d<0?MIN:'+')+dec(Math.abs(d/base*100),1)+' %'; $('anResP').className='pill'+(d<0?' dn':'');
    $('anResS').textContent=P.k==='all'?'от вложенных $'+dec(INV,0):'от $'+dec(base,0)+' '+P.from;
  }
  function anScrubAt(e){
    if(!ageo) return; const rc=$('anChart').getBoundingClientRect(), x=Math.max(0,Math.min(ageo.X(ageo.n-1),e.clientX-rc.left));
    let i=0; { const N=ageo.X(1)-ageo.X(0); i=Math.max(0,Math.min(ageo.n-1,Math.round(x/N))); }
    const v=ageo.val[i], px=ageo.X(i), py=ageo.Y(v);
    $('anChart').classList.add('scrub'); ascrub=true;
    $('anCur').style.left=px+'px'; $('anDot').style.left=px+'px'; $('anDot').style.top=py+'px';
    const tip=$('anTip'); tip.style.left=Math.max(50,Math.min(ageo.W-50,px))+'px';
    $('anRL').setAttribute('width',px+10); $('anRR').setAttribute('x',px); $('anRR').setAttribute('width',ageo.W-px+10);
    if(i!==alast){ const dir=alast==null?0:(v>=ageo.val[alast]?1:-1); alast=i;
      const base=ageo.inv?ageo.inv[i]:ageo.val[0], d=v-base, t=ageo.P.at(i/(ageo.n-1));
      tip.textContent=t+' · $'+dec(v,0);
      $('anResL').textContent='Результат на '+t;
      if(dir) rollText($('anResV'),sgnUsd(d),dir,true); else $('anResV').textContent=sgnUsd(d);
      $('anResP').textContent=sgnPct(d/base*100); $('anResP').className='pill'+(d<0?' dn':'');
      $('anResS').textContent=ageo.inv?'вложено $'+dec(base,0):'от $'+dec(base,0)+' '+ageo.P.from; }
  }
  function anEnd(){ if(!ascrub) return; ascrub=false; alast=null; $('anChart').classList.remove('scrub');
    $('anRL').setAttribute('width',ageo.W+20); $('anRR').setAttribute('x',ageo.W+10); $('anRR').setAttribute('width',0); anHead(1); }
  const anLP=LP($('anChart'),{scrub:e=>anScrubAt(e),end:()=>anEnd()});
  $('anChart').addEventListener('pointerdown',e=>{ if(e.pointerType==='mouse') anScrubAt(e); else { try{ $('anChart').setPointerCapture(e.pointerId); }catch(_){} anLP.down(e); } });
  $('anChart').addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') anScrubAt(e); else anLP.move(e); });
  ['pointerup','pointercancel'].forEach(t=>$('anChart').addEventListener(t,()=>{ anLP.up(); anEnd(); }));
  $('anChart').addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') anEnd(); });
  seg($('anPer'),i=>{ aper=i; if(AP[i].k!=='all'){ fc=false; $('anFc').classList.remove('on'); $('anFc').querySelector('span').textContent='Прогноз на год'; } anDraw(true); anHead(1); });
  $('anFc').onclick=()=>{ fc=!fc; $('anFc').classList.toggle('on',fc); $('anFc').querySelector('span').textContent=fc?'Скрыть прогноз':'Прогноз на год'; anDraw(false); anHead(1);
    if(fc){ const g=$('anFcG'); if(g) g.animate([{opacity:0,transform:'translateX(-12px)'},{opacity:1,transform:'none'}],{duration:500,easing:'cubic-bezier(.2,.9,.3,1)'}); } };

  // donut — «из чего сложился результат»
  const CATS=[{n:'Акции США',sh:30,v:420},{n:'ETF',sh:22,v:236},{n:'Облигации',sh:20,v:152},{n:'Долгосрочные',sh:18,v:94},{n:'Опционы',sh:5,v:-62},{n:'Кэш',sh:5,v:0}];
  const GREYS=['#D2D3D8','#DCDDE1','#E4E5E8','#CDCED3','#E0E1E5','#D7D8DC'];
  let csel=0;
  const pol=(r,a)=>[150+r*Math.sin(a),150-r*Math.cos(a)];
  function dnDraw(anim){
    let a0=0; const R=108, gap=.045, parts=[];
    CATS.forEach((c,i)=>{ const a1=a0+c.sh/100*Math.PI*2; const s=a0+gap/2, e=a1-gap/2; const [x0,y0]=pol(R,s),[x1,y1]=pol(R,e);
      const [tx,ty]=pol(R+32,(a0+a1)/2);
      parts.push('<path class="seg" data-i="'+i+'" d="M'+x0.toFixed(2)+' '+y0.toFixed(2)+' A'+R+' '+R+' 0 '+((e-s)>Math.PI?1:0)+' 1 '+x1.toFixed(2)+' '+y1.toFixed(2)+'" fill="none" stroke="'+(i===csel?(c.v<0?'url(#dnGr)':'url(#dnG)'):GREYS[i])+'" stroke-width="'+(i===csel?34:24)+'" pathLength="100"'+(i===csel?(c.v<0?' filter="url(#dnSr)"':' filter="url(#dnS)"'):'')+'/>'+
        '<text class="pct'+(i===csel?' on':'')+'" x="'+tx.toFixed(1)+'" y="'+(ty+4).toFixed(1)+'" text-anchor="middle">'+c.sh+' %</text>');
      a0=a1; });
    $('dnSvg').innerHTML='<defs><linearGradient id="dnG" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="20" y2="280"><stop offset="0" stop-color="#34DB5E"/><stop offset="1" stop-color="#0B8A33"/></linearGradient>'+
      '<linearGradient id="dnGr" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="20" y2="280"><stop offset="0" stop-color="#FF6B6B"/><stop offset="1" stop-color="#C81E1E"/></linearGradient>'+
      '<filter id="dnS" filterUnits="userSpaceOnUse" x="-20" y="-20" width="340" height="340"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#10C810" flood-opacity=".35"/></filter>'+
      '<filter id="dnSr" filterUnits="userSpaceOnUse" x="-20" y="-20" width="340" height="340"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#E22F2F" flood-opacity=".3"/></filter></defs>'+
      '<circle cx="150" cy="150" r="84" fill="none" stroke="#D1D1D6" stroke-width="1.2" stroke-dasharray=".1 6" stroke-linecap="round"/>'+parts.join('');
    if(anim) $('dnSvg').querySelectorAll('.seg').forEach((p,i)=>p.animate([{strokeDasharray:'0 100'},{strokeDasharray:'100 0'}],{duration:700,delay:i*90,easing:'cubic-bezier(.2,.9,.3,1)',fill:'backwards'}));
    const c=CATS[csel];
    $('dnC').innerHTML='<span class="a">'+c.n+'</span><span class="b" id="dnB">'+(c.v?sgnUsd(c.v).replace(',00',''):'$0')+'</span><span class="c'+(c.v<0?' dn':c.v===0?' nt':'')+'">'+c.sh+' % портфеля<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
    $('dnLg').innerHTML=CATS.map((c,i)=>'<button class="dn-r'+(i===csel?' on':'')+(i===csel&&c.v<0?' neg':'')+'" data-i="'+i+'"><i style="background:'+(i===csel?(c.v<0?'#E22F2F':'#10C810'):GREYS[i])+'"></i><span class="n">'+c.n+'</span><span class="p">'+c.sh+' %</span><span class="v '+(c.v>0?'up':c.v<0?'dn':'')+'">'+(c.v?sgnUsd(c.v).replace(',00',''):'$0')+'</span></button>').join('');
  }
  const dnPick=i=>{ if(i===csel) return; csel=i; dnDraw(false); $('dnC').animate([{opacity:.2,transform:'translate(-50%,-50%) scale(.94)'},{opacity:1,transform:'translate(-50%,-50%)'}],{duration:320,easing:'cubic-bezier(.2,.9,.3,1)'}); };
  $('dnSvg').addEventListener('click',e=>{ const s=e.target.closest('[data-i]'); if(s) dnPick(+s.dataset.i); });
  $('dnLg').addEventListener('click',e=>{ const s=e.target.closest('[data-i]'); if(s) dnPick(+s.dataset.i); });
  $('dnC').onclick=()=>dnPick((csel+1)%CATS.length);

  // bars — «кто принёс результат»
  const TOPS=[['NVDA',342],['MSFT',196],['AAPL',141],['TSLA',98],['AMZN',63]];
  let bsel=0;
  $('bars').innerHTML=TOPS.map((t,i)=>'<button class="bar'+(i===bsel?' on':'')+'" data-i="'+i+'"><span class="lb">'+lgHTML(t[0].toLowerCase())+'<b>'+t[0]+'</b><span>+$'+t[1]+'</span></span><span class="col" data-h="'+Math.round(t[1]/TOPS[0][1]*160)+'"></span></button>').join('');
  const barCap=()=>{ const t=TOPS[bsel]; $('barCap').innerHTML='<b>'+t[0]+'</b> принесла <b>+$'+t[1]+'</b> — '+Math.round(t[1]/840*100)+' % результата.'; };
  barCap();
  $('bars').addEventListener('click',e=>{ const b=e.target.closest('.bar'); if(!b) return; bsel=+b.dataset.i; $('bars').querySelectorAll('.bar').forEach((x,i)=>x.classList.toggle('on',i===bsel)); barCap();
    $('barCap').animate([{opacity:.3},{opacity:1}],{duration:260}); });
  function anGrow(on){
    $('bars').querySelectorAll('.col').forEach((c,i)=>{ c.style.transitionDelay=on?(i*70)+'ms':'0ms'; c.style.height=on?c.dataset.h+'px':'0'; });
    $('stk').classList.toggle('go',on);
  }
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting&&dev.classList.contains('on-an')){ if(en.target.id==='bars') $('bars').querySelectorAll('.col').forEach((c,i)=>{ c.style.transitionDelay=(i*70)+'ms'; c.style.height=c.dataset.h+'px'; }); else $('stk').classList.add('go'); } }),{root:$('anScroll'),threshold:.35});
  io.observe($('bars')); io.observe($('stk'));

  function openAn(){ closeSheet(); $('anScroll').scrollTop=0; anGrow(false); dev.classList.add('on-an'); $('scrAn').setAttribute('aria-hidden','false');
    anDraw(true); anHead(); dnDraw(true); syncStatus(); }
  function closeAn(){ dev.classList.remove('on-an'); $('scrAn').setAttribute('aria-hidden','true'); syncStatus(); }
  $('anBack').onclick=closeAn;
  $('anScroll').addEventListener('scroll',syncStatus,{passive:true});
  { const pa=document.querySelector('.pf-an'), rw=pa.querySelector('.row'); let sx=0, moved=false;
    rw.addEventListener('scroll',()=>{ moved=true; },{passive:true}); pa.addEventListener('pointerdown',()=>{ moved=false; sx=rw.scrollLeft; });
    pa.addEventListener('click',e=>{ e.stopPropagation(); if(moved&&Math.abs(rw.scrollLeft-sx)>4) return; openAn(); }); }

  const start=()=>render();
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(start);
  start();

  // ═══════════════ CRYPTO ═══════════════
  const COINS={
    BTC:{s:'BTC',n:'Bitcoin',p:63770,ch:-0.07,lg:'btc',d:6},
    ETH:{s:'ETH',n:'Ethereum',p:2270.56,ch:2.41,lg:'eth',d:5},
    BNB:{s:'BNB',n:'Binance Coin',p:647.56,ch:-1.12,lg:'bnb',d:4},
    XRP:{s:'XRP',n:'Ripple',p:1.9056,ch:3.85,lg:'xrp',d:2}};
  const HOLD={BTC:{q:0.0284,avg:58210}};
  const LISTS=[['BTC','ETH','BNB','XRP'],['XRP','ETH','BNB','BTC'],['BNB','XRP','BTC','ETH']];
  let CRF=false, crTab=0, cper=0, cscrub=false, cgeo=null, clast=null;
  const cpx=c=>c.p>=100?dec(c.p):dec(c.p,4);
  const cUsd=c=>'$'+cpx(c);
  const qFmt=(q,c)=>{ let s=q.toFixed(c.d); if(s.indexOf('.')>=0) s=s.replace(/0+$/,'').replace(/\.$/,''); return s.replace('.',','); };
  const crVal=()=>Object.keys(HOLD).reduce((a,k)=>a+HOLD[k].q*COINS[k].p,0);
  const crCost=()=>Object.keys(HOLD).reduce((a,k)=>a+HOLD[k].q*HOLD[k].avg,0);
  const crDayD=()=>Object.keys(HOLD).reduce((a,k)=>{ const c=COINS[k], v=HOLD[k].q*c.p; return a+v-v/(1+c.ch/100); },0);
  const pctS=(d,b)=>(d<0?MIN:'+')+dec(Math.abs(d)/(b||1)*100)+' %';
  const chgS=(d,b)=>(d<0?MIN:'+')+'$'+dec(Math.abs(d))+' ('+pctS(d,b)+')';

  // series for the wallet value
  const CP=[
    {w:'За сегодня',n:96,vol:.0045,lab:['03:00','09:00','15:00','21:00'],at:t=>{ const m=Math.round(t*24*60/15)*15; return 'Сегодня, '+String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0'); }},
    {w:'За неделю',n:84,vol:.009,lab:['Пт','Вс','Вт','Чт'],at:t=>dfmt(span(new Date(2026,8,18),new Date(2026,8,25))(t))},
    {w:'За месяц',n:90,vol:.014,lab:['29 авг','5 сен','12 сен','19 сен'],at:t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t))},
    {w:'За год',n:120,vol:.03,lab:['Ноя','Фев','Май','Авг'],at:t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t),true)},
    {w:'За всё время',n:120,vol:.035,lab:['Мар','Июн','Сен','Дек','Мар','Июн'],at:t=>dfmt(span(new Date(2025,2,1),new Date(2026,8,25))(t),true)}];
  CP.forEach((P,k)=>{ const r=rng(700+k); let v=0; const raw=[];
    for(let i=0;i<P.n;i++){ v+=(r()-.5)*2*P.vol+(r()-.5)*P.vol*.6; raw.push(v); }
    const sm=raw.map((x,i)=>{ let a=0,c=0; for(let j=Math.max(0,i-2);j<=Math.min(P.n-1,i+2);j++){ a+=raw[j]; c++; } return a/c; });
    P.raw=sm; });
  function crStart(k){ const v=crVal(); if(k===0) return v-crDayD(); if(k===4) return crCost(); const g=[0,.985,.94,.78][k]; return v*g; }
  function crPts(){ const P=CP[cper], v=crVal(), s0=crStart(cper), n=P.n, a=P.raw[0], b=P.raw[n-1];
    return P.raw.map((x,i)=>{ const t=i/(n-1); return s0+(v-s0)*t+(x-a-(b-a)*t)*v; }); }

  function crDraw(reveal){
    const P=CP[cper], W=$('crChart').clientWidth||390, H=130, IW=W-20, pts=crPts(), n=pts.length;
    if(!crVal()){ $('crSvg').innerHTML='<line x1="0" x2="'+W+'" y1="100" y2="100" stroke="#fff" stroke-opacity=".35" stroke-dasharray="2 5"/>'; $('crXL').innerHTML=''; cgeo=null; return; }
    const mx=Math.max(...pts), mn=Math.min(...pts), Y=p=>28+(mx-p)/((mx-mn)||1)*(H-40), X=i=>i/(n-1)*IW;
    let line=''; for(let i=0;i<n;i++) line+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(pts[i]).toFixed(1);
    const lx=X(n-1), ly=Y(pts[n-1]);
    const area=line+' L'+W+' '+ly.toFixed(1)+' L'+W+' '+H+' L0 '+H+'Z';
    $('crSvg').innerHTML='<defs><linearGradient id="crF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<pattern id="crD" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".85" fill="#fff" fill-opacity=".55"/></pattern>'+
      '<linearGradient id="crMG" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="28" y2="'+H+'"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<mask id="crM" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><rect x="0" y="0" width="'+W+'" height="'+H+'" fill="url(#crMG)"/></mask>'+
      '<filter id="crG" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>'+
      '<clipPath id="crC"><rect id="crR" x="0" y="-20" width="'+W+'" height="'+(H+40)+'"/></clipPath>'+
      '<clipPath id="crCL"><rect id="crRL" x="-10" y="-20" width="'+(W+20)+'" height="'+(H+40)+'"/></clipPath><clipPath id="crCR"><rect id="crRR" x="'+(W+10)+'" y="-20" width="0" height="'+(H+40)+'"/></clipPath>'+
      '<g id="crGG"><path d="'+area+'" fill="url(#crF)"/><path d="'+area+'" fill="url(#crD)" mask="url(#crM)"/>'+
      '<path d="'+line+'" fill="none" stroke="#D9B8FF" stroke-width="5" filter="url(#crG)" opacity=".95"/>'+
      '<path d="'+line+'" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'+
      '<path d="M'+(lx+6).toFixed(1)+' '+ly.toFixed(1)+' H'+W+'" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/></g></defs>'+
      '<g clip-path="url(#crC)"><use href="#crGG" clip-path="url(#crCL)"/><use href="#crGG" clip-path="url(#crCR)" opacity=".3"/>'+
      '<circle id="crLive" cx="'+lx+'" cy="'+ly+'" r="4" fill="#fff" data-lp="1"/></g>';
    $('crXL').innerHTML=P.lab.map((l,i)=>'<span style="left:'+((i+.5)/P.lab.length*100)+'%">'+l+'</span>').join('');
    cgeo={P,W,IW,pts,X,Y};
    if(reveal){ const r=$('crR'), t0=performance.now(); (function f(t){ const k=Math.max(0,Math.min(1,(t-t0)/700)), e=1-Math.pow(1-k,3); r.setAttribute('width',(W*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }
  function setPl(el,d,b){ el.textContent=chgS(d,b); el.classList.toggle('dn',d<0); el.style.color=d<0?'#FF8A8A':'#27F727'; }
  function crHead(dir){
    const v=crVal(), s0=crStart(cper);
    $('crTotL').textContent='Всего в кошельке';
    const t='$'+dec(v); if(dir) rollText($('crTot'),t,dir,true); else $('crTot').textContent=t;
    $('crDayK').textContent=CP[cper].w;
    if(v){ setPl($('crDay'),v-s0,s0); setPl($('crAll'),v-crCost(),crCost()); } else { $('crDay').textContent='—'; $('crAll').textContent='—'; $('crDay').style.color=$('crAll').style.color='rgba(255,255,255,.7)'; }
    $('crFreeV').textContent=fmt2(ACCS[0].bal);
  }
  function crScrubAt(e){
    if(!cgeo) return; const rc=$('crChart').getBoundingClientRect(), x=Math.max(0,Math.min(cgeo.IW,e.clientX-rc.left));
    const n=cgeo.pts.length, i=Math.max(0,Math.min(n-1,Math.round(x/cgeo.IW*(n-1)))), v=cgeo.pts[i], px=cgeo.X(i), py=cgeo.Y(v), s0=cgeo.pts[0];
    $('crChart').classList.add('scrub'); cscrub=true;
    $('crCur').style.left=px+'px'; $('crDot').style.left=px+'px'; $('crDot').style.top=py+'px';
    $('crRL').setAttribute('width',px+10); $('crRR').setAttribute('x',px); $('crRR').setAttribute('width',cgeo.W-px+10);
    if(i!==clast){ const dir=clast==null?0:(v>=cgeo.pts[clast]?1:-1); clast=i;
      $('crTotL').textContent=cgeo.P.at(i/(n-1));
      if(dir) rollText($('crTot'),'$'+dec(v),dir,true); else $('crTot').textContent='$'+dec(v);
      setPl($('crDay'),v-s0,s0); }
  }
  function crEnd(){ if(!cscrub) return; cscrub=false; const was=clast!=null?cgeo.pts[clast]:crVal(); clast=null; $('crChart').classList.remove('scrub');
    $('crRL').setAttribute('width',cgeo.W+20); $('crRR').setAttribute('x',cgeo.W+10); $('crRR').setAttribute('width',0); crHead(crVal()>=was?1:-1); }
  const cch=$('crChart');
  const crLP=LP(cch,{scrub:e=>crScrubAt(e),end:()=>crEnd()});
  cch.addEventListener('pointerdown',e=>{ try{ cch.setPointerCapture(e.pointerId); }catch(_){} if(e.pointerType==='mouse') crScrubAt(e); else crLP.down(e); });
  cch.addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') crScrubAt(e); else crLP.move(e); });
  ['pointerup','pointercancel'].forEach(t=>cch.addEventListener(t,()=>{ crLP.up(); crEnd(); }));
  cch.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') crEnd(); });
  seg($('crPer'),i=>{ cper=i; crDraw(true); crHead(); });

  // rows
  const cLg=c=>'<span class="lg lg-'+c.lg+'"></span>';
  const cChg=c=>{ const d=c.p-c.p/(1+c.ch/100); return (d<0?MIN:'+')+'$'+(c.p>=100?dec(Math.abs(d)):dec(Math.abs(d),4))+' '+(c.ch<0?MIN:'+')+dec(Math.abs(c.ch))+'%'; };
  function crRows(){
    const ks=Object.keys(HOLD).filter(k=>HOLD[k].q>1e-9);
    $('crRows').innerHTML=ks.length?ks.map(k=>{ const c=COINS[k], h=HOLD[k], v=h.q*c.p, d=v-h.q*h.avg;
      return '<button class="pf-row me cr-row" data-cr="'+k+'">'+cLg(c)+'<span class="m"><span class="t">'+c.n+'</span><span class="s">'+qFmt(h.q,c)+' '+k+' · по $'+dec(h.avg)+'</span></span>'+
        '<span class="r"><span class="t" data-crv="'+k+'">$'+dec(v)+'</span><span class="s'+(d<0?' dn':'')+'" data-crd="'+k+'">'+(d<0?MIN:'+')+'$'+dec(Math.abs(d))+' '+pctS(d,h.q*h.avg).replace(' %','%')+'</span></span></button>'; }).join('')
      :'<div class="cr-empty">Пока пусто — купите первую монету</div>';
  }
  function crListHTML(){ return LISTS[crTab].map(k=>{ const c=COINS[k];
    return '<button class="pf-row" data-cr="'+k+'">'+cLg(c)+'<span class="m"><span class="t">'+c.n+'</span><span class="s">'+k+'</span></span>'+
      '<span class="r"><span class="t" data-crp="'+k+'">'+cUsd(c)+'</span><span class="s'+(c.ch<0?' dn':'')+'" data-crc="'+k+'">'+cChg(c)+'</span></span></button>'; }).join(''); }
  function crList(anim){ const l=$('crList'); if(!anim){ l.innerHTML=crListHTML(); return; }
    l.classList.add('sw'); setTimeout(()=>{ l.innerHTML=crListHTML(); l.classList.remove('sw');
      l.querySelectorAll('.pf-row').forEach((r,i)=>r.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:320,delay:i*45,easing:'cubic-bezier(.2,.9,.3,1)',fill:'backwards'})); },180); }
  seg($('crTabs'),i=>{ crTab=i; crList(true); });

  // live prices
  function crTick(){
    Object.values(COINS).forEach(c=>{ const was=c.p, j=(Math.random()-.5)*(c.s==='XRP'?.004:.0022); c.p=Math.max(.0001,c.p*(1+j)); c.ch=((1+c.ch/100)*(c.p/was)-1)*100;
      const dir=c.p>=was?1:-1;
      document.querySelectorAll('[data-crp="'+c.s+'"]').forEach(el=>rollText(el,cUsd(c),dir));
      document.querySelectorAll('[data-crc="'+c.s+'"]').forEach(el=>{ el.textContent=cChg(c); el.classList.toggle('dn',c.ch<0); });
      if(HOLD[c.s]){ const h=HOLD[c.s], v=h.q*c.p, d=v-h.q*h.avg;
        document.querySelectorAll('[data-crv="'+c.s+'"]').forEach(el=>rollText(el,'$'+dec(v),dir,true));
        document.querySelectorAll('[data-crd="'+c.s+'"]').forEach(el=>{ el.textContent=(d<0?MIN:'+')+'$'+dec(Math.abs(d))+' '+pctS(d,h.q*h.avg).replace(' %','%'); el.classList.toggle('dn',d<0); }); } });
    if(dev.classList.contains('cr')&&!cscrub){ crDraw(false); crHead(1); }
    if(dev.classList.contains('on-crb')&&!dev.classList.contains('on-confirm')) cbRender(false);
  }
  setInterval(crTick,3500);

  // navigation
  function goCr(){ closeSheet(); dev.classList.remove('se'); $('scrSe').setAttribute('aria-hidden','true'); dev.classList.add('cr'); $('scrCr').setAttribute('aria-hidden','false'); crRows(); crList(false); crHead(); requestAnimationFrame(()=>crDraw(true)); syncStatus(); }
  function goInv(){ dev.classList.remove('cr','on-crb','on-coin','se'); $('scrSe').setAttribute('aria-hidden','true'); $('scrCr').setAttribute('aria-hidden','true'); syncStatus(); }
  $('tabs').querySelectorAll('button')[1].removeAttribute('data-t');
  $('tabs').querySelectorAll('button')[1].addEventListener('click',goCr);
  $('crTabBar').addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return;
    if(b.dataset.go==='inv') goInv(); else if(b.dataset.go==='se') goSe(); else if(b.dataset.t){ b.animate([{transform:'scale(.9)'},{transform:'none'}],{duration:250}); toast(b.dataset.t); } });
  $('scrCr').querySelector('.orb').onclick=()=>toast('AI-ассистент — скоро');
  $('crScroll').addEventListener('scroll',syncStatus,{passive:true});
  $('crClose').onclick=()=>toast('Закрыть раздел «Крипта»');
  $('crAcc').onclick=()=>toast('Крипто-кошелёк · BTC, ETH, BNB, XRP');
  $('crFree').onclick=()=>toast('Покупаем с Глобального счёта GL 789099');
  $('crMore').onclick=()=>toast('Перевод и вывод монет — скоро');
  $('crHotAll').onclick=()=>toast('Все монеты — в следующей итерации');
  $('crPromo').onclick=()=>toast('Реферальная программа — скоро');
  $('crNewsAll').onclick=$('crNewsAll2').onclick=()=>toast('Лента новостей — в следующей итерации');
  document.querySelectorAll('[data-crs]').forEach(b=>b.onclick=()=>crOpen('BTC',b.dataset.crs));
  $('scrCr').addEventListener('click',e=>{ const r=e.target.closest('[data-cr]'); if(r) goCoin(r.dataset.cr); });
  const CRNEWS=[
    {t:'Биткоин вернулся выше $63 000: что двигает рынок на этой неделе',p:['После коррекции первая криптовалюта снова торгуется выше $63 000. Поддержку рынку оказывают притоки в биржевые фонды и ожидания снижения ставки ФРС.','Аналитики напоминают: волатильность остаётся высокой — дневные колебания в 3–5% для биткоина нормальны.']},
    {t:'Ethereum готовит обновление сети. Почему комиссии могут снизиться',p:['Разработчики Ethereum назначили дату следующего обновления. Оно должно удешевить транзакции в сетях второго уровня.','Для держателей ETH это скорее долгосрочный сигнал: дешевле сеть — больше приложений и спроса на монету.']}];
  document.querySelectorAll('[data-crnews]').forEach(b=>b.onclick=()=>{ const n=CRNEWS[+b.dataset.crnews];
    openSheet('<div class="sh-head center"><span></span><h3>Новости</h3>'+XB+'</div><div class="nw-body"><h2>'+n.t+'</h2><div class="m"><b>Крипто</b> · недавно</div>'+n.p.map(t=>'<p>'+t+'</p>').join('')+'</div>'); });

  // ── buy / sell ──
  const CB={c:'BTC',side:'buy',f:'pay',pay:'',get:'',acc:'gl'};
  const cbA=()=>ACCS.find(a=>a.id===CB.acc)||ACCS[0];
  const cbC=()=>COINS[CB.c];
  const cbBid=()=>cbC().p*(1-.0003), cbAsk=()=>cbC().p*(1+.0003);
  const cbRateP=()=>CB.side==='buy'?cbAsk():cbBid();
  const payIsUsd=()=>CB.side==='buy';
  const decOf=usd=>usd?2:cbC().d;
  const cbNum=s=>s?parseFloat(s.replace(',','.'))||0:0;
  const cbStr=(n,usd)=>{ if(!(n>0)) return ''; let s=n.toFixed(decOf(usd)); if(!usd) s=s.replace(/0+$/,'').replace(/\.$/,''); return s.replace('.',','); };
  const usdPill='<span class="usd"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.6 4.4C9.2 3.6 8.3 3.1 7 3.1c-1.5 0-2.6.8-2.6 1.9 0 2.6 5.3 1.4 5.3 4 0 1.1-1.1 1.9-2.7 1.9-1.4 0-2.4-.6-2.8-1.5M7 1.5v1.6M7 10.9v1.6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg></span>USD';
  const chevS='<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="#8E8E93" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function cbSync(){ // recompute the passive field
    const r=cbRateP(), fee=.0025;
    if(CB.f==='pay'){ const v=cbNum(CB.pay); CB.get=cbStr(payIsUsd()?v*(1-fee)/r:v*r*(1-fee),!payIsUsd()); }
    else { const v=cbNum(CB.get); CB.pay=cbStr(payIsUsd()?v*r/(1-fee):v/r/(1-fee),payIsUsd()); }
  }
  const lastIn={pay:'',get:''};
  function cbNumHTML(el,s,key){ const t=s?(()=>{ const [i,d]=s.split(','); return group(i||'0')+(s.indexOf(',')>=0?','+d:''); })():'0'; const prev=lastIn[key]; el.classList.toggle('empty',!s);
    el.innerHTML=[...t].map(ch=>'<span class="ch">'+ch+'</span>').join('');
    if(s&&prev!==s&&s.length>prev.length&&CB.f===key){ const l=el.lastChild; l&&l.animate([{transform:'translateY(40%)',opacity:0},{transform:'none',opacity:1}],{duration:260,easing:'cubic-bezier(.2,.9,.3,1)'}); }
    lastIn[key]=s;
    const big=el.parentNode, w=big.clientWidth||200; el.style.fontSize=''; if(el.scrollWidth>w-8) el.style.fontSize=Math.max(22,38*(w-8)/el.scrollWidth)+'px'; }
  function cbErr(){ const v=cbNum(CB.pay); const c=cbC();
    if(payIsUsd()){ const bal=cbA().bal; return v>bal+1e-9?'Не хватает '+fmt2(v-bal):''; }
    const h=HOLD[CB.c]?HOLD[CB.c].q:0; return v>h+1e-12?(h?'В кошельке только '+qFmt(h,c)+' '+c.s:'Нет '+c.s+' в кошельке'):''; }
  function cbRender(full){
    const c=cbC(), buy=CB.side==='buy';
    if(full!==false){ cbSync(); }
    else { cbSync(); }
    $('cbVerb').textContent=buy?'Купить':'Продать'; $('cbSym').textContent=c.s;
    $('cbTl').className='lg lg-'+c.lg+' logo';
    $('cbBid').textContent=cUsd({p:cbBid()}); $('cbAsk').textContent=cUsd({p:cbAsk()});
    const ca=cbA(); $('cbChipIc').innerHTML=buy?accIc(ca,true):'<i class="lg lg-'+c.lg+'"></i>';
    $('cbChipN').textContent=buy?ca.sh:'В кошельке'; $('cbChipB').textContent=buy?accShort(ca):qFmt(HOLD[c.s]?HOLD[c.s].q:0,c)+' '+c.s;
    const coinPill='<i class="lg lg-'+c.lg+'"></i>'+c.s;
    $('cbPayC').innerHTML=(buy?usdPill:coinPill)+chevS; $('cbGetC').innerHTML=(buy?coinPill:usdPill)+chevS;
    cbNumHTML($('cbPayN'),CB.pay,'pay'); cbNumHTML($('cbGetN'),CB.get,'get');
    const err=cbErr();
    $('cbPay').classList.toggle('bad',!!err); $('cbPay').classList.toggle('on',CB.f==='pay'); $('cbGet').classList.toggle('on',CB.f==='get');
    $('cbPayS').textContent=err||(buy?'Доллары США':c.n); $('cbPayR').textContent='';
    $('cbGetS').textContent=buy?c.n:'Доллары США'; $('cbRate').textContent='1 '+c.s+' = '+cUsd({p:cbRateP()});
    const pv=cbNum(CB.pay);
    $('cbChips').innerHTML=buy?['$100','$500','$1 000','Всё'].map((t,i)=>'<button data-q="'+['100','500','1000','max'][i]+'">'+t+'</button>').join('')
      :['25%','50%','75%','Всё'].map((t,i)=>'<button data-q="p'+[25,50,75,100][i]+'">'+t+'</button>').join('');
    $('cbChips').querySelectorAll('[data-q]').forEach(x=>{ const q=x.dataset.q; let v=null; if(buy) v=q==='max'?cbA().bal:+q; else { const h=HOLD[c.s]?HOLD[c.s].q:0; v=h*(+q.slice(1))/100; } x.classList.toggle('on',pv>0&&Math.abs(pv-(Math.round(v*(buy?100:1e8))/(buy?100:1e8)))<(buy?.005:1e-8)); });
    $('cbGo').classList.toggle('off',!!err||!(cbNum(CB.pay)>0));
    $('cbGo').textContent='Продолжить';
  }
  function crOpen(sym,side){ CB.c=sym; CB.side=side; CB.f='pay'; CB.pay=''; CB.get=''; lastIn.pay=lastIn.get='';
    $('cbSwap').classList.toggle('r',side==='sell');
    closeSheet(); dev.classList.add('on-crb'); $('scrCrBuy').setAttribute('aria-hidden','false'); cbRender(); syncStatus(); }
  function crBack(){ dev.classList.remove('on-crb'); $('scrCrBuy').setAttribute('aria-hidden','true'); syncStatus(); }
  $('cbBack').onclick=crBack;
  function cbPress(k){ typing(); const f=CB.f, usd=f==='pay'?payIsUsd():!payIsUsd(); let s=CB[f];
    if(k==='del') s=s.slice(0,-1);
    else if(k===','){ if(s.indexOf(',')<0) s=(s||'0')+','; }
    else { const i=s.indexOf(','); if(i>=0&&s.length-i-1>=decOf(usd)) { shake($(f==='pay'?'cbPayN':'cbGetN')); return; }
      if(s.replace(',','').length>=12) return; s=(s==='0'?'':s)+k; }
    CB[f]=s; cbRender(); }
  $('cbKeys').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(b) cbPress(b.dataset.k); });
  $('cbPay').onclick=e=>{ if(e.target.closest('.cb-cur')) return; CB.f='pay'; cbRender(); };
  $('cbGet').onclick=e=>{ if(e.target.closest('.cb-cur')) return; CB.f='get'; cbRender(); };
  $('cbPayC').onclick=$('cbGetC').onclick=()=>toast('Другие пары — в следующей итерации');
  $('cbChip').onclick=()=>{ const c=cbC(); if(CB.side!=='buy'){ toast('В кошельке '+qFmt(HOLD[c.s]?HOLD[c.s].q:0,c)+' '+c.s); return; }
    let pick=CB.acc;
    openSheet('<div class="sh-head center"><span></span><h3 class="lg">Списать с</h3><span></span></div><div class="acc-list">'+
      ACCS.filter(a=>a.id==='gl').map(a=>'<button class="accw'+(a.id===pick?' sel':'')+'" data-acc="'+a.id+'"><span class="acc-in">'+accIc(a)+'<span class="acc-tx"><span class="l1"><b>'+a.n+'</b> · '+a.s+'</span><span class="l2">'+accMoney(a)+'</span></span></span>'+
        '<i class="radio"><svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.2 4.6 4.3 7.6 10.8 1.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>').join('')+
      '</div><div class="sh-cta"><button class="cta" id="cbAccOk">Выбрать</button></div>','acc');
    sheet.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{ pick=b.dataset.acc; sheet.querySelectorAll('.accw').forEach(x=>x.classList.toggle('sel',x===b)); });
    $('cbAccOk').onclick=()=>{ CB.acc=pick; cbRender(); closeSheet(); $('cbChip').animate([{transform:'scale(1.08)'},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'}); }; };
  $('cbSwap').onclick=()=>{ const oldGet=CB.get; CB.side=CB.side==='buy'?'sell':'buy'; CB.f='pay'; CB.pay=oldGet; lastIn.pay=lastIn.get='';
    $('cbSwap').classList.toggle('r',CB.side==='sell');
    ['cbPay','cbGet'].forEach((id,i)=>$(id).animate([{transform:'translateY('+(i?-1:1)*30+'px)',opacity:.3},{transform:'none',opacity:1}],{duration:380,easing:'cubic-bezier(.2,.9,.3,1)'}));
    cbRender(); };
  $('cbChips').addEventListener('click',e=>{ const b=e.target.closest('[data-q]'); if(!b) return; const q=b.dataset.q, c=cbC(); CB.f='pay';
    if(CB.side==='buy') CB.pay=q==='max'?cbStr(cbA().bal,true):q;
    else { const h=HOLD[c.s]?HOLD[c.s].q:0; if(!h){ shake($('cbPay')); toast('Нет '+c.s+' в кошельке'); return; } CB.pay=cbStr(h*(+q.slice(1))/100,false); }
    cbRender(); });
  function cbOrder(){ const c=cbC(), r=cbRateP(), buy=CB.side==='buy', pay=cbNum(CB.pay), get=cbNum(CB.get);
    const usd=buy?pay:get/(1-.0025), fee=Math.round(usd*.0025*100)/100;
    return {c,buy,rate:r,pay,get,usd,fee,q:buy?get:pay}; }
  $('cbGo').onclick=()=>{ const err=cbErr(), o=cbOrder();
    if(err){ shake($('cbPay')); return; }
    if(!(o.pay>0)){ shake($('cbPay')); return; }
    if(o.usd<1){ shake($('cbPay')); toast('Минимум $1'); return; }
    crConfirm(o); };
  document.addEventListener('keydown',e=>{
    if(!dev.classList.contains('on-crb')||dev.classList.contains('on-confirm')||$('sheet').classList.contains('on')) return;
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    let k=null; if(/^[0-9]$/.test(e.key)) k=e.key; else if(e.key===','||e.key==='.') k=','; else if(e.key==='Backspace') k='del';
    else if(e.key==='Escape'){ crBack(); return; } else if(e.key==='Enter'){ $('cbGo').click(); return; }
    else if(e.key==='Tab'){ e.preventDefault(); CB.f=CB.f==='pay'?'get':'pay'; cbRender(); return; }
    if(k){ e.preventDefault(); cbPress(k); const b=$('cbKeys').querySelector('[data-k="'+k+'"]'); if(b){ b.classList.add('pressed'); setTimeout(()=>b.classList.remove('pressed'),120); } } });

  // confirm (shared swipe screen)
  let CRO=null; const CF0={};
  function crConfirm(o){ CRO=o; CRF=true; const c=o.c, a=o.buy?cbA():ACCS[0]; o.acc=a;
    const q=document.querySelector('#scrConfirm .q'); if(!('q' in CF0)){ CF0.q=q.innerHTML; }
    q.removeAttribute('data-book'); q.onclick=null; q.innerHTML='Курс <b class="lv">'+cUsd({p:o.rate})+'</b>';
    $('cfTitle').textContent=(o.buy?'Купить ':'Продать ')+c.s;
    const sl=document.querySelector('#scrConfirm .slogo'); sl.className='slogo lg lg-'+c.lg;
    const rows=o.buy?[['Отдаёте',fmt2(o.pay)],['Получаете','≈ '+qFmt(o.get,c)+' '+c.s],['Курс',cUsd({p:o.rate})],['Комиссия',fmt2(o.fee)],['Спишется с',accIc(a,true)+a.n]]
      :[['Отдаёте',qFmt(o.pay,c)+' '+c.s],['Получаете','≈ '+fmt2(o.get)],['Курс',cUsd({p:o.rate})],['Комиссия',fmt2(o.fee)],['Зачислим на',accIc(a,true)+a.n]];
    $('receipt').innerHTML=rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('cfNote').lastChild.textContent='Курс криптовалюты меняется каждую секунду. Итоговое количество '+c.s+' может немного отличаться от расчётного.';
    $('gz').classList.remove('blocked'); $('gzLbl').textContent='Проведите, чтобы '+(o.buy?'купить':'продать');
    $('knob').setAttribute('aria-label','Проведите вверх, чтобы '+(o.buy?'купить':'продать'));
    // success receipt
    const rr=[[o.buy?'Куплено':'Продано',qFmt(o.q,c)+' '+c.s],['По курсу',cUsd({p:o.rate})],['Комиссия',fmt2(o.fee)],[o.buy?'Списано с':'Зачислено на',accIc(a,true)+a.sh]];
    $('rcpt').innerHTML=rr.map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('doneH').textContent='Заявка отправлена'; $('sttT').textContent='В работе';
    $('doneTxt').textContent='Обмениваем по лучшему курсу — это займёт пару секунд';
    $('fin').textContent='К крипто-кошельку';
    resetKnob(false); $('scrConfirm').classList.remove('success');
    dev.classList.add('crf','on-confirm'); $('scrConfirm').setAttribute('aria-hidden','false'); syncStatus();
  }
  function crRestore(){ if(!CRF) return; CRF=false; dev.classList.remove('crf');
    const q=document.querySelector('#scrConfirm .q'); if('q' in CF0){ q.innerHTML=CF0.q; q.setAttribute('data-book',''); q.onclick=()=>openBook(); }
    const sl=document.querySelector('#scrConfirm .slogo'); sl.className='slogo';
    $('cfTitle').textContent=(SELL()?'Продать':'Купить')+' AAPL'; $('fin').textContent='К портфелю'; }
  function crApply(o){ const c=o.c, h=HOLD[c.s];
    if(o.buy){ if(h){ h.avg=(h.q*h.avg+o.q*o.rate)/(h.q+o.q); h.q=+(h.q+o.q).toFixed(8); } else HOLD[c.s]={q:+o.q.toFixed(8),avg:o.rate}; const aa=o.acc||ACCS[0]; aa.bal=Math.max(0,aa.bal-o.pay-o.fee); aa.raw=aa.cur==='USD'?aa.bal:aa.bal*RATE; }
    else if(h){ h.q=Math.max(0,+(h.q-o.q).toFixed(8)); if(h.q<1e-9) delete HOLD[c.s]; ACCS[0].bal+=o.get; ACCS[0].raw=ACCS[0].bal; } }
  function crFinish(){ const o=CRO; goBack(); dev.classList.remove('on-coin'); $('scrCoin').setAttribute('aria-hidden','true'); crBack(); if(!dev.classList.contains('cr')) goCr(); if(o) crApply(o);
    crRows(); crHead(1); crDraw(false);
    const sc=$('crScroll'); setTimeout(()=>{ sc.scrollTo({top:Math.max(0,$('crPf').parentNode.offsetTop-60),behavior:'smooth'});
      const r=o&&document.querySelector('#crRows [data-cr="'+o.c.s+'"]'); if(r){ r.classList.remove('flash'); void r.offsetWidth; r.classList.add('flash'); } },380);
    setTimeout(()=>{ resetDone(); },450);
    if(o) setTimeout(()=>toast((o.buy?'Куплено ':'Продано ')+qFmt(o.q,o.c)+' '+o.c.s),520); }
  function crOpSheet(){ const o=CRO; if(!o) return; const c=o.c, ex=$('done').classList.contains('exec'), a=o.acc||ACCS[0];
    const t=new Date(), hm=d=>String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
    const st=[['ok','Заявка создана',hm(t)],['ok','Обмен по курсу '+cUsd({p:o.rate}),'Крипто-биржа · '+hm(t)],
      ex?['ok',o.buy?'Исполнено — монеты в кошельке':'Исполнено — деньги на счёте',qFmt(o.q,c)+' '+c.s]:['cur','Исполняется','Обычно — пара секунд']];
    const rows=[['Операция',(o.buy?'Покупка ':'Продажа ')+c.s],['Количество',qFmt(o.q,c)+' '+c.s],['Курс',cUsd({p:o.rate})],['Сумма',fmt2(o.buy?o.pay:o.get)],['Комиссия',fmt2(o.fee)],
      [o.buy?'Счёт':'Зачисление',a.n],['Номер операции','№ '+OPNO]];
    openSheet(head('Операция')+'<div class="op-body"><div class="op-tl">'+st.map(x=>'<div class="op-st '+x[0]+'"><i></i><span><b>'+x[1]+'</b><span>'+x[2]+'</span></span></div>').join('')+'</div>'+
      '<div class="op-card">'+rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('')+'</div></div>'); }

  // ═══ COIN PAGE ═══
  let CN='BTC', cnPer=2, cnCandles=false, cnScrub=false, cnGeo=null;
  const CNP=[
    {w:'за сегодня',lab:['03:00','09:00','15:00','21:00'],n:96,vol:.006,at:t=>{ const m=Math.round(t*24*60/15)*15; return String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0'); }},
    {w:'за месяц',lab:['29 авг','5 сен','12 сен','19 сен'],n:90,vol:.018,g:.06,at:t=>dfmt(span(new Date(2026,7,25),new Date(2026,8,25))(t))},
    {w:'за 3 месяца',lab:['Июл','Авг','Сен','Окт','Ноя','Дек'],n:130,vol:.03,g:-.04,at:t=>dfmt(span(new Date(2026,5,25),new Date(2026,8,25))(t))},
    {w:'за 6 месяцев',lab:['Апр','Май','Июн','Июл','Авг','Сен'],n:130,vol:.04,g:.18,at:t=>dfmt(span(new Date(2026,2,25),new Date(2026,8,25))(t))},
    {w:'за год',lab:['Ноя','Янв','Мар','Май','Июл','Сен'],n:130,vol:.06,g:.42,at:t=>dfmt(span(new Date(2025,8,25),new Date(2026,8,25))(t),true)},
    {w:'за всё время',lab:['2018','2020','2022','2024','2026'],n:140,vol:.09,g:9,at:t=>{ const d=span(new Date(2017,0,1),new Date(2026,8,25))(t); return MON[d.getMonth()]+' '+d.getFullYear(); }}];
  const cnSeries={};
  function cnSer(sym,k){ const key=sym+k; if(cnSeries[key]) return cnSeries[key]; const P=CNP[k], c=COINS[sym];
    const r=rng(900+k*17+sym.charCodeAt(0)*3+sym.charCodeAt(1)), n=P.n, w=[0];
    for(let i=1;i<n;i++) w.push(w[i-1]+(r()-.5)*2+(r()<.07?(r()-.5)*5:0));
    const wn=w[n-1], end=c.p, gk=P.g?P.g*(.55+((sym.charCodeAt(0)*7+sym.charCodeAt(2))%9)/9)*(k===2&&sym.charCodeAt(0)%2?-1:1):0, start=k===0?c.p/(1+c.ch/100):end/(1+gk);
    const pts=w.map((x,i)=>{ const t=i/(n-1), tr=start*Math.pow(end/start,t); return {x:t*390,p:tr*(1+(x-t*wn)*P.vol/3)}; });
    const vol=Array.from({length:120},()=>4+Math.round(Math.pow(r(),2.2)*20));
    return cnSeries[key]={pts,base:pts[0].p,vol}; }
  const cfmt=p=>p>=100?dec(p):dec(p,4);
  function cnDraw(reveal){
    const S=cnSer(CN,cnPer), P=CNP[cnPer], c=COINS[CN], el=$('cnChart'), W=el.clientWidth||390, sx=W/390, T=18, B=100;
    S.pts[S.pts.length-1].p=c.p;
    const ps=S.pts.map(q=>q.p), mx=Math.max(...ps,S.base), mn=Math.min(...ps,S.base);
    const Y=p=>T+(mx-p)/((mx-mn)||1)*(B-T), X=x=>x*sx, by=Y(S.base), off=Math.min(1,Math.max(0,(by-T)/(B-T)));
    const line=S.pts.map((q,i)=>(i?'L':'M')+X(q.x).toFixed(1)+' '+Y(q.p).toFixed(1)).join(' ');
    const area=line+' L'+W.toFixed(1)+' '+by.toFixed(1)+' L0 '+by.toFixed(1)+'Z';
    let bars=''; for(let i=0;i*4<W;i++){ const h=S.vol[i%S.vol.length]; bars+='<rect x="'+(i*4+1)+'" y="'+(117-h)+'" width="2" height="'+h+'" rx="1"/>'; }
    let body='';
    if(cnCandles){ const n=S.pts.length, g=Math.max(2,Math.round(n/40)), cw=Math.max(3,Math.min(7,W/(n/g)*.55));
      for(let i=0;i<n;i+=g){ const sg=S.pts.slice(Math.max(0,i-1),i+g); const o=sg[0].p,cl=sg[sg.length-1].p,h=Math.max(...sg.map(q=>q.p)),l=Math.min(...sg.map(q=>q.p));
        const cx=X((sg[0].x+sg[sg.length-1].x)/2), col=cl>=o?'#10C810':'#E22F2F', y1=Y(Math.max(o,cl)), y2=Y(Math.min(o,cl));
        body+='<line x1="'+cx.toFixed(1)+'" x2="'+cx.toFixed(1)+'" y1="'+Y(h).toFixed(1)+'" y2="'+Y(l).toFixed(1)+'" stroke="'+col+'" stroke-width="1"/><rect x="'+(cx-cw/2).toFixed(1)+'" y="'+y1.toFixed(1)+'" width="'+cw.toFixed(1)+'" height="'+Math.max(1.5,y2-y1).toFixed(1)+'" rx="1" fill="'+col+'"/>'; } }
    else body='<path d="'+area+'" fill="url(#cnUp)" clip-path="url(#cnCU)"/><path d="'+area+'" fill="url(#cnDn)" clip-path="url(#cnCD)"/><path d="'+line+'" fill="none" stroke="url(#cnLn)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>';
    $('cnSvg').innerHTML='<defs><linearGradient id="cnLn" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+T+'" y2="'+B+'"><stop offset="'+off+'" stop-color="#10C810"/><stop offset="'+off+'" stop-color="#E22F2F"/></linearGradient>'+
      '<linearGradient id="cnUp" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+T+'" y2="'+by+'"><stop offset="0" stop-color="#10C810" stop-opacity=".4"/><stop offset="1" stop-color="#10C810" stop-opacity="0"/></linearGradient>'+
      '<linearGradient id="cnDn" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+by+'" y2="'+B+'"><stop offset="0" stop-color="#E22F2F" stop-opacity=".04"/><stop offset="1" stop-color="#E22F2F" stop-opacity=".3"/></linearGradient>'+
      '<clipPath id="cnCU"><rect x="0" y="0" width="'+W+'" height="'+by+'"/></clipPath><clipPath id="cnCD"><rect x="0" y="'+by+'" width="'+W+'" height="'+(132-by)+'"/></clipPath>'+
      '<clipPath id="cnCS"><rect id="cnR" x="0" y="-10" width="'+W+'" height="150"/></clipPath>'+
      '<g id="cnG"><g fill="rgba(99,99,102,.4)">'+bars+'</g>'+body+'</g></defs>'+
      '<line x1="0" x2="'+W+'" y1="'+by+'" y2="'+by+'" stroke="#6D6D6D" stroke-width="1" stroke-dasharray="1 3"/>'+
      '<use href="#cnG" class="dim"/><use href="#cnG" clip-path="url(#cnCS)"/>';
    $('cnBase').textContent=cfmt(S.base); $('cnBase').style.top=(by-8)+'px';
    const at=y=>mx-(y-T)/(B-T)*(mx-mn);
    $('cnHi').textContent=cfmt(at(30.5)); $('cnHi').style.top='24px'; $('cnLo').textContent=cfmt(at(84.5)); $('cnLo').style.top='78px';
    $('cnHi').style.visibility=Math.abs(by-30.5)<14?'hidden':''; $('cnLo').style.visibility=Math.abs(by-84.5)<14?'hidden':'';
    $('cnX').innerHTML=P.lab.map((l,i)=>'<span style="left:'+((i+.5)/P.lab.length*100)+'%">'+l+'</span>').join('');
    cnGeo={S,P,W,X,Y};
    if(reveal){ const r=$('cnR'), t0=performance.now(); (function f(t){ const k=Math.min(1,(t-t0)/650), e=1-Math.pow(1-k,3); r.setAttribute('width',(W*e).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); }
  }
  function cnSetCh(v,base,label){ const d=v-base, p=d/base*100;
    $('cnCh').classList.toggle('dn',d<0); $('cnChD').textContent=(d<0?MIN:'+')+dec(Math.abs(d),Math.abs(d)>=1?2:4)+' ('+(d<0?MIN:'+')+dec(Math.abs(p))+'%)'; $('cnChW').textContent=label; }
  function cnHead(dir){ const c=COINS[CN], S=cnSer(CN,cnPer), t='$'+cfmt(c.p);
    if(dir){ rollText($('cnPx'),t,dir); rollText($('cnNavPx'),t,dir,true); } else { $('cnPx').textContent=t; $('cnNavPx').textContent=t; }
    cnSetCh(c.p,S.base,CNP[cnPer].w); }
  function cnScrubAt(e){ if(!cnGeo) return; const rc=$('cnChart').getBoundingClientRect(), x=Math.max(0,Math.min(cnGeo.W,e.clientX-rc.left)), pts=cnGeo.S.pts, gx=x/cnGeo.W*390;
    let lo=0,hi=pts.length-1; while(hi-lo>1){ const m=(lo+hi)>>1; if(pts[m].x<gx) lo=m; else hi=m; }
    const q=Math.abs(pts[lo].x-gx)<Math.abs(pts[hi].x-gx)?pts[lo]:pts[hi], px=cnGeo.X(q.x), py=cnGeo.Y(q.p);
    $('cnChart').classList.add('scrub'); cnScrub=true; $('cnR').setAttribute('width',px.toFixed(1));
    $('cnCur').style.left=px+'px'; const dot=$('cnDot'); dot.style.left=px+'px'; dot.style.top=py+'px'; dot.style.background=q.p>=cnGeo.S.base?'#10C810':'#E22F2F';
    const tip=$('cnTip'); tip.textContent=cnGeo.P.at(q.x/390); tip.style.left=Math.max(34,Math.min(cnGeo.W-34,px))+'px';
    $('cnPx').textContent='$'+cfmt(q.p); cnSetCh(q.p,cnGeo.S.base,cnGeo.P.at(q.x/390)); }
  function cnEnd(){ if(!cnScrub) return; cnScrub=false; $('cnChart').classList.remove('scrub'); $('cnR').setAttribute('width',cnGeo.W); cnHead(); }
  const cnc=$('cnChart');
  const cnLP=LP(cnc,{scrub:e=>cnScrubAt(e),end:()=>cnEnd()});
  cnc.addEventListener('pointerdown',e=>{ try{ cnc.setPointerCapture(e.pointerId); }catch(_){} if(e.pointerType==='mouse') cnScrubAt(e); else cnLP.down(e); });
  cnc.addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') cnScrubAt(e); else cnLP.move(e); });
  ['pointerup','pointercancel'].forEach(t=>cnc.addEventListener(t,()=>{ cnLP.up(); cnEnd(); }));
  cnc.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') cnEnd(); });
  seg($('cnPer'),i=>{ cnPer=i; cnDraw(true); cnHead(); });
  $('cnCndl').onclick=()=>{ cnCandles=!cnCandles; $('cnCndl').classList.toggle('on',cnCandles); cnDraw(true); };
  function cnPos(){ const c=COINS[CN], h=HOLD[CN];
    const rows=[['Количество',h?qFmt(h.q,c)+' '+CN:'0'],['Стоимость',h?'$'+dec(h.q*c.p):'$0,00']];
    if(h){ const d=h.q*c.p-h.q*h.avg; rows.push(['Средняя цена','$'+cfmt(h.avg)],['Результат','<span style="color:'+(d<0?'#E22F2F':'#10A810')+'">'+(d<0?MIN:'+')+'$'+dec(Math.abs(d))+'</span>']); }
    $('cnPosG').innerHTML=rows.map(r=>'<div><div class="k">'+r[0]+'</div><div class="v">'+r[1]+'</div></div>').join(''); }
  function cnSim(){ $('cnSim').innerHTML=Object.keys(COINS).filter(k=>k!==CN).slice(0,3).map(k=>{ const c=COINS[k];
    return '<button class="tl" data-cn="'+k+'"><i class="lg lg-'+c.lg+'"></i><span class="t">'+k+'</span><span class="p">'+cUsd(c)+'</span><span class="c '+(c.ch<0?'dn':'up')+'">'+(c.ch<0?'▼ ':'▲ ')+dec(Math.abs(c.ch))+' %</span></button>'; }).join(''); }
  function cnNews(){ const i=CN==='ETH'?1:0, n=CRNEWS[i];
    $('cnNews').innerHTML='<button class="it" data-crnews2="'+i+'"><span class="row1"><span>'+n.t+'</span><i class="lg lg-'+(i?'eth':'btc')+'"></i></span><span class="row2"><span class="m"><b>Крипто</b> · '+(i?'3 часа':'1 час')+' назад</span><span class="rd">Читать →</span></span></button>'; }
  $('cnNews').addEventListener('click',e=>{ const b=e.target.closest('[data-crnews2]'); if(b) document.querySelector('[data-crnews="'+b.dataset.crnews2+'"]').click(); });
  function cnFill(){ const c=COINS[CN];
    ['cnLg','cnNavLg'].forEach(id=>$(id).className='lg lg-'+c.lg); $('cnSym').textContent=CN; $('cnNavSym').textContent=CN; $('cnName').textContent=c.n;
    cnPos(); cnSim(); cnNews(); cnHead(); }
  function goCoin(sym){ CN=sym; closeSheet(); cnFill(); $('cnScroll').scrollTop=0; $('cnNav').classList.remove('scrolled','mini');
    dev.classList.add('on-coin'); $('scrCoin').setAttribute('aria-hidden','false'); syncStatus(); requestAnimationFrame(()=>cnDraw(true)); }
  function coinBack(){ dev.classList.remove('on-coin'); $('scrCoin').setAttribute('aria-hidden','true'); syncStatus(); }
  $('cnBack').onclick=coinBack;
  $('cnSim').addEventListener('click',e=>{ const b=e.target.closest('[data-cn]'); if(!b) return;
    const sc=$('cnScroll'); sc.scrollTo({top:0,behavior:'smooth'}); CN=b.dataset.cn; setTimeout(()=>{ cnFill(); cnDraw(true); },200); });
  $('cnScroll').addEventListener('scroll',()=>{ const y=$('cnScroll').scrollTop; $('cnNav').classList.toggle('scrolled',y>6); $('cnNav').classList.toggle('mini',y>150); },{passive:true});
  $('cnStar').onclick=()=>{ const on=$('cnStar').classList.toggle('on'); toast(on?CN+' в избранном':'Убрано из избранного'); };
  $('cnBell').onclick=()=>toast('Алерты по '+CN+' — скоро');
  $('cnPosH').onclick=()=>toast(HOLD[CN]?'История сделок по '+CN+' — скоро':'Купите '+CN+', чтобы открыть позицию');
  $('cnSend').onclick=()=>toast(HOLD[CN]?'Перевод '+CN+' на другой кошелёк — скоро':'Нет '+CN+' для отправки');
  $('cnRecv').onclick=()=>toast('Адрес для пополнения '+CN+' — скоро');
  $('cnSimH').onclick=()=>toast('Каталог монет — скоро');
  $('cnNewsAll').onclick=()=>toast('Лента новостей — в следующей итерации');
  $('cnBuy').onclick=()=>crOpen(CN,'buy');
  $('cnSell').onclick=()=>crOpen(CN,'sell');
  let cnLast=0; setInterval(()=>{ if(!dev.classList.contains('on-coin')) return; const p=COINS[CN].p, d=p>=cnLast?1:-1; cnLast=p; if(!cnScrub){ cnDraw(false); cnHead(d); } cnPos(); },3500);


  // ═══ sticky top bar ═══
  function topThr(id){ const sc=$(id), h=(id==='scrHome'&&dev.classList.contains('nb'))?$('nbHero'):(sc.querySelector('.hm-dark .hm-head')||sc.querySelector('.hm-head')), t=sc.querySelector('.hm-top'); return h&&t?h.offsetHeight-t.offsetHeight:440; }
  function stickTop(p,scrId,screenId,tot,day,dayK,orig){
    const sc=$(scrId), top=$(p+'Top');
    const fill=()=>{ $(p+'TopV').textContent=$(tot).textContent; const f=$(day), i=$(p+'TopD'); i.innerHTML=dayK+' <b>'+f.querySelector('b').textContent+'</b>'; };
    const up=()=>{ const y=sc.scrollTop, lt=(screenId==='scrHome'&&dev.classList.contains('hsoft'))||y>=topThr(screenId)-2; top.classList.toggle('mini',y>150); top.classList.toggle('sc',y>8); top.classList.toggle('lt',lt); $(p+'XT').classList.toggle('dk',!lt); if(y>150) fill(); };
    sc.addEventListener('scroll',up,{passive:true});
    new MutationObserver(()=>{ if(top.classList.contains('mini')) fill(); }).observe($(tot),{childList:true,characterData:true,subtree:true});
    $(p+'AccT').onclick=()=>{ if(top.classList.contains('mini')) sc.scrollTo({top:0,behavior:'smooth'}); else $(orig[0]).click(); };
    $(p+'XT').onclick=()=>$(orig[1]).click();
    up(); }
  stickTop('hm','hmScroll','scrHome','hmTot','hmFree','Свободно для торговли',['hmAcc','hmX']);
  stickTop('cr','crScroll','scrCr','crTot','crFree','Доступно для покупки',['crAcc','crClose']);

  // ═══════════════ SEARCH ═══════════════
  const SE={p:0,q:'',cat:''};
  const sgP=c=>(c<0?MIN:'+')+dec(Math.abs(c))+'%';
  const triU='<svg width="9" height="6" viewBox="0 0 13 8" style="margin-right:3px"><path d="M6.5 0 13 8H0Z" fill="currentColor"/></svg>';
  const triD='<svg width="9" height="6" viewBox="0 0 13 8" style="margin-right:3px"><path d="M6.5 8 13 0H0Z" fill="currentColor"/></svg>';
  const chg=c=>'<span class="'+(c<0?'se-dn':'se-up')+'" style="display:inline-flex;align-items:center">'+(c<0?triD:triU)+dec(Math.abs(c))+'%</span>';
  const aaplCh=()=>(midPx()/PREV-1)*100;
  let areaN=0;
  function area(seed,up){ const r=rng(seed), n=9, W=160, H=44; let v=0; const a=[];
    for(let i=0;i<n;i++){ v+=(r()-.5)*1.6+(up?.35:-.35); a.push(v); }
    const mx=Math.max(...a), mn=Math.min(...a), Y=x=>6+(mx-x)/((mx-mn)||1)*(H-18), X=i=>i/(n-1)*(W-14), P=a.map((x,i)=>[X(i),Y(x)]);
    let d='M'+P[0][0]+' '+P[0][1].toFixed(1);
    for(let i=0;i<n-1;i++){ const p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(n-1,i+2)];
      d+=' C'+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+' '+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+' '+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+' '+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1); }
    const col=up?'#10C810':'#E22F2F', id='ar'+(areaN++), e=P[n-1]; const ex=e[0];
    return '<svg class="ar" viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none"><defs><linearGradient id="'+id+'" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity=".22"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient></defs>'+
      '<path d="'+d+' L'+e[0].toFixed(1)+' '+H+' L0 '+H+'Z" fill="url(#'+id+')"/><path d="'+d+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>'+
      '<i class="ad" style="left:calc('+(e[0]/W*100)+'% - 4px);bottom:'+((H-e[1])/H*44-4).toFixed(1)+'px;background:'+col+'"></i>'; }
  function spark(seed,up,w,h,dots){ const r=rng(seed), n=42; let v=0; const a=[];
    for(let i=0;i<n;i++){ v+=(r()-.5)*2+(r()<.08?(r()-.5)*6:0)+(up?.12:-.12); a.push(v); }
    const mx=Math.max(...a), mn=Math.min(...a), Y=x=>4+(mx-x)/((mx-mn)||1)*(h-8), X=i=>i/(n-1)*w;
    const col=up?'#10C810':'#E22F2F', d=a.map((x,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(x).toFixed(1)).join('');
    return '<svg class="sp" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none">'+(dots!==false?'<line x1="0" x2="'+w+'" y1="'+Y(a[0]).toFixed(1)+'" y2="'+Y(a[0]).toFixed(1)+'" stroke="#8E8E93" stroke-width="1" stroke-dasharray="1 3" vector-effect="non-scaling-stroke"/>':'')+
      '<path d="'+d+'" fill="none" stroke="'+col+'" stroke-width="1.6" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>'; }
  const LGK=['aapl','tsla','nvda','msft','amzn','meta','goog','ko','nflx','visa','csco','btc','eth','bnb','xrp','gpt','cld','qqq','spx','ndx','gold','oil'];
  const MONO={IBRX:'#6C4DF6',CRWV:'#0E1B4D',PLTR:'#1C1C1E',TRI:'#FF8000',AMD:'#111',FIG:'#F24E1E',SMCI:'#2E7D32',AMX:'#D32F2F',EURUSD:'#1565C0',TSM:'#C62828'};
  const TKLG={AAPL:'aapl',TSLA:'tsla',NVDA:'nvda',MSFT:'msft',AMZN:'amzn',META:'meta',GOOGL:'goog',KO:'ko',NFLX:'nflx',V:'visa',CSCO:'csco',BTC:'btc',ETH:'eth',BNB:'bnb',XRP:'xrp',GPT:'gpt',CLD:'cld',QQQ:'qqq',Gold:'gold',US100:'ndx','BTC/USD':'btc'};
  function ico(t,cls){ const k=TKLG[t]||(LGK.includes(t)?t:null);
    if(k) return '<i class="lg lg-'+k+' '+(cls||'')+'">'+(k==='qqq'?'QQQ':'')+'</i>';
    const key=t.replace('/',''); return '<i class="lg se-mono '+(cls||'')+'" style="background:'+(MONO[key]||'#8E8E93')+'">'+t.replace('/','').slice(0,key==='EURUSD'?1:2).replace('E','€')+'</i>'; }
  const INS=[
    ['AAPL','Apple Inc.','aapl','Акции',null,null,'эпл яблоко apple'],['TSLA','Tesla','tsla','Акции',329.6,-2.38,'тесла'],['NVDA','NVIDIA','nvda','Акции',178.2,.79,'нвидиа'],
    ['MSFT','Microsoft','msft','Акции',412.3,.93,'майкрософт'],['AMZN','Amazon','amzn','Акции',229.6,1.99,'амазон'],['META','Meta Platforms','meta','Акции',741.25,.26,'мета фейсбук'],
    ['GOOGL','Alphabet','goog','Акции',350.87,-.08,'гугл google'],['KO','Coca-Cola','ko','Акции',71.05,.6,'кока кола'],['NFLX','Netflix','nflx','Акции',1204.1,1.12,'нетфликс'],
    ['V','Visa','visa','Акции',344.2,-.31,'виза'],['CSCO','Cisco','csco','Акции',66.8,.44,'циско'],
    ['QQQ','Invesco QQQ','qqq','ETF',602.4,.12,'nasdaq насдак'],['IVV','iShares Core S&P 500','ishr','ETF',690.1,.07,'s&p'],['VOO','Vanguard S&P 500','vang','ETF',634.8,.07,'вангард s&p'],
    ['BTC','Bitcoin','btc','Крипто',null,null,'биткоин биток'],['ETH','Ethereum','eth','Крипто',null,null,'эфир эфириум'],['BNB','Binance Coin','bnb','Крипто',null,null,'бинанс'],['XRP','Ripple','xrp','Крипто',null,null,'рипл'],
    ['GPT','OpenAI','gpt','IPO',null,.04,'chatgpt опенаи'],['CLD','Anthropic','cld','IPO',null,.76,'claude клод антропик']];
  { const at=INS.findIndex(x=>x[0]==='CSCO')+1; const SSI=['AAPL','TSLA','NVDA','MSFT','AMZN','META','GOOGL','V'].map(t=>{ const b=INS.find(x=>x[0]===t); return [t+'/100',b[1]+' · 1/100',b[2],'Single Stock ETF',b[4],b[5],b[6]+' сингл single 1/100 доля',t]; }); INS.splice(at,0,...SSI); }
  const insPx0=i=>i[0]==='AAPL'?midPx():COINS[i[0]]?COINS[i[0]].p:i[4];
  const insPx=i=>i[7]?r2(insPx0(INS.find(x=>x[0]===i[7]))*SSF()):insPx0(i);
  const insCh=i=>{ const j=i[7]?INS.find(x=>x[0]===i[7]):i; return j[0]==='AAPL'?aaplCh():COINS[j[0]]?COINS[j[0]].ch:j[5]; };
  function seGo(sym){ $('seIn').blur();
    if(sym==='AAPL/100'){ stMode('ss'); goStock(); return; }
    if(/\/100$/.test(sym)){ toast('В прототипе открывается только Apple'); return; }
    if(sym==='AAPL'){ stMode('stock'); goStock(); return; }
    if(COINS[sym]){ goCoin(sym); return; }
    toast('В прототипе открываются AAPL и крипта'); }

  // market cards
  const MK=[{n:'S&P 500',s:'Индекс США',v:6887.63,c:.07,seed:31,lg:'spx'},{n:'Nasdaq 100',s:'Техиндекс',v:24966.49,c:.12,seed:32,lg:'ndx'},
    {n:'Bitcoin',s:'BTC · до 03:45',coin:'BTC',seed:33,lg:'btc'},{n:'Золото',s:'XAU / USD',v:2641.2,c:.34,seed:34,lg:'gold'},{n:'Нефть Brent',s:'Фьючерс',v:74.2,c:-.82,seed:35,lg:'oil'}];
  const mkCard=m=>{ const v=m.coin?COINS[m.coin].p:m.v, c=m.coin?COINS[m.coin].ch:m.c;
    return '<button class="se-mk" data-go="'+(m.coin||'')+'"><span class="n">'+m.n+(m.lg?'<i class="lg lg-'+m.lg+'"></i>':'')+'</span><span class="s">'+m.s+'</span>'+spark(m.seed,c>=0,120,50)+
      '<span class="v"'+(m.coin?' data-sev="'+m.coin+'"':'')+'>'+(m.coin?'$':'')+dec(v)+'</span><span class="c">'+chg(c)+'</span></button>'; };
  const MOV=[['IBRX',12.4],['CRWV',8.7],['PLTR',5.6],['TRI',3.1],['AMD',2.9],['AAPL',null],['FIG',-4.2],['SMCI',-6.1],['AMX',-1.3],['TSLA',-2.38]];
  const movHTML=()=>MOV.map(m=>{ const c=m[0]==='AAPL'?aaplCh():m[1]; return '<button data-sym="'+m[0]+'">'+ico(m[0])+m[0]+' <span>'+chg(c)+'</span></button>'; }).join('');
  const SNEWS=[
    {t:'Bitcoin преодолел отметку $100 000 на фоне притока институциональных инвесторов',img:true,p:['Первая криптовалюта обновила исторический максимум. Спрос подогревают биржевые фонды: за неделю в них пришло больше $3 млрд.','Аналитики предупреждают о высокой волатильности: после резкого роста возможна коррекция на 10–15%.']},
    {t:'Ethereum обновился до версии 3.0: что изменилось для пользователей',p:['Обновление снизило комиссии в сети и ускорило подтверждение транзакций.','Для держателей ETH это долгосрочный позитив: дешевле сеть — больше приложений и спроса на монету.']},
    {t:'Solana обогнала Ethereum по объёму транзакций за сутки',p:['Сеть Solana обработала рекордный объём операций благодаря мем-токенам и DeFi-приложениям.','Эксперты считают, что конкуренция блокчейнов продолжит снижать стоимость переводов.']},
    {t:'Центробанк рассматривает регулирование стейблкоинов',p:['Регулятор готовит правила для выпуска и обращения стейблкоинов.','Для инвесторов это может означать больше прозрачности и защиты при работе с криптовалютой.']}];
  const newsHTML=list=>'<div class="cd nws se-news"><div class="ttl">Новости</div><div>'+list.map((n,i)=>'<button class="it" data-sn="'+i+'"><span class="row1"><span>'+n.t+'</span>'+(n.img?'<img src="'+(document.querySelector('[data-news="0"] img')||{}).src+'" alt="">':'')+'</span><span class="row2"><span class="m"><b>Крипто</b> · 2 часа назад</span><span class="rd">Читать →</span></span></button>').join('')+
    '</div><button class="all" data-t="Лента новостей — в следующей итерации">Посмотреть новости</button></div>';

  // heatmaps
  const SECT=[
    {n:'Технологии',h:[64,56,26],rows:[[['NVDA',.61,5],['AAPL',null,4.6],['GOOGL',-.08,3.2],['GOOG',-.12,3]],[['MSFT',.93,4],['AMZN',1.99,3.4],['TSM',4.5,3],['META',.26,2.8],['AVGO',-1.95,2.6]],[['TCEHY',-2.4,1.3],['ASML',1.1,1.1],['MU',-.5,.9],['ORCL',3.2,1.1],['BABA',-.9,1.1],['AMD',2.9,1.1]]]},
    {n:'Финансы',h:[64,56,26],rows:[[['JPM',.84,5],['V',-.31,4],['MA',.12,3.6]],[['BAC',1.45,3],['WFC',2.1,2.6],['GS',-1.2,2.4],['MS',.4,2.2],['AXP',-.6,2]],[['BLK',.3,1],['C',2.4,1],['SCHW',-.2,1],['PYPL',-2.7,1],['COF',.7,1],['USB',-.1,1]]]},
    {n:'Энергетика',h:[64,56,26],rows:[[['XOM',-.9,5],['CVX',-1.4,4],['COP',-2.2,3]],[['SLB',-.4,3],['EOG',.3,2.6],['OXY',-2.6,2.4],['PSX',.8,2.2],['MPC',1.2,2]],[['KMI',.2,1],['WMB',.5,1],['VLO',1.6,1],['HAL',-1.1,1],['DVN',-3.1,1],['BKR',.1,1]]]},
    {n:'Здоровье',h:[64,56,26],rows:[[['LLY',1.8,5],['UNH',-2.3,4],['JNJ',.2,3.4]],[['ABBV',.6,3],['MRK',-.7,2.8],['TMO',.3,2.4],['ABT',1.1,2.2],['PFE',-1.6,2]],[['AMGN',.4,1],['DHR',-.3,1],['ISRG',2.2,1],['GILD',.9,1],['CVS',-3.2,1],['MDT',.1,1]]]}];
  const CSECT={n:'Криптовалюты',h:[88,58,28],rows:[[['BTC',null,5],['ETH',null,2.6]],[['XRP',null,2],['BNB',null,1.8],['SOL',3.4,1.6],['DOGE',-2.1,1.2]],[['TON',1.2,1],['ADA',-.8,1],['TRX',.4,1],['AVAX',4.1,1],['LINK',-1.5,1],['DOT',.6,1]]]};
  const tCh=t=>t[1]!=null?t[1]:t[0]==='AAPL'?aaplCh():COINS[t[0]]?COINS[t[0]].ch:0;
  function heat(c){ if(c>=2) return ['#10B23A','#fff']; if(c>=1) return ['#3CC95B','#fff']; if(c>=.2) return ['#BDEBC6','#0B4A1C'];
    if(c>-.2) return ['#ECEEF0','#3A3A3C']; if(c>-1) return ['#F9D3D3','#7A1717']; if(c>-2) return ['#EE7B7B','#fff']; return ['#D92C2C','#fff']; }
  const secCh=S=>{ let a=0,w=0; S.rows.forEach(r=>r.forEach(t=>{ a+=tCh(t)*t[2]; w+=t[2]; })); return a/w; };
  function tileHTML(t,h,xs){ const c=tCh(t), [bg,fg]=heat(c);
    return '<div class="se-tl'+(xs?' xs':'')+'" data-sym="'+t[0]+'" style="flex:'+t[2]+' 1 0;height:'+h+'px;background:'+bg+';color:'+fg+'">'+t[0]+'<small>'+sgP(c)+'</small></div>'; }
  function hmapHTML(S,i,big){ const c=secCh(S);
    return '<div class="se-hmap'+(big?' full':'')+'" data-sec="'+i+'"><div class="hd"><b>'+S.n+'<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5 13 10l-5.5 5.5" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></b><span data-secch>'+chg(c)+'</span></div>'+
      S.rows.map((r,k)=>'<div class="rw">'+r.map(t=>tileHTML(t,S.h[k],k===2)).join('')+'</div>').join('')+'</div>'; }
  const IND=[['Ставка ФРС','4,25%',-.25,' п.п.',41],['Инфляция США','2,9%',-.1,' п.п.',42],['Доходность 10Y','4,12%',.03,' п.п.',43],['Индекс доллара','101,34',-.21,'%',44],['Нефть Brent','$74,20',-.82,'%',45],['Золото','$2 641',.34,'%',46]];
  const CAL=[['15','окт','Инфляция в США (CPI)','Прогноз 2,8%','Важно',''],['29','окт','Решение ФРС по ставке','Рынок ждёт −0,25 п.п.','Важно',''],['30','окт','Отчёт Apple за квартал','После закрытия рынка','AAPL','g'],['1','ноя','Рынок труда США (NFP)','Прогноз +150 тыс.','','']];


  // ── news on home + catalog teaser in search ──
  const nwOpen=i=>{ const n=SNEWS[i]; openSheet('<div class="sh-head center"><span></span><h3>Новости</h3>'+XB+'</div><div class="nw-body"><h2>'+n.t+'</h2><div class="m"><b>Крипто</b> · 2 часа назад</div>'+n.p.map(x=>'<p>'+x+'</p>').join('')+'</div>'); };
  { const hn=document.createElement('div'); hn.id='hmNews'; const nx=$('fpHB').nextElementSibling; nx.parentNode.insertBefore(hn,nx); }
  $('hmNews').innerHTML=newsHTML(SNEWS);
  $('hmNews').addEventListener('click',e=>{ const sn=e.target.closest('[data-sn]'); if(sn){ nwOpen(+sn.dataset.sn); return; } const a=e.target.closest('.all'); if(a&&window.__DS){ window.__DS.open('news'); return; } if(a) toast('Лента новостей — в следующей итерации'); });
  function seCatHTML(){ const g=$('catG'); const tiles=[...g.children].map((el,i)=>[el,i]).filter(x=>x[0].classList.contains('tile')&&!x[0].hasAttribute('data-promo')&&getComputedStyle(x[0]).display!=='none').slice(0,4);
    return '<div class="se-h">Каталог<button class="se-ctall" data-ctgo>Все</button></div><div class="cat-g se-catg">'+tiles.map(([el,i])=>el.outerHTML.replace(/^<div class="tile/,'<div data-ci="'+i+'" class="tile').replace(' id="catAapl"','').replace(' id="catAaplC"','').replace(' id="catAaplS"','')).join('')+'</div>'; }
  function seRender(){
    const P=$('sePane'); let h='';
    if(SE.p===0){
      h+='<div class="se-h">Маркет</div><div class="se-car">'+MK.map(mkCard).join('')+'</div>';
      h+=seCatHTML();
      h+='<div class="se-h">Top movers<small>за сегодня</small></div><div class="se-mv">'+movHTML()+'</div>';
      h+='<button class="se-promo" data-go="BTC"><b>BTC x2.4 за неделю</b><span>Начни зарабатывать сейчас</span><i class="lg-btc"></i></button>';
      h+='<div class="se-card"><button class="hd" data-t="Все IPO — скоро">Новые размещения<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#AEAEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="sb">Инвестируйте в новые компании и фонды</div>'+
        '<div class="se-ipo">'+[['gpt','GPT',.04],['goog','GOOGL',1.15],['cld','CLD',.76]].map(x=>'<button data-sym="'+x[1]+'"><i class="lg lg-'+x[0]+'"></i><span class="t">'+x[1]+'</span><span class="c">'+chg(x[2])+'</span></button>').join('')+'</div></div>';
    } else if(SE.p===1){
      h+='<div class="se-car se-hcar">'+SECT.map((S,i)=>hmapHTML(S,i)).join('')+'</div>';
      h+='<div class="se-h">Макро-показатели</div><div class="se-ind">'+IND.map(x=>'<div><div class="k">'+x[0]+'</div><div class="v">'+x[1]+'</div><div class="c '+(x[2]<0?'dn':'up')+'">'+(x[2]<0?MIN:'+')+dec(Math.abs(x[2]))+x[3]+'</div>'+area(x[4],x[2]>=0)+'</div>').join('')+'</div>';
      h+='<div class="se-h">Маркет</div><div class="se-car">'+MK.map(mkCard).join('')+'</div>';
      h+='<div class="se-h">Календарь<small>важные события</small></div><div class="se-cal">'+CAL.map(e=>'<button class="ev" data-t="'+e[2]+' — '+e[0]+' '+e[1]+'"><span class="d"><b>'+e[0]+'</b><span>'+e[1]+'</span></span><span class="m"><b>'+e[2]+'</b><span>'+e[3]+'</span></span>'+(e[4]?'<span class="ctg '+e[5]+'">'+e[4]+'</span>':'')+'</button>').join('')+'</div>';
      h+='<div class="se-h">Top movers<small>за сегодня</small></div><div class="se-mv">'+movHTML()+'</div>';
    } else {
      h+=hmapHTML(CSECT,9,true);
      h+='<div class="se-h">Монеты</div><div class="se-list">'+Object.values(COINS).map(c=>'<button class="pf-row" data-sym="'+c.s+'"><span class="lg lg-'+c.lg+'"></span><span class="m"><span class="t">'+c.n+'</span><span class="s">'+c.s+'</span></span><span class="r"><span class="t" data-crp="'+c.s+'">'+cUsd(c)+'</span><span class="s'+(c.ch<0?' dn':'')+'" data-crc="'+c.s+'">'+cChg(c)+'</span></span></button>').join('')+'</div>';
      h+='<button class="se-promo" data-go="BTC"><b>BTC x2.4 за неделю</b><span>Начни зарабатывать сейчас</span><i class="lg-btc"></i></button>';
    }
    P.innerHTML='<div class="se-pane">'+h+'</div>';
  }
  $('seTabs').addEventListener('click',e=>{ const b=e.target.closest('[data-p]'); if(!b||+b.dataset.p===SE.p) return; SE.p=+b.dataset.p;
    $('seTabs').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); seRender(); });

  // focus panel / results
  function seFocusHTML(){
    const rec=['AAPL','NVDA','BTC','TSLA'];
    return '<div class="se-mv one">'+rec.map(t=>{ const i=INS.find(x=>x[0]===t); return '<button data-sym="'+t+'"><svg class="rc" width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.2" stroke="#8E8E93" stroke-width="1.5"/><path d="M8 4.8V8l2.2 1.4" stroke="#8E8E93" stroke-width="1.5" stroke-linecap="round"/></svg>'+ico(t)+t+' <span>'+chg(insCh(i))+'</span></button>'; }).join('')+
      ['Акции','ETF','Крипто','IPO'].map(c=>'<button data-cat="'+c+'" class="ct">'+c+'</button>').join('')+'</div>'; }
  function seFocusHTMLold(){
    const rec=[['AAPL','Apple Inc.','aapl',51],['NVDA','NVIDIA','nvda',52],['BTC','Bitcoin','btc',53]];
    return '<div class="se-h">Недавние запросы</div><div class="se-car">'+rec.map(r=>{ const i=INS.find(x=>x[0]===r[0]), c=insCh(i);
      return '<button class="se-mk" data-sym="'+r[0]+'"><span class="n">'+r[0]+'<i class="lg lg-'+r[2]+'"></i></span><span class="s">'+r[1]+'</span>'+spark(r[3],c>=0,120,50)+'<span class="v">$'+dec(insPx(i))+'</span><span class="c">'+chg(c)+'</span></button>'; }).join('')+'</div>'+
      '<div class="se-h">Популярные рынки</div><div class="se-mv" style="grid-template-rows:auto">'+[['Gold',.34],['US100',.12],['BTC/USD',COINS.BTC.ch,'BTC'],['AAPL',aaplCh(),'AAPL'],['EUR/USD',-.08]].map(x=>'<button data-sym="'+(x[2]||x[0])+'">'+ico(x[0])+x[0]+' <span>'+chg(x[1])+'</span></button>').join('')+'</div>'+
      '<div class="se-h">Категории рынков</div><div class="se-cat">'+[['Акции','<path d="M5 20V12M10 20V7M15 20v-5M20 20V4" stroke="#0F0F0F" stroke-width="2.2" stroke-linecap="round"/>'],['ETF','<circle cx="12" cy="12" r="8" stroke="#0F0F0F" stroke-width="2"/><path d="M12 4v8l6 4" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"/>'],
        ['Крипто','<circle cx="12" cy="12" r="8.5" stroke="#0F0F0F" stroke-width="2"/><path d="M10 8h3a2 2 0 0 1 0 4h-3zm0 4h3.5a2 2 0 0 1 0 4H10zM10 8v8" stroke="#0F0F0F" stroke-width="1.6" stroke-linejoin="round"/>'],['IPO','<path d="M12 3c3 2 5 5 5 9l-2 3H9l-2-3c0-4 2-7 5-9Z" stroke="#0F0F0F" stroke-width="2" stroke-linejoin="round"/><path d="M10 19l2 2 2-2" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"/>']]
        .map(x=>'<button data-cat="'+x[0]+'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none">'+x[1]+'</svg>'+x[0]+'</button>').join('')+'</div>';
  }
  const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  function hl(txt,q){ if(!q) return esc(txt); const i=txt.toLowerCase().indexOf(q); return i<0?esc(txt):esc(txt.slice(0,i))+'<mark class="hl">'+esc(txt.slice(i,i+q.length))+'</mark>'+esc(txt.slice(i+q.length)); }
  function seResults(){
    const q=SE.q.trim().toLowerCase(), cat=SE.cat;
    const list=INS.filter(i=>PMODE==='tok'?i[3]!=='Single Stock ETF':!(i[3]==='Акции'||i[3]==='ETF')).filter(i=>cat?i[3]===cat:(i[0].toLowerCase().includes(q)||i[1].toLowerCase().includes(q)||i[6].includes(q)));
    if(!list.length){ $('seRes').innerHTML='<div class="se-empty"><b>Ничего не нашли</b>Попробуйте тикер или название: AAPL, Tesla, биткоин</div>'; return; }
    const groups={}; list.forEach(i=>(groups[i[3]]=groups[i[3]]||[]).push(i));
    $('seRes').innerHTML=Object.keys(groups).map(g=>'<div class="se-res-h">'+g+'</div><div class="se-list">'+groups[g].map(i=>{ const p=insPx(i), c=insCh(i);
      return '<button class="pf-row" data-sym="'+i[0]+'"><span class="lg lg-'+i[2]+(i[7]?' ssl':'')+'">'+(i[2]==='qqq'?'QQQ':'')+(i[7]?'<img class="k3d" src="'+document.querySelector('#scrKind [data-kind="ss"] .k3d').src+'" alt="">':'')+'</span><span class="m"><span class="t">'+hl(i[0],q)+'</span><span class="s">'+hl(i[1],q)+'</span></span>'+
        '<span class="r"><span class="t">'+(p!=null?'$'+(p>=100||i[7]?dec(p):dec(p,4)):'Скоро')+'</span><span class="s'+(c<0?' dn':'')+'">'+(c!=null?sgP(c):'IPO')+'</span></span></button>'; }).join('')+'</div>').join('');
  }
  function seMode(){ const on=$('seFw').classList.contains('se-on'), q=SE.q.trim()||SE.cat, st=$('seFocus');
    const was=$('seMain').hidden; $('seMain').hidden=!!q; $('seRes').hidden=!q;
    if(!q&&was) $('sePane').firstChild&&$('sePane').firstChild.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:320,easing:'cubic-bezier(.2,.9,.3,1)'});
    $('seField').classList.toggle('has',!!SE.q);
    const show=on&&!q; if(show&&!st.classList.contains('on')) st.innerHTML=seFocusHTML(); st.classList.toggle('on',show);
    if(q) seResults(); }
  $('seIn').addEventListener('focus',()=>{ $('seFw').classList.add('se-on'); seMode(); });
  $('seIn').addEventListener('input',()=>{ SE.q=$('seIn').value; SE.cat=''; seMode(); });
  $('seIn').addEventListener('keydown',e=>{ if(e.key==='Enter'){ const f=$('seRes').querySelector('[data-sym]'); if(f) f.click(); } if(e.key==='Escape') $('seCancel').click(); });
  $('seClr').onclick=e=>{ e.preventDefault(); SE.q=''; SE.cat=''; $('seIn').value=''; $('seIn').focus(); seMode(); };
  $('seCancel').onclick=()=>{ SE.q=''; SE.cat=''; $('seIn').value=''; $('seIn').blur(); $('seFw').classList.remove('se-on'); seMode(); };
  $('scrSe').addEventListener('click',e=>{
    const t=e.target;
    const cat=t.closest('[data-cat]'); if(cat){ SE.cat=cat.dataset.cat; SE.q=''; $('seIn').value=cat.dataset.cat; $('seField').classList.add('has'); seMode(); return; }
    if(t.closest('[data-ctgo]')){ goCt(); return; }
    const ci=t.closest('[data-ci]'); if(ci){ const o=$('catG').children[+ci.dataset.ci]; if(o.dataset.ssk==='aapl') stMode('ss'); if(o.hasAttribute('data-other')){ toast('В прототипе открывается только Apple'); return; } if(t.closest('[data-buy]')&&!(window.__nbPre&&__nbPre())){ setSide('buy'); dev.classList.add('on-stock'); goOrder(); syncStatus(); return; } goStock(); return; }
    const sn=t.closest('[data-sn]'); if(sn){ const n=SNEWS[+sn.dataset.sn]; openSheet('<div class="sh-head center"><span></span><h3>Новости</h3>'+XB+'</div><div class="nw-body"><h2>'+n.t+'</h2><div class="m"><b>Крипто</b> · 2 часа назад</div>'+n.p.map(x=>'<p>'+x+'</p>').join('')+'</div>'); return; }
    const sec=t.closest('.se-hmap .hd'); if(sec){ toast('Сектор «'+sec.querySelector('b').textContent+'» — подробный разбор скоро'); return; }
    const s=t.closest('[data-sym]'); if(s){ seGo(s.dataset.sym); return; }
    const g=t.closest('[data-go]'); if(g&&!g.closest('.tabs')){ if(g.dataset.go) seGo(g.dataset.go); else toast(g.querySelector('.n').textContent+' — карточка индекса скоро'); return; }
    const d=t.closest('[data-t]'); if(d&&!d.closest('.tabs')&&!d.classList.contains('orb')) toast(d.dataset.t);
  });
  $('seScroll').addEventListener('scroll',()=>$('seNav').classList.toggle('sc',$('seScroll').scrollTop>4),{passive:true});
  $('seScroll').addEventListener('touchmove',e=>{ if(document.activeElement===$('seIn')&&!e.target.closest('.se-mv,.se-car')) $('seIn').blur(); },{passive:true});
  $('seIn').addEventListener('blur',()=>{ setTimeout(()=>{ if(document.activeElement!==$('seIn')&&!SE.q&&!SE.cat){ $('seFw').classList.remove('se-on'); seMode(); } },120); });
  $('seX').onclick=()=>toast('Закрыть поиск');
  $('scrSe').querySelector('.orb').onclick=()=>toast('AI-ассистент — скоро');

  // live: nudge heatmap tiles & prices
  setInterval(()=>{ if(!dev.classList.contains('se')||dev.classList.contains('on-stock')||dev.classList.contains('on-coin')) return;
    const all=[...SECT,CSECT].flatMap(S=>S.rows.flat()).filter(t=>t[1]!=null);
    for(let k=0;k<5;k++){ const t=all[Math.floor(Math.random()*all.length)]; t[1]=Math.round((t[1]+(Math.random()-.5)*.5)*100)/100; }
    document.querySelectorAll('#sePane .se-tl').forEach(el=>{ const sym=el.dataset.sym, S=[...SECT,CSECT].find(S=>S.rows.flat().some(t=>t[0]===sym)), t=S.rows.flat().find(t=>t[0]===sym), c=tCh(t), [bg,fg]=heat(c), txt=sgP(c), sm=el.querySelector('small');
      if(sm.textContent!==txt){ sm.textContent=txt; el.style.background=bg; el.style.color=fg; el.classList.remove('fl'); void el.offsetWidth; el.classList.add('fl'); } });
    document.querySelectorAll('#sePane .se-hmap').forEach(m=>{ const i=+m.dataset.sec, S=i===9?CSECT:SECT[i]; m.querySelector('[data-secch]').innerHTML=chg(secCh(S)); });
    document.querySelectorAll('#sePane [data-sev]').forEach(el=>rollText(el,'$'+dec(COINS[el.dataset.sev].p),1,true));
  },3000);

  // tabs
  function goSe(){ closeSheet(); if(window.__DS){ window.__DS.open('srch'); return; } dev.classList.remove('cr','on-crb','on-coin'); $('scrCr').setAttribute('aria-hidden','true'); dev.classList.add('se'); $('scrSe').setAttribute('aria-hidden','false'); seRender(); $('seScroll').scrollTop=0; syncStatus(); seFocusIn(); }
  function seFocusIn(){ const i=$('seIn'); try{ i.focus({preventScroll:true}); }catch(_){ i.focus(); } }
  { const hb=$('tabs').querySelectorAll('button')[2]; hb.removeAttribute('data-t'); hb.addEventListener('click',goSe);
    const cb=$('crTabBar').querySelectorAll('button')[2]; cb.removeAttribute('data-t'); cb.dataset.go='se'; }
  $('seTabBar').addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return;
    if(b.dataset.go==='inv') goInv(); else if(b.dataset.go==='cr') goCr(); else if(b.classList.contains('on')){ $('seScroll').scrollTo({top:0,behavior:'smooth'}); seFocusIn(); } else if(b.dataset.t){ b.animate([{transform:'scale(.9)'},{transform:'none'}],{duration:250}); toast(b.dataset.t); } });


  // Nova icon set (Line / Border): NV[name] = inner markup, nvI(name,size,strokeWidth) = full <svg>
  const NV={"Setting": "<path d=\"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14.2703 4.54104C14.2703 3.68995 13.5803 3 12.7292 3H11.2706C10.4195 3 9.72953 3.68995 9.72953 4.54104C9.72953 5.19575 9.30667 5.76411 8.73133 6.07658C8.64137 6.12544 8.55265 6.17624 8.46522 6.22895C7.90033 6.56948 7.19241 6.65124 6.6199 6.32367C5.87282 5.89621 4.92082 6.15129 4.48754 6.89501L3.78312 8.10415C3.35155 8.84495 3.60624 9.79549 4.35038 10.2213C4.92043 10.5474 5.2042 11.1992 5.19031 11.8558C5.1893 11.9037 5.18879 11.9518 5.18879 12C5.18879 12.0482 5.1893 12.0963 5.19032 12.1443C5.20421 12.8009 4.92043 13.4526 4.3504 13.7787C3.60628 14.2045 3.35159 15.155 3.78315 15.8958L4.48759 17.105C4.92086 17.8487 5.87286 18.1038 6.61993 17.6763C7.19243 17.3488 7.90034 17.4305 8.46523 17.7711C8.55266 17.8238 8.64138 17.8746 8.73133 17.9234C9.30667 18.2359 9.72953 18.8042 9.72953 19.459C9.72953 20.3101 10.4195 21 11.2706 21H12.7292C13.5803 21 14.2703 20.3101 14.2703 19.459C14.2703 18.8042 14.6931 18.2359 15.2685 17.9234C15.3584 17.8746 15.4471 17.8238 15.5346 17.7711C16.0994 17.4305 16.8074 17.3488 17.3799 17.6763C18.1269 18.1038 19.0789 17.8487 19.5122 17.105L20.2167 15.8958C20.6482 15.1551 20.3935 14.2045 19.6494 13.7788C19.0794 13.4526 18.7956 12.8009 18.8095 12.1443C18.8105 12.0963 18.811 12.0482 18.811 12C18.811 11.9518 18.8105 11.9037 18.8095 11.8558C18.7956 11.1992 19.0794 10.5474 19.6494 10.2213C20.3936 9.79548 20.6482 8.84494 20.2167 8.10414L19.5123 6.89501C19.079 6.15128 18.127 5.8962 17.3799 6.32366C16.8074 6.65123 16.0995 6.56948 15.5346 6.22894C15.4471 6.17624 15.3584 6.12543 15.2685 6.07658C14.6931 5.76411 14.2703 5.19575 14.2703 4.54104Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Wallet": "<path d=\"M3 7C3 4.8 4.8 3 7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M12 12C12 10.3 13.3 9 15 9H20C20.6 9 21 9.4 21 10V14C21 14.6 20.6 15 20 15H15C13.3 15 12 13.7 12 12Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M15 12L15.1 12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Percent": "<path d=\"M19 5L5 19\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7 10C8.7 10 10 8.7 10 7C10 5.3 8.7 4 7 4C5.3 4 4 5.3 4 7C4 8.7 5.3 10 7 10Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17 20C18.7 20 20 18.7 20 17C20 15.3 18.7 14 17 14C15.3 14 14 15.3 14 17C14 18.7 15.3 20 17 20Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Bar-chart_up": "<path d=\"M3 7C3 4.8 4.8 3 7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M8 14L8 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M16 8L16 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M12 11L12 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Bar-chart_down": "<path d=\"M3 7C3 4.8 4.8 3 7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M16 14L16 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M8 8L8 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M12 11L12 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "user_1": "<path d=\"M5 19C5 16.8 6.8 15 9 15H15C17.2 15 19 16.8 19 19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19Z\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"7\" r=\"4\" stroke=\"currentColor\" stroke-width=\"2\"/>", "user_2": "<circle cx=\"12\" cy=\"7\" r=\"4\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M16 21H8C5.8 21 3.8 19.1 5 17.2C6.1 15.3 8.3 14 12 14C15.7 14 17.9 15.3 19 17.2C20.2 19.1 18.2 21 16 21Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Star": "<path d=\"M11.1432 4.4237C11.5319 3.77788 12.4682 3.77788 12.8568 4.4237L14.744 7.55954C14.8836 7.79155 15.1114 7.95702 15.3752 8.01812L18.9407 8.8439C19.675 9.01397 19.9644 9.90444 19.4703 10.4736L17.0711 13.2375C16.8935 13.442 16.8066 13.7097 16.83 13.9795L17.1464 17.6257C17.2116 18.3766 16.4541 18.927 15.7601 18.6329L12.3901 17.2052C12.1408 17.0996 11.8593 17.0996 11.6099 17.2052L8.23996 18.6329C7.54592 18.927 6.78845 18.3766 6.85362 17.6257L7.17006 13.9795C7.19347 13.7097 7.10648 13.442 6.92897 13.2375L4.52978 10.4736C4.03567 9.90444 4.325 9.01397 5.05931 8.8439L8.62485 8.01812C8.88865 7.95702 9.1164 7.79155 9.25603 7.55954L11.1432 4.4237Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Plus": "<path d=\"M4 12H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M12 4L12 20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Minus": "<path d=\"M4 12L20 12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "More-horizontal": "<path d=\"M12 13C12.6 13 13 12.6 13 12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12C11 12.6 11.4 13 12 13Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M19 13C19.6 13 20 12.6 20 12C20 11.4 19.6 11 19 11C18.4 11 18 11.4 18 12C18 12.6 18.4 13 19 13Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 13C5.6 13 6 12.6 6 12C6 11.4 5.6 11 5 11C4.4 11 4 11.4 4 12C4 12.6 4.4 13 5 13Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Send": "<path d=\"M18.8951 3.61502C19.7248 3.37794 20.492 4.1451 20.2549 4.97489L16.2553 18.9736C15.8267 20.4736 13.823 20.7554 12.9973 19.4317L10.1999 14.947C9.87715 14.4296 9.44039 13.9928 8.92298 13.6701L4.43823 10.8726C3.11455 10.047 3.39632 8.04323 4.89636 7.61465L18.8951 3.61502Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.1924 13.6777L13.7279 10.1422\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Message 2": "<path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M9 14H15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M9 10H11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "file-text": "<path d=\"M9 17H15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M9 13H15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M9 9H10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M5 6C5 4.3 6.3 3 8 3H13.2C13.7 3 14.2 3.2 14.6 3.6L18.4 7.4C18.8 7.8 19 8.3 19 8.8V18C19 19.7 17.7 21 16 21H8C6.3 21 5 19.7 5 18V6Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M13 3V5C13 7.2 14.8 9 17 9H19\" stroke=\"currentColor\" stroke-width=\"2\"/>", "clock_circle": "<path d=\"M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 8L12 12L14 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Pie-chart_1": "<path d=\"M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M12 3.99998C12 3.4477 12.4491 2.99424 12.998 3.05548C13.8372 3.14912 14.6609 3.36062 15.4442 3.68507C16.5361 4.13736 17.5282 4.8003 18.364 5.63602C19.1997 6.47175 19.8626 7.4639 20.3149 8.55583C20.6394 9.33912 20.8509 10.1627 20.9445 11.002C21.0057 11.5509 20.5523 12 20 12L13 12C12.4477 12 12 11.5523 12 11L12 3.99998Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Category": "<path d=\"M3 6C3 4.3 4.3 3 6 3H7C8.7 3 10 4.3 10 6V7C10 8.7 8.7 10 7 10H6C4.3 10 3 8.7 3 7V6Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M14 6C14 4.3 15.3 3 17 3H18C19.7 3 21 4.3 21 6V7C21 8.7 19.7 10 18 10H17C15.3 10 14 8.7 14 7V6Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M14 17C14 15.3 15.3 14 17 14H18C19.7 14 21 15.3 21 17V18C21 19.7 19.7 21 18 21H17C15.3 21 14 19.7 14 18V17Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M3 17C3 15.3 4.3 14 6 14H7C8.7 14 10 15.3 10 17V18C10 19.7 8.7 21 7 21H6C4.3 21 3 19.7 3 18V17Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Search": "<path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21 21L17 17\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Sliders_horizontal": "<path d=\"M9 17L3 17\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M21 7H15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M3.01 7L3 7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M21.01 17L21 17\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M14.9337 14C16.5814 14 17.9172 15.3431 17.9172 17C17.9172 18.6569 16.5814 20 14.9337 20C13.286 20 11.9503 18.6569 11.9503 17C11.9503 15.3431 13.286 14 14.9337 14Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M8.96682 4C10.6145 4 11.9502 5.34315 11.9502 7C11.9502 8.65685 10.6145 10 8.96682 10C7.31912 10 5.9834 8.65685 5.9834 7C5.9834 5.34315 7.31912 4 8.96682 4Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "info_circle": "<path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 16V12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 8H12.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Share": "<path d=\"M16 7L12 3L8 7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 3V15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M19 13V18C19 19.7 17.7 21 16 21H8C6.3 21 5 19.7 5 18V13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Calendar": "<path d=\"M3 8C3 5.8 4.8 4 7 4H17C19.2 4 21 5.8 21 8V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V8Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M8 3V6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M17 10H7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M17 17L16 17\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M16 3V6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "lock": "<path d=\"M5 13C5 11.3 6.3 10 8 10H16C17.7 10 19 11.3 19 13V18C19 19.7 17.7 21 16 21H8C6.3 21 5 19.7 5 18V13Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M15 10V6C15 4.3 13.7 3 12 3C10.3 3 9 4.3 9 6V10\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Shield_done": "<path d=\"M5 6.5C5 5.6 5.6 4.8 6.5 4.6L11.5 3.2C11.8 3.1 12.2 3.1 12.5 3.2L17.5 4.6C18.4 4.8 19 5.6 19 6.5V11.9C19 14.5 17.8 16.9 15.6 18.4L13.2 20.2C12.5 20.7 11.5 20.7 10.8 20.2L8.4 18.4C6.2 16.9 5 14.5 5 11.9V6.5Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M15 9L11.3 13L9 11.2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Copy": "<path d=\"M10 13C10 11.3 11.3 10 13 10H18C19.7 10 21 11.3 21 13V18C21 19.7 19.7 21 18 21H13C11.3 21 10 19.7 10 18V13Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M14 6.2V6C14 4.3 12.7 3 11 3H6C4.3 3 3 4.3 3 6V11C3 12.7 4.3 14 6 14H6.2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Scan": "<path d=\"M15 3H16C18.2 3 20 4.8 20 7V8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M15 21H16C18.2 21 20 19.2 20 17V13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M9 3H8C5.8 3 4 4.8 4 7V8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M9 21H8C5.8 21 4 19.2 4 17V13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M2 13L22 13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>", "Edit": "<path d=\"M16.6158 4.58063C16.9876 4.20886 17.4918 4 18.0176 4C18.5434 4 19.0476 4.20886 19.4194 4.58063C19.7911 4.9524 20 5.45664 20 5.98239C20 6.50814 19.7911 7.01238 19.4194 7.38415L8.52146 18.2821C8.00882 18.7947 7.3665 19.1584 6.66317 19.3342L4 20L4.66579 17.3368C4.84163 16.6335 5.2053 15.9912 5.71794 15.4785L16.6158 4.58063Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 7L17 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M13 20L20 20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Check_circle": "<path d=\"M3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M16 9L11 15L8 12.3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "bell": "<path d=\"M12 3C8.4 3 6.7 5.5 6.7 8.6V10.3C6.7 11.4 5.7 12.4 4.9 13.1C4.4 13.6 4 14.3 4 15.1C4 16.2 4.8 17 5.8 17H18.2C19.2 17 20 16.2 20 15.1C20 14.3 19.6 13.6 19.1 13.1C18.3 12.4 17.3 11.4 17.3 10.3V8.6C17.3 5.5 15.6 3 12 3Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M14 20C13.6 20.6 12.8 21 12 21C11.2 21 10.4 20.6 10 20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Star_circle": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"9\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M11.6 7.7C11.8 7.4 12.2 7.4 12.4 7.7L13.5 9.6C13.6 9.7 13.7 9.8 13.9 9.8L15.9 10.3C16.3 10.4 16.5 10.8 16.2 11.1L14.8 12.7C14.7 12.8 14.7 12.9 14.7 13.1L14.9 15.2C14.9 15.6 14.5 15.9 14.2 15.7L12.2 14.9C12.1 14.8 11.9 14.8 11.8 14.9L9.8 15.7C9.5 15.9 9.1 15.6 9.1 15.2L9.3 13.1C9.3 12.9 9.3 12.8 9.2 12.7L7.8 11.1C7.5 10.8 7.7 10.4 8.1 10.3L10.1 9.8C10.3 9.8 10.4 9.7 10.5 9.6L11.6 7.7Z\" stroke=\"currentColor\" stroke-width=\"2\"/>", "Arrow_Up_circle": "<path d=\"M3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M12 16L12 8M8 12L12 8L16 12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>", "Plus_circle": "<path d=\"M3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M8 12H16M12 8L12 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>"};
  const nvI=(k,s,w,c)=>'<svg'+(c?' class="'+c+'"':'')+' width="'+(s||24)+'" height="'+(s||24)+'" viewBox="0 0 24 24" fill="none">'+(w?NV[k].replace(/stroke-width="2"/g,'stroke-width="'+w+'"'):NV[k])+'</svg>';

  // ═════════ PREDICTION MARKETS · Kalshi-like ═════════
  const BX={"pct": "<path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.73 7.66C9.54 7.66 10.21 8.32 10.21 9.14C10.21 9.95 9.55 10.62 8.73 10.62C7.92 10.62 7.25 9.96 7.25 9.14C7.25 8.32 7.91 7.66 8.73 7.66ZM8.85 15.8C8.7 15.95 8.51 16.02 8.32 16.02C8.13 16.02 7.94 15.95 7.79 15.8C7.5 15.51 7.5 15.03 7.79 14.74L14.34 8.19C14.63 7.9 15.11 7.9 15.4 8.19C15.69 8.48 15.69 8.96 15.4 9.25L8.85 15.8ZM15.27 16.34C14.46 16.34 13.79 15.68 13.79 14.86C13.79 14.05 14.45 13.38 15.27 13.38C16.08 13.38 16.75 14.04 16.75 14.86C16.75 15.68 16.09 16.34 15.27 16.34Z\" fill=\"currentColor\"/>", "up": "<path d=\"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 11.53C16.88 11.92 16.57 12.23 16.18 12.23C15.79 12.23 15.48 11.92 15.48 11.53V11.35L12.76 14.07C12.61 14.22 12.41 14.29 12.2 14.27C11.99 14.25 11.8 14.14 11.69 13.96L10.67 12.44L8.29 14.82C8.15 14.96 7.98 15.02 7.8 15.02C7.62 15.02 7.44 14.95 7.31 14.82C7.04 14.55 7.04 14.11 7.31 13.83L10.29 10.85C10.44 10.7 10.64 10.63 10.85 10.65C11.06 10.67 11.25 10.78 11.36 10.96L12.38 12.48L14.49 10.37H14.31C13.92 10.37 13.61 10.06 13.61 9.67C13.61 9.28 13.92 8.97 14.31 8.97H16.17C16.26 8.97 16.35 8.99 16.44 9.02C16.61 9.09 16.75 9.23 16.82 9.4C16.86 9.49 16.87 9.58 16.87 9.67V11.53H16.88Z\" fill=\"currentColor\"/>", "dn": "<path d=\"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 14.33C16.88 14.42 16.86 14.51 16.83 14.6C16.76 14.77 16.62 14.91 16.45 14.98C16.36 15.02 16.27 15.03 16.18 15.03H14.32C13.93 15.03 13.62 14.72 13.62 14.33C13.62 13.94 13.93 13.63 14.32 13.63H14.5L12.39 11.52L11.37 13.04C11.25 13.21 11.07 13.33 10.86 13.35C10.65 13.37 10.45 13.3 10.3 13.15L7.32 10.17C7.05 9.9 7.05 9.46 7.32 9.18C7.59 8.9 8.03 8.91 8.31 9.18L10.69 11.56L11.71 10.04C11.83 9.87 12.01 9.75 12.22 9.73C12.44 9.71 12.63 9.78 12.78 9.93L15.5 12.65V12.47C15.5 12.08 15.81 11.77 16.2 11.77C16.59 11.77 16.9 12.08 16.9 12.47V14.33H16.88Z\" fill=\"currentColor\"/>", "ppl": "<path d=\"M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z\" fill=\"currentColor\"/><path d=\"M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z\" fill=\"currentColor\"/><path d=\"M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z\" fill=\"currentColor\"/><path d=\"M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z\" fill=\"currentColor\"/>", "crown": "<path d=\"M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z\" fill=\"currentColor\"/><path d=\"M20.3502 5.51906L16.3502 8.37906C15.8202 8.75906 15.0602 8.52906 14.8302 7.91906L12.9402 2.87906C12.6202 2.00906 11.3902 2.00906 11.0702 2.87906L9.17022 7.90906C8.94022 8.52906 8.19022 8.75906 7.66022 8.36906L3.66022 5.50906C2.86022 4.94906 1.80022 5.73906 2.13022 6.66906L6.29022 18.3191C6.43022 18.7191 6.81022 18.9791 7.23022 18.9791H16.7602C17.1802 18.9791 17.5602 18.7091 17.7002 18.3191L21.8602 6.66906C22.2002 5.73906 21.1402 4.94906 20.3502 5.51906ZM14.5002 14.7491H9.50022C9.09022 14.7491 8.75022 14.4091 8.75022 13.9991C8.75022 13.5891 9.09022 13.2491 9.50022 13.2491H14.5002C14.9102 13.2491 15.2502 13.5891 15.2502 13.9991C15.2502 14.4091 14.9102 14.7491 14.5002 14.7491Z\" fill=\"currentColor\"/>", "usd": "<path d=\"M12.75 15.9203H13.4C14.05 15.9203 14.59 15.3403 14.59 14.6403C14.59 13.7703 14.28 13.6003 13.77 13.4203L12.76 13.0703V15.9203H12.75Z\" fill=\"currentColor\"/><path d=\"M11.9701 1.89845C6.45007 1.91845 1.98007 6.40845 2.00007 11.9285C2.02007 17.4485 6.51007 21.9185 12.0301 21.8985C17.5501 21.8785 22.0201 17.3885 22.0001 11.8685C21.9801 6.34845 17.4901 1.88845 11.9701 1.89845ZM14.2601 11.9985C15.0401 12.2685 16.0901 12.8485 16.0901 14.6385C16.0901 16.1785 14.8801 17.4185 13.4001 17.4185H12.7501V17.9985C12.7501 18.4085 12.4101 18.7485 12.0001 18.7485C11.5901 18.7485 11.2501 18.4085 11.2501 17.9985V17.4185H10.8901C9.25007 17.4185 7.92007 16.0385 7.92007 14.3385C7.92007 13.9285 8.26007 13.5885 8.67007 13.5885C9.08007 13.5885 9.42007 13.9285 9.42007 14.3385C9.42007 15.2085 10.0801 15.9185 10.8901 15.9185H11.2501V12.5385L9.74007 11.9985C8.96007 11.7285 7.91007 11.1485 7.91007 9.35845C7.91007 7.81845 9.12007 6.57845 10.6001 6.57845H11.2501V5.99845C11.2501 5.58845 11.5901 5.24845 12.0001 5.24845C12.4101 5.24845 12.7501 5.58845 12.7501 5.99845V6.57845H13.1101C14.7501 6.57845 16.0801 7.95845 16.0801 9.65845C16.0801 10.0685 15.7401 10.4085 15.3301 10.4085C14.9201 10.4085 14.5801 10.0685 14.5801 9.65845C14.5801 8.78845 13.9201 8.07845 13.1101 8.07845H12.7501V11.4585L14.2601 11.9985Z\" fill=\"currentColor\"/><path d=\"M9.42188 9.36812C9.42188 10.2381 9.73187 10.4081 10.2419 10.5881L11.2519 10.9381V8.07812H10.6019C9.95188 8.07812 9.42188 8.65812 9.42188 9.36812Z\" fill=\"currentColor\"/>"};
  const PMI={fed:BX.pct,cpi:BX.up,rec:BX.dn,job:BX.ppl,top:BX.crown};
  const CW=['#0A84FF','#FF9500','#AF52DE','#00B8A9','#8E8E93'], PCB=['#FFFFFF','#FFD24D','#9DB8FF','#FFA3D1','#C9B8FF'];
  const NOW=new Date(2026,8,26,21,40), T0=Date.now(), nowT=()=>+NOW+(Date.now()-T0), HR=36e5, DY=864e5;
  const PM=[
    {id:'fed',as:{info:'Ставка сейчас',v:'4,25–4,50%'},q:'Что ФРС сделает со ставкой в октябре?',s:'Что ФРС сделает со ставкой?',cat:'Экономика',tag:'ФРС',ic:'fed',end:'29 окт',cl:+new Date(2026,9,29,21,0),vol:'$4,2 млн',ppl:'12 480',feat:1,seed:11,src:'Решение FOMC · federalreserve.gov',
      o:[{n:'Снизит на 0,25 п.п.',sn:'−0,25 п.п.',q:'ФРС снизит ставку на 0,25 п.п.?',p:82,d:6},{n:'Оставит без изменений',sn:'Без изменений',q:'ФРС оставит ставку без изменений?',p:15,d:-4},{n:'Снизит на 0,5 п.п.',sn:'−0,5 п.п.',q:'ФРС снизит ставку на 0,5 п.п.?',p:3,d:-2}]},
    {id:'btc',as:{c:'BTC',tg:70000},q:'BTC будет дороже $70 000 31 октября?',s:'BTC будет дороже $70 000?',cat:'Крипта',lg:'btc',p:64,d:5,end:'31 окт',cl:+new Date(2026,9,31,23,59),vol:'$2,8 млн',ppl:'9 310',seed:21,src:'Индекс CF Benchmarks BRTI'},
    {id:'big',q:'Какая компания будет самой дорогой 31 декабря?',s:'Какая компания будет самой дорогой?',cat:'Компании',ic:'top',end:'31 дек',cl:+new Date(2026,11,31,23,59),vol:'$5,6 млн',ppl:'14 020',seed:25,src:'Рыночная капитализация на закрытие торгов',
      o:[{n:'NVIDIA',q:'NVIDIA будет самой дорогой компанией?',lg:'nvda',p:71,d:3},{n:'Microsoft',q:'Microsoft будет самой дорогой компанией?',lg:'msft',p:17,d:-1},{n:'Apple',q:'Apple будет самой дорогой компанией?',lg:'aapl',p:12,d:-2}]},
    {id:'aapl',as:{st:'AAPL'},q:'Выручка Apple за квартал будет выше прогноза?',s:'Выручка Apple будет выше прогноза?',cat:'Компании',lg:'aapl',p:71,d:-4,end:'30 окт',cl:+new Date(2026,9,30,22,0),vol:'$1,6 млн',ppl:'5 902',seed:31,src:'Квартальный отчёт Apple'},
    {id:'tsla',as:{st:'TSLA'},q:'Tesla поставит больше 500 тыс. машин в III квартале?',s:'Tesla поставит больше 500 тыс. машин?',cat:'Компании',lg:'tsla',p:38,d:2,end:'2 окт',cl:+new Date(2026,9,2,16,0),vol:'$980 тыс.',ppl:'4 115',seed:41,src:'Пресс-релиз Tesla о поставках'},
    {id:'btcr',as:{c:'BTC',rng:1},q:'Сколько будет стоить BTC 31 октября?',s:'Сколько будет стоить BTC?',cat:'Крипта',lg:'btc',end:'31 окт',cl:+new Date(2026,9,31,23,59),vol:'$3,4 млн',ppl:'8 150',seed:35,src:'Индекс CF Benchmarks BRTI',
      o:[{n:'$60–65 тыс.',q:'BTC будет стоить $60–65 тыс. 31 октября?',p:36,d:3,lo:6e4,hi:65e3},{n:'$65–70 тыс.',q:'BTC будет стоить $65–70 тыс. 31 октября?',p:31,d:2,lo:65e3,hi:7e4},{n:'$70–75 тыс.',q:'BTC будет стоить $70–75 тыс. 31 октября?',p:16,d:-2,lo:7e4,hi:75e3},{n:'Ниже $60 тыс.',q:'BTC будет дешевле $60 тыс. 31 октября?',p:10,d:-1,lo:0,hi:6e4},{n:'Выше $75 тыс.',q:'BTC будет дороже $75 тыс. 31 октября?',p:7,d:1,lo:75e3,hi:1e9}]},
    {id:'cpi',as:{info:'Прошлый месяц',v:'2,9%'},q:'Инфляция в США опустится ниже 2,8%?',s:'Инфляция в США будет ниже 2,8%?',cat:'Экономика',tag:'CPI',ic:'cpi',p:57,d:3,end:'сегодня',cl:+NOW+2*HR+15*6e4,vol:'$3,1 млн',ppl:'10 204',seed:51,src:'Bureau of Labor Statistics'},
    {id:'eth',as:{c:'ETH',tg:2500},q:'ETH поднимется выше $2 500 в октябре?',s:'ETH поднимется выше $2 500?',cat:'Крипта',lg:'eth',p:46,d:4,end:'31 окт',cl:+new Date(2026,9,31,23,59),vol:'$1,1 млн',ppl:'4 870',seed:71,src:'Индекс CF Benchmarks ETHUSD'},
    {id:'gpt',q:'OpenAI выйдет на IPO в 2026 году?',s:'OpenAI выйдет на IPO в 2026 году?',cat:'Технологии',lg:'gpt',p:29,d:-3,end:'31 дек',cl:+new Date(2026,11,31,23,59),vol:'$1,9 млн',ppl:'8 012',seed:81,src:'Проспект эмиссии, SEC'},
    {id:'cld',q:'Anthropic выйдет на IPO в 2026 году?',s:'Anthropic выйдет на IPO в 2026 году?',cat:'Технологии',lg:'cld',p:24,d:2,end:'31 дек',cl:+new Date(2026,11,31,23,59),vol:'$1,3 млн',ppl:'6 330',seed:91,src:'Проспект эмиссии, SEC'},
    {id:'iph',as:{st:'AAPL'},q:'Apple покажет складной iPhone в 2026 году?',s:'Apple покажет складной iPhone?',cat:'Технологии',lg:'aapl',p:44,d:5,end:'31 дек',cl:+new Date(2026,11,31,23,59),vol:'$870 тыс.',ppl:'3 540',seed:95,src:'Официальная презентация Apple'},
    {id:'rec',q:'В США начнётся рецессия в 2026 году?',s:'В США начнётся рецессия?',cat:'Экономика',ic:'rec',p:18,d:-2,end:'31 дек',cl:+new Date(2026,11,31,23,59),vol:'$2,6 млн',ppl:'9 120',seed:101,src:'NBER'},
    {id:'job',as:{info:'Сейчас',v:'4,3%'},q:'Безработица в США поднимется выше 4,5%?',s:'Безработица в США будет выше 4,5%?',cat:'Экономика',ic:'job',p:41,d:1,end:'3 окт',cl:+new Date(2026,9,3,15,30),vol:'$720 тыс.',ppl:'2 940',seed:111,src:'Bureau of Labor Statistics'},
    {id:'btcd',as:{c:'BTC',tg:64000},q:'BTC закроет день дороже $64 000?',s:'BTC закроет день дороже $64 000?',cat:'Крипта',lg:'btc',p:48,d:-2,end:'сегодня',cl:+NOW+5*HR,vol:'$640 тыс.',ppl:'3 870',seed:121,src:'Индекс CF Benchmarks BRTI'},
    {id:'aapld',as:{st:'AAPL'},q:'Акции Apple вырастут сегодня?',s:'Акции Apple вырастут сегодня?',cat:'Компании',lg:'aapl',p:34,d:-6,end:'сегодня',cl:+NOW+6*HR+40*6e4,vol:'$410 тыс.',ppl:'2 115',seed:131,src:'Цена закрытия NASDAQ'},
    {id:'xrp',as:{c:'XRP',tg:2},q:'XRP поднимется выше $2 в октябре?',s:'XRP поднимется выше $2?',cat:'Крипта',lg:'xrp',p:33,d:-1,end:'31 окт',cl:+new Date(2026,9,31,23,59),vol:'$520 тыс.',ppl:'2 480',seed:141,src:'Индекс CF Benchmarks'},
    {id:'bnb',as:{c:'BNB',tg:700},q:'BNB поднимется выше $700 в октябре?',s:'BNB поднимется выше $700?',cat:'Крипта',lg:'bnb',p:22,d:3,end:'31 окт',cl:+new Date(2026,9,31,23,59),vol:'$380 тыс.',ppl:'1 760',seed:151,src:'Индекс CF Benchmarks'}];
  const PMP=[{n:48,amp:3,dd:1},{n:56,amp:5,dd:1.8},{n:60,amp:8,dd:3},{n:72,amp:12,dd:0}];
  const PMH=['btc','fed','big','aapl','btcr','tsla'];
  function pmSer(seed,p,d,start){ return PMP.map((P,k)=>{ const r=rng(seed+k*13+1), n=P.n; let v=0; const w=[0];
      for(let i=1;i<n;i++){ v+=(r()-.5)*2+(r()<.07?(r()-.5)*6:0); w.push(v); }
      const last=w[n-1], dt=w.map((x,i)=>x-last*i/(n-1)), am=Math.max(...dt.map(Math.abs))||1, amp=Math.min(P.amp,Math.max(1.5,p*.35));
      const D=k===3?p-start:d*P.dd, a=dt.map((x,i)=>Math.max(.5,Math.min(99,p-D+D*i/(n-1)+x/am*amp))); a[n-1]=p; return a; }); }
  PM.forEach(e=>{ if(!e.o){ e.bin=1; e.o=[{p:e.p,d:e.d}]; } e.o.forEach((o,i)=>{ o.i=i; o.S=pmSer(e.seed*7+i*31,o.p,o.d,e.bin?50:100/e.o.length); });
    const r=rng(e.seed*3); e.v24='$'+Math.round(60+r()*420)+' тыс.'; });
  const pmE=id=>PM.find(e=>e.id===id);
  const TSP={p:329.6,ch:-2.38};
  const asSym=a=>a.c||a.st;
  const asP=s=>COINS[s]?COINS[s].p:s==='AAPL'?midPx():TSP.p;
  const asCh=s=>COINS[s]?COINS[s].ch:s==='AAPL'?(midPx()/PREV-1)*100:TSP.ch;
  const asFmt=s=>COINS[s]?cUsd(COINS[s]):'$'+dec(asP(s));
  const asLgo=s=>({BTC:'btc',ETH:'eth',BNB:'bnb',XRP:'xrp',AAPL:'aapl',TSLA:'tsla'})[s];
  const tgFmt=v=>'$'+(v>=100?dec(v,0):dec(v));
  const tgD=a=>{ const d=(a.tg/asP(a.c)-1)*100; return (d<0?MIN:'+')+dec(Math.abs(d),1)+'%'; };
  const rngNow=e=>{ const p=asP(e.as.c), o=e.o.find(x=>p>=x.lo&&p<x.hi); return o?o.n:''; };
  const asFmt0=s=>asP(s)>=1000?'$'+dec(asP(s),0):asFmt(s);
  const tgR=a=>asP(a.c)/a.tg, tgW=a=>Math.max(4,Math.min(100,tgR(a)*100)).toFixed(1)+'%';
  const tgCap=a=>{ const d=(a.tg/asP(a.c)-1)*100; return d>0?'Нужен рост на <b>'+dec(d,1)+'%</b>':'Уже выше цели на <b>'+dec(-d,1)+'%</b>'; };
  function asHTML(e){ const a=e.as; if(!a) return '';
    if(a.info) return '<div class="eas"><div class="eas-r">'+pmIco(e)+'<div class="eas-m"><span class="eas-k">'+a.info+'</span><div class="eas-v"><b>'+a.v+'</b></div></div></div></div>';
    const s=asSym(a), ch=asCh(s);
    let h='<div class="eas"><div class="eas-r"><i class="lg lg-'+asLgo(s)+'"></i><div class="eas-m"><span class="eas-k">'+s+' сейчас</span><div class="eas-v"><b class="pmv" data-asp="'+s+'" data-asf="0">'+asFmt0(s)+'</b><span class="eas-dc'+(ch<0?' dn':'')+'" data-asc="'+s+'">'+(ch<0?MIN:'+')+dec(Math.abs(ch))+'%</span></div></div>';
    if(a.tg) h+='<div class="eas-t"><span class="eas-k">Цель</span><b>'+tgFmt(a.tg)+'</b></div></div><div class="eas-bar"><i data-tgb="'+e.id+'" style="width:'+tgW(a)+'"></i></div><div class="eas-cap" data-tgc="'+e.id+'">'+tgCap(a)+'</div>';
    else if(a.rng) h+='<div class="eas-t"><span class="eas-k">Диапазон сейчас</span><b data-rng="'+e.id+'">'+rngNow(e)+'</b></div></div>';
    else h+='</div>';
    return h+'</div>'; }
  function asLine(e){ const a=e.as; if(!a) return ''; if(a.info) return a.info+' '+a.v; const s=asSym(a); return s+' сейчас '+asFmt(s)+(a.tg?' · нужно '+tgFmt(a.tg):''); }
  const pmNow=e=>e.as&&!e.as.info?'<div class="pm-now"><span>'+asSym(e.as)+' сейчас</span><b class="pmv" data-asp="'+asSym(e.as)+'">'+asFmt(asSym(e.as))+'</b></div>':'';
  function asPaint(){ ['BTC','ETH','BNB','XRP','AAPL','TSLA'].forEach(s=>{ const els=document.querySelectorAll('[data-asp="'+s+'"]'); if(!els.length) return;
      els.forEach(el=>{ const t=el.dataset.asf?asFmt0(s):asFmt(s); if(el.textContent!==t){ const was=parseFloat(el.dataset.v||asP(s)); rollText(el,t,asP(s)>=was?1:-1,true); el.dataset.v=asP(s); } });
      const ch=asCh(s); document.querySelectorAll('[data-asc="'+s+'"]').forEach(el=>{ el.textContent=(ch<0?MIN:'+')+dec(Math.abs(ch))+'%'; el.classList.toggle('dn',ch<0); }); });
    document.querySelectorAll('[data-tgd]').forEach(el=>{ const t=tgD(pmE(el.dataset.tgd).as); if(el.textContent!==t) el.textContent=t; });
    document.querySelectorAll('[data-tgb]').forEach(el=>{ el.style.width=tgW(pmE(el.dataset.tgb).as); });
    document.querySelectorAll('[data-tgc]').forEach(el=>{ const t=tgCap(pmE(el.dataset.tgc).as); if(el.innerHTML!==t) el.innerHTML=t; });
    document.querySelectorAll('[data-rng]').forEach(el=>{ const t=rngNow(pmE(el.dataset.rng)); if(el.textContent!==t) el.textContent=t; }); }
  const pmLead=e=>e.o.reduce((a,b)=>b.p>a.p?b:a);
  const pmSort=e=>e.o.slice().sort((a,b)=>b.p-a.p);
  const pAsk=(o,s)=>s==='y'?o.p:100-o.p, pBid=(o,s)=>s==='y'?o.p-1:99-o.p;
  const pmCol=o=>o.d>=0?'#10C810':'#FF3B47';
  const icoOf=x=>x.lg?'<i class="lg lg-'+x.lg+'"></i>':x.ic?'<i class="pm-ic '+x.ic+'"><svg viewBox="0 0 24 24" fill="none">'+PMI[x.ic]+'</svg></i>':'<i class="dt" style="background:'+CW[x.i]+'"></i>';
  const pmIco=e=>icoOf(e);
  const pmSg=d=>(d<0?MIN:'+')+Math.abs(d)+'%';
  function pmPl(n,a,b,c){ const m=n%100, k=n%10; return m>10&&m<20?c:k===1?a:k>1&&k<5?b:c; }
  const ctW=n=>pmPl(n,'контракт','контракта','контрактов');
  const POS={'fed:0:y':{n:30,c:21.6}};
  let PMF=199.52;
  const pk=(id,oi,s)=>id+':'+oi+':'+s;
  const posVal=k=>{ const [id,oi,s]=k.split(':'), o=pmE(id).o[+oi]; return POS[k].n*(s==='y'?o.p:100-o.p)/100; };
  const hasPos=id=>!(window.__nbPre&&__nbPre())&&Object.keys(POS).some(k=>k.startsWith(id+':'));

  // charts
  let pmN=0;
  function pmCR(P){ const n=P.length; let d='M'+P[0][0].toFixed(1)+' '+P[0][1].toFixed(1);
    for(let i=0;i<n-1;i++){ const p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(n-1,i+2)];
      d+=' C'+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+' '+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+' '+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+' '+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1); }
    return d; }
  const pmDown=(a,m)=>{ if(a.length<=m) return a.slice(); const o=[]; for(let i=0;i<m;i++) o.push(a[Math.round(i*(a.length-1)/(m-1))]); return o; };
  // ser: [{v:[], col}] — the first one is the hero line (area + glow)
  function pmSvg(ser,W,H,o){ o=o||{}; const id='pmg'+(pmN++), m=o.m||22, tail=o.tail==null?16:o.tail, top=o.top||8, bot=o.bot||6;
    const vs=ser.map(s=>pmDown(s.v,m)), all=vs.flat(), mx=Math.max(...all), mn=o.zero?0:Math.min(...all), n=vs[0].length, IW=W-tail;
    const X=i=>i/(n-1)*IW, Y=x=>top+(mx-x)/((mx-mn)||1)*(H-top-bot);
    const pts=vs.map(v=>v.map((x,i)=>[X(i),Y(x)])), col=ser[0].col, glow=o.glow||col, P=pts[0], line=pmCR(P), e=P[n-1], ex=e[0].toFixed(1), ey=e[1].toFixed(1), ar=line+' L'+ex+' '+H+' L0 '+H+'Z';
    let h='<svg class="pmsv" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true"><defs>'+
      '<linearGradient id="'+id+'f" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity="'+(o.fa||.2)+'"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient>'+
      '<pattern id="'+id+'d" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r=".8" fill="'+col+'" fill-opacity="'+(o.da||.5)+'"/></pattern>'+
      '<linearGradient id="'+id+'g" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="'+top+'" y2="'+H+'"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<mask id="'+id+'m" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><rect width="'+W+'" height="'+H+'" fill="url(#'+id+'g)"/></mask>'+
      '<filter id="'+id+'b" x="-10%" y="-60%" width="120%" height="220%"><feGaussianBlur stdDeviation="'+(o.blur||2.4)+'"/></filter></defs>'+
      '<path d="'+ar+'" fill="url(#'+id+'f)"/><path d="'+ar+'" fill="url(#'+id+'d)" mask="url(#'+id+'m)"/>';
    for(let k=pts.length-1;k>0;k--){ const q=pts[k], c=ser[k].col, z=q[n-1];
      h+='<path d="'+pmCR(q)+'" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><circle cx="'+z[0].toFixed(1)+'" cy="'+z[1].toFixed(1)+'" r="2.6" fill="'+c+'"/>'; }
    h+='<path d="'+line+'" fill="none" stroke="'+glow+'" stroke-width="'+(o.gw||4)+'" filter="url(#'+id+'b)" opacity="'+(o.go||.5)+'"/>'+
      '<path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="'+(o.sw||2)+'" stroke-linecap="round" stroke-linejoin="round"/>'+
      (tail>8?'<path d="M'+(e[0]+7).toFixed(1)+' '+ey+' H'+W+'" stroke="'+col+'" stroke-opacity=".5" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/>':'')+
      '<circle cx="'+ex+'" cy="'+ey+'" r="3.5" fill="'+col+'" fill-opacity=".35" data-lp="1"/>'+
      '<circle cx="'+ex+'" cy="'+ey+'" r="3.5" fill="'+col+'" stroke="'+(o.ring||'#fff')+'" stroke-width="2"/></svg>';
    return h; }
  const WHT={glow:'#0A84FF',fa:.28,da:.5,go:.9,gw:5,blur:3.2,ring:'rgba(255,255,255,.35)',m:28}, FTC='#4DA3FF';
  function pmSerOf(e,k,wh){ if(wh==2) return [{v:pmLead(e).S[k],col:FTC}]; if(e.bin) return [{v:e.o[0].S[k],col:wh?FTC:'#2F8BFF'}]; return pmSort(e).slice(0,4).map(o=>({v:o.S[k],col:(wh?PCB:CW)[o.i]})); }
  function pmCvDraw(el){ const e=pmE(el.dataset.pmc), w=+el.dataset.w, h=+el.dataset.h, k=+el.dataset.k, wh=+el.dataset.wh||0;
    el.innerHTML=pmSvg(pmSerOf(e,k,wh),w,h,wh?Object.assign({zero:!e.bin&&wh!=2},WHT):{m:h>50?22:18,tail:h>50?16:10}); }
  const pmCv=(e,w,h,k,wh)=>{ const d=document.createElement('div'); d.className='cv'; d.dataset.pmc=e.id; d.dataset.w=w; d.dataset.h=h; d.dataset.k=k; if(wh) d.dataset.wh=wh; pmCvDraw(d); return d.outerHTML; };

  // pieces
  const K=(e,o)=>e.id+':'+o.i;
  // yes/no wording: binary → the event question, multi-outcome → the outcome's own question
  const pmOQ=(e,o)=>e.bin?(e.s||e.q):((o&&o.q)||e.s||e.q);
  const pmX=c=>c+'¢';
  const pmBt=(e,o,sd)=>'<span class="bt">'+(sd==='y'?'Да':'Нет')+' <b class="pmv" data-p'+sd+'="'+K(e,o)+'">'+pmX(pAsk(o,sd))+'</b></span>';
  const pmYN=(e,o)=>'<div class="pm-yn"><span class="y" data-buy="'+K(e,o)+':y">'+pmBt(e,o,'y')+'</span><span class="n" data-buy="'+K(e,o)+':n">'+pmBt(e,o,'n')+'</span></div>';
  const pmMine=e=>hasPos(e.id)?'<i class="pm-mine">Ваша позиция</i>':'';
  const pmW=()=>$('scrPm').clientWidth||390;
  // filled clock: disc with the hands cut out (evenodd) — reads cleaner than the thin outline at 13px
  const CLK='<svg class="clk" width="13" height="13" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8 .8A7.2 7.2 0 1 1 7.99 .8ZM7.15 4.1A.85.85 0 0 1 8.85 4.1V7.52L11.24 8.97A.85.85 0 0 1 10.36 10.43L7.15 8.48Z"/></svg>';
  const CHV='<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function cdTxt(e){ const r=e.cl-nowT(); if(r<=0) return 'Торги закрыты'; if(r<DY){ const s=Math.floor(r/1e3); return Math.floor(s/3600)+':'+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
    const d=Math.floor(r/DY), h=Math.floor(r%DY/HR); return d+' д '+h+' ч'; }
  const soon=e=>e.cl-nowT()<DY;
  const pmEnd=e=>soon(e)?'<span class="pm-end soon">'+CLK+'<span data-cd="'+e.id+'">'+cdTxt(e)+'</span></span>':'<span class="pm-end">'+CLK+e.end+'</span>';

  function pmCard(e){
    if(e.bin){ const o=e.o[0]; return '<div class="pm-cd" role="button" tabindex="0" data-ev="'+e.id+'"><div class="t">'+pmIco(e)+'<span class="tr">'+pmMine(e)+'<span class="pm-dl'+(o.d<0?' dn':'')+'" data-pd="'+K(e,o)+'">'+pmSg(o.d)+'</span></span></div>'+
      '<div class="qq">'+(e.s||e.q)+'</div>'+pmNow(e)+'<div class="p"><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b><span>шанс «Да»</span></div>'+pmCv(e,212,56,0)+pmYN(e,o)+'</div>'; }
    return '<div class="pm-cd mu" role="button" tabindex="0" data-ev="'+e.id+'"><div class="t">'+pmIco(e)+(hasPos(e.id)?'<i class="pm-mine">Ваша позиция</i>':pmEnd(e))+'</div>'+
      '<div class="qq">'+(e.s||e.q)+'</div><div class="pm-ors">'+pmSort(e).slice(0,3).map(o=>'<div class="pm-or">'+icoOf(o)+'<span class="n">'+(o.sn||o.n)+'</span><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b>'+
      '<span class="yb" data-buy="'+K(e,o)+':y">Да <b class="pmv" data-py="'+K(e,o)+'">'+pmX(pAsk(o,'y'))+'</b></span></div>').join('')+'</div>'+
      (e.o.length>3?'<div class="ft"><span></span><span>ещё '+(e.o.length-3)+'</span></div>':'')+'</div>'; }
  function pmHome(){ $('pmCar').innerHTML=PMH.map(id=>pmCard(pmE(id))).join(''); }
  function pmFeat(e){ const w=pmW()-32, o=pmLead(e);
    return '<div class="pm-ft" role="button" data-ev="'+e.id+'"><span class="pm-pill">'+pmIco(e)+(e.tag||e.cat)+' · '+e.end+'</span><div class="qq">'+e.q+'</div>'+
      '<div class="p"><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b><span class="k">шанс «'+(e.bin?'Да':(o.sn||o.n))+'»</span><span class="d'+(o.d<0?' dn':'')+'" data-pd="'+K(e,o)+'">'+pmSg(o.d)+'</span></div>'+
      (e.bin?'':'<div class="pm-lg">'+pmSort(e).slice(1,4).map(x=>'<span><i style="background:'+PCB[x.i]+'"></i>'+(x.sn||x.n)+' <b class="pmv" data-pp="'+K(e,x)+'">'+x.p+'%</b></span>').join('')+'</div>')+
      pmCv(e,w,96,1,e.bin?1:2)+'<div class="yn"><span class="y" data-buy="'+K(e,o)+':y">'+pmBt(e,o,'y')+'</span><span class="n" data-buy="'+K(e,o)+':n">'+pmBt(e,o,'n')+'</span></div></div>'; }
  function pmTile(e){ const w=Math.floor((pmW()-42)/2)-28;
    if(e.bin){ const o=e.o[0]; return '<div class="pm-tl" role="button" data-ev="'+e.id+'">'+pmIco(e)+'<div class="qq">'+(e.s||e.q)+'</div><div class="gr"></div><div class="p"><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b><span>шанс</span></div>'+pmCv(e,w,46,0)+pmYN(e,o)+'</div>'; }
    return '<div class="pm-tl" role="button" data-ev="'+e.id+'">'+pmIco(e)+'<div class="qq">'+(e.s||e.q)+'</div><div class="gr"></div>'+
      pmSort(e).slice(0,3).map(o=>'<div class="pm-tr"><div class="r">'+icoOf(o)+'<span>'+(o.sn||o.n)+'</span><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b></div><div class="pbar"><i data-pb="'+K(e,o)+'" style="width:'+o.p+'%;background:'+CW[o.i]+'"></i></div></div>').join('')+'</div>'; }
  function pmRow(e){ const o=pmLead(e); return '<div class="pm-row" role="button" data-ev="'+e.id+'">'+pmIco(e)+'<span class="m"><b>'+e.q+'</b><span class="tcd">'+CLK+'<span data-cd="'+e.id+'">'+cdTxt(e)+'</span></span></span><b class="r pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b></div>'; }
  function howHide(id){ const b=$(id); b.classList.add('gone'); b.setAttribute('aria-hidden','true'); b.tabIndex=-1; }
  let pmCat='Все';
  function pmRender(){ const L=PM.filter(e=>pmCat==='Все'||e.cat===pmCat), ft=L.find(e=>e.feat)||L[0], rest=L.filter(e=>e!==ft), sn=L.filter(soon);
    let n=Math.min(4,rest.length); if(n>2&&n%2) n--;
    $('pmFeat').innerHTML=pmFeat(ft); $('pmGrid').innerHTML=rest.slice(0,n).map(pmTile).join('');
    $('pmPopH').hidden=$('pmGrid').hidden=!n; $('pmSoonH').hidden=$('pmList').hidden=!sn.length; $('pmList').innerHTML=sn.map(pmRow).join(''); pmBal(0); }
  function pfPm(){ const sec=$('pfSecs').querySelectorAll('.pf-sec')[3]; if(!sec) return; const ks=Object.keys(POS); sec.hidden=!ks.length; if(!ks.length) return;
    const tot=ks.reduce((a,k)=>a+posVal(k),0), v=sec.querySelector('.pf-sh .v'); if(v&&v.firstChild) v.firstChild.textContent='$'+dec(tot);
    const bd=sec.querySelector('.pf-bd>div'); bd.innerHTML=ks.map(k=>{ const [id,oi,sd]=k.split(':'), e=pmE(id), o=e.o[+oi], P=POS[k], val=posVal(k), pl=val-P.c, pc=Math.round(pl/P.c*100);
      return '<button class="pf-row" data-pmev="'+id+'">'+icoOf(e)+'<span class="m"><span class="t">'+pmOQ(e,o)+'</span><span class="s">'+(sd==='y'?'Да':'Нет')+' · '+dec(P.n,0)+' шт.</span></span><span class="r"><span class="t">'+dec(val)+'</span><span class="s'+(pl<0?' dn':'')+'">'+(pl<0?MIN:'+')+'$'+dec(Math.abs(pl))+' '+(pl<0?MIN:'+')+Math.abs(pc)+'%</span></span></button>'; }).join(''); }
  function pmBal(dir){ pfPm(); const ks=Object.keys(POS), v=ks.reduce((s,k)=>s+posVal(k),0), c=ks.reduce((s,k)=>s+POS[k].c,0), pc=c?Math.round((v/c-1)*100):0;
    const t='$'+dec(v); if(dir) rollText($('pmBalV'),t,dir,true); else $('pmBalV').textContent=t; $('pmNavV').textContent=t;
    $('pmBalP').textContent=pmSg(pc); $('pmBalP').classList.toggle('dn',pc<0); }

  // navigation
  function goPm(){ closeSheet(); pmCat='Все'; $('pmChips').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',!i)); pmRender(); $('pmScroll').scrollTop=0; $('pmNav').classList.remove('scrolled','mini');
    dev.classList.add('on-pm'); $('scrPm').setAttribute('aria-hidden','false'); syncStatus(); if(!pmSeen){ pmSeen=true; setTimeout(()=>{ if(dev.classList.contains('on-pm')&&!dev.classList.contains('on-ev')) stoOpen('pm'); },650); } }
  let pmSeen=false;
  function pmBack(){ dev.classList.remove('on-pm'); $('scrPm').setAttribute('aria-hidden','true'); syncStatus(); }
  let EV=null, evPer=3, evScrub=false, evGeo=null, evLast=null;
  function goEv(id){ EV=pmE(id); closeSheet(); evPer=3; $('evPer').style.setProperty('--i',3); evFill(); $('evScroll').scrollTop=0; evNavSync();
    dev.classList.add('on-ev'); $('scrEv').setAttribute('aria-hidden','false'); syncStatus(); requestAnimationFrame(()=>evDraw(true));
    if(!pmSeen){ pmSeen=true; setTimeout(()=>{ if(dev.classList.contains('on-ev')&&!$('sheet').classList.contains('on')) stoOpen('pm'); },650); } }
  function evBack(){ dev.classList.remove('on-ev'); $('scrEv').setAttribute('aria-hidden','true'); syncStatus(); }
  const EVK=['за сегодня','за неделю','за месяц','за всё время'];
  function evHead(dir){ const e=EV, o=pmLead(e), a=o.S[evPer], d=Math.round(a[a.length-1]-a[0]);
    if(dir) rollText($('evP'),o.p+'%',dir,true); else $('evP').textContent=o.p+'%';
    $('evD').innerHTML=(d<0?triD:triU)+Math.abs(d)+'%'; $('evD').classList.toggle('dn',d<0); $('evK').textContent=EVK[evPer]; $('evK2').textContent='шанс «'+(e.bin?'Да':(o.sn||o.n))+'»'; $('evNavP').textContent=o.p+'%';
    if(!e.bin) $('evLg').innerHTML=pmSort(e).slice(0,4).map((x,j)=>'<span><i style="background:'+(j?PCB[x.i]:FTC)+'"></i>'+(x.sn||x.n)+' <b data-lg="'+x.i+'">'+x.p+'%</b></span>').join(''); }
  function evFill(){ const e=EV, o=e.o[0];
    $('scrEv').classList.toggle('multi',!e.bin);
    $('evPill').innerHTML=CLK+'&nbsp;'+e.cat+' · '+e.end; $('evQ').innerHTML=(e.as?'':pmIco(e))+'<h1>'+e.q+'</h1>'; $('evQ').classList.toggle('noic',!!e.as); $('evAs').innerHTML=asHTML(e); $('evNavQ').textContent=e.s||e.q;
    $('evLg').innerHTML='';
    if(e.bin){ $('evY').innerHTML=pmBt(e,o,'y'); $('evN').innerHTML=pmBt(e,o,'n'); }
    $('evSt').innerHTML='<div><div class="k">Объём торгов</div><div class="v">'+e.vol+'</div></div><div><div class="k">За сутки</div><div class="v">'+e.v24+'</div></div><div><div class="k">Итоги</div><div class="v">'+e.end+'</div></div>';
    const c=new Date(e.cl);
    $('evTl').innerHTML='<div class="h">Когда итог</div><div class="tl"><div class="st pas"><i></i><span class="k">Прогнозы открыты</span><span class="v">1 июн</span></div>'+
      '<div class="st cur"><i></i><span class="k">Итог события</span><span class="v">'+c.getDate()+' '+MON[c.getMonth()]+', '+hm2(c)+'</span><span class="tcd">осталось <span data-cd="'+e.id+'">'+cdTxt(e)+'</span></span></div>'+
      '<div class="st"><i></i><span class="k">Деньги на счёт</span><span class="v">сразу после итога</span></div></div><div class="ev-src">Итог по данным: '+e.src+'</div>';
    evHead(0); evOcsR(); evPosR(); }
  function evOcsR(){ const e=EV; if(e.bin){ $('evOcs').innerHTML=''; return; }
    $('evOcs').innerHTML='<div class="ev-card ev-ocs">'+pmSort(e).map(o=>'<div class="ev-oc" data-oc="'+o.i+'"><div class="r1">'+icoOf(o)+
      '<span class="m"><span>'+o.n+'</span><small><span class="dd '+(o.d<0?'dn':'up')+'" data-pd="'+K(e,o)+'">'+pmSg(o.d)+'</span> за день</small></span><b class="pmv" data-pp="'+K(e,o)+'">'+o.p+'%</b></div>'+pmYN(e,o)+'</div>').join('')+'</div>'; }
  function evPosR(){ const e=EV; $('evPos').innerHTML=Object.keys(POS).filter(k=>k.startsWith(e.id+':')).map(k=>{ const [,oi,s]=k.split(':'), o=e.o[+oi], p=POS[k], v=posVal(k), pc=Math.round((v/p.c-1)*100), Y=s==='y';
      return '<div class="ev-card ev-pos" data-pos="'+k+'"><div class="h">Ваш прогноз<span class="ev-side'+(Y?'':' n')+'">'+(Y?'Да':'Нет')+'</span></div>'+(e.bin?'':'<div class="on">'+o.n+'</div>')+'<div class="ev-pv">'+
        '<div><div class="k">Вложили</div><div class="v">$'+dec(p.c)+'</div></div>'+
        '<div><div class="k">Сейчас</div><div class="v"><span class="pmv" data-posv="'+k+'">$'+dec(v)+'</span><small class="'+(pc<0?'dn':'up')+'" data-posp="'+k+'">'+pmSg(pc)+'</small></div></div>'+
        '<div><div class="k">Угадаете</div><div class="v up">$'+dec(p.n)+'</div></div></div>'+
        '<button class="ev-co" data-co="'+k+'">Забрать <span class="pmv" data-posv="'+k+'">$'+dec(v)+'</span> сейчас</button></div>'; }).join(''); }
  const WD=['вс','пн','вт','ср','чт','пт','сб'];
  const EVMS=[DY,7*DY,30*DY,NOW-new Date(2026,5,1)];
  const evT=f=>new Date(NOW-EVMS[evPer]*(1-f));
  const hm2=t=>String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0');
  const evAt=f=>{ const t=evT(f); return t.getDate()+' '+MON[t.getMonth()]+(evPer<2?', '+hm2(t):''); };
  const evAx=f=>{ const t=evT(f); return evPer===0?hm2(t):evPer===1?WD[t.getDay()][0].toUpperCase()+WD[t.getDay()][1]:t.getDate()+' '+MON[t.getMonth()]; };
  function evDraw(reveal){ const e=EV; if(!e) return; const W=$('evChart').clientWidth||390, H=130, IW=W-20, ss=e.bin?[e.o[0]]:pmSort(e).slice(0,4), sers=ss.map(o=>o.S[evPer]), n=sers[0].length;
    const all=sers.flat(), mx=Math.max(...all), mn=e.bin?Math.min(...all):0, pad=Math.max(1.5,(mx-mn)*.08), X=i=>i/(n-1)*IW, Y=v=>22+(mx+pad-v)/((mx-mn+2*pad)||1)*(H-34);
    const P=sers[0].map((v,i)=>[X(i),Y(v)]), line=pmCR(P), ex=P[n-1][0], ey=P[n-1][1], ar=line+' L'+W+' '+ey.toFixed(1)+' L'+W+' '+H+' L0 '+H+'Z';
    let oth=''; for(let k=sers.length-1;k>0;k--){ const q=sers[k].map((v,i)=>[X(i),Y(v)]), c=PCB[ss[k].i], z=q[n-1];
      oth+='<path d="'+pmCR(q)+'" fill="none" stroke="'+c+'" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" opacity=".95"/><path d="M'+(z[0]+6).toFixed(1)+' '+z[1].toFixed(1)+' H'+W+'" stroke="'+c+'" stroke-opacity=".5" stroke-width="1.2" stroke-dasharray="1.5 4" stroke-linecap="round"/><circle cx="'+z[0].toFixed(1)+'" cy="'+z[1].toFixed(1)+'" r="3" fill="'+c+'"/>'; }
    $('evSvg').innerHTML='<defs><linearGradient id="evF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+FTC+'" stop-opacity=".28"/><stop offset="1" stop-color="'+FTC+'" stop-opacity="0"/></linearGradient>'+
      '<pattern id="evDp" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".85" fill="'+FTC+'" fill-opacity=".5"/></pattern>'+
      '<linearGradient id="evMG" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="22" y2="'+H+'"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '<mask id="evM" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><rect width="'+W+'" height="'+H+'" fill="url(#evMG)"/></mask>'+
      '<filter id="evG" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>'+
      '<clipPath id="evC"><rect id="evR" x="0" y="-20" width="'+W+'" height="'+(H+40)+'"/></clipPath>'+
      '<clipPath id="evCL"><rect id="evRL" x="-10" y="-20" width="'+(W+20)+'" height="'+(H+40)+'"/></clipPath><clipPath id="evCR"><rect id="evRR" x="'+(W+10)+'" y="-20" width="0" height="'+(H+40)+'"/></clipPath>'+
      '<g id="evGG"><path d="'+ar+'" fill="url(#evF)"/><path d="'+ar+'" fill="url(#evDp)" mask="url(#evM)"/>'+oth+
      '<path d="'+line+'" fill="none" stroke="#0A84FF" stroke-width="5" filter="url(#evG)" opacity=".9"/>'+
      '<path d="'+line+'" fill="none" stroke="'+FTC+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'+
      '<path d="M'+(ex+6).toFixed(1)+' '+ey.toFixed(1)+' H'+W+'" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/></g></defs>'+
      '<g clip-path="url(#evC)"><use href="#evGG" clip-path="url(#evCL)"/><use href="#evGG" clip-path="url(#evCR)" opacity=".3"/>'+
      '<circle class="live" cx="'+ex.toFixed(1)+'" cy="'+ey.toFixed(1)+'" r="4" fill="#fff" data-lp="1"/></g>';
    $('evX').innerHTML=[0,1,2,3,4].map(k=>'<span style="left:'+((k+.5)/5*100)+'%">'+evAx((k+.5)/5)+'</span>').join('');
    evGeo={W,IW,X,Y,ss,sers,n};
    if(reveal){ const r=$('evR'), t0=performance.now(); (function f(t){ const k=Math.min(1,(t-t0)/700), q=1-Math.pow(1-k,3); r.setAttribute('width',(W*q).toFixed(1)); if(k<1) requestAnimationFrame(f); })(t0); } }
  function evScrubAt(ev){ if(!evGeo) return; const g=evGeo, a=g.sers[0], rc=$('evChart').getBoundingClientRect(), x=Math.max(0,Math.min(g.IW,ev.clientX-rc.left)), i=Math.round(x/g.IW*(g.n-1)), px=g.X(i), py=g.Y(a[i]);
    $('evChart').classList.add('scrub'); evScrub=true; $('evCur').style.left=px+'px'; $('evDot').style.left=px+'px'; $('evDot').style.top=py+'px';
    $('evRL').setAttribute('width',px+10); $('evRR').setAttribute('x',px); $('evRR').setAttribute('width',g.W-px+10);
    if(i!==evLast){ const v=Math.round(a[i]), dir=evLast==null?1:(a[i]>=a[evLast]?1:-1); evLast=i; rollText($('evP'),v+'%',dir,true);
      const d=Math.round(a[i]-a[0]); $('evD').innerHTML=(d<0?triD:triU)+Math.abs(d)+'%'; $('evD').classList.toggle('dn',d<0); $('evK').textContent=evAt(i/(g.n-1));
      g.ss.forEach((o,k)=>{ const b=$('evLg').querySelector('[data-lg="'+o.i+'"]'); if(b) b.textContent=Math.round(g.sers[k][i])+'%'; }); } }
  function evEnd(){ if(!evScrub) return; evScrub=false; evLast=null; $('evChart').classList.remove('scrub'); const g=evGeo;
    $('evRL').setAttribute('width',g.W+20); $('evRR').setAttribute('x',g.W+10); $('evRR').setAttribute('width',0); evHead(1); }
  const evLP=LP($('evChart'),{scrub:e=>evScrubAt(e),end:()=>evEnd()});
  $('evChart').addEventListener('pointerdown',e=>{ if(e.pointerType==='mouse') evScrubAt(e); else { try{ $('evChart').setPointerCapture(e.pointerId); }catch(_){} evLP.down(e); } });
  $('evChart').addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') evScrubAt(e); else evLP.move(e); });
  ['pointerup','pointercancel'].forEach(t=>$('evChart').addEventListener(t,()=>{ evLP.up(); evEnd(); }));
  $('evChart').addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') evEnd(); });
  seg($('evPer'),i=>{ evPer=i; evDraw(true); evHead(1); });
  function evNavSync(){ const y=$('evScroll').scrollTop, lt=y>$('evHero').offsetHeight-90, n=$('evNav');
    n.classList.toggle('sc',y>6); n.classList.toggle('mini',y>110); n.classList.toggle('lt',lt); $('evBack').classList.toggle('dk',!lt); $('evCap').classList.toggle('dk',!lt); }
  $('evScroll').addEventListener('scroll',()=>{ evNavSync(); syncStatus(); },{passive:true});
  $('pmScroll').addEventListener('scroll',()=>{ const y=$('pmScroll').scrollTop; $('pmNav').classList.toggle('scrolled',y>6); $('pmNav').classList.toggle('mini',y>44); },{passive:true});

  // clicks
  function pmClick(ev){ const b=ev.target.closest('[data-buy]'); if(b){ ev.stopPropagation(); const [id,oi,s]=b.dataset.buy.split(':'); sbOpen(id,+oi,s); return; }
    const c=ev.target.closest('[data-ev]'); if(c) goEv(c.dataset.ev); }
  $('pmCar').addEventListener('click',pmClick); $('pmBody').addEventListener('click',pmClick);
  $('scrEv').addEventListener('click',ev=>{ const t=ev.target;
    const b=t.closest('[data-buy]'); if(b){ const [id,oi,s]=b.dataset.buy.split(':'); sbOpen(id,+oi,s); return; }
    const co=t.closest('[data-co]'); if(co){ coOpen(co.dataset.co); return; } });
  $('pmGo').onclick=goPm; $('pmAll').onclick=goPm; $('pmHow').onclick=ev=>{ if(ev.target.closest('.how-x')) return howHide('pmHow'); stoOpen('pm'); };
  $('pmBack').onclick=pmBack; $('evBack').onclick=evBack;
  $('pmBack').innerHTML=$('cnBack').innerHTML; $('evBack').innerHTML=$('cnBack').innerHTML; $('pmBell').innerHTML=$('cnBell').innerHTML;
  $('pmFind').onclick=()=>toast('Поиск по прогнозам — скоро'); $('pmBell').onclick=()=>toast('Уведомления о событиях — скоро');
  $('pmBal').onclick=()=>toast('Мои прогнозы — скоро');
  $('evStar').onclick=()=>{ $('evStar').classList.toggle('on'); const on=$('evStar').classList.contains('on'); $('evStar').querySelector('path').setAttribute('fill',on?'currentColor':'none'); toast(on?'Добавлено в избранное':'Убрано из избранного'); };
  $('evShare').onclick=()=>toast('Ссылка на прогноз скопирована');
  $('evY').onclick=()=>sbOpen(EV.id,0,'y'); $('evN').onclick=()=>sbOpen(EV.id,0,'n');
  $('evRule').onclick=()=>stoOpen('pm');
  $('pmChips').addEventListener('click',ev=>{ const b=ev.target.closest('button'); if(!b||b.classList.contains('on')) return;
    $('pmChips').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); pmCat=b.textContent;
    const bd=$('pmBody'); bd.classList.add('fade'); setTimeout(()=>{ pmRender(); bd.classList.remove('fade'); },170); });

  // ── simple stake ticket ──
  const SB={};
  const sbE=()=>pmE(SB.id), sbO=()=>sbE().o[SB.oi], sbK=()=>pk(SB.id,SB.oi,SB.s);
  function sbOpen(id,oi,s){ if(window.nbLockSheet&&nbLockSheet()) return; Object.assign(SB,{id,oi,s,a:''}); const e=sbE(), o=sbO();
    const keys=['1','2','3','4','5','6','7','8','9',',','0'].map(k=>'<button class="key" data-k="'+k+'">'+k+'</button>').join('')+'<button class="key del" data-k="del" aria-label="Стереть">'+$('cbKeys').querySelector('.del').innerHTML+'</button>';
    openSheet('<div class="pb-h">'+pmIco(e)+'<span class="m"><b>'+pmOQ(e,o)+'</b><span>'+(asLine(e)||'Итог · '+e.end)+'</span></span>'+XB+'</div>'+
      '<div class="sx lg pb-side" id="pbSide" data-s="'+s+'" style="--n:2;--i:'+(s==='y'?0:1)+'"><span class="pl"></span><button id="sbYb"></button><button id="sbNb"></button></div>'+
      '<div class="pb-amt" id="pbAmt"></div><div class="pb-av" id="pbAv"></div>'+
      '<div class="cb-chips" id="pbCh"><button data-v="10">$10</button><button data-v="25">$25</button><button data-v="50">$50</button><button data-v="100">$100</button></div>'+
      '<div class="sb-win" id="sbWin"></div><div class="ctazone"><button class="cta" id="pbGo"></button></div><div class="keypad" id="pbKeys">'+keys+'</div>','pb');
    seg($('pbSide'),i=>{ SB.s=i?'n':'y'; $('pbSide').dataset.s=SB.s; sbRender(); });
    $('pbKeys').addEventListener('click',ev=>{ const k=ev.target.closest('.key'); if(k) sbPress(k.dataset.k); });
    $('pbCh').addEventListener('click',ev=>{ const b=ev.target.closest('button'); if(!b) return; SB.a=b.dataset.v; typing(); sbRender(); });
    $('pbGo').onclick=sbGo; sbRender(); }
  function sbPress(k){ typing(); let a=SB.a;
    if(k==='del') a=a.slice(0,-1);
    else if(k===','){ if(!a.includes(',')) a=(a||'0')+','; }
    else { const [i,d]=a.split(','); if(d!=null){ if(d.length<2) a+=k; } else if(i.length<5) a=(a==='0'?'':a)+k; }
    SB.a=a; sbRender(); }
  function sbCalc(){ const o=sbO(), px=pAsk(o,SB.s), amt=num(SB.a), pay=Math.floor(amt*100/px*100)/100; return {o,px,amt,pay,over:amt>PMF+1e-9}; }
  function sbRender(){ const o=sbO(), c=sbCalc(), Y=SB.s==='y', sd=Y?'Да':'Нет';
    $('sbYb').textContent='Да '+pmX(pAsk(o,'y')); $('sbNb').textContent='Нет '+pmX(pAsk(o,'n'));
    $('pbSide').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===(Y?0:1)));
    $('pbAmt').innerHTML=SB.a?'<span>$'+SB.a+'</span><i class="caret"></i>':'<span class="ph">$0</span><i class="caret"></i>';
    $('pbAv').textContent=c.over?'Не хватает · доступно $'+dec(PMF):'Доступно $'+dec(PMF); $('pbAv').classList.toggle('bad',c.over);
    $('pbCh').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===SB.a));
    $('sbWin').innerHTML='<div class="m"><div class="k">Угадаете «'+sd+'» — получите</div><div class="v'+(c.amt?'':' z')+'">$'+dec(c.pay)+'</div><div class="lo">Не угадаете — сумма сгорит</div></div>'+
      '<span class="pc">'+pmX(pAsk(o,SB.s))+'</span>';
    const g=$('pbGo'); g.classList.toggle('sl',!Y); g.textContent=c.amt?'Продолжить':'Введите сумму'; g.disabled=!c.amt||c.over; }
  function sbGo(){ const g=$('pbGo'); if(g.disabled) return; const c=sbCalc(), e=sbE(), o=sbO(), k=sbK(), Y=SB.s==='y', sd=Y?'Да':'Нет', n=c.amt*100/c.px;
    const snap={id:SB.id,oi:SB.oi,s:SB.s,a:SB.a}; closeSheet();
    const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if(!('q' in PMC0)){ PMC0.q=qe.innerHTML; PMC0.t=$('cfTitle').textContent; PMC0.sl=sl.innerHTML; PMC0.slc=sl.className; PMC0.fin=$('fin').textContent; PMC0.op=$('finOp').textContent; PMC0.note=$('cfNote').lastChild.textContent; }
    $('cfTitle').textContent='Прогноз «'+sd+'»'; qe.removeAttribute('data-book'); qe.onclick=null; qe.innerHTML='Да <b>'+pmX(pAsk(o,'y'))+'</b>  Нет <b>'+pmX(pAsk(o,'n'))+'</b>';
    sl.className='slogo nbf-sl'; sl.innerHTML=pmIco(e);
    const rows=[['Событие',pmOQ(e,o)],['Ваш ответ','«'+sd+'»'],['Цена контракта',pmX(c.px)],['Контрактов','≈ '+dec(n,n<10?2:0)],['Сумма','$'+dec(c.amt)],['Угадаете — получите','<b class="up">$'+dec(c.pay)+'</b>'],['Спишется с',accIc(ACCS[0],true)+ACCS[0].sh]];
    $('receipt').innerHTML=rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('cfNote').lastChild.textContent='Каждый контракт платит $1, если прогноз сбудется. Не сбудется — сумма сгорит. Позицию можно продать до итога.';
    $('gz').classList.remove('blocked'); $('gzLbl').textContent='Проведите, чтобы подтвердить'; $('knob').setAttribute('aria-label','Проведите вверх, чтобы подтвердить');
    $('rcpt').innerHTML=[['Прогноз',pmOQ(e,o)],['Ответ','«'+sd+'» · '+pmX(c.px)],['Сумма','$'+dec(c.amt)],['Угадаете — получите','$'+dec(c.pay)]].map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('doneH').textContent='Прогноз принят'; $('sttT').textContent='Принят'; $('doneTxt').textContent='Позиция уже в разделе «Прогнозы» и в портфеле';
    $('fin').textContent='Готово'; $('finOp').textContent='Мои прогнозы';
    window.__pmcf={k,amt:c.amt,pay:c.pay,snap,done:false};
    window.__pmcfCommit=()=>{ const f=window.__pmcf; if(!f||f.done) return; f.done=true; const P=POS[f.k]||{n:0,c:0}; P.n=Math.round((P.n+f.pay)*100)/100; P.c=Math.round((P.c+f.amt)*100)/100; POS[f.k]=P; PMF=Math.round((PMF-f.amt)*100)/100; };
    resetKnob(false); $('scrConfirm').classList.remove('success');
    setTimeout(()=>{ dev.classList.add('pmcf','on-confirm'); $('scrConfirm').setAttribute('aria-hidden','false'); syncStatus(); },120); }
  const PMC0={};
  function pmcfRestore(){ if(!window.__pmcf) return; window.__pmcf=null; dev.classList.remove('pmcf');
    const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if('q' in PMC0){ qe.innerHTML=PMC0.q; qe.setAttribute('data-book',''); qe.onclick=()=>openBook(); $('cfTitle').textContent=PMC0.t; sl.innerHTML=PMC0.sl; sl.className=PMC0.slc; $('fin').textContent=PMC0.fin; $('finOp').textContent=PMC0.op; $('cfNote').lastChild.textContent=PMC0.note; } }
  { const cb1=$('cfBack').onclick, fin1=$('fin').onclick, fop1=$('finOp').onclick;
    $('cfBack').onclick=()=>{ const f=window.__pmcf; if(f&&!f.done){ goBack(); setTimeout(()=>{ pmcfRestore(); sbOpen(f.snap.id,f.snap.oi,f.snap.s); SB.a=f.snap.a; sbRender(); },420); return; } cb1&&cb1(); };
    const leave=goPmList=>{ const f=window.__pmcf; goBack(); setTimeout(()=>{ pmcfRestore(); resetDone(); },440); pmAfter(f.k); };
    $('fin').onclick=()=>{ if(window.__pmcf){ leave(false); return; } fin1&&fin1(); };
    $('finOp').onclick=()=>{ if(window.__pmcf){ leave(false); return; } fop1&&fop1(); }; }
  // cash out
  function coOpen(k){ const [id,oi,s]=k.split(':'), e=pmE(id), o=e.o[+oi], P=POS[k], v=posVal(k), pl=v-P.c, sd=s==='y'?'Да':'Нет';
    openSheet('<div class="co"><div class="co-h">'+pmIco(e)+'<span class="m"><b>'+pmOQ(e,o)+'</b><span>Ваш прогноз «'+sd+'»</span></span>'+XB+'</div>'+
      '<div class="co-v"><span class="k">Заберёте сейчас</span><b>$'+dec(v)+'</b><small class="'+(pl<0?'dn':'up')+'">'+(pl<0?MIN:'+')+'$'+dec(Math.abs(pl))+' к вложенным $'+dec(P.c)+'</small></div>'+
      '<div class="co-n">Если дождаться итога и угадать — <b>$'+dec(P.n)+'</b></div>'+
      '<div class="co-b"><button class="cta" id="coGo">Забрать $'+dec(v)+'</button><button class="co-x" data-close>Оставить прогноз</button></div></div>','co');
    $('coGo').onclick=()=>{ const g=$('coGo'); if(g.classList.contains('ld')) return; g.classList.add('ld');
      setTimeout(()=>{ const v2=posVal(k), pl2=v2-P.c; delete POS[k]; PMF=Math.round((PMF+v2)*100)/100;
        pbDone('Деньги на счёте','$'+dec(v2)+' уже доступны',[['Прогноз',pmOQ(e,o)],['Вложили','$'+dec(P.c)],['Забрали','$'+dec(v2)],['Результат','<b class="'+(pl2<0?'dn':'up')+'">'+(pl2<0?MIN:'+')+'$'+dec(Math.abs(pl2))+'</b>']],pl2>0,k); },650); }; }
  function pbDone(h3,sub,rows,conf,k,after){ const img=document.querySelector('.ill img');
    sheet.innerHTML='<div class="grab"></div><div class="pb-ok"><div class="pb-hero"><i class="pb-ring"></i><i class="pb-ring"></i><i class="pb-ring"></i><img class="pb-ill" alt="" src="'+(img?img.src:'')+'"><div class="cf" id="pbCf"></div></div>'+
      '<h3>'+h3+'</h3><p>'+sub+'</p><div class="pb-rc">'+rows.map(r=>'<div class="pr"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>').join('')+'</div><button class="cta" id="pbDone">Готово</button></div>';
    if(conf){ const cf=$('pbCf'), C=['#fff','#FFE14D','#B8FFC9','#0B6B2A','#7CF29C','#FFFFFF']; let h='';
      for(let i=0;i<34;i++){ const ang=Math.random()*Math.PI*2, d=80+Math.random()*110; h+='<i style="--x:'+(Math.cos(ang)*d).toFixed(0)+'px;--y:'+(Math.sin(ang)*d-30).toFixed(0)+'px;--r:'+(Math.random()*720-360).toFixed(0)+'deg;--s:'+(6+Math.random()*6).toFixed(1)+'px;--c:'+C[i%C.length]+';--d:'+(.15+Math.random()*.15).toFixed(2)+'s"></i>'; }
      cf.innerHTML=h; requestAnimationFrame(()=>cf.classList.add('go')); try{ navigator.vibrate&&navigator.vibrate([12,40,18]); }catch(_){} }
    $('pbDone').onclick=()=>{ closeSheet(); if(after) after(); else pmAfter(k); }; }
  function pmRefresh(){ pmHome(); pmBal(1); if(dev.classList.contains('on-pm')) pmRender(); if(dev.classList.contains('on-ev')&&EV) evPosR(); }
  function pmAfter(k){ const id=k.split(':')[0]; pmRefresh();
    if(dev.classList.contains('on-ev')&&EV&&EV.id===id){ const c=$('evPos').querySelector('[data-pos="'+k+'"]');
      if(c){ setTimeout(()=>{ $('evScroll').scrollTo({top:Math.max(0,c.offsetTop-80),behavior:'smooth'}); c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash'); },300); } }
    else toast('Готово — прогноз в разделе «Прогнозы»'); }

  // ── live ──
  function pmPaint(e,dir){ e.o.forEach(o=>{ const q=K(e,o), sd=o._dir||dir;
      document.querySelectorAll('[data-pp="'+q+'"]').forEach(el=>rollText(el,o.p+'%',sd,true));
      document.querySelectorAll('[data-py="'+q+'"]').forEach(el=>rollText(el,pmX(pAsk(o,'y')),sd,true));
      document.querySelectorAll('[data-pn="'+q+'"]').forEach(el=>rollText(el,pmX(pAsk(o,'n')),-sd,true));
      document.querySelectorAll('[data-my="'+q+'"]').forEach(el=>{ el.textContent=pmX(pAsk(o,'y')); });
      document.querySelectorAll('[data-mn="'+q+'"]').forEach(el=>{ el.textContent=pmX(pAsk(o,'n')); });
      document.querySelectorAll('[data-pd="'+q+'"]').forEach(el=>{ el.textContent=pmSg(o.d); el.classList.toggle('dn',o.d<0); if(el.classList.contains('dd')) el.classList.toggle('up',o.d>=0); });
      document.querySelectorAll('[data-pb="'+q+'"]').forEach(el=>el.style.width=o.p+'%'); ctPaint(o,q);
      ['y','n'].forEach(s=>{ const k=pk(e.id,o.i,s); if(!POS[k]) return;
        document.querySelectorAll('[data-posv="'+k+'"]').forEach(el=>rollText(el,'$'+dec(posVal(k)),sd*(s==='y'?1:-1),true));
        document.querySelectorAll('[data-posp="'+k+'"]').forEach(el=>{ const pc=Math.round((posVal(k)/POS[k].c-1)*100); el.textContent=pmSg(pc); el.className=pc<0?'dn':'up'; }); });
    });
    document.querySelectorAll('[data-pmc="'+e.id+'"]').forEach(pmCvDraw);
    if(hasPos(e.id)) pmBal(dir);
    if(EV===e&&dev.classList.contains('on-ev')&&!evScrub){ evDraw(false); evHead(dir); }
    if(sheet.classList.contains('pb')&&sheet.classList.contains('on')&&SB.id===e.id&&$('sbWin')) sbRender(); }
  function pmNudge(e){ const st=Math.random()<.5?-1:1;
    if(e.bin){ const o=e.o[0], np=Math.max(2,Math.min(97,o.p+st)); if(np===o.p) return 0; o.d+=np-o.p; o.p=np; o._dir=st; }
    else { const i=Math.floor(Math.random()*e.o.length), o=e.o[i], np=Math.max(1,Math.min(97,o.p+st)); if(np===o.p) return 0;
      const j=e.o.filter(x=>x!==o&&x.p-st>=1&&x.p-st<=97).sort((a,b)=>b.p-a.p)[0]; if(!j) return 0;
      o.d+=st; o.p=np; o._dir=st; j.d-=st; j.p-=st; j._dir=-st; }
    e.o.forEach(o=>{ o.S[0].shift(); o.S[0].push(o.p); for(let q=1;q<4;q++) o.S[q][o.S[q].length-1]=o.p; }); return st; }
  setInterval(()=>{ if(document.hidden) return; const onPm=dev.classList.contains('on-pm')||dev.classList.contains('on-ev'), home=!dev.classList.contains('cr')&&!dev.classList.contains('se')&&!dev.classList.contains('on-stock');
    if(!onPm&&!home) return; const pick=new Set(); if(EV&&dev.classList.contains('on-ev')&&Math.random()<.85) pick.add(EV);
    while(pick.size<3) pick.add(PM[Math.floor(Math.random()*PM.length)]);
    pick.forEach(e=>{ e.o.forEach(o=>o._dir=0); const st=pmNudge(e); if(st) pmPaint(e,st); }); },3200);
  setInterval(()=>{ TSP.p=Math.round(TSP.p*(1+(Math.random()-.5)*.003)*100)/100; TSP.ch=(TSP.p/337.64-1)*100; },3500);
  setInterval(()=>{ if(document.hidden) return; asPaint(); document.querySelectorAll('[data-cd]').forEach(el=>{ const t=cdTxt(pmE(el.dataset.cd)); if(el.textContent!==t) el.textContent=t; }); },1000);
  pmHome(); pmBal(0);
  // ── onboarding stories v2 ──
  { const ua=navigator.userAgent; if((/iPhone|iPod|iPad/.test(ua)&&!/Safari\//.test(ua))||/; wv\)/.test(ua)) document.documentElement.classList.add('inapp'); }
  const STAR='<path d="M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z"/>';
  const stars=a=>a.map(([x,y,s,d])=>'<svg class="sst" viewBox="0 0 24 24" style="left:'+x+'%;top:'+y+'%;width:'+s+'px;height:'+s+'px;animation-delay:'+d+'s">'+STAR+'</svg>').join('');
  const fedI='<i class="pm-ic fed"><svg viewBox="0 0 24 24" fill="none">'+PMI.fed+'</svg></i>';
  const coin=n=>'<i class="coin"></i>'.repeat(n);
  const LNP='M10 178C44 176 58 150 90 156S132 118 166 120 204 138 228 118 268 72 300 60';
  const SETS={};
  const STO=[
    {t:'Заработайте<br>на прогнозах',p:'Биткоин, ставка ФРС, отчёты компаний — угадайте, что случится, и получите деньги.',pal:['#2F6BFF','#7C5CFF','#18B6FF'],
     i:'<div class="s1"><i class="halo"></i><svg class="obt bk" width="320" height="120" viewBox="0 0 320 120"><path d="M10 60A150 44 0 0 1 310 60"/></svg>'+
       '<div class="ball"><i class="sw"></i><i class="sw b"></i><i class="gl"></i><i class="hl"></i></div><svg class="obt fr" width="320" height="120" viewBox="0 0 320 120"><path d="M10 60A150 44 0 0 0 310 60"/></svg>'+
       '<div class="fc"><i class="lg lg-btc"></i>64%</div><div class="fc">'+fedI+'82%</div><div class="fc"><i class="lg lg-aapl"></i>71%</div><div class="fc"><i class="lg lg-eth"></i>58%</div></div>',
     st:[[10,8,22,0],[82,6,30,.8],[90,64,18,1.4],[4,72,26,.4],[44,90,14,1.9]],tick:(sl,t)=>{ const fc=sl.querySelectorAll('.fc'), n=fc.length; fc.forEach((c,k)=>{ const a=t/1000*.55+k*Math.PI*2/n, s=Math.sin(a), f=(s+1)/2; c.style.transform='translate('+(160+150*Math.cos(a)).toFixed(1)+'px,'+(158+44*s).toFixed(1)+'px) translate(-50%,-50%) scale('+(.7+.3*f).toFixed(3)+')'; c.style.zIndex=s>0?4:1; c.style.opacity=(.15+.85*Math.sqrt(f)).toFixed(2); }); }},
    {t:'Ответ простой:<br>«Да» или «Нет»',p:'Думаете, биткоин будет выше $70 000 к 31 октября? Жмите «Да». Не верите — «Нет».',pal:['#10B85A','#2F6BFF','#0FD1A0'],
     i:'<div class="s2"><div class="qc"><div class="t"><i class="lg lg-btc"></i><span>BTC выше<br>$70 000 к 31 окт?</span></div><div class="pc">64%<small>шанс</small></div>'+
       '<div class="b"><span class="y">Да 64¢<i class="rip"></i><i class="bst">'+'<i></i>'.repeat(10)+'</i></span><span class="n">Нет 36¢</span></div><i class="cur"></i></div><i class="ok"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Ваш прогноз — «Да»</i></div>',
     st:[[8,10,26,.2],[86,12,18,1],[90,74,28,.6],[4,80,16,1.6]]},
    {t:'Цена «Да» —<br>это шанс',p:'64¢ значит: рынок оценивает «Да» в 64%. «Да» + «Нет» всегда $1: 64¢ + 36¢.',pal:['#0FB9A8','#2F6BFF','#10C810'],
     i:'<div class="s3"><div class="ring"><svg viewBox="0 0 220 220" width="220" height="220"><defs><linearGradient id="sg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7CF5C4"/><stop offset="1" stop-color="#10C810"/></linearGradient></defs>'+
       '<circle class="tk" cx="110" cy="110" r="106" stroke="rgba(255,255,255,.18)" stroke-width="2" stroke-dasharray="1.5 7" fill="none"/><circle cx="110" cy="110" r="90" stroke="rgba(255,255,255,.08)" stroke-width="16" fill="none"/>'+
       '<circle class="arc" cx="110" cy="110" r="90" stroke="url(#sg3)" stroke-width="16" stroke-linecap="round" fill="none" transform="rotate(-90 110 110)"/></svg><i class="head"></i>'+
       '<div class="c"><b data-cnt="0,64,%">0%</b><span>шанс «Да»</span></div></div>'+
       '<div class="flip"><div class="cn"><div class="fa">64¢</div><div class="fb">64%</div></div></div><div class="cp3">цена ↔ шанс</div></div>',
     st:[[12,8,20,.3],[84,10,28,1.1],[90,62,16,.7],[4,58,24,1.5]],enter:sl=>{ const head=sl.querySelector('.head'); stoCount(sl.querySelector('[data-cnt]'),0,64,'%',350,q=>{ const a=(-90+360*.64*q)*Math.PI/180; head.style.transform='translate('+(110+90*Math.cos(a)-9).toFixed(1)+'px,'+(110+90*Math.sin(a)-9).toFixed(1)+'px)'; head.style.opacity=q>0?1:0; }); }},
    {t:'Контракт за 64¢ —<br>выплата $1',p:'Угадали — каждый контракт платит $1: 25 контрактов за $16 превращаются в $25. Ошиблись — теряете только $16.',pal:['#E8A400','#FF6A00','#2F6BFF'],
     i:'<div class="s4"><div class="stk l"><div class="coins">'+coin(3)+'</div><b>$16</b><span>25 × 64¢</span></div>'+
       '<div class="fly">'+coin(3)+'</div>'+
       '<div class="stk r"><i class="glo"></i><div class="coins">'+coin(5)+'</div><b data-cnt="16,25,$">$16</b><span>Выплата</span><i class="pc">25 × $1</i><i class="spk">'+'<i></i>'.repeat(8)+'</i></div></div>',
     st:[[10,10,24,0],[86,6,20,.9],[92,56,26,1.3],[4,62,18,.5]],enter:sl=>stoCount(sl.querySelector('[data-cnt]'),16,25,'$',900)},
    {t:'Можно выйти<br>до итога',p:'Шанс меняется вместе с новостями. Вырос — продайте и заберите прибыль, не дожидаясь 31 октября.',pal:['#20D08F','#1C8BFF','#7C5CFF'],
     i:'<div class="s5"><svg width="320" height="230" viewBox="0 0 320 230" fill="none"><defs><linearGradient id="sg5" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7CF5C4" stop-opacity=".35"/><stop offset="1" stop-color="#7CF5C4" stop-opacity="0"/></linearGradient><filter id="sf5" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="4"/></filter></defs>'+
       '<path d="M0 60H320M0 120H320M0 180H320" stroke="rgba(255,255,255,.07)" stroke-dasharray="2 6"/>'+
       '<path class="ar" d="'+LNP+'V230H10Z" fill="url(#sg5)"/><path class="gl" d="'+LNP+'" stroke="#7CF5C4" stroke-width="7" filter="url(#sf5)" opacity=".7"/>'+
       '<path class="ln" d="'+LNP+'" stroke="#B8FFE6" stroke-width="3" stroke-linecap="round"/><circle cx="10" cy="178" r="6" fill="#fff" fill-opacity=".85"/></svg>'+
       '<i class="tip"></i><span class="in">Купили по 64¢</span><span class="out">Продать по 80¢ <b>$20</b><i>+25%</i><i class="cur"></i></span><span class="plus">+$4,00</span><i class="spk">'+'<i></i>'.repeat(8)+'</i></div>',
     st:[[8,6,22,.2],[78,2,28,1],[90,70,18,.6],[4,76,24,1.4]],enter:sl=>stoLineInit(sl),tick:(sl,t)=>stoLineTick(sl,t,300,1600)}];
  SETS.pm={items:STO,cta:'Сделать прогноз',done:()=>{ if(dev.classList.contains('on-ev')) return; if(!dev.classList.contains('on-pm')) goPm(); setTimeout(()=>goEv('btc'),450); }};
  function stoLineInit(sl){ sl.querySelectorAll('.ln,.gl').forEach(p=>{ const L=p.getTotalLength(); p.style.strokeDasharray=L; p.style.strokeDashoffset=L; }); const tp=sl.querySelector('.tip'); if(tp) tp.style.opacity=0; }
  function stoLineTick(sl,t,d0,dur){ const ln=sl.querySelector('.ln'), gl=sl.querySelector('.gl'), tip=sl.querySelector('.tip'), L=ln.getTotalLength(), q0=Math.min(1,Math.max(0,(t-d0)/dur)), q=q0<.5?2*q0*q0:1-Math.pow(-2*q0+2,2)/2;
    ln.style.strokeDashoffset=(L*(1-q)).toFixed(1); if(gl) gl.style.strokeDashoffset=(gl.getTotalLength()*(1-q)).toFixed(1); if(tip){ const pt=ln.getPointAtLength(L*q); tip.style.transform='translate('+(pt.x-8).toFixed(1)+'px,'+(pt.y-8).toFixed(1)+'px)'; tip.style.opacity=q>0?1:0; } return q; }
  let stoI=0, stoBg=false, stoHeld=false, stoHT=0, stoDn=null, stoRaf=0, stoT=0, stoLast=0, stoKey=null;
  const stoItems=()=>SETS[stoKey].items;
  const NB='\u00a0', typo=t=>t.replace(/ (—|=|\+|×)/g,NB+'$1').replace(/(\d) (\d{3})/g,'$1'+NB+'$2').replace(/(^|[\s(«])([а-яёА-ЯЁ]{1,2}|\$?\d+[,\d]*¢?|[=+×]) /g,'$1$2'+NB).replace(/(^|[\s(«])([а-яёА-ЯЁ]{1,2}) /g,'$1$2'+NB);
  const wordsHTML=t=>{ let k=0; t=typo(t); return t.split('<br>').map(l=>l.split(' ').map(w=>'<span class="w" style="--i:'+(k++)+'">'+w+'</span>').join(' ')).join('<br>'); };
  function stoInit(){ if(stoBg) return; stoBg=true; const sto=$('pmSto');
    sto.insertAdjacentHTML('afterbegin','<div class="sto-bg"><i class="g1"></i><i class="g2"></i><i class="g3"></i></div>');
    sto.addEventListener('pointerdown',ev=>{ if(ev.target.closest('button')) return; stoDn={x:ev.clientX}; clearTimeout(stoHT); stoHT=setTimeout(()=>{ stoHeld=true; sto.classList.add('hold'); },200); });
    sto.addEventListener('pointerup',ev=>{ if(!stoDn) return; clearTimeout(stoHT); const was=stoHeld; stoHeld=false; sto.classList.remove('hold'); const d=stoDn; stoDn=null; if(was) return;
      const r=sto.getBoundingClientRect(); stoGo(d.x-r.left<r.width*.3?stoI-1:stoI+1); });
    sto.addEventListener('pointercancel',()=>{ clearTimeout(stoHT); stoHeld=false; stoDn=null; sto.classList.remove('hold'); });
    $('stoX').onclick=stoClose;
    $('stoCta').onclick=()=>{ if(stoI<stoItems().length-1) stoGo(stoI+1); else { const f=SETS[stoKey].done; stoClose(); setTimeout(f,250); } };
    document.addEventListener('keydown',ev=>{ if(!sto.classList.contains('on')) return; if(ev.key==='Escape') stoClose(); if(ev.key==='ArrowRight') stoGo(stoI+1); if(ev.key==='ArrowLeft') stoGo(stoI-1); });
    window.addEventListener('resize',()=>{ if(sto.classList.contains('on')) stoFit(); }); }
  function stoRender(){ const it=stoItems();
    $('stoBars').innerHTML=it.map(()=>'<i><b></b></i>').join('');
    $('stoSl').innerHTML=it.map((s,i)=>'<div class="sto-s" data-i="'+i+'"><div class="sto-tx"><h2 class="sto-t">'+wordsHTML(s.t)+'</h2><p class="sto-p">'+typo(s.p)+'</p></div><div class="sto-ill"><div class="fit">'+s.i+'</div></div></div>').join('');
    $('stoBars').querySelectorAll('b').forEach(b=>b.addEventListener('animationend',()=>{ if(!stoHeld) stoGo(stoI+1,true); })); }
  function stoFit(){ $('stoSl').querySelectorAll('.sto-ill').forEach(il=>{ const k=Math.min(1.12,il.clientHeight/320,(il.clientWidth-24)/320); il.querySelector('.fit').style.transform='scale('+Math.max(.5,k).toFixed(3)+')'; }); }
  function stoOpen(key){ key=key||'pm'; closeSheet(); stoInit(); if(stoKey!==key){ stoKey=key; stoRender(); } const s=$('pmSto'); s.dataset.set=key; s.classList.add('on'); s.setAttribute('aria-hidden','false'); dev.classList.add('sto-on'); syncStatus(); stoFit(); stoGo(0); cancelAnimationFrame(stoRaf); stoLast=performance.now(); stoRaf=requestAnimationFrame(stoLoop); }
  function stoClose(){ const s=$('pmSto'); s.classList.remove('on','hold'); s.setAttribute('aria-hidden','true'); dev.classList.remove('sto-on'); cancelAnimationFrame(stoRaf); syncStatus(); }
  function stoCount(el,a,b,unit,delay,cb){ let t0=0; const f=t=>{ if(!t0) t0=t; if(stoHeld){ t0+=16; } const k=Math.min(1,(t-t0)/1300), q=1-Math.pow(1-k,3), v=Math.round(a+(b-a)*q); el.textContent=unit==='$'?'$'+v:v+unit; if(cb) cb(q); if(k<1&&el.isConnected&&$('pmSto').classList.contains('on')) requestAnimationFrame(f); }; setTimeout(()=>requestAnimationFrame(f),delay); }
  function stoGo(i,auto){ const it=stoItems(); if(i<0) i=0; if(i>=it.length){ if(auto) return; stoClose(); return; } stoI=i; stoT=0;
    $('stoBars').querySelectorAll('i').forEach((b,j)=>{ b.className=j<i?'bdn':''; });
    const cur=$('stoBars').children[i]; void cur.offsetWidth; cur.className='brn';
    $('stoSl').querySelectorAll('.sto-s').forEach((s,j)=>{ s.classList.remove('on','pre'); if(j<i) s.classList.add('pre'); if(j===i){ void s.offsetWidth; s.classList.add('on'); } });
    const pal=it[i].pal; $('pmSto').querySelectorAll('.sto-bg>i').forEach((a,k)=>a.style.backgroundColor=pal[k]||pal[0]);
    const sl=$('stoSl').children[i]; if(it[i].enter) it[i].enter(sl);
    $('stoCta').textContent=i===it.length-1?SETS[stoKey].cta:'Далее'; }
  function stoLoop(t){ const dt=Math.min(50,t-stoLast); stoLast=t; if(!stoHeld) stoT+=dt; const it=stoItems()[stoI], sl=$('stoSl').children[stoI];
    if(it&&it.tick&&sl) it.tick(sl,stoT);
    if($('pmSto').classList.contains('on')) stoRaf=requestAnimationFrame(stoLoop); }

  // ═════════ OPTIONS ═════════
  const OX={iv:.285,r:.04};
  let OPF=1200; // свободный остаток D-счёта (весь D-счёт — 21 200 $: 20 000 $ в долгосроке + 1 200 $)
  function ncdf(x){ const t=1/(1+.2316419*Math.abs(x)), d=.3989423*Math.exp(-x*x/2), p=d*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274)))); return x>0?1-p:p; }
  function bsP(S,K,T,cp){ if(T<=0) return Math.max(0,cp==='c'?S-K:K-S); const v=OX.iv, sq=v*Math.sqrt(T), d1=(Math.log(S/K)+(OX.r+v*v/2)*T)/sq, d2=d1-sq;
    return cp==='c'?S*ncdf(d1)-K*Math.exp(-OX.r*T)*ncdf(d2):K*Math.exp(-OX.r*T)*ncdf(-d2)-S*ncdf(-d1); }
  const OEXP=[{d:21,l:'17 окт',f:'17 октября'},{d:28,l:'24 окт',f:'24 октября'},{d:35,l:'31 окт',f:'31 октября'},{d:56,l:'21 ноя',f:'21 ноября'},{d:84,l:'19 дек',f:'19 декабря'}];
  const OSTR=[175,170,165,160,155,150,145,140];
  let OCP='c', OEI=0, opSeen=false;
  const oS=()=>midPx();
  const oR=v=>v>=3?Math.round(v*20)/20:Math.max(.01,Math.round(v*100)/100);
  const oUsd=v=>(v<0?MIN:'')+'$'+dec(Math.abs(v));
  const oSgU=v=>(v<0?MIN:'+')+'$'+dec(Math.abs(v));
  const oSgP=v=>(v<0?MIN:'+')+dec(Math.abs(v),1).replace(/,0$/,'')+'%';
  const cpN=cp=>cp==='c'?'Call':'Put';
  const dN=d=>d+' '+pmPl(d,'день','дня','дней');
  function oQ(K,cp,d){ const S=oS(), T=d/365, m=Math.max(.01,bsP(S,K,T,cp)), mid=oR(m), sp=mid>=3?.1:.04, ask=oR(mid+sp/2), bid=Math.max(.01,oR(mid-sp/2));
    const prev=Math.max(.01,bsP(PREV,K,(d+1)/365,cp)), ch=(m/prev-1)*100, be=cp==='c'?K+ask:K-ask, need=(be/S-1)*100;
    const v=OX.iv, d2=(Math.log(S/be)+(OX.r-v*v/2)*T)/(v*Math.sqrt(T)), cop=cp==='c'?ncdf(d2):ncdf(-d2);
    return {K,cp,d,mid,ask,bid,ch,be,need,cop}; }
  const OPOS={'c160e0':{K:160,cp:'c',ei:0,n:2,avg:2.5,bd:'1 сен',bdd:47}};
  const opKey=(K,cp,ei)=>cp+K+'e'+ei;
  const oVal=p=>p.n*100*oQ(p.K,p.cp,OEXP[p.ei].d).mid;

  // ── chain ──
  function goOp(){ closeSheet(); opRender(); $('opScroll').scrollTop=0; $('opNav').classList.remove('scrolled','mini'); dev.classList.add('on-op'); $('scrOp').setAttribute('aria-hidden','false'); syncStatus(); }
  function opBack(){ dev.classList.remove('on-op'); $('scrOp').setAttribute('aria-hidden','true'); syncStatus(); }
  function opEntry(){ goOp(); if(!opSeen){ opSeen=true; setTimeout(()=>{ if(dev.classList.contains('on-op')) stoOpen('op'); },450); } }
  function opHead(dir){ const S=oS(), ch=(S/PREV-1)*100; const t='$'+dec(S); if(dir) rollText($('opPx'),t,dir,true); else $('opPx').textContent=t; $('opNavPx').textContent=t;
    $('opCh').textContent=(ch<0?MIN:'+')+dec(Math.abs(ch))+'%'; $('opCh').classList.toggle('dn',ch<0); }
  function opRow(q){ const c=q.cp==='c', p=Math.round(q.cop*100);
    return '<div class="op-row" role="button" data-ot="'+q.K+'"><div class="m"><div class="t"><b>$'+q.K+' '+cpN(q.cp)+'</b></div>'+
      '<div class="st"><span><small>В плюс от</small>$'+dec(q.be)+'</span><span><small>'+(c?'Нужен рост':'Нужно падение')+'</small>'+oSgP(q.need)+'</span></div></div>'+
      '<div class="r"><span class="pb">$'+dec(q.ask)+'</span><small class="'+(q.ch<0?'dn':'up')+'">'+oSgP(q.ch)+' сегодня</small></div></div>'; }
  function opRender(){ const S=oS(), e=OEXP[OEI], c=OCP==='c';
    opHead(0);
    $('scrOp').dataset.cp=OCP; $('opDir').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.cp===OCP));
    $('opDates').innerHTML=OEXP.map((x,i)=>'<button class="'+(i===OEI?'on':'')+'" data-ei="'+i+'">'+x.l+'<small>'+x.d+' д</small></button>').join('');
    $('opListH').textContent=c?'Контракты на рост':'Контракты на падение'; $('opListS').textContent='до '+e.f;
    let h='', div=false; OSTR.forEach(K=>{ if(!div&&K<S){ div=true; h+='<div class="op-px"><span>Цена акции <b>$'+dec(S)+'</b></span></div>'; } h+=opRow(oQ(K,OCP,e.d)); });
    $('opList').innerHTML=h; opMine(); }
  function opMine(){ const ks=Object.keys(OPOS);
    $('opMine').innerHTML=ks.length?'<div class="op-mine"><div class="h">Ваши опционы</div>'+ks.map(opPosRow).join('')+'</div>':''; opCard(); }
  function opPosRow(k){ const p=OPOS[k], v=oVal(p), c=p.n*100*p.avg, pl=v-c, e=OEXP[p.ei];
    return '<div class="op-pr" role="button" data-opos="'+k+'"><div class="m"><b>$'+p.K+' '+cpN(p.cp)+'</b><span class="dt'+(e.d<=7?' w':'')+'">'+e.l+' · '+e.d+' д</span><small>'+p.n+' '+pmPl(p.n,'контракт','контракта','контрактов')+'</small></div>'+
      '<div class="r"><b>'+oUsd(v)+'</b><small class="'+(pl<0?'dn':'up')+'">'+oSgU(pl)+' ('+oSgP(pl/c*100)+')</small></div></div>'; }
  function opCard(){ const ks=Object.keys(OPOS), n=ks.reduce((s,k)=>s+OPOS[k].n,0), v=ks.reduce((s,k)=>s+oVal(OPOS[k]),0);
    $('opCardS').textContent=ks.length?ks.length+' '+pmPl(ks.length,'позиция','позиции','позиций')+' · '+n+' '+pmPl(n,'контракт','контракта','контрактов')+' · '+oUsd(v):'Пока нет опционов';
    $('opCardL').innerHTML=ks.map(opPosRow).join(''); }
  $('opBack').innerHTML=$('cnBack').innerHTML; $('opBack').onclick=opBack;
  $('opHelp').onclick=()=>stoOpen('op'); $('opHow').onclick=ev=>{ if(ev.target.closest('.how-x')) return howHide('opHow'); stoOpen('op'); };
  $('opDir').addEventListener('click',ev=>{ const b=ev.target.closest('button'); if(!b||b.dataset.cp===OCP) return; OCP=b.dataset.cp; const l=$('opList'); l.classList.add('fade'); setTimeout(()=>{ opRender(); l.classList.remove('fade'); },150); });
  $('opDates').addEventListener('click',ev=>{ const b=ev.target.closest('button'); if(!b) return; OEI=+b.dataset.ei; opRender(); });
  $('opScroll').addEventListener('scroll',()=>{ const y=$('opScroll').scrollTop; $('opNav').classList.toggle('scrolled',y>6); $('opNav').classList.toggle('mini',y>60); },{passive:true});
  $('scrOp').addEventListener('click',ev=>{ const r=ev.target.closest('[data-ot]'); if(r){ otOpen(+r.dataset.ot,OCP,OEI); return; } const p=ev.target.closest('[data-opos]'); if(p) opPos(p.dataset.opos); });
  $('opCardH').onclick=()=>goOp(); $('opCardGo').onclick=opEntry;
  $('opCardL').addEventListener('click',ev=>{ const p=ev.target.closest('[data-opos]'); if(p) opPos(p.dataset.opos); });
  $('pfSecs').addEventListener('click',ev=>{ const p=ev.target.closest('[data-opos]'); if(p){ ev.stopPropagation(); opPos(p.dataset.opos); } },true);

  // ── simulated returns chart ──
  function simHTML(){ return '<div class="ot-sim"><div class="ot-sq"><span class="q">Если <span data-sd></span> AAPL будет</span><b data-sx></b></div><div class="ot-res"><b data-sr></b><small data-sp></small></div>'+
    '<div class="ot-ch" data-sc><svg data-sv></svg><i class="ot-ln" data-sl></i><i class="ot-mk" data-sm></i><span class="ot-tag" data-st></span></div>'+
    '<div class="ot-lg"><span><i class="s"></i>в день окончания</span><span><i class="d"></i>сегодня</span><span class="hint"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 12H3m0 0 3-3m-3 3 3 3M16 12h5m0 0-3-3m3 3-3 3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>двигайте</span></div></div>'; }
  function mkSim(root,get){ const ch=root.querySelector('[data-sc]'), sv=root.querySelector('[data-sv]'); let geo=null, X=null;
    function draw(){ const c=get(), S=oS(), W=ch.clientWidth||326, H=136, pad=10, k=c.n*100, prem=c.prem, K=c.K, cp=c.cp, T=c.d/365, be=cp==='c'?K+prem:K-prem;
      const lo=Math.min(S,K,be)*.9, hi=Math.max(S,K,be)*1.1, pl=x=>k*((cp==='c'?Math.max(0,x-K):Math.max(0,K-x))-prem), td=x=>k*(bsP(x,K,T,cp)-prem);
      const N=64, xs=Array.from({length:N},(_,i)=>lo+(hi-lo)*i/(N-1)), e1=xs.map(pl), e2=xs.map(td), all=e1.concat(e2);
      const mn=Math.min(...all,-k*prem)*1.12, mx=Math.max(...all,k*prem*.6)*1.08, PX=x=>(x-lo)/(hi-lo)*W, PY=v=>pad+(mx-v)/(mx-mn)*(H-2*pad), y0=PY(0), z=(y0/H).toFixed(4);
      const path=a=>a.map((v,i)=>(i?'L':'M')+PX(xs[i]).toFixed(1)+' '+PY(v).toFixed(1)).join('');
      const p1=path(e1), p2=path(e2), id='sim'+(pmN++);
      sv.setAttribute('viewBox','0 0 '+W+' '+H); sv.setAttribute('width',W); sv.setAttribute('height',H);
      sv.innerHTML='<defs><linearGradient id="'+id+'s" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="'+H+'"><stop offset="'+z+'" stop-color="#10C810"/><stop offset="'+z+'" stop-color="#FF3B47"/></linearGradient>'+
        '<linearGradient id="'+id+'f" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="'+H+'"><stop offset="0" stop-color="#10C810" stop-opacity=".22"/><stop offset="'+z+'" stop-color="#10C810" stop-opacity=".04"/><stop offset="'+z+'" stop-color="#FF3B47" stop-opacity=".04"/><stop offset="1" stop-color="#FF3B47" stop-opacity=".2"/></linearGradient></defs>'+
        '<path d="M0 '+y0.toFixed(1)+'H'+W+'" stroke="#D1D1D6" stroke-dasharray="3 4"/>'+
        '<path d="M'+PX(S).toFixed(1)+' 0V'+H+'" stroke="#AEAEB2" stroke-dasharray="2 4"/>'+
        '<path d="'+p1+'L'+W+' '+y0.toFixed(1)+'L0 '+y0.toFixed(1)+'Z" fill="url(#'+id+'f)"/>'+
        '<path d="'+p2+'" fill="none" stroke="#8E8E93" stroke-width="1.6" stroke-dasharray="4 4"/>'+
        '<path d="'+p1+'" fill="none" stroke="url(#'+id+'s)" stroke-width="2.6" stroke-linejoin="round"/>'+
        '<circle cx="'+PX(be).toFixed(1)+'" cy="'+y0.toFixed(1)+'" r="4" fill="#fff" stroke="#0F0F0F" stroke-width="2"/>';
      geo={W,H,lo,hi,PX,PY,pl,k,prem,be,S};
      if(X==null||X<lo||X>hi) X=c.x0!=null?c.x0:(cp==='c'?Math.max(be*1.04,S*1.08):Math.min(be*.96,S*.92));
      mark(); }
    function mark(){ const g=geo, c=get(), v=g.pl(X), cost=g.k*g.prem, px=g.PX(X), py=g.PY(v);
      root.querySelector('[data-sd]').textContent=c.date; root.querySelector('[data-sx]').textContent='$'+dec(X);
      const r=root.querySelector('[data-sr]'); r.textContent=oSgU(v); r.className=v<0?'dn':'up'; const p=root.querySelector('[data-sp]'); p.textContent=oSgP(v/cost*100); p.className=v<0?'dn':'up';
      root.querySelector('[data-sl]').style.transform='translateX('+px.toFixed(1)+'px)'; const m=root.querySelector('[data-sm]'); m.style.transform='translate('+(px-8).toFixed(1)+'px,'+(py-8).toFixed(1)+'px)'; m.classList.toggle('dn',v<0);
      const tg=root.querySelector('[data-st]'); tg.textContent=Math.abs(X-g.be)<(g.hi-g.lo)*.04?'в ноль':Math.abs(X-g.S)<(g.hi-g.lo)*.04?'сейчас':''; tg.style.transform='translateX('+Math.max(0,Math.min(g.W-60,px-30)).toFixed(1)+'px)'; }
    const at=ev=>{ const r=ch.getBoundingClientRect(), f=Math.max(0,Math.min(1,(ev.clientX-r.left)/r.width)); X=Math.round((geo.lo+(geo.hi-geo.lo)*f)*2)/2; mark(); };
    let drag=false; ch.addEventListener('pointerdown',ev=>{ drag=true; try{ ch.setPointerCapture(ev.pointerId); }catch(_){} at(ev); ch.classList.add('on'); });
    ch.addEventListener('pointermove',ev=>{ if(drag) at(ev); }); ['pointerup','pointercancel'].forEach(t=>ch.addEventListener(t,()=>{ drag=false; ch.classList.remove('on'); }));
    draw(); return {draw}; }

  // ── order ticket ──
  let OT={}, otSim=null;
  function otOpen(K,cp,ei,mode){ const k=opKey(K,cp,ei); OT={K,cp,ei,mode:mode||'buy',n:1,ok:false,k}; const e=OEXP[ei], sell=OT.mode==='sell';
    openSheet('<div class="pb-h"><i class="lg lg-aapl"></i><span class="m"><b>'+(sell?'Продать':'Купить')+' $'+K+' '+cpN(cp)+'</b><span>до '+e.f+' · осталось '+dN(e.d)+'</span></span>'+XB+'</div>'+
      '<div class="ot-body">'+(sell?'':simHTML())+
      '<div class="ot-row"><span class="k">Контракты<small>1 контракт = 100 акций</small></span><div class="st"><button data-st="-1" aria-label="Меньше">−</button><b id="otN">1</b><button data-st="1" aria-label="Больше">+</button></div></div>'+
      '<div class="ot-row"><span class="k">Цена за опцион<small id="otBa"></small></span><b id="otPx"></b></div>'+
      '<div class="tk-sum ot-sum" id="otSum"></div><div class="ot-av" id="otAv"></div>'+
      (sell?'':'<button class="ot-ok" id="otOk"><i class="cb"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></i><span>Понимаю: если прогноз не сбудется, могу потерять всю сумму</span></button>')+
      '</div><div class="ctazone"><button class="cta" id="otGo"></button></div>','otk');
    if(sell) OT.n=OPOS[k].n;
    const q=()=>oQ(K,cp,e.d);
    if(!sell) otSim=mkSim(sheet,()=>({K,cp,d:e.d,n:OT.n,prem:q().ask,date:e.l}));
    sheet.querySelector('.ot-row .st').addEventListener('click',ev=>{ const b=ev.target.closest('[data-st]'); if(!b) return; const mx=sell?OPOS[k].n:20; OT.n=Math.max(1,Math.min(mx,OT.n+ +b.dataset.st)); typing(); otRender(); if(otSim) otSim.draw(); });
    if(!sell) $('otOk').onclick=()=>{ OT.ok=!OT.ok; otRender(); };
    $('otGo').onclick=otGo; otRender(); }
  function otRender(){ const e=OEXP[OT.ei], q=oQ(OT.K,OT.cp,e.d), sell=OT.mode==='sell', px=sell?q.bid:q.ask, sum=OT.n*100*px, cell=(k,v,c)=>'<div><div class="k">'+k+'</div><div class="v'+(c?' '+c:'')+'">'+v+'</div></div>';
    $('otN').textContent=OT.n; $('otAv').textContent=(OT.mode==='sell'?'Зачислим на D-счёт':'Спишем с D-счёта')+' · доступно $'+dec(OPF); $('otPx').textContent='$'+dec(px); $('otBa').textContent='Bid $'+dec(q.bid)+' · Ask $'+dec(q.ask);
    if(sell){ const p=OPOS[OT.k], cost=OT.n*100*p.avg, pl=sum-cost;
      $('otSum').innerHTML=cell('Получите',oUsd(sum))+cell('Результат','<span class="'+(pl<0?'dn':'up')+'">'+oSgU(pl)+'</span>')+cell('Вложили',oUsd(cost))+cell('Осталось',(p.n-OT.n)+' '+pmPl(p.n-OT.n,'контракт','контракта','контрактов'));
      const g=$('otGo'); g.textContent='Продать за '+oUsd(sum); g.classList.add('sl'); g.disabled=false; return; }
    $('otSum').innerHTML=cell('Спишем',oUsd(sum))+cell('В плюс от','$'+dec(q.be))+cell('Шанс прибыли',Math.round(q.cop*100)+'%')+cell('Макс. потеря','<span class="dn">'+MIN+oUsd(sum)+'</span>');
    $('otOk').classList.toggle('on',OT.ok); const over=sum>OPF+1e-9;
    const g=$('otGo'); g.textContent=over?'Не хватает · доступно $'+dec(OPF):OT.ok?'Купить за '+oUsd(sum):'Отметьте, что понимаете риск'; g.disabled=!OT.ok||over; }
  function otGo(){ const g=$('otGo'); if(g.disabled||g.classList.contains('ld')) return; g.classList.add('ld'); const e=OEXP[OT.ei], q=oQ(OT.K,OT.cp,e.d), sell=OT.mode==='sell', k=OT.k, n=OT.n;
    setTimeout(()=>{ if(sell){ const p=OPOS[k], sum=n*100*q.bid, pl=sum-n*100*p.avg; p.n-=n; if(!p.n) delete OPOS[k]; OPF=Math.round((OPF+sum)*100)/100;
        pbDone('Опцион продан',n+' '+pmPl(n,'контракт','контракта','контрактов')+' $'+OT.K+' '+cpN(OT.cp),[['Получили',oUsd(sum)],['Результат','<b class="'+(pl<0?'dn':'up')+'">'+oSgU(pl)+'</b>']],pl>0,null,opAfter); }
      else { const p=OPOS[k]||{K:OT.K,cp:OT.cp,ei:OT.ei,n:0,avg:0,bd:'26 сен',bdd:0}, sum=n*100*q.ask; p.avg=(p.avg*p.n+q.ask*n)/(p.n+n); p.n+=n; OPOS[k]=p; OPF=Math.round((OPF-sum)*100)/100;
        pbDone('Заявка исполнена','Куплено '+n+' '+pmPl(n,'контракт','контракта','контрактов')+' $'+OT.K+' '+cpN(OT.cp),[['Опцион','AAPL $'+OT.K+' '+cpN(OT.cp)+' · '+e.l],['Списано',oUsd(sum)],['В плюс от','$'+dec(q.be)],['Макс. потеря','<b class="dn">'+MIN+oUsd(sum)+'</b>']],true,null,opAfter); } },700); }
  function opAfter(){ if(dev.classList.contains('on-op')){ opRender(); setTimeout(()=>{ const m=$('opMine'); if(m.firstChild){ $('opScroll').scrollTo({top:Math.max(0,m.offsetTop-70),behavior:'smooth'}); m.firstChild.classList.remove('flash'); void m.firstChild.offsetWidth; m.firstChild.classList.add('flash'); } },250); } else { opCard(); toast('Готово — позиция в «Ваши опционы»'); } }

  // ── position sheet ──
  function opPos(k){ const p=OPOS[k]; if(!p) return; const e=OEXP[p.ei], q=oQ(p.K,p.cp,e.d), v=p.n*100*q.mid, c=p.n*100*p.avg, pl=v-c, prog=Math.round(p.bdd/(p.bdd+e.d)*100);
    openSheet('<div class="pb-h"><i class="lg lg-aapl"></i><span class="m"><b>AAPL · $'+p.K+' '+cpN(p.cp)+'</b><span>до '+e.f+' · осталось '+dN(e.d)+'</span></span>'+XB+'</div>'+
      '<div class="ot-body"><div class="op-pv"><span class="k">Стоимость позиции</span><b>'+oUsd(v)+'</b><small class="'+(pl<0?'dn':'up')+'">'+oSgU(pl)+' ('+oSgP(pl/c*100)+') за всё время</small></div>'+
      '<div class="op-pg"><div><div class="k">Контракты</div><div class="v">'+p.n+'</div></div><div><div class="k">Средняя цена</div><div class="v">$'+dec(p.avg)+'</div></div><div><div class="k">Текущая цена</div><div class="v">$'+dec(q.mid)+'</div></div><div><div class="k">Вложено</div><div class="v">'+oUsd(c)+'</div></div></div>'+
      '<div class="op-imp"><div class="h">Что важно</div><div class="tb"><i style="width:'+prog+'%"></i></div><div class="tl"><span>куплен '+p.bd+'</span><b>осталось '+dN(e.d)+'</b></div>'+
      '<div class="rw"><span>В плюс от</span><b>$'+dec(p.cp==='c'?p.K+p.avg:p.K-p.avg)+'</b></div><div class="rw"><span>Сейчас акция</span><b>$'+dec(oS())+'</b></div><div class="rw"><span>Максимальный риск</span><b>'+oUsd(c)+'</b></div>'+
      '<p>Опцион дешевеет каждый день, даже если акция стоит на месте. Чем ближе '+e.l+', тем быстрее.</p></div>'+simHTML()+'</div>'+
      '<div class="ctazone op-pa"><button class="cta sl" id="opSell">Продать</button><button class="cta lt" id="opMore">Докупить</button></div>','otk');
    mkSim(sheet,()=>({K:p.K,cp:p.cp,d:e.d,n:p.n,prem:p.avg,date:e.l}));
    $('opSell').onclick=()=>otOpen(p.K,p.cp,p.ei,'sell'); $('opMore').onclick=()=>otOpen(p.K,p.cp,p.ei,'buy'); }

  // live: re-price when AAPL moves
  let opLastS=0; setInterval(()=>{ const S=oS(); if(S===opLastS) return; const dir=S>opLastS?1:-1; opLastS=S;
    if(dev.classList.contains('on-op')){ opHead(dir); const e=OEXP[OEI]; $('opList').querySelectorAll('.op-row').forEach(r=>{ const q=oQ(+r.dataset.ot,OCP,e.d), pb=r.querySelector('.pb'), t='$'+dec(q.ask); if(pb.textContent!==t){ pb.textContent=t; pb.classList.remove('fl'); void pb.offsetWidth; pb.classList.add('fl'); } }); opMine(); }
    else opCard(); if(sheet.classList.contains('otk')&&sheet.classList.contains('on')&&$('otSum')) otRender(); },1500);
  opCard();

  // ── options stories ──
  const oIco=(p,c)=>'<svg width="22" height="22" viewBox="0 0 24 24" fill="none">'+p+'</svg>';
  SETS.op={cta:'Перейти к опционам',done:()=>{ if(!dev.classList.contains('on-op')) goOp(); },items:[
    {t:'Опцион —<br>бронь цены',p:'Платите $320 — и до 17 октября можете купить 100 акций Apple по $160, даже если они подорожают.',pal:['#10B85A','#2F6BFF','#0FD1A0'],
     i:'<div class="o1"><div class="tkt"><div class="h"><i class="lg lg-aapl"></i><span>AAPL<small>сейчас $152</small></span></div><div class="pr">$160</div><div class="dt">цена брони · до 17 октября</div><i class="perf"></i><div class="ft"><span>Плата за бронь</span><b>$320</b></div></div><i class="stamp">Забронировано</i><i class="wave"></i></div>',
     st:[[10,8,22,0],[84,6,28,.8],[90,62,18,1.4],[4,70,24,.4]]},
    {t:'Зарабатываете<br>на разнице',p:'Вложили $320 — получили $1 500. И не нужно тратить $15 200 на сами акции.',pal:['#2F6BFF','#7C5CFF','#18B6FF'],
     i:'<div class="o2"><i class="rail"><i></i></i>'+[['<circle cx="12" cy="12" r="8" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="3.5" fill="#fff"/>','Бронируете цену','$160 за акцию до 17 октября'],
       ['<path d="M3 17l6-6 4 4 8-8M15 7h6v6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>','Акция дорожает','Например, до $175'],
       ['<rect x="3" y="6" width="18" height="12" rx="3" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="2.6" fill="#fff"/>','Забираете разницу','$15 × 100 акций = $1 500']].map((s,k)=>
       '<div class="stp" style="--k:'+k+'"><i class="ic">'+oIco(s[0])+'</i><span><b>'+s[1]+'</b><small>'+s[2]+'</small></span><i class="ck"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>').join('')+'</div>',
     st:[[8,10,26,.2],[86,12,18,1],[92,74,26,.6],[4,82,16,1.6]]},
    {t:'Call — на рост,<br>Put — на падение',p:'Верите в рост — берите Call. Ждёте падения — Put. Заработать можно в обе стороны.',pal:['#10B85A','#FF3B47','#2F6BFF'],
     i:'<div class="o3"><div class="cc c"><div class="h"><span>Call</span><small>ставка на рост</small></div><svg width="130" height="90" viewBox="0 0 130 90" fill="none"><path pathLength="1" class="dr" d="M4 78C22 74 28 58 44 62S66 40 80 42 102 20 124 10" stroke="#7CF29C" stroke-width="3.5" stroke-linecap="round"/></svg><i class="ar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>'+
       '<div class="cc p"><div class="h"><span>Put</span><small>ставка на падение</small></div><svg width="130" height="90" viewBox="0 0 130 90" fill="none"><path pathLength="1" class="dr" d="M4 12C22 16 28 34 44 30S66 52 80 50 102 72 124 80" stroke="#FF8A8A" stroke-width="3.5" stroke-linecap="round"/></svg><i class="ar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div></div>',
     st:[[10,8,20,.3],[84,10,28,1.1],[90,70,16,.7],[4,66,24,1.5]]},
    {t:'Где начинается<br>прибыль',p:'Бронь стоила $3,20 на акцию. Значит, прибыль — когда AAPL дороже $160 + $3,20 = $163,20.',pal:['#0FB9A8','#2F6BFF','#10C810'],
     i:'<div class="o4"><div class="hd"><span>Если 17 окт AAPL будет</span><b data-o4x>$150</b></div><div class="rs" data-o4r>−$320</div><svg width="300" height="170" viewBox="0 0 300 170" fill="none"><defs><linearGradient id="o4g" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="170"><stop offset=".68" stop-color="#7CF29C"/><stop offset=".68" stop-color="#FF8A8A"/></linearGradient><linearGradient id="o4f" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="170"><stop offset="0" stop-color="#10C810" stop-opacity=".35"/><stop offset=".68" stop-color="#10C810" stop-opacity="0"/><stop offset=".68" stop-color="#FF3B47" stop-opacity="0"/><stop offset="1" stop-color="#FF3B47" stop-opacity=".3"/></linearGradient></defs>'+
       '<path d="M0 115.6H300" stroke="rgba(255,255,255,.25)" stroke-dasharray="3 5"/><path d="M0 138H150L300 12V115.6H0Z" fill="url(#o4f)"/><path pathLength="1" class="dr" d="M0 138H150L300 12" stroke="url(#o4g)" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>'+
       '<circle cx="176.7" cy="115.6" r="5" fill="#fff"/><text x="176.7" y="103" fill="rgba(255,255,255,.8)" font-size="11" text-anchor="middle" font-weight="600">в ноль $163,20</text><text x="150" y="160" fill="rgba(255,255,255,.55)" font-size="11" text-anchor="middle">$160</text></svg><i class="sl" data-o4l></i><i class="sc" data-o4s><i></i></i></div>',
     st:[[8,6,22,.2],[80,4,26,1],[92,72,18,.6],[4,78,24,1.4]],
     tick:(sl,t)=>{ const q=Math.max(0,Math.min(1,((t-900)%5200)/3600)), e=.5-Math.cos(q*Math.PI)/2, X=145+30*e, x=(X-142)/(178-142)*300, v=Math.max(0,X-160)*100-320, y=X<=160?138:138-(X-160)/18*126;
       const sc=sl.querySelector('[data-o4s]'), ln=sl.querySelector('[data-o4l]'); sc.style.transform='translate('+(x+10).toFixed(1)+'px,'+(y+56).toFixed(1)+'px)'; ln.style.transform='translateX('+(x+10).toFixed(1)+'px)'; sc.classList.toggle('dn',v<0); sc.style.opacity=ln.style.opacity=t>900?1:0;
       sl.querySelector('[data-o4x]').textContent='$'+dec(X); const r=sl.querySelector('[data-o4r]'); r.textContent=(v<0?MIN:'+')+'$'+dec(Math.abs(v),0); r.className='rs '+(v<0?'dn':'up'); }},
    {t:'Бронь дешевеет<br>каждый день',p:'Даже если акция стоит на месте. Чем ближе 17 октября, тем быстрее.',pal:['#E8A400','#FF6A00','#2F6BFF'],
     i:'<div class="o5"><div class="dy"><b data-o5d>21</b><span data-o5l>день до даты</span></div><svg width="300" height="170" viewBox="0 0 300 170" fill="none"><defs><linearGradient id="o5f" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FFC94D" stop-opacity=".35"/><stop offset="1" stop-color="#FFC94D" stop-opacity="0"/></linearGradient></defs>'+
       '<path d="M10 20C120 26 200 44 250 90S286 150 292 162V170H10Z" fill="url(#o5f)"/><path class="ln" d="M10 20C120 26 200 44 250 90S286 150 292 162" stroke="#FFD66B" stroke-width="3.5" stroke-linecap="round"/></svg><i class="tip"></i><span class="val" data-o5v>$320</span></div>',
     st:[[10,10,24,0],[86,6,20,.9],[92,56,26,1.3],[4,62,18,.5]],
     enter:sl=>{ const ln=sl.querySelector('.ln'); ln.style.strokeDasharray=''; ln.style.strokeDashoffset=''; },
     tick:(sl,t)=>{ const ln=sl.querySelector('.ln'), L=ln.getTotalLength(), q=Math.max(0,Math.min(1,((t-500)%5600)/4200)), pt=ln.getPointAtLength(L*q), days=Math.round(21*(1-q)), val=320*Math.sqrt(1-q)*.92+ (q<1?25*(1-q):0);
       const tp=sl.querySelector('.tip'); tp.style.transform='translate('+(pt.x+10-8).toFixed(1)+'px,'+(pt.y+100-8).toFixed(1)+'px)';
       const vl=sl.querySelector('[data-o5v]'); vl.textContent='$'+Math.round(val); vl.style.transform='translate('+Math.min(230,pt.x+18).toFixed(1)+'px,'+(pt.y+100-34).toFixed(1)+'px)';
       sl.querySelector('[data-o5d]').textContent=days; sl.querySelector('[data-o5l]').textContent=pmPl(days,'день','дня','дней')+' до даты'; }},
    {t:'Больше $320<br>не потеряете',p:'Это весь ваш риск. А продать опцион можно в любой торговый день, не дожидаясь даты.',pal:['#20D08F','#1C8BFF','#7C5CFF'],
     i:'<div class="o6"><svg width="300" height="200" viewBox="0 0 300 200" fill="none"><path d="M0 160H300" class="fl" stroke="#7CF5C4" stroke-width="2.5" stroke-dasharray="6 6"/><path pathLength="1" class="dr" d="M10 40C40 46 60 70 90 72S120 110 140 126 170 160 190 160H300" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle class="hit" cx="190" cy="160" r="7" fill="#7CF5C4"/></svg>'+
       '<span class="lim">−$320 · максимум</span><div class="shd"><i class="gw"></i><div class="gs"></div><svg width="112" height="126" viewBox="0 0 112 126" fill="none"><defs><linearGradient id="o6s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".45" stop-color="#fff" stop-opacity=".14"/><stop offset=".8" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></linearGradient><linearGradient id="o6h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="o6c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#B9FAD6"/></linearGradient><filter id="o6f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="bl"/><feFlood flood-color="#3DDC84" flood-opacity=".95" result="fl"/><feComposite in="fl" in2="bl" operator="in" result="gl"/><feMerge><feMergeNode in="gl"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M56 5c10.5 7 26 12 42.5 13.4a5.5 5.5 0 0 1 5 5.5V57c0 30.5-18.6 53.3-44.3 64.4a8 8 0 0 1-6.4 0C27.1 110.3 8.5 87.5 8.5 57V23.9a5.5 5.5 0 0 1 5-5.5C30 17 45.5 12 56 5Z" stroke="url(#o6s)" stroke-width="1.5"/><path d="M14 24.4C31 22.6 45.6 17.8 56 11.2c7 4.4 15.5 8 25.5 10.3C60 24 34 34 14 58Z" fill="url(#o6h)" opacity=".7"/><path d="M38 62l12 12 25-27" stroke="url(#o6c)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#o6f)"/></svg></div></div>',
     st:[[8,6,22,.2],[78,2,28,1],[90,70,18,.6],[4,76,24,1.4]]}]};
  // ── long-term deposits (валютные вклады с фиксированной ставкой) ──
  const LTR={USD:[[1,4.0],[3,5.0],[6,6.0],[12,6.8]],EUR:[[1,1.2],[3,1.8],[6,2.5],[12,3.2]]}, EURUSD=1.17, EURKZT=590, LTNOW=new Date(2026,8,26);
  const LT={cur:'USD',amt:5000,ti:3}; let ltHook=null;
  const LS=[1000,1250,1500,1750,2000,2250,2500,2750,3000,3250,3500,3750,4000,4250,4500,4750,5000,6000,7000,8000,10000,12000,15000,20000,25000,30000,40000,50000,75000,100000,150000,250000,350000,500000];
  const LTD=[{cur:'USD',amt:20000,m:12,r:6.8,o:new Date(2026,8,1)}];
  const LCK='<svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.2 4.6 4.3 7.6 10.8 1.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ltM=(c,v,d)=>(c==='USD'?'$':'€')+(d?dec(v):dec(Math.round(v),0));
  const ltPay=(a,r,m)=>a*(1+r/100*m/12);
  const ltDate=d=>d.getDate()+' '+MON[d.getMonth()]+' '+d.getFullYear();
  const ltAdd=(d,m)=>{ const x=new Date(d); x.setMonth(x.getMonth()+m); return x; };
  const ltMon=m=>m+' '+pmPl(m,'месяц','месяца','месяцев');
  function ltTerms(){ $('ltTerms').innerHTML=LTR[LT.cur].map(([m,r],i)=>'<button data-i="'+i+'"'+(i===LT.ti?' class="lt-on"':'')+'><b>'+m+' мес</b><small>'+dec(r,1)+' %</small></button>').join(''); }
  function ltBars(anim){ const L=LTR[LT.cur], g=L.map(([m,r])=>ltPay(LT.amt,r,m)-LT.amt), mx=Math.max(...g), box=$('ltBars');
    if(!box.children.length) box.innerHTML=L.map((_,i)=>'<button class="lt-bc" data-i="'+i+'"><b class="lt-bv"></b><span class="lt-bt"><i></i></span><span class="lt-bm"></span><small class="lt-br"></small></button>').join('');
    [...box.children].forEach((c,i)=>{ const [m,r]=L[i], k=Math.max(.05,g[i]/mx); c.classList.toggle('lt-on',i===LT.ti);
      c.querySelector('.lt-bv').textContent='+'+ltM(LT.cur,g[i]); c.querySelector('.lt-bm').textContent=m+' мес'; c.querySelector('.lt-br').textContent=dec(r,1)+' %';
      c.dataset.k=k; c.querySelector('.lt-bt>i').style.transform='scaleY('+(anim?0:k).toFixed(3)+')'; });
    if(anim) setTimeout(()=>[...box.children].forEach((c,i)=>{ const b=c.querySelector('.lt-bt>i'); b.style.transitionDelay=(250+i*110)+'ms'; b.style.transform='scaleY('+(+c.dataset.k).toFixed(3)+')'; setTimeout(()=>b.style.transitionDelay='',1400); }),60);
    $('ltBarsS').textContent='Доход с '+ltM(LT.cur,LT.amt)+' при разных сроках'; }
  const ltRnd=seed=>()=>{ seed=(seed*16807)%2147483647; return (seed-1)/2147483646; };
  function ltVs(dir){ const box=$('ltVc'); if(!box) return; const W=box.clientWidth||334, H=188, [m,r]=LTR[LT.cur][LT.ti], A=LT.amt, D=ltPay(A,r,m), T=Math.max(.4,Math.sqrt(m/12)), UP=.3*T, LO=.24*T;
    const vmax=A*(1+UP), vmin=A*(1-LO), x0=10, x1=W-10, y0=16, y1=H-30, X=t=>x0+t*(x1-x0), Y=v=>y0+(vmax-v)/(vmax-vmin)*(y1-y0), f=n=>n.toFixed(1), N=28;
    const pu=[], pl=[]; for(let i=0;i<=N;i++){ const t=i/N, q=Math.sqrt(t); pu.push(f(X(t))+' '+f(Y(A*(1+UP*q)))); pl.push(f(X(t))+' '+f(Y(A*(1-LO*q)))); }
    const cone='M'+pu.join('L')+'L'+pl.slice().reverse().join('L')+'Z';
    const walk=(seed,endK)=>{ const rnd=ltRnd(seed), n=46; let v=0; const pts=[f(X(0))+' '+f(Y(A))];
      for(let i=1;i<=n;i++){ const t=i/n, q=Math.sqrt(t); v+=(rnd()-.5)*.95; const k=Math.max(-.92,Math.min(.92,endK*t+v*.2*(1-t*.5))); pts.push(f(X(t))+' '+f(Y(k>=0?A*(1+UP*q*k):A*(1+LO*q*k)))); }
      return 'M'+pts.join('L'); };
    box.classList.toggle('nr',!dir&&box.classList.contains('go'));
    box.innerHTML='<svg width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'" fill="none" aria-hidden="true">'+
      '<path class="cone" d="'+cone+'" fill="rgba(142,153,171,.13)" stroke="#D5DAE1" stroke-width="1" stroke-dasharray="3 4"/>'+
      '<path d="M'+x0+' '+f(Y(A))+'H'+x1+'" stroke="#D1D1D6" stroke-width="1.2" stroke-dasharray="2 4"/>'+
      [[7,.62],[41,-.55],[89,.12]].map(([sd,k])=>'<path class="sw" d="'+walk(sd,k)+'" stroke="#8E99AB" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>').join('')+
      '<path class="dp" pathLength="1" d="M'+x0+' '+f(Y(A))+'L'+x1+' '+f(Y(D))+'" stroke="#219654" stroke-width="3.5" stroke-linecap="round" style="filter:drop-shadow(0 3px 6px rgba(33,150,84,.35))"/>'+
      '<circle cx="'+x0+'" cy="'+f(Y(A))+'" r="4.5" fill="#fff" stroke="#8E8E93" stroke-width="2"/>'+
      '<circle class="ed" cx="'+x1+'" cy="'+f(Y(D))+'" r="6" fill="#219654" stroke="#fff" stroke-width="2.5"/>'+
      '<text x="'+(x0+2)+'" y="'+f(Y(A)+18)+'" fill="#8E8E93" font-size="11" font-weight="500">вложили '+ltM(LT.cur,A)+'</text>'+
      '<text x="'+x0+'" y="'+(H-6)+'" fill="#AEAEB2" font-size="11">Сегодня</text><text x="'+x1+'" y="'+(H-6)+'" fill="#AEAEB2" font-size="11" text-anchor="end">Через '+m+' мес</text></svg>'+
      '<span class="lt-vtag d" style="top:'+f(Y(D)-20)+'px">Вклад '+ltM(LT.cur,D)+'</span><span class="lt-vtag s" style="top:'+f(Y(A*(1+UP))+4)+'px">Акции ?</span>';
    $('ltVsS').textContent='Одни и те же '+ltM(LT.cur,A)+' через '+ltMon(m); $('ltVsD').textContent='точно '+ltM(LT.cur,D); }
  function ltPick(i){ if(i===LT.ti) return; const d=i>LT.ti?1:-1; LT.ti=i; $('ltTerms').querySelectorAll('button').forEach((x,j)=>x.classList.toggle('lt-on',j===i)); ltCalc(d); }
  function ltCalc(dir){ const [m,r]=LTR[LT.cur][LT.ti], p=ltPay(LT.amt,r,m), pr=p-LT.amt;
    $('ltRange').style.setProperty('--p',(LS.indexOf(LT.amt)/(LS.length-1)).toFixed(4));
    const at=ltM(LT.cur,LT.amt), pi=Math.floor(p+1e-9), rt=ltM(LT.cur,pi), rc=','+String(Math.round((p-pi)*100)).padStart(2,'0');
    if(dir){ rollText($('ltAmt'),at,dir,true); rollText($('ltRes'),rt,dir,true); } else { $('ltAmt').textContent=at; $('ltRes').textContent=rt; }
    $('ltResD').textContent=rc; if($('ltRate')) $('ltRate').textContent=dec(r,1)+' % годовых';
    $('ltResK').textContent='Получите через '+ltMon(m);
    ltBars(); ltVs(dir);
    $('ltResP').textContent='+'+ltM(LT.cur,pr,1); if(ltHook) ltHook();
    $('ltMin').textContent=ltM(LT.cur,1000); $('ltMax').textContent='>'+ltM(LT.cur,500000);
    $('ltGo').textContent='Начать инвестировать · '+at; }
  function ltDepHTML(d,isNew){ const end=ltAdd(d.o,d.m), tot=end-d.o, el=Math.max(0,LTNOW-d.o), days=Math.round((end-LTNOW)/864e5), acc=d.amt*d.r/100*el/(365*864e5), pay=ltPay(d.amt,d.r,d.m), pc=Math.max(2,el/tot*100), usd=d.cur==='USD';
    const ic=usd?DUO_USD:DUO_EUR;
    return '<div class="lt2'+(isNew?' lt-new':'')+'">'+
      '<div class="lt2-h">'+ic+'<div class="m"><b>Вклад в '+(usd?'долларах':'евро')+'</b><span>'+dec(d.r,1)+' % годовых · '+ltMon(d.m)+'</span></div><span class="st"><i></i>Активен</span></div>'+
      '<div class="lt2-a"><b>'+ltM(d.cur,d.amt+acc,1)+'</b><span class="ac">+'+ltM(d.cur,acc,1)+' начислено</span></div>'+
      '<div class="lt2-tl"><div class="tr"><i style="width:'+pc.toFixed(1)+'%"></i><em style="left:'+pc.toFixed(1)+'%"></em></div>'+
        '<div class="lb"><span>'+ltDate(d.o)+'</span><span class="c">осталось '+days+' '+pmPl(days,'день','дня','дней')+'</span><span>'+ltDate(end)+'</span></div></div>'+
      '<div class="lt2-g"><div><span>Доход за срок</span><b class="up">+'+ltM(d.cur,pay-d.amt,1)+'</b></div><div><span>К выплате</span><b>'+ltM(d.cur,pay,1)+'</b></div></div></div>'; }
  const ltUsd=()=>LTD.reduce((a,d)=>a+(d.cur==='USD'?d.amt:d.amt*EURUSD),0);
  function ltMine(newI){ $('ltMine').innerHTML=LTD.length?'<section class="lt-card"><div class="lt-mh"><b>'+(LTD.length>1?'Ваши вклады':'Ваш вклад')+'</b>'+(LTD.length>1?'<span>'+ltM('USD',ltUsd(),1)+'</span>':'')+'</div>'+LTD.map((d,i)=>ltDepHTML(d,i===newI)).join('')+'</section>':''; ltPf(); }
  // portfolio «Долгосрочные вложения» mirrors the deposits
  function ltPf(){ const sec=$('pfSecs').querySelectorAll('.pf-sec')[2]; if(!sec) return; const v=sec.querySelector('.pf-sh .v'); if(v&&v.firstChild) v.firstChild.textContent=ltM('USD',ltUsd(),1);
    const bd=sec.querySelector('.pf-bd>div'); if(bd) bd.innerHTML=LTD.map(d=>{ const end=ltAdd(d.o,d.m), acc=d.amt*d.r/100*Math.max(0,LTNOW-d.o)/(365*864e5);
      return '<button class="pf-row" data-lt>'+(d.cur==='USD'?DUO_USD:DUO_EUR)+'<span class="m"><span class="t">Вклад в '+(d.cur==='USD'?'долларах':'евро')+'</span><span class="s">'+dec(d.r,1)+' % · до '+ltDate(end)+'</span></span><span class="r"><span class="t">'+dec(d.amt)+'</span><span class="s">+'+ltM(d.cur,acc,1)+'</span></span></button>'; }).join(''); }
  function ltNavSync(){ const y=$('ltScroll').scrollTop, lt=y>$('ltHero').offsetHeight-90, n=$('ltNav');
    n.classList.toggle('sc',y>6); n.classList.toggle('mini',y>170); n.classList.toggle('lt',lt); $('ltBack').classList.toggle('dk',!lt); $('ltCap').classList.toggle('dk',!lt); }
  function goLt(){ if(window.__DS){ closeSheet(); window.__DS.open('lt'); return; } closeSheet(); ltTerms(); ltCalc(0); $('ltVc').classList.remove('go','nr'); ltBars(true); ltMine(); $('ltScroll').scrollTop=0; $('ltBot').classList.remove('on'); ltNavSync(); dev.classList.add('on-lt'); $('scrLt').setAttribute('aria-hidden','false'); syncStatus(); }
  function ltBack(){ dev.classList.remove('on-lt'); $('scrLt').setAttribute('aria-hidden','true'); syncStatus(); }
  function ltConfirm(){ const [m,r]=LTR[LT.cur][LT.ti], p=ltPay(LT.amt,r,m), end=ltAdd(LTNOW,m), card=ACCS.find(a=>a.id==='sup'),
      usd=LT.cur==='USD'?LT.amt:LT.amt*EURUSD, kr=LT.cur==='USD'?RATE:EURKZT, kzt=LT.amt*kr;
    const S=[{id:'d',n:'D-счёт',ic:'<span class="lg lg-d"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="dsiG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity=".62"/></linearGradient></defs><path d="M9.6 3.2h4.8a2 2 0 0 1 2 2V7h-2.1V5.6a.5.5 0 0 0-.5-.5h-4.6a.5.5 0 0 0-.5.5V7H7.6V5.2a2 2 0 0 1 2-2Z" fill="#fff"/><path d="M5.2 6.6h13.6a2.7 2.7 0 0 1 2.7 2.7v4.6H2.5V9.3a2.7 2.7 0 0 1 2.7-2.7Z" fill="url(#dsiG)"/><path d="M2.5 14.6h19v4.1a2.7 2.7 0 0 1-2.7 2.7H5.2a2.7 2.7 0 0 1-2.7-2.7Z" fill="#fff"/><rect x="10.2" y="12.2" width="3.6" height="3.4" rx=".9" fill="#2A66D6"/></svg></span>',ok:usd<=OPF+1e-9,need:usd,
        sub:usd<=OPF+1e-9?(LT.cur==='USD'?'Доступно '+ltM('USD',OPF,1):'Спишем ≈ '+ltM('USD',usd,1)+' · доступно '+ltM('USD',OPF,1)):'Не хватает · доступно '+ltM('USD',OPF,1)},
      {id:'c',n:card.n+' · '+card.s,ic:accIc(card),ok:kzt<=card.raw,need:kzt,sub:(kzt<=card.raw?'Спишем ≈ ':'Не хватает · нужно ≈ ')+group(String(Math.round(kzt)))+' ₸ по курсу '+kr+' ₸'}];
    let pick=(S.find(s=>s.ok)||{id:null}).id, ok=false;
    openSheet('<div class="lts"><div class="lts-h"><b>Проверьте вклад</b>'+XB+'</div>'+
      '<div class="lts-sum"><b>'+ltM(LT.cur,LT.amt)+'</b><span>на '+ltMon(m)+' под '+dec(r,1)+' % годовых</span></div>'+
      '<div class="lts-rc"><div class="lts-rw"><span>Получите</span><b class="up">'+ltM(LT.cur,p,1)+'</b></div><div class="lts-rw"><span>Из них проценты</span><b>+'+ltM(LT.cur,p-LT.amt,1)+'</b></div><div class="lts-rw"><span>Дата окончания</span><b>'+ltDate(end)+'</b></div></div>'+
      '<span class="lts-k">Спишется с</span><div class="lts-src" id="ltsSrc">'+S.map(s=>'<button class="lts-o'+(s.id===pick?' lts-sel':'')+'" data-src="'+s.id+'"'+(s.ok?'':' disabled')+'>'+s.ic+'<span class="lts-om"><b>'+s.n+'</b><span'+(s.ok?'':' class="bad"')+'>'+s.sub+'</span></span><i class="lts-rd">'+LCK+'</i></button>').join('')+'</div>'+
      '<div class="lts-ok" id="ltsOk" role="checkbox" aria-checked="false"><i class="lts-cb">'+LCK+'</i><span>Ознакомлен с условиями договора: ставка фиксирована, при досрочном закрытии проценты пересчитываются</span></div>'+
      '<div class="lts-go"><button class="lt-cta" id="ltsGo" disabled>Открыть вклад</button></div></div>','ltsh');
    $('ltsSrc').onclick=e=>{ const b=e.target.closest('[data-src]'); if(!b||b.disabled) return; pick=b.dataset.src; $('ltsSrc').querySelectorAll('.lts-o').forEach(x=>x.classList.toggle('lts-sel',x===b)); };
    if(!pick){ $('ltsGo').textContent='Недостаточно средств'; }
    $('ltsOk').onclick=()=>{ ok=!ok; $('ltsOk').classList.toggle('lts-on',ok); $('ltsOk').setAttribute('aria-checked',ok); $('ltsGo').disabled=!ok||!pick; };
    $('ltsGo').onclick=()=>{ const g=$('ltsGo'); if(g.disabled||!pick||g.classList.contains('ld')) return; g.classList.add('ld'); const s=S.find(x=>x.id===pick);
      setTimeout(()=>{ if(pick==='d') OPF=Math.round((OPF-s.need)*100)/100; else { card.raw=Math.round((card.raw-s.need)*100)/100; card.bal=card.raw/RATE; }
        LTD.push({cur:LT.cur,amt:LT.amt,m,r,o:new Date(LTNOW)});
        pbDone('Вклад открыт',ltM(LT.cur,LT.amt)+' на '+ltMon(m)+' под '+dec(r,1)+' %',[['Получите','<b class="up">'+ltM(LT.cur,p,1)+'</b>'],['Дата окончания',ltDate(end)],['Списано с',pick==='d'?'D-счёт':card.n]],true,null,
          ()=>{ ltMine(LTD.length-1); setTimeout(()=>{ $('ltScroll').scrollTo({top:$('ltMine').offsetTop-70,behavior:'smooth'}); },250); }); },700); }; }
  $('ltBack').innerHTML=$('cnBack').innerHTML; $('ltBack').onclick=ltBack;
  $('ltScroll').addEventListener('scroll',()=>{ ltNavSync(); syncStatus(); },{passive:true});
  $('ltHelp').onclick=()=>{ const f=$('ltFaq'); $('ltScroll').scrollTo({top:f.offsetTop-70,behavior:'smooth'}); f.querySelector('.lt-q').classList.add('lt-open'); };
  $('ltCur').onclick=e=>{ const b=e.target.closest('button'); if(!b||b.dataset.c===LT.cur) return; LT.cur=b.dataset.c; $('ltCur').querySelectorAll('button').forEach(x=>x.classList.toggle('lt-on',x===b)); ltTerms(); ltCalc(LT.cur==='EUR'?-1:1); };
  $('ltTerms').onclick=e=>{ const b=e.target.closest('button'); if(b) ltPick(+b.dataset.i); };
  $('ltBars').onclick=e=>{ const b=e.target.closest('.lt-bc'); if(b) ltPick(+b.dataset.i); };
  $('ltRange').addEventListener('input',e=>{ LT.amt=LS[+e.target.value]; ltCalc(0); });
  $('ltGoIn').onclick=()=>ltConfirm();
  // sticky CTA only after the hero button has scrolled away upwards — never on start, even when the hero is taller than the screen
  const ltBotSync=()=>{ const r=$('ltGoIn').getBoundingClientRect(), t=$('ltScroll').getBoundingClientRect().top; $('ltBot').classList.toggle('on',r.bottom<t+60); };
  $('ltScroll').addEventListener('scroll',ltBotSync,{passive:true});
  document.querySelectorAll('#ltFaq .lt-q>button').forEach(b=>b.onclick=()=>b.parentNode.classList.toggle('lt-open'));
  $('ltGo').onclick=ltConfirm;
  $('pfSecs').addEventListener('click',e=>{ if(e.target.closest('[data-lt]')) goLt(); });
  ltTerms(); ltCalc(0); ltMine();
  new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('go'); }),{root:$('ltScroll'),threshold:.35}).observe($('ltVc'));

  // ═════════ long-term: ruler slider (drag the scale, the glass knob stays in the middle) ═════════
  const LTSP=24, LTN=LS.length-1;
  let ltrX=LS.indexOf(LT.amt)*LTSP, ltrDrag=null, ltrVel=0, ltrRaf=0;
  (function(){ let h=''; for(let i=0;i<=LTN;i++){ h+='<i class="v" style="left:'+(i*LTSP)+'px"></i>'; if(i<LTN) h+='<i style="left:'+(i*LTSP+LTSP/3)+'px"></i><i style="left:'+(i*LTSP+2*LTSP/3)+'px"></i>'; }
    $('ltRulerT').innerHTML=h; $('ltRulerT').style.width=(LTN*LTSP)+'px'; })();
  function ltrPaint(){ $('ltRulerT').style.transform='translateX('+(-ltrX).toFixed(1)+'px)'; }
  function ltrSet(x,fromUser){ ltrX=Math.max(0,Math.min(LTN*LTSP,x)); ltrPaint(); if(!fromUser) return;
    const i=Math.round(ltrX/LTSP), cur=LS.indexOf(LT.amt); if(i===cur) return;
    LT.amt=LS[i]; $('ltRange').value=i; ltCalc(i>cur?1:-1);
    const k=$('ltRulerK'); k.classList.remove('bp'); void k.offsetWidth; k.classList.add('bp'); }
  // external changes (currency switch, page open) → move the scale without animation
  function ltrSync(){ if(ltrDrag||ltrRaf) return; ltrX=LS.indexOf(LT.amt)*LTSP; ltrPaint(); const r=$('ltRuler'); r.setAttribute('aria-valuenow',LT.amt); r.setAttribute('aria-valuetext',ltM(LT.cur,LT.amt)); }
  function ltrSnap(){ const from=ltrX, to=Math.round(ltrX/LTSP)*LTSP, t0=performance.now();
    const st=t=>{ const k=Math.min(1,(t-t0)/220), e=1-Math.pow(1-k,3); ltrSet(from+(to-from)*e,true); if(k<1) ltrRaf=requestAnimationFrame(st); else { ltrRaf=0; ltrSync(); } };
    ltrRaf=requestAnimationFrame(st); }
  function ltrGlide(){ let last=performance.now();
    const st=t=>{ const dt=Math.min(32,t-last); last=t; ltrSet(ltrX+ltrVel*dt,true); ltrVel*=Math.pow(.93,dt/16);
      if(Math.abs(ltrVel)>.03&&ltrX>0&&ltrX<LTN*LTSP) ltrRaf=requestAnimationFrame(st); else { ltrRaf=0; ltrSnap(); } };
    ltrRaf=requestAnimationFrame(st); }
  const LTRU=$('ltRuler');
  LTRU.addEventListener('pointerdown',e=>{ cancelAnimationFrame(ltrRaf); ltrRaf=0; ltrDrag={x0:e.clientX,r0:ltrX,lx:e.clientX,lt:performance.now(),moved:false}; ltrVel=0; try{ LTRU.setPointerCapture(e.pointerId); }catch(_){} LTRU.classList.add('dr'); });
  LTRU.addEventListener('pointermove',e=>{ if(!ltrDrag) return; const d=ltrDrag, dx=e.clientX-d.x0, now=performance.now(); if(Math.abs(dx)>3) d.moved=true;
    ltrSet(d.r0-dx,true); const dt=Math.max(1,now-d.lt); ltrVel=.8*ltrVel+.2*((d.lx-e.clientX)/dt); d.lx=e.clientX; d.lt=now; });
  const ltrEnd=e=>{ if(!ltrDrag) return; const d=ltrDrag; ltrDrag=null; LTRU.classList.remove('dr');
    if(!d.moved){ const r=LTRU.getBoundingClientRect(); ltrSet(ltrX+(e.clientX<r.left+r.width/2?-LTSP:LTSP),true); ltrSync(); return; }
    if(performance.now()-d.lt>80) ltrVel=0; if(Math.abs(ltrVel)>.15) ltrGlide(); else ltrSnap(); };
  LTRU.addEventListener('pointerup',ltrEnd); LTRU.addEventListener('pointercancel',ltrEnd);
  LTRU.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft'||e.key==='ArrowRight'){ e.preventDefault(); ltrSet(ltrX+(e.key==='ArrowLeft'?-LTSP:LTSP),true); ltrSync(); } });
  ltHook=ltrSync; ltrSync();

  // ═════════ OPEN DEPOSIT · the choice from the long-term page arrives as a preset, everything stays editable ═════════
  const LO={cur:'USD',ti:3,amt:5000,fresh:true,src:null}, LOMIN=1000, LOMAX=500000;
  function loSrcs(){ const c=LO.cur, usd=c==='USD'?LO.amt:LO.amt*EURUSD, kr=c==='USD'?RATE:EURKZT, kzt=LO.amt*kr, card=ACCS.find(a=>a.id==='sup'), gl=ACCS.find(a=>a.id==='gl');
    return [{id:'d',n:'D-счёт',ic:'<span class="lg lg-d"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="dsiG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity=".62"/></linearGradient></defs><path d="M9.6 3.2h4.8a2 2 0 0 1 2 2V7h-2.1V5.6a.5.5 0 0 0-.5-.5h-4.6a.5.5 0 0 0-.5.5V7H7.6V5.2a2 2 0 0 1 2-2Z" fill="#fff"/><path d="M5.2 6.6h13.6a2.7 2.7 0 0 1 2.7 2.7v4.6H2.5V9.3a2.7 2.7 0 0 1 2.7-2.7Z" fill="url(#dsiG)"/><path d="M2.5 14.6h19v4.1a2.7 2.7 0 0 1-2.7 2.7H5.2a2.7 2.7 0 0 1-2.7-2.7Z" fill="#fff"/><rect x="10.2" y="12.2" width="3.6" height="3.4" rx=".9" fill="#2A66D6"/></svg></span>',bal:ltM('USD',OPF,1),ok:usd<=OPF+1e-9,need:usd,sub:c==='USD'?'Доступно '+ltM('USD',OPF,1):'Спишем ≈ '+ltM('USD',usd,1)+' · доступно '+ltM('USD',OPF,1)},
      {id:'c',n:card.n+' · '+card.s,ic:accIc(card,1),bal:accShort(card),ok:kzt<=card.raw,need:kzt,sub:'Спишем ≈ '+group(String(Math.round(kzt)))+' ₸ по курсу '+kr+' ₸'},
      {id:'g',n:'Глобальный счёт',ic:accIc(gl,1),bal:accShort(gl),ok:usd<=gl.raw+1e-9,need:usd,sub:(c==='USD'?'Доступно ':'Спишем ≈ '+ltM('USD',usd,1)+' · доступно ')+accShort(gl)}]; }
  const loSrc=()=>{ const S=loSrcs(); return (LO.src&&S.find(s=>s.id===LO.src))||S.find(s=>s.ok)||S[0]; };
  function loRender(dir){ const [m,r]=LTR[LO.cur][LO.ti], a=LO.amt, okA=a>=LOMIN&&a<=LOMAX, p=ltPay(a,r,m), s=loSrc();
    $('loCur').dataset.c=LO.cur; $('loSub').textContent=(LO.cur==='USD'?'в долларах':'в евро')+' · '+dec(r,1)+' % годовых';
    const T=$('loTerms'); T.style.setProperty('--i',LO.ti);
    T.innerHTML='<span class="pl"></span>'+LTR[LO.cur].map(([mm,rr],i)=>'<button data-i="'+i+'"'+(i===LO.ti?' class="on"':'')+'><b>'+mm+' мес</b><small>'+dec(rr,1)+' %</small></button>').join('');
    $('loNum').textContent=ltM(LO.cur,a);
    const h=$('loHint'); h.textContent=a<LOMIN&&a>0?'Минимум '+ltM(LO.cur,LOMIN):a>LOMAX?'Максимум '+ltM(LO.cur,LOMAX):'от '+ltM(LO.cur,LOMIN)+' до '+ltM(LO.cur,LOMAX); h.classList.toggle('bad',(a<LOMIN&&a>0)||a>LOMAX);
    $('loResK').textContent='Получите '+ltDate(ltAdd(LTNOW,m));
    const rt=ltM(LO.cur,okA?p:0,1), it='+'+ltM(LO.cur,okA?p-a:0,1);
    if(dir){ rollText($('loRes'),rt,dir,true); rollText($('loInc'),it,dir,true); } else { $('loRes').textContent=rt; $('loInc').textContent=it; }
    $('loAccIc').innerHTML=s.ic; $('loAccN').textContent=s.id==='c'?'Super Card':s.n; $('loAccB').textContent=s.bal; $('loAccB').classList.toggle('bad',okA&&!s.ok);
    const g=$('loGo'), dis=!okA||!s.ok; g.textContent=!okA?(a>LOMAX?'Максимум '+ltM(LO.cur,LOMAX):'Минимум '+ltM(LO.cur,LOMIN)):!s.ok?'Недостаточно средств':'Продолжить';
    g.disabled=dis; g.classList.toggle('lo-off',dis); }
  function loOpen(){ closeSheet(); if(window.__DS){ window.__DS.open('lt'); return; } Object.assign(LO,{cur:LT.cur,ti:LT.ti,amt:LT.amt,fresh:true,src:null}); loRender(0);
    dev.classList.add('on-lo'); $('scrLo').setAttribute('aria-hidden','false'); syncStatus(); }
  function loBack(){ closeSheet(); dev.classList.remove('on-lo'); $('scrLo').setAttribute('aria-hidden','true'); syncStatus(); }
  $('loBack').innerHTML=$('cnBack').innerHTML; $('loBack').onclick=loBack;
  $('ltGoIn').onclick=loOpen; $('ltGo').onclick=loOpen;
  $('loCur').onclick=e=>{ const b=e.target.closest('button'); if(!b||b.dataset.c===LO.cur) return; LO.cur=b.dataset.c; LO.src=null; loRender(LO.cur==='EUR'?-1:1); };
  $('loTerms').onclick=e=>{ const b=e.target.closest('button'); if(!b) return; const i=+b.dataset.i; if(i===LO.ti) return; const d=i>LO.ti?1:-1; LO.ti=i; loRender(d); };
  $('loKp').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(!b) return; const k=b.dataset.k, was=LO.amt; let s=LO.amt?String(LO.amt):'';
    if(k==='del') s=LO.fresh?'':s.slice(0,-1); else if(k==='000'){ if(!s||LO.fresh){ b.animate([{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(3px)'},{transform:'none'}],{duration:220}); return; } s+='000'; } else s=LO.fresh?k:s+k;
    if(s.length>7){ $('loBig').animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(5px)'},{transform:'none'}],{duration:260}); return; }
    LO.fresh=false; LO.amt=+s||0; loRender(LO.amt>was?1:-1); });
  $('loAcc').onclick=()=>{ const S=loSrcs(), cur=loSrc();
    openSheet('<div class="lts"><div class="lts-h"><b>Счёт списания</b>'+XB+'</div><div class="lts-src" id="loSrcL">'+S.map(s=>'<button class="lts-o'+(s.id===cur.id?' lts-sel':'')+'" data-src="'+s.id+'"'+(s.ok?'':' disabled')+'>'+s.ic+'<span class="lts-om"><b>'+s.n+'</b><span'+(s.ok?'':' class="bad"')+'>'+(s.ok?s.sub:'Не хватает · '+s.sub.replace(/^Доступно /,'доступно '))+'</span></span><i class="lts-rd">'+LCK+'</i></button>').join('')+'</div></div>','ltsh');
    $('loSrcL').onclick=e=>{ const b=e.target.closest('[data-src]'); if(!b||b.disabled) return; LO.src=b.dataset.src; $('loSrcL').querySelectorAll('.lts-o').forEach(x=>x.classList.toggle('lts-sel',x===b)); setTimeout(()=>{ closeSheet(); loRender(0); },180); }; };
  $('loInfo').onclick=()=>openSheet('<div class="lts"><div class="lts-h"><b>Условия вклада</b>'+XB+'</div><div class="lts-rc">'+
    [['Ставка','фиксируется в договоре на весь срок'],['Проценты','вместе с суммой вклада в конце срока'],['Досрочно','можно забрать, проценты пересчитаем по сниженной ставке'],['Куда придут деньги','на D-счёт']].map(([k,v])=>'<div class="lts-rw"><span>'+k+'</span><b style="text-align:right;max-width:60%">'+v+'</b></div>').join('')+'</div></div>','ltsh');
  $('loGo').onclick=()=>{ const g=$('loGo'); if(g.disabled) return; const [m,r]=LTR[LO.cur][LO.ti], a=LO.amt, p=ltPay(a,r,m), end=ltAdd(LTNOW,m), s=loSrc(); let ok=false;
    openSheet('<div class="lts"><div class="lts-h"><b>Проверьте вклад</b>'+XB+'</div>'+
      '<div class="lts-sum"><b>'+ltM(LO.cur,a)+'</b><span>на '+ltMon(m)+' под '+dec(r,1)+' % годовых</span></div>'+
      '<div class="lts-rc"><div class="lts-rw"><span>Получите</span><b class="up">'+ltM(LO.cur,p,1)+'</b></div><div class="lts-rw"><span>Доход за срок</span><b>+'+ltM(LO.cur,p-a,1)+'</b></div><div class="lts-rw"><span>Дата окончания</span><b>'+ltDate(end)+'</b></div><div class="lts-rw"><span>Спишется с</span><b>'+(s.id==='c'?'Super Card':s.n)+'</b></div></div>'+
      '<div class="lts-ok" id="loOk" role="checkbox" aria-checked="false"><i class="lts-cb">'+LCK+'</i><span>Ознакомлен с условиями договора: ставка фиксирована, при досрочном закрытии проценты пересчитываются</span></div>'+
      '<div class="lts-go"><button class="lt-cta" id="loSend" disabled>Открыть вклад</button></div></div>','ltsh');
    $('loOk').onclick=()=>{ ok=!ok; $('loOk').classList.toggle('lts-on',ok); $('loOk').setAttribute('aria-checked',ok); $('loSend').disabled=!ok; };
    $('loSend').onclick=()=>{ const b=$('loSend'); if(b.disabled||b.classList.contains('ld')) return; b.classList.add('ld');
      setTimeout(()=>{ if(s.id==='d') OPF=Math.round((OPF-s.need)*100)/100; else { const acc=ACCS.find(x=>x.id===(s.id==='c'?'sup':'gl')); acc.raw=Math.round((acc.raw-s.need)*100)/100; acc.bal=acc.cur==='USD'?acc.raw:acc.raw/RATE; }
        LTD.push({cur:LO.cur,amt:a,m,r,o:new Date(LTNOW)});
        pbDone('Вклад открыт',ltM(LO.cur,a)+' на '+ltMon(m)+' под '+dec(r,1)+' %',[['Получите','<b class="up">'+ltM(LO.cur,p,1)+'</b>'],['Дата окончания',ltDate(end)],['Списано с',s.id==='c'?'Super Card':s.n]],true,null,
          ()=>{ loBack(); ltMine(LTD.length-1); setTimeout(()=>{ $('ltScroll').scrollTo({top:$('ltMine').offsetTop-70,behavior:'smooth'}); },300); }); },700); }; };

  // ═════════ CATALOG · one 2-column grid, banners and predictions/options live inside it ═════════
  const CT=[
    {s:'aapl',n:'Apple Inc.',ap:1,f:'br tech div'},
    {s:'tsla',n:'Tesla Inc.',p:'$375,30',c:'−11,03 % за год',d:0,f:'br tech'},
    {s:'nvda',n:'NVIDIA Corp.',p:'$227,38',c:'+29,36 % за год',d:1,f:'tech up'},
    {fp:'t'},
    {s:'amzn',n:'Amazon',p:'$258,45',c:'+11,22 % за год',d:1,f:'br tech up'},
    {pm:'btc'},
    {s:'goog',n:'Alphabet',p:'$350,87',c:'+38,46 % за год',d:1,f:'br tech div up'},
    {s:'meta',n:'Meta Platforms',p:'$741,25',c:'−5,74 % за год',d:0,f:'br tech div'},
    {op:'dir'},
    {tu:1},
    {s:'msft',n:'Microsoft',p:'$501,61',c:'−1,75 % за год',d:0,f:'br tech div'},
    {s:'ko',n:'Coca-Cola Co.',p:'$87,12',c:'+31,03 % за год',d:1,f:'br div up cheap'},
    {s:'nflx',n:'Netflix',p:'$73,36',c:'−39,80 % за год',d:0,f:'br cheap'},
    {bn:'fut'},
    {s:'ma',n:'Mastercard',p:'$567,65',c:'−3,56 % за год',d:0,f:'br div'},
    {pm:'fed'},
    {s:'pg',n:'Procter & Gamble',p:'$146,08',c:'−7,32 % за год',d:0,f:'br div cheap'},
    {s:'coin',n:'Coinbase',p:'$201,05',c:'−41,34 % за год',d:0,f:''},
    {op:0},
    {s:'hood',n:'Robinhood',p:'$123,30',c:'+1,31 % за год',d:1,f:'up cheap'},
    {s:'jnj',n:'Johnson & Johnson',p:'$269,47',c:'+54,26 % за год',d:1,f:'br div up'},
    {s:'wmt',n:'Walmart',p:'$107,44',c:'+3,50 % за год',d:1,f:'br div up cheap'},
    {bn:'frh'},
    {s:'jpm',n:'JPMorgan',p:'$352,04',c:'+12,26 % за год',d:1,f:'div up'},
    {s:'intc',n:'Intel',p:'$121,78',c:'+300,86 % за год',d:1,f:'br tech up cheap'},
    {pm:'gpt'},
    {s:'amd',n:'AMD',p:'$615,52',c:'+291,10 % за год',d:1,f:'tech up'},
    {s:'visa',n:'Visa',p:'$369,95',c:'+8,67 % за год',d:1,f:'br div up'},
    {s:'csco',n:'Cisco Systems',p:'$111,46',c:'+61,72 % за год',d:1,f:'tech div up cheap'},
    {pm:'tsla'},
    {s:'spx',n:'S&P 500 · SPY',p:'$773,50',c:'+16,78 % за год',d:1,f:'fund up',b:'Купить'},
    {s:'qqq',n:'Nasdaq 100 · QQQ',p:'$602,40',c:'+21,40 % за год',d:1,f:'fund tech up',b:'Купить'}];
  // option ideas: «Apple выше/ниже $K к дате?» → one contract, payoff shown as ×N at a reference price
  const CTI=[{K:165,cp:'c',ei:3,at:180},{K:160,cp:'c',ei:0,at:170},{K:145,cp:'p',ei:0,at:135}];
  let CTF='';
  const CUP='<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CDN='<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ctCw=()=>Math.floor((($('scrCt').clientWidth||390)-44)/2)-24;
  const ctAc=()=>(midPx()/PER[4].base-1)*100;
  const ctXf=x=>'×'+(x<10?dec(x,1):dec(x,0));

  function ctCd(x){ const ap=!!x.ap, c=ap?ctAc():0;
    return '<div class="ct-cd" role="button" tabindex="0" '+(ap?'data-aapl':'data-other')+'>'+lgHTML(x.s)+'<span class="n">'+x.n+'</span><hr>'+
      '<span class="p"'+(ap?' id="ctAapl"':'')+'>'+(ap?fmt2(midPx()):x.p)+'</span>'+
      '<span class="c'+(ap?(c<0?' dn':''):x.d===0?' dn':x.d===2?' nt':'')+'"'+(ap?' id="ctAaplC"':'')+'>'+(ap?(c<0?MIN:'+')+dec(Math.abs(c))+' % за год':x.c)+'</span>'+
      '<button class="b"'+(ap?' data-sbuy':'')+'>'+(x.b||'Купить от $1')+'</button></div>'; }
  // prediction cell: icon + gauge, question, end date, Да/Нет in cents
  const CTG=94.2, ctGc=p=>p>=50?'#10C810':p>=25?'#FF9F0A':'#FF3B47', ctPo=o=>'$'+dec(10000/pAsk(o,'y'),0);
  // v112: Polymarket-style horseshoe gauge, the number sits inside, no caption
  const CTA=113.1;
  function ctGauge(o,k){ return '<div class="gh"><svg width="68" height="48" viewBox="0 0 68 48"><path d="M10.62 44.5A27 27 0 1 1 57.38 44.5" stroke="#EEF0F2" stroke-width="6" fill="none" stroke-linecap="round"/>'+
      '<path data-cg="'+k+'" d="M10.62 44.5A27 27 0 1 1 57.38 44.5" stroke="'+ctGc(o.p)+'" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="'+(o.p/100*CTA).toFixed(1)+' 200"/></svg>'+
      '<b class="pmv" data-pp="'+k+'">'+o.p+'%</b></div>'; }
  function ctPm(id){ const e=pmE(id), o=pmLead(e), k=K(e,o);
    return '<div class="ct-mx ct-pmc" role="button" tabindex="0" data-ev="'+id+'" style="--gc:'+ctGc(o.p)+'" data-cgc="'+k+'"><div class="hd">'+pmIco(e)+ctGauge(o,k)+'</div>'+
      '<div class="cq">'+pmOQ(e,o)+'</div>'+
      '<div class="mt">'+CLK+(soon(e)?'<span data-cd="'+e.id+'">'+cdTxt(e)+'</span>':'<span>до '+e.end+'</span>')+'</div>'+
      '<div class="yn"><span class="y" data-buy="'+k+':y">Да <b class="pmv" data-py="'+k+'">'+pmX(pAsk(o,'y'))+'</b></span><span class="n" data-buy="'+k+':n">Нет <b class="pmv" data-pn="'+k+'">'+pmX(pAsk(o,'n'))+'</b></span></div></div>'; }
  // called from pmPaint for every outcome that moved
  function ctPaint(o,k){ const c=ctGc(o.p);
    document.querySelectorAll('[data-cg="'+k+'"]').forEach(el=>{ el.setAttribute('stroke-dasharray',(o.p/100*CTA).toFixed(1)+' 200'); el.setAttribute('stroke',c); });
    document.querySelectorAll('[data-cgc="'+k+'"]').forEach(el=>el.style.setProperty('--gc',c)); }
  // AAPL month line for the «куда пойдёт» cell
  function ctSpark(){ const W=ctCw(), H=26, v=PER[1].pts.map(o=>o.p).concat([oS()]), lo=Math.min(...v), hi=Math.max(...v), n=v.length;
    const X=i=>(i/(n-1)*(W-6)).toFixed(1), Y=p=>(3+(hi-p)/((hi-lo)||1)*(H-6)).toFixed(1), up=v[n-1]>=v[0], col=up?'#10C810':'#EB3333';
    const d='M'+v.map((p,i)=>X(i)+' '+Y(p)).join('L');
    return '<svg width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'"><path d="'+d+'L'+X(n-1)+' '+H+'L0 '+H+'Z" fill="'+col+'" fill-opacity=".1"/><path d="'+d+'" fill="none" stroke="'+col+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="'+X(n-1)+'" cy="'+Y(v[n-1])+'" r="2.6" fill="'+col+'"/></svg>'; }
  // payoff at expiry per share: flat loss = premium, then grows past the strike
  function ctPay(t,q){ const W=ctCw(), H=26, c=t.cp==='c', a=q.ask, lo=c?t.K-26:t.K-22, hi=c?t.K+22:t.K+26, S=oS();
    const pf=s=>(c?Math.max(0,s-t.K):Math.max(0,t.K-s))-a, top=Math.max(pf(lo),pf(hi)), bot=-a;
    const X=s=>((s-lo)/(hi-lo)*W).toFixed(1), Y=v=>(2+(top-v)/(top-bot)*(H-4)).toFixed(1), be=c?t.K+a:t.K-a, z=Y(0);
    const L=[lo,t.K,be,hi].sort((x,y)=>x-y), neg=c?[[lo,bot],[t.K,bot],[be,0]]:[[be,0],[t.K,bot],[hi,bot]], pos=c?[[be,0],[hi,pf(hi)]]:[[lo,pf(lo)],[be,0]];
    const pth=p=>'M'+p.map(([s,v])=>X(s)+' '+Y(v)).join('L'), Sx=Math.max(lo,Math.min(hi,S));
    return '<svg width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'"><path d="M0 '+z+'H'+W+'" stroke="#D1D1D6" stroke-width="1" stroke-dasharray="2 3"/>'+
      '<path d="'+pth(pos)+'L'+X(c?hi:lo)+' '+z+'Z" fill="#10C810" fill-opacity=".14"/><path d="'+pth(neg)+'Z" fill="#FF3B47" fill-opacity=".1"/>'+
      '<path d="'+pth(neg)+'" fill="none" stroke="#FF3B47" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><path d="'+pth(pos)+'" fill="none" stroke="#10C810" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>'+
      '<circle cx="'+X(Sx)+'" cy="'+Y(pf(Sx))+'" r="3" fill="#0F0F0F" stroke="#fff" stroke-width="1.5"/></svg>'; }
  function ctOpDir(){ const e=OEXP[0], S=oS(), ch=(S/PREV-1)*100;
    return '<div class="ct-mx ct-opc" role="button" tabindex="0" data-opc="c" data-oei="0"><div class="hd">'+lgHTML('aapl')+'<div class="px"><b class="pmv" data-cts="1">$'+dec(S)+'</b><span class="'+(ch<0?'dn':'')+'" data-ctch="1">'+(ch<0?MIN:'+')+dec(Math.abs(ch))+'%</span></div></div>'+
      '<div class="cq">Куда пойдёт Apple до '+e.l+'?</div>'+
      '<div class="cv" data-ctsp="1">'+ctSpark()+'</div>'+
      '<div class="yn"><span class="y" data-opc="c" data-oei="0">'+CUP+'Call</span><span class="n" data-opc="p" data-oei="0">'+CDN+'Put</span></div></div>'; }
  function ctOpIdea(i){ const t=CTI[i], e=OEXP[t.ei], q=oQ(t.K,t.cp,e.d), c=t.cp==='c', x=Math.abs(t.at-t.K)/q.ask;
    return '<div class="ct-mx ct-opc" role="button" tabindex="0" data-opc="'+t.cp+'" data-oei="'+t.ei+'" style="--gc:'+(c?'#10C810':'#FF3B47')+'"><div class="hd">'+lgHTML('aapl')+
      '<div class="xb'+(c?'':' dn')+'"><b data-ctx="'+i+'">'+ctXf(x)+'</b><span>при $'+t.at+'</span></div></div>'+
      '<div class="cq">Apple '+(c?'выше':'ниже')+' $'+t.K+' к '+e.f+'?</div>'+
      '<div class="cv" data-ctpv="'+i+'">'+ctPay(t,q)+'</div>'+
      '<div class="mt">Риск — не больше <b data-ctr="'+i+'">$'+dec(q.ask*100,0)+'</b></div>'+
      '<div class="yn one"><span class="'+(c?'y':'n')+'" data-ot="'+t.K+':'+t.cp+':'+t.ei+'">Купить '+cpN(t.cp)+' · <b data-cta="'+i+'">$'+dec(q.ask)+'</b></span></div></div>'; }
  const ctBnT={fut:['Долгосрочные инвестиции','Доход известен заранее','до 6,8 %'],frh:['Облигации Freedom Holding Corp.','с дисконтом','до 10%']};
  const ctBn=k=>'<button class="ct-bn ct-b-'+k+'" data-bn="'+k+'"><span class="bt">'+ctBnT[k][0]+'</span><span class="bs">'+ctBnT[k][1]+'</span><span class="bp">'+ctBnT[k][2]+'</span></button>';
  const ctMore=(k,t,s)=>'<div class="ct-cd ct-more '+k+'" role="button" tabindex="0" data-go="'+k+'"><b>'+t+'</b><span>'+s+'</span><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>';
  function ctHit(x){ if(x.tu||x.op!==undefined) return false; if(!CTF) return true; if(x.bn||x.fp) return false; if(x.tu) return CTF==='op'; if(x.pm) return CTF==='pm'; if(x.op!==undefined) return CTF==='op';
    if(CTF==='up'&&x.ap) return ctAc()>=0; return (' '+x.f+' ').includes(' '+CTF+' '); }
  function ctRender(anim){ let L;
    if(CTF==='pm') L=PM.map(e=>({pm:e.id})).concat([{go:'pm'}]);
    else if(CTF==='op') L=[{op:'dir'},{tu:1},{op:0},{op:1},{op:2},{go:'op'}];
    else if(CTF==='fp') L=[{fp:'t'},{fp:'b'},{fp:'p'},{go:'fp'}];
    else L=CT.filter(ctHit);
    $('ctG').innerHTML=L.map(x=>x.bn?ctBn(x.bn):x.tu?ctTu():x.fp?ctFp(x.fp):x.go==='fp'?ctMore('fp','Все портфели','41 портфель · 4 подборки'):x.pm?ctPm(x.pm):x.op==='dir'?ctOpDir():x.op!==undefined?ctOpIdea(x.op):x.go==='pm'?ctMore('pm','Все прогнозы',PM.length+' событий в разделе'):x.go==='op'?ctMore('op','Все опционы','Цепочка контрактов Apple'):ctCd(x)).join('');
    if(anim) [...$('ctG').children].slice(0,8).forEach((el,i)=>{ el.classList.add('ct-in'); el.style.animationDelay=i*35+'ms'; }); }
  function goCt(){ closeSheet();
    ctRender(); $('ctScroll').scrollTop=0; $('ctChips').scrollLeft=0; $('ctNav').classList.remove('scrolled');
    dev.classList.add('on-ct'); $('scrCt').setAttribute('aria-hidden','false'); syncStatus(); }
  function ctBack(){ dev.classList.remove('on-ct'); $('scrCt').setAttribute('aria-hidden','true'); syncStatus(); }
  $('ctBack').innerHTML=$('cnBack').innerHTML; $('ctBack').onclick=ctBack; $('ctGo').onclick=goCt;
  $('ctSrch').onclick=()=>{ if(window.__DS) window.__DS.open('srchc'); else toast('Поиск'); };
  $('ctScroll').addEventListener('scroll',()=>$('ctNav').classList.toggle('scrolled',$('ctScroll').scrollTop>6),{passive:true});
  $('ctChips').addEventListener('click',ev=>{ const b=ev.target.closest('button'); if(!b) return; if(b.classList.contains('fl')){ toast('Фильтры — скоро'); return; }
    const on=CTF!==b.dataset.f; CTF=on?b.dataset.f:''; $('ctChips').querySelectorAll('button').forEach(x=>x.classList.toggle('on',on&&x===b));
    const g=$('ctG'); g.classList.add('fade'); setTimeout(()=>{ ctRender(true); g.classList.remove('fade'); const s=$('ctScroll'), top=$('ctChips').offsetTop-8; if(s.scrollTop>top) s.scrollTop=top; },170); });
  $('ctG').addEventListener('click',ev=>{ const t=ev.target;
    const bn=t.closest('[data-bn]'); if(bn){ const k=bn.dataset.bn; if(k==='fut') goLt(); else toast(k==='inv'?'Приглашение друзей — скоро':'Облигации Freedom Holding — скоро'); return; }
    if(t.closest('[data-tu]')){ goTu(); return; }
    const fc=t.closest('[data-fp]'); if(fc){ if(t.closest('[data-fphub]')) goFp(); else if(fc.dataset.fp==='t') fpOpenP(); else fpOnly(fc); return; }
    const gg=t.closest('[data-go]'); if(gg){ if(gg.dataset.go==='fp'){ goFp(); return; } if(gg.dataset.go==='pm') goPm(); else { OCP='c'; OEI=0; opEntry(); } return; }
    const b=t.closest('[data-buy]'); if(b){ const [id,oi,s]=b.dataset.buy.split(':'); sbOpen(id,+oi,s); return; }
    const o=t.closest('[data-ot]'); if(o){ const [k,cp,ei]=o.dataset.ot.split(':'); otOpen(+k,cp,+ei); return; }
    const oc=t.closest('[data-opc]'); if(oc){ OCP=oc.dataset.opc; OEI=+oc.dataset.oei; opEntry(); return; }
    const e=t.closest('[data-ev]'); if(e){ goEv(e.dataset.ev); return; }
    const c=t.closest('.ct-cd'); if(!c) return;
    if(c.hasAttribute('data-other')){ toast('В прототипе открывается только Apple'); c.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(4px)'},{transform:'none'}],{duration:280}); return; }
    if(t.closest('[data-sbuy]')&&!(window.__nbPre&&__nbPre())){ setSide('buy'); dev.classList.add('on-stock'); goOrder(); syncStatus(); return; }
    goStock(); });
  // live: options cells follow AAPL (only while the catalog is on screen)
  const CTLV=()=>dev.classList.contains('on-ct')?$('ctG'):$('catG');
  let ctLastS=0; setInterval(()=>{ const onCt=dev.classList.contains('on-ct')&&!$('scrCt').classList.contains('zz'), onHm=!dev.classList.contains('on-ct')&&!dev.classList.contains('on-stock')&&!dev.classList.contains('cr'); if(!onCt&&!onHm) return; const S=oS(); if(S===ctLastS) return; const dir=S>ctLastS?1:-1, first=!ctLastS; ctLastS=S; if(first) return;
    CTLV().querySelectorAll('[data-cts]').forEach(el=>rollText(el,'$'+dec(S),dir,true)); const ch=(S/PREV-1)*100; CTLV().querySelectorAll('[data-ctch]').forEach(el=>{ el.textContent=(ch<0?MIN:'+')+dec(Math.abs(ch))+'%'; el.className=ch<0?'dn':''; });
    CTLV().querySelectorAll('[data-ctsp]').forEach(el=>{ el.innerHTML=ctSpark(); });
    CTI.forEach((t,i)=>{ const q=oQ(t.K,t.cp,OEXP[t.ei].d);
      CTLV().querySelectorAll('[data-cta="'+i+'"]').forEach(el=>{ el.textContent='$'+dec(q.ask); }); CTLV().querySelectorAll('[data-ctr="'+i+'"]').forEach(el=>{ el.textContent='$'+dec(q.ask*100,0); });
      CTLV().querySelectorAll('[data-ctx="'+i+'"]').forEach(el=>{ el.textContent=ctXf(Math.abs(t.at-t.K)/q.ask); });
      CTLV().querySelectorAll('[data-ctpv="'+i+'"]').forEach(el=>{ el.innerHTML=ctPay(t,q); }); }); },1500);

  // main catalog on the home screen: the same option cells + the Turbo tile, woven into the grid
  (()=>{ const g=$('catG'), T=[...g.children], at=(i,html)=>{ const ref=T[i]; ref.insertAdjacentHTML('afterend',html); };
    g.addEventListener('click',ev=>{ const t=ev.target;
      if(t.closest('[data-tu]')){ goTu(); return; }
      const o=t.closest('[data-ot]'); if(o){ const [k,cp,ei]=o.dataset.ot.split(':'); otOpen(+k,cp,+ei); return; }
      const oc=t.closest('[data-opc]'); if(oc){ OCP=oc.dataset.opc; OEI=+oc.dataset.oei; opEntry(); } }); })();

  // ── single stock tiles in the home catalog + working «От 1 $» filter ──
  (()=>{ const g=$('catG'), W3=document.querySelector('#scrKind [data-kind="ss"] .k3d').src;
    const SS=[['aapl','Apple',152.52,'+25,33 %',1],['msft','Microsoft',501.61,'−1,75 %',0],['tsla','Tesla',375.30,'−11,03 %',0],['nvda','NVIDIA',227.38,'+29,36 %',1],['amzn','Amazon',258.45,'+11,22 %',1],['goog','Alphabet',350.87,'+38,46 %',1],['meta','Meta',741.25,'−5,74 %',0],['visa','Visa',369.95,'+8,67 %',1]];
    const tile=(c,more)=>{ const ap=c[0]==='aapl', p=r2(c[2]*SSF());
      return '<div class="tile sst'+(more?' ss-more':'')+'" data-ssk="'+c[0]+'"'+(ap?'':' data-other')+'><span class="sst-lg">'+lgHTML(c[0])+'<img class="k3d" src="'+W3+'" alt=""></span><span class="n">'+c[1]+' · 1/100</span><hr><span class="p"'+(ap?' id="catAaplS"':'')+'>'+fmt2(p)+'</span><span class="c'+(c[4]?'':' dn')+'">'+c[3]+' за год</span>'+
        '<button class="b"'+(ap?' data-sbuy':'')+'>Купить от '+fmt2(p)+'</button></div>'; };
    const kids=[...g.children], first=kids.find(x=>x.hasAttribute('data-aapl')), ms=kids.find(x=>/Microsoft/.test(x.textContent)&&x.classList.contains('tile'));
    first.insertAdjacentHTML('afterend',tile(SS[0]));
    if(ms) ms.insertAdjacentHTML('afterend',tile(SS[1]));
    g.insertAdjacentHTML('afterbegin','<div class="ss-hd"><img class="k3d" src="'+W3+'" alt=""><span><b>Single Stock ETF — от $1</b>1/100 акции известных компаний. Покупаете поштучно, цена в 100 раз ниже</span></div>');
    g.insertAdjacentHTML('beforeend',SS.slice(2).map(c=>tile(c,true)).join(''));
    // mix a couple of singles into the default grid: NVIDIA → NVIDIA·1/100, Meta·1/100 next to Meta
    const reg=n=>[...g.children].find(x=>x.classList.contains('tile')&&!x.classList.contains('sst')&&x.querySelector('.n')&&x.querySelector('.n').textContent.indexOf(n)===0);
    const sst=k=>g.querySelector('.sst[data-ssk="'+k+'"]');
    const nv=reg('NVIDIA'), mt=reg('Meta');
    if(nv&&sst('nvda')){ nv.after(sst('nvda')); sst('nvda').classList.remove('ss-more'); nv.classList.add('reg-off'); }
    if(mt&&sst('meta')){ mt.after(sst('meta')); sst('meta').classList.remove('ss-more'); }
    g.addEventListener('click',e=>{ const t=e.target.closest('[data-ssk]'); if(!t) return; e.stopImmediatePropagation();
      if(t.hasAttribute('data-other')){ toast('В прототипе открывается только Apple'); return; }
      stMode('ss'); if(e.target.closest('[data-sbuy]')&&!(window.__nbPre&&__nbPre())){ setSide('buy'); dev.classList.add('on-stock'); goOrder(); syncStatus(); return; } goStock(); },true);
    $('chips').addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b||b.textContent.trim()!=='От 1 $') return;
      setTimeout(()=>{ const on=b.classList.contains('on'); g.classList.add('fade'); setTimeout(()=>{ g.classList.toggle('f-ss',on); g.classList.remove('fade'); },160); },0); });
  })();

  // ═════════ FAMOUS PORTFOLIOS · hub → person (Тимур Турлов) → repeat with the order-screen kit ═════════
  const FPN={
    t:{n:'Тимур Турлов',s:'Freedom Holding',y:26.4,fol:12400,lg:['nvda','aapl','msft']},
    b:{n:'Уоррен Баффет',s:'Berkshire Hathaway',y:15.4,fol:48900,lg:['aapl','ko','bac']},
    p:{n:'Нэнси Пелоси',s:'Конгресс США',y:12.4,fol:31200,lg:['nvda','pltr','goog']}};
  const FPPH={t:'turlov',b:'buffett',p:'pelosi'}, FPAV={t:'ta',b:'ba',p:'pa'};
  // Turlov's book: weight %, 1-year move of the stock, what it added to the portfolio's +26,4 %
  const FPC=[
    {lg:'nvda',n:'NVIDIA',w:22,r:128.4,c:14.2,px:227.38},{lg:'aapl',n:'Apple',w:18,r:20.8,c:3.7,px:0},{lg:'msft',n:'Microsoft',w:14,r:14.9,c:2.1,px:501.61},
    {lg:'pltr',n:'Palantir',w:11,r:112.0,c:8.4,px:182.40},{lg:'goog',n:'Alphabet',w:9,r:22.1,c:2.0,px:350.87},{lg:'ko',n:'Coca-Cola',w:7,r:-3.4,c:-0.2,px:87.12},
    {lg:'amzn',n:'Amazon',w:4,r:11.2,c:0.4,px:258.45},{lg:'visa',n:'Visa',w:3,r:8.7,c:0.3,px:369.95},{lg:'jpm',n:'JPMorgan',w:3,r:12.3,c:0.4,px:352.04},
    {lg:'meta',n:'Meta',w:2,r:-5.7,c:-0.1,px:741.25},{lg:'ma',n:'Mastercard',w:2,r:-3.6,c:-0.1,px:567.65},{lg:'wmt',n:'Walmart',w:2,r:3.5,c:0.1,px:107.44},
    {lg:'nflx',n:'Netflix',w:2,r:-39.8,c:-2.6,px:73.36},{lg:'coin',n:'Coinbase',w:1,r:-41.3,c:-2.2,px:201.05}];
  const FPD=[{lg:'pltr',t:'Купил Palantir',s:'Новая позиция · 3 % портфеля',b:1,d:'неделю назад'},
    {lg:'ko',t:'Сократил Coca-Cola',s:'Доля '+MIN+'2 % портфеля',b:0,d:'3 недели назад'},
    {lg:'nvda',t:'Докупил NVIDIA',s:'Доля +4 % портфеля',b:1,d:'месяц назад'}];
  const FPH=[{p:'p',v:'купила',tk:'NVIDIA',lg:'nvda',ch:'NVDA +3,4 %',up:1,d:'2 дня назад',b:1},
    {p:'b',v:'сократил',tk:'Apple',lg:'aapl',ch:'AAPL '+MIN+'0,8 %',up:0,d:'3 дня назад',b:0},
    {p:'t',v:'добавил',tk:'Palantir',lg:'pltr',ch:'PLTR +5,1 %',up:1,d:'неделю назад',b:1}];
  const FPCL=[{n:'Политики США',c:12,i:'c_pol'},{n:'Легенды Уолл-стрит',c:8,i:'c_ws'},{n:'Хедж-фонды',c:15,i:'c_hf'},{n:'Дивидендные',c:6,dv:1}];
  const FPPER=[{k:'за месяц',n:31,end:3.2,vol:.55,st:'d'},{k:'за полгода',n:27,end:14.8,vol:1.9,st:'w'},{k:'за год',n:53,end:26.4,vol:2.1,st:'w'},{k:'за всё время',n:61,end:84.1,vol:3.4,st:'m'}];
  const FPM=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'], FPMS=['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
    FPMN=['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
  const fpPl=(n,f)=>{ const a=n%10,b=n%100; return f[a===1&&b!==11?0:a>=2&&a<=4&&(b<10||b>=20)?1:2]; }, FPB=['бумага','бумаги','бумаг'];
  const FPUSR=nvI('user_2',12,2.4);
  const FPAR='<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const fpSg=v=>(v<0?MIN:'+')+dec(Math.abs(v),1)+' %';
  const fpAv=(k,sm)=>'<span class="fp-av '+k+(sm?' sm':'')+'"><i class="fp-i-'+FPAV[k]+'"></i></span>';
  const fpShake=el=>el.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(4px)'},{transform:'none'}],{duration:280});
  const fpOnly=el=>{ toast('В прототипе открыт портфель Тимура Турлова'); if(el) fpShake(el); };
  let FP_MINE=0, FP_REP=true;

  // ── hub ──
  function fpHub(){
    fphSel(FPHK,0,true);
    $('fpCols').innerHTML=FPCL.map(c=>'<button class="fp-col'+(c.dv?' dv':' fp-i-'+c.i)+'" data-fcl="'+c.n+'"><b>'+c.n+'</b><span>'+c.c+' '+fpPl(c.c,['портфель','портфеля','портфелей'])+'</span></button>').join('');
    $('fpTop').innerHTML=['t','b','p'].map(k=>{ const x=FPN[k];
      return '<button class="fp-row" data-fpp="'+k+'">'+fpAv(k)+'<span class="m"><b>'+x.n+'</b><span><span class="fp-lgs">'+x.lg.map(l=>lgHTML(l)).join('')+'</span>'+group(String(x.fol))+' повторяют</span></span>'+
        '<span class="r"><b>+'+dec(x.y,1)+' %</b><small>за год</small></span></button>'; }).join('');
    $('fpDeals').innerHTML=FPH.map(d=>'<div class="fp-dl"><span class="fp-dav">'+fpAv(d.p,1)+lgHTML(d.lg)+'</span><span class="m"><b>'+FPN[d.p].n+' <em class="'+(d.b?'up':'dn')+'">'+d.v+'</em> '+d.tk+'</b>'+
      '<small><span class="'+(d.up?'up':'dn')+'">'+d.ch+'</span> за день · '+d.d+'</small></span></div>').join(''); }
  // hub hero — same build as the long-term hero: label, big number, accent, glass switch, black chip, white pill
  let FPHK='t';
  function fphSel(k,dir,init){ const x=FPN[k], was=FPN[FPHK]; FPHK=k;
    $('fphSeg').innerHTML=['t','b','p'].map(q=>'<button data-fk="'+q+'"'+(q===k?' class="lt-on"':'')+'>'+fpAv(q,1)+'<span>'+FPN[q].n.split(' ')[1]+'</span></button>').join('');
    document.querySelectorAll('#fpHero .fph-img').forEach(el=>el.classList.toggle('on',el.dataset.k===k));
    document.querySelectorAll('#fpHero .fph-bg>i').forEach(el=>el.classList.toggle('on',el.dataset.k===k)); $('scrFp').dataset.k=k;
    $('fphK').textContent='Портфель '+{t:'Тимура Турлова',b:'Уоррена Баффета',p:'Нэнси Пелоси'}[k];
    const v='+'+dec(x.y,1); if(!init&&dir) rollText($('fphV'),v,x.y>was.y?1:-1,true); else $('fphV').textContent=v;
    $('fphD').textContent='+$'+dec(x.y*10,0)+' на каждые $1 000';
    $('fphF').innerHTML=FPUSR+'<b>'+group(String(x.fol))+'</b> повторяют'; }
  function fpNavSync(sc,hero,nav,bk,cap,mini){ const y=$(sc).scrollTop, lt=y>$(hero).offsetHeight-90, n=$(nav);
    n.classList.toggle('sc',y>6); n.classList.toggle('mini',y>mini); n.classList.toggle('lt',lt); $(bk).classList.toggle('dk',!lt); $(cap).classList.toggle('dk',!lt); }
  const fpHubNav=()=>fpNavSync('fpScroll','fpHero','fpNav','fpBack','fpCap',150);
  const fppNav=()=>fpNavSync('fppScroll','fppHero','fppNav','fppBack','fppCap',170);
  let fpSeen=false;
  function goFp(){ closeSheet(); fpHub(); if(!fpSeen){ fpSeen=true; setTimeout(()=>{ if(dev.classList.contains('on-fp')&&!dev.classList.contains('on-fpp')) stoOpen('fp'); },500); } $('fpScroll').scrollTop=0; fpHubNav(); dev.classList.add('on-fp'); $('scrFp').setAttribute('aria-hidden','false'); syncStatus(); }
  function fpBack(){ closeSheet(); dev.classList.remove('on-fp'); $('scrFp').setAttribute('aria-hidden','true'); syncStatus(); }
  const fpHowHTML=()=>'<div class="lts"><div class="lts-h"><b>Как это работает</b>'+XB+'</div><div class="fp-hw">'+
    [['Выбираете портфель','Смотрите доходность, состав и последние сделки автора'],['Указываете сумму','От $50. Бумаги купятся в тех же долях — дробными частями'],['Сделки повторяются','Автор купил или продал — повторим на вашем счёте. Выключить можно в любой момент']]
      .map((s,i)=>'<div><i>'+(i+1)+'</i><span><b>'+s[0]+'</b><small>'+s[1]+'</small></span></div>').join('')+'</div>'+
    '<div class="lts-rc"><div class="lts-rw" style="border-top:0"><span>Комиссия за повтор</span><b>0 %</b></div><div class="lts-rw"><span>Минимальная сумма</span><b>$50</b></div></div><div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>';

  // ── person page ──
  function fpRng(a){ return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  const FPSER=FPPER.map((P,pi)=>{ const r=fpRng(911+pi*37), L=Math.log(1+P.end/100), x=[0]; let m=0;
    for(let i=1;i<P.n;i++){ m=m*.55+(r()-.5)*P.vol/100*2; x.push(x[i-1]+m); }
    const off=x[P.n-1]-L; const v=x.map((q,i)=>(Math.exp(q-off*i/(P.n-1))-1)*100);
    const d=v.map((_,i)=>{ const k=P.n-1-i, t=new Date(LTNOW); if(P.st==='m') t.setMonth(t.getMonth()-k); else t.setDate(t.getDate()-k*(P.st==='w'?7:1)); return t; });
    return {v,d}; });
  let FPPI=2;
  const fpDl=(t,pi)=>pi===3?FPMN[t.getMonth()]+' '+t.getFullYear():t.getDate()+' '+FPM[t.getMonth()]+(pi===2&&t.getFullYear()!==LTNOW.getFullYear()?' '+t.getFullYear():'');
  const fpAx=(t,pi)=>pi===3?String(t.getFullYear()):pi===0?t.getDate()+' '+FPMS[t.getMonth()]:FPMS[t.getMonth()];
  const fpPer=v=>(v<0?MIN+'$':'+$')+dec(Math.abs(v)*10,0)+' на каждые $1 000';
  function fppChart(){ const box=$('fppCh'), W=box.clientWidth||390, H=146, T=12, S=FPSER[FPPI], v=S.v, n=v.length;
    const lo=Math.min(0,...v), hi=Math.max(...v), pad=(hi-lo)*.1||1, a=lo-pad*.4, b=hi+pad;
    const X=i=>16+i/(n-1)*(W-32), Y=p=>T+(b-p)/(b-a)*(H-T);
    const d='M'+v.map((p,i)=>X(i).toFixed(1)+' '+Y(p).toFixed(1)).join('L');
    const ax=[0,Math.round((n-1)/2),n-1].map(i=>'<span>'+fpAx(S.d[i],FPPI)+'</span>').join('');
    box.innerHTML='<svg width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'"><defs><linearGradient id="fppG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3DDC84" stop-opacity=".32"/><stop offset="1" stop-color="#3DDC84" stop-opacity="0"/></linearGradient></defs>'+
      '<path d="M16 '+Y(0).toFixed(1)+'H'+(W-16)+'" stroke="rgba(255,255,255,.18)" stroke-width="1" stroke-dasharray="3 4"/>'+
      '<path class="ar" d="'+d+'L'+X(n-1).toFixed(1)+' '+H+'L16 '+H+'Z" fill="url(#fppG)"/>'+
      '<path class="ln" pathLength="1" d="'+d+'" fill="none" stroke="#3DDC84" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>'+
      '<circle cx="'+X(n-1).toFixed(1)+'" cy="'+Y(v[n-1]).toFixed(1)+'" r="4" fill="#3DDC84" data-lp="1"/></svg><i class="cur"></i><i class="dot"></i><div class="ax">'+ax+'</div>';
    box.__g={X,Y,n,W}; }
  function fppHead(i,dir){ const S=FPSER[FPPI], v=i==null?FPPER[FPPI].end:S.v[i], el=$('fppV'), str=fpSg(v);
    $('fppK').textContent=i==null?'Доходность '+FPPER[FPPI].k:fpDl(S.d[i],FPPI);
    if(dir&&el.textContent!==str) rollText(el,str,dir,true); else el.textContent=str;
    el.classList.toggle('dn',v<0); $('fppD').textContent=fpPer(v); $('fppD').classList.toggle('dn',v<0); }
  function fppComp(){ const mx=FPC[0].w;
    $('fppComp').innerHTML=FPC.map((x,i)=>'<div class="fpc'+(i>5?' x':'')+'">'+lgHTML(x.lg)+'<span class="m"><span class="t"><b>'+x.n+'</b><b class="w">'+x.w+' %</b></span>'+
      '<span class="br"><i style="width:100%;transform:scaleX('+(x.w/mx).toFixed(3)+')"></i></span>'+
      '<span class="s"><span class="'+(x.r<0?'dn':'up')+'">'+(x.r<0?'Упала на ':'Выросла на ')+dec(Math.abs(x.r),1)+' %</span><span>'+fpSg(x.c)+' к доходности</span></span></span></div>').join('');
    $('fppComp').classList.remove('all'); $('fppMore').textContent='Показать все 14';
    $('fppDeals').innerHTML=FPD.map(d=>'<div class="fp-dl fpd">'+lgHTML(d.lg)+'<span class="m"><b>'+d.t+'</b><small>'+d.s+'</small></span><span class="r"><span class="fp-tag '+(d.b?'buy':'sell')+'">'+(d.b?'Покупка':'Продажа')+'</span><small>'+d.d+'</small></span></div>').join(''); }
  function fppMineSync(){ const m=$('fppMine');
    if(FP_MINE){ m.innerHTML='<i><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i><span><b>Вы повторяете этот портфель</b><small>Вложено '+fmt2(FP_MINE)+' · повтор сделок '+(FP_REP?'включён':'выключен')+'</small></span>'; m.classList.add('on'); }
    else m.classList.remove('on');
    $('fppGoIn').textContent=FP_MINE?'Докупить':'Повторить портфель'; $('fppGo').textContent=FP_MINE?'Докупить':'Повторить портфель · от $50'; }
  function fpOpenP(){ closeSheet(); FPPI=2; $('fppPer').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('lt-on',i===FPPI));
    fppComp(); fppMineSync(); $('fppScroll').scrollTop=0; $('fppBot').classList.remove('on'); fppNav();
    dev.classList.add('on-fpp'); $('scrFpP').setAttribute('aria-hidden','false'); syncStatus(); fppChart(); fppHead(null); }
  function fppBack(){ closeSheet(); dev.classList.remove('on-fpp'); $('scrFpP').setAttribute('aria-hidden','true'); syncStatus(); }
  const fppBotSync=()=>{ const r=$('fppGoIn').getBoundingClientRect(), t=$('fppScroll').getBoundingClientRect().top; $('fppBot').classList.toggle('on',r.bottom<t+60); };

  // ── repeat: amount on the keypad, what we buy in a sheet ──
  const FPS={amt:500,fresh:true,ex:new Set(),src:'gl'}, FPSMIN=50;
  const fpsGl=()=>ACCS.find(a=>a.id===FPS.src)||ACCS[0];
  const fpsPx=x=>x.px||midPx();
  function fpsAlloc(){ const inc=FPC.map((x,i)=>({x,i})).filter(o=>!FPS.ex.has(o.i)), tw=inc.reduce((s,o)=>s+o.x.w,0);
    return inc.map(o=>Object.assign(o,{sh:o.x.w/tw*100,v:FPS.amt*o.x.w/tw})); }
  function fpsRender(dir){ const a=FPS.amt, gl=fpsGl(), al=fpsAlloc(), n=al.length, ex=FPC.filter((_,i)=>FPS.ex.has(i));
    const low=a<FPSMIN, over=a>gl.bal+1e-9, bad=low||over;
    $('fpsNum').textContent='$'+group(String(a));
    const h=$('fpsHint'); h.textContent=low&&a>0?'Минимум $'+FPSMIN:over?'На счёте '+accShort(gl):'от $'+FPSMIN+' · купим дробными частями'; h.classList.toggle('bad',(low&&a>0)||over);
    $('fpsLgs').innerHTML=al.slice(0,5).map(o=>lgHTML(o.x.lg)).join('')+(n>5?'<i class="more">+'+(n-5)+'</i>':'');
    $('fpsMixT').textContent=ex.length?n+' из 14 '+fpPl(14,FPB)+' · '+(ex.length===1?'без '+ex[0].n:ex.length+' '+fpPl(ex.length,['исключена','исключены','исключены'])):'14 бумаг в тех же долях';
    $('fpsBar').innerHTML=al.map((o,j)=>'<i style="flex-grow:'+o.sh.toFixed(2)+';background:rgba(31,178,74,'+(1-j/(n+1)*.8).toFixed(2)+')"></i>').join('');
    $('fpsMixS').textContent=al.slice(0,3).map(o=>o.x.n+' '+fmt2(bad?0:o.v)).join(' · ')+(n>3?' · …':'');
    $('fpsAccIc').innerHTML=accIc(gl,1); $('fpsAcc').querySelector('.n').textContent=gl.n; $('fpsAccB').textContent=accShort(gl); $('fpsAccB').classList.toggle('bad',over);
    const g=$('fpsGo'); g.textContent=low?'Минимум $'+FPSMIN:over?'Недостаточно средств':'Продолжить'; g.disabled=bad; g.classList.toggle('lo-off',bad);
    if(dir) $('fpsNum').animate([{transform:'translateY('+(dir>0?6:-6)+'px)',opacity:.5},{transform:'none',opacity:1}],{duration:180,easing:'ease-out'}); }
  function fpsOpen(){ closeSheet(); Object.assign(FPS,{amt:500,fresh:true,src:'gl'}); FPS.ex=new Set(); $('fpsTg').classList.toggle('on',FP_REP); $('fpsRep').setAttribute('aria-checked',FP_REP); fpsRender(0);
    dev.classList.add('on-fps'); $('scrFpS').setAttribute('aria-hidden','false'); syncStatus(); }
  function fpsBack(){ closeSheet(); dev.classList.remove('on-fps'); $('scrFpS').setAttribute('aria-hidden','true'); syncStatus(); }
  function fpsExRows(){ const al=fpsAlloc(), m={}, one=al.length===1; al.forEach(o=>{ m[o.i]=o; });
    return FPC.map((x,i)=>{ const o=m[i], on=!!o;
      return '<button class="fps-o'+(on?'':' off')+'" data-i="'+i+'" role="switch" aria-checked="'+on+'"'+(on&&one?' data-last':'')+'>'+lgHTML(x.lg)+'<span class="m"><b>'+x.n+'<small>'+(on?dec(o.sh,1):'0')+' %</small></b><span>'+(on?'≈ '+dec(o.v/fpsPx(x),2)+' акции':'не покупаем')+'</span></span>'+
        '<span class="v">'+(on?fmt2(o.v):'—')+'</span><span class="hs-tg'+(on?' on':'')+'"></span></button>'; }).join(''); }
  function fpsMixSheet(){
    openSheet('<div class="lts"><div class="lts-h"><b>Что купим</b>'+XB+'</div><p class="fps-sub">Выключите бумагу — её доля перейдёт остальным. Сумма останется '+fmt2(FPS.amt)+'</p><div class="fps-ex" id="fpsEx">'+fpsExRows()+'</div>'+
      '<div class="lts-go"><button class="lt-cta" id="fpsExOk">Готово</button></div></div>','ltsh');
    $('fpsEx').onclick=e=>{ const b=e.target.closest('.fps-o'); if(!b) return; const i=+b.dataset.i;
      if(!FPS.ex.has(i)&&b.hasAttribute('data-last')){ fpShake(b); toast('Оставьте хотя бы одну бумагу'); return; }
      if(FPS.ex.has(i)) FPS.ex.delete(i); else FPS.ex.add(i); const st=$('fpsEx').scrollTop; $('fpsEx').innerHTML=fpsExRows(); $('fpsEx').scrollTop=st; fpsRender(0); };
    $('fpsExOk').onclick=closeSheet; }
  // the standard purchase confirm (swipe screen), like buying a stock
  let FPF=false, FPO=null; const FPC0={};
  const FPCHV='<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="#8E8E93" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function fpsConfirm(){ const g=$('fpsGo'); if(g.disabled) return; const a=FPS.amt, al=fpsAlloc(), n=al.length, src=fpsGl(), kzt=src.cur==='KZT';
    FPO={a,al,n,src}; FPF=true;
    const q=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if(!('q' in FPC0)){ FPC0.q=q.innerHTML; FPC0.t=$('cfTitle').textContent; FPC0.sl=sl.innerHTML; FPC0.slc=sl.className; FPC0.fin=$('fin').textContent; }
    $('cfTitle').textContent='Повторить портфель'; q.removeAttribute('data-book'); q.onclick=null; q.innerHTML='Тимур Турлов · +26,4 % за год';
    sl.className='slogo fpf-sl'; sl.innerHTML=fpAv('t');
    const rows=[['Сумма',fmt2(a)],['Состав','<button class="fpf-det" data-fpdet>'+n+' '+fpPl(n,FPB)+' в тех же долях'+FPCHV+'</button>'],['Повторять сделки автора',FP_REP?'Да':'Нет'],['Комиссия','0 %'],['Спишется с',accIc(src,true)+src.n]];
    if(kzt) rows.splice(4,0,['В тенге','≈ '+group(String(Math.round(a*RATE)))+' ₸']);
    $('receipt').innerHTML=rows.map(r=>'<div class="rc"'+(r[0]==='Состав'?' data-fpdet':'')+'><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('cfNote').lastChild.textContent='Заявки уйдут на биржу по текущей цене. Итоговая сумма может немного отличаться.'+(kzt?' Спишем с карты в тенге по курсу 1 $ = '+RATE+' ₸.':'');
    $('gz').classList.remove('blocked'); $('gzLbl').textContent='Проведите, чтобы купить'; $('knob').setAttribute('aria-label','Проведите вверх, чтобы купить');
    $('rcpt').innerHTML=[['Покупаем',n+' '+fpPl(n,FPB)],['На сумму',fmt2(a)],['Повтор сделок',FP_REP?'включён':'выключен'],['Списано с',accIc(src,true)+src.sh]].map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('doneH').textContent='Заявка отправлена'; $('sttT').textContent='В работе'; $('doneTxt').textContent='Покупаем '+n+' '+fpPl(n,FPB)+' по текущей цене — это займёт пару секунд'; $('fin').textContent='К портфелю';
    resetKnob(false); $('scrConfirm').classList.remove('success');
    dev.classList.add('fpf','on-confirm'); $('scrConfirm').setAttribute('aria-hidden','false'); syncStatus(); }
  function fpfRestore(){ if(!FPF) return; FPF=false; dev.classList.remove('fpf');
    const q=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if('q' in FPC0){ q.innerHTML=FPC0.q; q.setAttribute('data-book',''); q.onclick=()=>openBook(); $('cfTitle').textContent=FPC0.t; sl.innerHTML=FPC0.sl; sl.className=FPC0.slc; $('fin').textContent=FPC0.fin; } }
  function fpfFinish(){ const o=FPO; if(!o) return; const src=o.src;
    src.raw=Math.round((src.raw-(src.cur==='USD'?o.a:o.a*RATE))*100)/100; src.bal=src.cur==='USD'?src.raw:src.raw/RATE; FP_MINE=Math.round((FP_MINE+o.a)*100)/100;
    goBack(); fpsBack(); fppMineSync(); setTimeout(()=>{ fpfRestore(); resetDone(); },460);
    setTimeout(()=>{ $('fppScroll').scrollTo({top:0,behavior:'smooth'}); toast('Портфель повторён · '+fmt2(o.a)); },300); }
  // what exactly we buy: every paper, its share, amount and ≈ quantity
  function fpsDetSheet(){ const al=FPF&&FPO?FPO.al:fpsAlloc(), a=FPF&&FPO?FPO.a:FPS.amt, n=al.length;
    openSheet('<div class="lts"><div class="lts-h"><b>Что вы покупаете</b>'+XB+'</div><p class="fps-sub">'+n+' '+fpPl(n,FPB)+' на '+fmt2(a)+' — в тех же долях, что у Тимура Турлова</p>'+
      '<div class="fps-dbar">'+al.map((o,j)=>'<i style="flex-grow:'+o.sh.toFixed(2)+';background:rgba(31,178,74,'+(1-j/(n+1)*.8).toFixed(2)+')"></i>').join('')+'</div>'+
      '<div class="fps-det">'+al.map(o=>'<div class="fps-dr">'+lgHTML(o.x.lg)+'<span class="m"><b>'+o.x.n+'</b><span>'+dec(o.sh,1)+' % · ≈ '+dec(o.v/fpsPx(o.x),3)+' акции</span></span><b class="v">'+fmt2(o.v)+'</b></div>').join('')+'</div>'+
      '<div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>','ltsh'); }
  // pick where the money comes from: brokerage account or a card
  function fpsAccSheet(){ let pick=FPS.src; const a=FPS.amt;
    const note=()=>{ const s=ACCS.find(x=>x.id===pick); return 'Сумма к списанию: <b>'+fmt2(a)+'</b>'+(s.cur==='KZT'?' <span>≈ '+group(String(Math.round(a*RATE)))+' ₸</span>':''); };
    openSheet('<div class="sh-head center"><span></span><h3 class="lg">Откуда списать</h3><span></span></div><div class="acc-list">'+
      ACCS.map(x=>'<button class="accw'+(x.id===pick?' sel':'')+'" data-acc="'+x.id+'"><span class="acc-in">'+accIc(x)+'<span class="acc-tx"><span class="l1"><b>'+x.n+'</b> · '+x.s+'</span><span class="l2">'+accMoney(x)+'</span></span></span>'+
        '<i class="radio"><svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.2 4.6 4.3 7.6 10.8 1.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>').join('')+
      '</div><div class="acc-note" id="fpsAccNote">'+note()+'</div><div class="sh-cta"><button class="cta" id="fpsAccOk">Выбрать</button></div>','acc');
    sheet.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{ pick=b.dataset.acc; sheet.querySelectorAll('.accw').forEach(x=>x.classList.toggle('sel',x===b)); $('fpsAccNote').innerHTML=note(); });
    $('fpsAccOk').onclick=()=>{ FPS.src=pick; fpsRender(0); closeSheet(); $('fpsAcc').animate([{transform:'scale(1.06)'},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'}); }; }
  { const cb0=$('cfBack').onclick, fin0=$('fin').onclick, fop0=$('finOp').onclick;
    $('cfBack').onclick=()=>{ if(FPF){ goBack(); setTimeout(fpfRestore,440); return; } cb0&&cb0(); };
    $('fin').onclick=()=>{ if(FPF){ fpfFinish(); return; } fin0&&fin0(); };
    $('finOp').onclick=()=>{ if(FPF){ fpsDetSheet(); return; } fop0&&fop0(); };
    $('receipt').addEventListener('click',e=>{ if(FPF&&e.target.closest('[data-fpdet]')) fpsDetSheet(); }); }

  // ── wiring ──
  ['fpBack','fppBack','fpsBack'].forEach(id=>{ $(id).innerHTML=$('cnBack').innerHTML; });
  $('fpBack').onclick=fpBack; $('fppBack').onclick=fppBack; $('fpsBack').onclick=fpsBack;
  $('fpHow').onclick=()=>stoOpen('fp'); $('fpHowC').onclick=ev=>{ if(ev.target.closest('.how-x')) return howHide('fpHowC'); stoOpen('fp'); }; $('fpsInfo').onclick=()=>openSheet(fpHowHTML(),'ltsh');
  $('fpScroll').addEventListener('scroll',()=>{ fpHubNav(); syncStatus(); },{passive:true});
  $('fppScroll').addEventListener('scroll',()=>{ fppNav(); fppBotSync(); syncStatus(); },{passive:true});
  $('scrFp').addEventListener('click',e=>{ const t=e.target;
    const fk=t.closest('[data-fk]'); if(fk){ if(fk.dataset.fk!==FPHK) fphSel(fk.dataset.fk,1); return; }
    if(t.closest('#fphGo')){ if(FPHK==='t') fpOpenP(); else fpOnly($('fphGo')); return; }
    const p=t.closest('[data-fpp]'); if(p){ if(p.dataset.fpp==='t') fpOpenP(); else fpOnly(p); return; }
    const c=t.closest('[data-fcl]'); if(c){ toast('Подборка «'+c.dataset.fcl+'» — скоро'); return; }
    if(t.closest('#fpAll')) toast('Все портфели — скоро'); });
  $('fppShare').onclick=()=>toast('Ссылка на портфель скопирована');
  $('fppPer').onclick=e=>{ const b=e.target.closest('button'); if(!b) return; const i=+b.dataset.p; if(i===FPPI) return; const d=FPPER[i].end>FPPER[FPPI].end?1:-1; FPPI=i;
    $('fppPer').querySelectorAll('button').forEach((x,j)=>x.classList.toggle('lt-on',j===i)); fppChart(); fppHead(null,d); };
  $('fppMore').onclick=()=>{ const c=$('fppComp'), on=!c.classList.contains('all'); c.classList.toggle('all',on); $('fppMore').textContent=on?'Свернуть':'Показать все 14'; };
  $('fppGoIn').onclick=()=>{ if(window.nbLockSheet&&nbLockSheet()) return; fpsOpen(); }; $('fppGo').onclick=$('fppGoIn').onclick;
  // chart scrub: finger / mouse shows the date and the result at that point
  (()=>{ const box=$('fppCh'); let on=false;
    const at=e=>{ const g=box.__g; if(!g) return; const r=box.getBoundingClientRect(), k=box.offsetWidth?r.width/box.offsetWidth:1, x=(e.clientX-r.left)/k;
      const i=Math.max(0,Math.min(g.n-1,Math.round((x-16)/(g.W-32)*(g.n-1)))), v=FPSER[FPPI].v[i];
      box.querySelector('.cur').style.left=g.X(i)+'px'; const d=box.querySelector('.dot'); d.style.left=g.X(i)+'px'; d.style.top=g.Y(v)+'px'; box.classList.add('sc','scrub'); fppHead(i); };
    const end=()=>{ if(!box.classList.contains('sc')) return; on=false; box.classList.remove('sc','scrub'); fppHead(null); };
    box.addEventListener('pointerdown',e=>{ on=true; try{ box.setPointerCapture(e.pointerId); }catch(_){} at(e); });
    box.addEventListener('pointermove',e=>{ if(on||e.pointerType==='mouse') at(e); });
    box.addEventListener('pointerup',end); box.addEventListener('pointercancel',end); box.addEventListener('pointerleave',()=>{ if(!on) end(); }); })();
  $('fpsKp').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(!b) return; const k=b.dataset.k, was=FPS.amt; let s=FPS.amt?String(FPS.amt):'';
    if(k==='del') s=FPS.fresh?'':s.slice(0,-1); else if(k==='000'){ if(!s||FPS.fresh){ fpShake(b); return; } s+='000'; } else s=FPS.fresh?k:s+k;
    if(s.length>6){ fpShake($('fpsBig')); return; }
    FPS.fresh=false; FPS.amt=+s||0; fpsRender(FPS.amt>was?1:-1); });
  $('fpsMix').onclick=fpsMixSheet;
  $('fpsRep').onclick=()=>{ FP_REP=!FP_REP; $('fpsTg').classList.toggle('on',FP_REP); $('fpsRep').setAttribute('aria-checked',FP_REP); toast(FP_REP?'Будем повторять сделки автора':'Купим один раз, без повторов'); };
  $('fpsAcc').onclick=fpsAccSheet;
  $('fpsGo').onclick=fpsConfirm;

  // catalog mini-card: dark collectible card, cut-out at the bottom right, «Портфели» tag opens the hub
  const FPTG='<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="7" width="17" height="12.5" rx="3" stroke="currentColor" stroke-width="2.2"/><path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7M3.5 12.5h17" stroke="currentColor" stroke-width="2.2"/></svg>';
  function ctFp(k,big){ const x=FPN[k];
    return '<div class="ct-fp '+k+(big?' fp-big':'')+'" role="button" tabindex="0" data-fp="'+k+'"><span class="ph fp-i-'+FPPH[k]+'"></span>'+(big?'':'<span class="fpt" data-fphub>'+FPTG+'Портфели</span>')+
      '<span class="rt"><b>+'+dec(x.y,1)+' %</b><small>за год</small></span>'+
      '<span class="nm">'+x.n+'<small>'+FPUSR+group(String(x.fol))+' повторяют</small></span><span class="b">Смотреть</span></div>'; }
  // home block → hub / Турлов
  $('fpHCar').innerHTML=['t','b','p'].map(k=>ctFp(k,1)).join('');
  $('fpHGo').onclick=goFp; $('fpHAll').onclick=goFp;
  $('fpHCar').addEventListener('click',e=>{ const c=e.target.closest('[data-fp]'); if(!c) return; if(e.target.closest('[data-fphub]')) goFp(); else if(c.dataset.fp==='t') fpOpenP(); else fpOnly(c); });

  // ── portfolio stories (same engine and look as Прогнозы / Опционы) ──
  const fsCard=(k,cl)=>{ const x=FPN[k]; return '<div class="fsc '+k+' '+cl+'"><i class="dt"></i><span class="ph fp-i-'+FPPH[k]+'"></span><span class="rt"><b>+'+dec(x.y,1)+' %</b><small>за год</small></span><span class="nm">'+x.n+'</span></div>'; };
  const FSCK='<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  SETS.fp={cta:'Смотреть портфели',done:()=>{ if(!dev.classList.contains('on-fp')) goFp(); },items:[
    {t:'Повторяйте<br>за известными',p:'Сделки известных инвесторов публичны. Подключитесь — и ваш счёт будет повторять их портфель.',pal:['#10B85A','#7C5CFF','#F29A00'],
     i:'<div class="fs1">'+fsCard('b','l')+fsCard('p','r')+fsCard('t','c')+'</div>'},
    {t:'Смотрите,<br>что внутри',p:'Доходность, состав и последние сделки видны ещё до покупки.',pal:['#10B85A','#2F6BFF','#0FD1A0'],
     i:'<div class="fs2"><div class="fsg"><div class="hd">'+fpAv('t',1)+'<span class="tx"><b>Тимур Турлов</b><small>14 бумаг</small></span><i class="up">+26,4 %</i></div>'+
       [['nvda','NVIDIA',22],['aapl','Apple',18],['msft','Microsoft',14],['pltr','Palantir',11]].map((r,k)=>'<div class="rw" style="--k:'+k+'">'+lgHTML(r[0])+'<span class="tx"><b>'+r[1]+'<em>'+r[2]+' %</em></b><i class="br"><i style="--w:'+(r[2]/22)+'"></i></i></span></div>').join('')+'</div></div>'},
    {t:'Вложите<br>от $50',p:'Купим те же бумаги в тех же долях — дробными частями. $500 разложатся сами.',pal:['#0FB9A8','#10C810','#2F6BFF'],
     i:'<div class="fs3"><div class="fsg top"><span>Вы вкладываете</span><b data-f3>$0</b></div><svg class="fl" width="300" height="70" viewBox="0 0 300 70" fill="none">'+
       [36,112,188,264].map((x,k)=>'<path class="dr" style="--k:'+k+'" pathLength="1" d="M150 2C150 36 '+x+' 30 '+x+' 66" stroke="rgba(124,242,156,.7)" stroke-width="2" stroke-linecap="round"/>').join('')+'</svg>'+
       '<div class="cs">'+[['nvda','$110'],['aapl','$90'],['msft','$70'],['pltr','$55']].map((r,k)=>'<div class="ch" style="--k:'+k+'">'+lgHTML(r[0])+'<b>'+r[1]+'</b></div>').join('')+'</div><i class="more">и ещё 10 бумаг</i></div>',
     enter:sl=>stoCount(sl.querySelector('[data-f3]'),0,500,'$',350)},
    {t:'Автор купил —<br>вы тоже',p:'Турлов докупил NVIDIA — такая же сделка появится на вашем счёте. Автоматически.',pal:['#10B85A','#2F6BFF','#7C5CFF'],
     i:'<div class="fs4"><div class="fsg ra">'+fpAv('t',1)+'<span class="tx"><b>Тимур Турлов</b><small>Докупил NVIDIA · +4 %</small></span><i class="fbt">Покупка</i></div><i class="beam"><i></i></i>'+
       '<div class="fsg rb"><span class="aic gl">GL</span><span class="tx"><b>Ваш счёт</b><small>Докупили NVIDIA · +4 %</small></span><i class="ok">'+FSCK+'</i></div><i class="nt">через минуту</i></div>'},
    {t:'Всё под вашим<br>контролем',p:'Отключите повтор или продайте бумаги в любой момент. Комиссия за повтор — 0 %.',pal:['#10C810','#0FB9A8','#E8A400'],
     i:'<div class="fs5"><div class="fsg tr"><span><b>Повторять сделки</b><small class="on">Включено</small><small class="off">Выключено</small></span><i class="sw"></i></div><div class="fsg sell">Продать портфель</div><div class="zero"><b>0 %</b><small>комиссия<br>за повтор</small></div></div>'}]};

  // ═════════ TURBO · Nik's sketch: the price line runs to a finish column split into 4 sectors, each with its own ×K ═════════
  // round 15 s; sectors relative to the start price: above +$25 / 0…+25 / −25…0 / below −25; several sectors per round
  const TUR=15, TULOCK=3, TURES=1.6, TUD=25, TUDT=.1, TUEDGE=.9, TUMAX=50;
  const TUS=[{n:'сильно вверх',u:1},{n:'вверх',u:1},{n:'вниз',u:0},{n:'сильно вниз',u:0}];
  const TU={ticks:[],bets:[],amt:5,raf:0,t0:0,W:0,H:0,dpr:1,sim:{p:67412.5,mom:0,anc:67412.5},inc:null,seen:false,lastF:0,R:null,vc:0,sp:0,g:null,pxT:0,mc:{},mcT:-1,rid:0,pt:[],rg:[]};
  const tuN=()=>{ let u=0,v=0; while(!u) u=Math.random(); while(!v) v=Math.random(); return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); };
  // one simulated tick: noise + a little momentum + rare jumps, softly pulled to a slowly drifting anchor
  function tuStepP(s){ const dp=tuN()*2.4*Math.sqrt(TUDT); s.mom=s.mom*.85+dp*.6; if(Math.random()<.012) s.mom+=(Math.random()<.5?-1:1)*(3+Math.random()*4);
    s.p=s.p+s.mom*.5+dp*.5+(s.anc-s.p)*.0015; s.anc+=tuN()*.15; return s.p; }
  // fair odds from the same dynamics: where the price ends up after τ seconds (τ = 0…15)
  function tuMC(){ const s={p:67412.5,mom:0,anc:67412.5}, P=[]; for(let i=0;i<30000;i++) P.push(tuStepP(s)); const L=[];
    for(let l=0;l<=TUR;l++){ const n=Math.round(l/TUDT), a=[]; for(let i=0;i+n<P.length;i+=11) a.push(P[i+n]-P[i]); L.push(new Float32Array(a)); } TU.inc=L; }
  const tuEdge=(s,p0)=>[s===0?p0+TUD:s===1?p0:s===2?p0-TUD:-1e9, s===0?1e9:s===1?p0+TUD:s===2?p0:p0-TUD];
  const tuSec=(p,p0)=>p>=p0+TUD?0:p>=p0?1:p>=p0-TUD?2:3;
  function tuMult(s,tau,p,p0){ const [lo,hi]=tuEdge(s,p0), A=TU.inc[Math.max(0,Math.min(TUR,Math.round(tau)))]; let h=0; const a=lo-p, b=hi-p; for(let i=0;i<A.length;i++) if(A[i]>=a&&A[i]<b) h++;
    const q=h/A.length, m=q>0?TUEDGE/q:TUMAX; return Math.max(1.1,Math.min(TUMAX,m<10?Math.round(m*10)/10:Math.round(m))); }
  const tuMx=m=>'×'+(m<10?dec(m,1):dec(m,0));
  const tuNow=()=>performance.now()/1000-TU.t0;
  const tuLast=()=>TU.ticks[TU.ticks.length-1];
  function tuPriceAt(now){ const T=TU.ticks; for(let i=T.length-1;i>0;i--){ if(T[i-1].t<=now){ const a=T[i-1], b=T[i], f=Math.max(0,Math.min(1,(now-a.t)/TUDT)); return a.p+(b.p-a.p)*f; } } return T[0].p; }
  function tuSeed(){ TU.t0=performance.now()/1000; TU.ticks=[]; for(let t=-45;t<=TUDT+1e-9;t+=TUDT) TU.ticks.push({t:Math.round(t*10)/10,p:tuStepP(TU.sim)}); }
  function tuRound(now){ const p0=tuPriceAt(now); TU.mc={}; TU.mcT=-1; TU.R={id:++TU.rid,t0:now,t1:now+TUR,p0,st:'run'}; if(!TU.vc) TU.vc=p0; }
  function tuAdvance(now){ const T=TU.ticks; while(tuLast().t<now+TUDT) T.push({t:Math.round((tuLast().t+TUDT)*10)/10,p:tuStepP(TU.sim)});
    const cut=now-80; let n=0; while(n<T.length-2&&T[n].t<cut) n++; if(n>0) T.splice(0,n);
    const R=TU.R; if(!R){ tuRound(now); return; }
    if(R.st==='run'&&now>=R.t1){ const w=tuSec(tuPriceAt(R.t1),R.p0); R.st='res'; R.win=w; R.resT=now; let won=0, put=0;
      TU.bets.forEach(b=>{ if(b.r!==R.id||b.st) return; put+=b.a; if(b.s===w){ b.st=1; won+=Math.round(b.a*b.m*100)/100; } else b.st=2; });
      if(won) PMF=Math.round((PMF+won)*100)/100;
      tuSums(); if(put) tuFx(R,won,put); }
    else if(R.st==='res'&&now>=R.resT+TURES){ TU.bets=TU.bets.filter(b=>!b.st); tuRound(now); tuSums(); } }
  function tuSums(){ const o=TU.bets.filter(x=>!x.st); $('tuBal').textContent=fmt2(PMF);
    $('tuIn').textContent=o.length?'$'+dec(o.reduce((s,x)=>s+x.a,0),0)+' · '+o.length:'$0';
    $('tuMax').textContent=o.length?'$'+dec(Math.max(...o.map(x=>x.a*x.m))):'$0'; }

  function tuSize(){ const st=$('tuStage'), cv=$('tuCv'), w=st.clientWidth, h=st.clientHeight; if(!w||!h) return; TU.dpr=Math.min(3,window.devicePixelRatio||1);
    cv.width=Math.round(w*TU.dpr); cv.height=Math.round(h*TU.dpr); cv.style.width=w+'px'; cv.style.height=h+'px'; TU.W=w; TU.H=h; }
  const TUF='"SF Pro Web",-apple-system,system-ui,sans-serif';
  function tuRR(c,x,y,w,h,r){ r=Math.max(0,Math.min(r,w/2,h/2)); c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
  const tuEase=u=>1-Math.pow(1-Math.max(0,Math.min(1,u)),3);
  const tuEd=(g,p0)=>[g.CT,Math.max(g.CT+30,Math.min(g.CB-90,g.Y(p0+TUD))),Math.max(g.CT+60,Math.min(g.CB-60,g.Y(p0))),Math.max(g.CT+90,Math.min(g.CB-30,g.Y(p0-TUD))),g.CB];
  function tuDraw(now,dt){ const cv=$('tuCv'), c=cv.getContext('2d'), W=TU.W, H=TU.H, R=TU.R; if(!W||!R) return;
    const colW=Math.round(Math.min(112,W*.28)), colX=W-14-colW, CT=40, CB=H-12, midY=(CT+CB)/2, startX=W*.4, pxs=(colX-startX)/TUR;
    const run=R.st==='run', tv=run?now:R.t1, lock=run&&R.t1-now<TULOCK;
    const shift=R.id>1?(1-tuEase((now-R.t0)/.7))*(colX-startX):0, hx=run?colX-(R.t1-now)*pxs+shift:colX;
    const p=tuPriceAt(tv), T=TU.ticks, tL=tv-(hx+20)/pxs;
    // vertical scale: keep ±3 sectors in view, zoom out if the path wanders further
    let ext=TUD*3; for(let i=T.length-1;i>=0&&T[i].t>=tL;i--) if(T[i].t<=tv) ext=Math.max(ext,Math.abs(T[i].p-R.p0)*1.15+TUD*.6);
    const spT=(CB-CT)/2/ext; TU.sp=TU.sp?TU.sp+(spT-TU.sp)*(1-Math.exp(-dt*3)):spT; TU.vc+=(R.p0-TU.vc)*(1-Math.exp(-dt*5));
    const Y=q=>midY-(q-TU.vc)*TU.sp, X=t=>hx-(tv-t)*pxs;
    TU.g={colX,colW,CT,CB,Y,lock,run};
    c.setTransform(TU.dpr,0,0,TU.dpr,0,0); c.clearRect(0,0,W,H);
    // future zone between the head and the finish
    if(hx<colX){ const g0=c.createLinearGradient(hx,0,colX,0); g0.addColorStop(0,'rgba(255,255,255,0)'); g0.addColorStop(1,'rgba(255,255,255,.035)'); c.fillStyle=g0; c.fillRect(hx,CT,colX-hx,CB-CT); }
    // sector guides across the chart + levels
    c.font='500 11px '+TUF; c.textBaseline='bottom'; c.textAlign='left';
    [R.p0+TUD,R.p0,R.p0-TUD].forEach((q,i)=>{ const y=Math.round(Y(q))+.5; c.strokeStyle=i===1?'rgba(255,255,255,.22)':'rgba(255,255,255,.1)'; c.setLineDash(i===1?[4,4]:[2,5]); c.beginPath(); c.moveTo(0,y); c.lineTo(colX-6,y); c.stroke();
      c.fillStyle=i===1?'rgba(255,255,255,.5)':'rgba(255,255,255,.3)'; c.fillText((i===1?'старт · ':'')+group(String(Math.round(q))),10,y-4); }); c.setLineDash([]);
    // price path + area
    const path=()=>{ c.beginPath(); let f=true; for(let i=0;i<T.length&&T[i].t<tv;i++){ if(T[i].t<tL) continue; const x=X(T[i].t), y=Y(T[i].p); if(f){ c.moveTo(x,y); f=false; } else c.lineTo(x,y); } c.lineTo(hx,Y(p)); };
    path(); c.lineTo(hx,CB); c.lineTo(0,CB); c.closePath(); const g=c.createLinearGradient(0,CT,0,CB); g.addColorStop(0,'rgba(61,220,132,.14)'); g.addColorStop(1,'rgba(61,220,132,0)'); c.fillStyle=g; c.fill();
    path(); c.strokeStyle='#E9FFF1'; c.lineWidth=2; c.lineJoin='round'; c.shadowColor='rgba(61,220,132,.8)'; c.shadowBlur=10; c.stroke(); c.shadowBlur=0;
    const hy=Y(p);
    // where it would land now: dashed guide from the head into the finish column
    if(hx<colX){ c.strokeStyle='rgba(255,255,255,.4)'; c.setLineDash([2,4]); c.beginPath(); c.moveTo(hx,Math.round(hy)+.5); c.lineTo(colX,Math.round(hy)+.5); c.stroke(); c.setLineDash([]); }
    // finish column: 4 sectors
    const live=tuSec(p,R.p0), ed=tuEd(TU.g,R.p0);
    if(TU.mcT!==Math.floor(now*5)){ TU.mc={}; TU.mcT=Math.floor(now*5); }
    c.textAlign='center'; c.textBaseline='middle';
    for(let s=0;s<4;s++){ const y1=ed[s]+(s?2.5:0), y2=ed[s+1]-(s<3?2.5:0), h=y2-y1, cx=colX+colW/2, cy=(y1+y2)/2, up=TUS[s].u, bt=TU.bets.find(b=>b.r===R.id&&b.s===s);
      const win=!run&&R.win===s, dim=!run&&R.win!==s, ft=now-(R.resT||0);
      const sx=(!run&&bt&&!win&&ft<.55)?Math.sin(ft*58)*6*(1-ft/.55):0, pop=(!run&&win&&ft<.45)?1+.08*Math.sin(Math.PI*ft/.45):1;
      c.save(); if(sx) c.translate(sx,0); if(pop!==1){ c.translate(cx,cy); c.scale(pop,pop); c.translate(-cx,-cy); }
      tuRR(c,colX,y1,colW,h,14);
      if(win){ c.fillStyle=bt?'#3DDC84':'rgba(255,255,255,.92)'; c.shadowColor=bt?'rgba(61,220,132,.8)':'rgba(255,255,255,.35)'; c.shadowBlur=22; c.fill(); c.shadowBlur=0; }
      else if(bt&&!dim){ c.fillStyle=up?'rgba(61,220,132,.92)':'rgba(255,99,104,.92)'; c.fill(); }
      else { c.fillStyle=up?'rgba(61,220,132,'+(dim?.04:.09)+')':'rgba(255,99,104,'+(dim?.04:.09)+')'; c.fill(); }
      if(run&&s===live&&!bt){ c.strokeStyle='rgba(255,255,255,.55)'; c.lineWidth=1.5; c.stroke(); } else if(!win){ c.strokeStyle=up?'rgba(61,220,132,.22)':'rgba(255,99,104,.22)'; c.lineWidth=1; c.stroke(); }
      let m=TU.mc[s]; if(m==null){ m=tuMult(s,R.t1-now,p,R.p0); TU.mc[s]=m; }
      const dark=win||(bt&&!dim), big=h>46;
      if(bt){ c.font='800 17px '+TUF; c.fillStyle=dark?'#07110C':'rgba(255,255,255,.4)'; c.fillText(win?'+$'+dec(bt.a*bt.m,bt.a*bt.m%1?2:0):'$'+bt.a,cx,cy-(big?8:0));
        if(big){ c.font='600 11px '+TUF; c.fillStyle=dark?'rgba(7,17,12,.62)':'rgba(255,255,255,.3)'; c.fillText(win?'выигрыш':dim?'мимо':tuMx(bt.m)+' · '+TUS[s].n,cx,cy+11); } }
      else { c.font='800 18px '+TUF; c.fillStyle=win?'#07110C':dim?'rgba(255,255,255,.25)':lock?'rgba(255,255,255,.45)':up?'#8FF0B6':'#FF9A9A'; if(!dim) c.fillText(win?'итог':tuMx(m),cx,cy-(big?8:0));
        if(big){ c.font='600 11px '+TUF; c.fillStyle=win?'rgba(7,17,12,.62)':'rgba(255,255,255,'+(dim?.2:.5)+')'; c.fillText(TUS[s].n,cx,dim?cy:cy+11); } }
      c.restore(); }
    // finish line
    c.strokeStyle='rgba(255,255,255,.28)'; c.setLineDash([3,4]); c.beginPath(); c.moveTo(colX-6.5,CT); c.lineTo(colX-6.5,CB); c.stroke(); c.setLineDash([]);
    // head + price pill
    const ph=(now%1.6)/1.6; c.beginPath(); c.arc(hx,hy,5+ph*14,0,Math.PI*2); c.fillStyle='rgba(61,220,132,'+(.35*(1-ph))+')'; c.fill();
    c.beginPath(); c.arc(hx,hy,5,0,Math.PI*2); c.fillStyle='#fff'; c.shadowColor='#3DDC84'; c.shadowBlur=12; c.fill(); c.shadowBlur=0;
    const lab=dec(p,1); c.font='700 11px '+TUF; const lw=c.measureText(lab).width+14, lx=hx+12+lw<colX-10?hx+12:hx-12-lw, ly=hy-24<CT?hy+8:hy-24;
    tuRR(c,lx,ly,lw,18,9); c.fillStyle='#fff'; c.fill(); c.fillStyle='#07110C'; c.textAlign='center'; c.fillText(lab,lx+lw/2,ly+9.5);
    // result fx: rings from the winning sector, sparks, falling ash from lost bets
    TU.rg=TU.rg.filter(r=>now-r.t0<.9); TU.rg.forEach(r=>{ const u=(now-r.t0)/.9, e=1-Math.pow(1-u,3); c.save(); tuRR(c,r.x-r.w/2-e*18,r.y-r.h/2-e*18,r.w+e*36,r.h+e*36,14+e*10); c.strokeStyle='rgba('+r.c+','+(.75*(1-u))+')'; c.lineWidth=3*(1-u)+1; c.stroke(); c.restore(); });
    TU.pt=TU.pt.filter(q=>q.l>0); TU.pt.forEach(q=>{ q.vy+=q.g*dt; q.x+=q.vx*dt; q.y+=q.vy*dt; q.vx*=Math.pow(.35,dt); q.l-=dt/q.L; c.globalAlpha=Math.max(0,Math.min(1,q.l*1.6));
      c.fillStyle=q.c; if(q.sq){ c.save(); c.translate(q.x,q.y); c.rotate(q.r+=q.vr*dt); c.fillRect(-q.s/2,-q.s/2,q.s,q.s*.6); c.restore(); } else { c.beginPath(); c.arc(q.x,q.y,q.s,0,Math.PI*2); c.fill(); } }); c.globalAlpha=1;
    // round timer over the finish column
    const left=Math.max(0,R.t1-now), prog=run?1-left/TUR:1; tuRR(c,colX,6,colW,26,13); c.fillStyle='rgba(255,255,255,.08)'; c.fill();
    c.save(); tuRR(c,colX,6,colW,26,13); c.clip(); c.fillStyle=lock||!run?'rgba(255,255,255,.12)':'rgba(61,220,132,.28)'; c.fillRect(colX,6,colW*prog,26); c.restore();
    c.font='700 '+(colW<108?11:12)+'px '+TUF; c.fillStyle='#fff'; c.textAlign='center'; c.fillText(!run?'Итог раунда':lock?'Ставки закрыты':'Финиш через '+Math.ceil(left)+' с',colX+colW/2,19.5); }

  function tuLoop(ts){ TU.raf=0; if(!dev.classList.contains('on-tu')) return; const now=tuNow(), dt=Math.min(.1,Math.max(0,(ts-(TU.lastF||ts))/1000)); TU.lastF=ts;
    tuAdvance(now); tuDraw(now,dt);
    if(now-TU.pxT>.25){ TU.pxT=now; const p=tuPriceAt(now), p1=tuPriceAt(now-5), el=$('tuPx'); el.textContent=fmt2(p); el.className=p>=p1?'up':'dn'; }
    TU.raf=requestAnimationFrame(tuLoop); }
  function goTu(){ closeSheet(); if(!TU.inc) tuMC(); if(!TU.t0) tuSeed();
    dev.classList.add('on-tu'); $('scrTu').setAttribute('aria-hidden','false'); syncStatus();
    requestAnimationFrame(()=>{ tuSize(); TU.lastF=0; TU.sp=0; tuSums(); if(!TU.raf) TU.raf=requestAnimationFrame(tuLoop); });
    $('tuHint').classList.toggle('off',TU.seen); }
  function tuBack(){ dev.classList.remove('on-tu'); $('scrTu').setAttribute('aria-hidden','true'); syncStatus(); }
  $('tuBack').innerHTML=$('cnBack').innerHTML; $('tuBack').onclick=tuBack;
  window.addEventListener('resize',()=>{ if(dev.classList.contains('on-tu')) tuSize(); });
  $('tuAmt').onclick=e=>{ const b=e.target.closest('[data-a]'); if(!b) return; TU.amt=+b.dataset.a; $('tuAmt').querySelectorAll('[data-a]').forEach(x=>x.classList.toggle('on',x===b)); };
  $('tuAs').onclick=()=>toast('ETH, золото и индексы — скоро');
  $('tuCv').addEventListener('click',e=>{ const g=TU.g, R=TU.R; if(!g||!R) return; const cv=$('tuCv'), r=cv.getBoundingClientRect(), k=cv.offsetWidth?r.width/cv.offsetWidth:1, x=(e.clientX-r.left)/k, y=(e.clientY-r.top)/k;
    if(x<g.colX-8||y<g.CT||y>g.CB){ toast('Выберите сектор справа'); return; }
    if(!g.run){ toast('Идёт подсчёт — новый раунд через секунду'); return; }
    const ed=tuEd(g,R.p0); let s=3; for(let i=0;i<4;i++) if(y<ed[i+1]){ s=i; break; }
    const ex=TU.bets.find(b=>b.r===R.id&&b.s===s);
    if(g.lock){ toast(ex?'Ставка в игре — ждём финиш':'Ставки закрыты — следующий раунд через пару секунд'); return; }
    if(ex){ TU.bets=TU.bets.filter(b=>b!==ex); PMF=Math.round((PMF+ex.a)*100)/100; tuSums(); toast('Ставка $'+ex.a+' отменена'); return; }
    if(PMF<TU.amt){ toast('Недостаточно средств'); return; }
    const now=tuNow(), m=tuMult(s,R.t1-now,tuPriceAt(now),R.p0);
    TU.bets.push({r:R.id,s,a:TU.amt,m,st:0}); PMF=Math.round((PMF-TU.amt)*100)/100; tuSums();
    if(!TU.seen){ TU.seen=true; $('tuHint').classList.add('off'); } try{ navigator.vibrate&&navigator.vibrate(8); }catch(_){} });
  $('tuHelp').onclick=()=>openSheet('<div class="lts"><div class="lts-h"><b>Как играть</b>'+XB+'</div><div class="fp-hw">'+
    [['Выберите сумму','Внизу: $1, $5, $10 или $25'],['Выберите сектор справа','«Сильно вверх», «Вверх», «Вниз» или «Сильно вниз» — относительно цены на старте раунда. Можно сразу несколько'],['Линия дошла до финиша','Выигрывает сектор, где оказалась цена: получаете ставку × коэффициент. Остальные ставки сгорают']]
      .map((s,i)=>'<div><i>'+(i+1)+'</i><span><b>'+s[0]+'</b><small>'+s[1]+'</small></span></div>').join('')+'</div>'+
    '<div class="lts-rc"><div class="lts-rw" style="border-top:0"><span>Раунд</span><b>15 секунд</b></div><div class="lts-rw"><span>Шаг сектора</span><b>$25 от цены старта</b></div><div class="lts-rw"><span>Ставки закрываются</span><b>за 3 с до финиша</b></div><div class="lts-rw"><span>Отменить ставку</span><b>нажать на неё ещё раз</b></div></div>'+
    '<p class="fps-note">Коэффициент фиксируется в момент ставки. Это высокорисковый инструмент: можно потерять всю ставку. Цена в прототипе — симуляция.</p><div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>','ltsh');

  // catalog tile: line → finish column with 4 sectors
  function ctTu(){ const S=[['×4,4','#78ECA8'],['×3,1','#78ECA8'],['$5',''],['×4,4','#FF8A8A']];
    return '<div class="ct-tu" role="button" tabindex="0" data-tu="1"><div class="hd">'+lgHTML('btc')+'<span><b>Турбо</b><small>BTC · раунд 15 с</small></span></div>'+
      '<svg class="art" width="100%" height="84" viewBox="0 0 150 84" preserveAspectRatio="xMidYMid meet">'+
      '<path d="M0 42H102M0 21H102M0 63H102" stroke="rgba(255,255,255,.1)" stroke-dasharray="2 4"/>'+
      S.map(([t,col],i)=>{ const y=1+i*21, on=!col; return '<rect x="108" y="'+y+'" width="42" height="19" rx="7" fill="'+(on?'#FF6368':i<2?'rgba(61,220,132,.14)':'rgba(255,99,104,.14)')+'"/>'+
        '<text x="129" y="'+(y+13)+'" text-anchor="middle" font-size="9.5" font-weight="800" fill="'+(on?'#07110C':col)+'">'+t+'</text>'; }).join('')+
      '<path d="M103 0V84" stroke="rgba(255,255,255,.25)" stroke-dasharray="2 3"/>'+
      '<path class="ln" d="M0 44L7 43 12 38 17 46 23 36 29 40 35 47 41 44 47 52 53 49 60 53" fill="none" stroke="#E9FFF1" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'+
      '<path d="M60 53H103" stroke="rgba(255,255,255,.35)" stroke-dasharray="2 3"/>'+
      '<circle class="hl" cx="60" cy="53" r="3" fill="#3DDC84"/><circle cx="60" cy="53" r="3.4" fill="#fff"/></svg>'+
      '<div class="ft"><em>до <b>×50</b></em><span class="go">Попробовать</span></div></div>'; }

  // ── win / lose show ──
  function tuSecC(sec){ const g=TU.g, R=TU.R, ed=tuEd(g,R.p0); return {x:g.colX+g.colW/2, y:(ed[sec]+ed[sec+1])/2, w:g.colW, h:ed[sec+1]-ed[sec]}; }
  function tuCountBal(from,to,delay){ const el=$('tuBal'); el.textContent=fmt2(from); setTimeout(()=>{ const t0=performance.now(), d=900; const f=t=>{ const k=Math.min(1,(t-t0)/d), q=1-Math.pow(1-k,3); el.textContent=fmt2(from+(to-from)*q); if(k<1) requestAnimationFrame(f); else { el.classList.remove('fl'); void el.offsetWidth; el.classList.add('fl'); } }; requestAnimationFrame(f); },delay); }
  function tuFx(R,won,put){ const now=tuNow(), W=TU.bets.filter(b=>b.r===R.id), stg=$('tuStage'), sr=stg.getBoundingClientRect(), scr=$('scrTu'), rr=scr.getBoundingClientRect(), k=scr.offsetWidth?rr.width/scr.offsetWidth:1;
    const res=$('tuRes'), vig=$('tuVig');
    const dim=$('tuDim'); dim.className='tu-dim'+(won?'':' l'); void dim.offsetWidth; dim.classList.add('on');
    if(won){ const w=tuSecC(R.win), b=W.find(x=>x.s===R.win);
      TU.rg.push({x:w.x,y:w.y,w:w.w,h:w.h,t0:now,c:'61,220,132'},{x:w.x,y:w.y,w:w.w,h:w.h,t0:now+.18,c:'255,255,255'});
      const C=['#3DDC84','#B6FFD2','#FFFFFF','#FFD34D','#7CF29C'];
      for(let i=0;i<46;i++){ const a=Math.random()*Math.PI*2, v=90+Math.random()*260; TU.pt.push({x:w.x+(Math.random()-.5)*w.w*.6,y:w.y+(Math.random()-.5)*w.h*.4,vx:Math.cos(a)*v-60,vy:Math.sin(a)*v-120,g:420,L:.9+Math.random()*.6,l:1,s:2+Math.random()*3.5,c:C[i%C.length],sq:i%3===0,r:Math.random()*6,vr:(Math.random()-.5)*14}); }
      // coins fly from the sector into «Баланс»
      const fx=$('tuFxL'), bal=$('tuBal').getBoundingClientRect(), x0=(sr.left-rr.left)/k+w.x, y0=(sr.top-rr.top)/k+w.y, x1=(bal.left-rr.left)/k+34, y1=(bal.top-rr.top)/k+12;
      for(let i=0;i<9;i++){ const e=document.createElement('i'); e.className='tu-coin'; e.textContent='$'; fx.appendChild(e); const jx=(Math.random()-.5)*60, jy=(Math.random()-.5)*40, mx=(x0+x1)/2-80+Math.random()*40, my=Math.min(y0,y1)-60-Math.random()*60;
        e.animate([{transform:'translate('+(x0+jx*.3)+'px,'+(y0+jy*.3)+'px) scale(.3)',opacity:0},{transform:'translate('+(x0+jx)+'px,'+(y0+jy)+'px) scale(1.1)',opacity:1,offset:.18},{transform:'translate('+mx+'px,'+my+'px) scale(1) rotate(180deg)',opacity:1,offset:.55},{transform:'translate('+x1+'px,'+y1+'px) scale(.55) rotate(360deg)',opacity:.9}],{duration:900,delay:i*55,easing:'cubic-bezier(.45,.05,.4,1)',fill:'both'}).onfinish=()=>e.remove(); }
      tuCountBal(PMF-won,PMF,780);
      $('tuResV').textContent='+$'+dec(won); $('tuResS').textContent=W.length>1&&won<put?'Выигрыш · ставки $'+dec(put,0):'Выигрыш · '+tuMx(b?b.m:1);
      res.className='tu-res w'; void res.offsetWidth; res.classList.add('on'); vig.className='tu-vig'; void vig.offsetWidth; vig.classList.add('on');
      try{ navigator.vibrate&&navigator.vibrate([12,40,18,40,30]); }catch(_){} }
    else { W.forEach(b=>{ const q=tuSecC(b.s); for(let i=0;i<22;i++) TU.pt.push({x:q.x+(Math.random()-.5)*q.w*.8,y:q.y+(Math.random()-.5)*q.h*.7,vx:(Math.random()-.5)*50,vy:-20-Math.random()*60,g:380,L:.8+Math.random()*.5,l:1,s:2+Math.random()*2.5,c:i%2?'rgba(255,120,125,.9)':'rgba(190,190,200,.8)',sq:true,r:Math.random()*6,vr:(Math.random()-.5)*10}); });
      const near=W.some(b=>Math.abs(b.s-R.win)===1);
      $('tuResV').textContent=MIN+'$'+dec(put,0); $('tuResS').textContent=near?'Почти! Цена — в соседнем секторе':'Цена ушла в «'+TUS[R.win].n+'»';
      res.className='tu-res l'; void res.offsetWidth; res.classList.add('on'); vig.className='tu-vig ls'; void vig.offsetWidth; vig.classList.add('on');
      stg.animate([{transform:'translateX(0)'},{transform:'translateX(-7px)'},{transform:'translateX(6px)'},{transform:'translateX(-4px)'},{transform:'translateX(2px)'},{transform:'none'}],{duration:420,easing:'ease-out'});
      try{ navigator.vibrate&&navigator.vibrate(60); }catch(_){} } }

  // ═════════ sliding pill for the glass segmented switches (Турбо, долгосрочные, портфели) — like the tab bar ═════════
  function spSync(el,inst){ let p=el.querySelector(':scope>.sp-p'); const fresh=!p;
    if(!p){ p=document.createElement('i'); p.className='sp-p'; el.prepend(p); }
    const a=el.querySelector(':scope>button.on,:scope>button.lt-on'); if(!a||!a.offsetWidth){ p.style.opacity=0; return; }
    const g={x:a.offsetLeft,y:a.offsetTop,w:a.offsetWidth,h:a.offsetHeight};
    const put=q=>{ p.style.transform='translate('+q.x+'px,'+q.y+'px)'; p.style.width=q.w+'px'; p.style.height=q.h+'px'; };
    if(inst||(fresh&&!el._sp)){ p.style.transition='none'; put(g); void p.offsetWidth; p.style.transition=''; }
    else { if(fresh){ p.style.transition='none'; put(el._sp); void p.offsetWidth; p.style.transition=''; } put(g); }
    p.style.opacity=1; el._sp=g; }
  function spInit(el){ if(!el||el._spOn) return; el._spOn=true; el.classList.add('spz');
    new MutationObserver(ms=>{ if(ms.every(m=>m.target.classList&&m.target.classList.contains('sp-p')||[...m.addedNodes].every(n=>n.classList&&n.classList.contains('sp-p'))&&!m.removedNodes.length&&m.type==='childList')) return; spSync(el); })
      .observe(el,{subtree:true,attributes:true,attributeFilter:['class'],childList:true});
    if(window.ResizeObserver) new ResizeObserver(()=>spSync(el,true)).observe(el);
    spSync(el,true); }
  document.querySelectorAll('.tu-seg,.lt3-seg,.fph-seg').forEach(spInit);

  // ═════════ INTRO STORIES · «Инвест» and «Крипта» — shown the first time the section opens ═════════
  function inCount(el,a,b,fmt,delay,dur){ if(!el) return; dur=dur||1300; el.textContent=fmt(a); let t0=0;
    const f=t=>{ if(!t0) t0=t; if(stoHeld) t0+=16; const k=Math.min(1,(t-t0)/dur), q=1-Math.pow(1-k,3); el.textContent=fmt(a+(b-a)*q); if(k<1&&el.isConnected&&$('pmSto').classList.contains('on')) requestAnimationFrame(f); };
    setTimeout(()=>requestAnimationFrame(f),delay||0); }
  const inUsd=v=>'$'+dec(v,0), inUsd2=v=>'$'+dec(v);

  // ── Инвест ──
  const IVR=[['aapl','nvda','tsla','msft','amzn','goog','meta'],['nflx','amd','ko','jpm','visa','ma','pltr'],['wmt','pg','jnj','bac','csco','hood','intc']];
  const iv1='<div class="iv1"><div class="mq">'+IVR.map((r,k)=>'<div class="r" style="--k:'+k+'"><div class="tr">'+r.concat(r).map(x=>'<span class="t"><span class="lg lg-'+x+'"></span></span>').join('')+'</div></div>').join('')+'</div>'+
    '<div class="fsg ivc"><span class="lg lg-aapl"></span><span class="tx"><b>Apple</b><small>AAPL · NASDAQ</small></span><span class="pr"><b>$227,52</b><i>+1,24 %</i></span></div></div>';
  const iv2='<div class="iv2"><div class="pie"><svg width="220" height="220" viewBox="0 0 220 220" fill="none"><defs><linearGradient id="ivg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B6FFD0"/><stop offset="1" stop-color="#10C810"/></linearGradient></defs>'+
      '<circle class="rg" cx="110" cy="110" r="107" stroke="rgba(255,255,255,.22)" stroke-width="1.4" stroke-dasharray="2 7"/>'+
      '<path d="M110 110L208.48 92.64A100 100 0 1 1 110 10Z" fill="rgba(255,255,255,.09)" stroke="rgba(255,255,255,.2)" stroke-width="1.3"/>'+
      '<path d="M110 110L110 10A100 100 0 0 1 208.48 92.64Z" stroke="rgba(255,255,255,.28)" stroke-width="1.3" stroke-dasharray="4 5"/>'+
      '<path class="sl" d="M110 110L110 10A100 100 0 0 1 208.48 92.64Z" fill="url(#ivg2)"/></svg><span class="lg lg-aapl"></span></div>'+
    '<div class="fsg tg1"><small>1 шт. AAPL/100</small><b>$2,31</b></div>'+
    '<div class="fsg you"><small>Вы вкладываете</small><b data-i2>$0</b><em>= 21 шт. AAPL/100</em></div></div>';
  const IV3H=[40,52,64,78,92,108,128];
  const iv3='<div class="iv3"><div class="fsg top"><span class="lk">'+nvI('lock',13,2.4)+'Ставка зафиксирована</span><small>Через 12 месяцев</small><b data-i3>$1 000</b><i class="pc">+6,8 % годовых</i></div>'+
    '<div class="ivb">'+IV3H.map((h,k)=>'<i style="--h:'+h+'px;--k:'+k+'"></i>').join('')+'</div><div class="ax"><span>Сегодня</span><span>12 мес</span></div></div>';
  const ZAP='<path d="M13.2 2.8 5.4 13.3h5.9l-1 7.9 7.9-10.6h-5.9l.9-7.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>';
  const IV4=[['o','Single Stock ETF','Акции от $1',NV['Bar-chart_up']],['p','Прогнозы','Да или нет',NV['Percent']],['t','Облигации','Доход до 10 %',ZAP],['f','Портфели','Как у известных',NV['user_2']]];
  const iv4='<div class="iv4">'+IV4.map((x,k)=>'<div class="fsg c '+x[0]+'" style="--k:'+k+'"><span class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none">'+x[3]+'</svg></span><b>'+x[1]+'</b><small>'+x[2]+'</small></div>').join('')+'</div>';
  const IVL='M6 84C30 80 44 66 70 69S108 49 134 52 170 58 196 40 238 20 264 14';
  const iv5='<div class="iv5"><div class="fsg pf"><div class="hd"><small>Ваш портфель</small><b data-i5>$10 000,00</b><i class="ivu">+$1 200,52 · +12 %</i></div>'+
    '<div class="chw"><svg width="270" height="96" viewBox="0 0 270 96" fill="none"><defs><linearGradient id="ivg5" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7CF29C" stop-opacity=".3"/><stop offset="1" stop-color="#7CF29C" stop-opacity="0"/></linearGradient><filter id="ivf5" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="4"/></filter></defs>'+
      '<path d="M0 32H270M0 64H270" stroke="rgba(255,255,255,.07)" stroke-dasharray="2 6"/><path class="ar" d="'+IVL+'V96H6Z" fill="url(#ivg5)"/><path class="gl" d="'+IVL+'" stroke="#7CF29C" stroke-width="6" filter="url(#ivf5)" opacity=".6"/><path class="ln" d="'+IVL+'" stroke="#C8FFD8" stroke-width="2.6" stroke-linecap="round"/></svg><i class="tip"></i></div>'+
    '<div class="sg"><i class="pl"></i><span>1Д</span><span>1Н</span><span>1М</span><span>1Г</span></div></div>'+
    '<div class="bt"><span class="fsg">'+nvI('Plus',18,2.2)+'Пополнить</span><span class="fsg">'+nvI('Share',18,2.2)+'Вывести</span></div></div>';
  SETS.inv={cta:'Начать инвестировать',done:()=>{},items:[
    {t:'Акции мировых<br>компаний',p:'Apple, NVIDIA, Tesla и тысячи других бумаг с бирж США, Европы и Казахстана — в одном приложении.',pal:['#2F6BFF','#10B85A','#7C5CFF'],i:iv1},
    {t:'Акции от $1<br>с Single Stock ETF',p:'Бумага, равная 1/100 акции. Apple — от $2,31 вместо $227,52: покупайте поштучно, сколько нужно.',pal:['#10B85A','#0FD1A0','#2F6BFF'],i:iv2,
     enter:sl=>inCount(sl.querySelector('[data-i2]'),0,50,inUsd,1100,900)},
    {t:'Доход известен<br>заранее',p:'Долгосрочные инвестиции: ставка фиксируется при покупке — до 6,8 % годовых.',pal:['#0FB9A8','#10C810','#2F6BFF'],i:iv3,
     enter:sl=>inCount(sl.querySelector('[data-i3]'),1000,1068,inUsd,900,1500)},
    {t:'Больше,<br>чем акции',p:'Single Stock ETF, облигации, прогнозы и портфели известных инвесторов — рядом, в разделе «Инвест».',pal:['#7C5CFF','#2F6BFF','#F29A00'],i:iv4},
    {t:'Всё под<br>контролем',p:'Портфель и доходность — в реальном времени. Пополнить или вывести — в пару касаний.',pal:['#10B85A','#2F6BFF','#0FD1A0'],i:iv5,
     enter:sl=>{ stoLineInit(sl); inCount(sl.querySelector('[data-i5]'),10000,11200.52,inUsd2,350,1700); },tick:(sl,t)=>stoLineTick(sl,t,350,1700)}]};

  const INV_SS=SETS.inv.items.slice(), INV_TOK=INV_SS.filter((_,i)=>i!==1).map(x=>x.i===iv4?Object.assign({},x,{i:iv4.replace('Single Stock ETF','Дробные акции'),p:'Дробные акции, облигации, прогнозы и портфели известных инвесторов — рядом, в разделе «Инвест».'}):x);
  window.__invSet=m=>{ SETS.inv.items=m==='tok'?INV_TOK:INV_SS; stoKey=null; };
  // ── Крипта ──
  const cy1='<div class="cy1"><i class="hl"></i><i class="fl"></i><div class="cw"><div class="c3">'+Array.from({length:14},(_,k)=>'<i class="e" style="--z:'+(k-6.5)+'px"></i>').join('')+
    '<i class="fc f lg lg-btc"></i><i class="fc b lg lg-btc"></i></div></div>'+['eth','sol','bnb','ton'].map(k=>'<i class="cyc lg lg-'+k+'"></i>').join('')+'</div>';
  const SWP='<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 4v15m0 0-3.5-3.5M8 19l3.5-3.5M16 20V5m0 0-3.5 3.5M16 5l3.5 3.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const cy2='<div class="cy2"><div class="fsg pay"><span class="tx"><small>Вы платите</small><b><span data-c2a>$</span><i class="cr"></i></b></span><span class="cur">USD</span></div>'+
    '<div class="sw">'+SWP+'</div>'+
    '<div class="fsg get"><span class="tx"><small>Вы получите</small><b data-c2b>0 BTC</b></span><span class="lg lg-btc"></span></div><i class="pc">1 BTC ≈ $63 770 — целиком не нужен</i></div>';
  const TKS=Array.from({length:24},(_,k)=>{ if(k%6===0) return ''; const a=k*15*Math.PI/180, r1=100, r2=104; return '<path d="M'+(105+r1*Math.sin(a)).toFixed(1)+' '+(105-r1*Math.cos(a)).toFixed(1)+'L'+(105+r2*Math.sin(a)).toFixed(1)+' '+(105-r2*Math.cos(a)).toFixed(1)+'"/>'; }).join('');
  const CYARC=(r,h0,span,cls,col)=>'<circle class="'+cls+'" cx="105" cy="105" r="'+r+'" pathLength="100" stroke="'+col+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+(span/24*100).toFixed(2)+' 100" style="--L:'+(span/24*100).toFixed(2)+'" transform="rotate('+(h0*15-90)+' 105 105)"/>';
  const cy3='<div class="cy3"><div class="dl"><svg width="210" height="210" viewBox="0 0 210 210" fill="none"><defs><linearGradient id="cyg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9CFFBE"/><stop offset="1" stop-color="#10C810"/></linearGradient><linearGradient id="cyg3b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#FF7A00"/></linearGradient></defs>'+
      '<g class="tk" stroke="rgba(255,255,255,.3)" stroke-width="1.6" stroke-linecap="round">'+TKS+'</g>'+
      '<circle cx="105" cy="105" r="86" stroke="rgba(255,255,255,.08)" stroke-width="12"/><circle cx="105" cy="105" r="66" stroke="rgba(255,255,255,.06)" stroke-width="12"/>'+
      CYARC(86,9,18.75,'a1','url(#cyg3)')+CYARC(66,10,14,'a2','url(#cyg3b)')+
      '<g class="hl" font-size="10" font-weight="700" fill="rgba(255,255,255,.55)" text-anchor="middle"><text x="105" y="9">00</text><text x="204" y="108.5">06</text><text x="105" y="209">12</text><text x="6" y="108.5">18</text></g></svg>'+
      '<div class="c"><b>9:00</b><small>открытие в будни</small></div></div>'+
    '<div class="lg3"><div class="g"><i></i><span>Пн–Пт</span><b>09:00 — 03:45</b></div><div class="o"><i></i><span>Сб–Вс</span><b>10:00 — 00:00</b></div></div></div>';
  const CYL='M6 176C30 172 46 150 72 156S108 124 134 130 168 104 194 108 232 64 258 50 286 34 296 30';
  const BELL='<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4.2 1.8 5.8 1.8 5.8H4.7s1.8-1.6 1.8-5.8Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M10 19.2a2.1 2.1 0 0 0 4 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';
  const cy4='<div class="cy4"><div class="fsg ntf"><span class="ai">'+BELL+'</span><span class="tx"><b>Bitcoin — $70 000</b><small>Цена дошла до вашей отметки</small></span><i class="tm">сейчас</i></div>'+
    '<div class="chw"><svg width="300" height="200" viewBox="0 0 300 200" fill="none"><defs><linearGradient id="cyg4" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FFB547" stop-opacity=".3"/><stop offset="1" stop-color="#FFB547" stop-opacity="0"/></linearGradient><filter id="cyf4" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="4"/></filter></defs>'+
      '<path class="tgl" d="M0 78H300" stroke="#FFB547" stroke-width="1.6" stroke-dasharray="5 6"/>'+
      '<path class="ar" d="'+CYL+'V200H6Z" fill="url(#cyg4)"/><path class="gl" d="'+CYL+'" stroke="#FFB547" stroke-width="6" filter="url(#cyf4)" opacity=".6"/><path class="ln" d="'+CYL+'" stroke="#FFE2B0" stroke-width="2.6" stroke-linecap="round"/></svg>'+
      '<span class="tlb">'+BELL+'$70 000</span><i class="hit"></i><i class="tip"></i></div></div>';
  const CY5=[[-128,-40],[-100,-96],[-44,-116],[40,-118],[100,-92],[132,-36],[-150,24],[150,26]];
  // v175: cy5 — our 3D gift: shakes, lid pops, light burst, coins fly out onto a 3D orbit, a friend joins, +$10 counts
  const CY5K=['btc','eth','usdt','ton','sol','bnb'];
  const cy5='<div class="cy5"><i class="rays"></i><i class="glw"></i><div class="cya"><b data-c5>+$0</b><small>за каждого друга</small></div>'+
    '<svg class="obt bk" width="320" height="120" viewBox="0 0 320 120" fill="none"><path d="M14 60A146 42 0 0 1 306 60" stroke="rgba(255,255,255,.22)" stroke-width="1.5" stroke-dasharray="3 6"/></svg>'+
    '<div class="gw"><span class="gbx cyb" style="--s:150px"></span></div>'+
    '<svg class="obt fr" width="320" height="120" viewBox="0 0 320 120" fill="none"><path d="M14 60A146 42 0 0 0 306 60" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 6"/></svg>'+
    '<div class="cns">'+CY5K.map(k=>'<i class="lg lg-'+k+'"></i>').join('')+'</div>'+
    '<i class="spk">'+'<i></i>'.repeat(10)+'</i>'+
    '<div class="frd"><span class="av a">Я</span><span class="av b">А</span><span class="tx"><b>Айгерим</b> присоединилась</span><i class="ok"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div></div>';
  function cy5Enter(sl){ const g=sl.querySelector('.cyb'); if(g&&!g.querySelector('svg')) g.innerHTML=GX.svg; g.className='gbx cyb';
    (sl._t||[]).forEach(clearTimeout); const T=(f,ms)=>(sl._t=sl._t||[]).push(setTimeout(f,ms));
    T(()=>g.classList.add('shk'),650); T(()=>{ g.classList.remove('shk'); g.classList.add('op'); },1350);
    inCount(sl.querySelector('[data-c5]'),0,10,v=>'+$'+Math.round(v),1650,800); }
  function cy5Tick(sl,t){ const cs=sl.querySelectorAll('.cns .lg'), n=cs.length, cx=160, cy=246, T0=1450;
    cs.forEach((c,k)=>{ const a=t/1000*.6+k*Math.PI*2/n, s=Math.sin(a), f=(s+1)/2, ox=cx+146*Math.cos(a), oy=cy+42*s;
      let q=Math.min(1,Math.max(0,(t-T0-k*60)/750)); const e=q<1?1-Math.pow(1-q,3)*(1-1.7*q*(1-q)):1;
      const sx=cx, sy=206, x=sx+(ox-sx)*e, y=sy+(oy-sy)*e-Math.sin(q*Math.PI)*70, sc=(.25+.75*e)*(.72+.34*f);
      c.style.transform='translate('+(x-18).toFixed(1)+'px,'+(y-18).toFixed(1)+'px) scale('+sc.toFixed(3)+')'; c.style.opacity=q>0?Math.min(1,q*4).toFixed(2):'0'; c.style.zIndex=q<1?6:(s>0?6:2); }); }
  SETS.cr={cta:'Купить биткоин',done:()=>{ if(!dev.classList.contains('cr')) goCr(); setTimeout(()=>crOpen('BTC','buy'),200); },items:[
    {t:'Крипта —<br>рядом с акциями',p:'Bitcoin, Ethereum и другие монеты — в том же приложении, что и ваши инвестиции.',pal:['#F7931A','#7C5CFF','#FF6A00'],i:cy1,
     tick:(sl,t)=>{ const oc=sl.querySelectorAll('.cyc'), n=oc.length; oc.forEach((c,k)=>{ const a=t/1000*.7+k*Math.PI*2/n, s=Math.sin(a), f=(s+1)/2;
       c.style.transform='translate('+(160+138*Math.cos(a)).toFixed(1)+'px,'+(166+38*s).toFixed(1)+'px) translate(-50%,-50%) scale('+(.62+.38*f).toFixed(3)+')'; c.style.zIndex=s>0?4:1; c.style.opacity=(.5+.5*Math.sqrt(f)).toFixed(2); }); }},
    {t:'Не обязательно<br>целый биткоин',p:'Купите часть монеты на любую сумму. $10 — это 0,000157 BTC.',pal:['#F7931A','#2F6BFF','#E8A400'],i:cy2,
     enter:sl=>{ const a=sl.querySelector('[data-c2a]'); a.textContent='$'; setTimeout(()=>a.textContent='$1',450); setTimeout(()=>a.textContent='$10',750);
       inCount(sl.querySelector('[data-c2b]'),0,.000157,v=>v.toFixed(6).replace('.',',')+' BTC',1150,1100); }},
    {t:'Торгуйте<br>почти круглосуточно',p:'В будни — с 9:00 до 3:45 ночи, в выходные — с 10:00 до полуночи. Можно купить и поздно вечером.',pal:['#FF8A00','#7C5CFF','#2F6BFF'],i:cy3},
    {t:'Не пропустите<br>нужную цену',p:'Поставьте уведомление — сообщим, как только биткоин дойдёт до вашей отметки.',pal:['#E8A400','#F7931A','#7C5CFF'],i:cy4,
     enter:sl=>{ const w=sl.querySelector('.cy4'), ln=sl.querySelector('.ln'), L=ln.getTotalLength(); w.classList.remove('hit'); stoLineInit(sl);
       let lo=0, hi=L; for(let j=0;j<24;j++){ const m=(lo+hi)/2; if(ln.getPointAtLength(m).y>78) lo=m; else hi=m; }
       w._qx=hi/L; const p=ln.getPointAtLength(hi), h=sl.querySelector('.hit'); h.style.left=p.x+'px'; h.style.top=p.y+'px'; },
     tick:(sl,t)=>{ const q=stoLineTick(sl,t,300,2000), w=sl.querySelector('.cy4'); if(w&&q>=w._qx-.002&&!w.classList.contains('hit')) w.classList.add('hit'); }},
    {t:'Зовите друзей —<br>получайте бонус',p:'Пригласите друга в Freedom и получите до $10. Ссылка — в пару касаний.',pal:['#7C5CFF','#F7931A','#FF4FA0'],i:cy5,enter:cy5Enter,tick:cy5Tick}]};

  // first open of the section → its stories, once per session
  const inSeen={};
  function inAuto(k){ if(inSeen[k]&&k!=='inv') return; inSeen[k]=1;
    setTimeout(()=>{ if(dev.classList.contains('sto-on')||dev.classList.contains('mnu-on')) return;
      const ok=k==='cr'?dev.classList.contains('cr')&&!dev.classList.contains('on-coin')&&!dev.classList.contains('on-crb'):!dev.classList.contains('cr')&&!dev.classList.contains('se')&&!/(^|\s)on-/.test(dev.className);
      if(ok) stoOpen(k); },k==='cr'?550:900); }
  window.__inAuto=inAuto;
  new MutationObserver(()=>{ if(!inSeen.cr&&dev.classList.contains('cr')) inAuto('cr'); }).observe(dev,{attributes:true,attributeFilter:['class']});

  // ═════════ NEWBIE MODE · «Новичок»: витрина как у клиента (без опционов/турбо/прогнозов) → брокерский счёт → подарок ═════════
  const NBM={on:false,st:'new',otc:null,gift:null,pick:null,tm:0};
  const NBRATE=482;
  const NBX={
    aapl:{n:'Apple Inc.',s:'Apple',t:'AAPL',y:25.33,d:'Делает iPhone, Mac и сервисы, которыми пользуются 2 млрд человек. Одна из самых популярных акций у начинающих.'},
    tsla:{n:'Tesla Inc.',s:'Tesla',t:'TSLA',p:375.30,y:-11.03,d:'Электромобили, аккумуляторы и роботакси.'},
    nvda:{n:'NVIDIA Corp.',s:'NVIDIA',t:'NVDA',p:227.38,y:29.36,d:'Чипы для искусственного интеллекта и видеокарты — главный бенефициар бума ИИ.'},
    amzn:{n:'Amazon',s:'Amazon',t:'AMZN',p:258.45,y:11.22,d:'Крупнейший онлайн-магазин и облачный сервис AWS.'},
    goog:{n:'Alphabet',s:'Alphabet',t:'GOOGL',p:350.87,y:38.46,d:'Google, YouTube и Android. Зарабатывает на рекламе и облаке.'},
    meta:{n:'Meta Platforms',s:'Meta',t:'META',p:741.25,y:-5.74,d:'Facebook, Instagram и WhatsApp — 3 млрд пользователей.'},
    msft:{n:'Microsoft',s:'Microsoft',t:'MSFT',p:501.61,y:-1.75,d:'Windows, Office и облако Azure — одна из крупнейших компаний мира.'},
    ko:{n:'Coca-Cola Co.',s:'Coca-Cola',t:'KO',p:87.12,y:31.03,d:'Напитки в 200 странах. Повышает дивиденды больше 60 лет подряд.'},
    nflx:{n:'Netflix',s:'Netflix',t:'NFLX',p:73.36,y:-39.80,d:'Крупнейший стриминговый сервис фильмов и сериалов.'},
    ma:{n:'Mastercard',s:'Mastercard',t:'MA',p:567.65,y:-3.56,d:'Платёжная система — зарабатывает на каждой оплате картой.'},
    pg:{n:'Procter & Gamble',s:'P&G',t:'PG',p:146.08,y:-7.32,d:'Товары для дома: Gillette, Ariel, Pampers. Платит дивиденды больше 130 лет.'},
    coin:{n:'Coinbase',s:'Coinbase',t:'COIN',p:201.05,y:-41.34,d:'Крупнейшая криптобиржа США.'},
    hood:{n:'Robinhood',s:'Robinhood',t:'HOOD',p:123.30,y:1.31,d:'Приложение для инвестиций в акции и крипту.'},
    jnj:{n:'Johnson & Johnson',s:'J&J',t:'JNJ',p:269.47,y:54.26,d:'Лекарства и медицинские технологии.'},
    wmt:{n:'Walmart',s:'Walmart',t:'WMT',p:107.44,y:3.50,d:'Крупнейшая сеть супермаркетов в мире.'},
    jpm:{n:'JPMorgan',s:'JPMorgan',t:'JPM',p:352.04,y:12.26,d:'Крупнейший банк США.'},
    intc:{n:'Intel',s:'Intel',t:'INTC',p:121.78,y:300.86,d:'Процессоры для компьютеров и серверов.'},
    amd:{n:'AMD',s:'AMD',t:'AMD',p:615.52,y:291.10,d:'Процессоры и видеокарты, чипы для ИИ.'},
    visa:{n:'Visa',s:'Visa',t:'V',p:369.95,y:8.67,d:'Платёжная система — зарабатывает на каждой оплате картой.'},
    csco:{n:'Cisco Systems',s:'Cisco',t:'CSCO',p:111.46,y:61.72,d:'Сетевое оборудование для интернета и компаний.'},
    spx:{n:'S&P 500 · SPY',s:'S&P 500',t:'SPY',p:773.50,y:16.78,b:'Купить',d:'500 крупнейших компаний США — в одной покупке.'},
    qqq:{n:'Nasdaq 100 · QQQ',s:'QQQ',t:'QQQ',p:602.40,y:21.40,b:'Купить',d:'100 крупнейших технологических компаний Nasdaq — в одной покупке.'},
    ishr:{n:'Облигации США · AGG',s:'AGG',t:'AGG',p:96.21,y:-4.08,b:'Купить',d:'Фонд облигаций США — спокойнее акций.'},
    vang:{n:'Облигации США · BND',s:'BND',t:'BND',p:71.40,y:-4.05,b:'Купить',d:'Фонд облигаций США от Vanguard.'},
    uk:{n:'Гилты Британии 1 год',s:'Гилты',t:'GILT',px:'99,71 %',c:'4,49 % годовых',nt:1,b:'Купить',d:'Государственные облигации Великобритании.'}};
  const nbP=k=>k==='aapl'?midPx():NBX[k].p;
  const nbQ=(q,d)=>q.toFixed(d||4).replace('.',',');
  const nbPct=y=>(y<0?MIN:'+')+dec(Math.abs(y))+' %';
  const nbL=k=>'<span class="lg lg-'+k+'">'+(k==='qqq'?'QQQ':'')+'</span>';
  const NBCK='<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const NBINF='<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.6" stroke="#B07800" stroke-width="1.8"/><path d="M12 11v5.2" stroke="#B07800" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7.9" r="1.2" fill="#B07800"/></svg>';
  const GIFTI='<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4.5 11h15v8.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V11ZM3 7h18v4H3V7ZM12 7v14" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 7S10.6 3 8.2 3.6C6.4 4 7 7 12 7Zm0 0s1.4-4 3.8-3.4C17.6 4 17 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  const NBSH='<svg class="shd" width="62" height="70" viewBox="0 0 62 70" fill="none"><defs><linearGradient id="shF" x1="12" y1="6" x2="50" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset=".55" stop-color="#E4F0FF"/><stop offset="1" stop-color="#A9CCFF"/></linearGradient><linearGradient id="shB" x1="31" y1="6" x2="31" y2="68" gradientUnits="userSpaceOnUse"><stop stop-color="#5AA2FF"/><stop offset="1" stop-color="#0A3FB0"/></linearGradient><linearGradient id="shC" x1="20" y1="28" x2="42" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="#2F8BFF"/><stop offset="1" stop-color="#1046C8"/></linearGradient><clipPath id="shK"><path d="M31 4 8 12.5v17.2c0 15.6 9.8 28.7 23 34.3 13.2-5.6 23-18.7 23-34.3V12.5L31 4Z"/></clipPath></defs><path d="M31 7 8 15.5v17.2c0 15.6 9.8 28.7 23 34.3 13.2-5.6 23-18.7 23-34.3V15.5L31 7Z" fill="url(#shB)"/><path d="M31 4 8 12.5v17.2c0 15.6 9.8 28.7 23 34.3 13.2-5.6 23-18.7 23-34.3V12.5L31 4Z" fill="url(#shF)"/><g clip-path="url(#shK)"><path d="M31 4 8 12.5v17.2c0 6 1.4 11.6 4 16.5L54 18V12.5Z" fill="#fff" opacity=".55"/><rect class="shn" x="-30" y="-10" width="16" height="90" fill="#fff" opacity=".7" transform="rotate(20)"/></g><path d="M31 4 8 12.5v17.2c0 15.6 9.8 28.7 23 34.3 13.2-5.6 23-18.7 23-34.3V12.5L31 4Z" stroke="#fff" stroke-opacity=".9" stroke-width="1.2"/><path d="m21.5 34.5 6.8 6.8 12.7-13.6" stroke="url(#shC)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const SHLD='<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M12 3.2 5.2 5.8v5.5c0 4.3 2.9 7.9 6.8 9.3 3.9-1.4 6.8-5 6.8-9.3V5.8L12 3.2Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.8 12.1 2.2 2.2 4.3-4.6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const NBCHEV='<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // year sparkline: deterministic walk that ends where the yearly change says
  function nbSpark(k,W,H,col,cls){ let s=0; for(const ch of k) s=(s*31+ch.charCodeAt(0))%9973; const rnd=()=>{ s=(s*16807)%2147483647; return s/2147483647; };
    const n=28, y=Math.max(-.6,Math.min(.8,(NBX[k].y||0)/100)), v=[0]; for(let i=1;i<n;i++) v.push(v[i-1]+(rnd()-.5)*.09+y/n); const lo=Math.min(...v), hi=Math.max(...v);
    const X=i=>(i/(n-1)*(W-4)+2).toFixed(1), Y=q=>(3+(hi-q)/((hi-lo)||1)*(H-6)).toFixed(1);
    return '<svg class="'+(cls||'')+'" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'" fill="none"><path d="'+v.map((q,i)=>(i?'L':'M')+X(i)+' '+Y(q)).join('')+'" stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }
  function nbConf(cf,n){ if(!cf) return; const C=['#fff','#FFE14D','#B8FFC9','#5AA8FF','#7CF29C','#C9B8FF']; let h='';
    for(let i=0;i<(n||34);i++){ const ang=Math.random()*Math.PI*2, d=80+Math.random()*120; h+='<i style="--x:'+(Math.cos(ang)*d).toFixed(0)+'px;--y:'+(Math.sin(ang)*d-30).toFixed(0)+'px;--r:'+(Math.random()*720-360).toFixed(0)+'deg;--s:'+(6+Math.random()*6).toFixed(1)+'px;--c:'+C[i%C.length]+';--d:'+(.05+Math.random()*.15).toFixed(2)+'s"></i>'; }
    cf.classList.remove('go'); cf.innerHTML=h; requestAnimationFrame(()=>requestAnimationFrame(()=>cf.classList.add('go'))); try{ navigator.vibrate&&navigator.vibrate([12,40,18]); }catch(_){} }

  // ── 3D gift: soft glossy blue cube, lilac ribbon, bow with a pearl. Lid is its own group so it can open ──
  const GX=(()=>{ const f=p=>p[0].toFixed(1)+' '+p[1].toFixed(1), L=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t], M=(a,b)=>L(a,b,.5),
      ad=(a,o,k)=>[a[0]+o[0]*k,a[1]+o[1]*k], nz=(a,b,w)=>{ const dx=b[0]-a[0], dy=b[1]-a[1], l=Math.hypot(dx,dy); return [dx/l*w,dy/l*w]; }, pg=p=>'M'+p.map(f).join('L')+'Z',
      rp=(pts,r)=>{ const n=pts.length; return pts.map((v,i)=>{ const p=pts[(i+n-1)%n], q=pts[(i+1)%n], l1=Math.hypot(p[0]-v[0],p[1]-v[1]), l2=Math.hypot(q[0]-v[0],q[1]-v[1]);
        return (i?'L':'M')+f(L(v,p,Math.min(r[i],l1/2)/l1))+'Q'+f(v)+' '+f(L(v,q,Math.min(r[i],l2/2)/l2)); }).join('')+'Z'; };
    const A=[40,72],B=[110,50],C=[166,80],D=[96,104],A2=[40,150],D2=[96,182],C2=[166,158], s=.27, A1=L(A,A2,s),D1=L(D,D2,s),C1=L(C,C2,s),B1=[B[0],B[1]+(A1[1]-A[1])];
    const Lf=(u,v)=>L(L(A,D,u),L(A2,D2,u),v), Rf=(u,v)=>L(L(D,C,u),L(D2,C2,u),v);
    const o1=nz(A,D,8.5), o2=nz(D,C,8.5), band=(m,m2,o)=>pg([ad(m,o,-1),ad(m,o,1),ad(m2,o,1),ad(m2,o,-1)]);
    const rL=band(M(A,D),M(A2,D2),o1), rR=band(M(D,C),M(D2,C2),o2), rT1=band(M(A,D),M(B,C),o1), rT2=band(M(D,C),M(A,B),o2);
    const x=(A[0]+B[0]+C[0]+D[0])/4, y=(A[1]+B[1]+C[1]+D[1])/4-2;
    const lidH=rp([A,B,C,C1,D1,A1],[14,14,14,4,6,4]), bodyH=rp([A1,D1,C1,C2,D2,A2],[3,3,3,13,16,13]);
    const st=(pts,o)=>'<path d="'+pg(pts)+'" fill="#fff" opacity="'+o+'" filter="url(#gxB2)"/>';
    const P=(a)=>a.map((v,i)=>(i%2?(y+v):(x+v)).toFixed(1)).join(' ');
    const bow='<path d="M'+P([-2,2])+'L'+P([-24,22])+'L'+P([-15,27])+'L'+P([2,6])+'Z" fill="url(#gxRb2)"/><path d="M'+P([2,2])+'L'+P([20,24])+'L'+P([29,18])+'L'+P([5,1])+'Z" fill="url(#gxRb2)"/>'+
      '<path d="M'+P([0,0])+'C'+P([-5,-27,-41,-36,-37,-13])+'C'+P([-34,2,-12,4,0,0])+'Z" fill="url(#gxBw)"/><path d="M'+P([-7,-3])+'C'+P([-11,-17,-29,-24,-28,-12])+'C'+P([-27,-4,-15,-1,-7,-3])+'Z" fill="#8F7BDB" opacity=".5"/>'+
      '<path d="M'+P([0,0])+'C'+P([4,-29,40,-32,37,-10])+'C'+P([35,4,12,5,0,0])+'Z" fill="url(#gxBw)"/><path d="M'+P([7,-3])+'C'+P([10,-19,28,-22,28,-10])+'C'+P([27,-3,15,0,7,-3])+'Z" fill="#8F7BDB" opacity=".45"/>'+
      '<path d="M'+P([-31,-24])+'C'+P([-23,-27,-12,-19,-6,-8])+'" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".75" filter="url(#gxB1)"/><path d="M'+P([12,-20])+'C'+P([20,-26,31,-22,33,-14])+'" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6" filter="url(#gxB1)"/>'+
      '<circle cx="'+x.toFixed(1)+'" cy="'+(y+1).toFixed(1)+'" r="7.2" fill="url(#gxP)"/><circle cx="'+(x-2.4).toFixed(1)+'" cy="'+(y-1.6).toFixed(1)+'" r="2.1" fill="#fff" opacity=".95"/>';
    const defs='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>'+
      '<linearGradient id="gxT" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#CFEAFF"/><stop offset="1" stop-color="#7BB9FF"/></linearGradient>'+
      '<linearGradient id="gxL" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#5DA8FF"/><stop offset="1" stop-color="#1F58D8"/></linearGradient>'+
      '<linearGradient id="gxR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3175EC"/><stop offset=".65" stop-color="#1A44B2"/><stop offset="1" stop-color="#3A77E6"/></linearGradient>'+
      '<linearGradient id="gxRb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCD3FB"/></linearGradient>'+
      '<linearGradient id="gxRb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9E3FF"/><stop offset="1" stop-color="#AE9CEE"/></linearGradient>'+
      '<linearGradient id="gxBw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FBF9FF"/><stop offset=".55" stop-color="#D6CAFA"/><stop offset="1" stop-color="#A690EA"/></linearGradient>'+
      '<radialGradient id="gxP" cx=".38" cy=".34" r=".72"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#EEEAF6"/><stop offset="1" stop-color="#B7AED0"/></radialGradient>'+
      '<linearGradient id="gxIn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#06123C"/><stop offset="1" stop-color="#1B4BB0"/></linearGradient>'+
      '<filter id="gxB1" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1"/></filter>'+
      '<filter id="gxB2" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.4"/></filter>'+
      '<filter id="gxB5" x="-60%" y="-200%" width="220%" height="500%"><feGaussianBlur stdDeviation="5"/></filter>'+
      '<clipPath id="gxLC"><path d="'+lidH+'"/></clipPath><clipPath id="gxBC"><path d="'+bodyH+'"/></clipPath></defs></svg>';
    const svg='<svg viewBox="0 0 200 200" fill="none" aria-hidden="true"><ellipse class="gx-sh" cx="104" cy="191" rx="58" ry="8" fill="#001540" opacity=".4" filter="url(#gxB5)"/><g class="gx-all"><g transform="rotate(-8 103 118)">'+
      '<g class="gx-bd"><path class="gx-in" d="'+rp([A1,B1,C1,D1],[6,6,6,6])+'" fill="url(#gxIn)"/>'+
        '<g clip-path="url(#gxBC)"><path d="'+bodyH+'" fill="url(#gxL)"/><path d="'+pg([D1,C1,C2,D2])+'" fill="url(#gxR)" filter="url(#gxB2)"/>'+
        '<path d="'+rL+'" fill="url(#gxRb)"/><path d="'+rR+'" fill="url(#gxRb2)"/>'+
        st([Lf(.2,.34),Lf(.25,.33),Lf(.25,.9),Lf(.2,.91)],.28)+st([Lf(.72,.36),Lf(.8,.34),Lf(.8,.86),Lf(.72,.88)],.45)+st([Rf(.62,.4),Rf(.7,.38),Rf(.7,.82),Rf(.62,.84)],.22)+
        '<path d="M'+f(D1)+'L'+f(D2)+'" stroke="#fff" stroke-width="3.5" opacity=".55" filter="url(#gxB2)"/>'+
        [[Lf(.13,.55),3.6,.5],[Lf(.36,.78),2.6,.4],[Lf(.62,.5),3,.45],[Lf(.86,.72),2.2,.35],[Rf(.25,.62),3.2,.35],[Rf(.8,.5),2.4,.3],[Rf(.42,.9),2,.25]].map(([c,r,o])=>'<path d="M'+f([c[0],c[1]-r*2])+'Q'+f(c)+' '+f([c[0]+r*2,c[1]])+'Q'+f(c)+' '+f([c[0],c[1]+r*2])+'Q'+f(c)+' '+f([c[0]-r*2,c[1]])+'Q'+f(c)+' '+f([c[0],c[1]-r*2])+'Z" fill="#fff" opacity="'+o+'"/>').join('')+
        '<path d="M'+f(M(A1,D1))+'L'+f(M(A2,D2))+'" stroke="#fff" stroke-width="1.4" opacity=".8"/><path d="M'+f(M(D1,C1))+'L'+f(M(D2,C2))+'" stroke="#fff" stroke-width="1.2" opacity=".5"/>'+
        '<path d="M'+f(ad(M(A1,D1),o1,-1))+'L'+f(ad(M(A2,D2),o1,-1))+'M'+f(ad(M(A1,D1),o1,1))+'L'+f(ad(M(A2,D2),o1,1))+'" stroke="#9C88E6" stroke-width="1" stroke-dasharray="2 3" opacity=".7"/>'+
        '<path d="M'+f(A2)+'L'+f(D2)+'L'+f(C2)+'" stroke="#0A2A80" stroke-width="7" opacity=".35" filter="url(#gxB2)"/>'+
        '<path d="M'+f(A1)+'L'+f(D1)+'L'+f(C1)+'" stroke="#082066" stroke-width="5" opacity=".45" filter="url(#gxB2)"/></g></g>'+
      '<g class="gx-lid"><g transform="translate(103 96) scale(1.045) translate(-103 -96)"><g clip-path="url(#gxLC)"><path d="'+lidH+'" fill="url(#gxL)"/>'+
        '<path d="'+pg([D,C,C1,D1])+'" fill="url(#gxR)" filter="url(#gxB2)"/><path d="'+pg([A,B,C,D])+'" fill="url(#gxT)" filter="url(#gxB2)"/>'+
        '<path d="'+rL+'" fill="url(#gxRb)"/><path d="'+rR+'" fill="url(#gxRb2)"/><path d="'+rT1+'" fill="url(#gxRb)"/><path d="'+rT2+'" fill="url(#gxRb)"/>'+
        '<path d="M'+f(A)+'L'+f(D)+'L'+f(C)+'" stroke="#fff" stroke-width="3" opacity=".7" filter="url(#gxB2)"/>'+
        '<path d="M'+f(M(A,D))+'L'+f(M(B,C))+'" stroke="#fff" stroke-width="1.3" opacity=".75"/><path d="M'+f(M(D,C))+'L'+f(M(A,B))+'" stroke="#fff" stroke-width="1.3" opacity=".6"/>'+
        '<path d="M'+f(M(A1,D1))+'L'+f(M(A,D))+'" stroke="#fff" stroke-width="1.4" opacity=".8"/>'+
        '<ellipse cx="80" cy="66" rx="18" ry="5" transform="rotate(-18 80 66)" fill="#fff" opacity=".55" filter="url(#gxB2)"/>'+
        st([Lf(.72,.04),Lf(.8,.03),Lf(.8,.22),Lf(.72,.23)],.45)+'</g>'+bow+'</g></g></g></g></svg>';
    return {defs,svg}; })();
  document.body.insertAdjacentHTML('afterbegin',GX.defs);
  const gbxH=(s,cls,id)=>'<span class="gbx'+(cls?' '+cls:'')+'"'+(id?' id="'+id+'"':'')+' style="--s:'+s+'px">'+GX.svg+'</span>';
  document.querySelectorAll('.gbx').forEach(g=>{ if(!g.querySelector('svg')) g.innerHTML=GX.svg; });

  // ── catalog: the same «Каталог» block as the client home — just without options / turbo / predictions ──
  const NBCAT=['aapl','tsla','nvda','amzn','pm:btc','goog','meta','msft','promo','ko','nflx','pm:fed','ma','pg','spx','coin','hood','jnj','wmt','pm:tsla','jpm','intc','amd','visa','csco','qqq'];
  function nbTile(k){ if(k.startsWith('pm:')) return ctPm(k.slice(3)); if(k==='promo') return '<button class="promo tile ct-bn ct-b-fut" data-nblt><span class="bt">Долгосрочные инвестиции</span><span class="bs">Доход известен заранее</span><span class="bp">до 6,8 %</span></button>';
    const x=NBX[k], y=x.y;
    return '<div class="tile" role="button" tabindex="0" data-nbk="'+k+'">'+(k==='ishr'||k==='vang'||k==='uk'||k==='qqq'?lgHTML(k):nbL(k))+'<span class="n">'+x.n+'</span><hr>'+
      '<span class="p"'+(k==='aapl'?' data-nbap':'')+'>'+(x.px||fmt2(nbP(k)))+'</span><span class="c'+(x.nt?' nt':y<0?' dn':'')+'">'+(x.c||nbPct(y)+' за год')+'</span>'+
      '<button class="b">'+(x.b||'Купить')+'</button></div>'; }
  $('nbCat').innerHTML='<div class="cat nb-cat" id="nbCatNew"><h2>Каталог</h2><div class="chips" id="nbChips">'+$('chips').innerHTML+'</div><div class="cat-g" id="nbCatG">'+NBCAT.map(nbTile).join('')+'</div></div>';
  $('nbChips').querySelectorAll('.on').forEach(b=>b.classList.remove('on'));
  setInterval(()=>{ if(!NBM.on) return; document.querySelectorAll('[data-nbap]').forEach(el=>{ const t=fmt2(midPx()); if(el.textContent!==t) el.textContent=t; }); },3000);

  // ── hero, one per state: new → pend (bought with a card) → opening → open (= the client hero) ──
  const HEXS=[['nvda',16,22,76],['fr',50,46,104],['tsla',50,78,76],['aapl',16,70,76],['goog',84,62,76],['meta',84,18,76],['msft',-6,46,64],['amzn',106,40,64]];
  const BUB=[['aapl',14,34,60,5.2,0],['tsla',86,30,54,6,.8],['nvda',11,78,48,5.6,.4],['goog',88,76,56,6.4,1.2],['msft',31,14,40,5,1.6],['amzn',69,13,42,5.8,.2]];
  const nbOrd=tx=>{ const o=NBM.otc, x=NBX[o.k]; return '<div class="nb-ord">'+nbL(o.k)+'<span class="tx"><b>'+x.s+' · '+fmt2(o.a)+'</b><small>≈ '+nbQ(o.q)+' акции · '+tx+'</small></span>'+
    (NBM.st==='pend'?'<span class="nb-rg"><svg width="52" height="52" viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="4"/><circle cx="26" cy="26" r="22" fill="none" stroke="#FFB547" stroke-width="4" stroke-linecap="round" stroke-dasharray="138.2 200" transform="rotate(-90 26 26)"/></svg><span>14<small>дней</small></span></span>':'')+'</div>'; };
  const nbTotal=()=>(NBM.st==='open'&&NBM.otc?NBM.otc.a:0)+(NBM.gift?10:0);
  const nbInv=()=>NBM.st==='open'&&NBM.otc?NBM.otc.a:0;
  const nbDayS=()=>{ const g=NBM.gift?10:0, b=nbInv(); return '+'+fmt2(g)+' ('+(g?'+'+dec(b?g/b*100:100,0):'0')+' %)'; };
  function nbHero(){ const s=NBM.st;
    if(s==='new') return '<h1 class="nb-h1">Откройте брокерский счёт — и&nbsp;начните инвестировать</h1>'+
      '<p class="nb-p">Сделайте первый шаг к финансовым целям и инвестируйте</p>'+
      '<div class="nb-art-sp" aria-hidden="true"></div>'+
      '<button class="nb-go" data-nbopen>Открыть брокерский счёт</button>';
    if(s==='pend') return '<span class="nb-pill"><i class="dt"></i>Остался один шаг</span>'+
      '<h1 class="nb-h1">Откройте счёт — и&nbsp;акция ваша</h1>'+
      '<p class="nb-p">Заявку исполним сразу после открытия. Не успеете за 14 дней — вернём деньги на карту</p>'+nbOrd('ждёт счёт')+
      '<button class="nb-go" data-nbopen>Открыть брокерский счёт</button>';
    if(s==='opening') return '<div class="nb-spin"><svg class="rg" width="140" height="140" viewBox="0 0 140 140"><defs><linearGradient id="nbSg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#9FD4FF"/></linearGradient></defs><circle cx="70" cy="70" r="62" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="6"/><circle class="ar" cx="70" cy="70" r="62" fill="none" stroke="url(#nbSg)" stroke-width="6" stroke-linecap="round" stroke-dasharray="100 290"/></svg><span class="sh"><i class="sgl"></i>'+NBSH+'</span></div>'+
      '<h1 class="nb-h1">Счёт открывается…</h1><p class="nb-p">Проверяем данные — обычно пару минут. Пришлём уведомление</p>'+
      ''+(NBM.otc?nbOrd('исполним после открытия'):'');
    // opened: exactly the client hero — total, «свободно для торговли», day result, chart, period switch
    return '<div class="hm-tot"><div class="l">Всего на счёте</div><div class="v" id="nbTot">'+fmt2(nbTotal())+'</div>'+
      '<button class="hm-free" data-t="Свободно для торговли — $0,00">Свободно для торговли <b>$0,00</b>'+NBCHEV+'</button></div>'+
      '<div class="hm-pl one"><div><div class="k">За сегодня</div><div class="v" id="nbDay">'+nbDayS()+'</div></div></div>'+
      '<div class="hm-chart" id="nbCh"></div><div class="hm-x">'+['18:00','19:00','20:00','21:00','22:00','23:00'].map((t,i)=>'<span style="left:'+(8+i*16.8).toFixed(1)+'%">'+t+'</span>').join('')+'</div>'+
      '<div class="hm-per"><div class="sx lg dk" id="nbPer" style="--n:5;--i:0"><span class="pl"></span><button>1D</button><button>1W</button><button>1M</button><button>1Y</button><button>ALL</button></div>'+NBGEAR+'</div>'; }
  const NBGEAR=$('hmGear').outerHTML.replace(' id="hmGear"',' data-t="Настройки графика — скоро"');
  // flat line that steps up when money arrives (purchase executed, gift credited)
  function nbChart(anim){ const el=$('nbCh'); if(!el) return; const W=el.clientWidth||390, H=el.clientHeight||130, tot=nbTotal(), ev=[];
    if(NBM.otc) ev.push([.48,NBM.otc.a]); if(NBM.gift) ev.push([.8,(NBM.otc?NBM.otc.a:0)+10]);
    const Y=v=>tot?(H-26-(v/tot)*(H-60)):H/2+10; let v=0, d='M0 '+Y(0).toFixed(1);
    ev.forEach(([x,nv])=>{ const cx=x*W; d+=' L'+(cx-22).toFixed(1)+' '+Y(v).toFixed(1)+' C'+(cx-4).toFixed(1)+' '+Y(v).toFixed(1)+' '+(cx+4).toFixed(1)+' '+Y(nv).toFixed(1)+' '+(cx+22).toFixed(1)+' '+Y(nv).toFixed(1); v=nv; });
    const ly=Y(v).toFixed(1); d+=' L'+(W-16)+' '+ly;
    el.innerHTML='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none"><defs><linearGradient id="nbF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><pattern id="nbD" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".85" fill="#fff" fill-opacity=".45"/></pattern><filter id="nbG" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter></defs>'+
      '<path class="ar" d="'+d+' L'+(W-16)+' '+H+' L0 '+H+'Z" fill="url(#nbF)"/><path class="ar" d="'+d+' L'+(W-16)+' '+H+' L0 '+H+'Z" fill="url(#nbD)" opacity=".6"/>'+
      '<path class="gl" d="'+d+'" stroke="#D9B8FF" stroke-width="5" filter="url(#nbG)" opacity=".0"/><path class="ln" d="'+d+'" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<path d="M'+(W-10)+' '+ly+'H'+W+'" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="1.5 4" stroke-linecap="round"/><circle cx="'+(W-16)+'" cy="'+ly+'" r="4" fill="#fff"/></svg>';
    if(anim){ const p=el.querySelector('.ln'), L=p.getTotalLength(); p.animate([{strokeDasharray:L,strokeDashoffset:L},{strokeDasharray:L,strokeDashoffset:0}],{duration:1100,easing:'cubic-bezier(.3,0,.2,1)'});
      el.querySelectorAll('.ar').forEach(a=>a.animate([{opacity:0},{opacity:1}],{duration:600,delay:700,fill:'backwards'})); el.querySelector('circle').animate([{opacity:0,transform:'scale(0)'},{opacity:1,transform:'none'}],{duration:400,delay:1000,fill:'backwards'}); } }
  // body under the hero: gift banner in the dark «bridge» (like «Счета и карты»), then «Мой портфель» with the client markup
  const NBGL=[['aapl',-40,-72],['nvda',8,-102],['goog',42,-58]];
  function nbTopB(){ let h='';
    if(false) h+='<div class="hm-bridge nb-br"><button class="nb-gift" id="nbGiftB"><i class="fdots" aria-hidden="true"></i><i class="gw"></i>'+
      '<span class="m"><b>Акция уже ваша</b><span>'+(PMODE==='tok'?'Акция':'Single stock')+' на $10 — это бесплатно</span><em>Забрать подарок</em></span>'+
      '<span class="art">'+gbxH(136,'op2')+NBGL.map((g,i)=>'<span class="gl" style="--x:'+g[1]+'px;--y:'+g[2]+'px;--k:'+i+'">'+nbL(g[0])+'</span>').join('')+'</span></button></div>';
    const rows=[]; let inv=0;
    if(NBM.st==='open'&&NBM.otc){ const o=NBM.otc, x=NBX[o.k]; inv=o.a; rows.push('<button class="pf-row" data-nbr="'+o.k+'">'+nbL(o.k)+'<span class="m"><span class="t">'+x.t+'.US</span><span class="s">'+nbQ(o.q)+' шт. по '+dec(nbP(o.k))+' $</span></span><span class="r"><span class="t">'+dec(o.a)+'</span><span class="s">+$0,00 +0,0%</span></span></button>'); }
    if(NBM.gift){ const g=NBM.gift, x=NBX[g.k]; rows.push('<button class="pf-row" data-nbr="'+g.k+'" data-gift>'+nbL(g.k)+'<span class="m"><span class="t">'+x.t+'/100<i class="nb-gi">'+GIFTI+'</i></span><span class="s">'+Math.round(g.q*100)+' шт. · подарок</span></span><span class="r"><span class="t">10,00</span><span class="s">+$10,00 +100%</span></span></button>'); }
    if(rows.length){ const tot=nbTotal(), all=tot-inv, day=NBM.gift?10:0, pc=v=>'('+dec(inv?v/inv*100:(v?100:0),1)+' %)';
      h+=(h?'':'<div class="hm-bridge nb-br nb-br0"></div>')+'<div class="hm-blk nb-pf" id="nbPf"><div class="hm-h">Мой портфель'+$('pfBlk').querySelector('.pf-gear').outerHTML+'</div>'+
        '<div class="pf-an" role="button" tabindex="0" data-t="Аналитика появится, когда в портфеле будет больше бумаг"><div class="row"><div><div class="k">Стоимость бумаг</div><div class="v">'+fmt2(tot)+'</div></div><div><div class="k">Сумма вложения</div><div class="v">'+fmt2(inv)+'</div></div>'+
        '<div><div class="k">За все время</div><div class="v up">+'+fmt2(all)+' '+pc(all)+'</div></div><div><div class="k">за сегодня</div><div class="v up">+'+fmt2(day)+' '+pc(day)+'</div></div></div></div>'+
        '<div class="pf-sec open"><button class="pf-sh" data-nsec><span><span class="k">Акции</span><span class="v">'+fmt2(tot)+'<small>+'+fmt2(all)+' '+pc(all).replace(/[()]/g,'')+'</small></span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9.5l6 6 6-6" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="pf-bd"><div>'+rows.join('')+'</div></div></div></div>'; }
    $('nbTopB').innerHTML=h; }
  function nbTt(){ const t=$('nbTt'); if(!t.firstChild) t.innerHTML='<span class="t">Инвестиции</span><span class="hm-acc ac">GL 789099'+NBCHEV+'</span>'; t.classList.toggle('op',NBM.st==='open'); }
  let nbSuT=[];
  // once the brokerage account is open, the newbie gets the client catalog itself (options, turbo, predictions, portfolios…)
  const CLCAT=$('catG').closest('.cat'); let clCatHome=null;
  function nbCatSync(){ const want=NBM.on;
    if(want&&CLCAT.parentNode!==$('nbCat')){ clCatHome={p:CLCAT.parentNode,n:CLCAT.nextSibling}; $('nbCat').appendChild(CLCAT); }
    if(!want&&clCatHome&&CLCAT.parentNode===$('nbCat')){ clCatHome.p.insertBefore(CLCAT,clCatHome.n); clCatHome=null; }
    $('nbCatNew').style.display=want?'none':''; }

  // ── analysts' gauge animates when it scrolls into view; community vote + likes ──
  { const rec=$('anRec'); if(rec&&'IntersectionObserver' in window){ const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ rec.classList.add('on'); io.disconnect(); } }),{root:$('stScroll'),threshold:.35}); io.observe(rec); const idc=$('anIdea'); const io2=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ idc.classList.add('on'); io2.disconnect(); } }),{root:$('stScroll'),threshold:.4}); io2.observe(idc); } else if(rec){ rec.classList.add('on'); $('anIdea').classList.add('on'); }
    let up=68, vote=null;
    $('cmVt').addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return; const v=b.dataset.v;
      if(vote===v) return; vote=v; $('cmVt').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
      const u=v==='up'?69:67; $('cmBu').style.width=u+'%'; $('cmBd').style.width=(100-u)+'%'; rollText($('cmUp'),u+'%',v==='up'?1:-1,true); rollText($('cmDn'),(100-u)+'%',v==='up'?-1:1,true); toast('Голос учтён — спасибо!'); });

    // live feed: someone types, a new comment slides in on top, the oldest one leaves — the block keeps its height
    const CMP=[['Арман Б.','#AF52DE','Покупаю','buy','Взял ещё 0,1 акции. Сервисы растут быстрее iPhone — это главное.',''],
      ['Света Л.','#FF2D55','Держу','hold','Уже +12% с весны. Не продаю, жду презентацию в марте.','Держит 1 год'],
      ['Ержан М.','#34C759','Покупаю','buy','А кто-то брал через Freedom от $1? Комиссии нет?',  'Новичок'],
      ['Ольга П.','#5856D6','Держу','hold','@Ержан да, брала на $10 — комиссии 0, всё быстро.',''],
      ['Тимур А.','#FF9500','Покупаю','buy','Докупил после новостей про ИИ. Цель как у аналитиков — $185.','Держит 2 года'],
      ['Алия Н.','#32ADE6','Держу','hold','Для меня это «тихая гавань» в портфеле. Не трогаю.',''],
      ['Руслан Ж.','#FF3B30','Продаю','sell','Зафиксировал часть прибыли, вернусь ниже $145.',''],
      ['Камила Е.','#30B0C7','Покупаю','buy','Первый раз купила акцию — оказалось проще, чем думала.','Новичок']];
    let cmN=0, cmTot=1248, cmT=0;
    const cmItem=c=>'<div class="cm-i cm-new"><span class="av" style="--a:'+c[1]+'">'+c[0].split(' ').map(w=>w[0]).join('').replace('.','')+'</span><div class="m"><div class="hd"><b>'+c[0]+'</b><span class="cmt '+c[3]+'">'+c[2]+'</span><span class="tm">сейчас</span></div><p>'+c[4]+'</p><div class="ft"><button class="lk"><i>♥</i><span>0</span></button><span class="rp">Ответить</span>'+(c[5]?'<span class="bg'+(c[5]==='Новичок'?' nw':'')+'">'+c[5]+'</span>':'')+'</div></div></div>';
    function cmTick(){ if(!dev.classList.contains('on-stock')){ cmT=setTimeout(cmTick,2000); return; }
      const L=document.querySelector('#cmCard .cm-l'); if(!L.style.height) L.style.height=L.offsetHeight+'px';
      const c=CMP[cmN++%CMP.length]; L.querySelectorAll('.cm-new .tm').forEach(t=>{ if(t.textContent==='только что') t.textContent='1 мин'; else if(t.textContent==='1 мин') t.textContent='2 мин'; });
      (()=>{ L.insertAdjacentHTML('afterbegin',cmItem(c)); const n=L.firstElementChild, h=n.scrollHeight; n.style.maxHeight='0px'; requestAnimationFrame(()=>{ n.style.maxHeight=h+'px'; n.classList.add('in'); });
        setTimeout(()=>{ n.style.maxHeight=''; n.querySelector('.tm').textContent='только что'; const its=L.querySelectorAll('.cm-i'); while(L.querySelectorAll('.cm-i').length>3){ const a=L.querySelectorAll('.cm-i'); a[a.length-1].remove(); } },700);
        cmTot+=1+Math.floor(Math.random()*3); $('cmAll').textContent='Все обсуждения · '+group(String(cmTot));
        if(!vote){ up=Math.max(60,Math.min(75,up+(c[3]==='buy'?1:-1))); $('cmBu').style.width=up+'%'; $('cmBd').style.width=(100-up)+'%'; rollText($('cmUp'),up+'%',c[3]==='buy'?1:-1,true); rollText($('cmDn'),(100-up)+'%',c[3]==='buy'?-1:1,true); }
        cmT=setTimeout(cmTick,5000); })(); }
    cmT=setTimeout(cmTick,3500);
    $('cmCard').addEventListener('click',e=>{ const l=e.target.closest('.lk'); if(l){ const on=l.classList.toggle('on'), n=l.querySelector('span'); n.textContent=(+n.textContent+(on?1:-1)); return; }
      if(e.target.closest('#cmAll')){ toast('Все обсуждения — скоро'); return; } if(e.target.closest('#cmIn')){ toast('Написать мнение — скоро'); return; } if(e.target.closest('.rp')) toast('Ответы — скоро'); }); }
  function nbStSync(){ const pre=NBM.on&&NBM.st!=='open'; dev.classList.toggle('nbpre',pre); dev.classList.toggle('nbpos',NBM.on); $('trade').classList.toggle('lk',pre); $('trade').innerHTML=pre?nvI('lock',20,2.2)+'Торговать':'Торговать'; }
  { const tr0=$('trade').onclick; $('trade').onclick=e=>{ if(NBM.on&&NBM.st!=='open'){ nboOpen(); return; } tr0&&tr0(e); }; }
  const nbStClose=()=>{ if(!dev.classList.contains('on-stock')) return; dev.classList.remove('on-stock','on-order'); $('scrStock').setAttribute('aria-hidden','true'); };
  function nbRender(){ nbSuT.forEach(clearTimeout); nbSuT=[]; nbCatSync(); nbStSync(); $('nbHome').classList.toggle('op',NBM.st==='open'); $('nbHero').classList.toggle('art',NBM.st==='new'); $('nbHc').innerHTML=nbHero();
    if(NBM.st==='open'){ requestAnimationFrame(()=>nbChart(false)); seg($('nbPer'),()=>nbChart(true)); }
    if(NBM.st==='new'){ NBM.su=performance.now()-4000; nbSuT.push(setTimeout(nbSuck,1500)); }
    nbTopB(); nbTt(); $('hmScroll').dispatchEvent(new Event('scroll')); syncStatus(); }
  // hero art: the bubbles dive into the box, it jiggles, and they fly back out
  function nbSuck(){ const ill=document.querySelector('#nbHc .nb-ill'); if(!ill||!NBM.on||NBM.st!=='new'||document.hidden||ill.classList.contains('in')||ill.classList.contains('out')||performance.now()-(NBM.su||-1e9)<5500) return; NBM.su=performance.now();
    const g=ill.querySelector('.gbx'), mx=g.offsetLeft+g.offsetWidth*.5, my=g.offsetTop+g.offsetHeight*.47, T=(f,ms)=>nbSuT.push(setTimeout(f,ms));
    ill.querySelectorAll('.nb-bb').forEach(b=>{ b.style.setProperty('--dx',(mx-b.offsetLeft-b.offsetWidth/2).toFixed(0)+'px'); b.style.setProperty('--dy',(my-b.offsetTop-b.offsetHeight/2).toFixed(0)+'px'); });
    g.classList.add('op'); ill.classList.add('in');
    T(()=>{ g.classList.remove('op'); g.classList.add('jg'); },1250);
    T(()=>{ g.classList.remove('jg'); g.classList.add('op'); ill.classList.remove('in'); ill.classList.add('out'); },1900);
    T(()=>{ g.classList.remove('op'); ill.classList.remove('out'); },2900); }
  setInterval(nbSuck,1000);

  // ── demo switch: Клиент ↔ Новичок ──
  // prediction + famous-portfolio blocks are shared: they live in the newbie home while the newbie mode is on
  const NBBLK={pm:$('pmHB'),fp:$('fpHB')}; const NBBLK0=$('hmNews')||NBBLK.fp.nextElementSibling;
  function nbBlocks(on){ if(on){ $('nbBody').appendChild(NBBLK.pm); $('nbBody').appendChild(NBBLK.fp); } else { NBBLK0.before(NBBLK.pm); NBBLK0.before(NBBLK.fp); } }
  window.__nbPre=()=>NBM.on&&NBM.st!=='open';
  window.nbLockSheet=()=>{ if(!(NBM.on&&NBM.st!=='open')) return false;
    openSheet('<div class="lts nb-lks"><div class="lts-h"><b></b>'+XB+'</div><i class="ic">'+nvI('lock',26,2.2)+'</i><b class="t">Сначала откройте брокерский счёт</b><p>Прогнозы и портфели станут доступны сразу после открытия. Это бесплатно и займёт около 5 минут</p><div class="lts-go"><button class="lt-cta" id="nbLkS">Открыть брокерский счёт</button><button class="fp-soft" data-close>Позже</button></div></div>','ltsh');
    $('nbLkS').onclick=()=>{ closeSheet(); setTimeout(()=>{ ['on-ev','on-pm','on-fp','on-fpp'].forEach(c=>dev.classList.remove(c)); nboOpen(); },250); }; return true; };
  function nbMode(on,quiet){ document.querySelectorAll('[data-demo]').forEach(b=>b.classList.toggle('on',(b.dataset.demo==='nb')===on)); const dt=$('nbDmTg'); if(dt){ dt.classList.toggle('on',on); $('nbDmRow').setAttribute('aria-checked',on); } if(NBM.on===on) return;
    NBM.on=on; if(FRESH) freshEnd(); closeSheet(); clearTimeout(NBM.tm); cancelAnimationFrame(ngRaf); ngRaf=0; nbPushHide();
    ['on-nbb','on-nbo','on-nbg','on-nbr'].forEach(c=>dev.classList.remove(c)); ['scrNbB','scrNbO','scrNbG','scrNbR'].forEach(id=>$(id).setAttribute('aria-hidden','true'));
    if(dev.classList.contains('cr')||dev.classList.contains('se')) goInv();
    Object.assign(NBM,{st:'new',otc:null,gift:null,pick:null}); dev.classList.toggle('nb',on); nbBlocks(on); try{ pmRefresh(); }catch(_){} if(on) nbRender(); else { nbCatSync(); nbStSync(); nbStClose(); }
    $('hmScroll').scrollTop=0; $('hmScroll').dispatchEvent(new Event('scroll')); syncStatus();
    if(!quiet) toast(on?'Режим «Новичок»: счёта ещё нет':'Режим «Клиент»'); }
  { const mk=id=>'<div class="demo-sw" id="'+id+'"><button class="on" data-demo="cl">Клиент</button><button data-demo="nb">Новичок</button></div>';
    const d=document.createElement('div'); d.innerHTML=mk('demoSw'); dev.after(d.firstChild);
    $('mnuSc').insertAdjacentHTML('beforeend','<div class="mnu-demo"><b>Режим прототипа</b>'+mk('demoSw2')+'</div>');
    // home copy: a row in the same style as «Супер-лайт главная», at the very bottom (added after tb.js wrapped the client blocks)
    const hd=document.createElement('div'); hd.className='hm-blk hs-blk nb-dm';
    hd.innerHTML='<button class="hs-row" id="nbDmRow" role="switch" aria-checked="false"><span class="hs-ic">'+nvI('user_1',22,2)+'</span><span class="m"><b>Режим новичка</b><span>Главная без брокерского счёта</span></span><i class="hs-tg" id="nbDmTg"></i></button>'+
      '<button class="hs-row nb-dm2" id="nbGfRow" hidden><span class="hs-ic">'+GIFTI+'</span><span class="m"><b>Выбор подарка</b><span>Посмотреть флоу выбора акции</span></span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
    setTimeout(()=>{ $('hmScroll').appendChild(hd); $('nbDmRow').onclick=()=>nbMode(!NBM.on); $('nbGfRow').onclick=()=>ngOpen();
      ['demoSw','demoSw2'].forEach(id=>{ const s=$(id); spInit(s); s.addEventListener('click',e=>{ const b=e.target.closest('[data-demo]'); if(b) nbMode(b.dataset.demo==='nb'); }); });
      $('nbLkI').innerHTML=nvI('lock',20,2.2); $('nbLkGo').onclick=()=>nboOpen();
      setTimeout(()=>{ try{ scInit(); }catch(e){ console.error(e); } },60);
      },0); }

  // ── push banner ──
  dev.insertAdjacentHTML('beforeend','<button class="nb-push" id="nbPush"><span class="ai">F</span><span class="tx"><b>Freedom Broker</b><span id="nbPushT"></span></span><small>сейчас</small></button>');
  let nbPT=0;
  function nbPush(t){ $('nbPushT').textContent=t; $('nbPush').classList.add('on'); clearTimeout(nbPT); nbPT=setTimeout(nbPushHide,4600); try{ navigator.vibrate&&navigator.vibrate(18); }catch(_){} }
  function nbPushHide(){ $('nbPush').classList.remove('on'); }
  $('nbPush').onclick=()=>{ nbPushHide(); if((NBM.st==='open'&&!NBM.gift)||$('clGift')) ngOpen(); };

  // ── stock quick sheet → buy with a card ──
  function nbStock(k){ const x=NBX[k], p=nbP(k), y=x.y||0;
    openSheet('<div class="lts nbs"><div class="lts-h"><span class="nbs-id">'+(x.px?lgHTML(k):nbL(k))+'</span>'+XB+'</div><b class="nbs-n">'+x.n+'</b>'+
      '<div class="nbs-p"><b>'+(x.px||fmt2(p))+'</b><span'+(y<0?' class="dn"':'')+'>'+(x.c||nbPct(y)+' за год')+'</span></div>'+
      (x.px?'':'<div class="nbs-hl"><span class="tx"><b>Можно купить от $1</b><span>$10 = '+Math.floor(10/r2(p*SSF())+1e-9)+' шт. '+x.t+'/100</span></span>'+nbSpark(k,96,36,y<0?'#EB3333':'#10C810')+'</div>')+
      '<p class="nbs-d">'+x.d+'</p>'+(NBM.st!=='open'?'<div class="nbs-lk"><i class="ic">'+nvI('lock',18,2.2)+'</i><div><b>Сначала откройте брокерский счёт</b><span>Покупать можно после открытия — бесплатно, около 5 минут</span></div></div>':'')+'<div class="lts-go"><button class="lt-cta'+(NBM.st!=='open'?' lk':'')+'" id="nbsBuy">'+(NBM.st!=='open'?nvI('lock',20,2.2)+'Торговать':(x.px?'Купить':'Купить от $1'))+'</button><button class="fp-soft" id="nbsMore">Подробнее о компании</button></div></div>','ltsh');
    $('nbsBuy').onclick=()=>{ if(NBM.st!=='open'){ closeSheet(); if(window.__DS) window.__DS.open('noacc'); else nboOpen(); return; } if(x.px){ toast('Облигации — скоро'); return; } nbbOpen(k); }; $('nbsMore').onclick=()=>toast('Страница компании — скоро'); }
  // buy with a card before the account exists — the standard order screen (Сумма / Количество) and the standard swipe confirm
  const NBCARDS=[ACCS.find(a=>a.id==='sup'),{id:'fc',n:'Freedom Card',s:'USD **4488',sh:'Freedom Card',cur:'USD',raw:1250.40,bal:1250.40,ic:'blue'}];
  const NBB={k:'aapl',m:'sum',s:'10',q:'',card:'sup'};
  const nbbCard=()=>NBCARDS.find(c=>c.id===NBB.card)||NBCARDS[0];
  const nbbAsk=()=>NBB.k==='aapl'?ASK:r2(nbP(NBB.k)*1.0008), nbbBid=()=>NBB.k==='aapl'?BID:r2(nbP(NBB.k)*.9992);
  const nbbNum=s=>parseFloat((s||'0').replace(',','.'))||0;
  const nbbSum=()=>NBB.m==='sum'?nbbNum(NBB.s):r2(nbbNum(NBB.q)*nbbAsk());
  const nbbQty=()=>NBB.m==='qty'?nbbNum(NBB.q):nbbNum(NBB.s)/nbbAsk();
  function nbbOpen(k){ if(NBM.st!=='open'&&window.__DS){ closeSheet(); window.__DS.open('noacc'); return; } closeSheet(); Object.assign(NBB,{k,m:'sum',s:'10',q:''}); const x=NBX[k];
    $('nbbLg').className='lg nbb-tl lg-'+k; $('nbbLg').textContent=k==='qqq'?'QQQ':''; $('nbbTk').textContent=x.t; nbbRender(0);
    dev.classList.add('on-nbb'); $('scrNbB').setAttribute('aria-hidden','false'); syncStatus(); }
  function nbbClose(){ closeSheet(); dev.classList.remove('on-nbb'); $('scrNbB').setAttribute('aria-hidden','true'); syncStatus(); }
  function nbbRender(dir){ const sum=nbbSum(), q=nbbQty(), c=nbbCard(), kzt=c.cur==='KZT', over=sum>c.bal+1e-9, low=sum>0&&sum<1;
    $('nbbBid').textContent=fmt2(nbbBid()); $('nbbAsk').textContent=fmt2(nbbAsk());
    $('nbbSeg').dataset.mode=NBB.m; $('nbbPSum').setAttribute('aria-hidden',NBB.m!=='sum'); $('nbbPQty').setAttribute('aria-hidden',NBB.m!=='qty');
    $('nbbNum').textContent='$'+(NBB.s?NBB.s.replace(/^(\d+)/,m=>group(m)):'0');
    $('nbbHint').textContent=sum?nbQ(q)+' акции':'от $1 · купим часть акции'; $('nbbHint').classList.toggle('bad',over||low);
    if(over) $('nbbHint').textContent='На карте '+accShort(c); else if(low) $('nbbHint').textContent='Минимум $1';
    $('nbbQty').textContent=NBB.q||'0'; $('nbbPx').textContent=fmt2(nbbAsk()); $('nbbTot').textContent=fmt2(sum);
    $('nbbCardIc').innerHTML=accIc(c,1); $('nbbCardN').textContent=c.sh; $('nbbCardB').textContent=accShort(c); $('nbbCardB').classList.toggle('bad',over);
    const g=$('nbbGo'), bad=!sum||low||over; g.disabled=bad; g.classList.toggle('off',bad); g.textContent=over?'Недостаточно средств':'Продолжить';
    if(dir) $(NBB.m==='sum'?'nbbNum':'nbbQty').animate([{transform:'translateY('+(dir>0?6:-6)+'px)',opacity:.5},{transform:'none',opacity:1}],{duration:180,easing:'ease-out'}); }
  $('nbbKp').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(!b) return; const k=b.dataset.k, key=NBB.m==='sum'?'s':'q', dmax=NBB.m==='sum'?2:4, was=nbbSum(); let v=NBB[key];
    if(k==='del') v=v.slice(0,-1);
    else if(k===','){ if(!v.includes(',')) v=(v||'0')+','; }
    else { const [i,d]=v.split(','); if(d!=null&&d.length>=dmax) return; if(d==null&&i.length>=6) return; v=(v==='0'?'':v)+k; }
    NBB[key]=v; nbbRender(nbbSum()>=was?1:-1); });
  $('nbbSeg').onclick=e=>{ const b=e.target.closest('[data-m]'); if(!b||b.dataset.m===NBB.m) return; const q=nbbQty(), sum=nbbSum();
    NBB.m=b.dataset.m; if(NBB.m==='qty') NBB.q=q?String(Math.round(q*10000)/10000).replace('.',','):''; else NBB.s=sum?String(r2(sum)).replace('.',','):''; nbbRender(0); };
  $('nbbSet').onclick=()=>toast('Рыночная заявка. Лимитные — после открытия брокерского счёта');
  $('nbbQ2').onclick=()=>toast('Стакан — после открытия брокерского счёта');
  $('nbbCard').onclick=()=>{ let pick=NBB.card; const sum=nbbSum();
    const note=()=>{ const c=NBCARDS.find(x=>x.id===pick); return 'Сумма к списанию: <b>'+fmt2(sum)+'</b>'+(c.cur==='KZT'?' <span>≈ '+group(String(Math.round(sum*RATE)))+' ₸</span>':''); };
    openSheet('<div class="sh-head center"><span></span><h3 class="lg">Выберите карту</h3><span></span></div><div class="acc-list">'+
      NBCARDS.map(x=>'<button class="accw'+(x.id===pick?' sel':'')+'" data-acc="'+x.id+'"><span class="acc-in">'+accIc(x)+'<span class="acc-tx"><span class="l1"><b>'+x.n+'</b> · '+x.s+'</span><span class="l2">'+accMoney(x)+'</span></span></span>'+
        '<i class="radio"><svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.2 4.6 4.3 7.6 10.8 1.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>').join('')+
      '</div><div class="acc-note" id="nbbAccNote">'+note()+'</div><div class="sh-cta"><button class="cta" id="nbbAccOk">Выбрать</button></div>','acc');
    sheet.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{ pick=b.dataset.acc; sheet.querySelectorAll('.accw').forEach(x=>x.classList.toggle('sel',x===b)); $('nbbAccNote').innerHTML=note(); });
    $('nbbAccOk').onclick=()=>{ NBB.card=pick; nbbRender(0); closeSheet(); $('nbbCard').animate([{transform:'scale(1.06)'},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'}); }; };
  $('nbbBack').innerHTML=$('cnBack').innerHTML; $('nbbBack').onclick=nbbClose;
  // standard swipe confirm; the order waits for the account (execDone is skipped for NBF)
  let NBF=false; const NBC0={};
  $('nbbGo').onclick=()=>{ if($('nbbGo').disabled) return; const k=NBB.k, x=NBX[k], a=r2(nbbSum()), q=nbbQty(), c=nbbCard(), kzt=c.cur==='KZT';
    NBM.otc={k,a,q}; NBF=true;
    const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if(!('q' in NBC0)){ NBC0.q=qe.innerHTML; NBC0.t=$('cfTitle').textContent; NBC0.sl=sl.innerHTML; NBC0.slc=sl.className; NBC0.fin=$('fin').textContent; NBC0.op=$('finOp').textContent; }
    $('cfTitle').textContent='Купить '+x.t; qe.removeAttribute('data-book'); qe.onclick=null; qe.innerHTML='Bid <b>'+fmt2(nbbBid())+'</b>  Ask <b>'+fmt2(nbbAsk())+'</b>';
    sl.className='slogo nbf-sl'; sl.innerHTML=nbL(k);
    const rows=[['Сумма',fmt2(a)],['Количество','≈ '+nbQ(q)+' акции'],['Цена','≈ '+fmt2(nbbAsk())],['Комиссия','0 ₸'],['Спишется с',accIc(c,true)+c.sh+(kzt?' · ≈ '+group(String(Math.round(a*RATE)))+' ₸':'')]];
    $('receipt').innerHTML=rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('cfNote').lastChild.textContent='Заявку исполним сразу после открытия брокерского счёта. Не успеете за 14 дней — вернём деньги на карту.';
    $('gz').classList.remove('blocked'); $('gzLbl').textContent='Проведите, чтобы купить'; $('knob').setAttribute('aria-label','Проведите вверх, чтобы купить');
    $('rcpt').innerHTML=[['Покупка',x.s+' · '+fmt2(a)],['Количество','≈ '+nbQ(q)+' акции'],['Статус','Ждёт открытия счёта'],['Если не откроете','Вернём через 14 дней']].map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
    $('doneH').textContent='Заявка принята'; $('sttT').textContent='Ждёт счёт'; $('doneTxt').textContent='Остался один шаг — открыть брокерский счёт. Это займёт 5 минут';
    $('fin').textContent='Открыть брокерский счёт'; $('finOp').textContent='Позже';
    resetKnob(false); $('scrConfirm').classList.remove('success');
    dev.classList.add('nbf','on-confirm'); $('scrConfirm').setAttribute('aria-hidden','false'); syncStatus(); };
  function nbfRestore(){ if(!NBF) return; NBF=false; dev.classList.remove('nbf');
    const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
    if('q' in NBC0){ qe.innerHTML=NBC0.q; qe.setAttribute('data-book',''); qe.onclick=()=>openBook(); $('cfTitle').textContent=NBC0.t; sl.innerHTML=NBC0.sl; sl.className=NBC0.slc; $('fin').textContent=NBC0.fin; $('finOp').textContent=NBC0.op; } }
  function nbfLeave(then){ goBack(); nbbClose(); setTimeout(nbStClose,460); NBM.st='pend'; nbRender(); setTimeout(()=>{ nbfRestore(); resetDone(); },460); if(then) then(); }
  { const cb1=$('cfBack').onclick, fin1=$('fin').onclick, fop1=$('finOp').onclick;
    $('cfBack').onclick=()=>{ if(NBF){ goBack(); setTimeout(nbfRestore,440); return; } cb1&&cb1(); };
    $('fin').onclick=()=>{ if(NBF){ nbfLeave(()=>setTimeout(nboOpen,120)); return; } fin1&&fin1(); };
    $('finOp').onclick=()=>{ if(NBF){ nbfLeave(()=>$('hmScroll').scrollTo({top:0,behavior:'smooth'})); return; } fop1&&fop1(); }; }

  // ── intro step (v163): tilted 3D marquee of companies + a floating glass «home» card that builds itself (balance, chart, positions) ──
  const NBA={t:[],built:false,raf:0};
  const NBRW=[['aapl','nvda','tsla','goog','msft','amzn','meta','nflx'],['visa','ko','amd','intc','jpm','wmt','pg','ma'],['coin','hood','csco','jnj','spx','aapl','nvda','goog'],['meta','tsla','ma','amzn','ko','msft','visa','amd'],['wmt','nflx','goog','pg','intc','jpm','coin','aapl']];
  const NBPOS=[['aapl','Apple','$412,80','+8,4 %'],['nvda','NVIDIA','$538,15','+21,7 %'],['tsla','Tesla','$289,55','+4,2 %']];
  function nbaBuild(){ if(NBA.built) return; NBA.built=true;
    const d='M0 92 C 22 88, 30 70, 52 74 S 86 88, 104 66 S 140 40, 160 52 S 196 30, 214 22 S 240 12, 252 8';
    $('nba').innerHTML='<i class="nbx-au a1"></i><i class="nbx-au a2"></i>'+
      '<div class="nbx-mq">'+NBRW.map((r,k)=>'<div class="r" style="--k:'+k+'"><div class="tr">'+r.concat(r).map(x=>'<span class="t">'+nbL(x)+'</span>').join('')+'</div></div>').join('')+'</div>'+
      '<div class="nbx-c" id="nbxC"><i class="nbx-sh"></i>'+
        '<div class="nbx-hd"><small>Мой портфель</small><b id="nbxV">$0,00</b><span class="nbx-d">▲ $1 240,50 · 14,2 %</span></div>'+
        '<svg class="nbx-ch" width="252" height="100" viewBox="0 0 252 100" fill="none"><defs><linearGradient id="nbxG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CF29C" stop-opacity=".45"/><stop offset="1" stop-color="#7CF29C" stop-opacity="0"/></linearGradient></defs>'+
          '<path class="ar" d="'+d+' L252 100 L0 100Z" fill="url(#nbxG)"/><path class="ln" d="'+d+'" pathLength="1" stroke="#7CF29C" stroke-width="2.6" stroke-linecap="round"/><circle class="pt" cx="252" cy="8" r="4.5" fill="#fff"/></svg>'+
        '<div class="nbx-rows">'+NBPOS.map((r,k)=>'<div class="nbx-r" style="--k:'+k+'">'+nbL(r[0])+'<span class="n">'+r[1]+'</span><span class="v"><b>'+r[2]+'</b><i>'+r[3]+'</i></span></div>').join('')+'</div>'+
      '</div>';
    const st=$('nba'), c=$('nbxC');
    const tilt=e=>{ const r=st.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; c.style.setProperty('--ry',(x*16).toFixed(1)+'deg'); c.style.setProperty('--rx',(-y*12).toFixed(1)+'deg'); };
    st.addEventListener('pointermove',tilt); st.addEventListener('pointerleave',()=>{ c.style.setProperty('--ry','0deg'); c.style.setProperty('--rx','0deg'); });
    }
  function nbaCount(el,to,ms){ cancelAnimationFrame(NBA.raf); const t0=performance.now(); const f=t=>{ const k=Math.min(1,(t-t0)/ms), e=1-Math.pow(1-k,3); el.textContent='$'+dec(to*e); if(k<1) NBA.raf=requestAnimationFrame(f); }; NBA.raf=requestAnimationFrame(f); }
  function nbaRun(){ nbaStop(); const n=$('nba'); n.classList.remove('run'); $('nbxV').textContent='$0,00'; void n.offsetWidth; n.classList.add('run');
    NBA.t.push(setTimeout(()=>nbaCount($('nbxV'),10240.5,1500),650)); }
  function nbaStart(){ nbaBuild(); nbaRun(); }
  function nbaGo(){ nbaRun(); }
  function nbaStop(){ NBA.t.forEach(clearTimeout); NBA.t=[]; cancelAnimationFrame(NBA.raf); }

  // ── brokerage account: intro → анкета → документы (без SMS-кода) → отправлено ──
  let NBO=0;
  const NBSEL={job:['Банковская организация','IT и связь','Финансы и инвестиции','Торговля','Образование','Медицина','Госслужба','Другое'],pos:['Специалист','Руководитель','Предприниматель','Студент','Не работаю']};
  const NBV={job:'Банковская организация',pos:'Специалист'};
  const nboEl=q=>$('scrNbO').querySelector(q);
  function nboOpen(){ if(window.__DS){ closeSheet(); window.__DS.open('ob'); return; } closeSheet(); nboStep(0); dev.classList.add('on-nbo'); $('scrNbO').setAttribute('aria-hidden','false'); syncStatus(); }
  function nboStep(i){ NBO=i; $('scrNbO').querySelectorAll('.nbo-p').forEach(p=>{ const j=+p.dataset.p; p.classList.toggle('pre',j<i); if(j===i){ p.classList.remove('on'); p.scrollTop=0; void p.offsetWidth; p.classList.add('on'); } else p.classList.remove('on'); });
    $('nboT').textContent=['Открытие счёта','Анкета','Документы',''][i]; $('nboSub').textContent=['займёт около 5 минут','Шаг 1 из 2','Шаг 2 из 2',''][i];
    nboEl('.nbo-nav').classList.toggle('nb0',i===0||i===3); $('scrNbO').classList.toggle('fin',i===3); $('scrNbO').classList.toggle('s0',i===0); if(dev.classList.contains('on-nbo')) syncStatus(); $('nboPr').classList.toggle('off',i===0||i===3); $('nboPr').querySelectorAll('i').forEach((x,j)=>x.classList.toggle('on',j<i));
    $('nboGo').textContent=['Продолжить','Сохранить','Подписать','Продолжить'][i]; nboValid(); if(i===0) requestAnimationFrame(nbaStart); else nbaStop(); }
  function nboValid(){ const g=$('nboGo'); let ok=true;
    if(NBO===1) ok=/.+@.+\..+/.test($('nboMail').value)&&!!NBV.job&&!!NBV.pos&&!!nboEl('[data-grp="src"] .on');
    if(NBO===2) ok=$('nboOk').classList.contains('on'); g.disabled=!ok; }
  function nboClose(){ nbaStop(); if(NBO===3){ nboFinish(); return; } dev.classList.remove('on-nbo'); $('scrNbO').setAttribute('aria-hidden','true'); if(NBM.otc&&dev.classList.contains('on-nbb')) nbbClose(); syncStatus(); }
  function nboSel(key){ openSheet('<div class="lts"><div class="lts-h"><b>'+(key==='job'?'Сфера деятельности':'Должность')+'</b>'+XB+'</div><div class="lts-src">'+NBSEL[key].map(v=>'<button class="lts-o'+(NBV[key]===v?' lts-sel':'')+'" data-o="'+v+'"><span class="lts-om"><b>'+v+'</b></span><span class="lts-rd">'+NBCK+'</span></button>').join('')+'</div><div style="height:22px"></div></div>','ltsh');
    sheet.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{ NBV[key]=b.dataset.o; nboEl('[data-v="'+key+'"]').textContent=b.dataset.o; sheet.querySelectorAll('.lts-o').forEach(o=>o.classList.toggle('lts-sel',o===b)); setTimeout(closeSheet,200); nboValid(); }); }
  function nboSign(){ nboFinish(); }
  function nbOtp(){ openSheet('<div class="lts nb-otp"><div class="lts-h"><b>Код из SMS</b>'+XB+'</div><p class="nbo-tx">Отправили на +7 777 ••• 45 67 — вставим сами</p><div class="nb-otpb" id="nbOtpB">'+'<i></i>'.repeat(6)+'</div><button class="nb-rs">Отправить ещё раз через 0:59</button></div>','ltsh');
    const C='418207', bs=$('nbOtpB').children; let i=0; bs[0].classList.add('c');
    const t=setInterval(()=>{ if(!sheet.classList.contains('on')||!$('nbOtpB')){ clearInterval(t); return; } bs[i].textContent=C[i]; bs[i].classList.remove('c'); bs[i].classList.add('f'); i++;
      if(i<6) bs[i].classList.add('c'); else { clearInterval(t); setTimeout(()=>{ const b=$('nbOtpB'); if(b) b.classList.add('ok'); },150); setTimeout(()=>{ if(!$('nbOtpB')) return; closeSheet(); nboFinish(); },850); } },240); }
  function nboFinish(){ nbaStop(); nbStClose(); ['on-nbo','on-nbb'].forEach(c=>dev.classList.remove(c)); $('scrNbO').setAttribute('aria-hidden','true'); $('scrNbB').setAttribute('aria-hidden','true');
    if(dev.classList.contains('cr')||dev.classList.contains('se')) goInv();
    NBM.st='opening'; nbRender(); $('hmScroll').scrollTo({top:0}); syncStatus(); clearTimeout(NBM.tm); NBM.tm=setTimeout(nbOpened,5200); }
  function clGiftShow(){ if($('clGift')) return; const br=[...document.querySelectorAll('#scrHome .hm-bridge, .hm-bridge')].find(b=>!b.closest('#nbBody')&&/Счета и карты/.test(b.textContent)); if(!br) return;
    const d=document.createElement('div'); d.className='hm-bridge nb-br cl-gift'; d.id='clGift';
    d.innerHTML='<button class="nb-gift" id="clGiftB"><i class="fdots" aria-hidden="true"></i><i class="gw"></i><span class="m"><b>Акция уже ваша</b><span>'+(PMODE==='tok'?'Акция':'Single stock')+' на $10 — это бесплатно</span><em>Забрать подарок</em></span><span class="art">'+gbxH(136,'op2')+NBGL.map((g,i)=>'<span class="gl" style="--x:'+g[1]+'px;--y:'+g[2]+'px;--k:'+i+'">'+nbL(g[0])+'</span>').join('')+'</span></button>';
    br.before(d); d.querySelector('#clGiftB').onclick=()=>ngOpen(); }
  function nbOpened(){ if(!NBM.on||NBM.st!=='opening') return; nbMode(false,true); freshStart(); $('hmScroll').scrollTop=0; setTimeout(()=>nbPush('Брокерский счёт открыт. Можно покупать акции'),400); return; NBM.st='open'; const T=NBM.otc?NBM.otc.a:0; nbRender();
    if(T){ $('nbTot').textContent=fmt2(0); setTimeout(()=>{ const el=$('nbTot'); if(el) rollText(el,fmt2(T),1); },500); }
    requestAnimationFrame(()=>nbChart(true));
    nbPush('Брокерский счёт открыт'+(NBM.otc?' и '+NBX[NBM.otc.k].s+' куплена':'')+'. Заберите подарок — '+(PMODE==='tok'?'акция':'single stock')+' на $10'); }
  $('nboBack').innerHTML=$('cnBack').innerHTML;
  $('nboBack').onclick=()=>{ if(NBO===1||NBO===2) nboStep(NBO-1); else nboClose(); };
  $('nboX').onclick=nboClose;
  $('nboGo').onclick=()=>{ if($('nboGo').disabled) return; if(NBO===0) nboStep(1); else if(NBO===1) nboStep(2); else if(NBO===2) nboSign(); else nboFinish(); };
  $('nboMail').addEventListener('input',nboValid);
  ['nboCo'].forEach(id=>$(id).addEventListener('input',nboValid));
  ['nboInc','nboExp'].forEach(id=>$(id).addEventListener('input',e=>{ const el=e.target, d=el.value.replace(/\D/g,'').slice(0,9); el.value=d?group(d)+' $':''; nboValid(); }));
  $('nboLgI').innerHTML=nvI('user_1',14,2.4);
  $('scrNbO').addEventListener('click',e=>{ const t=e.target;
    const s=t.closest('[data-sel]'); if(s){ nboSel(s.dataset.sel); return; }
    const c=t.closest('.nbo-ch button'); if(c){ c.classList.toggle('on'); nboValid(); return; }
    if(t.closest('[data-doc]')){ toast('Документ откроется в просмотрщике PDF'); return; }
    if(t.closest('#nboOk')){ const o=$('nboOk'); o.classList.toggle('on'); o.setAttribute('aria-checked',o.classList.contains('on')); nboValid(); } });

  // ── gift picker: four shares dive into the box and fly back out to orbit it; the chosen one sits on top ──
  // ── gift picker (v174): cover-flow of stock cards; swipe the centre card UP — it flies into the 3D gift, then the result screen ──
  const ngLot=k=>PMODE==='tok'?nbP(k):r2(nbP(k)*SSF()), ngN=k=>Math.floor(10/ngLot(k)+1e-9), ngQt=k=>Math.floor(10/nbP(k)*10000)/10000, fq=v=>v.toFixed(4).replace('.',',');
  const NGK=['aapl','nvda','tsla','goog','amzn','msft','meta'], NGC={aapl:'#E6EBF5',nvda:'#8CDC3C',tsla:'#FF5A5A',goog:'#5A96FF',amzn:'#FFAA28',msft:'#4FC3F7',meta:'#5B8CFF'};
  let NGS=null, ngRaf=0, NGL=0, ngT=[], NGX={pos:2,tgt:2,v:0,drag:null,dy:0,fly:false};
  const ngTo=(f,ms)=>ngT.push(setTimeout(f,ms));
  const ngCards=()=>[...$('ngCar').children];
  function ngOpen(){ ngT.forEach(clearTimeout); ngT=[]; NGL=0; Object.assign(NGX,{pos:2,tgt:2,drag:null,dy:0,fly:false});
    $('ngCar').innerHTML=NGK.map((k,i)=>{ const x=NBX[k], p=nbP(k), y=x.y; return '<button class="ngx-c" data-g="'+k+'" role="option" style="--gc:'+NGC[k]+'"><i class="bd"></i>'+
      nbL(k)+'<b class="n">'+x.s+'</b><small>'+(PMODE==='tok'?x.t:x.t+'/100')+'</small>'+
      '<span class="px">'+fmt2(ngLot(k))+'</span><span class="ch'+(y<0?' dn':'')+'">'+nbPct(y)+' за год</span><span class="q">$10 = '+(PMODE==='tok'?fq(ngQt(k))+' '+x.t:ngN(k)+' шт. '+x.t+'/100')+'</span></button>'; }).join('');
    $('ngDots').innerHTML=NGK.map(()=>'<i></i>').join('');
    $('ngBox').className='gbx ngx-box'; $('ngStage').classList.remove('hit','arm');
    dev.classList.add('on-nbg'); $('scrNbG').setAttribute('aria-hidden','false'); syncStatus();
    cancelAnimationFrame(ngRaf); ngRaf=requestAnimationFrame(ngLoop); ngHintLoop(); }
  function ngClose(){ ngT.forEach(clearTimeout); ngT=[]; cancelAnimationFrame(ngRaf); ngRaf=0; dev.classList.remove('on-nbg'); $('scrNbG').setAttribute('aria-hidden','true'); syncStatus(); }
  function ngHintLoop(){ ngTo(()=>{ if(!dev.classList.contains('on-nbg')) return; const c=ngCards()[Math.round(NGX.pos)]; if(c&&!NGX.drag&&!NGX.fly&&!NGL){ c.classList.remove('nudge'); void c.offsetWidth; c.classList.add('nudge'); } ngHintLoop(); },3600); }
  const ngKick=()=>{ if(!ngRaf&&dev.classList.contains('on-nbg')) ngRaf=requestAnimationFrame(ngLoop); };
  function ngLoop(){ if(!dev.classList.contains('on-nbg')||document.hidden){ ngRaf=0; return; }
    if(!NGX.drag){ NGX.pos+=(NGX.tgt-NGX.pos)*.16; if(Math.abs(NGX.tgt-NGX.pos)<.002) NGX.pos=NGX.tgt; }
    const idle=!NGX.drag&&!NGX.fly&&NGX.pos===NGX.tgt&&NGX.dy===0&&NGX._drawn===NGX.pos; NGX._drawn=NGX.pos; if(idle){ ngRaf=0; return; }
    const ci=Math.round(NGX.pos), W=$('ngCar').clientWidth;
    ngCards().forEach((c,i)=>{ if(c.classList.contains('fly')) return; const d=i-NGX.pos, ad=Math.abs(d);
      const x=Math.sign(d)*Math.min(ad,2.4)*W*.44, sc=1-Math.min(ad,2)*.16, ry=-Math.max(-1,Math.min(1,d))*34, up=i===ci?NGX.dy:0;
      c.style.transform='translateX('+x.toFixed(1)+'px) translateY('+(up+ad*14).toFixed(1)+'px) perspective(700px) rotateY('+ry.toFixed(1)+'deg) scale('+(sc+(i===ci?Math.min(0,NGX.dy)/-900:0)).toFixed(3)+')';
      c.style.zIndex=String(100-Math.round(ad*10)); c.style.opacity=String(Math.max(0,1-Math.max(0,ad-1.6)*.9).toFixed(2)); c.classList.toggle('on',i===ci); });
    const k=NGK[Math.max(0,Math.min(NGK.length-1,ci))]; if(k!==NGS){ NGS=k; $('ngHero').style.setProperty('--gc',NGC[k]); [...$('ngDots').children].forEach((d,i)=>d.classList.toggle('on',i===ci)); }
    const arm=NGX.dy<-70; $('ngStage').classList.toggle('arm',arm||!!NGX.drag&&NGX.dy<-12); $('ngBox').classList.toggle('op',arm||NGX.fly);
    ngRaf=requestAnimationFrame(ngLoop); }
  // pointer: horizontal = browse, vertical (up) on the centre card = take
  $('ngCar').addEventListener('pointerdown',e=>{ if(NGX.fly||NGL) return; ngKick(); NGX.drag={x:e.clientX,y:e.clientY,p:NGX.pos,ax:null,t:performance.now(),moved:false}; $('ngCar').setPointerCapture(e.pointerId); });
  $('ngCar').addEventListener('pointermove',e=>{ const d=NGX.drag; if(!d) return; ngKick(); const dx=e.clientX-d.x, dy=e.clientY-d.y;
    if(!d.ax&&Math.hypot(dx,dy)>8) d.ax=Math.abs(dx)>Math.abs(dy)?'x':'y'; if(d.ax) d.moved=true;
    if(d.ax==='x'){ const W=$('ngCar').clientWidth*.44; NGX.pos=Math.max(-.4,Math.min(NGK.length-.6,d.p-dx/W)); }
    if(d.ax==='y') NGX.dy=Math.min(20,dy<0?dy:dy*.25); });
  const ngUp=e=>{ const d=NGX.drag; if(!d) return; ngKick(); NGX.drag=null;
    if(d.ax==='x'){ const v=(e.clientX-d.x)/Math.max(1,performance.now()-d.t); NGX.tgt=Math.max(0,Math.min(NGK.length-1,Math.round(NGX.pos-v*1.2))); }
    else if(d.ax==='y'&&NGX.dy<-70) ngTake();
    else if(!d.moved){ const c=e.target.closest('.ngx-c'); if(c){ const i=ngCards().indexOf(c); if(i!==Math.round(NGX.pos)) NGX.tgt=i; else { c.classList.remove('nudge'); void c.offsetWidth; c.classList.add('nudge'); } } }
    if(!NGX.fly) NGX.dy=0; };
  $('ngCar').addEventListener('pointerup',ngUp); $('ngCar').addEventListener('pointercancel',ngUp);
  $('ngCar').addEventListener('keydown',e=>{ ngKick(); if(e.key==='ArrowLeft') NGX.tgt=Math.max(0,NGX.tgt-1); else if(e.key==='ArrowRight') NGX.tgt=Math.min(NGK.length-1,NGX.tgt+1); else if(e.key==='ArrowUp'||e.key==='Enter'){ e.preventDefault(); ngTake(); } });
  function ngTake(){ if(NGX.fly) return; NGX.fly=true; ngKick(); const i=Math.round(NGX.tgt=NGX.pos=Math.round(NGX.pos)), c=ngCards()[i], k=NGK[i]; NGS=k;
    try{ navigator.vibrate&&navigator.vibrate(14); }catch(_){}
    const cr=c.getBoundingClientRect(), br=$('ngBox').getBoundingClientRect(), dx=br.left+br.width/2-(cr.left+cr.width/2), dy=br.top+br.height*.42-(cr.top+cr.height/2);
    const from=getComputedStyle(c).transform; c.classList.add('fly'); $('ngBox').classList.add('op');
    c.animate([{transform:from,opacity:1},{transform:'translate('+(dx*.55).toFixed(0)+'px,'+(dy*.7-40).toFixed(0)+'px) scale(.62) rotate(-6deg)',opacity:1,offset:.55},{transform:'translate('+dx.toFixed(0)+'px,'+dy.toFixed(0)+'px) scale(.14) rotate(8deg)',opacity:0}],{duration:720,easing:'cubic-bezier(.45,0,.3,1)',fill:'forwards'});
    ngCards().forEach(o=>{ if(o!==c) o.classList.add('fade'); });
    ngTo(()=>{ const b=$('ngBox'); b.classList.remove('op'); b.classList.add('jg'); $('ngStage').classList.add('hit'); },700);
    ngTo(()=>{ $('ngBox').classList.remove('jg'); $('ngBox').classList.add('shk'); },1300);
    ngTo(()=>{ $('ngBox').classList.remove('shk'); nrOpen(k); },2050); }
  // «Мне повезёт»: the carousel spins and stops on a random card, then it goes into the gift by itself
  function ngLuck(){ if(NGL||NGX.fly) return; NGL=1; const end=Math.floor(Math.random()*NGK.length); let s=0; const n=10+Math.floor(Math.random()*3);
    const tick=()=>{ s++; ngKick(); NGX.tgt=s<n?(Math.round(NGX.tgt)+1)%NGK.length:end; if(s<n) ngTo(tick,70+Math.pow(s/n,2.2)*260); else ngTo(()=>{ NGL=0; ngTake(); },900); }; tick(); }
  function ngTerms(){ openSheet('<div class="lts"><div class="lts-h"><b>Условия акции</b>'+XB+'</div><div class="lts-rc"><div class="lts-rw" style="border-top:0"><span>Кому</span><b>Новым клиентам</b></div><div class="lts-rw"><span>Подарок</span><b>'+(PMODE==='tok'?'Акция':'Single stock')+' на сумму до $10</b></div><div class="lts-rw"><span>Зачисление</span><b>В течение 1 рабочего дня</b></div><div class="lts-rw"><span>Продать</span><b>В любой момент</b></div></div><div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>','ltsh'); }
  $('ngBack').innerHTML=$('cnBack').innerHTML; $('ngBack').onclick=ngClose;
 $('ngInfo').onclick=ngTerms;


  // ── the gift opens ──
  function nrOpen(k){ const x=NBX[k], TK=PMODE==='tok', n=ngN(k), q=TK?ngQt(k):n/100, cost=TK?10:r2(n*ngLot(k)), QT=TK?fq(q)+' '+x.t:n+' шт. '+x.t+'/100'; NBM.pick={k,q}; $('nrCoin').innerHTML=nbL(k);
    $('nrCard').classList.remove('open'); $('nrSc').scrollTop=0;
    $('nrCard').innerHTML='<button class="nr-hd" id="nrHd" aria-expanded="false">'+nbL(k)+'<span class="tx"><b>'+x.s+' · '+x.t+(TK?'':'/100')+'</b><small>'+QT+' · '+fmt2(cost)+'</small></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 9.5l6 6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'+
      '<div class="nr-bd"><div>'+[['Статус','В работе'],['Количество',QT],[TK?'Цена за 1 акцию':'Цена за 1 шт.',fmt2(ngLot(k))],['Стоимость',fmt2(cost)],['Комиссия','$0'],['Зачислим на','GL 789099']].map(r=>'<div class="rw"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>').join('')+'</div></div>';
    $('nrHd').onclick=()=>{ const c=$('nrCard'), on=!c.classList.contains('open'); c.classList.toggle('open',on); $('nrHd').setAttribute('aria-expanded',on);
      if(on) setTimeout(()=>{ const sc=$('nrSc'), r=c.getBoundingClientRect(), b=document.querySelector('#scrNbR .nr-bot').getBoundingClientRect(); if(r.bottom>b.top) sc.scrollBy({top:r.bottom-b.top+12,behavior:'smooth'}); },380); };
    $('nrCf').classList.remove('go'); $('nrCf').innerHTML=''; dev.classList.add('on-nbr'); $('scrNbR').setAttribute('aria-hidden','false'); syncStatus();
    setTimeout(()=>{ if(dev.classList.contains('on-nbr')) nbConf($('nrCf'),48); },1550); }
  $('nrGo').onclick=()=>{ const p=NBM.pick; if(!p) return; const was=nbTotal(); NBM.gift=p; ngT.forEach(clearTimeout); ngT=[]; cancelAnimationFrame(ngRaf); ngRaf=0;
    if(!NBM.on){ ['on-nbr','on-nbg'].forEach(c=>dev.classList.remove(c)); ['scrNbR','scrNbG'].forEach(id=>$(id).setAttribute('aria-hidden','true')); if(dev.classList.contains('cr')||dev.classList.contains('se')) goInv();
      const g=$('clGift'); if(g){ g.style.transition='opacity .35s,transform .35s'; g.style.opacity='0'; g.style.transform='scale(.96)'; setTimeout(()=>g.remove(),360); } $('hmScroll').scrollTop=0; syncStatus(); NBM.gift=null;
      setTimeout(()=>toast('Подарок в портфеле — '+NBX[p.k].s+', в работе'),600); return; }
    ['on-nbr','on-nbg'].forEach(c=>dev.classList.remove(c)); ['scrNbR','scrNbG'].forEach(id=>$(id).setAttribute('aria-hidden','true'));
    if(dev.classList.contains('cr')||dev.classList.contains('se')) goInv();
    nbRender(); $('hmScroll').scrollTop=0; $('nbTot').textContent=fmt2(was); setTimeout(()=>{ const el=$('nbTot'); if(el) rollText(el,fmt2(nbTotal()),1); },450);
    requestAnimationFrame(()=>nbChart(true)); syncStatus();
    setTimeout(()=>{ const r=document.querySelector('#nbTopB [data-gift]'); if(r){ r.classList.remove('flash'); void r.offsetWidth; r.classList.add('flash'); } },700);
    setTimeout(()=>toast('Подарок в портфеле — '+NBX[p.k].s+', в работе'),600); };
  function nrOpSheet(){ const p=NBM.pick||NBM.gift; if(!p) return; const x=NBX[p.k];
    openSheet('<div class="lts"><div class="lts-h"><b>Подарок</b>'+XB+'</div><div class="lts-sum"><b>'+fmt2(PMODE==='tok'?10:r2(Math.round(p.q*100)*ngLot(p.k)))+'</b><span>'+x.s+' · '+(PMODE==='tok'?fq(p.q)+' '+x.t:Math.round(p.q*100)+' шт. '+x.t+'/100')+'</span></div>'+
      '<div class="lts-rc"><div class="lts-rw" style="border-top:0"><span>Статус</span><b>В работе</b></div><div class="lts-rw"><span>Операция</span><b>Зачисление ценных бумаг</b></div><div class="lts-rw"><span>Счёт</span><b>GL 789099</b></div><div class="lts-rw"><span>Комиссия</span><b>$0</b></div><div class="lts-rw"><span>Дата</span><b>Сегодня</b></div></div><div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>','ltsh'); }
  $('nrOp').onclick=nrOpSheet;

  // ── home wiring ──
  $('nbHero').addEventListener('click',e=>{ if(e.target.closest('[data-nbopen]')) nboOpen(); });
  $('nbTt').addEventListener('click',()=>{ if(NBM.st==='open') toast('Брокерский счёт GL 789099'); });
  $('nbBody').addEventListener('click',e=>{ const t=e.target;
    if(t.closest('#nbGiftB')){ ngOpen(); return; }
    if(t.closest('[data-nblt]')){ goLt(); return; }
    const sh=t.closest('[data-nsec]'); if(sh){ sh.parentNode.classList.toggle('open'); return; }
    const ch=t.closest('#nbChips button'); if(ch){ if(ch.classList.contains('fl')) toast('Фильтры — скоро'); else ch.classList.toggle('on'); return; }
    const r=t.closest('[data-nbr]'); if(r){ if(r.hasAttribute('data-gift')) nrOpSheet(); else toast('Позиция '+NBX[r.dataset.nbr].t+' — куплена с карты'); return; }
    const ev=t.closest('#nbCatNew [data-ev]'); if(ev){ goEv(ev.dataset.ev); return; }
    const c=t.closest('[data-nbk]'); if(c){ const k=c.dataset.nbk; if(t.closest('.b')){ if(NBM.st!=='open'){ if(window.__DS){ window.__DS.open('noacc'); return; } if(k==='aapl') goStock(); else nbStock(k); return; } if(NBX[k].px) nbStock(k); else nbbOpen(k); return; }
      if(k==='aapl'){ goStock(); return; }
      toast('В прототипе открывается только Apple'); c.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(4px)'},{transform:'none'}],{duration:280}); } });

  // ═════════ v156: swipe-to-confirm — the zone reacts to the drag (--p 0…1 on .gz) ═════════
  (()=>{ const kb=$('knob'), gz=$('gz'), lb=$('gzLbl'); let armed=false, drag=false, lblWas='';
    const TR=106;
    const read=()=>{ const m=/translateY\((-?[\d.]+)px\)/.exec(kb.style.transform||''); return m?Math.min(1,Math.max(0,-parseFloat(m[1])/TR)):0; };
    const arm=on=>{ if(on===armed) return; armed=on; gz.classList.toggle('gz-arm',on);
      if(on){ if(/^Проведите/.test(lb.textContent)){ lblWas=lb.textContent; lb.textContent=lb.textContent.replace(/^Проведите/,'Отпустите'); } if(drag&&navigator.vibrate) try{navigator.vibrate(10)}catch(e){} }
      else if(lblWas&&/^Отпустите/.test(lb.textContent)){ lb.textContent=lblWas; lblWas=''; } };
    const sync=()=>{ const p=read(); gz.classList.toggle('gz-sp',kb.classList.contains('spring')); gz.style.setProperty('--p',p.toFixed(3)); gz.classList.toggle('gz-mv',p>0.01); arm(p>=0.8&&!kb.classList.contains('busy')); };
    new MutationObserver(sync).observe(kb,{attributes:true,attributeFilter:['style','class']});
    kb.addEventListener('pointerdown',()=>{ drag=true; gz.classList.add('gz-drg'); });
    const up=()=>{ drag=false; gz.classList.remove('gz-drg'); };
    kb.addEventListener('pointerup',up); kb.addEventListener('pointercancel',up);
    sync(); })();

  // v165: stock page — «Информация» goes below «Статистика»; the learn card is only for newbies
  (()=>{ const inf=$('inf'), st=$('stsOpen')&&$('stsOpen').closest('.cd'); if(inf&&st&&st.parentNode) st.after(inf); })();

  // v170: prediction stories — the ball becomes a rotating dotted globe (canvas, 2° land grid)
  (()=>{ const B=atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAfvAAAAAAAAAAAAAAAAAAAAAAAAx37///+AAAAAGoABAAAAAAAAAAAAAIe8P///wAA8AAAAAA0AAAAAAAAAAAwADw////4AAIAAAAAAHAAAAAAAAAAALivwAf//wAAAAADAAP/wAHIAAAAAADsj38AH/+gAAAAAEAH///OAAAAgBgAAfw3/gB/+gAAAgAMHe///+/9gBAP/7/nbdrwD/+AAAH/Ag7H////////8H//////g8H/gAAAf/6//f////////Mf/////9H4D4A+AA+ev///////////AP/////4A0B4AAAD5/////////////Af1////gHgA4AAAP5///////////LwAHgD///gH0AAAAAG4/////////+AMAABAC///4D+AAAAGCx/////////4A4AAAAB////n/gAAAOCR/////////4A4AAAAAf///3/wAAAbH//////////9AgAAAAAP/////gAAADf//////////9AAAAAAAF////0YAAAB///////////8AAAAAAAD////8EAAAB///v///////5AAAAAAAD////+AAAAB/f5f///////wAAAAAAAD////gAAAAfxnwP///////jgAAAAAAD///+AAAAAPCb3///////+AAAAAAAAD///8AAAAAfCJf//////+ECAAAAAAAB///8AAAAAGDRf///////mMAAAAAAAA///8AAAAAH+Ai///////E8AAAAAAAAf//wAAAAAP/AA///////BgAAAAAAAAP//gAAAAAf/73///////gAAAAAAAAAD/AQAAAAAf//9/f/////gAAAAAAAAAF+AQAAAAB///+/n/////AAAAAAAAAAC+AAAAAAB///+fwH///+AAAAAAAAAAAeAwAAAAD////f/D///8gAAAAAAAAAAeGEAAAAD////v+B/j/AAAAAAAAAAAAPMAwAAAD////n+AfB+gAAAAAAAAAAAD8AAAAAD////34AeBfAgAAAAAAAAAAAPAAAAAH////3gAcAfAgAAAAAAAAAAADAAAAAD////6AAcAfgwAAAAAAAAAAABBwAAAD////8wAMATAIAAAAAAAAAAAAr/AAAB/////gAIASAAAAAAAAAAAAAAH/gAAA/////gACAAAIAAAAAAAAAAAAH/8AAAYH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAc+gAAAAAAAAAAAAP//gAAAD//4AAAAMeBgAAAAAAAAAAAP//8AAAB//wAAAAGdCuAAAAAAAAAAAf///AAAA//wAAAACAAHgAAAAAAAAAAP///gAAA//wAAAAB4AHggAAAAAAAAAH///AAAAf/wAAAAACIDQIAAAAAAAAAH//+AAAAf/wAAAAAAAAAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAD//8AAAA//wgAAAAAHxgBAAAAAAAAAA//8AAAA//zgAAAAAf/gAAAAAAAAAAAf/8AAAA//DgAAAAAf/gAAAAAAAAAAAf/8AAAAf/DAAAAAD//4CAAAAAAAAAAf/wAAAAf/DAAAAAH//4AAAAAAAAAAAf/AAAAAf+DAAAAAH//8AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/8AAAAAH4AAAAAAD//+AAAAAAAAAAA/8AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAACAP4AAAAAAAAAAB/wAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAGAAAAAAAAB6AAAAAAAAAAAAAAAAAwAMAAAAAAAAA8AAAAAAAAAAAAAAAAAQAYAAAAAAAAB4AAAAAAAAAAAAAAAAAAAwAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAACAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAA8AAf/8d/AAAAAAAAAAAAkAAAAAAACP/+H//////AAAAAAAAAAA+AAAAIf////+////////AAAAAAAOMKPAAAB///////////////gAAAH/8D//8AAAH//////////////4AAAF/////8AAAP///////////////4AAIf/////gwBwf///////////////4AAAH//////AAD////////////////wAAA///////+f//////////////////A/wH///////////////////////////////////////////////////////////////////////////////////////'), W=180, H=90; const P=[];
    for(let i=0;i<W*H;i++){ if(B.charCodeAt(i>>3)>>(7-(i&7))&1){ const la=(89-2*Math.floor(i/W))*Math.PI/180, lo=(-179+2*(i%W))*Math.PI/180; P.push([Math.cos(la),Math.sin(la),lo]); } }
    const TL=-22*Math.PI/180, ct=Math.cos(TL), st=Math.sin(TL); let raf=0;
    function draw(cv,t){ const d=window.devicePixelRatio||1, S=cv.clientWidth; if(!S) return; if(cv.width!==S*d){ cv.width=cv.height=S*d; } const g=cv.getContext('2d'), R=S*d/2;
      g.clearRect(0,0,cv.width,cv.height);
      const bg=g.createRadialGradient(R*.7,R*.55,R*.1,R,R,R); bg.addColorStop(0,'#5FB7BE'); bg.addColorStop(.55,'#2C6E78'); bg.addColorStop(1,'#0E2F3A');
      g.fillStyle=bg; g.beginPath(); g.arc(R,R,R,0,Math.PI*2); g.fill();
      const rot=t*0.00022; g.fillStyle='#fff';
      for(const [cl,sl,lo] of P){ const a=lo+rot, x=cl*Math.sin(a), z0=cl*Math.cos(a), y0=sl, y=y0*ct-z0*st, z=y0*st+z0*ct; if(z<=0.02) continue;
        const r=(0.55+0.9*z)*d*0.9; g.globalAlpha=Math.min(1,0.25+z*0.9); g.fillRect(R+x*R*.97-r/2,R-y*R*.97-r/2,r,r); }
      g.globalAlpha=1;
      const rim=g.createRadialGradient(R,R,R*.72,R,R,R); rim.addColorStop(0,'rgba(160,240,245,0)'); rim.addColorStop(1,'rgba(160,240,245,.55)'); g.fillStyle=rim; g.beginPath(); g.arc(R,R,R,0,Math.PI*2); g.fill();
      const hl=g.createRadialGradient(R*.62,R*.45,0,R*.62,R*.45,R*.7); hl.addColorStop(0,'rgba(255,255,255,.28)'); hl.addColorStop(1,'rgba(255,255,255,0)'); g.fillStyle=hl; g.beginPath(); g.arc(R,R,R,0,Math.PI*2); g.fill(); }
    // runs only while the first prediction story is on screen, at ~30 fps; otherwise fully idle
    let last=0;
    function loop(t){ const b=document.querySelector('#pmSto.on .sto-s.on .s1 .ball'); if(!b||document.hidden){ raf=0; return; } raf=requestAnimationFrame(loop);
      if(t-last<32) return; last=t;
      let cv=b.querySelector('canvas.glb'); if(!cv){ cv=document.createElement('canvas'); cv.className='glb'; b.appendChild(cv); }
      draw(cv,t); }
    const kick=()=>{ if(!raf&&document.querySelector('#pmSto.on .sto-s.on .s1 .ball')) raf=requestAnimationFrame(loop); };
    const so=document.getElementById('pmSto'); if(so) new MutationObserver(kick).observe(so,{attributes:true,subtree:true,attributeFilter:['class']});
    document.addEventListener('visibilitychange',kick); })();

  // v171: tapping a bottom tab returns its screen to the top (smooth when it is already the current tab)
  document.addEventListener('click',e=>{ const b=e.target.closest('.hm-tab .tabs button'); if(!b) return; const same=b.classList.contains('on');
    setTimeout(()=>{ ['hmScroll','crScroll','seScroll'].forEach(id=>{ const el=$(id); if(el&&el.scrollTop) el.scrollTo({top:0,behavior:same&&el.offsetParent?'smooth':'auto'}); }); },0); },true);

  // ═════════ v187: Пополнить / Вывести свободный остаток — the crypto buy/sell format (two amount cards, card chip, keypad) + the shared swipe confirm ═════════
  let MVF=false;
  (()=>{ const RT={KZT:1,USD:RATE,EUR:590,RUB:5.4}, SYM={USD:'$',EUR:'€',RUB:'₽',KZT:'₸'};
    const MVW={free:{USD:199.52,EUR:0},nb:{USD:0,EUR:0}}, MV={mode:'dep',a:'fr:USD',t:'USD',f:'pay',pay:'',get:''}, MC0={}; let MVO=null, mvT=0;
    // cards → their accounts, as in the Figma transfer sheet
    const MVP=[{id:'fr',n:'Freedom Card',m:'** 3097',bal:783689,ic:'green',acc:[['USD','5906',640.79],['EUR','7306',300],['RUB','7712',40]]},
      {id:'iv',n:'Invest Card',m:'** 6565',bal:41489,ic:'grey',acc:[['KZT','0679',4890.73],['USD','5906',64.43],['EUR','7306',3],['RUB','7712',0]]}];
    const MVA=[]; MVP.forEach(p=>p.acc.forEach(([cur,mk,raw])=>MVA.push({id:p.id+':'+cur,pid:p.id,n:p.n,cur,raw,ic:p.ic,s:cur+' **'+mk,sh:p.n+' · '+cur+' **'+mk})));
    const card=()=>MVA.find(c=>c.id===MV.a)||MVA[0];
    const fr=()=>NBM.on?MVW.nb:MVW.free, freeOf=()=>fr()[MV.t], setFree=v=>{ fr()[MV.t]=Math.round(v*100)/100; }, freeUSD=()=>fr().USD+fr().EUR*RT.EUR/RT.USD;
    const dep=()=>MV.mode==='dep';
    const payCur=()=>dep()?card().cur:MV.t, getCur=()=>dep()?MV.t:card().cur;
    const num=s=>parseFloat((s||'').replace(',','.'))||0, str=v=>{ const r=Math.round(v*100)/100; return r?String(r).replace('.',','):''; };
    const conv=(v,from,to)=>from===to?v:v*RT[from]/RT[to];
    const money=(v,c)=>c==='USD'?fmt2(v):c==='KZT'?group(String(Math.round(v)))+' ₸':dec(v)+' '+SYM[c];
    const sfx=(v,c)=>{ const r=Math.round(v*100)/100; return (Number.isInteger(r)?group(String(r)):dec(r))+' '+SYM[c]; };
    const rateTxt=(a,b)=>{ if(a===b) return 'Без конвертации'; const u=RT[a]>=RT[b]?a:b, o=u===a?b:a, r=RT[u]/RT[o]; return '1 '+SYM[u]+' = '+(o==='KZT'?String(Math.round(r*100)/100).replace('.',','):dec(r,2))+' '+SYM[o]; };
const CUSVG={"USD": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#4EBC73\" fill-opacity=\"0.2\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.0001 8C13.8784 8 11.8435 8.84287 10.3432 10.3432C8.84287 11.8435 8 13.8784 8 16.0001C8.00602 17.961 8.73199 19.8514 10.04 21.3122L12.8321 18.5282C12.8282 18.4856 12.8282 18.4427 12.8321 18.4002C12.8321 18.188 12.9164 17.9845 13.0664 17.8345C13.2164 17.6844 13.4199 17.6002 13.6321 17.6002C13.6321 17.6002 13.7041 17.6002 13.7441 17.6002L14.8401 16.4721L14.4081 16.3281C13.9374 16.1617 13.5303 15.8527 13.2435 15.444C12.9567 15.0353 12.8045 14.5474 12.8081 14.0481V13.6001C12.8081 12.9636 13.0609 12.3531 13.511 11.903C13.9611 11.4529 14.5716 11.2001 15.2081 11.2001V10.4C15.2081 10.1879 15.2924 9.98437 15.4424 9.83434C15.5925 9.68431 15.7959 9.60003 16.0081 9.60003C16.2203 9.60003 16.4238 9.68431 16.5738 9.83434C16.7238 9.98437 16.8081 10.1879 16.8081 10.4V11.2001C17.2358 11.2032 17.6549 11.3205 18.022 11.5399C18.3891 11.7593 18.6909 12.0729 18.8962 12.4481L21.2962 10.048C19.8407 8.74074 17.9565 8.01213 16.0001 8Z\" fill=\"#4EBC73\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.6004 13.5998C17.6004 13.3876 17.5162 13.1842 17.3661 13.0341C17.2161 12.8841 17.0126 12.7998 16.8004 12.7998H15.2004C14.9882 12.7998 14.7847 12.8841 14.6347 13.0341C14.4847 13.1842 14.4004 13.3876 14.4004 13.5998V14.0478C14.4 14.2155 14.4522 14.3792 14.5499 14.5155C14.6475 14.6519 14.7855 14.7542 14.9444 14.8078L16.1364 15.2078L17.6244 13.7118C17.6118 13.6756 17.6038 13.638 17.6004 13.5998Z\" fill=\"#4EBC73\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.3997 18.4002C14.3997 18.6124 14.484 18.8159 14.634 18.9659C14.784 19.1159 14.9875 19.2002 15.1997 19.2002H16.7997C17.0119 19.2002 17.2154 19.1159 17.3654 18.9659C17.5155 18.8159 17.5998 18.6124 17.5998 18.4002V17.9602C17.6002 17.7925 17.5479 17.6289 17.4503 17.4925C17.3527 17.3561 17.2146 17.2538 17.0557 17.2002L14.8397 16.4722L13.6797 17.6242C13.8736 17.6436 14.0538 17.7332 14.1864 17.8761C14.319 18.019 14.3948 18.2053 14.3997 18.4002Z\" fill=\"url(#uA)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.0003 15.9998C23.9983 14.8718 23.7578 13.7569 23.2945 12.7283C22.8313 11.6997 22.1557 10.7808 21.3122 10.0317L18.9122 12.4318C19.1068 12.7849 19.2113 13.1806 19.2162 13.5838C19.2162 13.796 19.1319 13.9995 18.9819 14.1495C18.8318 14.2995 18.6283 14.3838 18.4162 14.3838C18.2232 14.386 18.036 14.3184 17.889 14.1934C17.742 14.0684 17.6451 13.8946 17.6162 13.7038L16.1281 15.1918L17.5522 15.6638C18.0303 15.8235 18.4461 16.1296 18.7405 16.5389C19.0349 16.9482 19.1929 17.4397 19.1922 17.9439V18.3839C19.1922 19.0204 18.9393 19.6309 18.4892 20.081C18.0391 20.531 17.4287 20.7839 16.7921 20.7839V21.5839C16.7921 21.7961 16.7079 21.9996 16.5578 22.1496C16.4078 22.2996 16.2043 22.3839 15.9921 22.3839C15.78 22.3839 15.5765 22.2996 15.4264 22.1496C15.2764 21.9996 15.1921 21.7961 15.1921 21.5839V20.7839C14.5772 20.7848 13.9853 20.5496 13.5387 20.1268C13.0921 19.704 12.8249 19.126 12.7921 18.5119L10.04 21.3119C10.7891 22.1554 11.708 22.831 12.7366 23.2942C13.7652 23.7575 14.8801 23.998 16.0081 24C18.1285 23.9978 20.1613 23.154 21.6599 21.6539C23.1585 20.1539 24.0003 18.1202 24.0003 15.9998Z\" fill=\"url(#uB)\"/><defs><linearGradient id=\"uA\" x1=\"14.7517\" y1=\"19.0882\" x2=\"16.9037\" y2=\"16.9282\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4EBC73\" stop-opacity=\"0.4\"/><stop offset=\"1\" stop-color=\"#4EBC73\"/></linearGradient><linearGradient id=\"uB\" x1=\"13.0161\" y1=\"24.32\" x2=\"24.3123\" y2=\"13.0158\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4EBC73\" stop-opacity=\"0.4\"/><stop offset=\"1\" stop-color=\"#4EBC73\"/></linearGradient></defs></svg>", "EUR": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#4EBC73\" fill-opacity=\"0.2\"/><path d=\"M15.9913 24C17.5779 24.0024 19.1292 23.5327 20.4481 22.6508C21.7669 21.7689 22.7935 20.5145 23.3974 19.0474C24.0013 17.5803 24.155 15.9667 23.8391 14.412C23.5232 12.8572 22.752 11.4315 21.6234 10.3164L19.2913 12.6962C19.3394 12.8719 19.3634 13.0534 19.3627 13.2356V13.8702C19.3658 13.9709 19.3469 14.0711 19.3071 14.1637C19.2569 14.3253 19.1563 14.4667 19.02 14.5671C18.8837 14.6675 18.7189 14.7217 18.5496 14.7217C18.3803 14.7217 18.2155 14.6675 18.0792 14.5671C17.9429 14.4667 17.8422 14.3253 17.792 14.1637L15.0632 16.9163C15.222 16.9414 15.3652 17.0259 15.4641 17.1525C15.563 17.2792 15.6101 17.4386 15.5961 17.5987C15.582 17.7588 15.5077 17.9075 15.3882 18.015C15.2687 18.1224 15.1129 18.1805 14.9522 18.1775H14.0637V18.5345C14.046 18.6737 14.0611 18.8151 14.1079 18.9474C14.1548 19.0796 14.232 19.1991 14.3335 19.296C14.4404 19.393 14.5657 19.4676 14.7019 19.5153C14.8382 19.563 14.9826 19.5828 15.1267 19.5737H16.6418C16.9512 19.5737 17.205 19.2881 17.4351 19.1056C17.5334 19.0138 17.6106 18.9017 17.6612 18.777C17.7119 18.6524 17.7349 18.5182 17.7286 18.3838V17.9237C17.7202 17.8845 17.7202 17.8439 17.7286 17.8047C17.7257 17.7625 17.7257 17.72 17.7286 17.6778C17.7704 17.5003 17.8722 17.3427 18.0167 17.2314C18.1611 17.1202 18.3395 17.0621 18.5218 17.067C18.7074 17.0632 18.8884 17.1247 19.0334 17.2407C19.1783 17.3566 19.278 17.5197 19.3151 17.7016C19.3151 17.7016 19.3151 17.7492 19.3151 17.773V17.892V18.6218C19.3127 18.9236 19.2457 19.2214 19.1184 19.4951C18.9911 19.7688 18.8066 20.012 18.5774 20.2083C18.0889 20.7132 17.4301 21.0186 16.7291 21.065H15.0553C14.3398 21.0212 13.6652 20.7164 13.1594 20.2083C12.9102 19.9898 12.7125 19.7189 12.5804 19.415L10.3672 21.6758C11.8613 23.163 13.8832 23.9986 15.9913 24Z\" fill=\"url(#eA)\"/><path d=\"M17.7525 14.108C17.7186 14.025 17.7023 13.9358 17.7049 13.8462V13.4416C17.7112 13.3072 17.6883 13.173 17.6376 13.0484C17.5869 12.9238 17.5097 12.8116 17.4114 12.7198C17.1924 12.5297 16.9077 12.4329 16.6182 12.4501H15.1268C14.9834 12.4407 14.8395 12.4597 14.7034 12.506C14.5673 12.5523 14.4416 12.6249 14.3336 12.7198C14.2353 12.8116 14.1581 12.9238 14.1074 13.0484C14.0567 13.173 14.0338 13.3072 14.0401 13.4416V14.0921H14.9285C15.0989 14.0921 15.2624 14.1598 15.3829 14.2803C15.5034 14.4008 15.5711 14.5642 15.5711 14.7346C15.5711 15.0916 15.2776 15.5755 14.9285 15.5755H14.0639V16.9161H14.9523C14.9893 16.9124 15.0265 16.9124 15.0634 16.9161L17.7922 14.1556C17.7922 14.1556 17.7604 14.1318 17.7525 14.108Z\" fill=\"#4EBC73\"/><path d=\"M15.9919 8.00009C14.4077 8.0009 12.8594 8.47228 11.5436 9.35442C10.2277 10.2366 9.20349 11.4897 8.60095 12.9548C7.9984 14.42 7.84465 16.0311 8.15922 17.5838C8.47378 19.1364 9.24247 20.5607 10.3678 21.6758L12.5889 19.4388C12.4695 19.1748 12.4099 18.8877 12.4144 18.5979V18.003H11.6846C11.5142 18.003 11.3507 17.9353 11.2302 17.8148C11.1097 17.6943 11.042 17.5309 11.042 17.3605C11.042 17.1901 11.1097 17.0266 11.2302 16.9061C11.3507 16.7856 11.5142 16.7179 11.6846 16.7179H12.4144V15.3773H11.6846C11.5142 15.3773 11.3507 15.3096 11.2302 15.1892C11.1097 15.0687 11.042 14.9052 11.042 14.7348C11.042 14.5644 11.1097 14.401 11.2302 14.2805C11.3507 14.16 11.5142 14.0923 11.6846 14.0923H12.4144V13.2118C12.424 12.9057 12.5 12.6054 12.6369 12.3315C12.7738 12.0576 12.9686 11.8166 13.2076 11.6253C13.735 11.1764 14.4114 10.9415 15.1035 10.9669H16.8248C17.5041 10.9406 18.1669 11.1795 18.6731 11.6332C19.0002 11.9163 19.2327 12.2928 19.3395 12.712L21.6716 10.3323C20.9255 9.58812 20.0396 8.99895 19.0648 8.59869C18.09 8.19843 17.0457 7.99499 15.9919 8.00009Z\" fill=\"#4EBC73\"/><defs><linearGradient id=\"eA\" x1=\"13.1515\" y1=\"24.468\" x2=\"24.4633\" y2=\"13.1562\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4EBC73\" stop-opacity=\"0.4\"/><stop offset=\"1\" stop-color=\"#4EBC73\"/></linearGradient></defs></svg>", "RUB": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#4EBC73\" fill-opacity=\"0.2\"/><path d=\"M18.0693 15.5187C18.1724 15.4295 18.2544 15.3185 18.3093 15.1938C18.3642 15.0691 18.3906 14.9338 18.3867 14.7976V13.6011L16.1885 15.8198H17.2916C17.4348 15.8245 17.5776 15.8003 17.7112 15.7486C17.8449 15.6968 17.9667 15.6186 18.0693 15.5187Z\" fill=\"#4EBC73\"/><path d=\"M21.6322 10.3364L19.8625 12.1352C20.0085 12.414 20.0847 12.7239 20.0847 13.0385V15.0591C20.0793 15.3736 20.0055 15.6832 19.8685 15.9664C19.7315 16.2496 19.5345 16.4997 19.2911 16.6994C18.7737 17.1692 18.0934 17.4193 17.3944 17.3967H15.0137V17.7454H15.8073C15.9777 17.7454 16.1412 17.813 16.2618 17.9334C16.3823 18.0537 16.4501 18.217 16.4501 18.3872C16.4501 18.5574 16.3823 18.7207 16.2618 18.8411C16.1412 18.9614 15.9777 19.0291 15.8073 19.0291H15.0137V20.4395C15.0137 20.6644 14.9242 20.8801 14.765 21.0391C14.6057 21.1981 14.3898 21.2874 14.1645 21.2874C13.9393 21.2874 13.7234 21.1981 13.5641 21.0391C13.4049 20.8801 13.3154 20.6644 13.3154 20.4395V19.0132H13.0218L10.3633 21.6836C11.8703 23.1757 13.9091 24.009 16.0314 24.0001C17.0822 23.9957 18.1219 23.7846 19.0911 23.379C20.0602 22.9734 20.9399 22.3811 21.6798 21.6361C22.4197 20.891 23.0054 20.0077 23.4035 19.0366C23.8015 18.0655 24.0041 17.0257 23.9997 15.9764C23.9953 14.9271 23.7839 13.889 23.3777 12.9213C22.9715 11.9536 22.3783 11.0752 21.6322 10.3364Z\" fill=\"url(#rA)\"/><path d=\"M17.18 12.3492H15.0215V15.8199H16.1881L18.418 13.6012V13.2842C18.4235 13.1539 18.3967 13.0242 18.3399 12.9067C18.2832 12.7892 18.1982 12.6875 18.0927 12.6107C17.8281 12.4204 17.5054 12.3279 17.18 12.3492Z\" fill=\"#4EBC73\"/><path d=\"M10.3636 21.6835L13.0221 19.0131H12.5539C12.4694 19.0131 12.3859 18.9965 12.3079 18.9642C12.2299 18.9319 12.159 18.8847 12.0993 18.8251C12.0396 18.7655 11.9923 18.6947 11.96 18.6168C11.9277 18.539 11.9111 18.4555 11.9111 18.3712C11.9111 18.2869 11.9277 18.2035 11.96 18.1256C11.9923 18.0477 12.0396 17.977 12.0993 17.9174C12.159 17.8578 12.2299 17.8105 12.3079 17.7782C12.3859 17.746 12.4694 17.7294 12.5539 17.7294H13.3474V11.4456C13.3376 11.3555 13.348 11.2642 13.3779 11.1786C13.4078 11.0929 13.4564 11.015 13.5203 10.9505C13.5841 10.886 13.6616 10.8365 13.747 10.8056C13.8324 10.7748 13.9236 10.7633 14.0141 10.7721H17.3392C18.0569 10.7459 18.7604 10.9763 19.3231 11.4219C19.5566 11.6135 19.7484 11.8508 19.8866 12.1192L21.6563 10.3363C20.1545 8.8389 18.1186 7.99852 15.9964 8C13.8741 8.00149 11.8394 8.84472 10.3398 10.3442C8.84015 11.8437 7.99851 13.8766 8 15.9957C8.00149 18.1147 8.84598 20.1465 10.3477 21.6438\" fill=\"#4EBC73\"/><defs><linearGradient id=\"rA\" x1=\"13.1567\" y1=\"24.4729\" x2=\"24.4563\" y2=\"13.1564\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4EBC73\" stop-opacity=\"0.4\"/><stop offset=\"1\" stop-color=\"#4EBC73\"/></linearGradient></defs></svg>", "KZT": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#4EBC73\" fill-opacity=\"0.2\"/><path d=\"M23.9683 15.1982C23.9683 15.0949 23.9348 14.9917 23.9208 14.8884C23.8985 14.7321 23.8817 14.5758 23.851 14.4251C23.8203 14.2744 23.784 14.146 23.7505 14.0176C23.717 13.8893 23.6947 13.7804 23.6584 13.6632C23.6221 13.546 23.569 13.4064 23.5216 13.2781C23.4741 13.1497 23.4406 13.0408 23.3932 12.9236C23.3457 12.8064 23.2843 12.6976 23.2312 12.5831C23.1782 12.4687 23.1196 12.3348 23.0526 12.2147C22.9856 12.0947 22.9297 12.0054 22.8683 11.9022C22.8069 11.7989 22.7259 11.6594 22.6477 11.5421C22.5696 11.4249 22.4635 11.291 22.3686 11.1654C22.2736 11.0398 22.2485 10.9951 22.1815 10.9142C22.014 10.7133 21.8353 10.5179 21.6483 10.3281H21.6343L18.326 13.6772H18.7085C18.8138 13.6708 18.9192 13.6861 19.0184 13.722C19.1175 13.7579 19.2083 13.8137 19.2851 13.886C19.3619 13.9583 19.423 14.0455 19.4649 14.1423C19.5067 14.2391 19.5283 14.3434 19.5283 14.4488C19.5283 14.5543 19.5067 14.6586 19.4649 14.7554C19.423 14.8522 19.3619 14.9394 19.2851 15.0116C19.2083 15.0839 19.1175 15.1397 19.0184 15.1757C18.9192 15.2116 18.8138 15.2268 18.7085 15.2205H16.9133V20.7659C16.9133 20.988 16.8251 21.201 16.668 21.358C16.5109 21.515 16.2979 21.6032 16.0758 21.6032C15.8537 21.6032 15.6406 21.515 15.4836 21.358C15.3265 21.201 15.2382 20.988 15.2382 20.7659V16.7583L10.3525 21.6897C10.4084 21.7427 10.467 21.7902 10.5201 21.8432C10.6541 21.9688 10.7992 22.0944 10.9304 22.2088C11.0226 22.2842 11.1259 22.3539 11.2236 22.4293C11.3213 22.5046 11.4441 22.5967 11.5586 22.6721C11.6731 22.7475 11.7903 22.8144 11.9048 22.8814C12.0193 22.9484 12.1226 23.0154 12.2314 23.074C12.3403 23.1326 12.4743 23.1912 12.5944 23.2498C12.7144 23.3084 12.8261 23.3614 12.9434 23.4089C13.0606 23.4563 13.1862 23.4982 13.3063 23.5401C13.4263 23.5819 13.5576 23.6322 13.6832 23.6712C13.8088 23.7103 13.9289 23.7354 14.0517 23.7661C14.1745 23.7968 14.3141 23.8331 14.4454 23.861C14.5766 23.8889 14.7245 23.9029 14.8558 23.9224C14.987 23.9419 15.0986 23.9615 15.2215 23.9726C15.4002 23.9922 15.5844 23.995 15.7659 24.0005C15.8496 24.0005 15.9306 24.0005 16.0116 24.0005C16.2908 24.0005 16.542 24.0006 16.8017 23.9615C16.9105 23.9615 17.0166 23.928 17.1227 23.914C17.2763 23.8917 17.427 23.875 17.5778 23.8443C17.7285 23.8136 17.857 23.7773 17.9826 23.7438C18.1082 23.7103 18.2227 23.688 18.3372 23.6517C18.4516 23.6154 18.594 23.5624 18.7196 23.5149C18.8453 23.4675 18.9597 23.434 19.077 23.3838C19.1943 23.3335 19.3059 23.2777 19.4176 23.2247C19.5293 23.1717 19.6689 23.1131 19.7889 23.0461C19.909 22.9791 19.9983 22.9233 20.1016 22.8591C20.2049 22.7949 20.3445 22.7195 20.459 22.6414C20.5734 22.5633 20.7074 22.46 20.8331 22.3623C20.9587 22.2646 21.0062 22.2367 21.0899 22.1697C21.2909 22.0023 21.4863 21.8237 21.6734 21.6367C21.732 21.5781 21.7823 21.5139 21.8381 21.4553C21.9637 21.3213 22.0894 21.1762 22.2038 21.0478C22.2792 20.9529 22.349 20.8525 22.4244 20.7548C22.4998 20.6571 22.5919 20.5315 22.6673 20.4171C22.7427 20.3027 22.8097 20.1882 22.8795 20.071C22.9493 19.9538 23.0107 19.8561 23.0693 19.7445C23.1279 19.6329 23.1866 19.5045 23.2452 19.3817C23.3038 19.2589 23.3569 19.15 23.4043 19.0328C23.4518 18.9156 23.4937 18.7928 23.5355 18.6728C23.5774 18.5528 23.6277 18.4216 23.6668 18.2932C23.7058 18.1649 23.731 18.0476 23.7617 17.9248C23.7924 17.802 23.8287 17.6653 23.8566 17.5313C23.8845 17.3974 23.8985 17.2522 23.918 17.1211C23.9376 16.9899 23.9571 16.8783 23.9683 16.7583C23.9878 16.5769 23.9934 16.3927 23.9962 16.2001C23.9962 16.122 23.9962 16.041 23.9962 15.9629C24.0074 15.7173 23.9906 15.4521 23.9683 15.1982Z\" fill=\"url(#kA)\"/><path d=\"M21.4957 10.1741C21.3617 10.0457 21.2165 9.92011 21.0853 9.80569C20.9904 9.72754 20.8899 9.65777 20.7921 9.58521C20.6944 9.51265 20.5688 9.41776 20.4543 9.33961C20.3399 9.26147 20.2254 9.20007 20.1082 9.1303C19.9909 9.06053 19.8932 8.99634 19.7815 8.93773C19.6698 8.87912 19.5414 8.82051 19.4186 8.7647C19.2957 8.70888 19.1896 8.65306 19.0696 8.60283C18.9495 8.55259 18.8211 8.49956 18.7039 8.46049C18.5866 8.42142 18.4526 8.36839 18.3242 8.32932C18.1958 8.29025 18.0785 8.26513 17.9557 8.23443C17.8328 8.20373 17.696 8.16745 17.562 8.14233C17.428 8.11722 17.2828 8.09768 17.1516 8.07814C17.0204 8.05861 16.9115 8.03907 16.7887 8.02791C16.6072 8.01116 16.4257 8.00558 16.2303 8C16.1493 8 16.0684 8 15.9846 8C15.7207 7.99988 15.457 8.01386 15.1945 8.04186C15.0884 8.04186 14.9824 8.07256 14.8735 8.08931C14.7227 8.10884 14.5692 8.12838 14.4212 8.15629C14.2732 8.1842 14.142 8.22606 14.0108 8.25955C13.8796 8.29304 13.7735 8.31537 13.659 8.34886C13.5446 8.38235 13.4022 8.44096 13.2738 8.48561C13.1453 8.53026 13.0365 8.56934 12.9192 8.61678C12.8019 8.66423 12.6931 8.72283 12.5786 8.77586C12.4641 8.82889 12.3301 8.89029 12.2101 8.95447C12.09 9.01866 12.0007 9.08006 11.8946 9.14146C11.7885 9.20286 11.6545 9.28101 11.5372 9.35915C11.42 9.43729 11.286 9.54335 11.1603 9.63824C11.0766 9.70243 10.99 9.76103 10.9091 9.82801C10.7081 9.99267 10.5126 10.1713 10.3228 10.3611C10.267 10.4169 10.2167 10.4783 10.1637 10.5369C10.0352 10.6709 9.90961 10.816 9.79514 10.9499C9.71697 11.042 9.64718 11.1425 9.57459 11.229C9.502 11.3155 9.40708 11.4495 9.32891 11.5639C9.25074 11.6784 9.18932 11.7956 9.11952 11.91C9.04973 12.0244 8.9883 12.1277 8.92688 12.2365C8.86546 12.3454 8.80963 12.4793 8.75379 12.5993C8.69796 12.7193 8.64212 12.831 8.59187 12.9482C8.54161 13.0654 8.50532 13.1882 8.46065 13.311C8.41598 13.4338 8.36852 13.5622 8.32943 13.6906C8.29035 13.8189 8.26522 13.9334 8.23451 14.0562C8.2038 14.179 8.16751 14.3185 8.14238 14.4497C8.11726 14.5808 8.09771 14.7288 8.07817 14.8599C8.05863 14.9911 8.03908 15.1027 8.02792 15.2255C8.01116 15.4069 8.00558 15.5911 8 15.7837C8 15.8646 8 15.9428 8 16.0237C8 16.3028 8 16.554 8.04188 16.8135C8.04188 16.9168 8.07259 17.0201 8.08655 17.1205C8.10888 17.2768 8.12842 17.4359 8.15913 17.5894C8.18984 17.7429 8.22334 17.8685 8.25964 17.9941C8.29593 18.1197 8.31548 18.2341 8.34898 18.3485C8.38248 18.4629 8.44111 18.6053 8.48578 18.7336C8.53044 18.862 8.56953 18.9737 8.61699 19.0881C8.66445 19.2025 8.72308 19.3141 8.77613 19.4286C8.82917 19.543 8.89059 19.6798 8.9548 19.7998C9.01902 19.9198 9.07765 20.0063 9.13907 20.1095C9.20049 20.2128 9.28145 20.3523 9.35962 20.4696C9.43779 20.5868 9.54388 20.7207 9.6388 20.8435C9.73372 20.9663 9.76164 21.0166 9.83144 21.0975C9.998 21.3028 10.176 21.4984 10.3647 21.6836L15.2532 16.7521V15.1976H13.2989C13.1022 15.1858 12.9174 15.0993 12.7823 14.9559C12.6472 14.8125 12.572 14.623 12.572 14.426C12.572 14.229 12.6472 14.0394 12.7823 13.896C12.9174 13.7526 13.1022 13.6661 13.2989 13.6543H18.3465L21.6548 10.3053C21.599 10.2578 21.5431 10.2132 21.4957 10.1741ZM18.7346 12.5435H13.2961C13.0994 12.5317 12.9146 12.4452 12.7795 12.3018C12.6444 12.1584 12.5692 11.9688 12.5692 11.7718C12.5692 11.5749 12.6444 11.3853 12.7795 11.2419C12.9146 11.0985 13.0994 11.012 13.2961 11.0002H18.7262C18.8315 10.9938 18.9369 11.0091 19.0361 11.045C19.1353 11.0809 19.226 11.1368 19.3028 11.209C19.3796 11.2813 19.4408 11.3685 19.4826 11.4653C19.5244 11.5621 19.546 11.6664 19.546 11.7718C19.546 11.8773 19.5244 11.9816 19.4826 12.0784C19.4408 12.1752 19.3796 12.2624 19.3028 12.3347C19.226 12.4069 19.1353 12.4628 19.0361 12.4987C18.9369 12.5346 18.8315 12.5499 18.7262 12.5435H18.7346Z\" fill=\"#4EBC73\"/><defs><linearGradient id=\"kA\" x1=\"13.1499\" y1=\"24.4834\" x2=\"24.4781\" y2=\"13.1513\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4EBC73\" stop-opacity=\"0.4\"/><stop offset=\"1\" stop-color=\"#4EBC73\"/></linearGradient></defs></svg>"};
    const KZP='<span class="usd kzt">₸</span>KZT';
    const curPill=c=>c==='USD'?usdPill:c==='KZT'?KZP:'<span class="usd '+c.toLowerCase()+'">'+SYM[c]+'</span>'+c;
    const maxPay=()=>dep()?card().raw:freeOf();
    $('mvBack').innerHTML=$('cbBack').innerHTML;
    // same digit renderer as crypto buy/sell: per-character spans, the new digit slides up
    const lastN={pay:'',get:''};
    function numHTML(el,s,key){ const t=s?(()=>{ const [i,d]=s.split(','); return group(i||'0')+(s.indexOf(',')>=0?','+d:''); })():'0'; const prev=lastN[key]; el.classList.toggle('empty',!s);
      el.innerHTML=[...t].map(ch=>'<span class="ch">'+ch+'</span>').join('');
      if(s&&prev!==s&&s.length>prev.length&&MV.f===key){ const l=el.lastChild; l&&l.animate([{transform:'translateY(40%)',opacity:0},{transform:'none',opacity:1}],{duration:260,easing:'cubic-bezier(.2,.9,.3,1)'}); }
      else if(prev!==s&&MV.f!==key&&s) el.animate([{opacity:.35},{opacity:1}],{duration:220,easing:'ease-out'});
      lastN[key]=s;
      const w=el.parentNode.clientWidth||200; el.style.fontSize=''; if(el.scrollWidth>w-8) el.style.fontSize=Math.max(22,38*(w-8)/el.scrollWidth)+'px'; }
    function usd(){ return conv(num(MV.pay),payCur(),'USD'); }
    function err(){ const c=card();
      if(dep()) return num(MV.pay)>c.raw+.005?'Не хватает на счёте':'';
      const f=freeOf(); return num(MV.pay)>f+.005?(f?'Свободно только '+money(f,MV.t):'Свободных денег нет'):''; }
    const cardChip=c=>accIc(c,true)+c.s+chevS, trChip=()=>'<span class="aic gl sm">GL</span>'+MV.t+' 789099'+chevS;
    function render(){ const c=card(), d=dep(), pc=payCur(), gc=getCur();
      $('mvT').textContent=d?'Пополнить':'Вывести'; $('mvFree').textContent=fmt2(freeUSD());
      $('mvPayK').textContent=d?'Списываем с':'Выводите со'; $('mvGetK').textContent='Поступит на';
      $('mvPayA').innerHTML=d?cardChip(c):trChip(); $('mvGetA').innerHTML=d?trChip():cardChip(c);
      $('mvPayC').innerHTML=curPill(pc); $('mvGetC').innerHTML=curPill(gc);
      $('mvPaySg').textContent=SYM[pc]; $('mvGetSg').textContent=SYM[gc]; $('mvPay').classList.toggle('e0',!MV.pay); $('mvGet').classList.toggle('e0',!MV.get);
      numHTML($('mvPayN'),MV.pay,'pay'); numHTML($('mvGetN'),MV.get,'get');
      const e=err(); $('mvPay').classList.toggle('bad',!!e); $('mvPay').classList.toggle('on',MV.f==='pay'); $('mvGet').classList.toggle('on',MV.f==='get');
      const cs=c.n+' · '+money(c.raw,c.cur), ts='Свободно '+money(freeOf(),MV.t);
      $('mvPayS').textContent=e||(d?cs:ts); $('mvPayR').textContent='';
      $('mvGetS').textContent=d?ts:cs; $('mvRate').textContent=rateTxt(pc,gc);
      const pv=num(MV.pay), mx=maxPay();
      const CH={USD:[['100','$100'],['500','$500'],['1000','$1 000']],EUR:[['100','100 €'],['500','500 €'],['1000','1 000 €']],RUB:[['5000','5 000 ₽'],['10000','10 000 ₽'],['25000','25 000 ₽']],KZT:[['50000','50 000 ₸'],['100000','100 000 ₸'],['250000','250 000 ₸']]};
      $('mvChips').innerHTML=(d?CH[pc]:[['p25','25%'],['p50','50%'],['p75','75%']]).concat([['max','Всё']])
        .map(([q,t])=>{ const v=q==='max'?mx:q[0]==='p'?mx*(+q.slice(1))/100:+q; return '<button data-q="'+q+'"'+(pv>0&&Math.abs(pv-Math.round(v*100)/100)<.005?' class="on"':'')+'>'+t+'</button>'; }).join('');
      $('mvGo').classList.toggle('off',!!e||!(pv>0)); }
    function sync(){ if(MV.f==='pay') MV.get=str(conv(num(MV.pay),payCur(),getCur())); else MV.pay=str(conv(num(MV.get),getCur(),payCur())); }
    function mvOpen(mode){ if(window.__DS){ closeSheet(); window.__DS.open(mode==='wd'?'wd':'dep'); return; } Object.assign(MV,{mode,f:'pay',pay:'',get:''}); lastN.pay=lastN.get=''; $('mvSwap').classList.toggle('r',mode==='wd'); closeSheet();
      dev.classList.add('on-mv'); $('scrMv').setAttribute('aria-hidden','false'); render(); syncStatus(); }
    function mvClose(){ dev.classList.remove('on-mv'); $('scrMv').setAttribute('aria-hidden','true'); syncStatus(); }
    $('mvBack').onclick=mvClose;
    function press(k){ typing(); let s=MV[MV.f];
      if(k==='del') s=s.slice(0,-1); else if(k===','){ if(s.indexOf(',')<0) s=(s||'0')+','; }
      else { const i=s.indexOf(','); if(i>=0&&s.length-i-1>=2){ shake($(MV.f==='pay'?'mvPayN':'mvGetN')); return; } if(s.replace(',','').length>=10) return; s=(s==='0'?'':s)+k; }
      MV[MV.f]=s; sync(); render(); }
    $('mvKeys').addEventListener('click',e=>{ const b=e.target.closest('.key'); if(b) press(b.dataset.k); });
    $('mvPay').onclick=e=>{ if(e.target.closest('.mv-a')) return; MV.f='pay'; render(); }; $('mvGet').onclick=e=>{ if(e.target.closest('.mv-a')) return; MV.f='get'; render(); };
    $('mvSwap').onclick=()=>{ const g=MV.get; MV.mode=dep()?'wd':'dep'; MV.f='pay'; MV.pay=g; sync(); $('mvSwap').classList.toggle('r',!dep());
      ['mvPay','mvGet'].forEach((id,i)=>$(id).animate([{transform:'translateY('+(i?-1:1)*30+'px)',opacity:.3},{transform:'none',opacity:1}],{duration:380,easing:'cubic-bezier(.2,.9,.3,1)'})); render(); };
    $('mvChips').addEventListener('click',e=>{ const b=e.target.closest('[data-q]'); if(!b) return; const q=b.dataset.q, mx=maxPay();
      if(!mx&&q!=='max'&&q[0]==='p'){ shake($('mvPay')); return; } MV.f='pay'; MV.pay=str(q==='max'?mx:q[0]==='p'?mx*(+q.slice(1))/100:+q); sync(); render(); });
    const grp=(ic,name,tb,rows)=>'<div class="mvs-g"><div class="mvs-t">'+ic+'<span>'+name+'</span><span class="tb">'+tb+'</span></div>'+rows+'</div>';
    const row=(attr,cur,label,amt,sel)=>'<button class="mvs-r'+(sel?' sel':'')+'" '+attr+'><i class="cu">'+CUSVG[cur]+'</i><span class="mn">'+label+'</span><span class="ma">'+sfx(amt,cur)+'</span></button>';
    const sh=(title,body)=>openSheet('<div class="mvs-h"><h3>'+title+'</h3>'+XB+'</div><div class="mvs-l">'+body+'</div>','mvs');
    const pop=id=>$(id).animate([{transform:'scale(1.08)'},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'});
    const cardSheet=(title,chip)=>{ sh(title,MVP.map(p=>grp(accIc(p,true),'<b>'+p.n+'</b> '+p.m,dec(p.bal)+' ₸',
        MVA.filter(x=>x.pid===p.id).map(x=>row('data-a="'+x.id+'"',x.cur,x.s,x.raw,x.id===MV.a)).join(''))).join(''));
      sheet.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{ const was=payCur()+getCur(); MV.a=b.dataset.a; if(payCur()+getCur()!==was){ MV.f='pay'; }
        sheet.querySelectorAll('.mvs-r').forEach(x=>x.classList.toggle('sel',x===b)); sync(); render(); setTimeout(()=>{ closeSheet(); pop(chip); },140); }); };
    const trSheet=(title,chip)=>{ sh(title,grp('<span class="aic gl sm">GL</span>','<b>Глобальный счёт</b> 789099',fmt2(freeUSD()),
        ['USD','EUR'].map(cu=>row('data-t="'+cu+'"',cu,cu+' **9045',fr()[cu],cu===MV.t)).join('')));
      sheet.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{ const was=payCur()+getCur(); MV.t=b.dataset.t; if(payCur()+getCur()!==was){ MV.f='pay'; }
        sheet.querySelectorAll('.mvs-r').forEach(x=>x.classList.toggle('sel',x===b)); sync(); render(); setTimeout(()=>{ closeSheet(); pop(chip); },140); }); };
    $('mvPayA').onclick=e=>{ e.stopPropagation(); dep()?cardSheet('Со счёта','mvPayA'):trSheet('Со счёта','mvPayA'); };
    $('mvGetA').onclick=e=>{ e.stopPropagation(); dep()?trSheet('На счёт','mvGetA'):cardSheet('На счёт','mvGetA'); };
    $('mvGo').onclick=()=>{ if(err()||!(num(MV.pay)>0)){ shake($('mvPay')); return; } if(usd()<1){ shake($('mvPay')); toast('Минимум $1'); return; } confirm(); };
    document.addEventListener('keydown',e=>{ if(!dev.classList.contains('on-mv')||dev.classList.contains('on-confirm')||$('sheet').classList.contains('on')||e.metaKey||e.ctrlKey||e.altKey) return;
      let k=null; if(/^[0-9]$/.test(e.key)) k=e.key; else if(e.key===','||e.key==='.') k=','; else if(e.key==='Backspace') k='del'; else if(e.key==='Escape'){ mvClose(); return; } else if(e.key==='Enter'){ $('mvGo').click(); return; }
      if(k){ e.preventDefault(); press(k); const b=$('mvKeys').querySelector('[data-k="'+k+'"]'); if(b){ b.classList.add('pressed'); setTimeout(()=>b.classList.remove('pressed'),120); } } });
    // ── shared swipe confirm ──
    function confirm(){ const c=card(), d=dep(), o={d,c,pay:num(MV.pay),get:num(MV.get),usd:usd(),pc:payCur(),gc:getCur()}; MVO=o; MVF=true;
      const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
      if(!('q' in MC0)){ MC0.q=qe.innerHTML; MC0.t=$('cfTitle').textContent; MC0.sl=sl.innerHTML; MC0.slc=sl.className; MC0.fin=$('fin').textContent; MC0.op=$('finOp').textContent; }
      qe.removeAttribute('data-book'); qe.onclick=null; qe.innerHTML=o.pc===o.gc?'Без конвертации':'Курс <b class="lv">'+rateTxt(o.pc,o.gc)+'</b>';
      $('cfTitle').textContent=d?'Пополнение':'Вывод'; sl.className='slogo mvf-sl'; sl.innerHTML=accIc(c);
      const acc='<span class="aic gl sm">GL</span>Свободный остаток · '+MV.t;
      const rows=[[d?'Спишем с карты':'Выводите',money(o.pay,o.pc)],[d?'Поступит на счёт':'Поступит на карту',money(o.get,o.gc)]];
      if(o.pc!==o.gc) rows.push(['Курс',rateTxt(o.pc,o.gc)]);
      rows.push(['Комиссия','0 ₸'],[d?'Откуда':'Куда',accIc(c,true)+c.sh],[d?'Куда':'Откуда',acc]);
      $('receipt').innerHTML=rows.map(r=>'<div class="rc"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
      $('cfNote').lastChild.textContent=d?'Деньги поступят в свободный остаток сразу — ими можно торговать.':'Обычно деньги приходят на карту за пару минут, иногда — до одного рабочего дня.';
      $('gz').classList.remove('blocked'); $('gzLbl').textContent='Проведите, чтобы '+(d?'пополнить':'вывести'); $('knob').setAttribute('aria-label',$('gzLbl').textContent);
      $('rcpt').innerHTML=[[d?'Пополнено':'Выведено',money(d?o.get:o.pay,d?o.gc:o.pc)],['Комиссия','0 ₸'],[d?'С карты':'На карту',accIc(c,true)+c.sh]].map(r=>'<div class="rr"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>').join('');
      $('doneH').textContent=d?'Пополнение отправлено':'Вывод отправлен'; $('sttT').textContent='В работе'; $('doneTxt').textContent=d?'Зачисляем в свободный остаток':'Отправляем деньги на карту';
      $('fin').textContent='На главную'; $('finOp').textContent='Детали';
      resetKnob(false); $('scrConfirm').classList.remove('success');
      dev.classList.add('mvf','on-confirm'); $('scrConfirm').setAttribute('aria-hidden','false'); syncStatus(); }
    function restore(){ if(!MVF) return; MVF=false; MVO=null; clearTimeout(mvT); dev.classList.remove('mvf');
      const qe=document.querySelector('#scrConfirm .q'), sl=document.querySelector('#scrConfirm .slogo');
      if('q' in MC0){ qe.innerHTML=MC0.q; qe.setAttribute('data-book',''); qe.onclick=()=>openBook(); $('cfTitle').textContent=MC0.t; sl.innerHTML=MC0.sl; sl.className=MC0.slc; $('fin').textContent=MC0.fin; $('finOp').textContent=MC0.op; } }
    // executed a moment after the swipe
    new MutationObserver(()=>{ if(!MVF||!MVO||!$('scrConfirm').classList.contains('success')) return; clearTimeout(mvT); const o=MVO;
      mvT=setTimeout(()=>{ if(!MVF) return; $('done').classList.add('exec'); $('sttT').textContent='Исполнено';
        $('doneH').textContent=o.d?'Счёт пополнен':'Деньги выведены'; $('doneTxt').textContent=o.d?'+'+money(o.get,o.gc)+' в свободном остатке':money(o.get,o.gc)+' — на '+o.c.sh;
        ['doneH','doneTxt'].forEach(id=>$(id).animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.9,.3,1)'})); confetti(); },2400); })
      .observe($('scrConfirm'),{attributes:true,attributeFilter:['class']});
    function apply(o){ const c=o.c, amt=o.d?o.pay:o.get; c.raw=Math.max(0,c.raw+(o.d?-amt:amt));
      setFree(Math.max(0,freeOf()+(o.d?o.get:-o.pay)));
      const hf=NBM.on?document.querySelector('#nbHc .hm-free b'):$('hmFree').querySelector('b'); if(hf) rollText(hf,fmt2(freeUSD()),o.d?1:-1); }
    function finish(){ const o=MVO; goBack(); mvClose(); setTimeout(()=>{ restore(); resetDone(); },460); if(o){ apply(o); $('hmScroll').scrollTo({top:0,behavior:'smooth'}); toast(o.d?'Свободный остаток пополнен на '+money(o.get,o.gc):'Вывели '+money(o.get,o.gc)+' на '+o.c.sh); } }
    { const cb1=$('cfBack').onclick, f1=$('fin').onclick, o1=$('finOp').onclick;
      $('cfBack').onclick=()=>{ if(MVF){ goBack(); setTimeout(restore,440); return; } cb1&&cb1(); };
      $('fin').onclick=()=>{ if(MVF){ finish(); return; } f1&&f1(); };
      $('finOp').onclick=()=>{ if(MVF&&MVO){ const o=MVO, ex=$('done').classList.contains('exec');
          openSheet('<div class="lts"><div class="lts-h"><b>'+(o.d?'Пополнение':'Вывод')+'</b>'+XB+'</div><div class="lts-rc">'+[['Статус',ex?'Исполнено':'В работе'],['Сумма',fmt2(o.usd)],[o.d?'С карты':'На карту',o.c.sh],['Комиссия','0 ₸'],['Номер операции','№ '+(71200000+Math.floor(Math.random()*9000))]].map((r,i)=>'<div class="lts-rw"'+(i?'':' style="border-top:0"')+'><span>'+r[0]+'</span><b>'+r[1]+'</b></div>').join('')+'</div><div class="lts-go"><button class="lt-cta" data-close>Понятно</button></div></div>','ltsh'); return; }
        o1&&o1(); }; }
    // entry points: «Пополнить» / «Вывести» on the client home and on the newbie home (once the account is open)
    const wire=()=>document.querySelectorAll('#scrHome .hm-acts .hm-act:not(.sq)').forEach((b,i)=>{ if(b.dataset.mv) return; b.dataset.mv=/Вывод/.test(b.dataset.t||'')||/Вывести/.test(b.textContent)?'wd':'dep'; b.removeAttribute('data-t'); });
    wire(); setInterval(wire,1500);
    document.addEventListener('click',e=>{ const b=e.target.closest('[data-mv]'); if(!b||!b.closest('#scrHome')) return; e.stopPropagation();
      if(NBM.on&&NBM.st!=='open'){ toast('Сначала откройте брокерский счёт'); return; } if(window.__DS){ window.__DS.open(b.dataset.mv==='wd'?'wd':'dep'); return; } mvOpen(b.dataset.mv); },true);
  })();

  // ═════════ APP MENU · bento tiles (capital.com look, Freedom items) ═════════
  const MNI={dep:NV['Plus'],sup:NV['Message 2'],wd:NV['Share'],tr:NV['Send'],doc:NV['file-text'],bon:NV['Star_circle'],ord:NV['Edit'],an:NV['Pie-chart_1'],set:NV['Setting'],inv:NV['user_1'],his:NV['clock_circle']};
  // order = placement: grid flows row-dense, 3 columns → wide / tall tiles land like the capital.com bento
  const MNU=[
    {k:'doc',t:'Отчёты и документы',w:1},
    {k:'sup',t:'Поддержка',h:1,bd:1},
    {k:'ord',t:'Поручения'},
    {k:'an',t:'Аналитика'},
    {k:'inv',t:'Пригласить друга',w:1},
    {k:'set',t:'Настройки',h:1},
    {k:'his',t:'История',w:1}];
  const MNT={dep:'Пополнение счёта — скоро',sup:'Чат поддержки — скоро',wd:'Вывод средств — скоро',tr:'Переводы между счетами — скоро',doc:'Отчёты и документы — скоро',bon:'Бонусы — скоро',
    ord:'Поручения — скоро',set:'Настройки — скоро',inv:'Реферальная программа — скоро',his:'История операций — скоро',me:'Моя визитка — скоро',qr:'QR-код для перевода — скоро'};
  $('mnuG').innerHTML=MNU.map((x,i)=>'<button class="mnu-t'+(x.w?' w':'')+(x.h?' h':'')+(x.acc?' acc':'')+'" data-m="'+x.k+'" style="--i:'+i+'"><span class="ic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none">'+MNI[x.k].replace(/stroke-width="2"/g,'stroke-width="1.8"')+'</svg>'+(x.bd?'<i class="bd"></i>':'')+'</span><b>'+x.t+'</b></button>').join('');
  function mnuOpen(src){ const m=$('mnu'), d=dev.getBoundingClientRect(), k=dev.offsetWidth?d.width/dev.offsetWidth:1, b=src.getBoundingClientRect(), x=$('mnuX');
    x.style.left=((b.left-d.left)/k)+'px'; x.style.top=((b.top-d.top)/k)+'px'; m.style.setProperty('--mt',((b.bottom-d.top)/k+18)+'px');
    closeSheet(); $('mnuSc').scrollTop=0; m.classList.add('on'); m.setAttribute('aria-hidden','false'); dev.classList.add('mnu-on'); syncStatus(); }
  function mnuClose(){ $('mnu').classList.remove('on'); $('mnu').setAttribute('aria-hidden','true'); dev.classList.remove('mnu-on'); syncStatus(); }
  ['hmMenu','crMenu'].forEach(id=>{ const b=$(id); if(b) b.onclick=()=>mnuOpen(b); });
  $('mnuX').onclick=mnuClose;
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&dev.classList.contains('mnu-on')) mnuClose(); });
  $('mnu').addEventListener('click',e=>{ const t=e.target.closest('[data-m]'); if(!t) return; const k=t.dataset.m;
    if(k==='an'){ if(dev.classList.contains('cr')){ toast('Аналитика портфеля — во вкладке «Инвест»'); return; } mnuClose(); setTimeout(openAn,180); return; }
    toast(MNT[k]); });

  // ═════════ tab bar: one highlight that slides to the next tab + tabs share the same scroll ═════════
  const TBS=['tabs','crTabBar','seTabBar'].map(id=>$(id)).filter(Boolean);
  TBS.forEach(t=>{ const i=document.createElement('i'); i.className='tb-pl'; t.prepend(i); });
  const TSC=['hmScroll','crScroll'];
  let tbI=-1;
  const tbIdx=()=>dev.classList.contains('cr')?1:dev.classList.contains('se')?2:0;
  function tbSync(){ const n=tbIdx(); if(n===tbI) return; const o=tbI<0?n:tbI; tbI=n;
    TBS.forEach(t=>{ const bs=t.querySelectorAll('button');
      t.classList.add('tb-nt'); t.style.setProperty('--ti',o); bs.forEach((b,i)=>b.classList.toggle('on',i===o)); void t.offsetWidth;
      t.classList.remove('tb-nt','tb-go'); if(o!==n){ void t.offsetWidth; t.classList.add('tb-go'); }
      t.style.setProperty('--ti',n); bs.forEach((b,i)=>b.classList.toggle('on',i===n)); });
    // Инвест ↔ Крипта have the same header: keep the scroll position so nothing jumps while the screens cross-fade
    if(o!==n&&TSC[o]&&TSC[n]){ const a=$(TSC[o]), b=$(TSC[n]); if(a&&b&&(a.scrollTop<=460||b.scrollTop<=460)) b.scrollTop=Math.min(a.scrollTop,460); } }
  new MutationObserver(tbSync).observe(dev,{attributes:true,attributeFilter:['class']}); tbSync();
  // pull-down fix: everything under the dark header goes into one grey wrapper, the scroller itself stays transparent
  ['hmScroll','crScroll'].forEach(id=>{ const sc=$(id); if(!sc) return; const dk=sc.querySelector(':scope>.hm-dark'); if(!dk) return;
    const w=document.createElement('div'); w.className='hm-rest'; let n=dk.nextSibling; while(n){ const nx=n.nextSibling; w.appendChild(n); n=nx; } sc.appendChild(w); });

  // ═════════ «Супер-лайт главная»: switch at the bottom of the home, remembered per viewer ═════════
  const HSK='fr-home-lite';
  function hsSet(on,anim){ dev.classList.toggle('hsoft',on); $('hsTg').classList.toggle('on',on); $('hsRow').setAttribute('aria-checked',on?'true':'false');
    try{ localStorage.setItem(HSK,on?'1':'0'); }catch(e){}
    $('hmScroll').dispatchEvent(new Event('scroll')); syncStatus();
    if(anim) setTimeout(()=>$('hmScroll').scrollTo({top:0,behavior:'smooth'}),420); }
  { let on=false; try{ on=localStorage.getItem(HSK)==='1'; }catch(e){} hsSet(on,false); }
  $('hsRow').onclick=()=>hsSet(!dev.classList.contains('hsoft'),true);
  // ── perf: live-dot pulses as composited overlays (no SMIL) + pause screens nobody sees ──
  const lpQ=new Set(); let lpRaf=0;
  function lpRun(){ lpRaf=0; lpQ.forEach(svg=>{ lpQ.delete(svg); if(!svg.isConnected) return; const c=svg.querySelector('circle[data-lp]'); let o=svg.__lp;
      if(!c){ if(o) o.style.display='none'; return; }
      const par=svg.parentElement; if(!par) return; const pr=par.getBoundingClientRect(), cr=c.getBoundingClientRect(); if(!pr.width||!cr.width){ if(o) o.style.display='none'; return; }
      if(!o||o.parentElement!==par){ o=document.createElement('i'); o.className='lvp'; svg.__lp=o; if(getComputedStyle(par).position==='static') par.style.position='relative'; par.appendChild(o); }
      const k=par.offsetWidth?pr.width/par.offsetWidth:1;
      o.style.left=((cr.left+cr.width/2-pr.left)/k-par.clientLeft).toFixed(1)+'px'; o.style.top=((cr.top+cr.height/2-pr.top)/k-par.clientTop).toFixed(1)+'px';
      o.style.setProperty('--c',c.getAttribute('fill')||'#fff'); o.style.display=''; }); }
  const lpAdd=svg=>{ if(svg){ lpQ.add(svg); if(!lpRaf) lpRaf=requestAnimationFrame(lpRun); } };
  const lpAll=()=>document.querySelectorAll('circle[data-lp]').forEach(c=>lpAdd(c.ownerSVGElement));
  new MutationObserver(ms=>ms.forEach(m=>{ const t=m.target; if(t.nodeType!==1) return; const sv=t.closest('svg'); if(sv){ lpAdd(sv); return; }
      m.addedNodes.forEach(n=>{ if(n.nodeType!==1||n.classList.contains('lvp')) return; if(n.tagName==='svg') lpAdd(n); else n.querySelectorAll('circle[data-lp]').forEach(c=>lpAdd(c.ownerSVGElement)); }); }))
    .observe(dev,{childList:true,subtree:true});
  let zzT=0, zzSig='';
  function zzCalc(){ const r=dev.getBoundingClientRect(); if(!r.width) return; const sto=dev.classList.contains('sto-on')||dev.classList.contains('mnu-on'); let top=null;
    for(const y of [.2,.5,.8]){ const s=document.elementsFromPoint(r.left+r.width/2,r.top+r.height*y).map(el=>el.closest('.screen')).find(Boolean); if(s){ top=s; break; } }
    if(!top&&!sto) return; document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('zz',sto||s!==top)); lpAll(); }
  function zzSync(){ const sig=dev.className.replace(/\bst-light\b/g,'').replace(/\s+/g,' ').trim(); if(sig===zzSig) return; zzSig=sig;
    document.querySelectorAll('.screen.zz').forEach(s=>s.classList.remove('zz')); clearTimeout(zzT); zzT=setTimeout(zzCalc,750); }
  new MutationObserver(zzSync).observe(dev,{attributes:true,attributeFilter:['class']});
  setTimeout(()=>{ zzSync(); lpAll(); },300);

  // ═════════ partners build: scenario picker ═════════
  const SCN=[
    {k:'tok',t:'Токенизированные акции',d:'Открыть счёт и купить долю Apple от $1'},
    {k:'ss',t:'Single Stock ETF',d:'Открыть счёт и купить 1/100 акции Apple поштучно'}];
  function scIcon(k){ const W3=(document.querySelector('#scrKind [data-kind="ss"] .k3d')||{}).src||'';
    if(k==='tok') return '<span class="scp-ic w">'+lgHTML('aapl')+'<span class="tkb"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3Z" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/></svg></span></span>';
    if(k==='ss') return '<span class="scp-ic w">'+lgHTML('aapl')+(W3?'<img class="bd" src="'+W3+'" alt="">':'')+'</span>';
    return '<span class="scp-ic b"><svg width="26" height="26" viewBox="0 0 24 24" fill="none">'+NV['Bar-chart_up']+'</svg></span>'; }
  const SCW=[{k:'new',t:'Новый клиент',d:'Нет брокерского счёта: открытие счёта, пополнение, первая покупка',ic:'<span class="scp-ic b"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19 3v4M17 5h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>'},
    {k:'old',t:'Есть брокерский счёт',d:'Клиент с портфелем: покупка, продажа, вывод, долгосрочные',ic:'<span class="scp-ic b g"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 19V9m5 10V5m5 14v-7m5 7V8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></span>'}];
  const scp=document.createElement('div'); scp.className='scp'; scp.id='scp'; scp.setAttribute('aria-hidden','true');
  scp.innerHTML='<div class="scp-top"><span class="lgo">F</span><span>Freedom · Инвестиции</span></div><h1>Выберите сценарий</h1><p class="sub">Кого показываем: нового клиента или клиента с брокерским счётом</p>'+
    '<div class="scp-l">'+SCW.map((x,i)=>'<button class="scp-c" data-sc="ss" data-who="'+x.k+'" style="--k:'+i+'">'+x.ic+'<span class="scp-m"><b>'+x.t+'</b><span>'+x.d+'</span></span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>').join('')+'</div>'+
    '<div class="scp-ft">Интерактивный прототип · данные условные</div>';
  dev.appendChild(scp);
  const SCX=['scrAn','scrSe','scrCr','scrCoin','scrCrBuy','scrPm','scrEv','scrOp','scrLt','scrLo','scrCt','scrFp','scrFpP','scrFpS','scrTu','scrNbB','scrNbO','scrNbG','scrNbR','scrMv','scrStock','scrKind','scrMain','scrConfirm'];
  function scReset(){ try{ closeSheet(); }catch(_){} try{ stoClose(); }catch(_){} try{ mnuClose(); }catch(_){} try{ closeMenu(); }catch(_){}
    [...dev.classList].forEach(c=>{ if(/^on-/.test(c)||['cr','se','menu-on','dark-status','sto-on','mnu-on'].includes(c)) dev.classList.remove(c); });
    SCX.forEach(id=>{ const el=$(id); if(el) el.setAttribute('aria-hidden','true'); }); }
  function scOpen(){ try{ stoClose(); }catch(_){} try{ closeSheet(); }catch(_){} scp.classList.remove('on'); void scp.offsetWidth; scp.classList.add('on'); scp.setAttribute('aria-hidden','false'); scp.scrollTop=0; }
  let PFO=null;
  function scMode(m){ PMODE=m; dev.classList.toggle('pm-tok',m==='tok'); dev.classList.toggle('pm-ss',m==='ss');
    // holdings: the tokenized client has whole/fractional AAPL only, the Single Stock client has AAPL/100 only
    if(!scMode.h0) scMode.h0={W:SH_W,AW:AVG_W,S:SH_S,AS:AVG_S};
    const h=scMode.h0; if(m==='tok'){ SH_W=h.W; AVG_W=h.AW; SH_S=0; AVG_S=h.AS; } else { SH_W=0; AVG_W=h.AW; SH_S=h.S+h.W; AVG_S=(h.S*h.AS+h.W*h.AW)/(h.S+h.W); } syncHold();
    // other portfolio rows: tickers → /100 in the Single Stock scenario
    const rows=[...document.querySelectorAll('#pfSecs .pf-row[data-t]')].filter(r=>!r.closest('.pf-sec:has([data-opos])'));
    if(!PFO) PFO=rows.map(r=>[r.querySelector('.m .t').innerHTML,r.querySelector('.m .s').textContent]);
    rows.forEach((r,i)=>{ const t=r.querySelector('.m .t'), sb=r.querySelector('.m .s'); if(!PFO[i]) return; t.innerHTML=PFO[i][0]; sb.textContent=PFO[i][1];
      if(m==='ss'&&/шт\. по/.test(PFO[i][1])&&r.closest('.pf-sec')===document.querySelector('#pfSecs .pf-sec')){ const mm=PFO[i][1].match(/([\d,]+) шт\. по ([\d\s,]+) \$/); const tk=t.textContent.trim();
        if(mm){ t.innerHTML=PFO[i][0].replace(tk,tk.replace(/\.US$/,'')+'/100'); const q=parseFloat(mm[1].replace(',','.'))*100, p=parseFloat(mm[2].replace(/\s/g,'').replace(',','.'))/100; sb.textContent=Math.round(q)+' шт. по '+dec(p)+' $'; } } });
    try{ pfLive(); pfPeriod(); }catch(_){}
    stMode(m==='ss'?'ss':'stock');
    try{ window.__invSet(m); }catch(_){}
    const ngs=document.querySelector('#scrNbG .ng-s'); if(ngs) ngs.textContent=(m==='tok'?'Акция':'Single stock')+' на сумму до $10 — бесплатно';
    const nrp=[...document.querySelectorAll('#scrNbR p')].find(p=>/поступ/.test(p.textContent)); if(nrp) nrp.textContent=nrp.textContent.replace(/^(Single stock|Акция|Акции)/,m==='tok'?'Акции':'Single stock');
    document.querySelectorAll('.chips button, .ct-chips button').forEach(b=>{ if(b.textContent.trim()==='От 1 $') b.style.display='none'; }); }
  let SCU='new';
  function scGo(k){ scReset(); LIN.pend=0; if(NBM.on) nbMode(false,true); scMode(k); if(SCU==='new') nbMode(true,true); stMode(k==='ss'?'ss':'stock');
    $('hmScroll').scrollTop=0; syncStatus(); scp.classList.remove('on'); scp.setAttribute('aria-hidden','true');
    if(SCU==='new'){ try{ window.__inAuto('inv'); }catch(_){} } }
  scp.addEventListener('click',e=>{ const b=e.target.closest('[data-sc]'); if(b){ SCU=b.dataset.who||'new'; scGo(b.dataset.sc); } });
  function scInit(){
    // outside the phone (desktop)
    // таб «Новичок | Клиент» вне экрана: переключает сценарий сразу, без экрана выбора и без сторис (на телефоне — полоской над экраном)
    const o=document.createElement('div'); o.className='sc-tab'; o.id='scTab'; o.setAttribute('role','tablist');
    o.innerHTML='<button role="tab" data-w="new">Новичок</button><button role="tab" data-w="old">Клиент</button>';
    const scSync=()=>{ const w=dev.classList.contains('nb')?'new':'old', open=scp.classList.contains('on');
      o.querySelectorAll('[data-w]').forEach(b=>{ const on=!open&&b.dataset.w===w; b.classList.toggle('on',on); b.setAttribute('aria-selected',on?'true':'false'); }); };
    o.addEventListener('click',e=>{ const b=e.target.closest('[data-w]'); if(!b) return; SCU=b.dataset.w;
      try{ if(window.__DS) window.__DS.close(); }catch(_){}
      const ia=window.__inAuto; window.__inAuto=()=>{}; try{ scGo('ss'); } finally { window.__inAuto=ia; } scSync(); });
    new MutationObserver(scSync).observe(dev,{attributes:true,attributeFilter:['class']}); new MutationObserver(scSync).observe(scp,{attributes:true,attributeFilter:['class']});
    const ds=$('demoSw'); if(ds) ds.after(o); else dev.after(o); scSync();
    // in the app menu
    $('mnuSc').insertAdjacentHTML('beforeend','<button class="mnu-sc2" id="mnuSc2"><span>Сменить сценарий</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>');
    $('mnuSc2').onclick=()=>{ mnuClose(); setTimeout(scOpen,250); };
    // a row at the bottom of the home screen
    const hd=document.createElement('div'); hd.className='hm-blk hs-blk';
    hd.innerHTML='<button class="hs-row" id="scRow"><span class="hs-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span><span class="m"><b>Сменить сценарий</b><span>Новый клиент или клиент с брокерским счётом</span></span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
    $('hmScroll').appendChild(hd); $('scRow').onclick=scOpen;
    scReset(); scOpen(); }




  // ── R6: каталог без прогнозов / портфелей / опционов, одинаковые фильтры на главной и в каталоге ──
  for(let i=CT.length-1;i>=0;i--){ const x=CT[i]; if(x.pm||x.fp||x.op!==undefined||x.tu) CT.splice(i,1); }
  for(let i=NBCAT.length-1;i>=0;i--) if(NBCAT[i].startsWith('pm:')) NBCAT.splice(i,1);
  $('nbCatG').innerHTML=NBCAT.map(nbTile).join('');
  const CFL=[['br','Знакомые бренды'],['cheap','До 150 $'],['div','Платят дивиденды'],['up','Растут за год'],['tech','Технологии'],['fund','Фонды']];
  const CTT={}; CT.forEach(x=>{ if(x.s) CTT[x.s]=' '+x.f+' '; }); CTT.aapl=' br tech div up '; CTT.visa=CTT.visa||' br div up ';
  Object.assign(CTT,{ishr:' fund up ',vang:' fund up ',uk:' fund ',qqq:' fund tech up ',spx:' fund up '});
  let CF='';
  const cfBar=id=>{ const b=$(id); if(!b) return; const fl=b.querySelector('.fl'); b.innerHTML=(fl?fl.outerHTML:'')+CFL.map(([f,l])=>'<button data-f="'+f+'">'+l+'</button>').join(''); };
  ['chips','nbChips','ctChips'].forEach(cfBar);
  const cfTk=el=>el.dataset.tk||el.dataset.ssk||el.dataset.nbk||'';
  function cfApply(){ ['catG','nbCatG'].forEach(id=>{ const g=$(id); if(!g) return; [...g.children].forEach(el=>{ const tk=cfTk(el), isT=el.classList.contains('tile')&&tk;
      el.classList.toggle('cf-off',!!CF&&(!isT||!(CTT[tk]||'').includes(' '+CF+' '))); }); });
    CTF=CF; ['chips','nbChips','ctChips'].forEach(id=>{ const b=$(id); if(b) b.querySelectorAll('button[data-f]').forEach(x=>x.classList.toggle('on',x.dataset.f===CF)); });
    try{ ctRender(true); }catch(_){} }
  ['chips','nbChips','ctChips'].forEach(id=>{ const b=$(id); if(!b) return; b.addEventListener('click',ev=>{ const x=ev.target.closest('button'); if(!x) return; ev.stopImmediatePropagation(); ev.stopPropagation();
    if(x.classList.contains('fl')){ toast('Фильтры — скоро'); return; } CF=CF===x.dataset.f?'':x.dataset.f;
    ['catG','nbCatG','ctG'].forEach(g=>$(g)&&$(g).classList.add('fade')); setTimeout(()=>{ cfApply(); ['catG','nbCatG','ctG'].forEach(g=>$(g)&&$(g).classList.remove('fade')); },160); },true); });

  // ── R3: линейное состояние нового клиента (открыл счёт → $0 → пополнил → купил → продал) ──
  const FR0={tot:BASE_TOT,stk:BASE_STK,sec:SEC0,raw:ACCS[0].raw,trades:TRADES.slice()};
  const usdTxt=v=>'$'+dec(v);
  function freshSync(){ if(!FRESH) return;
    ACCS[0].raw=ACCS[0].bal=r2(LIN.cash); BASE_TOT=LIN.cash+LIN.lt; BASE_STK=4.37*152.52; SEC0=4.37*152.52;
    const hf=$('hmFree').querySelector('b'); if(hf) hf.textContent=usdTxt(LIN.cash);
    const dr=document.querySelector('.pf-row.dacc .r'); if(dr) dr.innerHTML='<span class="t">0<small class="cur"> $</small></span>';
    const m=midPx(), val=valF(), inv=SH_W*AVG_W+SH_S*AVG_S, all=val-inv;
    dev.classList.toggle('pf-empty',SHARES<1e-9&&!LIN.lt); dev.classList.toggle('pf-noshr',SHARES<1e-9);
    const wr=document.querySelector('#pfSecs .pf-row[data-aapl]:not([data-ss])'); if(wr) wr.hidden=!SH_W;
    const an=document.querySelectorAll('.pf-an .row .v'); if(an[1]) an[1].textContent=usdTxt(inv); if(an[2]){ an[2].textContent=(all<0?MIN:'+')+'$'+dec(Math.abs(all))+' ('+dec(inv?Math.abs(all)/inv*100:0,1)+' %)'; an[2].className='v '+(all<0?'dn':'up'); }
    const lv=document.querySelectorAll('#pfSecs .pf-sec')[2]; if(lv){ lv.classList.toggle('fr-on',LIN.lt>0); const v=lv.querySelector('.pf-sh .v'); if(v){ let lt=LIN.lt; try{ lt=Math.max(lt,ltUsd()); }catch(_){} v.firstChild.textContent=usdTxt(lt); } }
    try{ pfLive(); hmDraw(false); }catch(_){}
    try{ position(); }catch(_){} try{ if(dev.classList.contains('on-order')) render(); }catch(_){} }
  function freshStart(){ FRESH=true; Object.assign(LIN,{cash:0,lt:LIN.pend||0,pend:0}); SH_W=0; SH_S=0; AVG_W=0; AVG_S=0; syncHold(); TRADES.length=0; dev.classList.add('fresh'); freshSync(); }
  function freshEnd(){ FRESH=false; dev.classList.remove('fresh','pf-empty','pf-noshr'); BASE_TOT=FR0.tot; BASE_STK=FR0.stk; SEC0=FR0.sec; ACCS[0].raw=ACCS[0].bal=FR0.raw; TRADES.length=0; FR0.trades.forEach(t=>TRADES.push(t));
    const hf=$('hmFree').querySelector('b'); if(hf) hf.textContent='$199,52';
    const dr=document.querySelector('.pf-row.dacc .r'); if(dr) dr.innerHTML='<span class="t">1 200,00</span><span class="s nt">USD</span>';
    const an=document.querySelectorAll('.pf-an .row .v'); if(an[1]) an[1].textContent='$10 161,00'; if(an[2]){ an[2].textContent='+$840 (8,3 %)'; an[2].className='v up'; }
    const wr=document.querySelector('#pfSecs .pf-row[data-aapl]:not([data-ss])'); if(wr) wr.hidden=false;
    try{ scMode(PMODE); hmDraw(false); }catch(_){} }
  { const b0=bought; bought=function(o){ const sell=SELL(); b0(o); if(FRESH&&o&&!o.isLimit&&o.total>0){ LIN.cash=r2(Math.max(0,LIN.cash+(sell?o.total:-o.total))); freshSync(); } }; }
  window.__INV={ state:()=>({acc:!(NBM.on&&NBM.st!=='open'),fresh:FRESH,cash:FRESH?LIN.cash:199.52,lt:FRESH?LIN.lt:1000,shW:SH_W,shS:SH_S,avgW:AVG_W,avgS:AVG_S,px:midPx(),bid:BID,ask:ASK}),
    credit(v){ if(FRESH){ LIN.cash=r2(LIN.cash+v); freshSync(); } },
    lt(v){ if(FRESH){ LIN.cash=r2(Math.max(0,LIN.cash-v)); LIN.lt=r2(LIN.lt+v); freshSync(); } },
    ltCard(v,pend){ if(pend){ LIN.pend=r2((LIN.pend||0)+v); return; } if(FRESH){ LIN.lt=r2(LIN.lt+v); freshSync(); } },
    limit(px){ if(!dev.classList.contains('on-order')) return; S.limit=true; S.price=String(px.toFixed(2)).replace('.',','); S.field='price'; render({glide:true}); },
    opening(){ nboFinish(); }, stock(ss){ try{ stMode(ss?'ss':'stock'); }catch(_){} goStock(); } };
  window.__NOACC=()=>NBM.on&&NBM.st!=='open';

  // ── R10: единый справочник бумаг, детальная страница бумаги в FR DS, общий каталог, идеи на главной, аналитика ──
  (()=>{ const st=document.createElement('style'); st.textContent=Object.keys(window.TKLG).filter(k=>k!=='qqq'&&/^lg-/.test(window.TKLG[k])).map(k=>'.lg-'+k+'{background-image:url(media/'+window.TKLG[k]+')}').join(''); document.head.appendChild(st); })();
  const dsOpen=(f,x)=>{ if(window.__DS) window.__DS.open(f,x); };
  const dsStock=(k,ss)=>{ closeSheet(); dsOpen('sd',{k,ss:!!ss}); };
  // любая «страница Apple» теперь — детальная страница FR DS (назад из заявки — тоже туда)

  // ── каталог: акции, Single Stock ETF и фонды вперемешку; один и тот же на главной (клиент и новый клиент) и на странице «Каталог» ──
  const HID=[['pltr',0,'+17,9 %','потенциал к входу'],['aapl',2,'+21,3 %','потенциал к входу'],['nvda',1,'+14,6 %','цель аналитика']];
  const W3=(document.querySelector('#scrKind [data-kind="ss"] .k3d')||{}).src||'';
  const tkPx=(k,ss)=>ss?(k==='aapl'?r2(midPx()*SSF()):ssP(k)):(k==='aapl'?midPx():TK[k].p);
  const hidTile=i=>{ const h=HID.find(z=>z[1]===i); return '<div class="tile hid-c tk10i" role="button" tabindex="0" data-hid="'+i+'"><span class="hid-t">Аналитика Freedom</span><i class="hid-ln"></i><b class="hid-k">'+TK[h[0]].t+'</b><b class="hid-p">'+h[2]+'</b><span class="hid-s">'+h[3]+'</span><button class="hid-b" data-hid-all>Все идеи</button></div>'; };
  function tkTile(x,cls){ if(x.startsWith('idea:')) return hidTile(+x.slice(5)); if(x.startsWith('opi:')) return ctOpIdea(+x.slice(4)); if(x==='promo') return '<button class="promo tile ct-bn ct-b-fut" data-promo data-nblt data-bn="fut"><span class="bt">Долгосрочные инвестиции</span><span class="bs">Доход известен заранее</span><span class="bp">до 6,8 %</span></button>';
    const ss=x.startsWith('ss:'), k=ss?x.slice(3):x, t=TK[k], p=tkPx(k,ss), y=t.y;
    return '<div class="'+(cls||'tile')+(ss?' sst':'')+' tk10" role="button" tabindex="0" data-tk="'+k+'" data-x="'+x+'">'+(ss?'<span class="sst-lg">'+lgHTML(k)+'<img class="k3d" src="'+W3+'" alt=""></span>':lgHTML(k))+
      '<span class="n">'+(ss?t.s+' · 1/100':t.n)+'</span><hr><span class="p"'+(k==='aapl'?' data-apx="'+(ss?'s':'w')+'"':'')+'>'+fmt2(p)+'</span><span class="c'+(y<0?' dn':'')+'">'+(y<0?MIN:'+')+dec(Math.abs(y))+' % за год</span>'+
      '<button class="b">'+(ss?'Купить от '+fmt2(p):t.cat==='etf'?'Купить фонд':'Купить')+'</button></div>'; }
  const CATX=CATL.slice(); CATX.splice(3,0,'idea:0'); CATX.splice(12,0,'idea:2'); CATX.splice(22,0,'idea:1');
  const catHit=x=>{ if(!CF) return true; if(x==='promo'||x.startsWith('idea:')||x.startsWith('opi:')) return false; const ss=x.startsWith('ss:'); if(CF==='ss') return ss; if(ss) return false; return TK[x].fl.includes(' '+CF+' '); };
  // главная: 12 плиток в 6 рядов, как в макете; полный список — на странице «Каталог»
  const HOMEX=['aapl','tsla','nvda','idea:0','goog','meta','msft','ss:msft','promo','nflx','visa'];
  function catFill(){ $('catG').innerHTML=HOMEX.map(x=>tkTile(x)).join(''); if($('nbCatG')) $('nbCatG').innerHTML=HOMEX.map(x=>tkTile(x)).join(''); }
  CFL.splice(1,0,['ss','Single Stock ETF']); ['chips','nbChips','ctChips'].forEach(cfBar);
  cfApply=function(){ ['catG','nbCatG'].forEach(id=>{ const g=$(id); if(!g) return; [...g.children].forEach(el=>{ const x=el.dataset.x||(el.dataset.hid!=null?'idea:'+el.dataset.hid:el.classList.contains('promo')?'promo':''); el.classList.toggle('cf-off',!!x&&!catHit(x)); }); });
    CTF=CF; ['chips','nbChips','ctChips'].forEach(id=>{ const b=$(id); if(b) b.querySelectorAll('button[data-f]').forEach(x=>x.classList.toggle('on',x.dataset.f===CF)); }); try{ ctRender(true); }catch(_){} };
  catFill();
  CATL.forEach(x=>{ const k=x.replace('ss:',''); if(TK[k]) CTT[k]=TK[k].fl; });
  ctRender=function(anim){ $('ctG').innerHTML=CATX.filter(catHit).map(x=>tkTile(x,x.startsWith('idea:')||x==='promo'?'tile':'ct-cd')).join('');
    if(anim) [...$('ctG').children].slice(0,8).forEach((el,i)=>{ el.classList.add('ct-in'); el.style.animationDelay=i*35+'ms'; }); };
  setInterval(()=>{ document.querySelectorAll('[data-apx]').forEach(el=>{ const t=fmt2(el.dataset.apx==='s'?r2(midPx()*SSF()):midPx()); if(el.textContent!==t) el.textContent=t; }); },3000);
  document.addEventListener('click',e=>{ const tl=e.target.closest('.tk10[data-x]'); if(!tl) return; e.stopImmediatePropagation(); e.preventDefault();
    const x=tl.dataset.x, ss=x.startsWith('ss:'), k=ss?x.slice(3):x;
    if(e.target.closest('.b')){ if(window.__NOACC&&__NOACC()){ dsOpen('noacc'); return; } r10Order('buy',ss,k); return; }
    dsStock(k,ss); },true);

  // ── портфель: строки других бумаг открывают их страницу, покупки из FR DS добавляют строки ──
  // ── R11: позиции по всем бумагам кроме Apple (q — штуки; у 1/100 — штуки по 1/100), деньги и итоги портфеля ──
  const XHQ={};
  const OSEED={tsla:[1000,3.30],nvda:[1200,1.78],ko:[2000,0.71],msft:[200,4.12],amzn:[300,2.30],qqq:[600,1.53]};
  const xPx=(k,ss)=>ss?ssP(k):TK[k].p;
  const xh=(k,ss)=>{ const id=k+(ss?'s':'w'); if(!XHQ[id]){ const sd=!FRESH&&ss&&OSEED[k]; XHQ[id]={k,ss:!!ss,q:sd?sd[0]:0,avg:sd?sd[1]:0,q0:sd?sd[0]:0,a0:sd?sd[1]:0}; } return XHQ[id]; };
  const xVal=()=>Object.values(XHQ).reduce((a,h)=>a+(h.q-h.q0)*xPx(h.k,h.ss),0);
  const xInv=()=>Object.values(XHQ).reduce((a,h)=>a+(h.q*h.avg-h.q0*h.a0),0);
  const xDay=()=>Object.values(XHQ).reduce((a,h)=>a+(h.q-h.q0)*xPx(h.k,h.ss)*(TK[h.k].d||0)/100,0);
  let OLDC=199.52, XSPENT=0, DEPS=0, WDS=0;
  const tkBy=s=>{ s=s.replace(/\.US$/,'').replace('/100',''); return TKL.find(k=>TK[k].t===s); };
  document.addEventListener('click',e=>{ const r=e.target.closest('#pfSecs .pf-row'); if(!r||r.hasAttribute('data-aapl')||r.hasAttribute('data-opos')||r.classList.contains('dacc')) return;
    const t=(r.querySelector('.m .t')||{}).textContent||'', k=tkBy(t.trim()); if(!k) return; e.stopImmediatePropagation(); e.preventDefault(); dsStock(k,/\/100/.test(t)); },true);
  function xRow(h){ const host=document.querySelector('#pfSecs .pf-sec .pf-bd>div'); if(!host) return; const id=h.k+(h.ss?'s':'w'), t=TK[h.k].t+(h.ss?'/100':'');
    let r=host.querySelector('[data-xk="'+id+'"]')||[...host.querySelectorAll('.pf-row:not([data-aapl])')].find(x=>((x.querySelector('.m .t')||{}).textContent||'').trim().replace(/\.US$/,'')===t);
    if(r&&!r.dataset.x0) r.dataset.x0=r.innerHTML;
    if(!h.q){ if(r){ if(r.dataset.xnew) r.remove(); else r.hidden=true; } return; }
    const px=xPx(h.k,h.ss), val=h.q*px, d=val-h.q*h.avg, html=lgHTML(h.k)+'<span class="m"><span class="t">'+t+'</span><span class="s">'+h.q+' шт. по '+dec(h.avg)+' $</span></span><span class="r"><span class="t">'+dec(val)+'</span><span class="s'+(d<0?' dn':'')+'">'+sgnUsd(d)+' '+(d<0?MIN:'+')+dec(Math.abs(d)/(h.q*h.avg||1)*100,1)+'%</span></span>';
    if(r){ const sid=(r.querySelector('.r .s[id]')||{}).id; r.innerHTML=html; if(sid){ const sp=r.querySelector('.r .s'); if(sp) sp.id=sid; } r.hidden=false; r.dataset.xk=id; } else host.insertAdjacentHTML('beforeend','<button class="pf-row" data-xk="'+id+'" data-xnew="1">'+html+'</button>'); }
  function xTot(){ if(FRESH){ freshSync(); return; }
    ACCS[0].raw=ACCS[0].bal=r2(11200.52-XSPENT); OLDC=r2(Math.max(0,199.52-XSPENT)); BASE_TOT=FR0.tot-XSPENT+xVal(); BASE_STK=FR0.stk+xVal();
    const hf=$('hmFree').querySelector('b'); if(hf) hf.textContent=usdTxt(OLDC); try{ pfLive(); hmDraw(false); }catch(_){} pfArrow(); }
  { const fs0=freshSync; freshSync=function(){ fs0(); if(!FRESH) return; const xv=xVal(); if(xv>0||Object.values(XHQ).some(h=>h.q)){ BASE_TOT+=xv; dev.classList.remove('pf-empty','pf-noshr'); try{ pfLive(); hmDraw(false); }catch(_){} } pfArrow(); }; }
  { const pl0=pfLive; pfLive=function(dir){ pl0(dir); const xv=xVal(); if(!xv&&!Object.values(XHQ).some(h=>h.q!==h.q0)) return;
    if(!FRESH) return;
    const xd=xDay(), v=valF()+xv, iv=SH_W*AVG_W+SH_S*AVG_S+xInv(), all=v-iv;
    if($('pfStk')) $('pfStk').textContent='$'+dec(v);
    const sm=$('pfS_stk'); if(sm){ sm.textContent=sgnUsd(xd)+' ('+(xd<0?MIN:'+')+dec(Math.abs(xd)/(v-xd||1)*100)+' %) за день'; sm.className=xd<0?'dn':''; }
    const an=document.querySelectorAll('.pf-an .row .v'); if(an[0]) an[0].textContent='$'+dec(v); if(an[1]) an[1].textContent='$'+dec(iv); if(an[2]){ an[2].textContent=(all<0?MIN:'+')+'$'+dec(Math.abs(all))+' ('+dec(iv?Math.abs(all)/iv*100:0,1)+' %)'; an[2].className='v '+(all<0?'dn':'up'); } }; }
  // деньги: Apple и любые другие бумаги списывают/зачисляют деньги и у клиента со счётом
  { const b1=bought; bought=function(o){ const sell=SELL(); b1(o); if(!FRESH&&o&&!o.isLimit&&o.total>0){ XSPENT=r2(XSPENT+(sell?-o.total:o.total)); xTot(); } }; }
  { const c0=window.__INV.credit; window.__INV.credit=function(v){ if(v>0) DEPS+=v; else WDS-=v; if(FRESH) return c0(v); XSPENT=r2(XSPENT-v); xTot(); }; }
  { const st0=window.__INV.state; window.__INV.state=()=>Object.assign(st0(),{cash:FRESH?LIN.cash:OLDC,hold:Object.values(XHQ).map(h=>({k:h.k,ss:h.ss,q:h.q,avg:h.avg}))}); }
  function r10Buy(o){}
  // ── R11: заявка, подтверждение со свайпом и «Акции куплены» — один и тот же экран для любой бумаги ──
  let XT=null, XLAST=null;
  const LOGO_A=/img-5c8ddce874\.png|img-a817ca2bca\.png/;
  function xtTxt(root){ if(!XT||!root) return; const t=TK[XT.k], w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n;
    while((n=w.nextNode())){ const v=n.nodeValue; if(/AAPL|Apple/.test(v)) n.nodeValue=v.replace(/AAPL/g,t.t).replace(/Apple Inc\./g,t.n).replace(/Apple/g,t.s); }
    root.querySelectorAll('img').forEach(i=>{ const src=i.getAttribute('src')||''; if(LOGO_A.test(src)||i.dataset.xo){ if(!i.dataset.xo) i.dataset.xo=src; i.setAttribute('src','media/'+window.TKLG[XT.k]); } });
    root.querySelectorAll('.rc-hd').forEach(h=>{ if(!h.querySelector('img.lg')) h.insertAdjacentHTML('afterbegin','<img class="lg" alt="" src="media/'+window.TKLG[XT.k]+'">'); }); }
  const xtUnfix=()=>{ document.querySelectorAll('#scrMain img[data-xo],#scrConfirm img[data-xo]').forEach(i=>{ i.setAttribute('src',i.dataset.xo); delete i.dataset.xo; }); };
  const xtFix=()=>{ if(!XT){ xtUnfix(); return; } ['scrMain','scrConfirm'].forEach(id=>xtTxt($(id))); if(sheet.classList.contains('on')) xtTxt(sheet); };
  const xtFixL=()=>{ xtFix(); setTimeout(xtFix,0); setTimeout(xtFix,60); };
  [['render'],['fillConfirm'],['execDone'],['ordHead']].forEach(()=>{});
  { const f0=render; render=function(o){ f0(o); xtFix(); }; }
  { const f0=fillConfirm; fillConfirm=function(l){ f0(l); if(XT) xtFixL(); }; }
  { const f0=execDone; execDone=function(){ f0(); if(XT) xtFixL(); }; }
  { const f0=ordHead; ordHead=function(){ f0(); xtFix(); }; }
  { const f0=openSheet; openSheet=function(h,c){ f0(h,c); if(XT) xtTxt(sheet); }; }
  { const f0=swapSheet; swapSheet=function(h,c){ f0(h,c); if(XT) xtTxt(sheet); }; }
  { const f0=toast; toast=function(t){ if(XLAST&&Date.now()-XLAST.at<2500) t=t.replace(/AAPL/g,XLAST.t); f0(t); }; }
  function xtEnter(k,ss){ if(XT) xtExit(); const t=TK[k], sp=Math.max(.06,r2(t.p*.0007)), hw=xh(k,false), hs=xh(k,true);
    XT={k,ss:!!ss,ba:[BID,ASK],h:[SH_W,AVG_W,SH_S,AVG_S],tr:TRADES.slice(),q0:[hw.q,hs.q]};
    BID=r2(t.p-sp); ASK=r2(t.p+sp); SH_W=hw.q; AVG_W=hw.avg; SH_S=hs.q/100; AVG_S=hs.avg*100; syncHold(); }
  function xtExit(){ if(!XT) return null; const k=XT.k, ss=XT.ss, hw=xh(k,false), hs=xh(k,true);
    hw.q=SH_W; hw.avg=SH_W?AVG_W:0; hs.q=Math.round(SH_S*100); hs.avg=hs.q?r2(AVG_S/100*100)/100:0;
    BID=XT.ba[0]; ASK=XT.ba[1]; [SH_W,AVG_W,SH_S,AVG_S]=XT.h; syncHold(); TRADES.length=0; XT.tr.forEach(x=>TRADES.push(x));
    XLAST={t:TK[k].t,at:Date.now()}; const q0=XT.q0; XT=null; if(hw.q!==q0[0]) xRow(hw); if(hs.q!==q0[1]) xRow(hs);
    if(window.__DS&&__DS.send) __DS.send({type:'hold',k,w:hw.q,wa:hw.avg,s:hs.q,sa:hs.avg}); return {k,ss}; }
  function r10Order(side,ss,k){ closeSheet(); if(XT) xtExit(); if(k&&k!=='aapl') xtEnter(k,ss);
    stMode(ss?'ss':'stock'); setSide(side==='sell'?'sell':'buy'); dev.classList.add('on-stock'); goOrder(); syncStatus(); if(XT){ render(); xtFix(); } }
  goStock=function(){ const ss=STM==='ss'; dev.classList.remove('on-order','on-kind','on-stock'); $('scrStock').setAttribute('aria-hidden','true'); syncStatus(); const x=XT?xtExit():null; if(x){ xTot(); dsStock(x.k,x.ss); } else dsStock('aapl',ss); };
  { const g0=goHome; goHome=function(){ const r=g0.apply(this,arguments); if(XT&&!XT.fin){ xtExit(); xTot(); } return r; }; }
  { const fin0=$('fin').onclick; $('fin').onclick=function(){ if(!XT){ fin0(); setTimeout(xTot,60); return; }
      XT.fin=true; const o=order(); goBack(); bought(o); const x=xtExit(); goHome(); S=JSON.parse(JSON.stringify(INIT)); KIND=null; dev.classList.remove('on-kind','k-whole','k-ss'); render(); xTot();
      const sc=$('hmScroll'), blk=$('pfBlk'); setTimeout(()=>{ sc.scrollTo({top:Math.max(0,blk.offsetTop-70),behavior:'smooth'}); const r=document.querySelector('.pf-row[data-xk="'+x.k+(x.ss?'s':'w')+'"]'); if(r){ r.classList.remove('flash'); void r.offsetWidth; r.classList.add('flash'); } },380);
      setTimeout(resetDone,450); }; }
  // смена сценария — позиции и деньги с нуля
  { const sg0=scGo; scGo=function(k){ if(XT){ XT.fin=true; xtExit(); } document.querySelectorAll('#pfSecs [data-xnew]').forEach(r=>r.remove()); document.querySelectorAll('#pfSecs [data-x0]').forEach(r=>{ r.innerHTML=r.dataset.x0; r.hidden=false; delete r.dataset.x0; delete r.dataset.xk; });
      Object.keys(XHQ).forEach(i=>delete XHQ[i]); XSPENT=0; OLDC=199.52; DEPS=0; WDS=0; ACCS[0].raw=ACCS[0].bal=11200.52; if(window.__DS&&__DS.send) __DS.send({type:'hold-reset'}); return sg0(k); }; }
  // ── R11: аналитика портфеля нового клиента — по его бумагам и деньгам ──
  const secF=()=>valF()+xVal(), cbF=()=>SH_W*AVG_W+SH_S*AVG_S+xInv();
  function anFresh(){ { const P=AP[aper], sec=secF(), cb=cbF()||sec;
      if(P.k==='all'){ const jr=rng(17), n=AN_N, w=[0]; for(let i=1;i<n;i++) w.push(w[i-1]+(jr()-.5)*2); const wn=w[n-1], mx=Math.max(1,...w.map(Math.abs));
        const val=w.map((v,i)=>{ const t=i/(n-1); return cb*.985+(sec-cb*.985)*t+(v-t*wn)/mx*Math.max(sec,cb)*.006; }); val[n-1]=sec; return {val,inv:Array(n).fill(cb)}; }
      const H=HP[P.hp]; const v=H.rel.map(r=>r*sec); const k=sec-v[v.length-1], k0=H.rel[0]*sec-v[0]; return {val:v.map((x,i)=>x+k0+(k-k0)*i/(v.length-1)),inv:null}; } }
  { const ah0=anHead; anHead=function(dir){ if(!FRESH) return ah0(dir); const P=AP[aper], {val}=anSeries(), sec=secF(), cb=cbF();
      const roll=t=>{ if(dir) rollText($('anResV'),t,dir,true); else $('anResV').textContent=t; };
      const base=P.k==='all'?cb:val[0], d=sec-base; $('anResL').textContent='Результат '+P.l; roll(sgnUsd(d));
      $('anResP').textContent=(d<0?MIN:'+')+dec(Math.abs(base?d/base*100:0),1)+' %'; $('anResP').className='pill'+(d<0?' dn':'');
      $('anResS').textContent=P.k==='all'?'от вложенных $'+dec(cb,0):'от $'+dec(base,0)+' '+P.from; }; }
  { const mv=[...document.querySelectorAll('#scrAn .an-card')].find(c=>/Движение денег/.test(c.textContent)); if(mv){ mv.classList.add('mv10'); const t=mv.querySelector('.mr.tot .k'); if(t) t.innerHTML='Портфель сейчас'; } const M0=mv?mv.innerHTML:'', rs0=$('rsV')?$('rsV').textContent:'';
    const oa0=openAn; openAn=function(){ if(mv){ mv.innerHTML=M0; if(FRESH){ const sec=secF(), cb=cbF(), d=sec-cb, v=mv.querySelectorAll('.mr .v');
        if(v[0]) v[0].textContent='+$'+dec(DEPS); if(v[1]) v[1].textContent=(WDS?MIN:'')+'$'+dec(WDS); const nw=$('mvNow'); if(nw) nw.textContent='$'+dec(sec);
        const tot=Math.max(1,cb+Math.max(0,d)), a=mv.querySelector('.stk .a'), b=mv.querySelector('.stk .b'); if(a) a.style.setProperty('--w',(cb/tot*100).toFixed(1)); if(b) b.style.setProperty('--w',(Math.max(0,d)/tot*100).toFixed(1));
        const lg=mv.querySelectorAll('.stk-lg b'); if(lg[0]) lg[0].textContent='$'+dec(cb,0); if(lg[1]){ lg[1].textContent=sgnUsd(d); lg[1].className=d<0?'dn':'up'; }
        const nt=mv.querySelector('.note'); if(nt) nt.textContent='Вы внесли $'+dec(DEPS,0)+(WDS?', вывели $'+dec(WDS,0):'')+'. Бумаги стоят $'+dec(sec)+', результат инвестиций — '+sgnUsd(d)+'.'; } }
      if($('rsV')){ $('rsV').textContent=FRESH?sgnUsd(secF()-cbF()):rs0; }
      try{ if($('cpB')){ $('cpB').innerHTML=cpBody(); bindCp10&&bindCp10(); } }catch(_){}
      return oa0.apply(this,arguments); }; }
  // ── R12: целые акции Apple видны в портфеле; продажа — как в макете 9.6–9.8 ──
  { const pl1=pfLive; pfLive=function(dir){ pl1(dir); const wr=document.querySelector('#pfSecs .pf-row[data-aapl]:not([data-ss])'); if(wr) wr.hidden=!SH_W; const sr=document.querySelector('#pfSecs .pf-row[data-aapl][data-ss]'); if(sr) sr.hidden=!SH_S; }; }
  const avTxt=()=>{ const ss=KIND==='ss', n=ss?Math.round(SH_S*100):HAVE(), t=XT?TK[XT.k].t:'AAPL'; return ss?n+' шт. '+t+'/100':String(n).replace('.',',')+' '+plural(n)+' '+t; };
  { const r1=render; render=function(o){ r1(o); if(!SELL()) return; const over=$('haveQ').classList.contains('bad');
      $('haveQ').innerHTML=over?'Больше, чем доступно · <b>всё</b>':'Доступно '+avTxt();
      const st=$('sellTo'); if(st) st.innerHTML='<span class="aic gl sm">GL</span><span class="n">Доступно</span><span class="b">'+avTxt()+'</span>'; }; }
  { const f1=fillConfirm; fillConfirm=function(l){ f1(l); if(!SELL()) return; const rc=$('receipt'), rows=[...rc.querySelectorAll('.rc')], i=rows.findIndex(r=>/Вы продаёте/.test(r.textContent));
      if(i>=0&&!rc.querySelector('.rc-avl')){ const cl=rows[i].cloneNode(true); cl.classList.add('rc-avl'); cl.querySelector('.k').textContent='Доступно'; cl.querySelector('.v').textContent=avTxt().replace(/ [A-Z]+(\/100)?$/,''); rows[i].after(cl); }
      rc.querySelectorAll('.rc').forEach(r=>{ const k=r.querySelector('.k'); if(k&&k.textContent==='Зачислим на'){ const v=r.querySelector('.v'); if(v) v.innerHTML='Глобальный счёт'; } }); }; }
  { const e1=execDone; execDone=function(){ e1(); if(!SELL()||!DONE) return; const o=DONE; $('doneTxt').textContent='Деньги уже на счёте. Цена — '+fmt2(o.ss?(o.lot||r2(o.price*SSF())):o.price); }; }
  function r10Pf(){ closeSheet(); dev.classList.remove('on-stock','on-order','on-ct','on-an'); syncStatus(); const b=$('pfBlk'); if(b) setTimeout(()=>$('hmScroll').scrollTo({top:Math.max(0,b.offsetTop-90),behavior:'smooth'}),350); }

  // ── «Мой портфель»: вместо шестерёнки — стрелка в аналитику портфеля (если в портфеле есть бумаги) ──
  const ARW='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5.5 15.5 12 9 18.5" stroke="#0F0F0F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const hasPf=()=>!FRESH||SHARES>1e-9||Object.values(XHQ).some(h=>h.q>0);
  function pfArrow(){ document.querySelectorAll('.pf-gear').forEach(g=>{ g.innerHTML=ARW; g.removeAttribute('data-t'); g.setAttribute('aria-label','Аналитика портфеля'); g.classList.add('pf-arw'); g.hidden=!hasPf(); }); }
  pfArrow();
  document.addEventListener('click',e=>{ const g=e.target.closest('.pf-gear')||(e.target.closest('.hm-h')&&e.target.closest('.hm-h').querySelector('.pf-gear.pf-arw:not([hidden])')); if(!g) return; e.stopImmediatePropagation(); e.preventDefault(); if(hasPf()) openAn(); },true);
  new MutationObserver(()=>{ if(document.querySelector('.pf-gear:not(.pf-arw)')) pfArrow(); }).observe($('scrHome'),{childList:true,subtree:true});

  // ── главная: карточки «Аналитика Freedom» → подробная идея ──
  function hmIdeas(){ const d=document.createElement('div'); d.className='hm-blk hid-blk';
    d.innerHTML='<div class="hm-h">Инвестидеи<button class="hid-all" data-hid-all>Все</button></div><div class="hid-row">'+HID.map(([k,i,p,s])=>'<div class="hid-c" role="button" tabindex="0" data-hid="'+i+'"><span class="hid-t">Аналитика Freedom</span><i class="hid-ln"></i><b class="hid-k">'+TK[k].t+'</b><b class="hid-p">'+p+'</b><span class="hid-s">'+s+'</span><button class="hid-b" data-hid-all>Все идеи</button></div>').join('')+'</div>';
    return d; }

  // ── главная: блок «Аналитика Freedom» (обзор рынка + инвестидеи) — и у клиента, и у новичка ──
  // карточки — как в Figma (витрина 14616:22956): белые, иконка/логотип, заголовок в 2 строки, теги, цель с прогрессом, автор, «Подробнее» + колокольчик
  { const DOC='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><mask id="hafDocM" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="1" width="17" height="21"><path d="M13.95 2.02H15.36C15.73 2.03 16.09 2.17 16.36 2.43L19.51 5.59C19.77 5.86 19.92 6.21 19.92 6.58V8.00H15.94C15.41 8.00 14.90 7.79 14.53 7.41C14.16 7.04 13.95 6.53 13.95 6.01V2.02Z" fill="url(#hafDocG)"/><path d="M15.94 8.00C15.41 8.00 14.91 7.79 14.53 7.41C14.16 7.04 13.95 6.53 13.95 6.01V2.02H8.77C7.71 1.91 6.64 2.02 5.63 2.34C5.06 2.63 4.61 3.09 4.32 3.66C3.99 4.67 3.87 5.74 3.99 6.80V17.15C3.87 18.21 3.99 19.29 4.32 20.30C4.61 20.86 5.07 21.31 5.63 21.60C6.64 21.94 7.71 22.05 8.77 21.93H15.14C16.20 22.05 17.28 21.94 18.29 21.60C18.85 21.32 19.31 20.86 19.59 20.30C19.930 19.29 20.04 18.21 19.92 17.15V8.00H15.94ZM11.96 17.95H8.97C8.71 17.95 8.45 17.85 8.27 17.66C8.08 17.47 7.98 17.22 7.98 16.96C7.98 16.69 8.08 16.44 8.27 16.25C8.45 16.07 8.71 15.96 8.97 15.96H11.96C12.22 15.96 12.48 16.07 12.66 16.25C12.85 16.44 12.95 16.69 12.95 16.96C12.95 17.22 12.85 17.47 12.66 17.66C12.48 17.85 12.22 17.95 11.96 17.95ZM14.94 13.97H8.97C8.71 13.970 8.45 13.86 8.27 13.68C8.08 13.49 7.98 13.24 7.98 12.97C7.98 12.71 8.08 12.46 8.27 12.27C8.45 12.08 8.71 11.98 8.97 11.98H14.94C15.21 11.98 15.46 12.08 15.65 12.27C15.83 12.46 15.94 12.71 15.94 12.97C15.94 13.24 15.83 13.49 15.65 13.68C15.46 13.86 15.21 13.97 14.94 13.97Z" fill="white"/></mask><g mask="url(#hafDocM)"><rect width="24" height="24" fill="currentColor"/></g><defs><linearGradient id="hafDocG" x1="13.95" y1="8.47" x2="17.93" y2="3.99" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.4"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>';
    const LG={pltr:'media/img-eab4c066fe.svg',nvda:'media/img-581c6a9bf9.png',aapl:'media/img-5c8ddce874.png'};
    const TG={'Покупать':'g','Держать':'b','В работе':'b','Риск высокий':'o','Риск средний':'y'};
    const AFI=[{k:'pltr',i:0,co:'Palantir Technologies · PLTR',t:'Триумф суверенного ИИ и коммерческая экспансия Palantir',tags:['Покупать','В работе','Риск высокий'],g:230,p:'+17,9 %',pr:19,au:'Алмас Альмаганбетов · 19 окт'},
      {k:'nvda',i:1,co:'NVIDIA Corp · NVDA',t:'Дата-центры тянут выручку: суперцикл спроса на ускорители',tags:['Держать','Риск средний'],g:220,p:'+14,6 %',pr:6,au:'Айгерим Сапарова · 12 окт'},
      {k:'aapl',i:2,co:'Apple · AAPL',t:'Сервисы и ИИ в iPhone поддержат выручку Apple',tags:['Покупать','В работе','Риск средний'],g:185,p:'+21,3 %',pr:8,au:'Данияр Касымов · 8 окт'}];
    const BELL='<button class="haf-bell" data-haf-bell aria-label="Уведомления">'+nvI('bell',20,2)+'</button>';
    const foot=(au,attr)=>'<span class="haf-au">'+au+'</span><span class="haf-bt"><button class="haf-more" '+attr+'>Подробнее</button>'+BELL+'</span>';
    const b=document.createElement('div'); b.className='hm-blk haf'; b.id='hmAnF';
    b.innerHTML='<div class="haf-h"><span><b>Аналитика Freedom</b><small>Обзоры рынка и инвестидеи наших аналитиков</small></span><button class="haf-all" data-hid-all>Все<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>'+
      '<div class="haf-row">'+
        '<div class="haf-c"><div class="haf-hd" data-haf-news><span class="haf-ic">'+DOC+'</span><span class="haf-tx"><small>Обзор рынка</small><b>Направление торгам задаёт NVIDIA</b></span></div>'+
          '<p class="haf-d">Главным событием дня станет отчёт NVIDIA (NVDA), который выйдет после закрытия, в 16:20 по восточному времени (ET). Это первая публикация после отставки Дженсена Хуанга.</p>'+foot('Михаил Денисламов и ещё 1 · 17 ноя','data-haf-news')+'</div>'+
        AFI.map(x=>'<div class="haf-c"><div class="haf-hd" data-hid="'+x.i+'"><span class="haf-lg"><img src="'+LG[x.k]+'" alt=""></span><span class="haf-tx"><small>'+x.co+'</small><b>'+x.t+'</b></span></div>'+
          '<span class="haf-tags">'+x.tags.map(t=>'<i class="haf-tag '+TG[t]+'">'+t+'</i>').join('')+'</span>'+
          '<span class="haf-g"><span>Цель $'+x.g+'</span><span class="up">'+x.p+' к входу</span></span><i class="haf-p"><b style="width:'+x.pr+'%"></b></i>'+foot(x.au,'data-hid="'+x.i+'"')+'</div>').join('')+
      '</div>';
    const place=()=>{ const nb=dev.classList.contains('nb'), cat=$('nbCat'), pm=$('pmHB');
      if(nb&&cat){ if(b.previousElementSibling!==cat) cat.after(b); } else if(pm){ if(b.nextElementSibling!==pm) pm.before(b); } };
    place(); new MutationObserver(place).observe(dev,{attributes:true,attributeFilter:['class']});
    b.addEventListener('click',e=>{ if(e.target.closest('[data-haf-news]')){ e.stopPropagation(); dsOpen('news'); return; }
      if(e.target.closest('[data-haf-bell]')){ e.stopPropagation(); if(dev.classList.contains('nb')&&window.__DS) window.__DS.open('noacc'); else toast('Уведомления о новых материалах включены'); } }); }

  document.addEventListener('click',e=>{ const a=e.target.closest('[data-hid-all]'); if(a){ e.stopImmediatePropagation(); const tb=document.querySelectorAll('#tabs>button')[3]; if(tb) tb.click(); return; }
    const c=e.target.closest('[data-hid]'); if(c){ e.stopImmediatePropagation(); dsOpen('idea',{i:+c.dataset.hid}); } },true);

  // ── аналитика портфеля: график как на главной (живой), прогноз на год справа от легенды, слайдер и режим рынка ──
  { const jr=rng(91), w=[0]; for(let i=1;i<AN_N;i++) w.push(w[i-1]+(jr()-.5)*2+(jr()<.06?(jr()-.5)*7:0));
    const wn=w[AN_N-1], wav=w.map((v,i)=>v-i/(AN_N-1)*wn), wmax=Math.max(...wav.map(Math.abs))||1;
    const R=34, ma=anInv.map((_,i)=>{ let a=0,n=0; for(let j=Math.max(0,i-R);j<=Math.min(AN_N-1,i+R/3);j++){ a+=anInv[j]; n++; } return a/n; });
    anSeries=function(){ const P=AP[aper], sec=SEC();
      if(P.k==='all'){ const gEnd=sec/INV-1, raw=ma.map((v,i)=>{ const t=i/(AN_N-1); return v*(1+gEnd*Math.pow(t,1.1)+wav[i]/wmax*.07*(.35+t)); });
        const d=sec-raw[AN_N-1], val=raw.map((v,i)=>v+d*Math.pow(i/(AN_N-1),4)); return {val,inv:anInv}; }
      const H=HP[P.hp]; const v=H.rel.map(r=>r*sec); const k=sec-v[v.length-1], k0=H.rel[0]*sec-v[0]; return {val:v.map((x,i)=>x+k0+(k-k0)*i/(v.length-1)),inv:null}; }; }
  { const lg=document.querySelector('#scrAn .an-lg'); if(lg){ lg.innerHTML='<span class="an-l1"><span><i class="ln"></i>Ваш портфель</span><span id="anLgInv"><i class="ln st"></i>Вложено</span></span><span class="an-l2">бумаги, без свободных денег</span>'; }
    const fcb=$('anFc'); if(fcb) fcb.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-5 4 3 4-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8.5 21 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/></svg><span>Прогноз на год</span>'; }
  const rd=(v,lab)=>{ const cx=163,cy=104,R=62,a=i=>-Math.PI/2+i*2*Math.PI/5,P=(i,r)=>[cx+Math.cos(a(i))*r,cy+Math.sin(a(i))*r],poly=r=>[0,1,2,3,4].map(i=>P(i,r).map(x=>x.toFixed(1)).join(',')).join(' '),pts=v.map((x,i)=>P(i,Math.max(.06,x/6)*R));
    const L=[['Цена бизнеса',cx,cy-R-10,'middle'],['Прогноз|роста',cx+R+12,cy-26,'start'],['Прошлые|результаты',cx+R*.62+8,cy+R*.85+4,'start'],['Финансовая|устойчивость',cx-R*.62-8,cy+R*.85+4,'end'],['Дивиденды',cx-R-12,cy-22,'end']];
    return '<svg class="an-rd" viewBox="0 0 326 206" width="100%"><g fill="none" stroke="#E5E5EA">'+[1,.66,.33].map(k=>'<polygon points="'+poly(R*k)+'"/>').join('')+[0,1,2,3,4].map(i=>'<line x1="'+cx+'" y1="'+cy+'" x2="'+P(i,R)[0].toFixed(1)+'" y2="'+P(i,R)[1].toFixed(1)+'"/>').join('')+'</g>'+
      '<polygon points="'+pts.map(p=>p.map(x=>x.toFixed(1)).join(',')).join(' ')+'" fill="rgba(78,188,115,.32)" stroke="#4EBC73" stroke-width="2"/>'+pts.map(p=>'<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.5" fill="#4EBC73"/>').join('')+
      L.map(([t,x,y,an])=>'<text x="'+x+'" y="'+y+'" text-anchor="'+an+'" font-size="12" fill="#3C3C43">'+t.split('|').map((s,j)=>'<tspan x="'+x+'" dy="'+(j?15:0)+'">'+s+'</tspan>').join('')+'</text>').join('')+'</svg>'; };
  const pb=(l,v,w,c,n,nc)=>'<div class="an-pb"><div class="r"><span>'+l+'</span><span>'+v+'</span></div><i><b class="'+c+'" style="width:'+w+'%"></b></i>'+(n?'<span class="nt '+(nc||'')+'">'+(nc==='grn'?'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>':'')+n+'</span>':'')+'</div>';
  // «Режим рынка» — 4-я карточка карусели: сигналы точками и карта «спрос на риск × давление ставок и цен» с траекторией за 7 месяцев
  const MKP=[[-.78,.6,'мар'],[-.12,.48],[.75,.7],[.6,-.3],[-.08,-.16],[-.1,-.05],[.28,.66,'сейчас']];
  function mkMap(){ const W=326,H=250,X=v=>W/2+v*(W/2-18),Y=v=>H/2-v*(H/2-18),n=MKP.length;
    let h='<svg class="mk-map" viewBox="0 0 '+W+' '+H+'" width="100%"><rect width="'+W+'" height="'+H+'" rx="20" class="z0"/><rect x="'+(W*.35)+'" y="0" width="'+(W*.3)+'" height="'+H+'" class="z1"/><rect x="0" y="'+(H*.35)+'" width="'+W+'" height="'+(H*.3)+'" class="z1"/>'+
      '<line x1="'+(W/2)+'" y1="10" x2="'+(W/2)+'" y2="'+(H-10)+'" class="ax"/><line x1="10" y1="'+(H/2)+'" x2="'+(W-10)+'" y2="'+(H/2)+'" class="ax"/>';
    for(let i=1;i<n;i++){ const a=MKP[i-1],b=MKP[i],o=(.35+.65*i/(n-1)).toFixed(2); h+='<line x1="'+X(a[0]).toFixed(1)+'" y1="'+Y(a[1]).toFixed(1)+'" x2="'+X(b[0]).toFixed(1)+'" y2="'+Y(b[1]).toFixed(1)+'" class="tr" stroke-opacity="'+o+'" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round"/>'; }
    MKP.forEach((p,i)=>{ const last=i===n-1,o=(.35+.65*i/(n-1)).toFixed(2); h+=last?'<circle cx="'+X(p[0]).toFixed(1)+'" cy="'+Y(p[1]).toFixed(1)+'" r="11" class="now" stroke-width="4"/>':'<circle cx="'+X(p[0]).toFixed(1)+'" cy="'+Y(p[1]).toFixed(1)+'" r="5" class="pt" fill-opacity="'+o+'"/>';
      if(p[2]==='мар') h+='<text x="'+(X(p[0])+9).toFixed(1)+'" y="'+(Y(p[1])+5).toFixed(1)+'" font-size="13" class="lb">мар</text>';
      if(last){ const lx=X(p[0])-20,ly=Y(p[1]); h+='<rect x="'+(lx-76)+'" y="'+(ly-15)+'" width="70" height="30" rx="15" class="pt"/><text x="'+(lx-41)+'" y="'+(ly+5)+'" text-anchor="middle" font-size="15" font-weight="600" class="nl">сейчас</text>'; } });
    return h+'</svg>'; }
  const mkDots=(n,of)=>'<span class="mk-dots">'+Array.from({length:of},(_,i)=>'<i class="'+(i<n?'on':'')+'"></i>').join('')+'</span>';
  const mkRegime=()=>'<div class="an-card an-s an-mk2"><span class="mk-eb">По рыночным данным</span><h3>Режим рынка</h3><span class="mk-tag"><i></i>Смешанные сигналы</span>'+
    '<p class="mk-t">Давление ставок и цен за 3 месяца усилилось. По спросу на риск сигналы расходятся</p><div class="mk-meta"><span class="mk-d">25 сен 2026 · за 3 месяца</span>'+
    '<span class="mk-r">'+mkDots(2,3)+'Спрос на риск — 2 из 3</span><span class="mk-r">'+mkDots(3,3)+'Давление ставок и цен — 3 из 3</span></div>'+
    '<div class="mk-q"><div class="mk-qm"><div class="mk-row"><span class="mk-yl"><em>← слабее</em><b>Давление ставок и цен</b><em>сильнее →</em></span>'+mkMap()+'</div><div class="mk-xl"><em>← слабее</em><b>Спрос на риск</b><em>сильнее →</em></div></div></div>'+
    '<button class="mk-why" id="anWhy">Почему так</button><p class="mk-fn">Описывает прошлое и текущее состояние. Не прогноз и не рекомендация.</p></div>';
  const IXS=[['S&P 500 · SPY','SPY · S&P 500','S&P 500',968.08],['Nasdaq-100 · QQQ','QQQ · Nasdaq-100','Nasdaq-100',1412.30],['Russell 2000 · IWM','IWM · Russell 2000','Russell 2000',402.15]];
  const CPP=[['Всё время',1],['За год',.62],['За месяц',.11]];
  let cpI=0, cpP=0, bindCp10=null;
  function cpChart(){ const {val,inv}=(()=>{ const a=aper; aper=0; const s=anSeries(); aper=a; return s; })(), n=val.length, W=326, H=150, k=IXS[cpI][3]/840;
    const ix=FRESH?val.map((v,i)=>{ const t=i/(n-1); return v*(1+[.009,.014,.004][cpI]*t)+Math.sin(i/9)*v*.002*t; }):val.map((v,i)=>{ const t=i/(n-1); return inv[i]+(v-inv[i])*k+Math.sin(i/9)*28*t; }); if(!FRESH) ix[n-1]=val[n-1]+IXS[cpI][3]-840;
    const s0=Math.floor((n-1)*(1-CPP[cpP][1])), V=val.slice(s0), I=ix.slice(s0), N=inv.slice(s0), all=V.concat(I,N), mx=Math.max(...all), mn=Math.min(...all), Y=p=>8+(mx-p)/((mx-mn)||1)*(H-20), X=i=>i/(V.length-1)*W;
    const L=a=>a.map((p,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(p).toFixed(1)).join('');
    return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" height="'+H+'" preserveAspectRatio="none"><path d="'+L(V)+'L'+W+' '+H+'L0 '+H+'Z" fill="rgba(78,188,115,.18)"/><path d="'+L(N)+'" fill="none" stroke="#AEAEB2" stroke-width="1.3" stroke-dasharray="3 3"/><path d="'+L(I)+'" fill="none" stroke="#0A84FF" stroke-width="1.6" stroke-dasharray="2 2"/><path d="'+L(V)+'" fill="none" stroke="#4EBC73" stroke-width="2"/><circle cx="'+W+'" cy="'+Y(V[V.length-1]).toFixed(1)+'" r="4" fill="#4EBC73"/></svg>'; }
  function cpBody(){ const ix=IXS[cpI], f=CPP[cpP][1], fr=FRESH&&typeof secF==='function', B=fr?Math.max(1,cbF()):10161, M=fr?secF()-cbF():840, my=M*f, iv=fr?my+B*[.009,.014,.004][cpI]*f:ix[3]*f, base=B*(cpP&&!fr?1-f*0.3:1), d=iv-my, PV=fr?secF():11001;
    return '<div class="sx cp-seg" id="cpSeg" style="--n:3;--i:'+cpP+'"><span class="pl"></span>'+CPP.map(p=>'<button>'+p[0]+'</button>').join('')+'</div>'+
      '<div class="cp-v"><span><em>Ваш портфель</em><b>$'+dec(PV)+'</b></span><span><em>'+ix[1]+'</em><b>$'+dec(PV+d)+'</b></span></div><div class="cp-ch">'+cpChart()+'</div>'+
      '<div class="cp-x"><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></div><div class="cp-lg"><span><i class="g"></i>Ваш портфель</span><span><i class="b"></i>'+ix[1]+'</span><span><i class="n"></i>Вложено</span></div>'+
      '<div class="cp-ch2">'+IXS.map((x,i)=>'<button class="'+(i===cpI?'on':'')+'" data-cpi="'+i+'">'+x[0]+'</button>').join('')+'</div>'+
      '<div class="cp-r"><span>Ваш портфель</span><b>'+sgnUsd(my)+' · '+sgnPct(my/base*100).replace('%',' %')+'</b></div><div class="cp-r"><span>Если бы в '+ix[2]+'</span><b>'+sgnUsd(iv)+' · '+sgnPct(iv/base*100).replace('%',' %')+'</b></div>'+
      '<div class="cp-r"><span>Разница</span><b>$'+dec(Math.abs(d))+' в пользу '+(d>0?'фонда':'портфеля')+'</b></div>'; }
  { const mv=[...document.querySelectorAll('#scrAn .an-card')].find(c=>/Движение денег/.test(c.textContent)); if(mv){
    const sl=document.createElement('div'); sl.className='an-slw';
    sl.innerHTML='<div class="an-sl" id="anSl"><div class="an-card an-s"><h3>Сравнение доходности</h3><p class="sub">Если бы те же пополнения и выводы шли в индексный фонд</p><div id="cpB">'+cpBody()+'</div></div>'+
      '<div class="an-card an-s"><h3>Бизнес</h3><p class="sub">По отчётности за последний год · в сравнении с рынком (S&P 500)</p><span class="an-tg">Демонстрационные данные</span>'+rd([1,4.5,4.5,5.5,2.8])+
        pb('Цена бизнеса','1,0/6',16.7,'org','Бумаги портфеля дороже рынка по прибыли и выручке','org')+pb('Прогноз роста','4,5/6',75,'grn','Аналитики ждут роста выше рынка','')+pb('Прошлые результаты','4,5/6',75,'grn','Большинство компаний стабильно росли','')+
        pb('Финансовая устойчивость','5,5/6',91.7,'grn','У большинства компаний низкий долг','grn')+pb('Дивиденды','2,8/6',46.7,'org','Доходность ниже рынка','org')+'</div>'+
      '<div class="an-card an-s"><h3>Цена</h3><p class="sub">За год, по 25 сен · в сравнении с рынком (S&P 500)</p><span class="an-k">Колебания цены</span>'+pb('Портфель','25,2 % в год',84,'org','Почти в 2 раза сильнее рынка','org')+pb('Рынок','13,0 % в год',43,'grn','','')+
        '<span class="an-k">Бумаги портфеля — от спокойных к резким</span><div class="an-tks">'+['AGG','KO','QQQ','AAPL','MSFT','AMZN','NVDA','TSLA'].map(t=>'<span>'+t+'</span>').join('')+'</div><hr>'+
        '<span class="an-k">Динамика цены</span><div class="cp-r"><span>Портфель</span><b>Близко к рынку</b></div><div class="cp-r"><span>Как рынок</span><b>MSFT, NVDA, TSLA, AAPL</b></div><div class="cp-r"><span>Сильнее рынка</span><b>AMZN, KO</b></div><p class="an-fn">Динамика — по 90 % портфеля (без QQQ и AGG), колебания — по всему портфелю</p></div>'+
      mkRegime()+'</div>'+
      '<div class="an-dots"><span class="pgc" id="anDots"><i class="on"></i><i></i><i></i><i></i></span></div>';
    mv.after(sl);
    $('anSl').addEventListener('scroll',()=>{ const s=$('anSl'), i=Math.round(s.scrollLeft/(s.firstElementChild.offsetWidth+12)); $('anDots').querySelectorAll('i').forEach((d,j)=>d.classList.toggle('on',j===i)); },{passive:true});
    $('anWhy').onclick=()=>dsOpen('why');
    const bindCp=()=>{ seg($('cpSeg'),i=>{ cpP=i; $('cpB').innerHTML=cpBody(); bindCp(); }); }; bindCp10=bindCp;
    bindCp();
    $('cpB').addEventListener('click',e=>{ const b=e.target.closest('[data-cpi]'); if(!b) return; cpI=+b.dataset.cpi; $('cpB').innerHTML=cpBody(); bindCp(); });
    // макет 12.1: «Сравнение доходности» — отдельной карточкой, «Бизнес / Цена / Режим рынка» — одна карточка с табами (вместо карусели)
    { const car=$('anSl'), cards=[...car.children], cmp=cards[0], P=cards.slice(1), L=['Бизнес','Цена','Режим рынка'];
      cmp.classList.remove('an-s'); cmp.classList.add('an-cmp'); sl.before(cmp);
      const tb=document.createElement('div'); tb.className='an-card an-tabs';
      tb.innerHTML='<div class="sx an-tsg" id="anTab" style="--n:3;--i:0"><span class="pl"></span>'+L.map(l=>'<button>'+l+'</button>').join('')+'</div>';
      P.forEach((c,i)=>{ const h=c.querySelector(':scope>h3'); if(h&&i<2) h.remove(); if(i===2){ const h2=c.querySelector(':scope>h3'); if(h2) h2.remove(); } const pn=document.createElement('div'); pn.className='an-tp'+(c.classList.contains('an-mk2')?' an-mk2':''); pn.hidden=i>0; while(c.firstChild) pn.appendChild(c.firstChild); tb.appendChild(pn); });
      sl.replaceWith(tb);
      // «Бизнес» и «Цена» — новый формат «Профиля портфеля» (12.1): круги долей по критериям, шкалы с бумагами; строки открывают шторки
      const pn=tb.querySelectorAll('.an-tp');
      const CH16='<svg viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      // Title · L · Type=Button (Ghost S); List Item · Compact + Arrow; Progress Bar · S — по метрикам и токенам FR-T
      const TTL=(t,btn,at)=>'<div class="pfz-ttl"><span class="t">'+t+'</span><button class="pfz-gh" '+(at||'')+'>'+btn+CH16+'</button></div>';
      const PB=(t,v,w,c)=>'<div class="pfz-pb'+(c?' '+c:'')+'"><div class="lbl"><span class="t">'+t+'</span><span class="v">'+v+'</span></div><div class="tr"><i style="width:'+w+'%"></i></div></div>';
      pn[0].innerHTML='<p class="pfz-s">По отчётности за последний год · в сравнении с рынком (S&P 500)</p><span class="pfz-tg">Демонстрационные данные</span>'+pfzRadar(PFZ.radar)+
        '<div class="pfz-lgp">'+PFZ.bz.map((b,i)=>'<button class="pfz-li" data-pfbz="'+i+'"><span class="r"><span class="tc"><span class="tt">'+b.t+'</span><span class="st">'+b.v+' из 6 условий</span></span><span class="ch">'+CH16+'</span></span><span class="pfz-dots">'+b.p.map(p=>pfzPie(p,24)).join('')+'</span></button>').join('')+'</div>'+
        '<p class="pfz-ds">Описывает прошлое и текущее состояние. Не прогноз и не рекомендация.</p>';
      pn[1].innerHTML='<p class="pfz-s">За год, по 25 сен · в сравнении с рынком (S&P 500)</p>'+
        '<div class="pfz-dyn" data-pfvol role="button" tabindex="0">'+TTL('Колебания цены','почти в 2 раза сильнее')+PB('Портфель','<b>25,2 %</b> в год',50)+PB('Рынок','<b>13,0 %</b> в год',26,'info')+
        '<span class="pfz-k">Бумаги портфеля</span>'+pfzPills(PFZ.vol)+'</div><i class="pfz-hr"></i>'+
        '<div class="pfz-dyn" data-pfdyn role="button" tabindex="0">'+TTL('Динамика цены','близко к рынку')+pfzScale(PFZ.dyn.dot)+pfzPills(PFZ.dyn.t)+
        '<div class="pfz-lg"><span>меньше</span><b>как у рынка</b><span>больше</span></div></div>'+
        '<p class="pfz-fn">Динамика — по 90 % портфеля (без QQQ и AGG); колебания — по всему портфелю</p><p class="pfz-ds">Описывает прошлое и текущее состояние. Не прогноз и не рекомендация.</p>';
      // строки «Бизнеса» → шторка критерия; блоки «Колебания цены» и «Динамика цены» → свои шторки
      tb.addEventListener('click',e=>{ const r=e.target.closest('[data-pfbz]'); if(r){ dsOpen('pfbz',{i:+r.dataset.pfbz}); return; } if(e.target.closest('[data-pfvol]')){ dsOpen('pfvol'); return; } if(e.target.closest('[data-pfdyn]')) dsOpen('pfdyn'); });
      seg($('anTab'),i=>{ tb.querySelectorAll('.an-tp').forEach((p,j)=>p.hidden=j!==i); }); }
  } }
  { const mv=[...document.querySelectorAll('#scrAn .an-card')].find(c=>/Движение денег/.test(c.textContent)); if(mv){ mv.classList.add('mv10');
    const t=mv.querySelector('.mr.tot .k'); if(t) t.innerHTML='Портфель сейчас'; } }
  { const a1=anSeries; anSeries=function(){ return FRESH?anFresh():a1(); }; }
  { const d0=anDraw; anDraw=function(r){ d0(r); document.querySelectorAll('#anSvg path[stroke-dasharray="4 3"],#anSvg path[stroke-dasharray="1.5 4"]').forEach(p=>p.remove()); }; }
  Object.assign(window.__R10={},{order:r10Order,buy:r10Buy,pf:r10Pf,dbg:()=>({XT,XHQ,OLDC,XSPENT,BASE_TOT,cash:LIN.cash,FRESH})});

  // ── FR DS integration hook (Вывод, D-счёт, тесты) ──
  window.__P={$:$,dev,setSide,goHome,goStock,goOrder,goConfirm,goBack,goKind,goLt,stoClose,nboFinish,nbMode,scGo,openSheet,closeSheet,toast,syncStatus,
    get NBM(){return NBM;}};
})();
