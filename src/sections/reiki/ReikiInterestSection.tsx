import { useHayc } from '../../hayc/config-context';

export default function ReikiInterestSection() {
  const { t, config, cp } = useHayc();
  const interest = config.reikiPageConfig.interest;
  const footer = config.footerConfig;

  return (
    <section id={interest.sectionId}>
      <div className="container text-center">
        <div className="col">
          <div className="display-header">
            <h2
              className="display-5 fw-bold text-dark text-center m-4"
              {...cp('reikiPageConfig.interest.title')}
            >
              {t(interest.title)}
            </h2>
          </div>
          <p {...cp('reikiPageConfig.interest.intro')}>{t(interest.intro)}</p>
          <a
            href={`mailto:${t(footer.contactEmail)}`}
            {...cp('footerConfig.contactEmail')}
          >
            {t(footer.contactEmail)}
          </a>
        </div>
      </div>
    </section>
  );
}
