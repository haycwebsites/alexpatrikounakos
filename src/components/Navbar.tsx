import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';

function isClientRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function Navbar() {
  const { t, config, cp } = useHayc();
  const nav = config.navigationConfig;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header">
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top py-3${scrolled ? ' scrolled' : ''}`}
      >
        {isClientRoute(nav.brandHref) ? (
          <Link
            className="navbar-brand text-uppercase text-white fw-bold m-0"
            to={nav.brandHref}
            {...cp('navigationConfig.brandName')}
          >
            {t(nav.brandName)}
          </Link>
        ) : (
          <a
            className="navbar-brand text-uppercase text-white fw-bold m-0"
            href={nav.brandHref}
            {...cp('navigationConfig.brandName')}
          >
            {t(nav.brandName)}
          </a>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label={t(nav.offcanvasMenuLabel)}
          {...cp('navigationConfig.offcanvasMenuLabel')}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="bdNavbar"
          aria-labelledby="bdNavbarOffcanvasLabel"
        >
          <h2
            className="visually-hidden"
            id="bdNavbarOffcanvasLabel"
            {...cp('navigationConfig.offcanvasMenuLabel')}
          >
            {t(nav.offcanvasMenuLabel)}
          </h2>
          <div className="offcanvas-header pb-0">
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label={t(nav.offcanvasCloseAria)}
              data-bs-target="#bdNavbar"
              {...cp('navigationConfig.offcanvasCloseAria')}
            />
          </div>

          <div className="offcanvas-body text-dark">
            <ul
              id="navbar"
              className="navbar-nav text-uppercase justify-content-lg-end align-items-center flex-grow-1 pe-3"
            >
              <li>
                <a
                  href={nav.socialFacebookHref}
                  className="text-white fs-4 p-3"
                  aria-label={t(nav.socialFacebookAria)}
                  {...cp('navigationConfig.socialFacebookAria')}
                >
                  <i className="bi bi-facebook" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={nav.socialInstagramHref}
                  className="text-white fs-4 p-3"
                  aria-label={t(nav.socialInstagramAria)}
                  {...cp('navigationConfig.socialInstagramAria')}
                >
                  <i className="bi bi-instagram" aria-hidden />
                </a>
              </li>
              <li className="nav-item">
                {isClientRoute(nav.home.href) ? (
                  <Link
                    className="nav-link text-white pe-4 ps-4 fw-bold"
                    to={nav.home.href}
                    {...cp('navigationConfig.home.label')}
                  >
                    {t(nav.home.label)}
                  </Link>
                ) : (
                  <a
                    className="nav-link text-white pe-4 ps-4 fw-bold"
                    href={nav.home.href}
                    {...cp('navigationConfig.home.label')}
                  >
                    {t(nav.home.label)}
                  </a>
                )}
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link text-uppercase text-white fw-bold pe-4 ps-4 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  {...cp('navigationConfig.servicesToggle')}
                >
                  {t(nav.servicesToggle)}
                </a>
                <ul className="dropdown-menu">
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
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-white fw-bold pe-4 ps-4"
                  href={nav.about.href}
                  {...cp('navigationConfig.about.label')}
                >
                  {t(nav.about.label)}
                </a>
              </li>
              <li className="nav-item">
                {isClientRoute(nav.events.href) ? (
                  <Link
                    className="nav-link text-uppercase text-white fw-bold pe-4 ps-4"
                    to={nav.events.href}
                    {...cp('navigationConfig.events.label')}
                  >
                    {t(nav.events.label)}
                  </Link>
                ) : (
                  <a
                    className="nav-link text-uppercase text-white fw-bold pe-4 ps-4"
                    href={nav.events.href}
                    {...cp('navigationConfig.events.label')}
                  >
                    {t(nav.events.label)}
                  </a>
                )}
              </li>
            </ul>

            <div className="btn-box align-content-center align-items-center justify-content-center">
              {isClientRoute(nav.contactCta.href) ? (
                <Link
                  to={nav.contactCta.href}
                  className="btn btn-pill btn-small btn-primary text-uppercase"
                  {...cp('navigationConfig.contactCta.label')}
                >
                  {t(nav.contactCta.label)}
                </Link>
              ) : (
                <a
                  href={nav.contactCta.href}
                  className="btn btn-pill btn-small btn-primary text-uppercase"
                  {...cp('navigationConfig.contactCta.label')}
                >
                  {t(nav.contactCta.label)}
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
