import { useHayc } from '../../hayc/config-context';

export default function SeminarsInterestSection() {
  const { t, config, cp } = useHayc();
  const interest = config.seminarsPageConfig.interest;

  return (
    <section id={interest.sectionId}>
      <div className="container text-center">
        <div className="col">
          <div className="display-header">
            <h2
              className="display-5 fw-bold text-dark text-center m-4"
              {...cp('seminarsPageConfig.interest.title')}
            >
              {t(interest.title)}
            </h2>
          </div>
          <p {...cp('seminarsPageConfig.interest.intro')}>{t(interest.intro)}</p>
          <a
            href={`mailto:${t(interest.email)}`}
            {...cp('seminarsPageConfig.interest.email')}
          >
            {t(interest.email)}
          </a>
        </div>
      </div>
    </section>
  );
}

