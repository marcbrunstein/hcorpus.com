# hcorpus.com

Site de Habeas Corpus Consulting, une page par langue (FR, EN, DE, IT) plus les mentions légales.
Site statique, sans dépendance, hébergé sur GitHub Pages.

## Organisation

| Dossier / fichier | Rôle |
| --- | --- |
| `src/i18n/fr.mjs` (et `en`, `de`, `it`) | **Tous les textes**, langue par langue |
| `src/data.mjs` | Coordonnées, équipe (et liens LinkedIn), liste des références et des partenaires |
| `src/template.mjs` | Structure HTML des pages |
| `static/` | CSS, JavaScript, polices, images (copié dans `docs/assets/`) |
| `build.mjs` | Génère le site dans `docs/` |
| `docs/` | **Site publié** (généré, ne pas modifier à la main) |

## Modifier le site

1. Modifier les textes dans `src/i18n/*.mjs` ou les listes dans `src/data.mjs`.
2. Régénérer : `node build.mjs` (Node.js 18 ou plus).
3. Prévisualiser : `python -m http.server 8080 --directory docs`, puis ouvrir http://localhost:8080.
4. Committer et pousser : GitHub Pages publie automatiquement.

Ajouter une référence : déposer le logo dans `static/img/clients/` et ajouter une ligne dans
`clients` de `src/data.mjs` (`logo: null` affiche le nom en typographie).

## Mise en ligne (GitHub Pages)

1. Sur GitHub : *Settings → Pages → Build and deployment* : Source « Deploy from a branch »,
   branche `main`, dossier `/docs`.
2. Domaine personnalisé : saisir `www.hcorpus.com` dans *Custom domain*, puis cocher *Enforce HTTPS*.
3. Chez OVH (zone DNS de hcorpus.com) :
   - `www` : enregistrement **CNAME** vers `marcbrunstein.github.io.`
   - domaine nu `hcorpus.com` : enregistrements **A** vers `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (supprimer les anciens A/AAAA pointant vers OVH).

Tant que le domaine n'est pas configuré, le site est visible à l'adresse
https://marcbrunstein.github.io/hcorpus.com/.
