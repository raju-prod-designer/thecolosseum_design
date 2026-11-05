/* GSAP is requested only near the illustration, and never for reduced motion. */
(() => {
  'use strict';
  const scriptURL = document.currentScript?.src || location.href;
  const defaultGSAP = new URL('gsap.min.js', scriptURL).href;
  const instances = new WeakMap();
  const loads = new Map();

  function loadGSAP(url) {
    if (window.gsap) return Promise.resolve(window.gsap);
    if (loads.has(url)) return loads.get(url);
    const pending = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => window.gsap ? resolve(window.gsap) : reject(new Error('GSAP unavailable'));
      script.onerror = () => { script.remove(); reject(new Error('GSAP unavailable')); };
      document.head.append(script);
    });
    loads.set(url, pending);
    pending.catch(() => loads.delete(url));
    return pending;
  }

  function mount(root, options = {}) {
    if (instances.has(root)) return instances.get(root);
    if (!root?.querySelector('[data-arena-svg]')) throw new Error('Inline arena SVG required');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let context, timeline, destroyed = false, near = false, visible = false, loading = false;
    let userPaused = false;
    const select = name => root.querySelector(`[data-layer="${name}"]`);

    function sync() {
      if (timeline) timeline.paused(!visible || document.hidden || reduced.matches || userPaused);
    }
    async function initialize() {
      if (destroyed || loading || timeline || !near || reduced.matches) return;
      loading = true;
      try {
        const gsap = await loadGSAP(options.gsapURL || defaultGSAP);
        if (destroyed || reduced.matches) return;
        context = gsap.context(() => {
          // Each oscillation divides a 48-second master cycle and returns to its
          // original pose with zero endpoint velocity. No per-frame JS callbacks.
          timeline = gsap.timeline({ paused: true, repeat: -1 });
          const sway = (target, vars, duration, repeats) => {
            timeline.to(target, { ...vars, duration, repeat: repeats, yoyo: true,
              ease: 'sine.inOut', force3D: false }, 0);
          };
          sway(select('camera'), { x: 3, y: -.6 }, 24, 1);
          sway(select('mountains'), { x: -6 }, 12, 3);
          sway(select('ground'), { x: 3 }, 24, 1);
          // Architecture and body stay still relative to the slow camera drift.
          sway(select('cape'), { skewX: 5, rotation: -.6, scaleX: 1.022,
            svgOrigin: '618 72' }, 3, 15);
          [
            ['banner-1', '957 61', 5, 2.4, 19],
            ['banner-2', '1153 58', -4.4, 3, 15],
            ['banner-3', '1364 117', 5.6, 4, 11],
            ['banner-4', '748 169', -5, 3, 15]
          ].forEach(([name, origin, skew, seconds, repeats]) => {
            sway(select(name), { skewX: skew, scaleX: 1.025, svgOrigin: origin }, seconds, repeats);
          });
          root.querySelectorAll('[data-dust]').forEach((particle, index) => {
            sway(particle, { x: 18 + index * 2, y: -3 - index % 3,
              opacity: .4 + (index % 3) * .15 }, 12, 3);
          });
        }, root);
        root.dataset.motion = 'ready';
        sync();
      } catch (_) {
        // The complete static inline illustration remains visible on failure.
        root.dataset.motion = 'static';
      } finally { loading = false; }
    }
    function preferenceChanged() {
      if (reduced.matches) {
        context?.revert(); context = timeline = null;
        root.dataset.motion = 'reduced';
      } else { initialize(); }
      sync();
    }
    let proximity, visibility;
    if ('IntersectionObserver' in window) {
      proximity = new IntersectionObserver(entries => {
        near = entries[0].isIntersecting;
        if (near) initialize();
      }, { rootMargin: '180px 0px' });
      visibility = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        sync();
      }, { threshold: 0 });
      proximity.observe(root); visibility.observe(root);
    } else { near = visible = true; initialize(); }
    reduced.addEventListener('change', preferenceChanged);
    document.addEventListener('visibilitychange', sync);
    root.dataset.motion = reduced.matches ? 'reduced' : 'idle';
    const api = {
      pause() { userPaused = true; sync(); },
      resume() { userPaused = false; sync(); },
      getState() {
        return { initialized: !!timeline, paused: timeline ? timeline.paused() : true,
          visible, reducedMotion: reduced.matches, time: timeline ? timeline.time() : 0 };
      },
      destroy() {
        destroyed = true;
        proximity?.disconnect(); visibility?.disconnect();
        reduced.removeEventListener('change', preferenceChanged);
        document.removeEventListener('visibilitychange', sync);
        context?.revert(); context = timeline = null;
        delete root.dataset.motion;
        instances.delete(root);
      }
    };
    instances.set(root, api);
    return api;
  }
  window.ArenaFooter = Object.freeze({ mount });
  const boot = () => document.querySelectorAll('[data-arena-footer]').forEach(root => mount(root));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
