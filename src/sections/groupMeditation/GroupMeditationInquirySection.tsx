import { useHayc } from '../../hayc/config-context';

export default function GroupMeditationInquirySection() {
  const { t, img, config, cp } = useHayc();
  const inquiry = config.groupMeditationPageConfig.inquiry;

  return (
    <section className="padding-medium">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="lc-block mb-4 d-flex justify-content-center">
              <img
                src={img(inquiry.sideImage)}
                alt={t(inquiry.sideImageAlt)}
                className="imageStyle wp-image-47"
                {...cp('groupMeditationPageConfig.inquiry.sideImage')}
              />
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="lc-block mb-4">
              <span {...cp('groupMeditationPageConfig.inquiry.cf7ShortcodeText')}>
                {inquiry.cf7ShortcodeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

