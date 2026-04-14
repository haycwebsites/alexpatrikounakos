import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeminarsIntroSection from '../sections/seminars/SeminarsIntroSection';
import SeminarsBenefitsSection from '../sections/seminars/SeminarsBenefitsSection';
import SeminarsStorySection from '../sections/seminars/SeminarsStorySection';
import SeminarsFaqSection from '../sections/seminars/SeminarsFaqSection';
import SeminarsInterestSection from '../sections/seminars/SeminarsInterestSection';
import SeminarsInquirySection from '../sections/seminars/SeminarsInquirySection';

export default function SeminarsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SeminarsIntroSection />
        <SeminarsBenefitsSection />
        <SeminarsStorySection />
        <SeminarsFaqSection />
        <SeminarsInterestSection />
        <SeminarsInquirySection />
      </main>
      <Footer />
    </>
  );
}

