import { ContactForm } from '../components/ContactForm';
import { useHayc } from '../hayc/config-context';

export default function HomeContactSection() {
  const { t, img, config, cp } = useHayc();
  const contact = config.homePageConfig.contact;
  const footer = config.footerConfig;

  return (
    <section className="padding-medium" id="contact">
      <div className="container">
        <div className="container text-center">
          <div className="col mb-4">
            <div className="display-header">
              <h2
                className="display-5 fw-bold text-dark text-center m-4"
                {...cp('homePageConfig.contact.title')}
              >
                {t(contact.title)}
              </h2>
            </div>
            <p {...cp('homePageConfig.contact.intro')}>{t(contact.intro)}</p>
            <a
              href={`mailto:${t(footer.contactEmail)}`}
              {...cp('footerConfig.contactEmail')}
            >
              {t(footer.contactEmail)}
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="lc-block mb-4 d-flex justify-content-center">
              <img
                src={img(contact.sideImage)}
                alt={t(contact.sideImageAlt)}
                className="imageStyle wp-image-47"
                {...cp('homePageConfig.contact.sideImage')}
              />
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="lc-block mb-4">
              <ContactForm mode="cf7-home-contact" haycTags={['Contact form']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
