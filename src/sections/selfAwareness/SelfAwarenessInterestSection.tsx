import { useHayc } from '../../hayc/config-context';

export default function SelfAwarenessInterestSection() {
  const { t, config, cp } = useHayc();
  const interest = config.selfAwarenessPageConfig.interest;
  const footer = config.footerConfig;

  return (
    <section id={interest.sectionId}>
      <div className="container text-center">
        <div className="col">
          <div className="display-header">
            <h2
              className="display-5 fw-bold text-dark text-center m-4"
              {...cp('selfAwarenessPageConfig.interest.title')}
            >
              {t(interest.title)}
            </h2>
          </div>
          <p {...cp('selfAwarenessPageConfig.interest.intro')}>
            {t(interest.intro)}
          </p>
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
