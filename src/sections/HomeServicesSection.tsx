import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';

function isClientRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function HomeServicesSection() {
  const { t, img, config, cp } = useHayc();
  const { cards, moreButtonLabel } = config.homePageConfig.services;

  return (
    <section id="services" className="padding-medium">
      <div className="container-md pt-4">
        <div className="row">
          {cards.map((card, index) => (
            <div key={card.href} className="col-lg-4 col-md-6 mb-4">
              <div className="training-card position-relative">
                <div className="card-img">
                  <img
                    src={img(card.image)}
                    alt={t(card.imageAlt)}
                    className="img-fluid imageBrightness"
                    {...cp(`homePageConfig.services.cards.${index}.image`)}
                  />
                </div>
                <div
                  className={`card-detail position-absolute${card.cardDetailExtraClass ? ` ${card.cardDetailExtraClass}` : ''}`}
                >
                  <h3 className="display-6 fw-bold text-uppercase light">
                    {isClientRoute(card.href) ? (
                      <Link
                        to={card.href}
                        {...cp(`homePageConfig.services.cards.${index}.title`)}
                      >
                        {t(card.title)}
                      </Link>
                    ) : (
                      <a
                        href={card.href}
                        {...cp(`homePageConfig.services.cards.${index}.title`)}
                      >
                        {t(card.title)}
                      </a>
                    )}
                  </h3>
                  <p
                    className="light"
                    {...cp(`homePageConfig.services.cards.${index}.description`)}
                  >
                    {t(card.description)}
                  </p>
                  {isClientRoute(card.href) ? (
                    <Link
                      to={card.href}
                      className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                      {...cp('homePageConfig.services.moreButtonLabel')}
                    >
                      {t(moreButtonLabel)}
                    </Link>
                  ) : (
                    <a
                      href={card.href}
                      className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                      {...cp('homePageConfig.services.moreButtonLabel')}
                    >
                      {t(moreButtonLabel)}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
