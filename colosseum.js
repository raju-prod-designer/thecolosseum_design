// theColosseum — view switching + light interactions
(function(){
  function switchView(view){
    document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+view));
    document.querySelectorAll('.nav-item[data-view]').forEach(n=>n.classList.toggle('active',n.dataset.view===view));
    var meta=document.querySelector('.nav-item[data-view="'+view+'"]');
    if(meta){
      var t=document.querySelector('.tb-title h1'); var e=document.querySelector('.tb-title .eyebrow');
      if(t) t.textContent=meta.dataset.title||meta.textContent.trim();
      if(e&&meta.dataset.eyebrow) e.textContent=meta.dataset.eyebrow;
    }
    document.querySelector('.main').scrollTo(0,0);
    if(window.colosseumCloseDrawer) window.colosseumCloseDrawer();
  }
  document.addEventListener('click',function(ev){
    var el=ev.target.closest('[data-view]');
    if(el){ ev.preventDefault(); switchView(el.dataset.view); }
  });
  window.colosseumGo=switchView;

  // Mobile off-canvas drawer for the rail
  function initDrawer(){
    var rail=document.querySelector('.rail');
    var topbar=document.querySelector('.topbar');
    if(!rail||!topbar||document.querySelector('.rail-toggle')) return;
    var btn=document.createElement('button');
    btn.className='rail-toggle';btn.setAttribute('aria-label','Toggle menu');
    btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    topbar.insertBefore(btn,topbar.firstChild);
    var scrim=document.createElement('div');scrim.className='rail-scrim';
    document.body.appendChild(scrim);
    function close(){rail.classList.remove('open');scrim.classList.remove('on');}
    function toggle(){rail.classList.toggle('open');scrim.classList.toggle('on',rail.classList.contains('open'));}
    btn.addEventListener('click',function(e){e.stopPropagation();toggle();});
    scrim.addEventListener('click',close);
    window.colosseumCloseDrawer=close;
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initDrawer);
  else initDrawer();

  // Desktop collapsible rail
  function initCollapse(){
    var app=document.querySelector('.app');
    var rail=document.querySelector('.rail');
    var logo=rail&&rail.querySelector('.rail-logo');
    if(!app||!rail||!logo||rail.querySelector('.rail-collapse')) return;
    var btn=document.createElement('button');
    btn.className='rail-collapse';btn.type='button';btn.setAttribute('aria-label','Collapse sidebar');
    btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
    var head=document.createElement('div');head.className='rail-head';
    logo.parentNode.insertBefore(head,logo);head.appendChild(logo);head.appendChild(btn);
    try{ if(localStorage.getItem('colosseum-rail-collapsed')==='1') app.classList.add('rail-collapsed'); }catch(e){}
    function sync(){var on=app.classList.contains('rail-collapsed');btn.setAttribute('aria-label',on?'Expand sidebar':'Collapse sidebar');}
    sync();
    btn.addEventListener('click',function(){
      app.classList.toggle('rail-collapsed');
      try{ localStorage.setItem('colosseum-rail-collapsed',app.classList.contains('rail-collapsed')?'1':'0'); }catch(e){}
      sync();
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initCollapse);
  else initCollapse();
})();
