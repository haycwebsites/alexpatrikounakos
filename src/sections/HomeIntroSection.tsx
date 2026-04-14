import { useHayc } from '../hayc/config-context';

export default function HomeIntroSection() {
  const { t, img, config, cp } = useHayc();
  const intro = config.homePageConfig.intro;
  const bgUrl = img(intro.backgroundImage);

  return (
    <section
      id="intro"
      className="padding-large position-relative overflow-hidden min-vh-100 align-content-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url("${bgUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
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
                  {...cp('homePageConfig.intro.headline')}
                >
                  {t(intro.headline)}
                </h1>
              </div>
              <p className="text-white" {...cp('homePageConfig.intro.subline')}>
                {t(intro.subline)}
              </p>
              <a
                href={intro.ctaHref}
                className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                {...cp('homePageConfig.intro.ctaLabel')}
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
