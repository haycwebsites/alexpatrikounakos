import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CacaoIntroSection from '../sections/cacao/CacaoIntroSection';
import CacaoBenefitsSection from '../sections/cacao/CacaoBenefitsSection';
import CacaoStorySection from '../sections/cacao/CacaoStorySection';
import CacaoFaqSection from '../sections/cacao/CacaoFaqSection';
import CacaoInterestSection from '../sections/cacao/CacaoInterestSection';
import CacaoInquirySection from '../sections/cacao/CacaoInquirySection';

export default function CacaoCeremonyPage() {
  return (
    <>
      <Navbar />
      <main>
        <CacaoIntroSection />
        <CacaoBenefitsSection />
        <CacaoStorySection />
        <CacaoFaqSection />
        <CacaoInterestSection />
        <CacaoInquirySection />
      </main>
      <Footer />
    </>
  );
}

