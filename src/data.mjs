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
  { code: 'fr', label: 'FR', dir: '', legal: 'mentions-legales', ogLocale: 'fr_FR' },
  { code: 'en', label: 'EN', dir: 'en', legal: 'legal-notice', ogLocale: 'en_GB' },
  { code: 'de', label: 'DE', dir: 'de', legal: 'impressum', ogLocale: 'de_DE' },
  { code: 'it', label: 'IT', dir: 'it', legal: 'note-legali', ogLocale: 'it_IT' },
];

// linkedin : renseigner l'URL du profil pour afficher le lien
export const team = [
  { id: 'marc', name: 'Marc Brunstein', photo: 'marc-brunstein.jpg', linkedin: 'https://www.linkedin.com/in/marcbrunstein/' },
  { id: 'arnaud', name: 'Arnaud Huet', photo: 'arnaud-huet.jpg', linkedin: 'https://www.linkedin.com/in/arnaudhuet/' },
  { id: 'jerome', name: 'Jérôme Ravet', photo: 'jerome-ravet.jpg', linkedin: 'https://www.linkedin.com/in/jeromeravet92300/' },
  { id: 'nathalie', name: 'Nathalie Blumberg', photo: 'nathalie-blumberg.jpg', linkedin: 'https://www.linkedin.com/in/nathalie-blumberg-145b30193/' },
];

// logo : fichier dans static/img/clients/ (null = nom affiché en typographie)
// large : true pour un logo compact qui doit s'afficher un peu plus grand
// url : lien ouvert au clic sur le logo (absent = logo non cliquable)
// Les groupes s'affichent dans cet ordre ; leurs titres sont dans src/i18n (clients.groups)
export const clients = {
  large: [
    { name: 'AXA', logo: 'axa.png', country: 'fr', url: 'https://www.axa.fr/' },
    { name: 'Orange', logo: 'orange.png', country: 'fr', url: 'https://www.orange.fr/' },
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
    { name: 'Promosalons', logo: 'promosalons.png', country: 'fr', url: 'https://www.promosalons.com/' },
    { name: 'VT Scan', logo: 'vtscan.png', country: 'fr', url: 'https://www.vtscan.fr/' },
    { name: 'Epoka', logo: 'epoka.png', country: 'fr', url: 'https://www.epoka.fr/' },
    { name: 'Cynck Consulting MEA', logo: 'cynck.png', country: 'ae' },
    { name: 'Acteurs du franco-allemand', logo: 'acteurs-franco-allemand.png', country: 'frde', url: 'https://www.afa-info.com/' },
    { name: 'Crea Valoris', logo: 'crea-valoris.png', country: 'fr', url: 'https://tonygoncalves.fr/crea-valoris/' },
    { name: 'Annie', logo: 'annie.png', country: 'fr' },
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
