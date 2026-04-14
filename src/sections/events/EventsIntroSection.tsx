import { useHayc } from '../../hayc/config-context';

export default function EventsIntroSection() {
  const { t, img, config, cp } = useHayc();
  const intro = config.eventsPageConfig.intro;
  const bgUrl = img(intro.backgroundImage);

  return (
    <section
      id="intro"
      className="mb-6 padding-large position-relative overflow-hidden min-vh-100 align-content-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${bgUrl}")`,
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
                <h1 className="text-white fontSize" {...cp('eventsPageConfig.intro.title')}>
                  {t(intro.title)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

