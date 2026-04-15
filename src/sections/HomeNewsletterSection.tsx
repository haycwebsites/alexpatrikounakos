import { useCallback, useState, type FormEvent } from 'react';
import { useHayc } from '../hayc/config-context';

export default function HomeNewsletterSection() {
  const { t, img, config, cp } = useHayc();
  const nl = config.homePageConfig.newsletter;
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);

  const bgStyle =
    nl.backgroundPattern.trim() !== ''
      ? {
          backgroundImage: `url("${img(nl.backgroundPattern)}")`,
          backgroundRepeat: 'no-repeat' as const,
          backgroundPosition: 'center' as const,
          height: 'auto' as const,
        }
      : undefined;

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const envSiteId =
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_HAYC_SITE_ID ??
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_SITE_ID;
    const envApiUrl =
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_HAYC_API_URL ??
      (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_API_URL;

    const siteId = config.siteConfig.siteId || envSiteId || '';
    const apiUrl = config.siteConfig.apiUrl || envApiUrl || '';

    // If backend config isn't available, still work by opening a mailto draft.
    if (!apiUrl || !siteId) {
      const to = t(config.footerConfig.contactEmail);
      const subject = encodeURIComponent(t(nl.mailSubject));
      const body = encodeURIComponent(`Email: ${trimmed}\n`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setEmail('');
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
          email: trimmed,
          name: '',
          message: `Newsletter signup\nEmail: ${trimmed}\n`,
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
        console.error('[Newsletter] submit failed', {
          status: res.status,
          statusText: res.statusText,
          details: details?.slice?.(0, 500),
          endpoint,
          apiUrl,
          siteId,
        });

        if (import.meta.env.DEV) {
          throw new Error(`${res.status}: ${devErrorDetail || details || res.statusText}`);
        }
        throw new Error('Request failed');
      }
      setEmail('');
    } finally {
      setLoading(false);
    }
  }, [email, config, t, nl.mailSubject, hp]);

  return (
    <section id="newsletter" className="padding-medium">
      <div className="container-md">
        <div className="row">
          <div className="newsletter-content" style={bgStyle} data-aos="fade-left">
            <div className="col-lg-8 col-md-10 mx-auto text-center">
              <h2 className="display-2 fw-bold newsletter-title">
                <span {...cp('homePageConfig.newsletter.headingLead')}>
                  {t(nl.headingLead)}
                </span>{' '}
                <span
                  className="d-block newsletter-title-accent"
                  {...cp('homePageConfig.newsletter.headingAccent')}
                >
                  {t(nl.headingAccent)}
                </span>
              </h2>
              <p
                className="mb-5 newsletter-description"
                {...cp('homePageConfig.newsletter.description')}
              >
                {t(nl.description)}
              </p>
              <form
                className="newsletter-form d-flex flex-wrap position-relative mx-auto"
                onSubmit={handleSubmit}
              >
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
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(nl.emailPlaceholder)}
                  className="border-rounded-40 ps-5 fs-5 mx-auto position-relative newsletter-email-input"
                  autoComplete="email"
                  disabled={loading}
                  {...cp('homePageConfig.newsletter.emailPlaceholder')}
                />
                <button
                  type="submit"
                  className="btn btn-subscribe btn-arrow btn-pill btn-medium btn-primary position-absolute newsletter-submit-btn"
                  disabled={loading}
                  {...cp('homePageConfig.newsletter.submitLabel')}
                >
                  {t(nl.submitLabel)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
