(function(){var D='Company - Dashboard.html',C='Company - Challenges.html',root=document.documentElement,here=decodeURIComponent(location.pathname.split('/').pop()),off=false;
try{var s=JSON.parse(localStorage.getItem('tc-tweaks-v1'))||{};off=!!(s.cdash&&s.cdash.show==='off');}catch(e){}
function sync(o){off=o;root.setAttribute('data-tw-cdash-show',o?'off':'on');
  document.querySelectorAll(o?'a.app-logo[href="'+D+'"]':'a[data-dash-home]').forEach(function(l){l.setAttribute('href',o?C:D);if(o)l.setAttribute('data-dash-home','');else l.removeAttribute('data-dash-home');});
  if(o&&here===D)location.replace(C);}
sync(off);
if(window.TCTweaks)TCTweaks.register({id:'cdash',title:'Dashboard',controls:[{key:'show',label:'Dashboard page',def:'on',options:[['on','On'],['off','Off (Challenges is home)']]}],apply:function(st){sync(st.show==='off');}});
})();
