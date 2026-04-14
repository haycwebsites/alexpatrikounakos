import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReikiIntroSection from '../sections/reiki/ReikiIntroSection';
import ReikiBenefitsSection from '../sections/reiki/ReikiBenefitsSection';
import ReikiStorySection from '../sections/reiki/ReikiStorySection';
import ReikiFaqSection from '../sections/reiki/ReikiFaqSection';
import ReikiInterestSection from '../sections/reiki/ReikiInterestSection';
import ReikiInquirySection from '../sections/reiki/ReikiInquirySection';

export default function ReikiSessionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReikiIntroSection />
        <ReikiBenefitsSection />
        <ReikiStorySection />
        <ReikiFaqSection />
        <ReikiInterestSection />
        <ReikiInquirySection />
      </main>
      <Footer />
    </>
  );
}
