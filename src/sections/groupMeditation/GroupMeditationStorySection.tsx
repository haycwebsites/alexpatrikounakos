import { useHayc } from '../../hayc/config-context';

export default function GroupMeditationStorySection() {
  const { t, img, config, cp } = useHayc();
  const { containerId, block1, block2 } = config.groupMeditationPageConfig.story;

  return (
    <section className="padding-medium">
      <div id={containerId} className="container-md">
        <div className="row mb-4 gy-4">
          <div className="col-lg-7 col-md-12">
            <div className="image-holder">
              <img
                src={img(block1.image)}
                alt={t(block1.imageAlt)}
                className={block1.imageClassName}
                {...cp('groupMeditationPageConfig.story.block1.image')}
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-12 align-content-center" data-aos="fade-right">
            <div className="info-detail bg-primary-light h-100 h-100 p-4 align-content-center">
              <h3
                className="text-black mb-4"
                {...cp('groupMeditationPageConfig.story.block1.title')}
              >
                {t(block1.title)}
              </h3>
              <p {...cp('groupMeditationPageConfig.story.block1.body')}>{t(block1.body)}</p>
              <a
                href={block1.ctaHref}
                className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                {...cp('groupMeditationPageConfig.story.block1.ctaLabel')}
              >
                {t(block1.ctaLabel)}
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-5 col-md-12 order-2 order-lg-1 align-content-center"
            data-aos="fade-left"
          >
            <div className="info-detail bg-primary-light h-100 h-100 p-4 align-content-center">
              <h3
                className="text-black mb-4"
                {...cp('groupMeditationPageConfig.story.block2.title')}
              >
                {t(block2.title)}
              </h3>
              <p {...cp('groupMeditationPageConfig.story.block2.body')}>{t(block2.body)}</p>
              <a
                href={block2.ctaHref}
                className="btn btn-primary btn-small text-uppercase mt-3 btn-pill"
                {...cp('groupMeditationPageConfig.story.block2.ctaLabel')}
              >
                {t(block2.ctaLabel)}
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 order-1 order-lg-2">
            <div className="image-holder">
              <img
                src={img(block2.image)}
                alt={t(block2.imageAlt)}
                className={block2.imageClassName}
                {...cp('groupMeditationPageConfig.story.block2.image')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

