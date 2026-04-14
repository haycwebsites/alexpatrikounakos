// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

export interface NavigationServiceItem {
  label: LocaleString;
  href: string;
}

export interface NavigationConfig {
  brandName: LocaleString;
  brandHref: string;
  socialFacebookHref: string;
  socialInstagramHref: string;
  socialFacebookAria: LocaleString;
  socialInstagramAria: LocaleString;
  home: { label: LocaleString; href: string };
  servicesToggle: LocaleString;
  services: NavigationServiceItem[];
  about: { label: LocaleString; href: string };
  events: { label: LocaleString; href: string };
  contactCta: { label: LocaleString; href: string };
  offcanvasMenuLabel: LocaleString;
  offcanvasCloseAria: LocaleString;
}

export interface FooterConfig {
  brandName: LocaleString;
  brandHref: string;
  privacyPolicyLabel: LocaleString;
  privacyPolicyHref: string;
  contactEmail: LocaleString;
  locationLine: LocaleString;
  phoneDisplay: LocaleString;
  phoneTel: string;
  copyrightNotice: LocaleString;
  creditMadeBy: LocaleString;
  creditVendorName: LocaleString;
  creditVendorHref: string;
  creditMadeWith: LocaleString;
}

export interface HomeIntroConfig {
  backgroundImage: string;
  headline: LocaleString;
  subline: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeServiceCard {
  image: string;
  imageAlt: LocaleString;
  title: LocaleString;
  description: LocaleString;
  href: string;
  /** Extra classes on the overlay panel (e.g. `text-black`) */
  cardDetailExtraClass?: string;
}

export interface HomeServicesConfig {
  moreButtonLabel: LocaleString;
  cards: HomeServiceCard[];
}

export interface HomeAboutBlock {
  image: string;
  imageAlt: LocaleString;
  title: LocaleString;
  body: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeAboutConfig {
  block1: HomeAboutBlock;
  block2: HomeAboutBlock;
}

export interface HomeNewsletterConfig {
  headingLead: LocaleString;
  headingAccent: LocaleString;
  description: LocaleString;
  /** Optional URL or `/path` under `public/` for background pattern */
  backgroundPattern: string;
  emailPlaceholder: LocaleString;
  submitLabel: LocaleString;
  mailSubject: LocaleString;
}

export interface HomeVideosConfig {
  sources: string[];
}

export interface HomeContactConfig {
  title: LocaleString;
  intro: LocaleString;
  sideImage: string;
  sideImageAlt: LocaleString;
}

export interface HomePageConfig {
  intro: HomeIntroConfig;
  services: HomeServicesConfig;
  about: HomeAboutConfig;
  newsletter: HomeNewsletterConfig;
  videos: HomeVideosConfig;
  contact: HomeContactConfig;
}

export type {
  ReikiHeroConfig,
  ReikiBenefitCard,
  ReikiStoryBlock,
  ReikiFaqItem,
  ReikiPageConfig,
} from './reikiPageConfig.seed.js';

export type {
  SelfAwarenessHeroConfig,
  SelfAwarenessBenefitCard,
  SelfAwarenessStoryBlock,
  SelfAwarenessFaqItem,
  SelfAwarenessPageConfig,
} from './selfAwarenessPageConfig.seed.js';

export type {
  CacaoHeroConfig,
  CacaoBenefitCard,
  CacaoStoryBlock,
  CacaoFaqItem,
  CacaoPageConfig,
} from './cacaoPageConfig.seed.js';

export type {
  DanceHeroConfig,
  DanceBenefitCard,
  DanceStoryBlock,
  DanceFaqItem,
  DancePageConfig,
} from './dancePageConfig.seed.js';

export type {
  GroupMeditationHeroConfig,
  GroupMeditationBenefitCard,
  GroupMeditationStoryBlock,
  GroupMeditationFaqItem,
  GroupMeditationPageConfig,
} from './groupMeditationPageConfig.seed.js';

export type {
  SeminarsHeroConfig,
  SeminarsBenefitCard,
  SeminarsStoryBlock,
  SeminarsFaqItem,
  SeminarsPageConfig,
} from './seminarsPageConfig.seed.js';

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: '', en: '' },
  description: { el: '', en: '' },
  language: '',
  keywords: { el: '', en: '' },
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: '',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

const siteRoot = 'https://alexispatrikounakos.gr';

/** In-app route for the Reiki service page (matches WP slug). */
export const reikiSessionsPath = '/ατομικές-συνεδρίες-reiki';

/** In-app route for individual self-awareness sessions (matches WP slug). */
export const selfAwarenessSessionsPath = '/ατομικές-συνεδρίες-αυτογνωσίας';

/** In-app route for Cacao Ceremony (matches WP slug). */
export const cacaoCeremonyPath = '/cacao-ceremony';

/** In-app route for Dance With Your Heart (matches WP slug). */
export const danceWithYourHeartPath = '/dance-with-your-heart';

/** In-app route for group meditation & sharing (matches WP slug). */
export const groupMeditationPath = '/ομαδικός-διαλογισμός';

/** In-app route for seminars (matches WP slug). */
export const seminarsPath = '/σεμινάρια-αυτογνωσίας';

export const navigationConfig: NavigationConfig = {
  brandName: { el: 'Alexis Patrikounakos', en: 'Alexis Patrikounakos' },
  brandHref: `${siteRoot}/`,
  socialFacebookHref:
    'https://www.facebook.com/profile.php?id=100077095013637',
  socialInstagramHref:
    'https://www.instagram.com/alexis_patrikounakos?igsh=MXZhbmMycWpkdHRpZQ==',
  socialFacebookAria: { el: 'Facebook', en: 'Facebook' },
  socialInstagramAria: { el: 'Instagram', en: 'Instagram' },
  home: { label: { el: 'Αρχικη', en: 'Home' }, href: `${siteRoot}/` },
  servicesToggle: { el: 'Υπηρεσιες', en: 'Services' },
  services: [
    {
      label: {
        el: 'Ατομικες Συνεδριες Αυτογνωσιας',
        en: 'Individual self-awareness sessions',
      },
      href: selfAwarenessSessionsPath,
    },
    {
      label: {
        el: 'Ατομικες Συνεδριες Reiki',
        en: 'Individual Reiki sessions',
      },
      href: reikiSessionsPath,
    },
    {
      label: {
        el: 'Ομαδικος Διαλογισμος & Μοιρασμα',
        en: 'Group meditation & sharing',
      },
      href: groupMeditationPath,
    },
    {
      label: { el: 'Cacao Ceremony', en: 'Cacao ceremony' },
      href: cacaoCeremonyPath,
    },
    {
      label: {
        el: 'Ομαδες / Σεμιναρια Αυτογνωσιας και Προσωπικης Αναπτυξης',
        en: 'Groups / seminars on self-awareness & personal growth',
      },
      href: seminarsPath,
    },
    {
      label: { el: 'Dance With Your Heart', en: 'Dance With Your Heart' },
      href: danceWithYourHeartPath,
    },
  ],
  about: { label: { el: 'Για Εμενα', en: 'About me' }, href: '/#about' },
  events: { label: { el: 'Events', en: 'Events' }, href: '/events' },
  contactCta: {
    label: { el: 'Επικοινωνια', en: 'Contact' },
    href: '/#contact',
  },
  offcanvasMenuLabel: { el: 'Μενού', en: 'Menu' },
  offcanvasCloseAria: { el: 'Κλείσιμο', en: 'Close' },
};

export const footerConfig: FooterConfig = {
  brandName: { el: 'Αlexis Patrikounakos', en: 'Alexis Patrikounakos' },
  brandHref: `${siteRoot}/`,
  privacyPolicyLabel: { el: 'Πολιτική Απορρήτου', en: 'Privacy policy' },
  privacyPolicyHref: `${siteRoot}/privacy-policy/`,
  contactEmail: {
    el: 'info@alexispatrikounakos.gr',
    en: 'info@alexispatrikounakos.gr',
  },
  locationLine: { el: 'Αθήνα', en: 'Athens' },
  phoneDisplay: { el: '6984557648', en: '6984557648' },
  phoneTel: '+306984557648',
  copyrightNotice: {
    el: 'Copyright © 2026 All Right Reserved.',
    en: 'Copyright © 2026 All Right Reserved.',
  },
  creditMadeBy: { el: 'Κατασκευή από', en: 'Made by' },
  creditVendorName: { el: 'hayc', en: 'hayc' },
  creditVendorHref: 'https://hayc.gr/',
  creditMadeWith: { el: 'με 💙', en: 'with 💙' },
};

export const homePageConfig: HomePageConfig = {
  intro: {
    backgroundImage: `${siteRoot}/wp-content/uploads/2025/12/%CE%9A%CE%91%CE%9B%CE%A9%CE%A3%CE%9F%CE%A1%CE%99%CE%A3%CE%9C%CE%91_noHYxv-1.webp`,
    headline: {
      el: 'Ανακάλυψε την αυθεντική σου ενέργεια.',
      en: 'Discover your authentic energy.',
    },
    subline: {
      el: 'Απελευθέρωσε το σώμα σου, θεράπευσε την ψυχή σου.',
      en: 'Free your body, heal your soul.',
    },
    ctaLabel: { el: 'Περισσοτερα', en: 'More' },
    ctaHref: '#services',
  },
  services: {
    moreButtonLabel: { el: 'Περισσοτερα', en: 'More' },
    cards: [
      {
        image: `${siteRoot}/wp-content/uploads/2025/12/%CE%91%CF%85%CF%84%CE%BF%CE%B3%CE%BD%CF%89%CF%83%CE%B9%CE%B1-1_noHYxv-1-scaled.webp`,
        imageAlt: {
          el: 'Ατομικές συνεδρίες αυτογνωσίας',
          en: 'Individual self-awareness sessions',
        },
        title: {
          el: 'Ατομικές Συνεδρίες Αυτογνωσίας',
          en: 'Individual self-awareness sessions',
        },
        description: {
          el: 'Καθοδήγηση για βαθύτερη κατανόηση του εαυτού.',
          en: 'Guidance for a deeper understanding of yourself.',
        },
        href: selfAwarenessSessionsPath,
      },
      {
        image: `${siteRoot}/wp-content/uploads/2025/12/zvyxgjjz6zygorjs8nvf-scaled.jpg`,
        imageAlt: {
          el: 'Ατομικές συνεδρίες Reiki',
          en: 'Individual Reiki sessions',
        },
        title: {
          el: 'Ατομικές Συνεδρίες Reiki',
          en: 'Individual Reiki sessions',
        },
        description: {
          el: 'Ενεργειακή ευθυγράμμιση για ισορροπία και χαλάρωση.',
          en: 'Energetic alignment for balance and relaxation.',
        },
        href: reikiSessionsPath,
      },
      {
        image: `${siteRoot}/wp-content/uploads/2025/12/zmk2lag7urfafcq1qjat-scaled.jpg`,
        imageAlt: {
          el: 'Ομαδικός διαλογισμός και μοίρασμα',
          en: 'Group meditation and sharing',
        },
        title: {
          el: 'Ομαδικός Διαλογισμός & Μοίρασμα',
          en: 'Group meditation & sharing',
        },
        description: {
          el: 'Κοινή πρακτική σύνδεσης, ηρεμίας και αλληλοϋποστήριξης.',
          en: 'A shared practice of connection, calm, and mutual support.',
        },
        href: groupMeditationPath,
        cardDetailExtraClass: 'text-black',
      },
      {
        image: `${siteRoot}/wp-content/uploads/2026/01/gsseslandqygvaj4nbxx-scaled.webp`,
        imageAlt: { el: 'Cacao ceremony', en: 'Cacao ceremony' },
        title: { el: 'Cacao Ceremony', en: 'Cacao ceremony' },
        description: {
          el: 'Τελετουργική εμπειρία ανοίγματος καρδιάς και εσωτερικής γαλήνης.',
          en: 'A ceremonial experience of heart-opening and inner calm.',
        },
        href: cacaoCeremonyPath,
        cardDetailExtraClass: 'text-black',
      },
      {
        image: `${siteRoot}/wp-content/uploads/2025/12/%CE%A3%CE%95%CE%9C%CE%99%CE%9D%CE%91%CE%A1%CE%99%CE%91-%CE%91%CE%A5%CE%A4%CE%9F%CE%93%CE%9D%CE%A9%CE%A3%CE%99%CE%91%CE%A3-1_noHYxv-scaled.webp`,
        imageAlt: {
          el: 'Σεμινάρια αυτογνωσίας και ανάπτυξης',
          en: 'Self-awareness and growth seminars',
        },
        title: {
          el: 'Σεμινάρια Αυτογνωσίας & Ανάπτυξης',
          en: 'Self-awareness & growth seminars',
        },
        description: {
          el: 'Βιωματική μάθηση για προσωπική εξέλιξη.',
          en: 'Experiential learning for personal growth.',
        },
        href: seminarsPath,
      },
      {
        image: `${siteRoot}/wp-content/uploads/2025/11/gyp4ta4k1dwhr6yewjv2-scaled.jpg`,
        imageAlt: { el: 'Dance With Your Heart', en: 'Dance With Your Heart' },
        title: { el: 'Dance With Your Heart', en: 'Dance With Your Heart' },
        description: {
          el: 'Κίνηση με επίκεντρο τη σύνδεση με το σώμα και το συναίσθημα.',
          en: 'Movement focused on reconnecting with body and emotion.',
        },
        href: danceWithYourHeartPath,
      },
    ],
  },
  about: {
    block1: {
      image: `${siteRoot}/wp-content/uploads/2025/12/%CE%92%CE%99%CE%9F%CE%93%CE%A1%CE%91%CE%A6%CE%99%CE%9A%CE%9F-1_noHYxv.webp`,
      imageAlt: {
        el: 'Ενεργειακός θεραπευτής',
        en: 'Energy healer',
      },
      title: { el: 'Για Εμένα', en: 'About me' },
      body: {
        el: 'Γεια σου, είμαι ο Αλέξης Πατρικουνάκος και είμαι ενεργειακός θεραπευτής με εστίαση στο Somatic Release. Καθοδηγώ τους ανθρώπους στο να θυμηθούν ποιοι πραγματικά είναι και να ανακαλύψουν τον αυθεντικό τους εαυτό. Μέσα από το σώμα, τους βοηθώ να συνδεθούν με αυτό και να του δώσουν το χώρο που χρειάζεται για να εκφραστεί, να θεραπευτεί και να λάμψει.',
        en: 'Hi, I am Alexis Patrikounakos, an energy healer focused on somatic release. I guide people to remember who they truly are and reconnect with their authentic self. Through the body, I help them relate to it and give it the space it needs to express, heal, and shine.',
      },
      ctaLabel: { el: 'Περισσοτερα', en: 'More' },
      ctaHref: '/#contact',
    },
    block2: {
      image: `${siteRoot}/wp-content/uploads/2025/12/%CE%92%CE%99%CE%9F%CE%93%CE%A1%CE%91%CE%A6%CE%99%CE%9A%CE%9F-2_noHYxv-1-scaled.webp`,
      imageAlt: {
        el: 'Εκπαίδευση και εμπειρία',
        en: 'Training and experience',
      },
      title: { el: 'Εκπαίδευση', en: 'Training' },
      body: {
        el: 'Με σπουδές στο κομμάτι των κοινωνικών επιστήμων και του χορού και εκπαιδεύσεις πάνω στο κλάδο της ψυχολογίας, του life coaching, των ενεργειακών / εναλλακτικών θεραπειών και του θεάτρου συνδυάζω την αγάπη μου για την ανθρώπινη ύπαρξη με την επιθυμία μου για την έκφραση της αλήθειας της ψυχής. Η απελευθέρωση συναισθημάτων, τραυμάτων και μπλοκαρισμάτων που έχουν συσσωρευτεί στο σώμα είναι ο βασικός άξονας για την προσωπική ανάπτυξη και εξέλιξη.',
        en: 'With studies in social sciences and dance, and training in psychology, life coaching, energy and alternative therapies, and theatre, I combine my love for the human experience with my wish to express the truth of the soul. Releasing emotions, trauma, and blockages stored in the body is the core of personal growth and evolution.',
      },
      ctaLabel: { el: 'Περισσοτερα', en: 'More' },
      ctaHref: '/#contact',
    },
  },
  newsletter: {
    headingLead: { el: 'Newsletter μέσω', en: 'Newsletter via' },
    headingAccent: { el: 'Email', en: 'Email' },
    description: {
      el: 'Κάνε εγγραφή στο newsletter για νέα και ενημερώσεις.',
      en: 'Subscribe to the newsletter for news and updates.',
    },
    backgroundPattern: '',
    emailPlaceholder: {
      el: 'Το email σου',
      en: 'Your email address',
    },
    submitLabel: { el: 'Εγγραφή', en: 'Subscribe' },
    mailSubject: {
      el: 'Εγγραφή newsletter',
      en: 'Newsletter signup',
    },
  },
  videos: {
    sources: [
      `${siteRoot}/wp-content/uploads/2026/01/Messenger_creation_00ADFA60-ECE8-4199-8696-530AA1178E79_id83pu.mp4`,
      `${siteRoot}/wp-content/uploads/2026/01/2024-12-18-223632122_okksmw.mp4`,
      `${siteRoot}/wp-content/uploads/2026/01/compressed-video_guo5v2.mp4`,
    ],
  },
  contact: {
    title: { el: 'Επικοινωνία', en: 'Contact' },
    intro: {
      el: 'Έχεις περισσότερες ερωτήσεις; Στείλε μου μήνυμα.',
      en: 'Have more questions? Send me a message.',
    },
    sideImage: `${siteRoot}/wp-content/uploads/2025/12/%CE%A6%CE%9F%CE%A1%CE%9C%CE%91_noHYxv-scaled.webp`,
    sideImageAlt: {
      el: 'Φόρμα επικοινωνίας',
      en: 'Contact form illustration',
    },
  },
};

export { reikiPageConfig } from './reikiPageConfig.seed.js';
export { selfAwarenessPageConfig } from './selfAwarenessPageConfig.seed.js';
export { cacaoPageConfig } from './cacaoPageConfig.seed.js';
export { dancePageConfig } from './dancePageConfig.seed.js';
export { groupMeditationPageConfig } from './groupMeditationPageConfig.seed.js';
export { seminarsPageConfig } from './seminarsPageConfig.seed.js';
