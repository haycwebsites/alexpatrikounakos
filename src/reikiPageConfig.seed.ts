import type { LocaleString } from './config.js';

export interface ReikiHeroConfig {
  sectionExtraClass: string;
  backgroundImage: string;
  backgroundPosition: string;
  headline: LocaleString;
  subline: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface ReikiBenefitCard {
  title: LocaleString;
  body: LocaleString;
}

export interface ReikiStoryBlock {
  image: string;
  imageAlt: LocaleString;
  title: LocaleString;
  body: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface ReikiFaqItem {
  id: string;
  question: LocaleString;
  answer: LocaleString;
  defaultOpen?: boolean;
}

export interface ReikiPageConfig {
  intro: ReikiHeroConfig;
  benefits: {
    sectionTitle: LocaleString;
    cards: ReikiBenefitCard[];
  };
  story: {
    containerId: string;
    block1: ReikiStoryBlock;
    block2: ReikiStoryBlock;
  };
  faq: {
    title: LocaleString;
    subtitle: LocaleString;
    items: ReikiFaqItem[];
  };
  interest: {
    sectionId: string;
    title: LocaleString;
    intro: LocaleString;
  };
  inquiry: {
    sideImage: string;
    sideImageAlt: LocaleString;
  };
}

const siteRoot = 'https://alexispatrikounakos.gr';

const reikiStoryBody: LocaleString = {
  el: 'Το Reiki είναι μια φυσική ενεργειακή μέθοδος αυτοθεραπείας με ρίζες στην Ιαπωνία, που δρα σε όλα τα επίπεδα: σωματικό, συναισθηματικό, νοητικό και πνευματικό επίπεδο. Κατά τη διάρκεια της συνεδρίας, η θεραπευτική ενέργεια ρέει απαλά από τα χέρια του θεραπευτή στο σώμα του θεραπευόμενου, αποκαθιστώντας έτσι τη φυσική ροή της ζωτικής ενέργειας και ενεργοποιώντας την ικανότητα του οργανισμού να αυτοθεραπεύεται. Εκτός από τις θεραπευτικές του ιδιότητες το Reiki αποτελεί μια πρακτική σύνδεσης με την εσωτερική μας σοφία, που φέρνει γαλήνη, ανακούφιση από το στρες και αίσθηση ενότητας με τον εαυτό και τη ζωή.',
  en: 'Reiki is a natural energy-based self-healing method rooted in Japan, working across physical, emotional, mental, and spiritual levels. During a session, healing energy flows gently from the practitioner’s hands into the recipient’s body, restoring the natural flow of life force and activating the body’s ability to self-heal. Beyond its therapeutic qualities, Reiki is a practice of reconnecting with inner wisdom, bringing calm, stress relief, and a sense of unity with yourself and life.',
};

export const reikiPageConfig: ReikiPageConfig = {
  intro: {
    sectionExtraClass: 'mb-6',
    backgroundImage: `${siteRoot}/wp-content/uploads/2025/12/qcysegjibjib0s8kby0n-scaled.jpg`,
    backgroundPosition: 'top center',
    headline: {
      el: 'Ατομικές Συνεδρίες Reiki',
      en: 'Individual Reiki sessions',
    },
    subline: {
      el: 'Επανέφερε την εσωτερική σου ηρεμία και δύναμη.',
      en: 'Restore your inner calm and strength.',
    },
    ctaLabel: { el: 'Περισσοτερα', en: 'More' },
    ctaHref: '#about3',
  },
  benefits: {
    sectionTitle: {
      el: 'Οφέλη της θεραπείας',
      en: 'Benefits of the practice',
    },
    cards: [
      {
        title: {
          el: 'Ενεργειακή αρμονία και ανανέωση',
          en: 'Energetic harmony and renewal',
        },
        body: {
          el: 'Αποκαθιστά τη ροή της ενέργειας και ενισχύει την αυτοθεραπεία',
          en: 'Restores energy flow and supports self-healing.',
        },
      },
      {
        title: {
          el: 'Βαθιά χαλάρωση και ανακούφιση από στρες',
          en: 'Deep relaxation and stress relief',
        },
        body: {
          el: 'Δημιουργεί ηρεμία σώματος και νου',
          en: 'Creates calm in body and mind.',
        },
      },
      {
        title: {
          el: 'Εσωτερική σύνδεση και προσωπική ανάπτυξη',
          en: 'Inner connection and personal growth',
        },
        body: {
          el: 'Απελευθερώνει συναισθήματα, ενισχύει τη διαίσθηση και τη σύνδεση με τον Ανώτερο Εαυτό.',
          en: 'Releases emotion, strengthens intuition, and deepens connection with your higher self.',
        },
      },
    ],
  },
  story: {
    containerId: 'about3',
    block1: {
      image: `${siteRoot}/wp-content/uploads/2025/12/b2ayacc8yqazqlqjpoqo-scaled.jpg`,
      imageAlt: {
        el: 'Ατομικές Συνεδρίες Reiki',
        en: 'Individual Reiki sessions',
      },
      title: {
        el: 'Ενέργεια & Ισορροπία',
        en: 'Energy & balance',
      },
      body: reikiStoryBody,
      ctaLabel: { el: 'Ενδιαφερομαι', en: 'I am interested' },
      ctaHref: '#interest2',
    },
    block2: {
      image: `${siteRoot}/wp-content/uploads/2025/12/b1qbjcxyddeqsigwqqxt.jpg`,
      imageAlt: {
        el: 'Ατομικές Συνεδρίες Reiki',
        en: 'Individual Reiki sessions',
      },
      title: {
        el: 'Σύνδεση & Ευεξία',
        en: 'Connection & wellbeing',
      },
      body: reikiStoryBody,
      ctaLabel: { el: 'Ενδιαφερομαι', en: 'I am interested' },
      ctaHref: '#interest2',
    },
  },
  faq: {
    title: { el: 'FAQ', en: 'FAQ' },
    subtitle: {
      el: 'Αν δεν βρεις την απάντηση που ψάχνεις, μην διστάσεις να επικοινωνήσεις μαζί μου.',
      en: 'If you cannot find the answer you need, feel free to get in touch.',
    },
    items: [
      {
        id: 'reiki-faq-1',
        question: {
          el: 'Πώς πραγματοποιείται μια συνεδρία Ρέικι;',
          en: 'How does a Reiki session take place?',
        },
        answer: {
          el: 'Κατά τη διάρκεια της συνεδρίας, ο θεραπευτής διοχετεύει απαλή, θεραπευτική ενέργεια μέσω των χεριών του στο σώμα του θεραπευόμενου, ενεργοποιώντας τη φυσική ικανότητα του σώματος να αυτοθεραπεύεται. Το άτομο είναι ξαπλωμένο και η όλη διαδικασία γίνεται είτε από απόσταση είτε με απαλά αγγίγματα στο σώμα του ατόμου. Η διαδικασία είναι χαλαρωτική, ήρεμη και μη επεμβατική.',
          en: 'During the session, the practitioner channels gentle healing energy through their hands into the recipient’s body, activating the body’s natural self-healing. You lie comfortably while the work happens either at a distance or with light touch on the body. The process is relaxing, calm, and non-invasive.',
        },
        defaultOpen: true,
      },
      {
        id: 'reiki-faq-2',
        question: {
          el: 'Είναι απαραίτητη προηγούμενη εμπειρία; Χρειάζεται κάποια ειδική προετοιμασία πριν ή μετά τη συνεδρία από μεριάς μου;',
          en: 'Do I need prior experience or special preparation before or after a session?',
        },
        answer: {
          el: 'Όχι. Το Reiki είναι κατάλληλο για όλους, ανεξάρτητα από εμπειρία σε διαλογισμό ή ενεργειακές πρακτικές. Δεν χρειάζεται τίποτα. Ίσως πριν και μετά θα ήταν καλό ένα χαλαρωτικό ντους στο χώρο σου.',
          en: 'No. Reiki is suitable for everyone, regardless of experience with meditation or energy practices. You do not need to prepare anything special; a relaxing shower before and after can feel supportive.',
        },
      },
      {
        id: 'reiki-faq-3',
        question: {
          el: 'Τι θα νιώσω κατά τη διάρκεια μιας συνεδρίας; Πως θα είμαι μετά;',
          en: 'What will I feel during a session, and how might I feel afterwards?',
        },
        answer: {
          el: 'Αυτό ποικίλει ανάλογα με το άτομο, μπορεί να αισθανθείς βαθιά χαλάρωση, ένα αίσθημα ανακούφισης και ηρεμίας, μια μικρή αίσθηση ζέστης ή κρύου στο κορμί σου ή ακόμα και να βυθιστείς σε ύπνο. Πολλοί άνθρωποι αναφέρουν αίσθηση ελαφρότητας, γαλήνης, απελευθέρωσης έντασης και συναισθηματικής ανακούφισης μετά τη συνεδρία. Σε ορισμένες περιπτώσεις, εμφανίζονται εσωτερικές συνειδητοποιήσεις ή βαθύτερη σύνδεση με τον εαυτό.',
          en: 'It varies: you may feel deep relaxation, relief and calm, subtle warmth or coolness in the body, or even drift toward sleep. Many people report lightness, peace, release of tension, and emotional ease afterwards. Sometimes new insights or a deeper sense of connection arise.',
        },
      },
      {
        id: 'reiki-faq-4',
        question: {
          el: 'Μπορεί το Reiki να βοηθήσει με άγχος και στρες;',
          en: 'Can Reiki help with anxiety and stress?',
        },
        answer: {
          el: 'Ναι. Το Reiki είναι ιδιαίτερα αποτελεσματικό στη μείωση του άγχους, στη χαλάρωση του νευρικού συστήματος και στην αποφόρτιση έντασης από το σώμα και το νου.',
          en: 'Yes. Reiki is especially helpful for easing anxiety, relaxing the nervous system, and releasing tension held in the body and mind.',
        },
      },
      {
        id: 'reiki-faq-5',
        question: {
          el: 'Πόσες συνεδρίες θα χρειαστεί να κάνω; Πόση διάρκεια έχει κάθε συνεδρία;',
          en: 'How many sessions will I need, and how long is each session?',
        },
        answer: {
          el: 'Αυτό εξαρτάται από το αίτημα / ζήτημα που θέλει να επιλύσει το κάθε άτομο. Η θεραπεία Reiki είναι καλό να γίνεται σε πιο συστηματική μορφή. Μπορεί να γίνεται και κάθε μέρα αν το άτομο χρίζει ανάγκης αλλά προτείνεται μια φορά την εβδομάδα ώστε τα αποτελέσματα να είναι πιο σύντομα. Μια τυπική συνεδρία Reiki διαρκεί περίπου 75 λεπτά, συμπεριλαμβανομένης σύντομης συζήτησης πριν και μετά τη θεραπείας για βαθύτερη κατανόηση της εμπειρίας.',
          en: 'It depends on what you want to work through. Reiki is most supportive when practiced consistently; sometimes daily if needed, though once a week is often suggested for steady results. A typical session lasts about 75 minutes, including a short conversation before and after to integrate the experience.',
        },
      },
      {
        id: 'reiki-faq-6',
        question: {
          el: 'Γίνονται οι συνεδρίες δια ζώσης ή online;',
          en: 'Are sessions in person or online?',
        },
        answer: {
          el: 'Οι συνεδρίες πραγματοποιούνται και δια ζώσης και εξ αποστάσεως. Η εξ αποστάσεως θεραπεία είναι εξίσου αποτελεσματική, καθώς η ενέργεια δεν περιορίζεται από την απόσταση.',
          en: 'Sessions are available both in person and at a distance. Remote sessions can be equally effective, as energy is not limited by physical distance.',
        },
      },
    ],
  },
  interest: {
    sectionId: 'interest2',
    title: {
      el: 'Εκδήλωση ενδιαφέροντος',
      en: 'Expression of interest',
    },
    intro: {
      el: 'Συμπλήρωσε τα στοιχεία σου για να μάθεις περισσότερα και να εξασφαλίσεις τη θέση σου.',
      en: 'Share your details to learn more and reserve your place.',
    },
  },
  inquiry: {
    sideImage: `${siteRoot}/wp-content/uploads/2025/12/ariwmnfs5ho5yxojgl43-scaled.webp`,
    sideImageAlt: {
      el: 'Ατομικές συνεδρίες Reiki',
      en: 'Individual Reiki sessions',
    },
  },
};
