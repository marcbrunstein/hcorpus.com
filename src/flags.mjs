// Drapeaux du sélecteur de langue (SVG intégrés, décoratifs : le nom de la langue est porté par le lien)
const svg = (viewBox, body, extra = '') =>
  `<svg class="flag" viewBox="${viewBox}" width="21" height="14" aria-hidden="true" focusable="false"${extra}>${body}</svg>`;

export const flags = {
  fr: svg('0 0 3 2', '<rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#EF4135"/>', ' preserveAspectRatio="none"'),
  en: svg(
    '0 0 60 30',
    '<clipPath id="flag-uk-t"><path d="M30,15h30v15zv15H0zH0V0zV0h30z"/></clipPath>' +
      '<rect width="60" height="30" fill="#012169"/>' +
      '<path d="M0,0L60,30M60,0L0,30" stroke="#FFFFFF" stroke-width="6"/>' +
      '<path d="M0,0L60,30M60,0L0,30" clip-path="url(#flag-uk-t)" stroke="#C8102E" stroke-width="4"/>' +
      '<path d="M30,0v30M0,15h60" stroke="#FFFFFF" stroke-width="10"/>' +
      '<path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/>',
    ' preserveAspectRatio="xMidYMid slice"'
  ),
  de: svg('0 0 5 3', '<rect width="5" height="1" fill="#000000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/>', ' preserveAspectRatio="none"'),
  it: svg('0 0 3 2', '<rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#CE2B37"/>', ' preserveAspectRatio="none"'),
};

// Nom de chaque langue dans sa propre langue (infobulle et lecteurs d'écran)
export const languageNames = { fr: 'Français', en: 'English', de: 'Deutsch', it: 'Italiano' };
