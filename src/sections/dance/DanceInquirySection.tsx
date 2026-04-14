import { ContactForm } from '../../components/ContactForm';
import { useHayc } from '../../hayc/config-context';

export default function DanceInquirySection() {
  const { t, img, config, cp } = useHayc();
  const inquiry = config.dancePageConfig.inquiry;

  return (
    <section className="padding-medium">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="lc-block mb-4 d-flex justify-content-center">
              <img
                className="imageStyle wp-image-47"
                src={img(inquiry.sideImage)}
                alt={t(inquiry.sideImageAlt)}
                {...cp('dancePageConfig.inquiry.sideImage')}
              />
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="lc-block mb-4">
              <ContactForm mode="cf7-service" haycTags={['Dance With Your Heart']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

