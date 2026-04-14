import { useHayc } from '../../hayc/config-context';

export default function ReikiBenefitsSection() {
  const { t, config, cp } = useHayc();
  const { sectionTitle, cards } = config.reikiPageConfig.benefits;

  return (
    <section className="padding-medium">
      <div className="container-md">
        <div className="text-center mb-4">
          <h2
            className="display-5 fw-bold text-dark"
            {...cp('reikiPageConfig.benefits.sectionTitle')}
          >
            {t(sectionTitle)}
          </h2>
        </div>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="border bg-white text-dark p-4 d-flex flex-column h-100 justify-content-center hoverBox">
                <h4 {...cp(`reikiPageConfig.benefits.cards.${index}.title`)}>
                  {t(card.title)}
                </h4>
                <p {...cp(`reikiPageConfig.benefits.cards.${index}.body`)}>
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
