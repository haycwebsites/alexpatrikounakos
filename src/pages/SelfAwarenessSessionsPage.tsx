import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SelfAwarenessIntroSection from '../sections/selfAwareness/SelfAwarenessIntroSection';
import SelfAwarenessBenefitsSection from '../sections/selfAwareness/SelfAwarenessBenefitsSection';
import SelfAwarenessStorySection from '../sections/selfAwareness/SelfAwarenessStorySection';
import SelfAwarenessFaqSection from '../sections/selfAwareness/SelfAwarenessFaqSection';
import SelfAwarenessInterestSection from '../sections/selfAwareness/SelfAwarenessInterestSection';
import SelfAwarenessInquirySection from '../sections/selfAwareness/SelfAwarenessInquirySection';

export default function SelfAwarenessSessionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SelfAwarenessIntroSection />
        <SelfAwarenessBenefitsSection />
        <SelfAwarenessStorySection />
        <SelfAwarenessFaqSection />
        <SelfAwarenessInterestSection />
        <SelfAwarenessInquirySection />
      </main>
      <Footer />
    </>
  );
}
