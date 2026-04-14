import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';

function isClientRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function Footer() {
  const { t, config, cp } = useHayc();
  const nav = config.navigationConfig;
  const footer = config.footerConfig;

  return (
    <footer
      id="footer"
      className="overflow-hidden padding-large pb-0 bg-dark"
    >
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="footer-menu">
              <div className="image-holder">
                <a
                  className="nav-link text-uppercase text-white fw-bold"
                  href={footer.brandHref}
                  {...cp('footerConfig.brandName')}
                >
                  {t(footer.brandName)}
                </a>
              </div>

              <ul className="social-links list-unstyled d-flex mt-3">
                <li className="pe-3">
                  <a
                    href={nav.socialFacebookHref}
                    className="text-white fs-4"
                    aria-label={t(nav.socialFacebookAria)}
                    {...cp('navigationConfig.socialFacebookAria')}
                  >
                    <i className="bi bi-facebook" aria-hidden />
                  </a>
                </li>
                <li className="pe-3">
                  <a
                    href={nav.socialInstagramHref}
                    className="text-white fs-4"
                    aria-label={t(nav.socialInstagramAria)}
                    {...cp('navigationConfig.socialInstagramAria')}
                  >
                    <i className="bi bi-instagram" aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
            <div className="footer-menu light">
              <ul className="menu-list list-unstyled light">
                <li className="pb-2 light">
                  <a
                    href={footer.privacyPolicyHref}
                    {...cp('footerConfig.privacyPolicyLabel')}
                  >
                    {t(footer.privacyPolicyLabel)}
                  </a>
                </li>
                <li className="pb-2 light">
                  <a
                    href={`mailto:${t(footer.contactEmail)}`}
                    {...cp('footerConfig.contactEmail')}
                  >
                    {t(footer.contactEmail)}
                  </a>
                </li>
                <li
                  className="pb-2 light"
                  {...cp('footerConfig.locationLine')}
                >
                  {t(footer.locationLine)}
                </li>
                <li className="pb-2 light">
                  <a
                    href={`tel:${footer.phoneTel}`}
                    {...cp('footerConfig.phoneDisplay')}
                  >
                    {t(footer.phoneDisplay)}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 pb-3">
            <div className="footer-menu light">
              <ul className="menu-list list-unstyled light">
                {nav.services.map((item, index) => {
                  const cls =
                    index === 4 ? 'dropdown-item text-wrap' : 'dropdown-item';
                  const cProps = cp(
                    `navigationConfig.services.${index}.label`
                  );
                  return (
                    <li key={item.href}>
                      {isClientRoute(item.href) ? (
                        <Link className={cls} to={item.href} {...cProps}>
                          {t(item.label)}
                        </Link>
                      ) : (
                        <a className={cls} href={item.href} {...cProps}>
                          {t(item.label)}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mx-auto text-center text-white pb-5">
          <p>
            <span id="copyright" {...cp('footerConfig.copyrightNotice')}>
              {t(footer.copyrightNotice)}
            </span>{' '}
            <span {...cp('footerConfig.creditMadeBy')}>
              {t(footer.creditMadeBy)}
            </span>{' '}
            <a
              href={footer.creditVendorHref}
              {...cp('footerConfig.creditVendorName')}
            >
              {t(footer.creditVendorName)}
            </a>{' '}
            <span {...cp('footerConfig.creditMadeWith')}>
              {t(footer.creditMadeWith)}
            </span>
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
