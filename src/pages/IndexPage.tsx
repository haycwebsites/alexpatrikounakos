// HAYC Pipeline: This file is overwritten during
// project creation with the client's home page
// HTML converted to JSX.
// Source: index.html body content from HTML template.

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeIntroSection from '../sections/HomeIntroSection';
import HomeServicesSection from '../sections/HomeServicesSection';
import HomeAboutSection from '../sections/HomeAboutSection';
import HomeNewsletterSection from '../sections/HomeNewsletterSection';
import HomeVideosSection from '../sections/HomeVideosSection';
import HomeContactSection from '../sections/HomeContactSection';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeIntroSection />
        <HomeServicesSection />
        <HomeAboutSection />
        <HomeNewsletterSection />
        <HomeVideosSection />
        <HomeContactSection />
      </main>
      <Footer />
    </>
  );
}
