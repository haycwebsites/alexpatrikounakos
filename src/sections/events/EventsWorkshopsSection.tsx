import { useHayc } from '../../hayc/config-context';

export default function EventsWorkshopsSection() {
  const { t, img, config, cp } = useHayc();
  const events = config.eventsPageConfig.events;

  if (events.items.length === 0) return null;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {events.items.map((item, index) => (
                <div key={item.id} className="col-12 mb-4">
                  <div className="lc-block mb-3 d-flex justify-content-center">
                    <img
                      className="img-fluid events-imges"
                      src={img(item.image)}
                      alt={t(item.imageAlt)}
                      {...cp(`eventsPageConfig.events.items.${index}.image`)}
                    />
                  </div>
                  <h3 className="fw-light text-center" {...cp(`eventsPageConfig.events.items.${index}.title`)}>
                    {t(item.title)}
                  </h3>
                  <p
                    className="small text-muted text-center mb-3"
                    {...cp(`eventsPageConfig.events.items.${index}.meta`)}
                  >
                    {t(item.meta)}
                  </p>
                  <p
                    className="small text-muted text-center"
                    {...cp(`eventsPageConfig.events.items.${index}.description`)}
                  >
                    {t(item.description)}
                  </p>
                  <div className="btn_wrapper text-center" data-aos="fade-up">
                    <a
                      href={item.ctaHref}
                      className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                      {...cp(`eventsPageConfig.events.items.${index}.ctaLabel`)}
                    >
                      {t(item.ctaLabel)}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

