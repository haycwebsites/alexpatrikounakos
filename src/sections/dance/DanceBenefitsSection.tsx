import { useHayc } from '../../hayc/config-context';

export default function DanceBenefitsSection() {
  const { t, config, cp } = useHayc();
  const { sectionTitle, cards } = config.dancePageConfig.benefits;

  return (
    <section className="padding-medium">
      <div className="container-md">
        <div className="text-center mb-4">
          <h2
            className="display-5 fw-bold text-dark"
            {...cp('dancePageConfig.benefits.sectionTitle')}
          >
            {t(sectionTitle)}
          </h2>
        </div>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="border bg-white text-dark p-4 d-flex flex-column h-100 justify-content-center hoverBox">
                <h4 {...cp(`dancePageConfig.benefits.cards.${index}.title`)}>
                  {t(card.title)}
                </h4>
                <span {...cp(`dancePageConfig.benefits.cards.${index}.body`)}>
                  {t(card.body)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

