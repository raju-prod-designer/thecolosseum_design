(() => {
  'use strict';
  const src = new URL('gsap.min.js', document.currentScript.src).href;
  const instances = new WeakMap();
  let loading;
  const load = () => window.gsap ? Promise.resolve(window.gsap) : (loading ||= new Promise((resolve, reject) => {
    const script = document.createElement('script'); script.src = src; script.async = true;
    script.onload = () => window.gsap ? resolve(window.gsap) : reject(new Error('GSAP unavailable'));
    script.onerror = reject; document.head.append(script);
  }));
  function mount(root) {
    if (instances.has(root)) return instances.get(root);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let context, timeline, pending = false, visible = false, destroyed = false;
    function sync() { timeline?.paused(!visible || reduced.matches || document.hidden); }
    async function initialize() {
      if (!visible || reduced.matches || destroyed || timeline || pending) return;
      pending = true;
      try {
        const gsap = await load();
        if (destroyed || reduced.matches) return;
        context = gsap.context(() => {
          timeline = gsap.timeline({ paused: true, repeat: -1 });
          timeline.to(root.querySelector('[data-clash-layer="cape-left"]'), {
            skewY: 4.8, svgOrigin: '843 68', duration: 2.4, repeat: 9, yoyo: true,
            ease: 'sine.inOut', force3D: false
          }, 0);
          timeline.to(root.querySelector('[data-clash-layer="cape-right"]'), {
            skewY: -4.2, svgOrigin: '1404 103', duration: 3, repeat: 7, yoyo: true,
            ease: 'sine.inOut', force3D: false
          }, 0);
        }, root);
        root.dataset.motion = 'ready'; sync();
      } catch (_) { root.dataset.motion = 'static'; }
      finally { pending = false; }
    }
    function preference() {
      if (reduced.matches) { context?.revert(); context = timeline = null; root.dataset.motion = 'reduced'; }
      else initialize();
      sync();
    }
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting; if (visible) initialize(); sync();
    }) : null;
    if (observer) observer.observe(root); else { visible = true; initialize(); }
    document.addEventListener('visibilitychange', sync); reduced.addEventListener('change', preference);
    root.dataset.motion = reduced.matches ? 'reduced' : 'idle';
    const api = {
      getState: () => ({ initialized: !!timeline, paused: timeline ? timeline.paused() : true, visible, reducedMotion: reduced.matches }),
      destroy() {
        destroyed = true; observer?.disconnect(); context?.revert(); context = timeline = null;
        document.removeEventListener('visibilitychange', sync); reduced.removeEventListener('change', preference);
        instances.delete(root);
      }
    };
    instances.set(root, api); return api;
  }
  window.ClashHero = Object.freeze({ mount });
  document.querySelectorAll('[data-clash-hero]').forEach(mount);
})();
