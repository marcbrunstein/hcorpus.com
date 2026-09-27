// Génère le site statique dans docs/ (publié par GitHub Pages).
// Usage : node build.mjs
import { rm, mkdir, writeFile, cp } from 'node:fs/promises';
import { join } from 'node:path';
import { languages, site } from './src/data.mjs';
import { renderHome, renderLegal, pagePath } from './src/template.mjs';

const OUT = 'docs';
const t = {
  fr: (await import('./src/i18n/fr.mjs')).default,
  en: (await import('./src/i18n/en.mjs')).default,
  de: (await import('./src/i18n/de.mjs')).default,
  it: (await import('./src/i18n/it.mjs')).default,
};

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp('static', join(OUT, 'assets'), {
  recursive: true,
  filter: (src) => !src.endsWith('desktop.ini'),
});

const urls = [];
for (const lang of languages) {
  for (const [kind, render] of [['home', renderHome], ['legal', renderLegal]]) {
    const { parts } = pagePath(lang, kind);
    const dir = join(OUT, ...parts);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), render(t[lang.code], lang));
    urls.push(site.url + '/' + parts.map((p) => p + '/').join(''));
  }
}

await writeFile(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`
);
// PREVIEW=1 : version de relecture, exclue des moteurs de recherche
await writeFile(
  join(OUT, 'robots.txt'),
  process.env.PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`
);
await writeFile(join(OUT, '.nojekyll'), '');
await writeFile(
  join(OUT, '404.html'),
  `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page introuvable · Habeas Corpus Consulting</title>
<link rel="stylesheet" href="/assets/css/style.css"></head>
<body class="notfound"><main class="wrap narrow">
<p class="label">404</p>
<h1>Page introuvable</h1>
<p>La page demandée n’existe pas ou a été déplacée. <span lang="en">This page could not be found.</span></p>
<p><a class="link-arrow" href="/">Habeas Corpus Consulting</a></p>
</main></body></html>
`
);

console.log(`Site généré dans ${OUT}/ (${urls.length} pages)`);
