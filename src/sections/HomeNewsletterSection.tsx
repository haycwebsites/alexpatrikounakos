import { useState, type FormEvent } from 'react';
import { useHayc } from '../hayc/config-context';

export default function HomeNewsletterSection() {
  const { t, img, config, cp } = useHayc();
  const nl = config.homePageConfig.newsletter;
  const [email, setEmail] = useState('');

  const bgStyle =
    nl.backgroundPattern.trim() !== ''
      ? {
          backgroundImage: `url("${img(nl.backgroundPattern)}")`,
          backgroundRepeat: 'no-repeat' as const,
          backgroundPosition: 'center' as const,
          height: 'auto' as const,
        }
      : undefined;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const to = t(config.footerConfig.contactEmail);
    const subject = encodeURIComponent(t(nl.mailSubject));
    const body = encodeURIComponent(`Email: ${trimmed}\n`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

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
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(nl.emailPlaceholder)}
                  className="border-rounded-40 ps-5 fs-5 mx-auto position-relative newsletter-email-input"
                  autoComplete="email"
                  {...cp('homePageConfig.newsletter.emailPlaceholder')}
                />
                <button
                  type="submit"
                  className="btn btn-subscribe btn-arrow btn-pill btn-medium btn-primary position-absolute newsletter-submit-btn"
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
