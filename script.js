// Kaia — landing page interactions

(function () {
  // Hardware tabs
  const tabs = document.querySelectorAll('.hw-tab');
  const panels = document.querySelectorAll('.hw-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      panels.forEach((p) => {
        p.classList.toggle('is-active', p.id === targetId);
      });
    });
  });

  // Smooth scroll for in-page nav
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
