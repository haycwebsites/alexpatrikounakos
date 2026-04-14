import type { LocaleString } from './config.js';

export interface SelfAwarenessHeroConfig {
  sectionExtraClass: string;
  backgroundImage: string;
  backgroundPosition: string;
  headline: LocaleString;
  subline: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface SelfAwarenessBenefitCard {
  title: LocaleString;
  body: LocaleString;
  /** Extra classes on the inner bordered box (e.g. `m-0`) */
  cardInnerExtraClass?: string;
}

export interface SelfAwarenessStoryBlock {
  image: string;
  imageAlt: LocaleString;
  title: LocaleString;
  body: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
  /** Optional extra classes on the img (e.g. `squareImg`) */
  imageClassName?: string;
}

export interface SelfAwarenessFaqItem {
  id: string;
  question: LocaleString;
  answer: LocaleString;
  defaultOpen?: boolean;
}

export interface SelfAwarenessPageConfig {
  intro: SelfAwarenessHeroConfig;
  benefits: {
    sectionTitle: LocaleString;
    cards: SelfAwarenessBenefitCard[];
  };
  story: {
    containerId: string;
    block1: SelfAwarenessStoryBlock;
    block2: SelfAwarenessStoryBlock;
  };
  faq: {
    title: LocaleString;
    subtitle: LocaleString;
    items: SelfAwarenessFaqItem[];
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

const storyBodyShared: LocaleString = {
  el: 'Πριν την ενσάρκωσή μας, ο Ανώτερος Εαυτός καθορίζει τα μαθήματα και τη γενική πορεία της ζωής μας όμως με τη γέννηση η μνήμη αυτής της σοφίας χάνεται. Οι ατομικές συνεδρίες αυτογνωσίας βοηθούν στην επανασύνδεση με αυτό το βαθύ κομμάτι της ψυχής. Μέσα από καθοδηγούμενη σύνδεση με τον Ανώτερο Εαυτό, το άτομο αναγνωρίζει τα δώρα, τις προκλήσεις και το νόημα των εμπειριών του απελευθερώνοντας περιοριστικές πεποιθήσεις και ενισχύοντας την εσωτερική γαλήνη.',
  en: 'Before we incarnate, the Higher Self shapes the lessons and overall path of our life, yet that memory fades at birth. Individual self-awareness sessions help you reconnect with that deep part of the soul. Through guided connection with the Higher Self, you recognize the gifts, challenges, and meaning of your experiences—releasing limiting beliefs and strengthening inner peace.',
};

export const selfAwarenessPageConfig: SelfAwarenessPageConfig = {
  intro: {
    sectionExtraClass: 'mb-6',
    backgroundImage: `${siteRoot}/wp-content/uploads/2025/12/cxag1wd6gnkkrxvvueap.jpg`,
    backgroundPosition: 'top center',
    headline: {
      el: 'Ατομικές Συνεδρίες Αυτογνωσίας',
      en: 'Individual self-awareness sessions',
    },
    subline: {
      el: 'Ανακάλυψε τον αυθεντικό σου εαυτό, απελευθέρωσε μπλοκαρίσματα και συνέδεσε το σώμα με την ψυχή σου.',
      en: 'Discover your authentic self, release blocks, and reconnect body and soul.',
    },
    ctaLabel: { el: 'Περισσοτερα', en: 'More' },
    ctaHref: '#about2',
  },
  benefits: {
    sectionTitle: {
      el: 'Οφέλη της θεραπείας',
      en: 'Benefits of the practice',
    },
    cards: [
      {
        title: {
          el: 'Επανένωση με την εσωτερική σοφία',
          en: 'Reunion with inner wisdom',
        },
        body: {
          el: 'Ενεργοποίηση της διαίσθησης, σύνδεση με τη φωνή της ψυχής και ενίσχυση της εμπιστοσύνη στη διαδρομή της ζωής.',
          en: 'Activates intuition, connects you with the voice of the soul, and strengthens trust in your life path.',
        },
        cardInnerExtraClass: 'm-0',
      },
      {
        title: {
          el: 'Απελευθέρωση και αυτογνωσία',
          en: 'Release and self-knowledge',
        },
        body: {
          el: 'Αναγνώριση περιοριστικών μοτίβων και μεταμόρφωσή τους, κατανόηση των εμπειριών και των σχέσεων.',
          en: 'Recognize limiting patterns and transform them; deepen understanding of experiences and relationships.',
        },
      },
      {
        title: {
          el: 'Εσωτερική γαλήνη και ευθυγράμμιση με την αποστολή',
          en: 'Inner peace and alignment with purpose',
        },
        body: {
          el: 'Εσωτερική γαλήνη και ευθυγράμμιση με την αποστολή',
          en: 'Inner calm and alignment with your life mission.',
        },
      },
    ],
  },
  story: {
    containerId: 'about2',
    block1: {
      image: `${siteRoot}/wp-content/uploads/2025/12/xbcpmgmtt7er2icvxlhw.jpg`,
      imageAlt: {
        el: 'Ατομικές Συνεδρίες',
        en: 'Individual sessions',
      },
      title: {
        el: 'Σύνδεση με τον Ανώτερο Εαυτό',
        en: 'Connection with the Higher Self',
      },
      body: storyBodyShared,
      ctaLabel: { el: 'Ενδιαφερομαι', en: 'I am interested' },
      ctaHref: '#interest',
      imageClassName: 'img-fluid wp-image-1177 squareImg',
    },
    block2: {
      image: `${siteRoot}/wp-content/uploads/2025/12/paf5y4vn216w9q2sthmv-scaled.jpg`,
      imageAlt: { el: 'Ατομικές συνεδρίες αυτογνωσίας', en: 'Self-awareness sessions' },
      title: {
        el: 'Απελευθέρωση περιορισμών & ενδυνάμωση',
        en: 'Releasing limits & empowerment',
      },
      body: storyBodyShared,
      ctaLabel: { el: 'Ενδιαφερομαι', en: 'I am interested' },
      ctaHref: '#interest',
      imageClassName: 'img-fluid',
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
        id: 'sa-faq-1',
        question: {
          el: 'Πώς πραγματοποιείται μια ατομική συνεδρία αυτογνωσίας;',
          en: 'How does an individual self-awareness session work?',
        },
        answer: {
          el: 'Κάθε συνεδρία περιλαμβάνει σύνδεση με τον Ανώτερο Εαυτό σου, ενσυνείδητη συζήτηση μεταξύ μας και πρακτικές ενεργειακής απελευθέρωσης μέσω οραματισμών. Ο στόχος είναι να εντοπίσεις περιορισμούς, να κατανοήσεις βαθύτερα τις εμπειρίες σου και να ευθυγραμμιστείς με τον αυθεντικό σου δρόμο.',
          en: 'Each session includes connection with your Higher Self, conscious dialogue between us, and energy-release practices through visualizations. The aim is to notice limitations, understand your experiences more deeply, and align with your authentic path.',
        },
        defaultOpen: true,
      },
      {
        id: 'sa-faq-2',
        question: {
          el: 'Πόσο συχνά χρειάζεται να κάνω συνεδρίες και πόσο διαρκεί;',
          en: 'How often should I come, and how long is a session?',
        },
        answer: {
          el: 'Η συχνότητα και η διάρκεια εξατομικεύονται ανάλογα με τις ανάγκες σου και το στάδιό σου. Συνήθως συζητάμε ένα πλάνο που σε βοηθά να ενσωματώνεις την εμπειρία ανάμεσα στις συνεδρίες, ώστε η αλλαγή να είναι βιώσιμη και σταθερή.',
          en: 'Frequency and length are tailored to your needs and stage. We usually agree on a rhythm that helps you integrate between sessions so change feels sustainable.',
        },
      },
      {
        id: 'sa-faq-3',
        question: {
          el: 'Σε τι μπορεί να με βοηθήσει αυτή η θεραπεία στην καθημερινότητα μου;',
          en: 'How can this work help me in everyday life?',
        },
        answer: {
          el: 'Οι συνεδρίες θα σε βοηθήσουν στο να υλοποιήσεις πιο γρήγορα αυτά που πραγματικά θέλει η ψυχή σου, να κατανοήσεις τα μαθήματα που έχεις έρθει να λάβεις και να διαχειρίζεσαι με περισσότερη συνείδηση τις ανθρώπινες σχέση σου. Επίσης, ενισχύουν τη διαίσθησης, την αυτογνωσία, την εσωτερική γαλήνη και φέρνουν καθαρότερη σύνδεση με την αποστολή σου σε αυτή τη Γη και την ψυχή σου.',
          en: 'They can help you move toward what your soul truly wants, understand the lessons you are here to learn, and relate to others with more awareness. They also strengthen intuition, self-knowledge, inner calm, and a clearer sense of your mission and soul connection.',
        },
      },
      {
        id: 'sa-faq-4',
        question: {
          el: 'Τι μπορεί να νιώσω μετά από μια συνεδρία;',
          en: 'What might I feel after a session?',
        },
        answer: {
          el: 'Πολλοί αναφέρουν αίσθηση απελευθέρωσης, ελαφρότητα, συναισθηματική καθαρότητα, νέα κατανόηση για τις εμπειρίες τους και βαθύτερη ηρεμία. Μερικές φορές εμφανίζονται και εσωτερικές συνειδητοποιήσεις τις επόμενες μέρες.',
          en: 'Many people report a sense of release, lightness, emotional clarity, new insight into their experiences, and deeper calm. Sometimes realizations continue to unfold in the days that follow.',
        },
      },
      {
        id: 'sa-faq-5',
        question: {
          el: 'Χρειάζεται προηγούμενη εμπειρία σε πνευματικές πρακτικές;',
          en: 'Do I need prior experience with spiritual practices?',
        },
        answer: {
          el: 'Όχι. Οι συνεδρίες είναι κατάλληλες για όλους, από αρχάριους μέχρι και άτομα με βαθιά πνευματική πορεία. Η καθοδήγηση προσαρμόζεται πλήρως στις ανάγκες του ατόμου.',
          en: 'No. Sessions are suitable for everyone—from beginners to people with a long spiritual path. Guidance is fully adapted to your needs.',
        },
      },
      {
        id: 'sa-faq-6',
        question: {
          el: 'Οι συνεδρίες γίνονται δια ζώσης ή online;',
          en: 'Are sessions in person or online?',
        },
        answer: {
          el: 'Οι συνεδρίες μπορούν να πραγματοποιηθούν και με τους δύο τρόπους. Η εμπειρία είναι εξίσου αποτελεσματική online, καθώς στηρίζεται στη σύνδεση, τη συνειδητότητα και την ενεργειακή καθοδήγηση.',
          en: 'Sessions can take place both ways. The online experience can be just as effective, as it rests on connection, awareness, and energetic guidance.',
        },
      },
    ],
  },
  interest: {
    sectionId: 'interest',
    title: {
      el: 'Εκδήλωση ενδιαφέροντος',
      en: 'Expression of interest',
    },
    intro: {
      el: 'Συμπλήρωσε τα στοιχεία σου για να μάθεις περισσότερα και να εξασφαλίσεις τη θέση σου',
      en: 'Share your details to learn more and secure your place.',
    },
  },
  inquiry: {
    sideImage: `${siteRoot}/wp-content/uploads/2025/11/hfcoicn0g1yivovi2bug-e1766079745514.jpg`,
    sideImageAlt: {
      el: 'Ατομικές συνεδρίες αυτογνωσίας',
      en: 'Individual self-awareness sessions',
    },
  },
};
