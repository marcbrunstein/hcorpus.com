// Données communes à toutes les langues.
// Les textes traduits (rôles, descriptions, pays…) sont dans src/i18n/<langue>.mjs

export const site = {
  url: 'https://www.hcorpus.com',
  email: 'contact@hcorpus.com',
  phone: '+33 1 89 16 73 22',
  phoneHref: '+33189167322',
  paris: ['19 rue Jean-Jacques Rousseau', '75001 Paris'],
  headOffice: ['5 route du Bosc André', '27230 Saint-Germain-la-Campagne'],
  linkedin: 'https://www.linkedin.com/company/habeas-corpus-sas/',
};

export const languages = [
  { code: 'fr', label: 'FR', dir: '', legal: 'mentions-legales', privacy: 'confidentialite', ogLocale: 'fr_FR' },
  { code: 'en', label: 'EN', dir: 'en', legal: 'legal-notice', privacy: 'privacy', ogLocale: 'en_GB' },
  { code: 'de', label: 'DE', dir: 'de', legal: 'impressum', privacy: 'datenschutz', ogLocale: 'de_DE' },
  { code: 'it', label: 'IT', dir: 'it', legal: 'note-legali', privacy: 'privacy', ogLocale: 'it_IT' },
];

// linkedin : renseigner l'URL du profil pour afficher le lien
export const team = [
  { id: 'marc', name: 'Marc Brunstein', photo: 'marc-brunstein.jpg', linkedin: 'https://www.linkedin.com/in/marcbrunstein/' },
  { id: 'arnaud', name: 'Arnaud Huet', photo: 'arnaud-huet.jpg', linkedin: 'https://www.linkedin.com/in/arnaudhuet/' },
  { id: 'nathalie', name: 'Nathalie Blumberg', photo: 'nathalie-blumberg.jpg', linkedin: 'https://www.linkedin.com/in/nathalie-blumberg-145b30193/' },
];

// Extended team : nombre de portraits (sans noms), fichiers static/img/team/extended/01.jpg à NN.jpg
// générés par tools/portraits.py
export const extendedCount = 16;

// logo : fichier dans static/img/clients/ (null = nom affiché en typographie)
// large : true pour un logo compact qui doit s'afficher un peu plus grand
// url : lien ouvert au clic sur le logo (absent = logo non cliquable)
// strip : false pour exclure un logo du bandeau sous l'en-tête (logo illisible en petit et en gris)
// Les groupes s'affichent dans cet ordre ; leurs titres sont dans src/i18n (clients.groups)
export const clients = {
  large: [
    { name: 'AXA', logo: 'axa.png', country: 'fr', url: 'https://www.axa.fr/' },
    { name: 'Orange', logo: 'orange.png', country: 'fr', url: 'https://www.orange.fr/', strip: false },
    { name: 'SFR', logo: 'sfr.png', country: 'fr', url: 'https://www.sfr.fr/' },
    { name: 'Disneyland Paris', logo: 'disneyland-paris.png', country: 'fr', url: 'https://www.disneylandparis.com/fr-fr/' },
    { name: 'Michelin', logo: 'michelin.png', country: 'fr', url: 'https://www.michelin.fr/' },
    { name: 'Shiseido', logo: 'shiseido.png', country: 'fr', url: 'https://www.shiseido.fr/' },
    { name: 'VHV Versicherungen', logo: 'vhv.png', country: 'de', url: 'https://www.vhv.de/' },
    { name: "L'Assurance Maladie", logo: 'ameli.svg', country: 'fr', url: 'https://www.assurance-maladie.ameli.fr/' },
    { name: 'SIAE – Paris Air Show', logo: 'siae.png', country: 'fr', url: 'https://www.siae.fr/', large: true },
    { name: 'CFACI – AHK', logo: 'cfaci.png', country: 'frde', url: 'https://www.francoallemand.com/fr' },
  ],
  tech: [
    { name: 'EastFirm Telecom – T-Mobile', logo: 't-mobile.png', country: 'uk', url: 'https://www.t-mobile.com/' },
    { name: 'EDS – an HP company', logo: 'eds.png', country: 'fr', url: 'https://www.hp.com/fr-fr/home.html' },
    { name: 'Sage', logo: 'sage.png', country: 'fr', url: 'https://www.sage.com/fr-fr/' },
    { name: 'Innova Solutions', logo: 'innova.png', country: 'us', url: 'https://www.innovasolutions.com/' },
    { name: 'Excelacom', logo: 'excelacom.png', country: 'us', url: 'https://www.excelacom.com/' },
    { name: 'cVidya', logo: 'cvidya.png', country: 'il', url: 'https://www.amdocs.com/' },
    { name: 'Jones Cyber Solutions', logo: 'jones.png', country: 'us', url: 'https://en.wikipedia.org/wiki/Jones_Intercable' },
    { name: 'MicroSigns', logo: 'microsigns.png', country: 'ca', url: 'https://fr.invue.com/resource-center/news/invue-acquires-microsigns' },
    { name: 'Wattsonic', logo: 'wattsonic.svg', country: 'cn', url: 'https://www.wattsonic.com/' },
    { name: 'miLibris', logo: 'milibris.png', country: 'fr', url: 'https://www.milibris.com/' },
    { name: 'Youree', logo: 'youree.png', country: 'fr', url: 'https://www.youree.io/' },
  ],
  mid: [
    { name: 'Promosalons', logo: 'promosalons.png', country: 'fr', url: 'https://promosalons.com/' },
    { name: 'VT Scan', logo: 'vtscan.png', country: 'fr', url: 'https://www.vtscan.fr/' },
    { name: 'Epoka', logo: 'epoka.png', country: 'fr', url: 'https://www.epoka.fr/' },
    { name: 'Cynck Consulting MEA', logo: 'cynck.png', country: 'ae' },
    { name: 'Acteurs du franco-allemand', logo: 'acteurs-franco-allemand.png', country: 'frde', url: 'https://www.afa-info.com/' },
    { name: 'Crea Valoris', logo: 'crea-valoris.png', country: 'fr', url: 'https://tonygoncalves.fr/crea-valoris/' },
    { name: 'Annie', logo: 'annie.png', country: 'fr', url: 'https://www.newsassurancespro.com/annie' },
    { name: 'WeeeCycling', logo: 'weeecycling.svg', country: 'fr', url: 'https://www.weeecycling.com/' },
    { name: 'Ecocea Technologies', logo: 'ecocea.svg', country: 'fr', url: 'https://www.ecoceatechnologies.com/fr' },
  ],
};

// url : site du partenaire (null = pas de lien)
export const partners = [
  { id: 'bpi', name: 'Bpifrance', url: 'https://www.bpifrance.fr' },
  { id: 'oct', name: 'OC&T', url: 'https://oc-t.com/' },
  { id: 'cristaleye', name: 'Crystal Eye Technology Partners', url: 'https://crystaleyet.com/' },
  { id: 'pfa', name: 'Le Pôle Franco-Allemand', url: 'https://pole-franco-allemand.de/fr/' },
  { id: 'akb', name: 'AKB Coaching & Consulting', url: 'https://www.coach-pro-akb.fr' },
  { id: 'mba', name: 'MBA Capital', url: 'https://mbacapital.com' },
  { id: 'araiko', name: 'Araïko', url: 'https://araiko.ai' },
  { id: 'cyrcee', name: 'CYRCEE Consulting', url: 'https://www.cyrcee.fr' },
  { id: 'pt', name: 'Potentiel & Talents', url: 'https://potentielettalents.com' },
  { id: 'orsys', name: 'ORSYS', url: 'https://www.orsys.fr' },
  { id: 'nikita', name: 'Nikita', url: 'https://agencenikita.com/' },
  { id: 'nmu', name: 'NMU City Roaming', url: 'https://www.linkedin.com/company/nmu-city-roaming' },
];

// Anciennes adresses du site WordPress (jusqu'en octobre 2026) redirigées vers les nouvelles pages.
// Chemin d'origine (sans / initial) -> cible relative à la racine du site
export const legacyRedirects = {
  'index.php': '',
  'index.php/notre-offre': '#expertise',
  'index.php/nos-references': '#clients',
  'index.php/nos-partenaires-2': '#partners',
  'index.php/contact': '#contact',
  'index.php/mentions-legales': 'mentions-legales/',
  'index.php/blog': '',
  'index.php/2021/03/25/bonjour-tout-le-monde': '',
  'index.php/en': 'en/',
  'index.php/en/a-propos-english': 'en/#about',
  'index.php/en/our-offers': 'en/#expertise',
  'index.php/en/our-references': 'en/#clients',
  'index.php/en/our-partnerships': 'en/#partners',
  'index.php/en/contact-us': 'en/#contact',
  'index.php/en/legal-information': 'en/legal-notice/',
  'index.php/de': 'de/',
  'index.php/de/uber-uns': 'de/#about',
  'index.php/de/unsere-leistungen': 'de/#expertise',
  'index.php/de/referenzen': 'de/#clients',
  'index.php/de/kontakt': 'de/#contact',
  'index.php/de/impressum': 'de/impressum/',
};
