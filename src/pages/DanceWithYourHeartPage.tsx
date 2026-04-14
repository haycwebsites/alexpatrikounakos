import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DanceIntroSection from '../sections/dance/DanceIntroSection';
import DanceBenefitsSection from '../sections/dance/DanceBenefitsSection';
import DanceStorySection from '../sections/dance/DanceStorySection';
import DanceFaqSection from '../sections/dance/DanceFaqSection';
import DanceInterestSection from '../sections/dance/DanceInterestSection';
import DanceInquirySection from '../sections/dance/DanceInquirySection';

export default function DanceWithYourHeartPage() {
  return (
    <>
      <Navbar />
      <main>
        <DanceIntroSection />
        <DanceBenefitsSection />
        <DanceStorySection />
        <DanceFaqSection />
        <DanceInterestSection />
        <DanceInquirySection />
      </main>
      <Footer />
    </>
  );
}

