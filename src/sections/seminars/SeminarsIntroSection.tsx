import { useHayc } from '../../hayc/config-context';

export default function SeminarsIntroSection() {
  const { t, img, config, cp } = useHayc();
  const intro = config.seminarsPageConfig.intro;
  const bgUrl = img(intro.backgroundImage);

  return (
    <section
      id="intro"
      className={`${intro.sectionExtraClass} padding-large position-relative overflow-hidden min-vh-100 align-content-center`.trim()}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${bgUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: intro.backgroundPosition,
        backgroundSize: 'cover',
      }}
    >
      <div className="container-md">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content pt-5 text-center">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <h1
                  className="text-white fontSize"
                  {...cp('seminarsPageConfig.intro.headline')}
                >
                  {t(intro.headline)}
                </h1>
              </div>
              <p className="text-white" {...cp('seminarsPageConfig.intro.subline')}>
                {t(intro.subline)}
              </p>
              <a
                href={intro.ctaHref}
                className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                {...cp('seminarsPageConfig.intro.ctaLabel')}
              >
                {t(intro.ctaLabel)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

