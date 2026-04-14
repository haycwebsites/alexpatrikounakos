import { useHayc } from '../../hayc/config-context';

export default function DanceInterestSection() {
  const { t, config, cp } = useHayc();
  const interest = config.dancePageConfig.interest;

  return (
    <section id={interest.sectionId}>
      <div className="container text-center">
        <div className="col">
          <div className="display-header">
            <h2
              className="display-5 fw-bold text-dark text-center m-4"
              {...cp('dancePageConfig.interest.title')}
            >
              {t(interest.title)}
            </h2>
          </div>
          <span {...cp('dancePageConfig.interest.intro')}>{t(interest.intro)}</span>

          <a
            href={`mailto:${t(interest.email)}`}
            {...cp('dancePageConfig.interest.email')}
          >
            {t(interest.email)}
          </a>
        </div>
      </div>
    </section>
  );
}

