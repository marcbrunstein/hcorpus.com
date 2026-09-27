(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');

  // Menu mobile
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.nav-toggle-label').textContent = open ? toggle.dataset.close : toggle.dataset.open;
    menu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  matchMedia('(min-width: 1101px)').addEventListener('change', (e) => e.matches && setOpen(false));

  // Filet sous l'en-tête après défilement
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Apparitions discrètes au défilement (uniquement pour les éléments encore hors de l'écran,
  // pour éviter tout clignotement ; désactivé si l'utilisateur réduit les animations)
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
    const targets = document.querySelectorAll(
      '.section h2, .path, .facts > div, .conviction p, .expertise, .boards, .diag-card, .person, .extended, .client-group, .quote, .partners li'
    );
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    const pending = new Set();
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add('reveal');
      pending.add(el);
      reveal.observe(el);
    });
    // Filet de sécurité : si l'observateur ne se déclenche pas, on affiche au défilement
    const check = () => {
      pending.forEach((el) => {
        if (el.classList.contains('is-visible') || el.getBoundingClientRect().top < innerHeight * 0.95) {
          el.classList.add('is-visible');
          pending.delete(el);
        }
      });
      if (!pending.size) removeEventListener('scroll', check);
    };
    addEventListener('scroll', check, { passive: true });
    addEventListener('beforeprint', () => pending.forEach((el) => el.classList.add('is-visible')));
  }

  // Section active dans la navigation
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.remove('is-active'));
        byId.get(entry.target.id)?.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  byId.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
