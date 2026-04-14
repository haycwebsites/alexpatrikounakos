import { useHayc } from '../../hayc/config-context';

export default function GroupMeditationInterestSection() {
  const { t, config, cp } = useHayc();
  const interest = config.groupMeditationPageConfig.interest;

  return (
    <section id={interest.sectionId}>
      <div className="container text-center">
        <div className="col">
          <div className="display-header">
            <h2
              className="display-5 fw-bold text-dark text-center m-4"
              {...cp('groupMeditationPageConfig.interest.title')}
            >
              {t(interest.title)}
            </h2>
          </div>
          <p {...cp('groupMeditationPageConfig.interest.intro')}>{t(interest.intro)}</p>
          <a
            href={`mailto:${t(interest.email)}`}
            {...cp('groupMeditationPageConfig.interest.email')}
          >
            {t(interest.email)}
          </a>
        </div>
      </div>
    </section>
  );
}

