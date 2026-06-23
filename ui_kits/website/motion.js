/* JKR Engineering website — motion helpers (vanilla, no deps).
   Scroll-reveal via IntersectionObserver + numeric count-up.
   Exposed on window.JKRMotion so React components can call in after mount. */
(function () {
  function initReveal(root) {
    var els = (root || document).querySelectorAll('[data-reveal]:not(.is-visible)');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-reveal-delay') || 0;
          setTimeout(function () { el.classList.add('is-visible'); }, Number(delay));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // Animates an integer/decimal prefix inside a string, e.g. "20+" -> counts 0..20 then appends "+".
  function countUp(el, opts) {
    if (!el || el.dataset.counted) return;
    var raw = (opts && opts.text) || el.textContent || '';
    var match = raw.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return; // no numeric segment — leave static text as-is
    el.dataset.counted = '1';
    var prefix = match[1], target = parseFloat(match[2]), suffix = match[3];
    var decimals = (match[2].split('.')[1] || '').length;
    var duration = (opts && opts.duration) || 1700;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    }
    requestAnimationFrame(step);
  }

  function initCountUp(root) {
    var els = (root || document).querySelectorAll('[data-count]:not([data-counted])');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { countUp(el); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Fills a fixed top bar (transform: scaleX) as the user scrolls the document.
  function initProgressBar(selector) {
    var bar = document.querySelector(selector || '.jkr-progress-bar');
    if (!bar) return;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var frac = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = 'scaleX(' + frac + ')';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  window.JKRMotion = { initReveal: initReveal, initCountUp: initCountUp, countUp: countUp, initProgressBar: initProgressBar };
})();
