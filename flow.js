(() => {
  'use strict';
  const svg = document.querySelector('#flow-mark');
  if (!svg) return;
  const waves = [...svg.querySelectorAll('#flow-waves path')];
  const particles = [...svg.querySelectorAll('#flow-particles circle')];
  const signals = [...svg.querySelectorAll('#flow-signal path')];
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches, inView = true, request = null, elapsed = 0, last = null;
  const twoPi = Math.PI * 2;
  const center = (x, lane, phase) => 136 + lane * 70 - 38 * Math.sin((x - 28) / 584 * twoPi + phase + lane * 0.1);
  const draw = time => {
    const phase = Math.sin(time * 0.65) * 0.13;
    waves.forEach((wave, lane) => {
      const points = [];
      for (let i = 0; i <= 70; i++) { const t = i / 70, x = 28 + 584 * t, width = Math.pow(Math.sin(Math.PI * t), 0.85) * 14; points.push(`${i ? 'L' : 'M'}${x.toFixed(2)} ${(center(x, lane, phase) - width).toFixed(2)}`); }
      for (let i = 70; i >= 0; i--) { const t = i / 70, x = 28 + 584 * t, width = Math.pow(Math.sin(Math.PI * t), 0.85) * 14; points.push(`L${x.toFixed(2)} ${(center(x, lane, phase) + width).toFixed(2)}`); }
      wave.setAttribute('d', points.join(' ') + 'Z');
    });
    particles.forEach((particle, index) => {
      const lane = index % 2, offset = Math.floor(index / 2) / 4 + lane * 0.11;
      const progress = ((time / (8.5 + lane * 1.1) + offset) % 1 + 1) % 1;
      const x = 20 + progress * 600;
      particle.setAttribute('cx', x.toFixed(2));
      particle.setAttribute('cy', (center(x, lane, phase) + 35 + Math.sin(index * 2.3) * 5).toFixed(2));
      particle.setAttribute('opacity', Math.min(1, progress * 14, (1 - progress) * 14).toFixed(3));
    });
    signals.forEach((signal, i) => { signal.style.opacity = String(0.45 + 0.55 * (0.5 + 0.5 * Math.sin(time * 2.3 + i * 0.8))); });
  };
  const tick = now => {
    request = null;
    if (paused || document.hidden || !inView) { last = null; return; }
    if (last !== null) elapsed += Math.min((now - last) / 1000, 0.1);
    last = now; draw(elapsed); request = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (request !== null) cancelAnimationFrame(request);
    request = null; last = null;
    if (!paused && !document.hidden && inView) request = requestAnimationFrame(tick);
  };
  preference.addEventListener('change', event => { paused = event.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, { threshold: 0 }).observe(svg);
  draw(0); sync();
})();
