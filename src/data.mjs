// Données communes à toutes les langues.
// Les textes traduits (rôles, descriptions, pays…) sont dans src/i18n/<langue>.mjs

export const site = {
  url: 'https://www.hcorpus.com',
  email: 'contact@hcorpus.com',
  phone: '+33 1 89 16 73 22',
  phoneHref: '+33189167322',
  paris: ['19 rue Jean-Jacques Rousseau', '75001 Paris'],
  headOffice: ['5 route du Bosc André', '27230 Saint-Germain-la-Campagne'],
};

export const languages = [
  { code: 'fr', label: 'FR', dir: '', legal: 'mentions-legales' },
  { code: 'en', label: 'EN', dir: 'en', legal: 'legal-notice' },
  { code: 'de', label: 'DE', dir: 'de', legal: 'impressum' },
  { code: 'it', label: 'IT', dir: 'it', legal: 'note-legali' },
];

// linkedin : renseigner l'URL du profil pour afficher le lien
export const team = [
  { id: 'marc', name: 'Marc Brunstein', photo: 'marc-brunstein.jpg', linkedin: 'https://www.linkedin.com/in/marcbrunstein/' },
  { id: 'arnaud', name: 'Arnaud Huet', photo: 'arnaud-huet.jpg', linkedin: 'https://www.linkedin.com/in/arnaudhuet/' },
  { id: 'jerome', name: 'Jérôme Ravet', photo: 'jerome-ravet.jpg', linkedin: 'https://www.linkedin.com/in/jeromeravet92300/' },
  { id: 'nathalie', name: 'Nathalie Blumberg', photo: 'nathalie-blumberg.jpg', linkedin: 'https://www.linkedin.com/in/nathalie-blumberg-145b30193/' },
];

// logo : fichier dans static/img/clients/ (null = nom affiché en typographie)
// country : clé de traduction du pays (références internationales)
export const clients = {
  large: [
    { name: 'AXA', logo: 'axa.png' },
    { name: 'SFR', logo: 'sfr.png' },
    { name: 'Disneyland Paris', logo: 'disneyland-paris.png' },
    { name: 'Orange', logo: 'orange.png' },
    { name: 'Michelin', logo: 'michelin.png' },
    { name: 'Shiseido', logo: 'shiseido.png' },
    { name: 'EDS – an HP company', logo: 'eds.png' },
    { name: "L'Assurance Maladie", logo: 'ameli.svg' },
    { name: 'SIAE – Paris Air Show', logo: 'siae.png' },
  ],
  mid: [
    { name: 'miLibris', logo: 'milibris.png' },
    { name: 'Youree', logo: 'youree.png' },
    { name: 'Epoka', logo: 'epoka.png' },
    { name: 'Sage', logo: 'sage.png' },
    { name: 'Promosalons', logo: 'promosalons.png' },
    { name: 'VT Scan', logo: 'vtscan.png' },
    { name: 'Crea Valoris', logo: 'crea-valoris.png' },
    { name: 'Annie', logo: 'annie.png' },
  ],
  international: [
    { name: 'Innova Solutions', logo: 'innova.png', country: 'us' },
    { name: 'Excelacom', logo: 'excelacom.png', country: 'us' },
    { name: 'Jones Cyber Solutions', logo: 'jones.png', country: 'us' },
    { name: 'MicroSigns', logo: 'microsigns.png', country: 'ca' },
    { name: 'EastFirm Telecom – T-Mobile', logo: 't-mobile.png', country: 'uk' },
    { name: 'VHV Versicherungen', logo: 'vhv.png', country: 'de' },
    { name: 'Acteurs du franco-allemand', logo: 'acteurs-franco-allemand.png', country: 'de' },
    { name: 'CFACI – AHK', logo: 'cfaci.png', country: 'frde' },
    { name: 'cVidya', logo: 'cvidya.png', country: 'il' },
    { name: 'Cynck Consulting MEA', logo: 'cynck.png', country: 'ae' },
    { name: 'Wattsonic', logo: 'wattsonic.svg', country: 'cn' },
  ],
};

// url : site du partenaire (null = pas de lien)
export const partners = [
  { id: 'cfaci', name: 'Chambre franco-allemande de commerce et d’industrie', url: 'https://www.francoallemand.com' },
  { id: 'oct', name: 'OC&T', url: null },
  { id: 'cristaleye', name: 'Cristal Eye Technologies', url: null },
  { id: 'pfa', name: 'Le Pôle Franco-Allemand', url: 'https://pole-franco-allemand.de/fr/' },
  { id: 'akb', name: 'AKB Coaching & Consulting', url: 'https://www.coach-pro-akb.fr' },
  { id: 'mba', name: 'MBA Capital', url: 'https://mbacapital.com' },
  { id: 'araiko', name: 'Araïko', url: 'https://araiko.ai' },
  { id: 'cyrcee', name: 'CYRCEE Consulting', url: 'https://www.cyrcee.fr' },
  { id: 'pt', name: 'Potentiel & Talents', url: 'https://potentielettalents.com' },
  { id: 'orsys', name: 'ORSYS', url: 'https://www.orsys.fr' },
  { id: 'nikita', name: 'Nikita', url: null },
  { id: 'nmu', name: 'NMU City Roaming', url: 'https://www.linkedin.com/company/nmu-city-roaming' },
];
