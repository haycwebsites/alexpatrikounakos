import { useMemo, useState, useCallback } from 'react';
import { useHayc } from '../hayc/config-context';

type ContactFormMode = 'basic' | 'cf7-service' | 'cf7-home-contact';

const labelsByMode: Record<ContactFormMode, Record<string, { el: string; en: string }>> = {
  basic: {
    nameLabel: { el: 'Όνομα', en: 'Name' },
    emailLabel: { el: 'Email', en: 'Email' },
    messageLabel: { el: 'Μήνυμα', en: 'Message' },
    submitButton: { el: 'Αποστολή', en: 'Send Message' },
    submitting: { el: 'Αποστολή...', en: 'Sending...' },
    mailtoSubjectFallback: { el: 'Επικοινωνία', en: 'Contact' },
    successTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Message sent!' },
    successText: {
      el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
      en: 'We will get back to you shortly.',
    },
    errorText: {
      el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
      en: 'Something went wrong. Please try again.',
    },
    nameRequired: { el: 'Το όνομα είναι υποχρεωτικό.', en: 'Name is required.' },
    emailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
    messageRequired: { el: 'Το μήνυμα είναι υποχρεωτικό.', en: 'Message is required.' },
  },
  'cf7-service': {
    firstNameLabel: { el: 'Το όνομά σου', en: 'Your name' },
    emailLabel: { el: 'Το email σου', en: 'Your email' },
    phoneLabel: { el: 'Το τηλέφωνο σου', en: 'Your phone' },
    subjectLabel: { el: 'Θέμα', en: 'Subject' },
    messageLabel: { el: 'Στείλε μήνυμα (Προαιρετικό)', en: 'Message (optional)' },
    newsletterLabel: { el: 'Subscribe to our newsletter', en: 'Subscribe to our newsletter' },
    submitButton: { el: 'Εγγραφή', en: 'Subscribe' },
    submitting: { el: 'Αποστολή...', en: 'Sending...' },
    mailtoSubjectFallback: { el: 'Επικοινωνία', en: 'Contact' },
    successTitle: { el: 'Η εγγραφή στάλθηκε!', en: 'Request sent!' },
    successText: {
      el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
      en: 'We will get back to you shortly.',
    },
    errorText: {
      el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
      en: 'Something went wrong. Please try again.',
    },
    firstNameRequired: { el: 'Το όνομα είναι υποχρεωτικό.', en: 'Name is required.' },
    emailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
    phoneRequired: { el: 'Το τηλέφωνο είναι υποχρεωτικό.', en: 'Phone is required.' },
    subjectRequired: { el: 'Το θέμα είναι υποχρεωτικό.', en: 'Subject is required.' },
  },
  'cf7-home-contact': {
    firstNameLabel: { el: 'Το όνομά σου', en: 'Your name' },
    emailLabel: { el: 'Το email σου', en: 'Your email' },
    subjectLabel: { el: 'Θέμα', en: 'Subject' },
    messageLabel: { el: 'Στείλε μήνυμα (Προαιρετικό)', en: 'Message (optional)' },
    newsletterLabel: { el: 'Subscribe to our newsletter', en: 'Subscribe to our newsletter' },
    submitButton: { el: 'Εγγραφή', en: 'Subscribe' },
    submitting: { el: 'Αποστολή...', en: 'Sending...' },
    mailtoSubjectFallback: { el: 'Επικοινωνία', en: 'Contact' },
    successTitle: { el: 'Η εγγραφή στάλθηκε!', en: 'Request sent!' },
    successText: {
      el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
      en: 'We will get back to you shortly.',
    },
    errorText: {
      el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
      en: 'Something went wrong. Please try again.',
    },
    firstNameRequired: { el: 'Το όνομα είναι υποχρεωτικό.', en: 'Name is required.' },
    emailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
    subjectRequired: { el: 'Το θέμα είναι υποχρεωτικό.', en: 'Subject is required.' },
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({
  mode = 'basic',
  haycTags,
}: {
  mode?: ContactFormMode;
  haycTags?: string[];
}) {
  const { t, config } = useHayc();
  const envSiteId =
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_HAYC_SITE_ID ??
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_SITE_ID;
  const envApiUrl =
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_HAYC_API_URL ??
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_API_URL;

  const siteId = config.siteConfig.siteId || envSiteId || '';
  const apiUrl = config.siteConfig.apiUrl || envApiUrl || '';
  const labels = useMemo(() => labelsByMode[mode], [mode]);

  const [name, setName] = useState(''); // basic mode
  const [firstName, setFirstName] = useState(''); // cf7-cacao
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterSubscribe, setNewsletterSubscribe] = useState(false);
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    firstName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  }>({});

  const validate = useCallback((): boolean => {
    const errors: {
      name?: string;
      firstName?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    } = {};

    if (mode === 'basic') {
      if (!name.trim()) errors.name = t(labels.nameRequired);
      if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(labels.emailInvalid);
      if (!message.trim()) errors.message = t(labels.messageRequired);
    } else if (mode === 'cf7-service') {
      if (!firstName.trim()) errors.firstName = t(labels.firstNameRequired);
      if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(labels.emailInvalid);
      if (!phone.trim()) errors.phone = t(labels.phoneRequired);
      if (!subject.trim()) errors.subject = t(labels.subjectRequired);
      // message is optional
    } else if (mode === 'cf7-home-contact') {
      if (!firstName.trim()) errors.firstName = t(labels.firstNameRequired);
      if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(labels.emailInvalid);
      if (!subject.trim()) errors.subject = t(labels.subjectRequired);
      // message is optional
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [mode, name, firstName, email, phone, subject, message, t, labels]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      // If backend config isn't available, still "works" by opening a mailto draft.
      if (!apiUrl || !siteId) {
        const to = t(config.footerConfig.contactEmail);
        const mailSubject = encodeURIComponent(subject.trim() || t(labels.mailtoSubjectFallback));
        const mailBody = encodeURIComponent(
          [
            `Name: ${(mode === 'cf7-service' || mode === 'cf7-home-contact' ? firstName : name).trim()}`,
            `Email: ${email.trim()}`,
            phone.trim() ? `Phone: ${phone.trim()}` : '',
            subject.trim() ? `Subject: ${subject.trim()}` : '',
            message.trim() ? `Message: ${message.trim()}` : '',
            newsletterSubscribe ? `Newsletter: yes` : '',
            mode === 'cf7-service' || mode === 'cf7-home-contact'
              ? `Tags: ${(haycTags ?? []).join(', ')}`
              : '',
          ]
            .filter(Boolean)
            .join('\n')
        );

        window.location.href = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`;
        setSubmitted(true);
        return;
      }

      setLoading(true);
      try {
        const endpoint = import.meta.env.DEV ? '/public/contact' : `${apiUrl}/public/contact`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            name: (mode === 'cf7-service' || mode === 'cf7-home-contact' ? firstName : name).trim(),
            email: email.trim(),
            // Keep payload aligned with HAYC's documented shape; include extra details in message.
            message: [
              subject.trim() ? `Subject: ${subject.trim()}` : '',
              phone.trim() ? `Phone: ${phone.trim()}` : '',
              newsletterSubscribe ? `Newsletter: yes` : '',
              mode === 'cf7-service' || mode === 'cf7-home-contact'
                ? (haycTags ?? []).length
                  ? `Tags: ${(haycTags ?? []).join(', ')}`
                  : ''
                : '',
              message.trim(),
            ]
              .filter(Boolean)
              .join('\n'),
            _hp: hp,
          }),
        });
        if (!res.ok) {
          const details = await res.text().catch(() => '');
          let devErrorDetail = '';
          try {
            const parsed = JSON.parse(details) as { error?: string };
            if (parsed?.error) devErrorDetail = parsed.error;
          } catch {
            // ignore non-JSON errors
          }
          console.error('[ContactForm] submit failed', {
            status: res.status,
            statusText: res.statusText,
            details: details?.slice?.(0, 500),
            endpoint,
            apiUrl,
            siteId,
          });

          // In dev, surface the backend reason to avoid guesswork.
          if (import.meta.env.DEV) {
            const msg = devErrorDetail || details || res.statusText || 'Request failed';
            setError(`${t(labels.errorText)} (${res.status}: ${msg})`);
            return;
          }

          throw new Error('Request failed');
        }
        setSubmitted(true);
      } catch {
        setError(t(labels.errorText));
      } finally {
        setLoading(false);
      }
    },
    [
      apiUrl,
      siteId,
      mode,
      name,
      firstName,
      email,
      phone,
      subject,
      message,
      newsletterSubscribe,
      haycTags,
      hp,
      validate,
      t,
      labels,
      config.footerConfig.contactEmail,
    ]
  );

  if (submitted) {
    return (
      <>
        <div className="contact-form-success">
          <h3>{t(labels.successTitle)}</h3>
          <p>{t(labels.successText)}</p>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="wpcf7" noValidate>
        <input
          type="text"
          name="_hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          style={{ display: 'none' }}
          aria-hidden
        />

        {mode === 'basic' ? (
          <label htmlFor="contact-name">
              {t(labels.nameLabel)}
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
              }}
              disabled={loading}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
              autoComplete="name"
            />
            {fieldErrors.name && (
              <p id="contact-name-error" className="contact-form-error">
                {fieldErrors.name}
              </p>
            )}
          </label>
        ) : (
          <label htmlFor="contact-first-name">
              {t(labels.firstNameLabel)}
            <input
              id="contact-first-name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (fieldErrors.firstName)
                  setFieldErrors((prev) => ({ ...prev, firstName: undefined }));
              }}
              disabled={loading}
              aria-invalid={!!fieldErrors.firstName}
              aria-describedby={fieldErrors.firstName ? 'contact-first-name-error' : undefined}
              autoComplete="name"
            />
            {fieldErrors.firstName && (
              <p id="contact-first-name-error" className="contact-form-error">
                {fieldErrors.firstName}
              </p>
            )}
          </label>
        )}

        <label htmlFor="contact-email">
            {t(labels.emailLabel)}
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            disabled={loading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
            autoComplete="email"
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="contact-form-error">
              {fieldErrors.email}
            </p>
          )}
        </label>

        {mode === 'cf7-service' && (
          <>
            <label htmlFor="contact-phone">
                {t(labels.phoneLabel)}
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                disabled={loading}
                aria-invalid={!!fieldErrors.phone}
                aria-describedby={fieldErrors.phone ? 'contact-phone-error' : undefined}
                autoComplete="tel"
              />
              {fieldErrors.phone && (
                <p id="contact-phone-error" className="contact-form-error">
                  {fieldErrors.phone}
                </p>
              )}
            </label>

            <label htmlFor="contact-subject">
                {t(labels.subjectLabel)}
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (fieldErrors.subject)
                    setFieldErrors((prev) => ({ ...prev, subject: undefined }));
                }}
                disabled={loading}
                aria-invalid={!!fieldErrors.subject}
                aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
              />
              {fieldErrors.subject && (
                <p id="contact-subject-error" className="contact-form-error">
                  {fieldErrors.subject}
                </p>
              )}
            </label>
          </>
        )}

        {mode === 'cf7-home-contact' && (
          <label htmlFor="contact-subject">
              {t(labels.subjectLabel)}
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                if (fieldErrors.subject)
                  setFieldErrors((prev) => ({ ...prev, subject: undefined }));
              }}
              disabled={loading}
              aria-invalid={!!fieldErrors.subject}
              aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
            />
            {fieldErrors.subject && (
              <p id="contact-subject-error" className="contact-form-error">
                {fieldErrors.subject}
              </p>
            )}
          </label>
        )}

        <label htmlFor="contact-message">
            {t(labels.messageLabel)}
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }}
            disabled={loading}
            rows={4}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
          />
          {fieldErrors.message && (
            <p id="contact-message-error" className="contact-form-error">
              {fieldErrors.message}
            </p>
          )}
        </label>

        {(mode === 'cf7-service' || mode === 'cf7-home-contact') && (
          <div className="field mt-2">
            <input
              id="newsletter-subscribe"
              type="checkbox"
              checked={newsletterSubscribe}
              onChange={(e) => setNewsletterSubscribe(e.target.checked)}
              disabled={loading}
            />
            <label htmlFor="newsletter-subscribe" style={{ marginLeft: 8 }}>
              {t(labels.newsletterLabel)}
            </label>
            {/* Hidden tag to match CF7 */}
            <input type="hidden" name="hayc-tags" value={(haycTags ?? []).join(', ')} />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? t(labels.submitting) : t(labels.submitButton)}
        </button>

        {error && (
          <p className="contact-form-error" role="alert">
            {error}
          </p>
        )}
      </form>
  );
}
