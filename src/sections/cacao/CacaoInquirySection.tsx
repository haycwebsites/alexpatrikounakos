import { ContactForm } from '../../components/ContactForm';
import { useHayc } from '../../hayc/config-context';

export default function CacaoInquirySection() {
  const { t, img, config, cp } = useHayc();
  const inquiry = config.cacaoPageConfig.inquiry;

  return (
    <section className="padding-medium">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="lc-block mb-4 d-flex justify-content-center">
              <img
                src={img(inquiry.sideImage)}
                alt={t(inquiry.sideImageAlt)}
                className="imageStyle wp-image-53"
                {...cp('cacaoPageConfig.inquiry.sideImage')}
              />
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="lc-block mb-4">
              <ContactForm mode="cf7-service" haycTags={['Cacao Ceremony']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

