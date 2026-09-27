import { site, languages, team, clients, partners } from './data.mjs';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const SECTIONS = ['about', 'expertise', 'team', 'clients', 'partners', 'contact'];

// Chemin relatif d'une page vers la racine du site (compatible sous-dossier GitHub Pages)
export const pagePath = (lang, kind) => {
  const parts = [lang.dir, kind === 'legal' ? lang.legal : ''].filter(Boolean);
  return { parts, root: '../'.repeat(parts.length) };
};

const hrefTo = (from, lang, kind) => {
  const { parts } = pagePath(lang, kind);
  const rel = from.root + parts.map((p) => p + '/').join('');
  return rel || './';
};

const absUrl = (lang, kind) => {
  const { parts } = pagePath(lang, kind);
  return site.url + '/' + parts.map((p) => p + '/').join('');
};

const icon = {
  arrow: '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
  out: '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
  linkedin:
    '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3.6 5.6h-2V14h2V5.6ZM2.6 2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM14.5 9.3c0-2.3-1.2-3.8-3.2-3.8-1 0-1.8.5-2.2 1.1v-1h-2V14h2V9.7c0-1.1.4-1.9 1.4-1.9s1.4.8 1.4 1.9V14h2.1V9.3Z"/></svg>',
};

function head(c, lang, kind, from, title, description) {
  const alternates = languages
    .map((l) => `<link rel="alternate" hreflang="${l.code}" href="${absUrl(l, kind)}">`)
    .join('\n    ');
  const xdefault = `<link rel="alternate" hreflang="x-default" href="${absUrl(languages[0], kind)}">`;
  const ld =
    kind === 'home'
      ? `<script type="application/ld+json">${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Habeas Corpus Consulting',
          url: site.url + '/',
          logo: site.url + '/assets/img/logo-habeas-corpus.png',
          image: site.url + '/assets/img/og-image.jpg',
          description,
          email: site.email,
          telephone: site.phone,
          foundingDate: '1998',
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.paris[0],
            postalCode: '75001',
            addressLocality: 'Paris',
            addressCountry: 'FR',
          },
          areaServed: ['FR', 'DE', 'GB', 'IT'],
        })}</script>`
      : '';
  return `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${absUrl(lang, kind)}">
    ${alternates}
    ${xdefault}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Habeas Corpus Consulting">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${absUrl(lang, kind)}">
    <meta property="og:image" content="${site.url}/assets/img/og-image.jpg">
    <meta property="og:locale" content="${c.meta.ogLocale}">
    <meta name="theme-color" content="#0b2e47">
    <link rel="icon" href="${from.root}assets/img/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="${from.root}assets/img/apple-touch-icon.png">
    <link rel="preload" href="${from.root}assets/fonts/newsreader-400.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="${from.root}assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="${from.root}assets/css/style.css">
    ${ld}
  </head>`;
}

function header(c, lang, kind, from) {
  const home = kind === 'home' ? '' : hrefTo(from, lang, 'home');
  const links = SECTIONS.map((s) => `<li><a href="${home}#${s}">${esc(c.nav[s])}</a></li>`).join('');
  const langs = languages
    .map((l) =>
      l.code === lang.code
        ? `<li><a href="${hrefTo(from, l, kind)}" hreflang="${l.code}" lang="${l.code}" aria-current="true">${l.label}</a></li>`
        : `<li><a href="${hrefTo(from, l, kind)}" hreflang="${l.code}" lang="${l.code}">${l.label}</a></li>`
    )
    .join('');
  return `<a class="skip" href="#main">${esc(c.nav.skip)}</a>
  <header class="site-header" id="top">
    <div class="wrap header-inner">
      <a class="brand" href="${home || './'}#top"><img src="${from.root}assets/img/logo-habeas-corpus.png" width="56" height="56" alt="Habeas Corpus Consulting"></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu" data-open="${esc(c.nav.menu)}" data-close="${esc(c.nav.close)}"><span class="nav-toggle-bars" aria-hidden="true"></span><span class="nav-toggle-label">${esc(c.nav.menu)}</span></button>
      <div class="menu" id="menu">
        <nav aria-label="Navigation"><ul class="nav">${links}</ul></nav>
        <ul class="langs" aria-label="${esc(c.nav.langLabel)}">${langs}</ul>
      </div>
    </div>
  </header>`;
}

function footer(c, lang, kind, from) {
  const year = new Date().getFullYear();
  const home = hrefTo(from, lang, 'home');
  return `<footer class="site-footer">
    <div class="wrap footer-inner">
      <p>© ${year} Habeas Corpus Consulting</p>
      <p><a href="${hrefTo(from, lang, 'legal')}">${esc(c.footer.legal)}</a>${
        kind === 'legal' ? ` · <a href="${home}">${esc(c.footer.home)}</a>` : ''
      }</p>
    </div>
  </footer>
  <script src="${from.root}assets/js/main.js" defer></script>`;
}

const label = (text) => `<p class="label">${esc(text)}</p>`;

function clientItem(cl, c, from) {
  const mark = cl.logo
    ? `<img${cl.large ? ' class="logo-lg"' : ''} src="${from.root}assets/img/clients/${cl.logo}" alt="${esc(cl.name)}" loading="lazy">`
    : `<span class="wordmark">${esc(cl.name)}</span>`;
  const country = cl.country ? `<span class="country">${esc(c.clients.countries[cl.country])}</span>` : '';
  const inner = `<span class="mark">${mark}</span>${country}`;
  return cl.url
    ? `<li><a class="cell" href="${cl.url}" rel="noopener" target="_blank">${inner}</a></li>`
    : `<li><div class="cell">${inner}</div></li>`;
}

export function renderHome(c, lang) {
  const from = pagePath(lang, 'home');
  const r = from.root;
  const mail = `mailto:${site.email}`;

  const expertise = c.expertise.items
    .map(
      (it, i) => `<article class="expertise${it.wide ? ' expertise-wide' : ''}">
          <p class="num">0${i + 1}</p>
          ${it.question ? `<p class="question">${esc(it.question)}</p>` : ''}
          <h3>${esc(it.title)}</h3>
          <p class="lead">${esc(it.lead)}</p>
          ${it.body ? `<p>${esc(it.body)}</p>` : ''}
          ${it.list ? `<ul class="ticks">${it.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
          ${it.note ? `<p class="note">${esc(it.note)}</p>` : ''}
        </article>`
    )
    .join('');

  const people = team
    .map((p) => {
      const role = c.team.roles[p.id];
      const li = p.linkedin
        ? `<a class="linkedin" href="${p.linkedin}" rel="noopener" target="_blank" aria-label="${esc(c.team.linkedin + ' ' + p.name)}">${icon.linkedin}</a>`
        : '';
      const [first, ...rest] = p.name.split(' ');
      return `<li class="person">
          <img src="${r}assets/img/team/${p.photo}" width="640" height="640" alt="${esc(p.name)}" loading="lazy">
          <h3>${esc(first)} <span>${esc(rest.join(' '))}</span></h3>
          <p class="role">${esc(role.role)}</p>
          <p class="place">${esc(role.place)}${li}</p>
        </li>`;
    })
    .join('');

  const groups = Object.keys(clients)
    .map(
      (g) => `<div class="client-group">
          <h3>${esc(c.clients.groups[g])}</h3>
          <ul class="logos">${clients[g].map((cl) => clientItem(cl, c, from)).join('')}</ul>
        </div>`
    )
    .join('');

  const partnerList = partners
    .map((p) => {
      const name = esc(c.partners.names?.[p.id] ?? p.name);
      const title = p.url
        ? `<a href="${p.url}" rel="noopener" target="_blank" aria-label="${esc(c.partners.visit)} ${name}">${name}${icon.out}</a>`
        : name;
      return `<li><h3>${title}</h3><p>${esc(c.partners.items[p.id])}</p></li>`;
    })
    .join('');

  const mailSubject = (subject) => `${mail}?subject=${encodeURIComponent(subject)}`;

  const pathCard = (p, href, variant) => `<a class="path path-${variant}" href="${href}">
          <p class="path-kicker">${esc(p.kicker)}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
          <span class="link-arrow">${esc(p.cta)}${icon.arrow}</span>
        </a>`;

  const quotes = c.testimonials.items
    .map((t) => {
      const translated = t.from !== lang.code ? c.testimonials.translatedFrom[t.from] : null;
      return `<figure class="quote">
          <blockquote><p>${esc(t.quote)}</p></blockquote>
          <figcaption><strong>${esc(t.author)}</strong><span>${esc(t.role)}</span>${
            translated ? `<em>${esc(translated)}</em>` : ''
          }</figcaption>
        </figure>`;
    })
    .join('');

  return `<!doctype html>
<html lang="${lang.code}">
  ${head(c, lang, 'home', from, c.meta.title, c.meta.description)}
  <body>
  ${header(c, lang, 'home', from)}
  <main id="main">
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow">${esc(c.hero.eyebrow)}</p>
        <h1>${c.hero.title}</h1>
        <p class="hero-lead">${esc(c.hero.lead)}</p>
        <p class="actions">
          <a class="btn btn-light" href="${mail}">${esc(c.hero.ctaPrimary)}${icon.arrow}</a>
          <a class="btn btn-ghost" href="#expertise">${esc(c.hero.ctaSecondary)}</a>
        </p>
        <ul class="cities" aria-label="${esc(c.contact.offices)}">${c.contact.cities.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </section>

    <section class="paths" aria-label="${esc(c.paths.label)}">
      <div class="wrap paths-grid">
        ${pathCard(c.paths.leader, '#expertise', 'leader')}
        ${pathCard(c.paths.investor, mailSubject(c.paths.investor.subject), 'investor')}
      </div>
    </section>

    <section class="section" id="about">
      <div class="wrap split">
        <div>
          ${label(c.about.label)}
          <h2>${esc(c.about.title)}</h2>
        </div>
        <div class="prose">
          ${c.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
        </div>
      </div>
      <div class="wrap">
        <dl class="facts">
          ${c.about.facts.map((f) => `<div><dt>${esc(f.value)}</dt><dd>${esc(f.label)}</dd></div>`).join('')}
        </dl>
      </div>
    </section>

    <section class="conviction">
      <div class="wrap">
        <p>${esc(c.conviction)}</p>
      </div>
    </section>

    <section class="section section-tint" id="expertise">
      <div class="wrap">
        ${label(c.expertise.label)}
        <h2>${esc(c.expertise.title)}</h2>
        <div class="expertise-grid">${expertise}</div>
        <div class="boards">
          <h3>${esc(c.expertise.boardsTitle)}</h3>
          <ul>${c.expertise.boards.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        </div>
        <p class="more"><a class="link-arrow" href="#contact">${esc(c.expertise.cta)}${icon.arrow}</a></p>
      </div>
    </section>

    <section class="section diag" id="diag-data-ia">
      <div class="wrap">
        <div class="diag-card">
          <div class="diag-main">
            ${label(c.diag.label)}
            <h2>${esc(c.diag.title)}</h2>
            <p>${esc(c.diag.text)}</p>
          </div>
          <div class="diag-side">
            <ul class="ticks">${c.diag.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            <p class="diag-financing">${esc(c.diag.financing)}</p>
            <a class="btn btn-yellow" href="${mailSubject(c.diag.subject)}">${esc(c.diag.cta)}${icon.arrow}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="team">
      <div class="wrap">
        ${label(c.team.label)}
        <h2>${esc(c.team.title)}</h2>
        <ul class="people">${people}</ul>
        <div class="extended">
          <div class="extended-text">
            <h3>${esc(c.team.extendedTitle)}</h3>
            <p>${esc(c.team.extendedText)}</p>
            <p class="join">${esc(c.team.joinText)} <a class="link-arrow" href="${mail}">${esc(c.team.joinCta)}${icon.arrow}</a></p>
          </div>
          <img src="${r}assets/img/team/extended-team.jpg" width="1716" height="406" alt="${esc(c.team.extendedAlt)}" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section section-tint" id="clients">
      <div class="wrap">
        ${label(c.clients.label)}
        <h2>${esc(c.clients.title)}</h2>
        ${groups}
      </div>
    </section>

    <section class="section" id="testimonials">
      <div class="wrap">
        ${label(c.testimonials.label)}
        <h2>${esc(c.testimonials.title)}</h2>
        <div class="quotes">${quotes}</div>
      </div>
    </section>

    <section class="section section-tint" id="partners">
      <div class="wrap">
        <div class="split">
          <div>
            ${label(c.partners.label)}
            <h2>${esc(c.partners.title)}</h2>
          </div>
          <p class="intro">${esc(c.partners.intro)}</p>
        </div>
        <ul class="partners">${partnerList}</ul>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="wrap">
        ${label(c.contact.label)}
        <h2>${esc(c.contact.title)}</h2>
        <p class="contact-lead">${esc(c.contact.lead)}</p>
        <div class="contact-grid">
          <div>
            <h3>${esc(c.contact.email)}</h3>
            <p><a class="big-link" href="${mail}">${site.email}</a></p>
          </div>
          <div>
            <h3>${esc(c.contact.phone)}</h3>
            <p><a class="big-link" href="tel:${site.phoneHref}">${site.phone}</a></p>
          </div>
          <div>
            <h3>${esc(c.contact.paris)}</h3>
            <address>${site.paris.map(esc).join('<br>')}</address>
          </div>
          <div>
            <h3>${esc(c.contact.offices)}</h3>
            <p>${c.contact.cities.map(esc).join(' · ')}</p>
            <h3 class="h-gap">${esc(c.contact.headOffice)}</h3>
            <address>${site.headOffice.map(esc).join('<br>')}</address>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${footer(c, lang, 'home', from)}
  </body>
</html>
`;
}

export function renderLegal(c, lang) {
  const from = pagePath(lang, 'legal');
  const title = `${c.legal.title} · Habeas Corpus Consulting`;
  return `<!doctype html>
<html lang="${lang.code}">
  ${head(c, lang, 'legal', from, title, c.meta.description)}
  <body>
  ${header(c, lang, 'legal', from)}
  <main id="main" class="legal">
    <div class="wrap narrow">
      <h1>${esc(c.legal.title)}</h1>
      ${c.legal.sections.map((s) => `<section><h2>${esc(s.h)}</h2>${s.html}</section>`).join('\n      ')}
    </div>
  </main>
  ${footer(c, lang, 'legal', from)}
  </body>
</html>
`;
}
