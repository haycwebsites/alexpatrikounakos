import { useHayc } from '../../hayc/config-context';

export default function SelfAwarenessBenefitsSection() {
  const { t, config, cp } = useHayc();
  const { sectionTitle, cards } = config.selfAwarenessPageConfig.benefits;

  return (
    <section className="padding-medium">
      <div className="container-md">
        <div className="text-center mb-4">
          <h2
            className="display-5 fw-bold text-dark"
            {...cp('selfAwarenessPageConfig.benefits.sectionTitle')}
          >
            {t(sectionTitle)}
          </h2>
        </div>
        <div className="row gx-4 gy-4">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex">
              <div
                className={`border bg-light text-dark p-4 d-flex flex-column h-100 justify-content-center hoverBox${card.cardInnerExtraClass ? ` ${card.cardInnerExtraClass}` : ''}`}
              >
                <h4
                  className=""
                  {...cp(`selfAwarenessPageConfig.benefits.cards.${index}.title`)}
                >
                  {t(card.title)}
                </h4>
                <p
                  className=""
                  {...cp(`selfAwarenessPageConfig.benefits.cards.${index}.body`)}
                >
                  {t(card.body)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
